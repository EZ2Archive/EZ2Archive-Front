import axios from 'axios'
import router from '../router'
import store from '../store'
const UNAUTHORIZED = 401
const onUnauthorized = () => {
    router.push('/login')

}

const request = (method, url, data) => {
    return axios({
        method,
        url: url,
        data
    }).then(result => result.data)
    .catch(result => {
        const {status} = result.response
        
        if(status === UNAUTHORIZED) return onUnauthorized()
        throw Error(result)

    })
}

export const setAuthInHeader = token => {
    axios.defaults.headers.common['Authorization'] = token ? token : null
}

export const auth = {
    login(userid, password) {
        return request('post', '/login', {userId:userid, password:password})
    },
    logout() {
        return request('post', '/api/auth/logout', {})
    } 
}
