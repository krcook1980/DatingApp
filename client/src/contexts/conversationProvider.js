import React, { useContext, useState, useEffect, useCallback } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useContacts } from './contactsProvider';
import { useSocket } from './SocketProvider';

const ConversationContext = React.createContext()

export function useConversations() {
    return useContext(ConversationContext)
}

export function ConversationProvider({ id, children }) {
    const [conversations, setConversations] = useLocalStorage('Conversations', []);
    const { contacts } = useContacts()
    const [selectedConvIndex, setSelectedConvIndex] = useState(0)
    const socket = useSocket();

    function createConversation(recipients) {
        setConversations(prevConversations => {
            return [...prevConversations, { recipients, messages: [] }]
        })
    }

    const addMsg = useCallback(({ recipients, text, sender }) => {
       console.log(" add ", text)
        setConversations(prevConversations => {
          
            let madeChange = false;
            const newMsg = { sender, text };
            const newConv = prevConversations.map
            (conversation => {
               
                if (arrayEquality(conversation.recipients, recipients)) 
                {
                    madeChange = true
                    return {...conversation, messages: [...conversation.messages, newMsg]}
                }
                return conversation
            })

            if (madeChange) {
                return newConv
            }
            else {
                return [
                    ...prevConversations,
                    { recipients, messages: [newMsg] }
                ]
            }
        })
    }, [setConversations])

    useEffect(() => {
        if(socket == null) return
        socket.on('receive-message', addMsg);
        return () => socket.off('receive-message')
    }, [socket, addMsg])

    function sendMsg( recipients, text ) {
        socket.emit('send-message', { recipients, text})
        addMsg({ recipients, text, sender: id })
    }

    const formattedConversation = conversations.map((conversation, index) => {
        const recipients = conversation.recipients.map(recipient => {
            const contact = contacts.find(contact => {
                return contact.id === recipient
            })
            const name = (contact && contact.name) || recipient
            return { id: recipient, name }
        })
        const messages = conversation.messages.map(message => {
            const contact = contacts.find(contact => {
                return contact.id === message.sender
            })
            const name = (contact && contact.name || message.sender)
            const fromMe = id === message.sender
            return { ...message, senderName: name, fromMe }
        })

        const selected = index === selectedConvIndex
        console.log("here", {...conversation})
        return { ...conversation, messages, recipients, selected }
    })

    const value = {
        conversations: formattedConversation,
        selectedConv: formattedConversation[selectedConvIndex],
        sendMsg,
        selectedConvIndex: setSelectedConvIndex,
        createConversation
    }

    return (
        <ConversationContext.Provider value={value}>
            {children}
        </ConversationContext.Provider>
    )
}

function arrayEquality(a, b) {
    console.log(a, " whats here ", b)
    if (a.length !== b.length) return false
    a.sort()
    b.sort()

    return a.every((element, index) => {
        return element === b[index]
    })
};