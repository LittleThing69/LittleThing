import ModelsGrid from '../components/ModelsGrid';
import * as React from 'react';
import FilterBar from '../components/FilterBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ActiveLastBreadcrumb from '../components/ActiveLastBreadcrumbs';
import UpButton from '../components/UpButton';

const theme = createTheme({
    typography: {
      fontFamily: 'SuperGroteskOffc, Helvetica, Arial, sans-serif;',    
    },
  });

function Models() {

    const Large = useMediaQuery('(min-width:1260px)');
    const Desktop = useMediaQuery('(min-width:990px) and (max-width:1260px)');
    const Mobile = useMediaQuery('(min-width:410px) and (max-width:990px)');
    //const Small = useMediaQuery('(max-width:410px)');
    let pads;
    
    if (Large) { //ICONE FILTRE 1 OU 2
        pads = '1.25rem';
    }
    if (Desktop) { //ICONE FILTRE 1 OU 2
        pads = '0.75rem';
    }
    if (Mobile) { //ICONE FILTRE 1 OU 2
        pads = '0.50rem';
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ paddingLeft: pads, paddingRight: pads, marginLeft: 'auto', marginRight: 'auto' }}>
                <ActiveLastBreadcrumb />
                <Typography sx={{ display:'block', textAlign: "center", backgroundColor: "#FFF5F7", opacity: 1, }}
                    paddingBottom={'2rem'}
                    paddingTop={'1.5rem'}
                    paddingLeft={'3rem'}
                    paddingRight={'3rem'}
                >
                    <Box sx={{ textAlign: 'center', fontSize: '1.5rem', lineHeight: '1.625rem', fontWeight: 'bold', letterSpacing: '0.09rem', color: '#222', textTransform: 'capitalize'}}>
                         Lingerie
                        </Box>
                    <Box sx={{color: '#222', fontSize: '1rem', letterSpacing: 1, lineHeight: '1.5rem', paddingTop: 2, tabSize: 2}}>
                        Craquez pour notre gamme de lingerie femme parfaite pour toutes les fans de lingerie délicate et de lingerie fine. En bref, pour celles qui qui aiment être au top même sous leurs vêtements. Adoptez un look sensuel avec nos sous-vêtements flatteurs pour une tenue que votre partenaire ne sera pas près d’oublier. Privilégiez un bon maintien avec nos push-ups qui deviendront vite vos indispensables. Ou bien optez pour la simplicité avec nos sous-vêtements en dentelle indémodables - impossible de se rater. Vous êtes d’humeur séductrice ? Découvrez notre lingerie transparente qui va laisser votre bien-aimé bouche bée. Idéal pour nos queens qui n’ont pas froid aux yeux, ça ! Nous avons également une grande variété de couleurs qui s’accorderont à vos humeurs : restez classique et féminine avec de la lingerie de couleur noire, transformez-vous en femme fatale avec nos dessous rouges parfait pour vous démarquer ou bien optez pour un peu de fantaisie avec des sous-vêtements femme à motifs pour mettre en avant votre côté arty. On vous prévient, vous n’allez plus vouloir rien enfiler d’autre que la lingerie de cette collection !
                    </Box>
                </Typography>
                <FilterBar />
                <IconButton color="primary">
                </IconButton>
                <ModelsGrid />
                <UpButton />
            </Box>
        </ThemeProvider>
    );
}

/* const Models = () => {
    return (
    <h1>Models</h1>
    
    );
}; */

export default Models;