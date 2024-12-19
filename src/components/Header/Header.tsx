import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoSunny, IoMoon } from "react-icons/io5";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Update the "dark" class on the root HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLink = (link: string) => {
    setAnchorEl(null);
    window.location.href = link;
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isDarkMode ? "#1E1E1E" : "beige", // Dark or light background
          transition: "background-color 0.3s ease", // Smooth transition
        }}
      >
        <Toolbar>
          {/* Menu Icon */}
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon style={{ color: isDarkMode ? "white" : "black" }} />
          </IconButton>

          {/* Menu Items */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              style: {
                backgroundColor: isDarkMode ? "#333" : "beige",
              },
            }}
          >
            <MenuItem
              style={{ color: isDarkMode ? "white" : "black" }}
              onClick={() => handleLink("https://jackdzi.github.io/startpage")}
            >
              Startpage
            </MenuItem>
            <MenuItem
              style={{ color: isDarkMode ? "white" : "black" }}
              onClick={() => handleLink("https://ricecarrera.vercel.app")}
            >
              Carrea
            </MenuItem>
          </Menu>

          {/* Title */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: isDarkMode ? "white" : "black",
              transition: "color 0.3s ease",
            }}
          >
            Portfolio Website
          </Typography>

          {/* Dark Mode Toggle */}
          <div className="ml-auto text-center">
            <button onClick={() => setIsDarkMode((prev) => !prev)} className="hover:bg-transparent outline-none hover:bg-opacity-0 hover:border-transparent">
              {isDarkMode ? (
                <IoSunny style={{ color: "white", fontSize: "24px" }} />
              ) : (
                <IoMoon style={{ color: "black", fontSize: "24px", backgroundColor: "transparent" }} />
              )}
            </button>
          </div>
        </Toolbar>
      </AppBar>
      {/* Content Padding */}
    </>
  );
};

export default Header;
