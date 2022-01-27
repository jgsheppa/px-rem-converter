import Container from './components/_common/Container';
import Header from './components/_common/Header';

import { useState } from 'react';
import SectionHeading from './components/SectionHeading';
import Input from './components/_common/Input';

function App() {
  const [rem, setRem] = useState('1');
  const [pixels, setPixels] = useState('16');

  const handlePxToRemConversion = (px: string): string => {
    const removePx = px.replace('px', '');
    const pxToFloat = parseFloat(removePx);
    const newRemValue = pxToFloat / 16;
    return newRemValue.toString();
  };

  const handleRemToPxConversion = (rem: string): string => {
    const removeRem = rem.replace('rem', '');
    const remToFloat = parseFloat(removeRem);
    const newPxValue = remToFloat * 16;
    return newPxValue.toString();
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

  return (
    <Container
      backgroundColor="var(--color-background)"
      justify="center"
      align="center"
      height="100vh"
      maxWidth="100%"
      width="100vw"
      direction="column"
    >
      <Container
        backgroundColor="var(--color-background)"
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
        backgroundColor="var(--color-background)"
        direction="column"
        maxHeight="100vh"
        height="80%"
        width="100%"
        justify="flex-start"
        align="center"
      >
        <Container
          direction="column"
          justify="flex-start"
          align="space-between"
          height="auto"
          width="80%"
          margin="1rem"
        >
          <Container
            width="100%"
            direction="column"
            align="flex-start"
            height="100%"
            minHeight="16rem"
            padding="2rem"
            borderRadius="0.25rem"
          >
            <Container
              direction="row"
              align="center"
              justify="space-between"
              height="4rem"
              width="100%"
            >
              <SectionHeading h2={true}>Pixel to Rem</SectionHeading>
            </Container>

            <Container
              direction="row"
              align="center"
              justify="space-between"
              flexWrap="wrap"
              height="auto"
              width="100%"
              margin="1rem 0 0 "
            >
              <Input
                borderRadius="0.25rem 0 0 0.25rem"
                buttonRadius="0 0.25rem 0.25rem 0"
                inputLabel="Rem"
                measurement={`${rem}rem`}
                value={rem}
                onChange={(e) => remToPixels(e.target.value)}
                marginTop="1rem"
                marginBottom="1rem"
              ></Input>
              <Input
                borderRadius="0.25rem 0 0 0.25rem"
                buttonRadius="0 0.25rem 0.25rem 0"
                inputLabel="Pixels"
                marginTop="1rem"
                marginBottom="1rem"
                measurement={`${pixels}px`}
                value={pixels}
                onChange={(e) => pixelsToRem(e.target.value)}
              ></Input>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default App;
