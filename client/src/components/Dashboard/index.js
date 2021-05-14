import React from 'react';
import Sidebar from '../Sidebar';
import OpenConv from '../OpenConv';
import { useConversations } from '../../contexts/conversationProvider';

export default function Dashboard({id}){
    const {selectedConv } = useConversations()
    return (
        <div className="d-flex" style={{height: '100vh'}}>
            <Sidebar id={id} />
            {selectedConv && <OpenConv />}
       
       </div>
    )
}