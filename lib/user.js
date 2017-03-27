/**
  这个模块用来获得用户基本信息
 */

var appID = 'wx7e5b2a91f1bdeae7';
var appSecret = '10f51e4e618df60e950a1b319abfb415';

var getToken = require('./token').getToken;

var request = require('request');

function getUserInfo(openID){
  return getToken(appID, appSecret).then(function(res){
    var token = res.access_token;
	//返回一个Promise对象
    return new Promise(function(resolve, reject){
      request('https://api.weixin.qq.com/cgi-bin/user/info?access_token='+token+'&openid='+openID+'&lang=zh_CN', function(err, res, data){
			resolve(JSON.parse(data));
        });
    });


  }).catch(function(err){
    console.log(err);
  });  
}

module.exports = {
  getUserInfo: getUserInfo
};
