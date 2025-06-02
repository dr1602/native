import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { CoolHome } from '@/components/CoolHome';
import { HelloWave } from '@/components/HelloWave';
import { Saludar } from '@/components/Saludar';
import { ThemedText } from '@/components/ThemedText';

export const NavigationStack: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <Stack.Navigator initialRouteName='CoolHome'>
        <Stack.Screen
          name='Themed'
          component={ThemedText}
          options={{ title: 'Text' }}
        />
        <Stack.Screen
          name='Home'
          component={HelloWave}
          options={{ title: 'Inicio' }}
        />
        <Stack.Screen name='Saludo' options={{ title: 'Saludar' }}>
          {() => <Saludar firtName={'Usuario'} />}
        </Stack.Screen>
        <Stack.Screen
          name='CoolHome'
          component={CoolHome}
          options={{ title: 'Kool Home' }}
        />
      </Stack.Navigator>
    </>
  );
};
