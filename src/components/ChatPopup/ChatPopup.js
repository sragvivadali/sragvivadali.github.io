// src/ChatPopup.js
import React, { useState, useEffect, useRef } from 'react'
import './ChatPopup.css'

const ChatPopup = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const chatBodyRef = useRef(null)

  // Toggle chat visibility
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  // Send message
  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'user' }])
      setInputValue('')
    }
  }

  // Handle keydown event
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      if (!isChatOpen) {
        toggleChat()
      } else {
        sendMessage()
      }
    }
  }

  // Add keydown event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    // Cleanup event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isChatOpen, inputValue, messages])

  // Scroll to bottom of chat body when messages change
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className='chat-container'>
      <button className='chat-toggle-button' onClick={toggleChat}>
        <p>{isChatOpen ? 'X' : '💬'}</p>
      </button>
      {isChatOpen && (
        <div className='chat-popup'>
          <div className='chat-body' ref={chatBodyRef}>
            {messages.length === 0 ? (
              <div className='no-messages'>No messages yet</div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`chat-message ${
                    message.sender === 'user' ? 'user-message' : 'bot-message'
                  }`}
                >
                  {message.text}
                </div>
              ))
            )}
          </div>
          <div className='chat-footer'>
            <input
              type='text'
              value={inputValue}
              onChange={handleInputChange}
              placeholder='Type a message...'
              onKeyDown={handleKeyDown} // Handle Enter key in input field
            />
            <button onClick={sendMessage}>➡</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatPopup
