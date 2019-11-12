export const resetLinkStyle = () => `
    text-decoration: none;
    font-weight: 600;
`;

export const stretch = () => `
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`;

export const position = (value: string, keys: Array<string> = ['top', 'bottom', 'left', 'right']): string => {
    return keys.map(key => `${key}: ${value};`).join('');
};