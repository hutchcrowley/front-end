import React, { useState } from 'react'
import Register from '../UserAuth/Register'
import { Link } from 'react-router-dom'

const MainUI = () => {
	let state = false

	const [ hideLinks, setHideLinks ] = useState(state)

	const handleClick = () => {
		state = !state
		setHideLinks(state)
	}

	const token = localStorage.getItem('token')
	console.log('Auth Token in MainUI', token)

	return (
		<>
			<h1>ESSENTIALISM</h1>

			{hideLinks ? (
				<>
				<div className='main-ui'>
						<Link to='/user'>Profile</Link>
						<Link to='/login'>Log In</Link>
					<Register />
				</div>
					<h4 onClick={handleClick}>Back</h4>
					</>
			) : (
				<h4 onClick={handleClick}>Click Here to Start</h4>
			)}
		</>
	)
}

export default MainUI
