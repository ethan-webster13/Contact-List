import { useEffect, useState } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import './services/userServices.js';
import { getUsers, deleteUser, createNewUser, editUser } from './services/userServices.js';
import UserDetails from './components/UserDetails.jsx';
import CreateUser from './components/CreateUser.jsx';
import EditUser from './components/EditUser.jsx';

const Users =  () => {
    const [users, setUsers] = useState([])
    const [editId, setEditId] = useState(null)

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
    

    const handleEdit = async (id, preUser) => {
      let edited = await editUser(id);
      const updated = { ...[preUser, edited]}
      console.log(updated)
      

    }

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
    //conditional to show regular user, or <editUser Card>

    //need handle save
//edit id must exist in order to map through users

  return (
    <div>
      <Typography variant="h2">Users</Typography>
      <List className='userList'>

        {editId == null ? users.map(user => (
          <ListItem key={user.id} sx={{ width: '400px' }}>
            <UserDetails  user={user} onEdit={handleEdit} onDelete={handleDelete}/>
          </ListItem>
        )) 
      : <ListItem key={user.id} u>
          <EditUser user={users} />
        </ListItem>}

      <CreateUser newId={nextId} onAdd={handleCreate}/>

      </List>

    </div>
  );

}
export default Users;