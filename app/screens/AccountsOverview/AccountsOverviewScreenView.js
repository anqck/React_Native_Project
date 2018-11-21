import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, ToastAndroid, Platform } from 'react-native';
import PropTypes from 'prop-types';

import  { ListItem, Subheader, Toolbar } from 'react-native-material-ui'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};
const contextTypes = {
   
};

class AccountsOverview extends Component {
    render() {
        // const { listItem } = this.context.uiTheme;
        // const flattenPrimaryText = StyleSheet.flatten(listItem.primaryText);

        return (
            <View style={styles.container}>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement="List item"
                />
                <ScrollView style={styles.container}>
                    
                   
                    <Subheader text="Two lines with icon" />
                 
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={{
                            primaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                            secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum',
                        }}
                        rightElement="info"
                        onLeftElementPress={() => {
                            if (Platform.OS === 'android') {
                                ToastAndroid.show('Left element pressed', ToastAndroid.SHORT);
                            }
                        }}
                        onPress={() => ToastAndroid.show('List item pressed', ToastAndroid.SHORT)}
                        onRightElementPress={() => {
                            if (Platform.OS === 'android') {
                                ToastAndroid.show('Right element pressed', ToastAndroid.SHORT);
                            }
                        }}
                    />
                    <Subheader text="Three lines" />
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={{
                            primaryText: 'Center element as an object',
                            secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                        }}
                        numberOfLines={3}
                    />
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={{
                            primaryText: 'Center element as an object',
                            secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                            tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                        }}
                    />

                    <Subheader text="Dynamic" />
                    <ListItem
                        divider
                        leftElement="person"
                        numberOfLines="dynamic"
                        centerElement={{
                            primaryText: 'With dynamic second line',
                            secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Pellentesque commodo ultrices diam. Praesent in ipsum',
                        }}
                        onPress={() => {}}
                    />
                    <Subheader text="Custom" />
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={<Text>Custom center element</Text>}
                    />
                </ScrollView>
            </View>
        );
    }
}

AccountsOverview.propTypes = propTypes;
AccountsOverview.contextTypes = contextTypes;

export default AccountsOverview;