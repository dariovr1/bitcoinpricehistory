import React from 'react';
import styled,{ css } from '@emotion/native';
import {Container} from '../index';
import { View , TextInput, Button } from 'react-native';




const avatar = ({imgpath,imgdim,titlestyle,title,smallstyle,small,avstyle}) => {
    return (
        <>
        <Container flex={1} direction="row" alignitems="center">
        <Avatar style={avstyle} source={{
            uri: imgpath && imgpath || 'https://cutt.ly/NhC9cBu',
        }} />
            <View>
                    <Title style={titlestyle}>{title && title || "John Doe" }</Title>
                    <Small style={smallstyle}>{small && small || "@unknow" }</Small>
            </View>
        </Container>
        </>
    )
}

const Avatar = styled.Image`
    border-radius: 50px;
    height:50px;
    margin-left:10px;
    margin-right:10px;
`;

const Title = styled.Text`
    font-size: 22px;
    font-weight: 500;
    color: #333333;
`;

const Small = styled.Text`
    font-size: 12px;
    font-weight: 500;
    color: #b8bece;
`;

export default avatar;