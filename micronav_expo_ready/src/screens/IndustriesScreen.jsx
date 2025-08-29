import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import IndustryInfoModal from '../components/IndustryInfoModal';

export default function IndustriesScreen() {
  const { theme, industries, navigateTo, setSelectedIndustry, setShowIndustryInfo } = useContext(AppContext);
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: theme.colors.background }}>
      <header className="p-4 shadow-md" style={{ background: theme.colors.primary, color: 'white' }}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Industry Solutions</h1>
          <div className="flex items-center space-x-4"><button className="p-2 rounded hover:bg-white hover:bg-opacity-20" onClick={()=>navigateTo('Dashboard')}>Back to Dashboard</button></div>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map(ind=> (
            <div key={ind.id} className="border rounded-lg overflow-hidden shadow-lg" style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.card }}>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-4" style={{ background: theme.colors.primary }}>{ind.icon}</div>
                  <h3 className="text-xl font-bold" style={{ color: theme.colors.text }}>{ind.name}</h3>
                </div>
                <p className="mb-4" style={{ color: theme.colors.text }}>{ind.description}</p>
                <h4 className="font-bold mb-2" style={{ color: theme.colors.text }}>Key Benefits</h4>
                <ul className="mb-4 list-disc pl-5">{ind.benefits.slice(0,2).map((b,i)=>(<li key={i} className="mb-1" style={{ color: theme.colors.text }}>{b}</li>))}</ul>
                <button className="py-2 px-4 rounded text-white font-bold" style={{ background: theme.colors.primary }} onClick={()=>{ setSelectedIndustry(ind.id); setShowIndustryInfo(true); }}>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="p-4 border-t" style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.card, color: theme.colors.text }}><div className="container mx-auto text-center"><p>&copy; 2025 MicroNav. All rights reserved.</p></div></footer>
      <IndustryInfoModal />
    </div>
