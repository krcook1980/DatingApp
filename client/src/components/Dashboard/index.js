import React from 'react';
import Sidebar from '../Sidebar';
import OpenConv from '../OpenConv';
import { useConversations } from '../../contexts/conversationProvider';
import NavBar from "../nav-bar"
import {Row, Col} from 'react-bootstrap'

// Thank you WebDevTools @ https://www.youtube.com/watch?v=tBr-PybP_9c
export default function Dashboard({Id, contacts}){
    const {selectedConv } = useConversations()
    return (<>
    <Row>
        <Col>
        <NavBar />
        </Col>
    </Row>
    <Row>
        <Col>
        <div className="d-flex" style={{height: '100vh'}}>
            <Sidebar Id={Id} contacts={contacts}/>
            {selectedConv && <OpenConv />}
       
       </div>
        </Col>
       </Row>
       </>
    )
}