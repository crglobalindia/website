import React from 'react';
import { X } from 'lucide-react';
import RFQForm from './RFQForm';

export default function RFQModal({ isOpen, onClose, initialProduct = null, initialContainer = null }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[94vh] overflow-y-auto border border-slate-200">
        
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-navy-900 transition-colors shadow-2xs"
          aria-label="Close RFQ modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-2 sm:p-4">
          <RFQForm
            initialProduct={initialProduct}
            initialContainer={initialContainer}
            onSubmitted={() => {
              // Option to keep open or allow user to close
            }}
          />
        </div>

      </div>

    </div>
  );
}
