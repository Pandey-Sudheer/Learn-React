import React, { Children } from 'react'
import UserContext from './UserContext';

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return (
        // UserContext.Provider is used for value pass on chilren But But But what the value we want to pass
        // on the abover we are passing user and setUser in useState so that we can use it in the children components

        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider >
    )
}

export default UserContextProvider;
// export { UserContextProvider }