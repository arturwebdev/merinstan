import './MessengerPeoplesMessage.css'

function MessengerPeoplesMessage({ name, click, img }) {
	return (
		<div className='Messenger-left-col-people-message' onClick={click}>
			<div className='Messsage-img'>
				<img src={img} alt='' />
			</div>
			<div className='Message-info'>
				<p>{name}</p>
			</div>
		</div>
	)
}

export default MessengerPeoplesMessage
