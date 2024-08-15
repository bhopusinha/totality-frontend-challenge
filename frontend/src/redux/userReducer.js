import { CLEAR_ERROR, USER_LOAD_FAIL, USER_LOAD_REQUEST, USER_LOAD_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./actionTypes";


const userReducer=(state={user:{}},action)=>{
   
    switch(action.type){
        case USER_LOGIN_REQUEST:
        case USER_REGISTER_REQUEST:
            return {
                ...state,
                user:null,
                loading:true,
                error:null,
            };

        case USER_LOAD_REQUEST:
            return {
                ...state,
                user:null,
                error:null,
                success:false
            }   
            
        case USER_LOAD_SUCCESS:
            return {
                ...state,
                user:action.payload,
                success:true
            }    

        case USER_REGISTER_SUCCESS:
        case USER_LOGIN_SUCCESS:    
        localStorage.setItem('token',action.payload.token)
            return {
                ...state,
                user:action.payload,
                loading:false
            }
            
        case USER_REGISTER_FAIL:
        case USER_LOGIN_FAIL:  
        case USER_LOAD_FAIL:  
            return {
                ...state,
                error:action.payload,
                loading:false,
                success:false,
                user:null
            }
            
        case CLEAR_ERROR:
            return {
                ...state,
                error:null,
            }  
            
        default:
            return state;    

    }
}

export default userReducer