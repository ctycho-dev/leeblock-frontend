"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaHome, FaUser } from "react-icons/fa"
import { RiShoppingBag4Fill } from "react-icons/ri"
import { IoMdClose, IoMdMenu } from "react-icons/io"
import { MdDashboard } from "react-icons/md"
import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material"

// Define navigation link type
interface NavLink {
  path: string
  label: string
  icon: React.ComponentType<{ size?: number }>
}

// Navigation links data
const navLinks: NavLink[] = [
  { path: "/", label: "Home", icon: FaHome },
  { path: "/dashboard", label: "Dashboard", icon: MdDashboard },
  { path: "/products", label: "Products", icon: RiShoppingBag4Fill },
]

export function Navbar(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const location = useLocation()

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleProfileMenuClose = () => {
    setAnchorEl(null)
  }

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{
          height: 80,
          backdropFilter: "blur(10px)",
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.8)" : "rgba(18, 18, 18, 0.8)",
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar sx={{ height: 80 }}>
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
              color: "text.primary",
            }}
          >
            <MdDashboard size={24} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              LeeBlock
            </Typography>
          </Box>

          {/* Desktop navigation links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, ml: 4 }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Box
                  key={link.path}
                  component={Link}
                  to={link.path}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    px: 2,
                    py: 1,
                    textDecoration: "none",
                    color: isActive ? "primary.main" : "text.secondary",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <link.icon size={16} />
                  {link.label}
                </Box>
              )
            })}
          </Box>

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(true)}
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          >
            <IoMdMenu />
          </IconButton>

          {/* Profile avatar and menu */}
          <IconButton
            aria-label="User menu"
            aria-controls="profile-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar alt="User" src="/placeholder.svg?height=32&width=32" sx={{ width: 32, height: 32 }}>
              <FaUser size={16} />
            </Avatar>
          </IconButton>

          <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleProfileMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Mobile menu drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            maxWidth: 280,
            boxSizing: "border-box",
          },
        }}
      >
        {/* Mobile menu header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 80,
            px: 2,
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
              color: "text.primary",
            }}
          >
            <MdDashboard size={24} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              LeeBlock
            </Typography>
          </Box>

          <IconButton color="inherit" aria-label="Close menu" onClick={() => setMobileMenuOpen(false)}>
            <IoMdClose />
          </IconButton>
        </Box>

        {/* Mobile menu links */}
        <List sx={{ py: 2 }}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <ListItem key={link.path} disablePadding>
                <ListItemButton
                  component={Link}
                  to={link.path}
                  selected={isActive}
                  onClick={() => setMobileMenuOpen(false)}
                  sx={{
                    borderRadius: 1,
                    mx: 1,
                    my: 0.5,
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <link.icon size={20} />
                  </ListItemIcon>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>

        {/* Mobile menu footer with user info */}
        <Box
          sx={{
            mt: "auto",
            p: 2,
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, p: 1 }}>
            <Avatar alt="User" src="/placeholder.svg?height=40&width=40" sx={{ width: 40, height: 40 }}>
              <FaUser size={20} />
            </Avatar>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                User Name
              </Typography>
              <Typography variant="body2" color="text.secondary">
                user@example.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Drawer>

      {/* Content spacer */}
      <Box sx={{ height: 80 }} />
    </>
  )
}

