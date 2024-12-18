import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLink = (link: string) => {
        setAnchorEl(null);
        window.location.href = link; // Replace with your desired URL
    };

    return (
        <AppBar position="fixed" style={{ backgroundColor: 'beige' }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="black"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleClick}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            backgroundColor: 'beige',
                        },
                    }}
                >
                    <MenuItem onClick={() => handleLink('https://jackdzi.github.io/startpage')}>Startpage</MenuItem>
                    <MenuItem onClick={() => handleLink('https://ricecarrera.vercel.app')}>Website for club</MenuItem>
                </Menu>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, color: 'black' }}
                >
                    Portfolio Website
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
