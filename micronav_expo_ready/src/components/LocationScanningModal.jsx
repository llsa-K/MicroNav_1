import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function LocationScanningModal() {
  const { showScanningModal, theme } = useContext(AppContext);
  if (!showScanningModal) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full text-center" style={{ backgroundColor: theme.colors.card, color: theme.colors.text }}>
        <div className="mb-4">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl" style={{ background: theme.colors.primary }}>📱</div>
          <h3 className="font-bold text-xl mb-2">Scanning Location...</h3>
          <p>Using beacons to determine your precise location...</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div className="h-2.5 rounded-full animate-pulse" style={{ width: '60%', background: theme.colors.primary }}></div>
        </div>
        <p className="text-sm mb-4">Please keep your device still for accurate positioning.</p>
      </div>
    </div>
  );
}
