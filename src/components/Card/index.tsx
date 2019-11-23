import React, { FC } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    padding: ${({ theme }) => theme.utils.getRem(25, true)};
    border-radius: .2rem;
    background: ${({ theme }) => theme.color('primary', 'background', 90)};
    box-shadow: ${({theme}) => theme.shadows.default};
    position: relative;
    transition: ${({ theme }) => theme.transitions.default(['box-shadow', 'transform'])};
    cursor: pointer;

    &:hover {
        transform: translateY(-1px);
        box-shadow: ${({theme}) => theme.shadows.hover};
    }
`;

const Card: FC = ({ children }) => (
    <StyledCard>
        {children}
    </StyledCard>
)

export default Card;