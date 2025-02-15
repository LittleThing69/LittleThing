import * as React from 'react';
import { useContext, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import SortIcon from '@mui/icons-material/Sort';
import { ImagesPerRowContext } from '../contexts/ImagePerRowContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  shadows: ["none"],
  typography: {
    fontFamily: 'SuperGroteskOffc, Helvetica, Arial, sans-serif;',
    fontSize: 9.80,
    display: { xs: 'none', sm: 'flex', justifyContent: 'center' } 
  },
});

export default function FilterBar() {

  const { setImagesPerRow } = useContext(ImagesPerRowContext);
  const [selected, setSelected] = useState(false);

  const handle6PerRowClick = () => {
    setSelected(true);
    setImagesPerRow(6);
  };

  const handle4PerRowClick = () => {
    setSelected(false);
    setImagesPerRow(4);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <IconButton>
          <ViewModuleIcon />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton  >
          <GridViewSharpIcon />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton>
          <ViewModuleIcon />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton  >
          <GridViewSharpIcon />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{ width: 1, height: 1, margin: 'auto' }} style={{ background: 'white', color: '#333333' }}>
        <Toolbar disableGutters> {/* sx={{ justifyContent: 'space-evenly' }}*/}
          <Box sx={{ display: 'grid', flexWrap: 'wrap', gridTemplateColumns: 'repeat(4, 1fr)', width: 1, alignItems: 'center', justifyContent: 'center', height: 'auto' }}
            borderLeft={1} borderRight={1} textTransform={'uppercase'}>
            <Typography
              variant="h6"
              component="div"
              borderRight={1}
            >
              <SortIcon alignItems="center" justifyContent= "center"/>
              Afficher les filtres
            </Typography>
            <Typography
              variant="h6"
              component="div"
              borderRight={1}
            >
              24 Models
            </Typography>
            <Typography
              variant="h6"
              component="div"
              borderRight={1}
            >
              Trier par ordre
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex', justifyContent: 'center', alignItems: 'center' } }}>
              <Typography
                variant="h6"
                component="div"

              >
                Voir :
              </Typography>
              <IconButton onClick={handle6PerRowClick}>
                {selected ? (
                  <ViewModuleIcon color="action" fontSize="large"/>
                ) : (
                  <ViewModuleIcon color="disabled" fontSize="large"/>
                )}
              </IconButton>
              <IconButton onClick={handle4PerRowClick}>
                {!selected ? (
                  <GridViewSharpIcon color="action" fontSize="large" />
                ) : (
                  <GridViewSharpIcon color="disabled" fontSize="large" />
                )}
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
</ThemeProvider>
  );
}
