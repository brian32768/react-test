import { NOT_FOUND } from 'redux-first-router'

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
