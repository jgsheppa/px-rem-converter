import './App.css';
import Container from './components/_common/Container';
import Header from './components/_common/Header';

import { shared } from './components/styled';
import { useState } from 'react';

function App() {
  const [rem, setRem] = useState('1');
  const [pixels, setPixels] = useState('16');

  const pixelsToRem = (px: string) => {
    if (!px) {
      setRem('0');
      setPixels('0');
    } else if (pixels === '0') {
      setPixels(px[1]);
      const pxToFloat = parseFloat(px);
      const newRemValue = pxToFloat / 16;
      setRem(newRemValue.toString());
    } else {
      setPixels(px);
      const pxToFloat = parseFloat(px);
      const newRemValue = pxToFloat / 16;
      setRem(newRemValue.toString());
    }
  };

  const remToPixels = (rm: string) => {
    if (!rm) {
      setRem('0');
      setPixels('0');
    } else if (rem === '0') {
      setRem(rm[1]);
      const rmToFloat = parseFloat(rm);
      const newRemValue = rmToFloat * 16;
      setPixels(newRemValue.toString());
    } else {
      setRem(rm);
      const rmToFloat = parseFloat(rm);
      const newRemValue = rmToFloat * 16;
      setPixels(newRemValue.toString());
    }
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
          <Container
            backgroundColor="green"
            width="100%"
            direction="column"
            height="30%"
          >
            <div>Kennzahlen</div>
          </Container>
        </Container>
        <Container
          backgroundColor="white"
          width="70%"
          direction="column"
          height="100%"
        >
          <div>Fallstudie</div>
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
