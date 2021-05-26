import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../../contexts/contactsProvider';
import './style.css'

export default function Contacts() {
  const { contacts } = useContacts()

  return (
    <ListGroup variant="flush chatList">
      {contacts.map((contact, index) => (
        <ListGroup.Item key={index} className="liItem">
          {contact.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}