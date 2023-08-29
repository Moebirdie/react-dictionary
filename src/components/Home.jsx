import {
  Button,
  Chip,
  Grid,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import TopDrawer from './TopDrawer';
import { dictionariesUrl, randomWordUrl } from '../common/constants';

const Home = () => {
  const [dictionaries, setDictionaries] = useState([]);
  const [activeDictionary, setActiveDictionary] = useState(undefined);
  const [wordAndDefinition, setWordAndDefinition] = useState(undefined);

  useEffect(() => {
    fetch('https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/dictionaries')
      .then((data) => data.json())
      .then((data) => setDictionaries(data))
      .catch((e) => console.log(e));
  }, []);

  console.log(dictionaries);

  const getRandomWord = () => {
    fetch(
      `https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/random-word?tag=${activeDictionary.tags[0]}`
    )
      .then((data) => data.json())
      .then((data) => setWordAndDefinition(data))
      .catch((e) => console.log(e));
  };

  return (
    <>
    <TopDrawer />
    <Grid
    container='row'
      sx={{ 
        bgcolor: '#f4f4f4',
        color: '#46505A',
        p: 10,
        }}
      justifyContent='space-between'
      columns={8}
      alignItems='top'
      minHeight={400}
      maxWidth={900}
    >
      <Grid 
        item
        column={4}
        >
        <Stack direction='column' spacing={1}>
          {dictionaries &&
            dictionaries.map((d, index) => (
              <Chip
                label={d.title}
                key={index}
                onClick={() => {
                  setActiveDictionary(d);
                }}
              />
            ))}
        </Stack>
      </Grid>
      <container 
        direction='column'
        columns={6}
        >
      <Grid
        item
        sx={{ }}
      >
        {activeDictionary && (
          <Typography variant='h4'>{activeDictionary.title}</Typography>
        )}
      </Grid>
      <Grid
        item
        sx={{ p: 6 }}
      >
        {activeDictionary && (
          <Button onClick={getRandomWord} variant='contained'>
            Get Random Word
          </Button>
        )}
      </Grid>
      <Grid 
        item
        width={400}
        >
        {wordAndDefinition && (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>{wordAndDefinition.word}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{wordAndDefinition.definition}</Typography>
            </AccordionDetails>
          </Accordion>
        )}
      </Grid>
      </container>
    </Grid>
  </>
  );
  };

export default Home;