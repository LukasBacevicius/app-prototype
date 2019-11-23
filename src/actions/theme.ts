export const theme = {
    setMode: 'THEME_SET_MODE'
}

export function setMode(light: Boolean = false) {
    const data = light ? 'light' : 'dark';

    return {
        type: theme.setMode,
        data
    };
}