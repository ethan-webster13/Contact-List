import React from 'react';
import { Button, Typography, Card, CardContent, CardActions } from '@mui/material'


const UserDetails = ({ user, onDelete, onEdit }) => {


  return (
    <Card>
        <CardContent>
            <Typography variant='h5'>
                {user.firstName} {user.lastName}
            </Typography>
            <Typography color='text.secondary'>
                Age:{user.age}  Gender:{user.gender}
            </Typography>
            <Typography color='text.secondary'>
                Phone #: {user.phone} 
            </Typography>
            <Typography  color='text.secondary'>
                Birth Date: {user.birthDate}
            </Typography>
            
            <CardActions>
                <Button onClick={()=>onEdit(user.id, user)} sx={{marginRight: '5px'}}>Edit</Button>
                <Button onClick={() =>onDelete(user.id)}>Delete</Button>
            </CardActions>
        </CardContent>
    </Card>
   
  );
};

export default UserDetails;