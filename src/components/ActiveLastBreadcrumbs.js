import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
      fontFamily: 'SuperGroteskOffc,Helvetica,Arial,sans-serif',
      fontSize: '1rem',
    },
  });

function handleClick(event) {
  event.preventDefault();
}

export default function ActiveLastBreadcrumb() {
  return (
    <div role="presentation" onClick={handleClick}>
        <ThemeProvider theme={theme}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ paddingTop: '1rem', paddingBottom: '1rem'}}>
        <Link underline="hover" color="inherit" component={RouterLink} to="/">
          Accueil
        </Link>
        <Link
          underline="hover"
          color="inherit"
          component={RouterLink}
          to='/Models'
        >
          Models
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          fontWeight={'bold'}
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          Breadcrumbs
        </Link>
      </Breadcrumbs>
      </ThemeProvider>
    </div>
  );
}