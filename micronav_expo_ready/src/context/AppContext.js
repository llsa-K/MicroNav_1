import React, { createContext, useState } from 'react';
import users from '../constants/users';
import buildings from '../constants/buildings';
import floorMaps from '../constants/floorMaps';
import industries from '../constants/industries';
import locations from '../constants/locations';
import themeConfig from '../constants/theme';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [darkMode, setDarkMode] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loginError, setLoginError] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginType, setLoginType] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showNodeModal, setShowNodeModal] = useState(false);
  const [showIndustryInfo, setShowIndustryInfo] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [showElevatorModal, setShowElevatorModal] = useState(false);
  const [detectedFloor, setDetectedFloor] = useState(null);
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [selectedFloorMap, setSelectedFloorMap] = useState(null);
  const [searchDestination, setSearchDestination] = useState('');
  const [showScanningModal, setShowScanningModal] = useState(false);
  const [userLocation, setUserLocation] = useState({ x: 250, y: 150 });
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [showNavigationPath, setShowNavigationPath] = useState(false);

  const theme = themeConfig(darkMode);

  // Authentication functions
  const loginWithGoogle = (role) => {
    setLoginType(role);
    setShowLoginForm(true);
  };

  const loginWithEmail = (email, password, role) => {
    setLoginError('');

    const user = users[role].find(u => u.email === email && u.password === password);

    if (user) {
      setCurrentUser(user);
      setIsAuthenticated(true);
      setUserRole(role);
      setCurrentScreen('Dashboard');
      setShowLoginForm(false);
    } else {
      setLoginError('Invalid email or password');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setCurrentUser(null);
    setCurrentScreen('Home');
  };

  // Navigation
  const navigateTo = (screen) => setCurrentScreen(screen);

  // Floor detection
  const detectCurrentFloor = () => {
    setShowElevatorModal(true);
    setTimeout(() => {
      const detected = 'f1';
      setDetectedFloor(detected);
      setTimeout(() => setShowElevatorModal(false), 2000);
    }, 2000);
  };

  // Scanning location
  const scanMyLocation = () => {
    setShowScanningModal(true);
    setTimeout(() => {
      setUserLocation({
        x: Math.floor(Math.random() * 400) + 100,
        y: Math.floor(Math.random() * 200) + 100
      });
      const currentBuilding = 'b1';
      const currentFloor = 'f1';
      setSelectedBuilding(buildings.find(b => b.id === currentBuilding));
      setSelectedFloorMap(floorMaps[`${currentBuilding}-${currentFloor}`]);
      setTimeout(() => {
        setShowScanningModal(false);
        if (currentScreen !== 'Map') setCurrentScreen('Map');
      }, 1000);
    }, 2000);
  };

  // Search
  const searchForDestination = () => {
    if (!searchDestination.trim()) return;
    const results = locations.filter(loc => loc.name.toLowerCase().includes(searchDestination.toLowerCase()));
    setSearchResults(results);
    setShowSearchResults(true);
  };

  const selectDestination = (destination) => {
    setSelectedDestination(destination);
    setShowSearchResults(false);
    setShowNavigationPath(true);
    if (currentScreen !== 'Map') setCurrentScreen('Map');
    const destBuilding = buildings.find(b => b.id === destination.building);
    setSelectedBuilding(destBuilding);
    setSelectedFloorMap(floorMaps[`${destination.building}-${destination.floor}`]);
  };

  return (
    <AppContext.Provider value={{
      isAuthenticated, setIsAuthenticated,
      userRole, setUserRole,
      currentScreen, setCurrentScreen,
      darkMode, setDarkMode,
      currentUser, setCurrentUser,
      loginError, setLoginError,
      showLoginForm, setShowLoginForm,
      loginType, setLoginType,
      showUploadModal, setShowUploadModal,
      showNodeModal, setShowNodeModal,
      showIndustryInfo, setShowIndustryInfo,
      selectedIndustry, setSelectedIndustry,
      showElevatorModal, setShowElevatorModal,
      detectedFloor, setDetectedFloor,
      selectedBuilding, setSelectedBuilding,
      selectedFloorMap, setSelectedFloorMap,
      searchDestination, setSearchDestination,
      showScanningModal, setShowScanningModal,
      userLocation, setUserLocation,
      showSearchResults, setShowSearchResults,
      searchResults, setSearchResults,
      selectedDestination, setSelectedDestination,
      showNavigationPath, setShowNavigationPath,
      theme, users, buildings, floorMaps, industries, locations,
      loginWithGoogle, loginWithEmail, logout, navigateTo, detectCurrentFloor, scanMyLocation, searchForDestination, selectDestination
    }}>
      {children}
    </AppContext.Provider>
  );
};
