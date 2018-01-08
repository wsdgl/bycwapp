function erplogin(user, pass, db) {
	var data = {
		login: user,
		pass: pass,
		dbId: db,
		rememberMe: true
	}
	api.ajax({
    url: url.erplogin,
    method: 'post',
		dataType: 'text',
    data: {
        values: data
    }
}, function(ret, err) {
    if (ret) {
        // api.alert({ msg: (ret+'OK') });
				console.log(ret+'OK');
    } else {
			  console.log(JSON.stringify(err));
        api.alert({ msg: ('ERR'+err.msg) });
    }
});
}

function login(workid,password,cb,errcb){
	var data = {
		workid:workid,
		password:password,
		deviceid:api.deviceId
	}
	post(url.login,data,function(ret,err){
		if(err){
			if(errcb){
				errcb(err.msg);
			}
		}else if(ret.retStatus == 'OK'){
			if(cb){
				cb(ret.retValue);
			}
		}else{
			if(errcb){
				errcb(ret);
			}
		}
	});
}
function executeSql(db, sql, cb, errCb){
	db.executeSql({
		name : config.DB_NAME,
		sql : sql,
	},function(ret, err){
		if(err){
			if(errCb)
				errCb(err.msg)
		}else{
			if(cb)
				cb()
		}
	})
}
function selectSql(db, sql, cb, errCb){
	db.selectSql({
		name : config.DB_NAME,
		sql : sql
	}, function(ret, err){
		if(err){
			if(errCb)
				errCb(err.msg)
		}else{
			if(cb)
				cb(ret.data)
		}
	})
}
function toast(msg,time){
	if(!time){
		time = 2000
	}
	api.toast({
	    msg:msg,
	    duration:time,
	    location:'bottom'
    });
}
