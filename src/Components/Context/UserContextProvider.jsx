import React from 'react';
import UserContext from './UserContext';
import axios from 'axios';

import React from 'react'

function UserContextProvider({ children }) {
    return (
        <UserContext.Provider value={{
            
        }}>

            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
