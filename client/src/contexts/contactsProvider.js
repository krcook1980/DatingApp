import React, { useContext, useEffect, useState } from 'react';
import UserContext from "./userProvider"


const ContactsContext = React.createContext()

export function useContacts() {
    return useContext(ContactsContext)
}

export function ContactsProvider({ children }) {
    const { userData, setUserData } = useContext(UserContext)
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        setContacts(userData.myConnections)
    }, [userData])

    return (
        <>
        
            <ContactsContext.Provider value={{ contacts }}>
                {children}
            </ContactsContext.Provider>
        </>
    )
}