import Icon from 'react-native-vector-icons/FontAwesome';

import Bookmarks from '../../screens/Bookmarks';


const Routes = {
        Bookmarks: {
            screen: Bookmarks,
            navigationOptions: () => ({
                tabBarLabel: '',
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="heart"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },
        Likes: {
            screen: Bookmarks,
            navigationOptions: () => ({
                tabBarLabel: 'Home',
                tabBarIcon: ({tintColor}) => (
                    <Entypo name="wallet" size={24} color={tintColor} />
                )
            })
        },
        Adding: {
            screen: Bookmarks,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 70,
                        height: 70,
                        borderRadius: 70 / 2,
                        backgroundColor: '#48A2F8',
                    }}>
                        <Icon name="plus" size={24} color={tintColor}/>
                    </View>
                )
            })
        },
        Private: {
            screen: Bookmarks,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="lock"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },
        Profile: {
            screen: Bookmarks,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="user"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        }
    };

export default Routes;
