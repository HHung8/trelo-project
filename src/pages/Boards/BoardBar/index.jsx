import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
     bgcolor: 'primary.50'
  }
}

const BoardBar = () => {
  return (
    <Box px={2} sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        borderBottom: '1px solid white'
      }}>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 2}} >
          <Chip 
            sx={MENU_STYLES}
            icon={<DashboardIcon />} 
            label="Yushing Dev fullstack" 
            clickable
          />
           <Chip 
            sx={MENU_STYLES}
            icon={<VpnLockIcon />} 
            label="Public/Private Worksapce" 
            clickable
          />
           <Chip 
            sx={MENU_STYLES}
            icon={<AddToDriveIcon />} 
            label="Add to Google Drive" 
            clickable
          />
           <Chip 
            sx={MENU_STYLES}
            icon={<BoltIcon />} 
            label="Automation" 
            clickable
          />
          <Chip 
            sx={MENU_STYLES}
            icon={<FilterListIcon />} 
            label="Filter" 
            clickable
          />
        </Box>

        <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
          <Button 
              variant="outlined" 
              startIcon={<PersonAddIcon />}
              sx={{
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {borderColor: 'white'}
              }}
          >
              Invite
          </Button>  
          <AvatarGroup 
            max={4}
            sx={{
                gap: '10px',
              '& .MuiAvatar-root' : {
                width: 34, 
                height: 34,
                fontSize: 16,
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                '&:first-of-type': {bgcolor: '#a4b0be'}
              }
            }}
            >
            <Avatar alt="Remy Sharp" src="https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8fDA%3D" />
            <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh1bWFufGVufDB8fDB8fHww" />
            <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fHww" />
            <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGh1bWFufGVufDB8fDB8fHww" />
            <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGh1bWFufGVufDB8fDB8fHww" />
          </AvatarGroup>
        </Box>
        
        
      </Box>
  )
}

export default BoardBar