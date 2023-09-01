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
      <Grid container>
      <Grid item xs={3}>
      <IconMenu  />
      </Grid>
      <Grid item>
      <DictionarySelects setActiveDictionary={setActiveDictionary} />
      </Grid>
      </Grid>
      <Routes>
        <Route path='/' element={<Home activeDictionary={activeDictionary} />} />
        <Route path='/multi' element={<MultiChoice activeDictionary={activeDictionary}/>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;