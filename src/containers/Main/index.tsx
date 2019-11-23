import React, { FC } from 'react';
import {
    Row,
    Col
} from 'react-awesome-styled-grid';
import styled from 'styled-components';
import { Heading } from 'styled-typography';
import Container from '../../components/Container';
import Legend from '../../components/Legend';
import Card from '../../components/Card';

const CardCol = styled(Col)`
    margin-bottom: 1.5rem;
`;

const Main: FC = () => {
    return (
        <>
            <Container>
                <Legend>
                    Workspace
                </Legend>
                <Row>
                    {
                        ['', '', '', ''].map((item, index) => (
                            <CardCol xs={2} lg={4} xl={3} key={index}>
                                <Card>
                                    <Heading level={5}>
                                        Hello
                                    </Heading>
                                </Card>
                            </CardCol>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
}

export default Main;