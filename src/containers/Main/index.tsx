import React, { FC } from 'react';
import {
    Row,
    Col
} from 'react-awesome-styled-grid';
import { Heading } from 'styled-typography';
import Container from '../../components/Container';
import Legend from '../../components/Legend';
import Card from '../../components/Card';

const Main: FC = () => {
    return (
        <>
            <Container>
                <Legend>
                    Workspace
                </Legend>
                <Row>
                    {
                        ['', '', '', ''].map(() => (
                            <Col xs={2} lg={4} xl={3}>
                                <Card>
                                    <Heading level={3}>
                                        Hello
                                    </Heading>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
}

export default Main;