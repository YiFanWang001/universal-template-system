/**
 *  @file
 *  @description 登录接口
 */
import request from './request'
export const getLogin = (object) => request.post('/sys/login', object)