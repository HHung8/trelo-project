import React from 'react'
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Avatar  from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const Profile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ padding: 0}}
            aria-controls={open ? 'basic-mennu-profiles' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar 
              sx={{width: 36, height: 36}} 
              alt='Yushing Dev'
              src='https://images.unsplash.com/photo-1529397938791-2aba4681454f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGh1bWFufGVufDB8fDB8fHww'
           />
          </IconButton>
        </Tooltip>
        <Menu
                id="basic-menu-profile"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button-profile',
            }}
        >
        <MenuItem onClick={handleClose}>
          <Avatar sx={{width: 28, height: 28, mr: 2}} /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{width: 28, height: 28, mr: 2}} /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profile