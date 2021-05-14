import React, { useState, useCallback } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useConversations } from '../../contexts/conversationProvider';

export default function OpenConv() {
    const [text, setText] = useState('');
    const setRef = useCallback(node => {
        if (node) { node.scrollIntoView({ smooth: true }) }
    }, [])
    const { selectedConv, sendMsg } = useConversations();

    function handleSubmit(event) {
        event.preventDefault();
        sendMsg(

            selectedConv.recipients.map(r => r.id),
            text
            
        )
        setText('')
    }

    return (
        <div className="d-flex flex-column flex-grow-1">
            <div className="flex-grow-1 overflow-auto">
                <div className="d-flex flex-column align-items-start justify-content-end px-3">
                    {selectedConv.messages.map((message, index) => {
                        console.log(message.text)
                        const lastMessage = selectedConv.messages.length - 1 === index
                        return (
                            <div
                                ref={lastMessage ? setRef : null}
                                key={index}
                                className={`my-1 d-flex flex-column ${message.fromMe ? 'align-self-end align-items-end' : 'align-items-start'}`}
                            >
                                    <div
                                        className={`rounded px-2 py-1 ${message.fromMe ? 'bg-info text-white' : 'border'} `}>
                                        {message.text}
                                    </div>
                                    <div
                                        className={`text-muted small ${message.fromMe ? 'text-right' : ''}`}>
                                        {message.fromMe ? 'You' : message.senderName}
                                    </div>
                            </div>
                        )
                    }
                    )}

                </div>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="m-2">
                    <InputGroup>
                        <Form.Control
                            as="textarea"
                            required
                            value={text}
                            onChange={event => setText(event.target.value)}
                            style={{ height: '10%', resize: 'none' }}
                        />


                        <InputGroup.Append>
                            <Button type="submit" value="send">Send</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form>
        </div>
    )
}
