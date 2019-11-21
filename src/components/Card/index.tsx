import React, { FC } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    padding: ${({ theme }) => theme.utils.getRem(25, true)};
    border-radius: 2px;
    background: ${({ theme }) => theme.color('primary', 'background', 90)};
    box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 12px 0px;
    position: relative;
    transition: .2s ease all;
    cursor: pointer;

    &:hover {
        transform: translateY(-1px);
        box-shadow: rgba(0, 0, 0, 0.1) 0px 16px 48px 0px;
    }
`;

const Card: FC = ({ children }) => (
    <StyledCard>
        {children}
    </StyledCard>
)

export default Card;