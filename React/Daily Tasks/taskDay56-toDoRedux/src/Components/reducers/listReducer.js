let initialState = {
    arr:[]
}

export default function listReducer(state=initialState,action){
    switch(action.type){
        case "ADD":
            return {arr:[...state.arr, action.payload]}
    
        default:
            return {arr:state.arr}
    }
}