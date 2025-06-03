import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import { ThemedText } from '@/components/ThemedText';

const Drawer = createDrawerNavigator();

export const NavitationDrawer = () => {
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen name='Themed' component={ThemedText} />
      </Drawer.Navigator>
    </>
  );
};
