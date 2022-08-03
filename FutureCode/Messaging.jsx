import React, {useState} from 'react'
import {ChatEngine, getOrCreateChat} from 'react-chat-engine'

const Messaging = () => {

    const[username, setUsername] = useState('')

    function directChat(credentials){
        getOrCreateChat(
            credentials,
            {is_direct_chat: true, usernames:[username]},
            () => setUsername('')
        )
    }

const handleChange = (e) => {
    setUsername(e.target.value)
}

    const display = (credentials) => {
        return (
            <div>
                <input
                    type="text"
                    placeholder='Username'
                    value={username}
                    onChange = {handleChange}
                />

                <button onClick={() => directChat(credentials)}>
                    Create Chat
                </button>

            </div>
        ) 
    }

  return (
    <div>

<ChatEngine offset={-4}
            height='100vh'
            userName='Mushu'
            userSecret={process.env.CHAT_APP_USER_SECRET}
            projectID={process.env.CHAT_APP_PROJECT_ID}
            displayNewChatInterface={(credentials) => display(credentials)}
            renderNewChatForm={(creds) => display(creds)}
            
            />


    </div>
  )
}

export default Messaging