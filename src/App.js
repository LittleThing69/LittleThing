import './App.css';
import ResponsiveAppBar from './components/AppBar';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
//import { purple } from '@mui/material/colors';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Models from './pages/Models';

const theme = createTheme({
  palette: {
    primary: {
      main: pink[400],
      //main: '#FFBEDB'
    },
    secondary: {
      main: '#e040fb',
      //main : purple
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Models" element={<Models />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
