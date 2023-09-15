
export const productReducer = (state = {
    count: 1
}, action) => {
    switch(action.type) {
        case "INCREMENT": 
            return {
                ...state,
                count: state.count + 1
            }
        case "SET": 
            return {
                ...state,
                count: action.payload
            }
        default:
            return state
    }
}

export const productAction = {
    incrementCount: function() {
        return {
            type: "INCREMENT"
        }
    },
    setCount: function(number) {
        return {
            type: "SET",
            payload: number
        }
    }
}
 