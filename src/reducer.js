const initialState = 0
const jabberwock = (action, state=initialState) => {
    switch (action.type) {
        case "INC":
            state += 1;
            break;
        case "DEC":
            state -= 1;
            break;
    }
    return state;
}

export default jabberwock;
