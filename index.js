import React from 'react'
import {Link} from 'react-router-dom'
export default function HomePage () {
    return (
	<div>
		<Link to='/Profile'><div>Profile</div></Link>
		<Link to='/Shop'><div>Shop</div></Link>
		<Link to='/Leaderboard'><div>Leaderboard</div></Link>
		<Link to='/Main'><div>Main</div></Link>
	</div>
	)
}