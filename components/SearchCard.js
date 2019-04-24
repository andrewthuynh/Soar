import React, { Component } from 'react'
import {
    Row,
    Image,
    Subtitle,
    Icon,
    Button,
    Text,
    View
} from '@shoutem/ui';
import { StyleSheet } from 'react-native';

const SearchCard = (props) => {

    return (
        <View>
            <Row>
                <Icon name="user-profile" />
                <Subtitle styleName="top">{props.name}</Subtitle>
                <Button>
                    <Text>ADD</Text>
                </Button>
            </Row>
        </View>
    )
}

export default SearchCard;