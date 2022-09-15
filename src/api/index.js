import axios from 'axios'
import router from '../router'
import store from '../store'

const UNAUTHORIZED = 401
const onUnauthorized = () => {
    router.push('/login')

}

const request = (method, url, data, params) => {
    return axios({
        method,
        url: url,
        data,
        params,
        baseURL: process.env.VUE_APP_SERVER,
    }).then(result => result.data)
    .catch(result => {
        const {status} = result.response
        if(status === UNAUTHORIZED) return onUnauthorized()
        throw Error(result)
    })
}

export const setAuthInHeader = token => {
    axios.defaults.headers.common['Authorization'] = token ? 'Bearer ' + token : null
}

export const auth = {
    login(userid, password) {
        return request('post', '/login', {}, {userId: userid, password: password})
    },
}

export const achievement = {
    list(key, level){
        return request('get', `/achievement/list/${key}/${level}`)
    },

}

export const rank = {
    list(key, level){
        return request('get', `/achievement/list`, {}, {keyType: key, level: level})
    }
}
