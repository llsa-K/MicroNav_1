import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function IndustryInfoModal() {
  const { showIndustryInfo, selectedIndustry, setShowIndustryInfo, setSelectedIndustry, industries, theme } = useContext(AppContext);

  if (!showIndustryInfo || !selectedIndustry) return null;
  const industry = industries.find(i => i.id === selectedIndustry);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full" style={{ backgroundColor: theme.colors.card, color: theme.colors.text }}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-xl flex items-center"><span className="mr-2 text-2xl">{industry.icon}</span>{industry.name}</h3>
          <button className="text-gray-500 hover:text-gray-700" onClick={() => { setShowIndustryInfo(false); setSelectedIndustry(null); }}>✕</button>
        </div>
        <p className="mb-4">{industry.description}</p>
        <h4 className="font-bold mb-2">Key Benefits</h4>
        <ul className="mb-4 list-disc pl-5">{industry.benefits.map((b,i)=>(<li key={i} className="mb-1">{b}</li>))}</ul>
        <h4 className="font-bold mb-2">Use Case Example</h4>
        <p className="mb-4">{industry.useCase}</p>
        <div className="flex justify-end">
          <button className="py-2 px-4 rounded text-white font-bold" style={{ background: theme.colors.primary }} onClick={() => { setShowIndustryInfo(false); setSelectedIndustry(null); }}>Close</button>
        </div>
      </div>
    </div>
  );
}
