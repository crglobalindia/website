import React, { useState } from 'react';
import { Calculator, Container, Box, Info, ArrowRight, CheckCircle2 } from 'lucide-react';
import { products } from '../../data/products';

export default function ContainerCalculator({ onOpenRFQWithData }) {
  const [selectedProductId, setSelectedProductId] = useState(products[0].id);
  const [containerType, setContainerType] = useState('20ft'); // '20ft' or '40ft'
  const [bagWeightKg, setBagWeightKg] = useState(25); // 25kg, 50kg, 1000kg

  const product = products.find(p => p.id === selectedProductId) || products[0];

  // Weight payload logic based on container standards & volumetric density
  const getCapacityEstimates = () => {
    let maxMetricTons = containerType === '20ft' ? 14 : 26;

    if (product.category === 'grains') {
      maxMetricTons = containerType === '20ft' ? 26 : 27; // Dense grains
    } else if (product.category === 'oilseeds') {
      maxMetricTons = containerType === '20ft' ? 19 : 26;
    } else if (product.id === 'red-dry-chilli') {
      maxMetricTons = containerType === '20ft' ? 7 : 14.5; // Volumetric bulk
    } else if (product.id === 'psyllium-husk') {
      maxMetricTons = containerType === '20ft' ? 10 : 20; // Volumetric fiber
    }

    const netKg = maxMetricTons * 1000;
    const totalBags = Math.floor(netKg / bagWeightKg);

    return {
      maxMetricTons,
      netKg,
      totalBags
    };
  };

  const { maxMetricTons, netKg, totalBags } = getCapacityEstimates();

  const handleLaunchQuote = () => {
    if (onOpenRFQWithData) {
      onOpenRFQWithData({
        productName: product.name,
        containerType: `${containerType.toUpperCase()} FCL`,
        packaging: `${bagWeightKg} kg Bags (${totalBags} bags / ~${maxMetricTons} MT)`
      });
    }
  };

  return (
    <div className="bg-slate-900 text-white rounded-2xl border border-navy-700/80 p-6 sm:p-8 shadow-xl">
      
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-navy-800 gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>OCEAN FREIGHT ESTIMATION TOOL</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white mt-1">
            Interactive FCL Container Stuffing Calculator
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Calculate exact net tonnage, bag count, and container requirements for your planned shipment.
          </p>
        </div>

        <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-navy-800 border border-navy-700 text-emerald-400 self-start sm:self-center font-bold">
          LIVE ESTIMATOR
        </div>
      </div>

      {/* Calculator Form */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-b border-navy-800">
        
        {/* Step 1: Select Commodity */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-300 block uppercase font-mono">
            1. Select Commodity
          </label>
          <select
            value={selectedProductId}
            onChange={(e) => setSelectedProductId(e.target.value)}
            className="w-full text-xs sm:text-sm bg-navy-950 border border-navy-700 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
          >
            {products.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} (HS: {p.hsCode})
              </option>
            ))}
          </select>
          <span className="text-[11px] text-slate-400 block">
            Category: {product.categoryLabel}
          </span>
        </div>

        {/* Step 2: Container Size */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-300 block uppercase font-mono">
            2. Container Standard
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setContainerType('20ft')}
              className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                containerType === '20ft'
                  ? 'bg-amber-500 text-navy-950 border-amber-400 shadow-md'
                  : 'bg-navy-950 text-slate-300 border-navy-700 hover:border-slate-500'
              }`}
            >
              <Container className="w-5 h-5" />
              <span>20ft Dry FCL</span>
            </button>

            <button
              type="button"
              onClick={() => setContainerType('40ft')}
              className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                containerType === '40ft'
                  ? 'bg-amber-500 text-navy-950 border-amber-400 shadow-md'
                  : 'bg-navy-950 text-slate-300 border-navy-700 hover:border-slate-500'
              }`}
            >
              <Container className="w-5 h-5" />
              <span>40ft High Cube FCL</span>
            </button>
          </div>
        </div>

        {/* Step 3: Bag Size */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-300 block uppercase font-mono">
            3. Packaging Bag Unit
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[25, 50, 1000].map((kg) => (
              <button
                key={kg}
                type="button"
                onClick={() => setBagWeightKg(kg)}
                className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                  bagWeightKg === kg
                    ? 'bg-amber-500 text-navy-950 border-amber-400 shadow-md'
                    : 'bg-navy-950 text-slate-300 border-navy-700 hover:border-slate-500'
                }`}
              >
                <Box className="w-4 h-4" />
                <span>{kg === 1000 ? '1 Ton Jumbo' : `${kg} kg Bag`}</span>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Results Output Strip */}
      <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
        
        <div className="bg-navy-950 border border-navy-800 rounded-xl p-4 text-center sm:text-left">
          <span className="text-[11px] text-slate-400 font-mono uppercase block">Estimated Net Payload</span>
          <div className="text-2xl font-extrabold text-amber-400 font-display mt-0.5">
            ~{maxMetricTons} <span className="text-sm text-slate-300">Metric Tons</span>
          </div>
          <span className="text-[11px] text-slate-500">Approx. {netKg.toLocaleString()} Kilograms</span>
        </div>

        <div className="bg-navy-950 border border-navy-800 rounded-xl p-4 text-center sm:text-left">
          <span className="text-[11px] text-slate-400 font-mono uppercase block">Total Bag Count</span>
          <div className="text-2xl font-extrabold text-emerald-400 font-display mt-0.5">
            ~{totalBags.toLocaleString()} <span className="text-sm text-slate-300">{bagWeightKg === 1000 ? 'Jumbo Bags' : 'Bags'}</span>
          </div>
          <span className="text-[11px] text-slate-500">Based on {bagWeightKg} kg packaging</span>
        </div>

        <div className="flex flex-col justify-center">
          <button
            onClick={handleLaunchQuote}
            className="w-full bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <span>Lock in Quote for This Config</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
