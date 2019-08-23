const initialCount = 0;

export const counter = (state=initialCount, action) => {
    switch (action.type) {
        case "INC":
            return state + 1
        case "DEC":
            return state - 1
    }
    return state;
}
