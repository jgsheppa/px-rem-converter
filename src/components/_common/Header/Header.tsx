import { useEffect, useState } from 'react';
import { MainHeader, HeaderInnerContainer } from './styles';

import { useMediaQuery } from 'react-responsive';

import { ReactComponent as Logo } from '../../../assets/images/logo.svg';

import Switch from '@mui/material/Switch';

const Header = () => {
  const storedTheme =
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light');
  if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme);

  const local = localStorage.getItem('theme');
  console.log('LOCAL', local);

  const [isDark, setIsDark] = useState<boolean>(
    storedTheme === 'dark' ? true : false,
  );

  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
    (isSystemDark: boolean) => setIsDark(isSystemDark),
  );

  useEffect(() => {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <MainHeader>
      <HeaderInnerContainer>
        <Logo width="4rem" height="4rem" />
        <p>Wandlung</p>
        <Switch
          className="dark-mode-toggle"
          checked={isDark}
          onChange={({ target }) => setIsDark(target.checked)}
          aria-label="Dark mode toggle"
        ></Switch>
      </HeaderInnerContainer>
    </MainHeader>
  );
};

export default Header;
