/**
 * Created by lucz on 2017/1/3.
 */

/**
require
执行加载 并 返回
否则
抛出异常
 */

var express = require('express');
var router = express.Router();

var http = require("http");

var connectUrl = require("../routes/connect_url");

/**
 * 登录
 *
 */
router.post("/web/getLoginUser",function(req,res){
    console.log(req);
    console.log(res);
    var custId = req.body.custId;
    var compId = req.body.compId;
    var userName = req.body.userName;
    var passWord = req.body.passWord;

    console.log(custId);

    var deviceId = "test";
    var errorTO={code:200,success:true,msg:""};

    /*
    request({
        headers: {
            "device_id":deviceId,
            "Content-Type": "application/json"
        },
        url: connectUrl.apiUrl + "s3connect/user/manager/chain/"+custId+"/comp/"+compId+"/webLogin",
        method: "POST",
        json:true,
        body:{
            username:userName,
            password:passWord,
            deviceId:deviceId
        }
    },function(error,response,data){
        console.log(data);
        if (data!=undefined && data.success) {
            var loginUser = {
                "token":data.result.accessToken,
                "shopId":data.result.shopId,
                "custId":custId,
                "compId":compId,
                "empId":userName
            };
            req.session.loginUser = loginUser;

            res.setHeader("Set-Cookie", [
                "token=" + data.result.accessToken + ";Expires="+new Date((new Date().getTime()+24*60*60*1000)).toGMTString()+";path=/",
                "custId=" + custId + ";Expires="+new Date((new Date().getTime()+24*60*60*1000)).toGMTString()+";path=/",
                "compId=" + compId + ";Expires="+new Date((new Date().getTime()+24*60*60*1000)).toGMTString()+";path=/",
                "shopId=" + data.result.shopId + ";Expires="+new Date((new Date().getTime()+24*60*60*1000)).toGMTString()+";path=/",
                "empId=" + userName + ";Expires="+new Date((new Date().getTime()+24*60*60*1000)).toGMTString()+";path=/"
            ]);
            res.json(data);
        }else{
            if(data!=undefined && data.msg!=undefined && data.msg!=''){
                res.json(data);
            }else{
                errorTO.success=false;
                errorTO.code=500;
                errorTO.msg="登录失败,请稍后重试";
                res.json(errorTO);
            }
        }
    });

  */

     res.json({code:"200",success:"true",msg:""});
});


module.exports = router;