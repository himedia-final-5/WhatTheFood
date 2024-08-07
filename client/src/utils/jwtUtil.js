//jwtUtil.js
import axios from "axios";
//import { setCookie , getCookie } from "./cookieUtil";
const jaxios = axios.create();

// const beforeReq=async (config)=>{
//     let cUser = getCookie('user');
//     // accessToken 은 header에  refreshToken 은 pathvariable 에 실어서 전송
//     const Header = { headers:{'Authorization' : `Bearer ${cUser.accessToken}` } }
//     const res = await axios.get(`/api/member/refresh/${cUser.refreshToken}`, Header );
//     cUser.accessToken = res.data.accessToken;
//     cUser.refreshToken = res.data.refreshToken;
//     setCookie('user', JSON.stringify(cUser), 1);
//     const { accessToken } = cUser;
//     config.headers.Authorization = `Bearer ${accessToken}`
//     return config;
// }
const requestFail=(err)=>{ }

const beforeRes=async (res)=>{ 

    // if( res.data && res.data.error =='ERROR_ACCESS_TOKEN'){
    //     let loginUser = getCookie('user');
    //     const Header = { headers:{'Authorization' : `Bearer ${loginUser.accessToken}` } }
    //     const res = await axios.get(`/api/member/refresh/${loginUser.refreshToken}`, Header );
    //     loginUser.accessToken = res.data.accessToken;
    //     loginUser.refreshToken = res.data.refreshToken;
    //     setCookie('user', JSON.stringify(loginUser), 1);
    //     loginUser = getCookie('user');
    // }
    
    return res;
}

const responseFail=(err)=>{ }

jaxios.interceptors.request.use( beforeReq, requestFail );
jaxios.interceptors.response.use( beforeRes, responseFail)

export default jaxios;