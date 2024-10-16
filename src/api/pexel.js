import request from './request'

/**
 * 
 * @param {*Object} params 
 * @returns 
 */
export const getPexelList = (params) => {
    return request.get('/pexels/list', {
        params
    })
}