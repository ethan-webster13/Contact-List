import React from 'react';
import { Typography, Card, CardContent, CardActions } from '@mui/material'
// TODO: Import Button component from Material-UI

const UserDetails = ({ user, onDelete }) => {

  // TODO: Replace the button elements with the Button component
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

            </CardActions>
        </CardContent>
    </Card>
   
  );
};

export default UserDetails;