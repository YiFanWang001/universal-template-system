import request from './request'


/**
 * @description 登录
 * @param {object} model 用户登录信息
 */

export const login=(model)=>request.post('/sys/login',model);

