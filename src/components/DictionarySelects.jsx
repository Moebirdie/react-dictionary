import {
  Chip,
  Stack,
} from '@mui/material';
import { useEffect, useState } from 'react';
// const [dictionaries, setDictionaries] = useState([undefined]]);
//const [selectedDictionary, setSelectedDictionary] = useState(undefined);

function DictionarySelects(props) {

  const [selectedDictionary, setSelectedDictionary] = useState(undefined)
  const [dictionaries, setDictionaries] = useState([]);

  useEffect(() => {
    fetch('https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/dictionaries')
      .then((data) => data.json())
      .then((data) => {
        setDictionaries(data);
        if (data.length > 0) {
          props.setActiveDictionary(data[0]);
          setSelectedDictionary(data[0])
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <Stack direction='column'>
        {dictionaries &&
          dictionaries.map((d, index) => (
            <Chip  
            color={d._id !== selectedDictionary._id  ? "primary" : "secondary"}
             label={d.title}
              key={index}
              onClick={() => {
                setSelectedDictionary(d)
                props.setActiveDictionary(d);
              }}
            />
          ))}
      </Stack>
    </div>
  )
}

export default DictionarySelects