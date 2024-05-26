import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (newUser: object) => {
    try {
        // Retrieve the existing array of users
        const existingUsers = await AsyncStorage.getItem('users');

        // Parse the existing users array or initialize an empty array
        let usersArray = existingUsers ? JSON.parse(existingUsers) : [];

        // Ensure usersArray is an array
        if (!Array.isArray(usersArray)) {
            usersArray = [];
        }

        // Add the new user object to the array
        usersArray.push(newUser);

        // Store the updated array back in AsyncStorage
        await AsyncStorage.setItem('users', JSON.stringify(usersArray));
    } catch (error) {
        console.error('Error setting item:', error);
    }
};


export const checkUserExists = async (email: string, password: string) => {
    try {
        let userExist = false;
        // Retrieve existing users
        const existingUsers = await AsyncStorage.getItem('users');
        const users = existingUsers ? JSON.parse(existingUsers) : [];

        // Check if any user matches the provided email and password
        const user = users.find((user: any) => user.email === email && user.password === password);

        if (user) {
            userExist = true;
        } else {
            userExist = false
        }

        return userExist;
    } catch (error) {
        console.error('Error checking user:', error);
    }
};
