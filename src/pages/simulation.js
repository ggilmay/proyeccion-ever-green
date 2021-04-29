// @packages
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

// @scripts
import Select from '../components/select';
import Link from '../components/Link';

// @constants
import Constants from '../config/constants.json';

export default function Simulation() {
  const [state, setState] = React.useState({
    data: 0,
    methods: 0,
    results: ''
  });

  const handleOnChange = (event) => {
    const name = event.target.name;

    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleOnClick = async () => {
    const fetchData = async () => {
      const result = await axios(
        'https://bigml.io/andromeda/projection?username=wsalasg634;api_key=dc32980f82dd29e7864c02a09d063b7e0a861e57&',
        { pca: 'pca/56f5ecfa4e17275f4400015b',
          input_data: {"000001": 3} }
      );

      setState({
        ...state,
        results: result
      });
    };

    fetchData();
  };

  const { data, pca, results } = state;

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" my={4}>
        <Box marginY={10}>
          <Typography variant="h4" gutterBottom>
            Realizar Proyeccion
          </Typography>
        </Box>
        <Paper>
          <Select
            id="data"
            name="data"
            onChange={handleOnChange}
            options={Constants.methods}
            title="Datos disponibles"
            value={data}
          />
          <input
            id="pca"
            name="pca"
            onChange={handleOnChange}
            options={Constants.data}
            title="Seleccione PCA"
            value={pca}
          />
          <input
            id="input_data"
            name="input_data"
            onChange={handleOnChange}
            options={Constants.data}
            title="Seleccione input_data"
            value={input_data}
          />
          <Box paddingY={5}>
            <Button
              color="primary"
              disabled={(data > 0 && methods > 0) ? false : true}
              onClick={handleOnClick}
              variant="contained"
            >
              Generar Proyeccion
            </Button>
          </Box>
        </Paper>
        <Box paddingTop={5}>
          {(results?.status === 200) &&
            <React.Fragment>
              <Typography gutterBottom>
                ¡Se ha realizado la proyeccion de forma satisfactoria!
              </Typography>
              <Link to="https://bigml.com/dashboard/batchprojections" target="_blank" >
                <Typography>
                  Ver los resultados
                </Typography>
              </Link>
            </React.Fragment>
          }
        </Box>
      </Box>
    </Container>
  );
}
