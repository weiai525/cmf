<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesResources;

class Controller extends BaseController
{
    use AuthorizesRequests, AuthorizesResources, DispatchesJobs, ValidatesRequests;
    
    public function success($data = null, $msg = 'sucess', $code = 0)
    {
        return response()->json(['code'=>$code,'msg'=>$msg,'data'=>$data]);
    }
    public function error($code = 500100, $msg = '',$data = null)
    {
        $messages = [
            '500100'=>'常规错误',
            '500201'=>'输入的参数有误',
            '500301'=>'系统出错了',
            '500401'=>'验证码错误',
            '500501'=>'用户名/邮箱不存在或密码错误或账号被封号',
            '500502'=>'参数有误',
            '500503'=>'服务器出错啦',
            '500504'=>'机构尚未通过审核',
            '500505'=>'注册验证出错',
        ];
        if (!$msg) {
            $msg = $messages[$code];
        }
        return response()->json(['code'=>$code,'msg'=>$msg,'data'=>$data]);
    }
}
