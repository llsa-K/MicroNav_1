export default function themeConfig(darkMode) {
  return {
    dark: darkMode,
    colors: darkMode ? {
      primary: '#1a237e',
      secondary: '#7b1fa2',
      accent: '#00796b',
      background: '#121212',
      card: '#1e1e1e',
      text: '#ffffff',
      border: '#2c2c2c',
      notification: '#f50057',
      success: '#2e7d32',
      warning: '#f57f17',
      danger: '#c62828'
    } : {
      primary: '#1976d2',
      secondary: '#7b1fa2',
      accent: '#00796b',
      background: '#f8f9fa',
      card: '#ffffff',
      text: '#212529',
      border: '#e9ecef',
      notification: '#f50057',
      success: '#43a047',
      warning: '#ffa000',
      danger: '#e53935'
    }
  };
}
