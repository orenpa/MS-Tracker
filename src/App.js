import './App.css';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/NavBarTheme'; 

function App() {
  return (

    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>

  );
}

export default App;
