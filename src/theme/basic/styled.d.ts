import 'styled-components';

type BreakPoints = {
    up: (size: string) => any;
    down: (size: string) => any;
    xs: (...args: any) => any;
    s: (...args: any) => any;
    m: (...args: any) => any;
    l: (...args: any) => any;
};

/* TODO: missing types */
declare module 'styled-components' {
    export interface DefaultTheme {
        colors?: any;
        color?: any;
        zIndexes?: any;
        zIndex?: any;
        awesomegrid?: any;
        typography?: any;
        breakpoints?: BreakPoints;
        easings?: any;
        utils: any;
    }
}
