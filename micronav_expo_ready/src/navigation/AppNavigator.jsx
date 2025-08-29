import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import HomeScreen from '../screens/HomeScreen';
import DashboardScreen from '../screens/DashboardScreen';
import MapScreen from '../screens/MapScreen';
import IndustriesScreen from '../screens/IndustriesScreen';

export default function AppNavigator() {
  const { currentScreen, isAuthenticated } = useContext(AppContext);

  if (!isAuthenticated && currentScreen === 'Home') return <HomeScreen />;
  if (isAuthenticated && currentScreen === 'Dashboard') return <DashboardScreen />;
  if (isAuthenticated && currentScreen === 'Map') return <MapScreen />;
  if (isAuthenticated && currentScreen === 'Industries') return <IndustriesScreen />;
  return <HomeScreen />;
}
