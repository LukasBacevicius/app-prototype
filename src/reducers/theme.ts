import { theme } from '../actions/theme';

const initialState = {
    mode: 'light'
};

//@ts-ignore
export default function themeReducer(state, { type, data }) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (type) {
        case theme.setMode:
            return {
                ...state,
                mode: data,
            };
        default:
            return state;
    }
}
