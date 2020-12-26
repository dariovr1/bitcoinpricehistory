import React from 'react';
import {
    Title,
    Container,
} from '../index';

export default ({pricing,onflag}) => {
    return (
        <Container style={{paddingTop: 30}} direction="row">
            <Title style={{paddingRight: 10}}>Last Price:</Title>
            <Title style={
               onflag && {
                   color: onflag,
               }
            }>{pricing && pricing.price &&  pricing.price || "New Price is loading..."}</Title>
        </Container>
    )
};