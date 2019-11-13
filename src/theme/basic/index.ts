/* 
    TODO:
    This needs to be way cleaner
*/

import { DefaultTheme } from 'styled-components';
import colors from './colors.json';
import sizes from './sizes.json';
import {
    fontSizes,
    bodySize,
    bodyFontFamily,
    headingFontFamily,
    headingLineHeight,
    bodyLineHeight
} from './fonts.json';
import zIndexes from './zindex.json';
// @ts-ignore - no types
import styledBreakpoint from '@humblebee/styled-components-breakpoint';

function color(section: string, name: string, tint: string = '100'): any {
    // @ts-ignore
    return colors[section][name][tint];
}

function zIndex(section: string, element: string) {
    // @ts-ignore
    return zIndexes[section][element];
}

const getRem = (pxValue: number) => pxValue / 16;

const breakpoints = styledBreakpoint(sizes);

const awesomegrid = {
    breakpoints: {
        xs: 0,
        sm: getRem(sizes.s),
        md: getRem(sizes.m),
        lg: getRem(sizes.l),
        xl: getRem(sizes.l)
    },
    container: {
        xs: 'full',
        sm: 'full',
        md: 'full',
        lg: getRem(sizes.l),
        xl: getRem(sizes.l)
    },
    paddingWidth: {
        xs: 1.5,
        sm: 1.5,
        md: 2
    }
};

const typography = {
    fontSizes,
    bodyFontFamily,
    bodySize,
    headingFontFamily: bodyFontFamily,
    headingLineHeight,
    bodyLineHeight,
    bodyColor: color('primary', 'dark'),
    headingColor: color('primary', 'dark'),
    extra: {
        headingFontFamily,
        heading: `
            text-transform: uppercase;
        `
    }
};

const basicTheme: DefaultTheme = {
    colors,
    color,
    zIndexes,
    zIndex,
    breakpoints,
    awesomegrid,
    typography,
}

export default basicTheme;
