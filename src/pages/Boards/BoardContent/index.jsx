import Box from '@mui/material/Box';
const BoardContent = () => {
  return (
    <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        display: 'flex',
     }}>
        {/* Column */}
        <Box sx={{
           minWidth: '300px',
           maxWidth: '300px',
           bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
           ml: 2,
           borderRadius: '6px',
        }}>
          <Box sx={{}}>
              Header
          </Box>
          <Box sx={{}}>
              List Card
          </Box>
          <Box sx={{}}>
              Footer
          </Box>
        </Box>
     </Box>
  )
}
export default BoardContent 