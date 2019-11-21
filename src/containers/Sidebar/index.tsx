import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: ${({ theme }) => theme.color('primary', 'background', 90)};
    height: 100%;
    flex: 0 0 240px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 12px 0px;
`;

export const Sidebar: FC = ({ children }) => (
    <Container>
        {children}
    </Container>
)