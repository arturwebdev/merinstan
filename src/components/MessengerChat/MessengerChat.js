import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import MessageChatItem from '../MessageChatItem/MessageChatItem'
import './MessengerChat.css'

function MessengerChat() {

  const {currentDialog, currentUser} = useSelector(selectUsers)

  return (
    <div className='MessengerChat'>
      {
        currentDialog?.map(el => (
          <MessageChatItem key={el.id} currentUserMessage={el.fromId === currentUser.id ? true : false} body={el.body} />
        ))
      }
    </div>
  )
}

export default MessengerChat
