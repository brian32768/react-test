import { NOT_FOUND } from 'redux-first-router'

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

// This maps a page to a new state.
const components = {
    HOME:    'Home',
    ABOUT:   'About',
    MAP:     'Map',
    CONTACT: 'Contact',

    [NOT_FOUND]: 'NotFound'
};

const initialPage = "Home";

export const page = (state = initialPage, action = {}) => {
    return components[action.type] || state;
}
