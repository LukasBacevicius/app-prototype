import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: ${({ theme }) => theme.color('primary', 'background', 90)};
    height: 100%;
    flex: 0 0 240px;
    box-shadow: ${({ theme }) => theme.shadows.default};
    padding-bottom: 4rem;
    position: relative;
`;

export const Sidebar: FC = ({ children }) => (
    <Container>
        {children}
    </Container>
)