
import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client'

const SocketContext = React.createContext();

export function useSocket(){
    return useContext(SocketContext)
}

export function SocketProvider({ id, children }) {
    const [socket, setSocket] = useState();
    const heroku = 'https://love-is-blind.herokuapp.com/'
    useEffect(() => {
        const newSocket= io(heroku, {query: {id}})
        console.log("user connected socket ", id)
        setSocket(newSocket)
        return () => newSocket.close()
    }, [id])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}
  