import React, {useState} from 'react';
import { Tab, Nav, Button, Modal } from 'react-bootstrap';
import Conversations from '../Conversations';
import Contacts from '../DashboardContacts';
import ConversationModal from '../ConversationModal';
import './style.css'

export default function Sidebar({id}) {
    const Converstation_Key = 'conversations';
    const Contact_Key = 'contact'
    const [activeKey, setActiveKey] =useState(Converstation_Key);
    const [modalOpen, setModalOpen] = useState(false);
    
    
    function closeModal () {
        setModalOpen(false)
    }

    return(
        <div style={{width: '35%'}} className="d-flex flex-column mb-2">
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-center chatbar rounded">
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
            <Tab.Content className="border-right overflow-auto flex-grow-1 chatbar ">
                <Tab.Pane eventKey={Converstation_Key}>
                    <Conversations />
                </Tab.Pane>
                <Tab.Pane eventKey={Contact_Key}>
                    <Contacts />
                </Tab.Pane>
            </Tab.Content> 
            
            <Button className="rounded-0" onClick={() => setModalOpen(true)}>
                New Conversation
            </Button> 
            </Tab.Container>

            {/* opens to create new conversation with contacts */}
            <Modal show={modalOpen} onHide={closeModal}>
               <ConversationModal closeModal={closeModal}/>
            </Modal>
        </div>
    )
}