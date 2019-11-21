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

const getRem = (pxValue: number, withUnit: boolean = false) => `${pxValue / 16}${withUnit && 'rem'}`;

const breakpoints = styledBreakpoint(sizes);

const awesomegrid = {
    breakpoints: {
        xs: getRem(sizes.xs),
        sm: getRem(sizes.s),
        md: getRem(sizes.m),
        lg: getRem(sizes.l),
        xl: getRem(sizes.xl)
    },
    container: {
        xs: 'full',
        sm: 'full',
        md: 'full',
        lg: 'full',
        xl: 'full'
    },
    paddingWidth: {
        xs: 1.5,
        sm: 1.5,
        md: getRem(60)
    }
};

const typography = {
    fontSizes,
    bodyFontFamily,
    bodySize,
    headingFontFamily,
    headingLineHeight,
    bodyLineHeight,
    bodyColor: color('primary', 'grayscale'),
    headingColor: color('primary', 'grayscale'),
    extra: {
        headingFontFamily
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
    utils: {
        getRem
    }
}

export default basicTheme;
