import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function ElevatorDetectionModal() {
  const { showElevatorModal, detectedFloor, setShowElevatorModal, theme } = useContext(AppContext);
  if (!showElevatorModal) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full text-center" style={{ backgroundColor: theme.colors.card, color: theme.colors.text }}>
        <div className="mb-4">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl" style={{ background: theme.colors.primary }}>🔍</div>
          <h3 className="font-bold text-xl mb-2">Detecting Floor...</h3>
          {detectedFloor ? (<p>Floor detected: {detectedFloor === 'f1' ? 'Ground Floor' : `Floor ${detectedFloor.substring(1)}`}</p>) : (<p>Using beacons to determine your current floor...</p>)}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div className="h-2.5 rounded-full animate-pulse" style={{ width: detectedFloor ? '100%' : '70%', background: theme.colors.primary }}></div>
        </div>
        {detectedFloor && (<button className="py-2 px-4 rounded text-white font-bold" style={{ background: theme.colors.primary }} onClick={() => setShowElevatorModal(false)}>Continue</button>)}
      </div>
    </div>
  );
}
