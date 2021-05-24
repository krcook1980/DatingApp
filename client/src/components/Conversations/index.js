import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useConversations } from '../../contexts/conversationProvider';
import './style.css'

export default function Conversations(){
    const { conversations, selectedConvIndex } = useConversations()


    return (
      <ListGroup variant="flush chatList">
      {conversations.map((conversation, index) => (
        <ListGroup.Item
        action variant="warning" 
        style={{background: "rgb(254,240,180)", color: "#4c004c"}}
        key={index}
        action
        onClick={()=> selectedConvIndex(index)}
        active={conversation.selected}
        
        >
          {conversation.recipients.map(r => r.name).join(', ')}
        </ListGroup.Item> 
       ))}
    </ListGroup>

    )
}