import React, { createContext, useState, useEffect, useContext } from 'react';
 
const ThemeContext = createContext(null);
 
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
 
  // Charger le thème depuis localStorage au montage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Détecter la préférence système
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);
 
  // Appliquer le thème au document
  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);
 
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
 
  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
  };
 
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
 
// Hook personnalisé pour utiliser le contexte
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme doit être utilisé dans un ThemeProvider');
  }
  return context;
};
 
export default ThemeContext;
 
