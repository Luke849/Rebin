import React from 'react'
import './Shop.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Shop () {
	return (
		<div className='Shop_Shop'>
			<div className='BgCircle'>
				<img className='Ellipse3' src = {ImgAsset.Shop_Ellipse3} />
				<div className='Ellipse1'/>
				<div className='Ellipse2'/>
			</div>
			<div className='Frame2'>
				<div className='Product4'>
					<div className='Rectangle5'/>
					<img className='image2' src = {ImgAsset.Shop_image2} />
					<div className='Price'>
						<span className='points'>points</span>
						<span className='_50000'>50’000 </span>
					</div>
					<span className='AirPodsMax'>Air Pods Max</span>
					<span className='Generation1'>Generation 1</span>
				</div>
				<div className='Product5'>
					<div className='Rectangle5_1'/>
					<img className='image2_1' src = {ImgAsset.Shop_image2} />
					<div className='Price_1'>
						<span className='points_1'>points</span>
						<span className='_50000_1'>50’000 </span>
					</div>
					<span className='AirPodsMax_1'>Air Pods Max</span>
					<span className='Generation1_1'>Generation 1</span>
				</div>
				<div className='Product3'>
					<div className='Rectangle5_2'/>
					<img className='image2_2' src = {ImgAsset.Shop_image2} />
					<div className='Price_2'>
						<span className='points_2'>points</span>
						<span className='_50000_2'>50’000 </span>
					</div>
					<span className='AirPodsMax_2'>Air Pods Max</span>
					<span className='Generation1_2'>Generation 1</span>
				</div>
				<div className='Product2'>
					<div className='Rectangle5_3'/>
					<img className='image2_3' src = {ImgAsset.Shop_image2} />
					<div className='Price_3'>
						<span className='points_3'>points</span>
						<span className='_50000_3'>50’000 </span>
					</div>
					<span className='AirPodsMax_3'>Air Pods Max</span>
					<span className='Generation1_3'>Generation 1</span>
				</div>
				<div className='Product1'>
					<div className='Rectangle4'/>
					<div className='Price_4'>
						<span className='points_4'>points</span>
						<span className='_10000'>10’000 </span>
					</div>
					<img className='image1' src = {ImgAsset.Shop_image1} />
					<span className='AirPodsPro'>Air Pods Pro</span>
					<span className='Generation2'>Generation 2</span>
				</div>
			</div>
			<div className='Nav'>
				<div className='Rectangle2'/>
				<Link to='/main'>
					<img className='Image' src = {ImgAsset.Profile_Image} />
				</Link>
				<Link to='/leaderboard'>
					<img className='Image_1' src = {ImgAsset.Main_Image} />
				</Link>
				<Link to='/profile'>
					<img className='Image_2' src = {ImgAsset.Main_Image_1} />
				</Link>
				<img className='Image_3' src = {ImgAsset.Shop_Image_3} />
			</div>
			<div className='Menu'>
				<span className='headphones'>headphones</span>
				<span className='giftcards'>gift cards</span>
				<span className='gadets'>gadets</span>
				<span className='phones'>phones</span>
				<img className='Line1' src = {ImgAsset.Shop_Line1} />
			</div>
			<div className='Hero'>
				<span className='shopwithyourearnedcoinsnow'>shop with your earned coins<br/>now.</span>
			</div>
			<div className='Header'>
				<img className='logo1' src = {ImgAsset.Leaderboard_logo1} />
			</div>
		</div>
	)
}