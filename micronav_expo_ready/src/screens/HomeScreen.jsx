import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import LoginFormModal from '../components/LoginFormModal';
import IndustryInfoModal from '../components/IndustryInfoModal';

export default function HomeScreen() {
  const { theme, loginWithGoogle, setShowLoginForm, setLoginType, setLoginError } = useContext(AppContext);

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: theme.colors.background }}>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-blue-900 opacity-90"></div>
        <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">MicroNav</h1>
          <h2 className="text-xl md:text-2xl mb-8 text-center">Indoor Campus Navigation Assistant</h2>
          <p className="text-lg mb-8 max-w-2xl text-center">Precision indoor navigation powered by microlocation technology. Navigate complex buildings with ease.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="py-3 px-8 rounded-full text-white font-bold text-lg" style={{ background: theme.colors.primary }} onClick={() => loginWithGoogle('user')}>User Login</button>
            <button className="py-3 px-8 rounded-full text-white font-bold text-lg" style={{ background: theme.colors.secondary }} onClick={() => loginWithGoogle('admin')}>Admin Login</button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4" style={{ backgroundColor: theme.dark ? '#1a202c' : '#f8f9fa' }}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: theme.colors.text }}>Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: theme.colors.card, color: theme.colors.text }}>
              <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center text-2xl" style={{ background: theme.colors.primary }}>📍</div>
              <h3 className="text-xl font-bold mb-2">Precise Indoor Positioning</h3>
              <p>Accurate to within 1-2 meters using advanced microlocation technology and beacons.</p>
            </div>
            <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: theme.colors.card, color: theme.colors.text }}>
              <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center text-2xl" style={{ background: theme.colors.secondary }}>🗺️</div>
              <h3 className="text-xl font-bold mb-2">Interactive Maps</h3>
              <p>Detailed floor plans with points of interest, routes, and real-time updates.</p>
            </div>
            <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: theme.colors.card, color: theme.colors.text }}>
              <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center text-2xl" style={{ background: theme.colors.accent }}>📱</div>
              <h3 className="text-xl font-bold mb-2">Cross-Platform</h3>
              <p>Available on iOS, Android, and web browsers for seamless navigation across devices.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Solutions Section */}
      <div className="py-16 px-4" style={{ backgroundColor: theme.dark ? '#0f172a' : '#e9ecef' }}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: theme.colors.text }}>Industry Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Industry cards are rendered in Dashboard/Industries using context; for home we will show via context usage in Dashboard */}
            <p style={{ color: theme.colors.text }}>See industry solutions in the dashboard after login.</p>
          </div>
        </div>
      </div>

      {/* Mobile Preview Section */}
      <div className="py-16 px-4" style={{ backgroundColor: theme.dark ? '#1a202c' : '#ffffff' }}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: theme.colors.text }}>Mobile Experience</h2>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: theme.colors.text }}>Seamless Navigation on the Go</h3>
              <p className="mb-4" style={{ color: theme.colors.text }}>MicroNav is designed for mobile-first experiences, providing intuitive navigation and real-time positioning on your smartphone.</p>
              <ul className="space-y-2">
                <li className="flex items-center"><span className="mr-2 text-green-500">✓</span><span style={{ color: theme.colors.text }}>Responsive design for all screen sizes</span></li>
                <li className="flex items-center"><span className="mr-2 text-green-500">✓</span><span style={{ color: theme.colors.text }}>Optimized for one-handed operation</span></li>
                <li className="flex items-center"><span className="mr-2 text-green-500">✓</span><span style={{ color: theme.colors.text }}>Works offline with cached maps</span></li>
                <li className="flex items-center"><span className="mr-2 text-green-500">✓</span><span style={{ color: theme.colors.text }}>Low battery consumption</span></li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative" style={{ width: '280px', height: '580px' }}>
                <div className="absolute inset-0 border-8 border-gray-800 rounded-3xl shadow-lg" style={{ backgroundColor: '#000' }}></div>
                <div className="absolute inset-0 m-1 rounded-2xl overflow-hidden">
                  <div className="h-full flex flex-col" style={{ backgroundColor: theme.colors.background }}>
                    <div className="p-4 shadow-md" style={{ background: theme.colors.primary }}>
                      <div className="flex justify-between items-center">
                        <h1 className="text-white text-xl font-bold">MicroNav</h1>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center"><span>👤</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow p-4 overflow-y-auto">
                      <div className="p-4 rounded-lg shadow-md mb-4" style={{ background: theme.colors.primary, color: 'white' }}>
                        <h2 className="text-lg font-bold mb-2">Welcome!</h2>
                        <p className="mb-4 text-sm">Where would you like to go today?</p>
                        <div className="relative mb-4">
                          <input type="text" placeholder="Search..." className="w-full p-2 pl-8 text-sm border rounded-lg" style={{ borderColor: '#e9ecef', color: '#212529', backgroundColor: 'white' }} />
                          <span className="absolute left-2 top-2">🔍</span>
                          <button className="absolute right-2 top-2 bg-blue-500 text-white rounded px-2 py-1 text-xs" style={{ backgroundColor: theme.colors.primary }}>Go</button>
                        </div>
                        <button className="py-2 px-4 rounded text-white font-bold w-full text-sm" style={{ background: 'rgba(255, 255, 255, 0.2)' }}>Scan My Location</button>
                      </div>
                      <div className="mb-4">
                        <h3 className="font-bold mb-2 text-sm">Buildings</h3>
                        <div className="flex overflow-x-auto space-x-3 pb-2">
                          {/* sample placeholders */}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <button className="py-2 px-3 rounded flex items-center justify-center text-white font-bold text-xs" style={{ background: theme.colors.primary }}><span className="mr-1">📷</span> Scan QR</button>
                        <button className="py-2 px-3 rounded flex items-center justify-center text-white font-bold text-xs" style={{ background: theme.colors.success }}><span className="mr-1">🚨</span> Report</button>
                      </div>
                    </div>
                    <div className="border-t flex justify-around p-2" style={{ backgroundColor: '#ffffff', borderColor: '#e9ecef' }}>
                      <button className="flex flex-col items-center p-1" style={{ color: theme.colors.primary }}><span>🏠</span><span className="text-xs">Home</span></button>
                      <button className="flex flex-col items-center p-1" style={{ color: '#212529' }}><span>🗺️</span><span className="text-xs">Map</span></button>
                      <button className="flex flex-col items-center p-1" style={{ color: '#212529' }}><span>📷</span><span className="text-xs">Scan</span></button>
                      <button className="flex flex-col items-center p-1" style={{ color: '#212529' }}><span>⚙️</span><span className="text-xs">Settings</span></button>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4" style={{ backgroundColor: theme.dark ? '#1a202c' : '#2d3748', color: 'white' }}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">MicroNav</h3>
              <p className="max-w-xs">Precision indoor navigation for complex buildings and campuses.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Features</a></li>
                <li><a href="#" className="hover:underline">Industries</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center"><p>&copy; 2025 MicroNav. All rights reserved.</p></div>
        </div>
      </footer>

      <LoginFormModal />
      <IndustryInfoModal />
    </div>
