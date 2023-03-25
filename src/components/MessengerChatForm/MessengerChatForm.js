import './MessengerChatForm.css'
import IMAGES from '../../images'
import { useDispatch } from 'react-redux'
import { newMessage } from '../../store/slices/users/usersSlice'
import { useRef } from 'react'

function MessengerChatForm() {

	const newMessageRef = useRef(null)

	const dispatch = useDispatch()

	const sendMessage = (e) => {
		e.preventDefault();
		if(newMessageRef.current[0].value.trim() !== "") {
			dispatch(newMessage({
				id: new Date().getTime().toString(),
				body: newMessageRef.current[0].value
			}))
			newMessageRef.current.reset()
		}
	}

	return (
		<form className='Chat-input' ref={newMessageRef} onSubmit={sendMessage}>
			<input type='text' placeholder='Message...' />
			<img src={IMAGES.like} alt='' />
		</form>
	)
}

export default MessengerChatForm
