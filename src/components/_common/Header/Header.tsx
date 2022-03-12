import { useEffect, useState } from 'react';
import { MainHeader, HeaderInnerContainer } from './styles';

import { ReactComponent as Logo } from '../../../assets/images/logo.svg';

import Switch from '@mui/material/Switch';
import CommonText from '../Text';
import Container from '../Container';

const Header = () => {
  const storedTheme =
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light');
  if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme);

  const [isDark, setIsDark] = useState<boolean>(
    storedTheme === 'dark' ? true : false,
  );

  useEffect(() => {
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
        <Container
          backgroundColor="var(--color-header)"
          direction="row"
          align="center"
          justify="space-between"
          maxWidth="12rem"
          width="100%"
        >
          <Logo width="4rem" height="4rem" />
          <CommonText fontSize="2rem" fontWeight="700" color="#ffffff">
            Px/Rem
          </CommonText>
        </Container>
        <Container
          backgroundColor="var(--color-header)"
          direction="row"
          align="center"
          justify="space-between"
          maxWidth="10rem"
          width="100%"
        >
          <Switch
            color="warning"
            className="dark-mode-toggle"
            checked={isDark}
            onChange={({ target }) => setIsDark(target.checked)}
            onKeyPress={(e) => {
              console.log(e.key);
              if (e.key === 'Enter') setIsDark(!isDark);
            }}
            aria-label="Dark mode toggle"
          />
          <CommonText
            fontSize="1rem"
            fontWeight="600"
            color={isDark ? '#ed6c02' : '#ffffff'}
          >
            Night theme
          </CommonText>
        </Container>
      </HeaderInnerContainer>
    </MainHeader>
  );
};

export default Header;
