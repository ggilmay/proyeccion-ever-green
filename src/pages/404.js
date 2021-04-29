// @packages
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import React from 'react';
import Typography from '@material-ui/core/Typography';

// @scripts
import BackgroundImage from '../components/background-image';

// @images
import Background from '../assets/images/background.jpg';

export default function Index() {
  return (
    <Box>
      <BackgroundImage
        imageUrl={Background}
        subtitle="Ayudandote a tomar las mejores decisiones"
        title="EverGreen"
      />
      <Container maxWidth="sm">
        <Box textAlign="center" paddingTop={10} my={4}>
        <Typography gutterBottom>
            Pagina no encontrada
        </Typography>
        </Box>
      </Container>
    </Box>
  );
}
