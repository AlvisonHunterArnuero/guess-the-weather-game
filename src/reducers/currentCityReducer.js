const currentCityReducer = (state = "liam01.jpeg", action)=>{
    switch (action.type){
        case "DISPLAY_LIAM":
            return state = action.payload;
        case "DISPLAY_DECLAN":
                return state = action.payload;
        case "DISPLAY_ONICE":
                return state = action.payload;
                case "DISPLAY_ALVISON":
                    return state = action.payload;
        default:
            return state;
    }
    }

    export default currentCityReducer;