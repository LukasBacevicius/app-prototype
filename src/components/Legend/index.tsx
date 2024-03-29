import React, { FC } from 'react';
import { Row, Col } from 'react-awesome-styled-grid';
import { Heading } from 'styled-typography';
import styled from 'styled-components';

const StyledLegend = styled.div`
    padding-bottom: 1rem;
    margin-bottom: 2rem;
`;

const Legend: FC = ({ children }) => (
    <StyledLegend>
        <Row>
            <Col>
                <Heading level={1}>
                    {children}
                </Heading>
            </Col>
        </Row>
    </StyledLegend>
)

export default Legend;