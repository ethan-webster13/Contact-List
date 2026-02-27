import { useEffect, useState } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import './services/userServices.js';
import { getUsers } from './services/userServices.js';
import UserDetails from './components/UserDetails.jsx';

const Users =  () => {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const data = await getUsers();
        setUsers(data)

    }

    useEffect(()=>{
        fetchUsers();
    },[])
    

  return (
    <div>
      <Typography variant="h2">Users</Typography>
      <List>
        {users.map(user => (
          <ListItem key={user.id} sx={{ width: '400px' }}>
            <UserDetails user={user} />
          </ListItem>
        ))}
      </List>
    </div>
  );

}
export default Users;