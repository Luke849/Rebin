import React from 'react'
import './Profile.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Profile () {
	return (
		<div className='Profile_Profile'>
			<div className='BgCircle'>
				<img className='Ellipse3' src = {ImgAsset.Profile_Ellipse3} />
				<div className='Ellipse1'/>
				<div className='Ellipse2'/>
			</div>
			<div className='Nav'>
				<div className='Rectangle2'/>
				<Link to='/main'>
					<img className='Image' src = {ImgAsset.Profile_Image} />
				</Link>
				<Link to='/leaderboard'>
					<img className='Image_1' src = {ImgAsset.Main_Image} />
				</Link>
				<Link to='/shop'>
					<img className='Image_2' src = {ImgAsset.Profile_Image_2} />
				</Link>
				<img className='Image_3' src = {ImgAsset.Profile_Image_3} />
			</div>
			<div className='Footer'>
				<span className='copyright2022byRebin'>copyright © 2022 by Rebin</span>
			</div>
			<div className='Profile_1'>
				<span className='changepassword'>change password</span>
				<span className='changename'>change name</span>
				<span className='addDesciption'>add Desciption</span>
				<span className='GetPro'>Get Pro<br/></span>
				<span className='name'>name</span>
				<div className='Ellipse4'/>
				<div className='Ellipse5'/>
				<img className='Image_4' src = {ImgAsset.Main_Image_1} />
			</div>
			<div className='Header'>
				<img className='logo1' src = {ImgAsset.Leaderboard_logo1} />
				<span className='Logout'>Log out</span>
			</div>
		</div>
	)
}