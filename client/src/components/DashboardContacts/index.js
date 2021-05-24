import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../../contexts/contactsProvider';
import './style.css'

export default function Contacts() {
  const { contacts } = useContacts()
  

  return (
    <ListGroup variant="flush chatList">
      {contacts.map(contact => (
        <ListGroup.Item key={contact.id} style={{background: "rgb(254,240,180)"}}>
          {contact.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}