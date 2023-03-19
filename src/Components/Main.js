import React from 'react'
import './Main.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Main () {
	return (
		<div className='Main_Main'>
			<div className='BgCircle'>
				<img className='Ellipse3' src = {ImgAsset.Main_Ellipse3} />
				<div className='Ellipse1'/>
				<div className='Ellipse2'/>
			</div>
			<div className='Nav'>
				<div className='Rectangle2'/>
				<Link to='/leaderboard'>
					<img className='Image' src = {ImgAsset.Main_Image} />
				</Link>
				<Link to='/profile'>
					<img className='Image_1' src = {ImgAsset.Main_Image_1} />
				</Link>
				<Link to='/shop'>
					<img className='Image_2' src = {ImgAsset.Profile_Image_2} />
				</Link>
				<img className='Image_3' src = {ImgAsset.Main_Image_3} />
			</div>
			<div className='Scanner'>
				<span className='Dontknowhowtogetcoins'>Dont know how to get coins?</span>
				<span className='scanner'>scanner</span>
				<div className='Rectangle1'/>
			</div>
			<div className='Balance'>
				<span className='coins'>coins</span>
				<span className='_4096'>4096</span>
				<span className='currentbalance'>current balance</span>
			</div>
			<div className='Logo'>
				<img className='logo1' src = {ImgAsset.Leaderboard_logo1} />
			</div>
		</div>
	)
}