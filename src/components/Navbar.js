import * as React from 'react';
import { Link } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import { useTheme } from "@material-ui/styles";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import OneBookButton from './OneBookButton';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.DARK_GREY.main, 0.25),
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Navbar() {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const goToMobileMenu = () => {
    window.location.href = '/MobileMenu';
  };

  const goToMyBook = () => {
    const userId = 1;
    window.location.href = '/user/'+userId;
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
      <MenuItem onClick={handleMenuClose}>Profil</MenuItem>
      <MenuItem onClick={handleMenuClose}>Mon book</MenuItem>
      <MenuItem onClick={handleMenuClose}>Déconnexion</MenuItem>
    </Menu>
  );

  // temp variables
  let userConnected = true;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ 
        color: theme.palette.DARK_GREY.main, 
        backgroundColor: 'white' 
      }}>
        <Grid container sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr' }}>
          <Grid item sx={{ 
            display: 'flex', 
            justifyContent: 'start', 
            alignItems: 'center', 
            marginLeft: { xs: 1, sm: 2, md: 4 } 
          }}>
            <OneBookButton />
          </Grid>
          <Grid item sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            width: '100%' 
          }}>
            <Search sx={{
              backgroundColor: theme.palette.BG.main,
              borderRadius: 45,
              width: { xs: '85%', sm: '60%', md: '50%' },
              height: '60%',
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
            }}>
              <SearchIconWrapper>
                <SearchIcon sx={{ fontSize: { xs: '1em', sm: '1.2em', md: '1.5em' } }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                sx={{ fontSize: { xs: '70%', sm: '85%', md: '100%' }, width: '100%' }}
              />
            </Search>
          </Grid>
          <Grid item sx={{ 
            display: 'flex', 
            justifyContent: 'end', 
            alignItems: 'center', 
            marginRight: { xs: 1, sm: 2, md: 4 } 
          }}>
            <Box sx={{ display: { xs: 'none', md: (!userConnected ? 'flex' : 'none') } }}>
              <Link to="/login" style={{
                color: theme.palette.TEXT.main, 
                fontFamily: 'Arsenal',
                fontSize: '20px', 
                textDecoration: "none" 
              }}>
                Se connecter
              </Link>
            </Box>
            <Box sx={{ display: { xs: 'none', md: (userConnected ? 'flex' : 'none') } }}>
              <IconButton size="large" color="inherit">
                <AddCircleOutlineIcon sx={{ fontSize: '1.2em' }} />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={0} color="error">
                  <NotificationsIcon sx={{ fontSize: '1.2em' }} />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle sx={{ fontSize: '1.2em' }} />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }} >
              <IconButton
                size="large"
                color="inherit"
                onClick={goToMyBook}
                sx={{ display: (userConnected ? 'flex' : 'none') }}
              >
                <AccountCircle />
              </IconButton>
              <IconButton
                size="large"
                onClick={goToMobileMenu}
                color="inherit"
              >
                <MenuIcon sx={{ marginLeft: '-0.5em' }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </AppBar>
      {renderMenu}
    </Box>
  );
}

export default Navbar;