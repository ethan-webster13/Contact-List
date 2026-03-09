
export const getUsers = async () => {
    try {
        const response = await fetch('https://dummyjson.com/users?limit=5');
        const data = await response.json();
        return data.users;
    } catch (error) {console.error('Fetching Failed', error)}
}

export const getUserById = async (id) => {
  return await users.find(user => user.id === id);
};

export const createNewUser = async (newUser) => {
    const response = await fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            id: newUser.id, 
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            age: newUser.age,
            phone: newUser.phone,
            gender: newUser.gender,
            birthDate: newUser.birthDate

         }),}
    );
    const data = await response.json();
    return data;
}

/*
export const editUser = async (id, upUser) => {
    const response = await fetch(`https://dummyjson.com/users/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ upUser }),        
    })
    const data = await response.json();
    return data;
}

 */

export const deleteUser = async (id) => {
    const response = await fetch(`https://dummyjson.com/users/${id}`, {
        method: 'DELETE',
     });
     const data = await response.json();
     return data
     
}

export const editUser = async (id, updatedUser) => {
    const response = await fetch(`https://dummyjson.com/users/${id}`, { 
        method: 'PUT',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ 
            id: updatedUser.id, 
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            age: updatedUser.age,
            phone: updatedUser.phone,
            gender: updatedUser.gender,
            birthDate: updatedUser.birthDate
         })
    }
        
     )
     const data = await response.json();
     return data;

}