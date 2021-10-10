import { GlobalStyle } from './styles/Global';
import Routes from './routes/';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes />
    </>
  );
}

export default App;
