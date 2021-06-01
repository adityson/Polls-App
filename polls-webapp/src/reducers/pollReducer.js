export default function foo(state = [], action) {
    switch(action.type){
        case 'ALL_POLLS':
            return action.payload
        case 'CREATE_POLL':
            return [...state, action.payload];
        default:
            return state;
    }
}
