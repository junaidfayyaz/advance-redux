const initialstate = {
    product:[
        
    ]
}

const productReducer = (state= initialstate, {type, payload}) => {
    switch (type) {
        case 'SET_PRODUCT':
            return {state, product:payload}
        default:
            return state
    }
}

export default productReducer
