import axios from "axios";
import {Types} from "@utils";
// import {useDispatch} from "react-redux";
// import {useNavigate} from "react-router-dom";


const api = axios.create({
    baseURL: `${process.env.BACK_END_DOMAIN}/api`,
    withCredentials: true,
});

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

api.interceptors.response.use((config) => config, async (error) => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const originalRequest = error.config;
    if (error.response.status == 401 && originalRequest && !originalRequest._isRetry){
        originalRequest._isRetry = true;
        try{
            const response = await axios.get<Types.IUser>(`${process.env.BACK_END_DOMAIN}/api/user/refresh`, {withCredentials: true});
            localStorage.setItem("token", response.data.accessToken);
            return api.request(originalRequest);
        }
        catch (e) {
            console.log("User not authorized")
            localStorage.clear();
            // dispatch({type: "clearData"});
            // navigate('/');
        }
    }
    throw error;
})

export default api;