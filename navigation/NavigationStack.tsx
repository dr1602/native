import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { HelloWave } from '@/components/HelloWave';
import { Saludar } from '@/components/Saludar';
import { ThemedText } from '@/components/ThemedText';

export const NavigationStack: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <Stack.Navigator initialRouteName='Saludo'>
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
      </Stack.Navigator>
    </>
  );
};
