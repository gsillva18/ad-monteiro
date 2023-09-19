import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import logo from '../../Utils/Images/ad-logo.png';

import './style.css';

function FunctionsBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='app-bar'>
                <Toolbar className='toolbar-usage'>
                    <Box sx={{ width: '100%', m: "10px" }}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            flexWrap="wrap"
                        >

                            <Stack
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                flexWrap="wrap"
                            >
                                <img src={logo} alt="Imagem Assembléia de Deus Monteiro" />
                            </Stack>
                            <Stack
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                flexWrap="wrap"
                            >
                                <Link href='#' underline='none' color="inherit">Cults</Link>
                                <Link href='#' underline='none' color="inherit" className='link-app-bar'>Events</Link>
                                <Link href='#' underline='none'>Fale conosco</Link>
                            </Stack>
                        </Stack>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default FunctionsBar;