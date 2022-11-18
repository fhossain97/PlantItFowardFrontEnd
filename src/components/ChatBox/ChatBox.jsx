import React from 'react'
import {ChatEngine} from 'react-chat-engine'
//import Messaging from './Messaging'

const ChatBox = () => {
  return (
    <div>
      
<ChatEngine offset={-4}
      height='100vh'
      userName={process.env.REACT_APP_CHAT_APP_USER_NAME}
      projectID = {process.env.REACT_APP_CHAT_APP_PROJECT_ID}
      userSecret={process.env.REACT_APP_CHAT_APP_USER_SECRET}
     
    />

    </div>
  )
}

export default ChatBox

//link for assisstance - https://www.section.io/engineering-education/creating-a-simple-chat-app-in-react-using-the-chat-engine-api/
