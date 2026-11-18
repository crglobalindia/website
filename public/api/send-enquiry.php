<?php
/**
 * CR Global - B2B Export Enquiry Handler
 * Hostinger Shared Hosting Compatible
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Rate limiting (simple IP check using temporary file/session)
$clientIp = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = sys_get_temp_dir() . '/cr_rate_' . md5($clientIp);
if (file_exists($rateFile) && (time() - filemtime($rateFile)) < 15) {
    http_response_code(429);
    echo json_encode(['success' => false, 'error' => 'Please wait a moment before submitting another enquiry.']);
    exit;
}

// Read and decode input
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data || !is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid enquiry payload']);
    exit;
}

// Honeypot spam check (must be empty)
if (!empty($data['website_url'])) {
    http_response_code(200);
    echo json_encode(['success' => true]); // silent discard for bots
    exit;
}

// Required fields validation
$contactPerson   = trim($data['contactPerson'] ?? '');
$companyName     = trim($data['companyName'] ?? '');
$email           = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$country         = trim($data['country'] ?? '');
$quantity        = floatval($data['quantity'] ?? 0);
$privacyConsent  = !empty($data['privacyConsent']);

if (empty($contactPerson) || empty($companyName) || !$email || empty($country) || $quantity <= 0 || !$privacyConsent) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Please complete all required fields with valid information.']);
    exit;
}

// Optional sanitized fields
$phone           = htmlspecialchars(trim($data['phone'] ?? ''), ENT_QUOTES, 'UTF-8');
$destinationPort = htmlspecialchars(trim($data['destinationPort'] ?? ''), ENT_QUOTES, 'UTF-8');
$product         = htmlspecialchars(trim($data['product'] ?? 'Vermicompost'), ENT_QUOTES, 'UTF-8');
$packaging       = htmlspecialchars(trim($data['packaging'] ?? 'Not specified'), ENT_QUOTES, 'UTF-8');
$specifications  = htmlspecialchars(trim($data['specifications'] ?? 'Standard'), ENT_QUOTES, 'UTF-8');
$testingReq      = htmlspecialchars(trim($data['testingRequirements'] ?? 'None specified'), ENT_QUOTES, 'UTF-8');
$incoterm        = htmlspecialchars(trim($data['incoterm'] ?? 'Not Sure'), ENT_QUOTES, 'UTF-8');
$timeline        = htmlspecialchars(trim($data['timeline'] ?? 'Not specified'), ENT_QUOTES, 'UTF-8');
$notes           = htmlspecialchars(trim($data['notes'] ?? ''), ENT_QUOTES, 'UTF-8');

// Verified recipient (where enquiries are received)
$recipient = 'export@crglobalindia.com';
$isRfq = !empty($data['quantity']) && floatval($data['quantity']) > 0 && !empty($data['destinationPort']);
$subjectPrefix = $isRfq ? "[CR Global RFQ]" : "[CR Global Enquiry]";
$subject = "{$subjectPrefix} {$companyName} ({$country})";

// Format email body
$body = "=================================================\n";
$body .= "   CR GLOBAL B2B INQUIRY NOTIFICATION\n";
$body .= "=================================================\n\n";
$body .= "Submission Date (UTC): " . gmdate('Y-m-d H:i:s') . "\n";
$body .= "Sender IP: " . htmlspecialchars($clientIp, ENT_QUOTES, 'UTF-8') . "\n\n";

$body .= "--- BUYER & CONTACT DETAILS ---\n";
$body .= "Contact Person: {$contactPerson}\n";
$body .= "Company Name:   {$companyName}\n";
$body .= "Business Email: {$email}\n";
$body .= "Phone / WhatsApp: " . ($phone ?: 'Not provided') . "\n";
$body .= "Destination Country: {$country}\n";
$body .= "Destination Port:    " . ($destinationPort ?: 'Not specified') . "\n\n";

$body .= "--- PRODUCT & ORDER SPECIFICATIONS ---\n";
$body .= "Product / Subject:   {$product}\n";
$body .= "Quantity Required:   {$quantity} Metric Tonnes\n";
$body .= "Packaging Format:    {$packaging}\n";
$body .= "Specifications:      {$specifications}\n";
$body .= "Testing Requirements:{$testingReq}\n";
$body .= "Preferred Incoterm:  {$incoterm}\n";
$body .= "Purchase Timeline:   {$timeline}\n\n";

$body .= "--- MESSAGE / NOTES ---\n";
$body .= ($notes ?: 'No additional notes provided.') . "\n\n";
$body .= "Privacy Consent: Accepted\n";
$body .= "=================================================\n";

// Robust email headers compatible with all Hostinger Apache + PHP configurations
$headers  = "From: CR Global Portal <no-reply@crglobalindia.com>\r\n";
$headers .= "Reply-To: {$contactPerson} <{$email}>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: CR Global System Mailer\r\n";

// Send via standard PHP mail
$mailSuccess = @mail($recipient, $subject, $body, $headers);

if ($mailSuccess) {
    @touch($rateFile);
    echo json_encode([
        'success' => true,
        'message' => 'Enquiry transmitted successfully to CR Global Export Desk.'
    ]);
} else {
    // If local environment or host mail not yet configured
    http_response_code(503);
    echo json_encode([
        'success' => false,
        'error' => 'Mail delivery service temporarily unavailable on this host.'
    ]);
}
