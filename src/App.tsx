import './App.css';
import Container from './components/_common/Container';
import SectionHeading from './components/_common/SectionHeading';

function App() {
  return (
    <Container
      backgroundColor="grey"
      justify="center"
      align="center"
      height="100vh"
      maxWidth="100%"
      width="100vw"
      direction="column"
    >
      <Container
        backgroundColor="yellow"
        justify="center"
        align="center"
        padding="1.5rem"
        height="auto"
        maxWidth="100%"
        width="100vw"
      >
        <SectionHeading h1={true}>
          Calculate your Return on Investment with Avisio
        </SectionHeading>
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
            <div>Hoteleigenschaften</div>
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
          backgroundColor="purple"
          width="70%"
          direction="column"
          height="100%"
        >
          <div>Fallstudie</div>
        </Container>
      </Container>
      <button
        onClick={() =>
          chrome.tabs.create({ url: chrome.extension.getURL('popup.html') })
        }
      >
        Click Me
      </button>
    </Container>
  );
}

export default App;
