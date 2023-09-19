import React from "react";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import ChurchEvents from "../../Components/ChurchEvents";
import Cults from "../../Components/Cults"
import TalkToUs from "../../Components/TalkToUs";
import Information from "../../Components/Information";
import ImageMain from "../../Utils/Images/imagem_teste.jpg";
import Logo from '../../Utils/Images/ad-logo.png';

import './style.css';

function Home() {

    const navItems = ['Cults', 'Events', 'Contact']; // cada item desse representa o id de cada section 
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton href={`#${item}`} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={12}
                    className="image"
                    sx={{
                        backgroundImage: `url(${ImageMain})`,
                        backgroundRepeat: 'no-repeat',
                        // backgroundColor: (t) =>
                        //     t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <Box sx={{ display: 'flex' }}>
                        <AppBar component="nav" className="nav_bar">
                            <Toolbar>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{ flexGrow: 1 }}
                                >
                                    <img src={Logo} alt="Logo Assembléia de Deus Monteiro" />
                                </Typography>
                                <Box
                                    sx={{ display: { xs: 'none', sm: 'block' } }}
                                >
                                    {navItems.map((item) => (
                                        <Link href={`#${item}`} underline='none' color="inherit" className='link-app-bar'>{item}</Link>
                                    ))}
                                </Box>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{ display: { sm: 'none' } }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <nav>
                            <Drawer
                                variant="temporary"
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                                sx={{
                                    display: { xs: 'block', sm: 'none' },
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 200 },
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </nav>
                    </Box>
                </Grid>
            </Grid>
            <section>
                <Information />
            </section>
            <section id="Cults">
                <Cults />
            </section>
            <section id="Events" >
                <ChurchEvents />
            </section>
            <section id="Contact">
                <TalkToUs />
            </section>
        </div>
    );
}

export default Home;