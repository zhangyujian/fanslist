var path = require('path');

exports.config = {
	debug: true,
	name: 'FansList',
	description: '全球最热门榜单',
	keywords: 'FansList 粉丝帮 明星榜 热门榜',
	favicon: '/public/favicon.ico',//favicon.ico 路径
	//Service
	port: 3005,
	db: 'mongodb://localhost/nodecms',//本地版本
	//db: 'mongodb://yujian:zhang@121.199.29.125:27017/nodecms',//线上版本
	session_secret: 'FansList',
    datapath: path.join(__dirname, '/public/data/img'),
};