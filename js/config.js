var config={
	//ServerIp:'http://192.168.6.104:8089'
	//ServerIp:'http://192.168.125.118:8089'
	ServerIp:'http://192.168.6.102:8089'
}

var url={
	download:config.ServerIp+'/barCode/getBarList',//download barid list
	login:config.ServerIp+'/employees/appLogin',//login
	uploadgroup:config.ServerIp+'/plantWorkGroup/createWorkGroup',
	downloadgroup:config.ServerIp+'/plantWorkGroup/getWorkGroup',
	deletegroup:config.ServerIp+'/plantWorkGroup/dismissWorkGroup',
	uploadbarcode:config.ServerIp+'/barCode/putBarCodeScanInfo',
	history:config.ServerIp+'/barCode/getWorkLoadOfDay',
	barinfo:config.ServerIp+'/barCode/getBarcodeInfo',
	clearbar:config.ServerIp+'/barCode/deleteBarScanInfoOnSvr',
	erplogin: config.ServerIp+'/users/login',
	getCurrentOrders: config.ServerIp+'/aluveneerOrders/getCurrentOrders',
	getCurrentGoodsOut: config.ServerIp+'/goodsOutNotes/getCurrentGoodsOutNote',
	getGoodsOutBarCode: config.ServerIp+'/barCode/getGoodsOutBarList'
};
var config={
	USER_KEY:'userInfo',
	GROUP_KEY:'group',
	DB_NAME:'baoye',
	DB_PATH:'fs://test.db',
	TABLE_BARCODE : 'CREATE TABLE IF NOT EXISTS Barcodetest (_id varchar(32), barId varchar(16), barScanDate varchar(32), projName varchar(256), status int default(0),groupId varchar(32),remark varchar(20),PRIMARY KEY(_id))',
	SHIPMENTS: '发货',
	IP: 'ipAddress',
//	TABLE_GROUP : 'CREATE TABLE IF NOT EXISTS Workgroup (workname varchar(255),tel varchar(255),workid varchar(255),PRIMARY KEY(workid))'
}
var pages={
	index:{name:'root', url:'../index.html'},
	login:{name:'login', url:'../html/login.html'},
	main:{name:'main', url:'../html/main.html'},
	register:{name:'register', url:'../html/register.html'},
	scanner:{name:'scanner', url:'../html/scanner.html'},
	createEms:{name:'createEms', url:'../html/createEms.html'},
	getInfo:{name:'getInfo', url:'../getInfo.html'},
	selectProjname:{name:'selectProjname', url:'../html/selectProjname.html'}

}
function post(url,data,cb){
		api.ajax({
	           url:url,
	           cache:false,
	           method:'post',
	           timeout:5,
	           data:{values:data}
         },cb);
}

function get(url,cb){
	api.ajax({
		url:url,
		cache:false,
		method:'get',
		timeout:3
	},cb);
}
