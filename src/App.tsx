import Container from './components/_common/Container';
import Header from './components/_common/Header';

import { ReactComponent as Clipboard } from './assets/images/clipboard.svg';

import { useState } from 'react';
import CommonButton from './components/_common/Button';
import CommonText from './components/_common/Text';
import SectionHeading from './components/SectionHeading';
import Input from './components/_common/Input';

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
      .filter((value) => value.includes('px') || value === '0')
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
        padding="2rem 5rem"
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
            justify="space-between"
            height="auto"
            padding="2rem 2rem 4rem"
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
              height="4rem"
              width="80%"
              margin="1rem 0 0 "
            >
              <Input
                borderRadius="0.25rem 0 0 0.25rem"
                buttonRadius="0 0.25rem 0.25rem 0"
                inputLabel="Rem"
                measurement={`${rem}rem`}
                value={rem}
                onChange={(e) => remToPixels(e.target.value)}
              ></Input>
              <Input
                borderRadius="0.25rem 0 0 0.25rem"
                buttonRadius="0 0.25rem 0.25rem 0"
                inputLabel="Pixels"
                measurement={`${pixels}px`}
                value={pixels}
                onChange={(e) => pixelsToRem(e.target.value)}
              ></Input>
            </Container>
          </Container>
        </Container>
        <Container
          borderRadius="0.25rem"
          width="80%"
          direction="column"
          height="auto"
          padding="2rem"
          margin="1rem"
        >
          <SectionHeading h2={true}>Margin and Padding</SectionHeading>
          <Container
            width="15%"
            direction="row"
            align="center"
            justify="space-between"
            height="auto"
            padding="2rem 0rem"
          >
            <CommonButton
              padding="0.5rem 1rem"
              width="fit-content"
              textAlign="center"
              height="3rem"
              margin="0"
              backgroundColor={
                isRem ? 'var(--color-approval)' : 'var(--color-denial)'
              }
              onClick={() => {
                setMarginConversion('');
                setIsRem(true);
              }}
            >
              Rem
            </CommonButton>
            <CommonButton
              padding="0.5rem 1rem"
              width="fit-content"
              margin="0"
              textAlign="center"
              height="3rem"
              align="center"
              justify="flex-start"
              backgroundColor={
                isRem ? 'var(--color-denial)' : 'var(--color-approval)'
              }
              onClick={() => {
                setMarginConversion('');
                setIsRem(false);
              }}
            >
              Px
            </CommonButton>
          </Container>
          <Container
            direction="row"
            align="flex-end"
            justify="space-between"
            width="80%"
          >
            <form
              style={{ width: '100%', maxWidth: '26rem' }}
              onSubmit={(e) => {
                e.preventDefault();
                return isRem
                  ? handleRemToPixelsMargin(marginRem)
                  : handlePixelsToRemMargin(marginPixels);
              }}
            >
              <Container
                direction="row"
                width="70%"
                align="flex-end"
                justify="space-between"
                height="5.5rem"
                maxWidth="24rem"
              >
                {isRem ? (
                  <Input
                    maxWidth="14rem"
                    width="100%"
                    inputLabel="Rem"
                    value={marginRem}
                    onChange={(e) => setMarginRem(e.target.value)}
                  ></Input>
                ) : (
                  <Input
                    maxWidth="14rem"
                    width="100%"
                    inputLabel="Px"
                    value={marginPixels}
                    onChange={(e) => setMarginPixels(e.target.value)}
                  ></Input>
                )}
                <CommonButton
                  padding="0.5rem 1rem"
                  height="3.125rem"
                  type="submit"
                >
                  Submit
                </CommonButton>
              </Container>
            </form>
            <Input
              borderRadius="0.25rem 0 0 0.25rem"
              buttonRadius="0 0.25rem 0.25rem 0"
              justify="flex-end"
              maxWidth="15rem"
              isMargin={true}
              marginConversion={marginConversion}
              value={marginConversion}
            ></Input>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default App;
