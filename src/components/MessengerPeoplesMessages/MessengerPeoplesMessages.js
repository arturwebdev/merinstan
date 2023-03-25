import './MessengerPeoplesMessages.css'
import IMAGES from '../../images'
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage'
import { selectUsers, startMessage } from '../../store/slices/users/usersSlice'
import { useDispatch, useSelector } from 'react-redux'

function MessengerPeoplesMessages() {
	const {usersData, currentUser} = useSelector(selectUsers) 

	const dispatch = useDispatch()

	const messages = [...usersData]

	const selectMessage = (id) => {
		dispatch(startMessage({id: id}))
	}

	return (
		<div className='Messenger-left-col-peoples-messages'>
			{
				messages.map(el =>  <MessengerPeoplesMessage key={el.id} img={el.avatar} name={el.name} click={() => selectMessage(el.id)} />)
			}
		</div>
	)
}

export default MessengerPeoplesMessages
