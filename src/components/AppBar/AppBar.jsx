import { useState } from 'react';
import Box from '@mui/material/Box';
import ModeSelect from '~/components/ModeSelect/ModeSelect';
import AppsIcon from '@mui/icons-material/Apps';
import {ReactComponent as TrelloIcon} from '~/assets/trello.svg' 
import SvgIcon from '@mui/material/SvgIcon';
import Typography  from '@mui/material/Typography';
import WorksSpace from './Menus/WorksSpace';
import Recent from './Menus/Recent';
import Starred from './Menus/Starred';
import Templated from './Menus/Templated';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import Profile from './Menus/Profile';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const AppBar = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box px={2} sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
      }}>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
            <AppsIcon sx={{color: 'white'}} />
            <Box sx={{display: 'flex', alignItems: 'center', gap: 0.5}}>
                <SvgIcon component={TrelloIcon} fontSize="small" inheritViewBox sx={{color: 'white'}}/>
                <Typography variant='span' sx={{fontSize: '1.2rem', fontWeight: 'bold', color: 'white'}}>Trello</Typography>
            </Box> 
            <Box sx={{display: {xs: 'none', md: 'flex'}, gap: 1}}>
              <WorksSpace />
              <Recent />
              <Starred />
              <Templated />
              <Button 
                sx={{
                    color: 'white', 
                    border: 'none',
                    '&:hover': {border: 'none'}
                }}
                variant="outlined" 
                startIcon={<LibraryAddIcon />}>
                    Outlined
              </Button>
            </Box>

        </Box>

        <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
          <TextField 
              id="outlined-search" 
              label="Search..." 
              type="text" 
              size='small' 
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              InputProps={{
                startAdornment : (
                  <InputAdornment position="start">
                     <SearchIcon sx={{color: 'white'}} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <CloseIcon 
                    fontSize='small'
                    sx={{color: searchValue ? 'white' : 'transparent', cursor: 'pointer'}}  
                    onClick={() => setSearchValue('')}

                  />
                )
              }}
              sx={{
                  minWidth: '120px',
                  maxWidth: '170px',  
                  '& label': {color: 'white'},
                  '& input': {color: 'white'},
                  '& label.Mui-focused': {color: 'white'},
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white'},
                    '&:hover fieldset' : { borderColor: 'white'},
                    '&.Mui-focused fieldset' : {borderColor: 'white'}
                  }
              }} 
            />
          <ModeSelect />
          <Tooltip title="Notification">
             <Badge color="warning " variant="dot" sx={{cursor: "pointer"}}>
               <NotificationsIcon sx={{color: 'white'}} />
            </Badge>  
          </Tooltip>
          <Tooltip title="help"> 
              <HelpIcon sx={{cursor: 'pointer', color: 'white'}}/>
          </Tooltip>
          <Profile />
        </Box>
      </Box>
  )
}

export default AppBar