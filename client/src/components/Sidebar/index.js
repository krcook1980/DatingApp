import React, {useState} from 'react';
import { Tab, Nav, Button, Modal } from 'react-bootstrap';
import Conversations from '../Conversations';
import Contacts from '../Contacts';
import ConversationModal from '../ConversationModal';
import ContactModal from '../ContactModal';

export default function Sidebar({id}) {
    const Converstation_Key = 'conversations';
    const Contact_Key = 'contact'
    const [activeKey, setActiveKey] =useState(Converstation_Key);
    const conversationsOpen = activeKey === Converstation_Key;
    const [modalOpen, setModalOpen] = useState(false);
    
    function closeModal () {
        setModalOpen(false)
    }

    return(
        <div style={{width: '25%'}} className="d-flex flex-column">
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey={Converstation_Key}>
                            Conversations
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={Contact_Key}>
                            Contacts
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            <Tab.Content className="border-right overflow-auto flex-grow-1">
                <Tab.Pane eventKey={Converstation_Key}>
                    <Conversations />
                </Tab.Pane>
                <Tab.Pane eventKey={Contact_Key}>
                    <Contacts />
                </Tab.Pane>
            </Tab.Content> 
            <div className="p-2 border-top border-right small">
                You are logged in as: <span className="text=muted">{id}</span>
            </div>  
            <Button className="rounded-0" onClick={() => setModalOpen(true)}>
                New {conversationsOpen ? 'Conversation' : 'Contact'}
            </Button> 
            </Tab.Container>
            <Modal show={modalOpen} onHide={closeModal}>
                {conversationsOpen ?
                    <ConversationModal closeModal={closeModal}/> :
                    <ContactModal closeModal={closeModal}/>
                }
           
            </Modal>
        </div>
    )
}