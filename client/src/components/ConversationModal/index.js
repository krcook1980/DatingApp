import React, {useState} from 'react';
import {Modal, Form, Button } from 'react-bootstrap';
import { useContacts } from '../../contexts/contactsProvider';
import {useConversations} from '../../contexts/conversationProvider';

export default function ConversationModal({closeModal}) {
    const [selectedContactIds, setSelectedContactIds] = useState([]);
    const {contacts} = useContacts()
    const {createConversation} = useConversations()
    
    function handleCheckChng(contactId) {
        setSelectedContactIds(previousSelectedContactIds => {
            if (previousSelectedContactIds.includes(contactId)){
                return previousSelectedContactIds.filter(prevId => {
                    return contactId !== prevId
                })
            }
            else { return [...previousSelectedContactIds, contactId]}
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        createConversation(selectedContactIds)
        closeModal()
    }

    return(
        <>
            <Modal.Header closeButton>Create Conversation</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {contacts.map(contact => (
                        <Form.Group controlId={contact.id} key={contact.id}>
                            <Form.Check
                            type="checkbox"
                            value={selectedContactIds.includes(contact.id)}
                            label={contact.name}
                            onChange={() => handleCheckChng(contact.id)}
                            ></Form.Check>
                        </Form.Group>
                    ))}
                    <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </>
    )
}
