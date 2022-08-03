import React from 'react'
import {ChatEngine} from 'react-chat-engine'
//import Messaging from './Messaging'

const ChatBox = () => {
  return (
    <div>
      
<ChatEngine offset={-4}
      height='100vh'
      userName='Mushu'
      projectID = '6cf48a91-1409-4d81-94ab-92d4c08b6d83'
      userSecret='bunny'
     
    />

    </div>
  )
}

export default ChatBox

//link for assisstance - https://www.section.io/engineering-education/creating-a-simple-chat-app-in-react-using-the-chat-engine-api/
