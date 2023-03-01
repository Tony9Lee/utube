import { Stack, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';
import Login from './Login';

const Navbar = () => (
  <Box sx={{ position: 'sticky', top: 0, background: '#000', }}>
    <Stack 
      direction ="row" 
      alignItems="center" 
      p={2} 
      sx={{ display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'space-between', }}
    >
      <div 
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '160px'
        }}
      >
        <Link to="/" >
          <img src={logo} alt="logo" height={45} />
        </Link>
        <Login />
      </div>
      <div style={{paddingRight:"50px"}}>
        <SearchBar />
      </div>
    </Stack>
  </Box>
)

export default Navbar;