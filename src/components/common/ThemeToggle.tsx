import { useTheme } from '@/contexts/ThemeContext';
import React from 'react';
import { Button } from '../ui/button';
import { Moon, SunMedium } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme,  setTheme } = useTheme();

  return (
    <Button
      variant="dark"
      className='max-w-[40px]'
      onClick={()=>{
        setTheme(theme == "light" ? "dark" : "light")
      }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon color='white'/>
      ) : (
        <SunMedium color='black'/>
      )}
    </Button>
  );
};

export default ThemeToggle;