import React from 'react'
import './Leaderboard.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Leaderboard () {
	return (
		<div className='Leaderboard_Leaderboard'>
			<div className='BgCircle'>
				<img className='Ellipse3' src = {ImgAsset.Leaderboard_Ellipse3} />
				<div className='Ellipse1'/>
				<div className='Ellipse2'/>
			</div>
			<div className='Logo'>
				<img className='logo1' src = {ImgAsset.Leaderboard_logo1} />
			</div>
			<div className='Balance'>
				<span className='_256'>256</span>
				<span className='currentbalance'>current balance</span>
				<span className='points'>points</span>
			</div>
			<div className='Leaderboard_1'>
				<div className='Rectangle1'/>
				<div className='competetors9'>
					<div className='Ellipse4'/>
					<span className='name'>name</span>
					<span className='_50P'>50 P.</span>
					<div className='Ellipse5'/>
					<span className='_9'>9</span>
				</div>
				<div className='competetors8'>
					<div className='Ellipse4_1'/>
					<div className='Ellipse5_1'/>
					<span className='name_1'>name</span>
					<span className='_83P'>83 P.</span>
					<span className='_8'>8</span>
				</div>
				<div className='competetors7'>
					<div className='Ellipse4_2'/>
					<div className='Ellipse5_2'/>
					<span className='name_2'>name</span>
					<span className='_96P'>96 P.</span>
					<span className='_7'>7</span>
				</div>
				<div className='competetors6'>
					<div className='Rectangle3'/>
					<div className='Ellipse4_3'/>
					<div className='Ellipse5_3'/>
					<span className='name_3'>name</span>
					<span className='_100P'>100 P.</span>
					<span className='_6'>6</span>
				</div>
				<div className='competetors5'>
					<div className='Ellipse4_4'/>
					<div className='Ellipse5_4'/>
					<span className='name_4'>name</span>
					<span className='_111P'>111 P.</span>
					<span className='_5'>5</span>
				</div>
				<div className='competetors4'>
					<div className='Ellipse4_5'/>
					<div className='Ellipse5_5'/>
					<span className='name_5'>name</span>
					<span className='_123P'>123 P.</span>
					<span className='_4'>4</span>
				</div>
				<div className='competetors3'>
					<div className='Ellipse4_6'/>
					<div className='Ellipse5_6'/>
					<span className='name_6'>name</span>
					<span className='_278P'>278 P.</span>
					<span className='_3'>3</span>
				</div>
				<div className='competetors2'>
					<div className='Ellipse4_7'/>
					<div className='Ellipse5_7'/>
					<span className='name_7'>name</span>
					<span className='_423P'>423 P.</span>
					<span className='_2'>2</span>
				</div>
				<div className='competetors1'>
					<div className='Ellipse4_8'/>
					<div className='Ellipse5_8'/>
					<span className='name_8'>name</span>
					<span className='_502P'>502 P.</span>
					<span className='_1'>1</span>
				</div>
				<span className='monthlycompetition'>monthly competition</span>
			</div>
			<div className='Nav'>
				<div className='Rectangle2'/>
				<Link to='/main'>
					<img className='Image' src = {ImgAsset.Profile_Image} />
				</Link>
				<Link to='/profile'>
					<img className='Image_1' src = {ImgAsset.Main_Image_1} />
				</Link>
				<Link to='/shop'>
					<img className='Image_2' src = {ImgAsset.Profile_Image_2} />
				</Link>
				<img className='Image_3' src = {ImgAsset.Leaderboard_Image_3} />
			</div>
		</div>
	)
}