
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

export const createUser = async (newUser) => {
    const response = await fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ 
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