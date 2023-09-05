import { ThemeProvider, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router';
import './App.css';
import { theme } from './common/theme';
import Home from './components/RandomWord';
import MultiChoice from './components/MultiChoice';
import DictionarySelects from './components/DictionarySelects';
import { useEffect, useState } from 'react';
import TopDrawer from './components/TopDrawer';
import IconMenu from './components/IconMenu';
import { Grid } from '@mui/material';

function App() {

  const [activeDictionary, setActiveDictionary] = useState(undefined);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopDrawer />
      <Grid container dirction='row'>
      <Grid item xs={2} 
        alignItems='top'>
      <DictionarySelects setActiveDictionary={setActiveDictionary} />
      </Grid>
      <Grid item 
      xs={9}
      marginTop={6}
      display='flex'
      justifyContent='center'>
      <Routes>
        <Route path='/' element={<Home activeDictionary={activeDictionary} />} />
        <Route path='/multi' element={<MultiChoice activeDictionary={activeDictionary}/>} />
      </Routes>
      </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;