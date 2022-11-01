const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        {id: 1, followed:false, fullName:'Dmitry', status:'I am a boss', location: {city:'Minsk', country:'Belarus'}},
        {id: 2, followed:true, fullName:'Max', status:'Cheeeck', location: {city:'Moscow', country:'Russia'}},
        {id: 3, followed:false, fullName:'Madi', status:'I am a boss yow', location: {city:'Astana', country:'Kazakhstan'}},
      ],
}
const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u=> {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u=> {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
            }
        case SET_USERS:
            return {...state, users:[...state.action.users, ...action.users]}
        default:
            return state;
    }
}
export const followAC = (userId) => ({type:FOLLOW, userId})
export const unfollowAC = (userId) => ({type:UNFOLLOW, userId})
export const setUsersAc = (userId) => ({type:SET_USERS, users})
export default usersReducer;