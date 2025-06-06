let initialState = {
    count:0
}

export default function counterReducer(state=initialState,action){
    switch(action.type){
        case "INC":
            return {count:state.count+1};
        
        case "DEC":
            return {count:state.count-1};

        case "RESET":
            return {count:state.count = 0}
        
        default:
            return {count:state.count}
    }
}