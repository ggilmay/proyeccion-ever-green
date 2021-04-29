// @packages
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import React from 'react';
import { navigate } from 'gatsby';

// @scripts
import BackgroundImage from '../components/background-image';

// @images
import Background from '../assets/images/background.jpg';

export default function Index() {
  const handleOnNavigate = () => {
    navigate('/simulation');
  };

  return (
    <Box>
      <BackgroundImage
        imageUrl={Background}
        subtitle="Ayudandote a tomar las mejores decisiones"
        title="EverGreen"
      />
      <Container maxWidth="sm">
        <Box textAlign="center" paddingTop={10} my={4}>
          <Button
            color="primary"
            onClick={handleOnNavigate}
            size="large"
            variant="outlined"
          >
            Realizar simulacion
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
