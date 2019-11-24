/* 
    TODO:
    This needs to be way cleaner
*/
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

export default (mode: string = 'dark') => {
    function color(section: string, name: string, tint: string = '100'): string | undefined {
        // @ts-ignore
        return colors[mode][section][name][tint];
    }

    function zIndex(section: string, element: string) : string | undefined {
        // @ts-ignore
        return zIndexes[section][element];
    }

    const getRem = (pxValue: number, withUnit: boolean = false) : string | undefined => `${pxValue / 16}${withUnit ? 'rem' : ''}`;

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

    const breakpoints = styledBreakpoint(sizes);

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

    const transitions = {
        default: (toAnimate: Array<string>, duration: string = '.3s') : string => toAnimate.map(item => `${item} ${duration} cubic-bezier(0.25, 0.46, 0.45, 0.94)`).join(',')
    };

    const shadows = {
        default: 'rgba(84, 70, 35, 0.15) 0px 2px 8px, rgba(84, 70, 35, 0.15) 0px 1px 3px',
        hover: 'rgba(0, 0, 0, 0.1) 0px 16px 48px 0px'
    };

    return {
        //@ts-ignore
        colors: colors[mode],
        color,
        zIndexes,
        zIndex,
        breakpoints,
        awesomegrid,
        typography,
        transitions,
        shadows,
        utils: {
            getRem
        }
    };
};
