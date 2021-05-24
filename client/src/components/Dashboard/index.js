import React from 'react';
import Sidebar from '../Sidebar';
import OpenConv from '../OpenConv';
import { useConversations } from '../../contexts/conversationProvider';
import NavBar from "../nav-bar"
import {Row, Col} from 'react-bootstrap';
import Container from '../Container.js'


// Thank you WebDevTools @ https://www.youtube.com/watch?v=tBr-PybP_9c
export default function Dashboard({Id, contacts}){
    const {selectedConv } = useConversations()
    return (<>
    <Container className="rounded">
    <Row className="mt-2">
        <Col>
        <NavBar />
        </Col>
    </Row>
    <Row className="mt-4">
        <Col>
        <div className="d-flex" style={{height: '85vh'}}>
            <Sidebar Id={Id} contacts={contacts}/>
            {selectedConv && <OpenConv />}
       
       </div>
        </Col>
       </Row>
       </Container>
       </>
    )
}