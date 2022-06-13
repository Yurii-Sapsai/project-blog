import * as React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import logo from '../../images/logo.png'
import './Header.sass'

import { UserAuth } from '../../context/AuthContext';

const Header = () => {

  const { user, logout } = UserAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlerLogout = async () => {
    try {
      await logout()
      navigate('/admin/login')

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <header>
      <AppBar position="static" style={{ backgroundColor: 'white', height: '80px', display: 'flex', justifyContent: 'center' }}>
        <Container maxWidth="xl" >
          <Toolbar  >


            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

              <NavLink to='/'><img src={logo} alt="logo" /></NavLink>

              {user
                ? <div >
                  {location.pathname === '/admin/' || location.pathname === '/admin'
                      ? null 
                      : <NavLink to='/admin/'><button className='signUp'>Create new post</button></NavLink>}
                  <button className='signIn' onClick={() => handlerLogout()} >Log Out</button>
                </div>
                : <div >
                  <NavLink to='/admin/registration'><button className='signUp'>Sign Up</button></NavLink>
                  <NavLink to='/admin/login'><button className='signIn'>Sign In</button></NavLink>
                </div>
              }
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>

              <MenuIcon sx={{ color: 'black', height: '90px', width: '30px', cursor: 'pointer' }} onClick={handleOpenNavMenu} />
              <NavLink to='/'><img src={logo} alt="logo" /></NavLink>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                <div style={{ padding: '25px' }}>
                  {user
                    ? <div >
                      {location.pathname === '/admin/' || location.pathname === '/admin'
                      ? null 
                      : <NavLink to='/admin/'><button className='signUp' style={{ width: 'auto', height: '35px', padding: '0px 15px' }}>Create new post</button></NavLink>}
                      <button className='signIn' onClick={() => handlerLogout()} style={{ width: '100px', height: '35px' }}>Log Out</button>
                    </div>
                    : <div >
                      <NavLink to='/admin/registration'><button className='signUp' style={{ width: '100px', height: '35px' }}>Sign Up</button></NavLink>
                      <NavLink to='/admin/login'><button className='signIn' style={{ width: '100px', height: '35px' }}>Sign In</button></NavLink>
                    </div>
                  }
                </div>
              </Menu>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};
export default Header;