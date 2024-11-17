// Task 1
const user = {
    name: 'Dev',
    age: 21,
    address: {
        street: '123 main',
        city: 'Ahmedabad',
        country: 'India'
    }

}
// Task 2: Read User Profile Information
const logUserInfo = () => {
    const { name, address: { city } } = user;

    console.log(name)
    console.log(city)
}

logUserInfo();

// Task 3: Update User Age

const updateUserAge = (userProfile, newAge) => ({
    ...userProfile,
    age: newAge
});

const updatedUser = updateUserAge(user, 25);
console.log(updatedUser);

    
// Task 4: Delete User Address Property
const removeUserAddress = ({ address, ...rest }) => ({ ...rest });

const userWithoutAddress = removeUserAddress(user);
console.log(userWithoutAddress);

// Task 5: Merge User Profiles
const mergeUserProfiles = (userProfile1, userProfile2) => ({ ...userProfile1, ...userProfile2 });

console.log(mergeUserProfiles(user, updatedUser));
// Task 6: Nested Object Update

const updateUserAddress = (userProfile, newAddress) => ({ 
    ...userProfile, 
    address: newAddress 
});

// Task 7:Clone User Profile

const cloneUserProfile = (userProfile) => ({ ...userProfile });

const clonedUser = cloneUserProfile(user);
console.log(clonedUser);


// Task 8: Check for Address Existence

const checkForAddress = (userProfile) => 'address' in userProfile;

console.log(checkForAddress(user));


//Task 9: Update User Name

const updateUserName = (userProfile, newName) => ({ 
    ...userProfile, 
    name: newName 
});

const updatedUserName = updateUserName(user, 'dev');
console.log(updatedUserName);


// Task 10: Deep Merge User Profiles

const deepMergeUserProfiles = (userProfile1, userProfile2) => ({ 
    ...userProfile1, 
    ...userProfile2 
});

const deepMergedUser = deepMergeUserProfiles(user, updatedUser);
console.log(deepMergedUser);