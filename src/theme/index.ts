import { DefaultTheme } from 'styled-components';
import screens from './screens';
import colors from './colors';
// @ts-ignore - no types
import styledBreakpoint from '@humblebee/styled-components-breakpoint';

function color(section: string, name: string, tint: string = '100'): any {
    // @ts-ignore
    return colors[section][name][tint];
}

const breakpoints = styledBreakpoint({
    s: screens.sm,
    m: screens.md,
    l: screens.lg,
    xl: screens.xl,
});

const theme: DefaultTheme = {
    colors,
    color,
    breakpoints
};

export default theme;
