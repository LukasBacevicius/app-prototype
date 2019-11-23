import React from 'react';
import styled from 'styled-components';

const Toggle = styled.label`
        background: ${({ theme }) => theme.color('primary', 'background')};
        border-radius: 6.25rem;
        cursor: pointer;
        height: 2.5rem;
        position: absolute;
        bottom: 1.5rem;
        left: 1.5rem;
        right: 1.5rem;
        border: .2rem solid ${({ theme }) => theme.color('primary', 'background')};
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        &:before {
            content: '';
            height: 100%;
            border-radius: inherit;
            width: 50%;
            position: absolute;
            background: ${({ theme }) => theme.color('primary', 'background', 90)};
            box-shadow: ${({theme}) => theme.shadows.default};
            transition: ${({ theme }) => theme.transitions.default(['transform'])};
            z-index: 0;
        }

        span {
            text-align: center;
            width: 50%;
            z-index: 1;
            font-size: .75rem;
            transition: ${({ theme }) => theme.transitions.default(['opacity'])};

            
            &.dim {
                opacity: .5;
            }
        }
`;

const Checkbox = styled.input`
    display: none;

    &:checked + [for="themeMode"] {
        &:before {
            transform: translateX(100%);
        }
    }
`;
export interface ThemeModeToggleProps {
    onClick?: any;
    checked?: boolean;
}

export default ({ onClick, checked }: ThemeModeToggleProps) => {
    return (
        <>
            <Checkbox
                type="checkbox"
                checked={checked}
                id="themeMode"
            />
            <Toggle onClick={onClick} htmlFor="themeMode">
                <span className={checked ? 'dim' : ''}>
                    Light
                </span>
                <span className={!checked ? 'dim' : ''}>
                    Dark
                </span>
            </Toggle>
        </>
    )
}