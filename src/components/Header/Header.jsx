import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import logo from '../../images/logo.png'
import './Header.sass'

const Header = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <header>
      <AppBar position="static" style={{ backgroundColor: 'white', height: '80px', display: 'flex', justifyContent: 'center' }}>
        <Container maxWidth="xl" >
          <Toolbar  >


            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <img src={logo} alt="logo" />
              <nav >
                <ul>
                  <li>CITIES</li>
                  <li>CULTURE</li>
                  <li>HISTORY</li>
                  <li>NEWS</li>
                </ul>
              </nav>
                <button>Create new post</button>
            </Box>


      <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', alignItems:'center', width:'100%' }}>
      
        <MenuIcon sx={{ color: 'black', height:'30px', width:'30px', cursor:'pointer' }} onClick={handleOpenNavMenu}/>
        <img src={logo} alt="logo" />

      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
                <ul>
                  <li>CITIES</li>
                  <li>CULTURE</li>
                  <li>HISTORY</li>
                  <li>NEWS</li>
                </ul>
      </Menu>

    </Box> 




          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};
export default Header;
