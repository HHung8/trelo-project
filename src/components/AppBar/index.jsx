import Box from '@mui/material/Box';
import ModeSelect from '~/components/ModeSelect';
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


const AppBar = () => {
  return (
    <Box px={2} sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto' 
      }}>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
            <AppsIcon sx={{color: 'primary.main'}} />
            <Box sx={{display: 'flex', alignItems: 'center', gap: 0.5}}>
                <SvgIcon component={TrelloIcon} fontSize="small" inheritViewBox sx={{color: 'primary.main'}}/>
                <Typography variant='span' sx={{fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main'}}>Trello</Typography>
            </Box> 
            <Box sx={{display: {xs: 'none', md: 'flex'}, gap: 1}}>
              <WorksSpace />
              <Recent />
              <Starred />
              <Templated />
              <Button variant="outlined">Outlined</Button>
            </Box>
        </Box>  
        <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
          <TextField id="outlined-search" label="Search..." type="search" size='small' sx={{minWidth: '120px'}} />
          <ModeSelect />
          <Tooltip title="Notification">
             <Badge color="secondary" variant="dot" sx={{cursor: "pointer"}}>
               <NotificationsIcon sx={{color: 'primary.main'}} />
            </Badge>  
          </Tooltip>
          <Tooltip title="help"> 
              <HelpIcon sx={{cursor: 'pointer', color: 'primary.main'}}/>
          </Tooltip>
          <Profile />
        </Box>
      </Box>
  )
}

export default AppBar