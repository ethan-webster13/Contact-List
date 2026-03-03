import { useEffect, useState } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import './services/userServices.js';
import { getUsers, deleteUser, createNewUser } from './services/userServices.js';
import UserDetails from './components/UserDetails.jsx';
import CreateUser from './components/CreateUser.jsx';

const Users =  () => {
    const [users, setUsers] = useState([])

  const currentHighestId = users.length > 0 
  ? Math.max(...users.map(u => Number(u.id))) 
  : 0;
  const nextId = currentHighestId + 1;
    

    const fetchUsers = async () => {
        const data = await getUsers();
        setUsers(data)

    }
    

    useEffect(()=>{
        fetchUsers();      
    },[])
    

    const handleDelete = async (id) => {
      let deleted = await deleteUser(id);
        console.log(deleted.id);
      const updated = users.filter(user => user.id !== deleted.id);
      setUsers(updated)      
    }
    
     




    const handleCreate =  async (newUser) => {
       const response = await createNewUser(newUser);
       const userWithCorrectId = {   ...response, id: newUser.id  };

       if (newUser) setUsers((prevUsers)=>[...prevUsers, userWithCorrectId])

    }
    


  return (
    <div>
      <Typography variant="h2">Users</Typography>
      <List className='userList'>
        {users.map(user => (
          <ListItem key={user.id} sx={{ width: '400px' }}>
            <UserDetails  user={user} onDelete={handleDelete}/>
          </ListItem>
        ))}
          <CreateUser newId={nextId} onAdd={handleCreate}/>
      </List>

    </div>
  );

}
export default Users;