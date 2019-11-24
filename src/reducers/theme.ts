import { theme } from '../actions/theme';

const initialState = {
    mode: 'light'
};


export default function themeReducer(state: any, { type, data }: { type: string, data: any }) {
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
