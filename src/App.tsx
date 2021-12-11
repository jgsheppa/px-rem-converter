import './App.css';
import Container from './components/_common/Container';
import Header from './components/_common/Header';

import { shared } from './components/styled';
import { useState } from 'react';

function App() {
  const [rem, setRem] = useState('1');
  const [pixels, setPixels] = useState('16');

  const [isRem, setIsRem] = useState(true);
  const [marginRem, setMarginRem] = useState('1rem 1rem 1rem 1rem');
  const [marginPixels, setMarginPixels] = useState('16px 16px 16px 16px');
  const [marginConversion, setMarginConversion] = useState('');

  const handlePxToRemConversion = (px: string): string => {
    const pxToFloat = parseFloat(px);
    const newRemValue = pxToFloat / 16;
    return newRemValue.toString();
  };

  const handleRemToPxConversion = (rm: string): string => {
    const rmToFloat = parseFloat(rm);
    const newRemValue = rmToFloat * 16;
    return newRemValue.toString();
  };

  const pixelsToRem = (px: string) => {
    if (!px) {
      setRem('0');
      setPixels('0');
    } else if (pixels === '0') {
      setPixels(px[1]);
      const newRem = handlePxToRemConversion(px);
      setRem(newRem);
    } else {
      setPixels(px);
      const newRem = handlePxToRemConversion(px);
      setRem(newRem);
    }
  };

  const remToPixels = (rm: string) => {
    if (!rm) {
      setRem('0');
      setPixels('0');
    } else if (rem === '0') {
      setRem(rm[1]);
      const newPx = handleRemToPxConversion(rm);
      setPixels(newPx);
    } else {
      setRem(rm);
      const newPx = handleRemToPxConversion(rm);
      setPixels(newPx);
    }
  };

  const handlePixelsToRemMargin = (px: string) => {
    const convertToFloats = px
      .split(' ')
      .filter((value) => value.includes('px'))
      .map((value) => {
        value.replace('px', '');
        return handlePxToRemConversion(value).concat('rem');
      });
    setMarginConversion(convertToFloats.join(' '));
  };

  const handleRemToPixelsMargin = (rm: string) => {
    const convertToFloats = rm
      .split(' ')
      .filter((value) => value.includes('rem'))
      .map((value) => {
        value.replace('rem', '');
        return handleRemToPxConversion(value).concat('px');
      });
    setMarginConversion(convertToFloats.join(' '));
  };

  return (
    <Container
      backgroundColor={shared.colors.blue.lightRoyal}
      justify="center"
      align="center"
      height="100vh"
      maxWidth="100%"
      width="100vw"
      direction="column"
    >
      <Container
        backgroundColor="white"
        justify="center"
        align="center"
        padding="1.5rem"
        height="auto"
        maxWidth="100%"
        width="100vw"
      >
        <Header></Header>
      </Container>
      <Container
        direction="row"
        maxHeight="100vh"
        height="100%"
        width="100%"
        padding="2rem 5rem"
        justify="center"
      >
        <Container
          direction="column"
          maxHeight="100rem"
          height="100%"
          width="30%"
        >
          <Container
            backgroundColor="white"
            width="100%"
            direction="column"
            height="70%"
          >
            <h2>Pixel {'<---->'} Rem</h2>

            <label>Rem</label>
            <input
              value={rem}
              onChange={(e) => remToPixels(e.target.value)}
            ></input>
            <label>Px</label>
            <input
              value={pixels}
              onChange={(e) => pixelsToRem(e.target.value)}
            ></input>
          </Container>
        </Container>
        <Container
          backgroundColor="white"
          width="70%"
          direction="column"
          height="100%"
        >
          <h2>Margin/Padding</h2>
          <button onClick={() => setIsRem(true)}>Rem</button>
          <button onClick={() => setIsRem(false)}>Px</button>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              return isRem
                ? handleRemToPixelsMargin(marginRem)
                : handlePixelsToRemMargin(marginPixels);
            }}
          >
            {isRem ? (
              <Container>
                <label>Rem</label>
                <input
                  value={marginRem}
                  onChange={(e) => setMarginRem(e.target.value)}
                ></input>
              </Container>
            ) : (
              <Container>
                <label>Px</label>
                <input
                  value={marginPixels}
                  onChange={(e) => setMarginPixels(e.target.value)}
                ></input>
              </Container>
            )}

            <button type="submit">Submit</button>
          </form>
          <h3>{marginConversion}</h3>
        </Container>
      </Container>
      <button
        onClick={() =>
          chrome.tabs.create({ url: chrome.extension.getURL('index.html') })
        }
      >
        Click Me
      </button>
    </Container>
  );
}

export default App;
