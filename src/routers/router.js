import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './../pages/Home';
import Details from './../pages/Details';
import verLista from './../pages/verLista';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },

    Details: {
      screen: Details,
    },
    verLista: {
      screen: verLista,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default Router = createAppContainer(AppNavigator);
