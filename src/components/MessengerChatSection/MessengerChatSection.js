import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import MessengerChat from '../MessengerChat/MessengerChat'
import MessengerChatForm from '../MessengerChatForm/MessengerChatForm'
import './MessengerChatSection.css'

function MessengerChatSection() {

	const {usersData, activeChatUserId} = useSelector(selectUsers)

	return (
		<div className='Messenger-right-col'>
			<div className='UserSction'>
				<p>{usersData.find(user => user.id === activeChatUserId).name}</p>
				<p>i</p>
			</div>
			<div className='Chat'>
				<MessengerChat />
			</div>
			<MessengerChatForm />
		</div>
	)
}

export default MessengerChatSection
