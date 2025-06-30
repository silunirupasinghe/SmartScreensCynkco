import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import notFoundImage from '../Assets/notfound.jpg';

function NotFound() {
  return (
    <Container
      maxWidth="lg"
      sx={{  
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: {md:'80vh', sm:'auto'},
        textAlign: 'center', 
        marginTop:{ xs:'40px', sm:'40px'},
      }}
    >
      <Link to="/" style={{ textDecoration: 'none', width: '100%' }}>
        <Box
          component="img"
          src={notFoundImage}
          alt="404 Not Found"
          style={{
            width: '100%',
            maxHeight: 'auto',
            objectFit: 'cover',
            cursor: 'pointer',
          }}
        />
      </Link>  
    </Container>
  );
}

export default NotFound;