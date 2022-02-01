const initialstate ={ movies:[]};

export const movieReducer = (state=initialstate,{type,payload})=>{
    switch (type) {
        case "REMOVE_SELECTED":
            return {...state,movies:[]};
        
        case "SELECTED_MOVIE":
            const filteredelem= state.movies.filter((el)=>el.id==payload)
            return {...state,movies:filteredelem}
        
        case "FETCH_DATA":
                return {...state,movies:payload}

        default:
            return state;
            break;
    }

}
