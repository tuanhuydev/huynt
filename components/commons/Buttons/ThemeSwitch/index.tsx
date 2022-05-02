import { useCallback, useEffect } from "react";

const ThemeIcon = () => {
  return (
    <svg className="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
      <circle className="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
      <g className="sun-beams" stroke="currentColor">
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </g>
      <mask className="moon" id="moon-mask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <circle cx="24" cy="10" r="6" fill="black" />
      </mask>
    </svg>
  )
};

const ThemeSwitch = () => {
  const storageKey = 'theme-preference';

  /**
   * Get current theme preference base on local storage
   * @returns void
   */
  const getColorPreference = () => {
    if (localStorage.getItem(storageKey)) {
      return localStorage.getItem(storageKey)
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  /**
   * Sync current theme setting to UI
   * @returns void
   */
  const reflectPreference = useCallback(() => {
    const currentTheme = getColorPreference();
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }    
  }, []);

  /**
   * Set theme to UI
   * @returns void
   */
  const setPreference = (value: 'light' | 'dark') => {
    localStorage.setItem(storageKey, value);
    reflectPreference();
  }

  const handleSwitchTheme = () => {
    const currentTheme = getColorPreference();
    setPreference( currentTheme === 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
    reflectPreference();
  }, [reflectPreference]);

  return (
    <button 
      onClick={handleSwitchTheme}
      className="theme-toggle" 
      title="Theme switching" 
      aria-label="auto"
      aria-live="polite" // Announce browser that aria-label changed
    >
      <ThemeIcon />
    </button>
  )
}

export default ThemeSwitch;