import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import LoginFormModal from '../components/LoginFormModal';
import IndustryInfoModal from '../components/IndustryInfoModal';
import ElevatorDetectionModal from '../components/ElevatorDetectionModal';
import LocationScanningModal from '../components/LocationScanningModal';
import SearchResultsDropdown from '../components/SearchResultsDropdown';

export default function DashboardScreen() {
  const { theme, currentUser, userRole, logout, searchDestination, setSearchDestination, searchForDestination, showSearchResults } = useContext(AppContext);

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: theme.colors.background }}>
      <header className="p-4 shadow-md" style={{ background: theme.colors.primary, color: 'white' }}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MicroNav</h1>
          <div className="flex items-center space-x-4">
            <span>{currentUser?.name}</span>
            <button className="p-2 rounded hover:bg-white hover:bg-opacity-20" onClick={logout}>Logout</button>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <div className="p-6 rounded-lg shadow-lg mb-8" style={{ backgroundColor: theme.colors.card, color: theme.colors.text }}>
          <h2 className="text-2xl font-bold mb-4">Welcome, {currentUser?.name}!</h2>
          <p className="mb-4">{userRole === 'admin' ? 'Manage your buildings, beacons, and track users with the admin dashboard.' : 'Navigate indoor spaces with precision using MicroNav.'}</p>
          <div className="mb-6">
            <h3 className="font-bold mb-2">Where would you like to go?</h3>
            <div className="relative">
              <input type="text" placeholder="Search for a room, office, or point of interest..." className="w-full p-3 pl-10 border rounded-lg"
                style={{ borderColor: theme.colors.border, color: theme.colors.text, backgroundColor: theme.dark ? '#2d3748' : 'white' }}
                value={searchDestination} onChange={(e)=>setSearchDestination(e.target.value)} onKeyPress={(e)=>e.key==='Enter' && searchForDestination()} />
              <span className="absolute left-3 top-3">🔍</span>
              <button className="absolute right-3 top-3 bg-blue-500 text-white rounded px-3 py-1" style={{ backgroundColor: theme.colors.primary }} onClick={searchForDestination}>Search</button>
              {showSearchResults && <SearchResultsDropdown />}
            </div>
          </div>
          {/* Role-specific buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <button className="p-4 rounded-lg text-white font-bold" style={{ background: theme.colors.primary }}>Upload Floor Map</button>
            <button className="p-4 rounded-lg text-white font-bold" style={{ background: theme.colors.secondary }}>Manage Nodes</button>
            <button className="p-4 rounded-lg text-white font-bold" style={{ background: theme.colors.accent }}>Detect Floor</button>
          </div>
        </div>

        {/* Buildings Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4" style={{ color: theme.colors.text }}>Buildings</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* buildings from context will render here in real app */}
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4" style={{ color: theme.colors.text }}>Industry Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* industry cards */}
          </div>
          <div className="mt-4 text-center"><button className="py-2 px-4 rounded text-white font-bold" style={{ background: theme.colors.secondary }}>View All Industries</button></div>
        </div>
      </main>
      <footer className="p-4 border-t" style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.card, color: theme.colors.text }}>
        <div className="container mx-auto text-center"><p>&copy; 2025 MicroNav. All rights reserved.</p></div>
      </footer>
      <LoginFormModal />
      <IndustryInfoModal />
      <ElevatorDetectionModal />
      <LocationScanningModal />
    </div>
  );
}
