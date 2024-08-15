import axios from "axios"
import { USER_LOAD_FAIL, USER_LOAD_REQUEST, USER_LOAD_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./actionTypes"


const userRegister = (formData) => async (dispatch) => {
    console.log(formData);

    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const { data } = await axios.post(`https://totality-frontend-challenge-76zf.onrender.com/api/user`, formData);

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
    } catch (e) {
        // console.log(e);
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: e.response.data.message
        })
    }

}


const loginRequest = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const { data } = await axios.post(`https://totality-frontend-challenge-76zf.onrender.com/api/user/login`, { email, password });

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
    } catch (e) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: e.response.data.message
        })
    }
}


const loadUser = () => async (dispatch) => {

    try {

        dispatch({ type: USER_LOAD_REQUEST })

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const { data } = await axios.get('https://totality-frontend-challenge-76zf.onrender.com/api/user', config);

        dispatch({ type: USER_LOAD_SUCCESS, payload: data })

    } catch (error) {
        dispatch({
            type: USER_LOAD_FAIL,
            payload: error.response.data.success
        })
    }
}

export { userRegister, loginRequest, loadUser }