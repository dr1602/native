import { Button } from '@react-navigation/elements';
import { Image } from 'expo-image';
import { useNavigation } from 'expo-router';
import { StyleSheet } from 'react-native';

import { LoginForm } from '@/components/LoginForm';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Saludar } from '@/components/Saludar';
import { ThemedText } from '@/components/ThemedText';

export const CoolHome = () => {
  const navigation = useNavigation();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <LoginForm />
      <ThemedText type='subtitle'>Curso de React Native</ThemedText>
      <Saludar firtName='K8' />
      <Saludar firtName='Andor' />
      <Saludar firtName='Casian' lastName='de Taris' />

      <Button onPress={() => navigation.navigate('Saludo')}>
        Go to Special Greeting
      </Button>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#61DAFB',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  specialTextColour: {
    color: '#282C34',
  },
});
