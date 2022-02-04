import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import {  ThemeProvider, createTheme } from '@mui/material/styles';

const bookmarks = [ 'tech', 'projects', 'contact'];
const sections = ['Technologies', 'Projects', 'Contact'];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const theme = useTheme();
  //on desktop true
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    // console.log(event.target)

    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
    //   setAnchorElUser(event.currentTarget);
  // };
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const handleCloseNavMenu = () => { 
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function HideOnScroll(props) {
    const { children} = props;
    // if on desk the scroll trigger will be false so the Slide transition won't happen
    const trigger = useScrollTrigger();
    // console.log(matches)
    return (
      <Slide appear={false} direction="down" in={matches ? true : !trigger}>
        {children}
      </Slide>
    );
  }
  // HideOnScroll.propTypes = {
  //   children: PropTypes.element.isRequired,
  //   window: PropTypes.func,
  // };

  return (
    <ThemeProvider theme={darkTheme}>
    <HideOnScroll >
    <AppBar position="fixed" style={{background:'#324766',width:'100%'}} id='top' >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
        <div className="flex justify-between w-full items-center p-3" >
          <div>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                    <Link passHref href='#top' >
                      <a className="ml-3">
                      My Portfolio
                      </a>
                  </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
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
                sx={{
                  // pr:0,
                  // background:'grey',
                  display: { xs: 'block', md: 'none' },
                  // width:'100%'
                }}
                
              >
                {bookmarks.map((page, index) => (
                  // <>
                  /* { index!==0 && <Divider />} */
                  <MenuItem 
                  sx={{ padding:3}}
                  key={page} 
                  onClick={handleCloseNavMenu}
                  divider={index!==bookmarks.length-1 ? true:false}
                  >
                    <Typography textAlign="center">
                        <Link passHref href={'#'+page}>
                          <a >
                              {sections[index]}
                          </a>
                        </Link>
                    </Typography>
                  </MenuItem>
                  //  </>

                ))}
              </Menu>
            </Box>
          </div>
            
            <div>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <Link passHref href='#top' >
                      <a className="ml-3">
                      My Portfolio
                      </a>
                  </Link>

            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {bookmarks.map((page,index) => (
                  <div key={page} className='mx-2'>
                    <Typography textAlign="center">
                        <Link passHref href={'#'+page}>
                          <a >
                              {sections[index]}
                          </a>
                        </Link>
                    </Typography>
                  </div>
                ))}
            </Box>
            </div>
        </div>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
    </ThemeProvider>

  );
};
export default Header;
