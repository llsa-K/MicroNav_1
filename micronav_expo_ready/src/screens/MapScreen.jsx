import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ElevatorDetectionModal from '../components/ElevatorDetectionModal';
import LocationScanningModal from '../components/LocationScanningModal';

export default function MapScreen() {
  const { theme, buildings, selectedBuilding, setSelectedBuilding, selectedFloorMap, setSelectedFloorMap, floorMaps, userRole, scanMyLocation, detectCurrentFloor, userLocation, selectedDestination, showNavigationPath, selectDestination, locations } = useContext(AppContext);

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: theme.colors.background }}>
      <header className="p-4 shadow-md" style={{ background: theme.colors.primary, color: 'white' }}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Maps</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded hover:bg-white hover:bg-opacity-20" onClick={()=>{}}>Back to Dashboard</button>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4" style={{ color: theme.colors.text }}>Select Building</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {buildings.map(b=> (
              <button key={b.id} className="p-4 rounded-lg border flex items-center" style={{
                borderColor: selectedBuilding?.id === b.id ? theme.colors.primary : theme.colors.border,
                backgroundColor: selectedBuilding?.id === b.id ? (theme.dark ? '#1a365d' : '#ebf8ff') : theme.colors.card,
                color: theme.colors.text
              }} onClick={()=>setSelectedBuilding(b)}>
                <img src={b.image} alt={b.name} className="w-12 h-12 object-cover rounded mr-4" />
                <div className="text-left"><h4 className="font-bold">{b.name}</h4><p className="text-sm">{b.floors} floors</p></div>
              </button>
            ))}
          </div>
        </div>
        {selectedBuilding && (
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4" style={{ color: theme.colors.text }}>Select Floor</h3>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: selectedBuilding.floors }, (_, i) => (
                <button key={i} className="py-2 px-4 rounded-lg border" style={{
                  borderColor: selectedFloorMap?.id === `${selectedBuilding.id}-f${i+1}` ? theme.colors.primary : theme.colors.border,
                  backgroundColor: selectedFloorMap?.id === `${selectedBuilding.id}-f${i+1}` ? (theme.dark ? '#1a365d' : '#ebf8ff') : theme.colors.card,
                  color: theme.colors.text
                }} onClick={()=>setSelectedFloorMap(floorMaps[`${selectedBuilding.id}-f${i+1}`])}>
                  {i === 0 ? 'Ground Floor' : `Floor ${i}`}
                </button>
              ))}
            </div>
          </div>
        )}
        {selectedFloorMap && (
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold" style={{ color: theme.colors.text }}>{selectedFloorMap.name}</h3>
              <div className="flex space-x-2">
                <button className="py-1 px-3 rounded text-white text-sm" style={{ background: theme.colors.primary }} onClick={scanMyLocation}>Scan My Location</button>
                {userRole === 'admin' && <button className="py-1 px-3 rounded text-white text-sm" style={{ background: theme.colors.secondary }}>Add Node</button>}
              </div>
            </div>
            <div className="border rounded-lg p-4 relative" style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.card }}>
              <img src={selectedFloorMap.image} alt={selectedFloorMap.name} className="w-full h-auto" />
              {selectedFloorMap.hasElevator && (
                <div className="absolute w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ top: '200px', left: '300px', background: theme.colors.primary, border: '2px solid white', boxShadow: '0 0 0 2px rgba(0,0,0,0.1)' }} onClick={detectCurrentFloor}>🛗</div>
              )}
              <div className="absolute w-8 h-8 rounded-full flex items-center justify-center animate-pulse" style={{ top: `${userLocation.y}px`, left: `${userLocation.x}px`, background: 'rgba(25, 118, 210, 0.3)', border: '2px solid #1976d2' }}><div className="w-4 h-4 rounded-full" style={{ background: '#1976d2' }}></div></div>
              {selectedDestination && showNavigationPath && (
                <div>
                  <div className="absolute w-8 h-8 rounded-full flex items-center justify-center" style={{ top: `${selectedDestination.y}px`, left: `${selectedDestination.x}px`, background: 'rgba(244, 67, 54, 0.3)', border: '2px solid #f44336' }}><div className="w-4 h-4 rounded-full" style={{ background: '#f44336' }}></div></div>
                  <svg className="absolute top-0 left-0 w-full h-full" style={{ pointerEvents: 'none' }}><path d={`M${userLocation.x + 4},${userLocation.y + 4} L${selectedDestination.x + 4},${selectedDestination.y + 4}`} stroke="#1976d2" strokeWidth="3" strokeDasharray="5,5" fill="none"/></svg>
                  <div className="absolute px-2 py-1 rounded bg-white text-xs font-bold" style={{ top: `${(userLocation.y + selectedDestination.y) / 2}px`, left: `${(userLocation.x + selectedDestination.x) / 2}px`, transform: 'translate(-50%, -50%)', border: '1px solid #1976d2', color: '#1976d2' }}>{Math.round(Math.sqrt(Math.pow(userLocation.x - selectedDestination.x, 2) + Math.pow(userLocation.y - selectedDestination.y, 2)) / 10)} m</div>
                </div>
              )}
              {locations.filter(loc => loc.building === selectedBuilding?.id && loc.floor === selectedFloorMap.id.split('-')[1]).map(location=> (
                <div key={location.id} className="absolute w-6 h-6 rounded-full flex items-center justify-center cursor-pointer" style={{ top: `${location.y}px`, left: `${location.x}px`, background: location.type === 'room' ? '#4caf50' : '#f44336', border: '2px solid white', transform: 'translate(-50%, -50%)' }} onClick={()=>selectDestination(location)}>{location.type === 'room' ? '🚪' : '📍'}</div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4" style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.card }}>
                <h4 className="font-bold mb-2" style={{ color: theme.colors.text }}>Legend</h4>
                <div className="space-y-2">
                  <div className="flex items-center"><div className="w-4 h-4 rounded-full mr-2" style={{ background: '#1976d2' }}></div><span style={{ color: theme.colors.text }}>Your Location</span></div>
                  <div className="flex items-center"><div className="w-4 h-4 rounded-full mr-2" style={{ background: '#f44336' }}></div><span style={{ color: theme.colors.text }}>Points of Interest</span></div>
                  <div className="flex items-center"><div className="w-4 h-4 rounded-full mr-2" style={{ background: '#4caf50' }}></div><span style={{ color: theme.colors.text }}>Rooms</span></div>
                  <div className="flex items-center"><div className="w-4 h-4 rounded-full mr-2" style={{ background: '#ff9800' }}></div><span style={{ color: theme.colors.text }}>Exits</span></div>
                </div>
              </div>
              <div className="border rounded-lg p-4" style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.card }}>
                <h4 className="font-bold mb-2" style={{ color: theme.colors.text }}>Floor Information</h4>
                <div className="space-y-2">
                  <p style={{ color: theme.colors.text }}>Building: {selectedBuilding?.name}</p>
                  <p style={{ color: theme.colors.text }}>Floor: {selectedFloorMap?.id.split('-')[1] === 'f1' ? 'Ground Floor' : `Floor ${selectedFloorMap?.id.split('-')[1].substring(1)}`}</p>
                  <p style={{ color: theme.colors.text }}>Has Elevator: {selectedFloorMap?.hasElevator ? 'Yes' : 'No'}</p>
                  {selectedDestination && <div className="mt-4 p-2 rounded" style={{ backgroundColor: theme.dark ? '#1a365d' : '#ebf8ff' }}><p className="font-bold" style={{ color: theme.colors.text }}>Selected Destination:</p><p style={{ color: theme.colors.text }}>{selectedDestination.name}</p><button className="mt-2 py-1 px-2 rounded text-white text-xs" style={{ background: theme.colors.primary }} onClick={()=>{}}>Toggle Path</button></div>}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <footer className="p-4 border-t" style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.card, color: theme.colors.text }}><div className="container mx-auto text-center"><p>&copy; 2025 MicroNav. All rights reserved.</p></div></footer>
      <ElevatorDetectionModal /><LocationScanningModal />
    </div>
