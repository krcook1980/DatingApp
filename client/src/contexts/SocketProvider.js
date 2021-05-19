import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client'

const SocketContext = React.createContext();

export function useSocket(){
    return useContext(SocketContext)
}

export function SocketProvider({ Id, children }) {
    const [socket, setSocket] = useState();
    
    useEffect(() => {
        console.log("i am in socket ", Id)
        const newSocket= io('http://localhost:5000', {query: {Id}})
        console.log("new socket here ", newSocket)
        setSocket(newSocket)
        return () => newSocket.close()
    }, [Id])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}
