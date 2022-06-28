/**
 *  @file
 *  @description 个人接口
 */
import request from './request'
export const information = () => request.get('/sys/profile')