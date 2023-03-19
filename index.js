
        const tryRequire = (path) => {
        	try {
        	const image = require(`${path}`);
        	return image
        	} catch (err) {
        	return false
        	}
        };

        export default {
        
	questionMark: require('./questionMark.png'),
	Profile_Ellipse3: tryRequire('./Profile_Ellipse3.png') || require('./questionMark.png'),
	Shop_Ellipse3: tryRequire('./Shop_Ellipse3.png') || require('./questionMark.png'),
	Leaderboard_Ellipse3: tryRequire('./Leaderboard_Ellipse3.png') || require('./questionMark.png'),
	Main_Ellipse3: tryRequire('./Main_Ellipse3.png') || require('./questionMark.png'),
	Leaderboard_logo1: tryRequire('./Leaderboard_logo1.png') || require('./questionMark.png'),
	Profile_Image: tryRequire('./Profile_Image.png') || require('./questionMark.png'),
	Shop_image2: tryRequire('./Shop_image2.png') || require('./questionMark.png'),
	Main_Image: tryRequire('./Main_Image.png') || require('./questionMark.png'),
	Main_Image_1: tryRequire('./Main_Image_1.png') || require('./questionMark.png'),
	Profile_Image_2: tryRequire('./Profile_Image_2.png') || require('./questionMark.png'),
	Profile_Image_3: tryRequire('./Profile_Image_3.png') || require('./questionMark.png'),
	Main_Image_3: tryRequire('./Main_Image_3.png') || require('./questionMark.png'),
	Shop_image1: tryRequire('./Shop_image1.png') || require('./questionMark.png'),
	Shop_Image_3: tryRequire('./Shop_Image_3.png') || require('./questionMark.png'),
	Shop_Line1: tryRequire('./Shop_Line1.png') || require('./questionMark.png'),
	Leaderboard_Image_3: tryRequire('./Leaderboard_Image_3.png') || require('./questionMark.png'),
}