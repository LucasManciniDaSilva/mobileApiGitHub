import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Main/index';
import User from './pages/User/index';
import Repository from './pages/Repository';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      Repository,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#489ffc',
        },
        headerTintColor: '#0c005b',
      },
    }
  )
);

export default Routes;
