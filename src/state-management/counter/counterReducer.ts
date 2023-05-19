interface Action {
    // ensures actions are only of these types, eliminating throwing errors
    type: 'INCREMENT' | 'RESET';
}

const counterReducer = (state: number, action: Action): number => {
    // INCREMENT is an arbitrary string that we use to identify the action
    if (action.type === 'INCREMENT') return state + 1;
    if (action.type === 'RESET') return 0;
    return state;
}

export default counterReducer;