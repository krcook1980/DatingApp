import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useConversations } from '../../contexts/conversationProvider';

export default function Conversations(){
    const { conversations, selectedConvIndex } = useConversations()


    return (
      <ListGroup variant="flush">
      {conversations.map((conversation, index) => (
        <ListGroup.Item 
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