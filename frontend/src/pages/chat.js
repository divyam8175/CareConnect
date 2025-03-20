import React, { useState , useEffect, useRef} from 'react';
import '../styles/chat.css';

function Chat() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const chatBoxRef = useRef(null);

    const sendMessage = async () => {
        if (!input.trim()) return;
        
        const userMessage = { sender: 'user', text: input };
        setMessages([...messages, userMessage]);
        setInput('');

        try {
            const response = await fetch('http://localhost:3003/api/auth/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input })
            });
            const data = await response.json();

            setMessages([...messages, userMessage, { sender: 'bot', text: data.botReply }]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTo({ top: chatBoxRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div className='chat-container'>
            <h1 className='chat-header'>AI Chatbot</h1>
            <div className='chat-box' ref={chatBoxRef}>
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        <strong>{msg.sender}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <div className='input-container'>
                <input 
                    type='text' 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder='Type a message...'
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Chat;