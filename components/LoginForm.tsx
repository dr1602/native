import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export const LoginForm = () => {
  return (
    <>
      <View style={styles.formContainer}>
        <Text style={styles.title}> Componente Login form</Text>
        <TextInput placeholder='Email' style={styles.input} />
        <TextInput placeholder='Contraseña' style={styles.input} />
        <View style={styles.button}>
          <Button title='Enviar' onPress={() => console.log('Enviando')} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#61DAFB',
    borderRadius: 12,
    padding: 18,
  },
  title: {
    color: '#282C34',
    fontSize: 21,
    fontWeight: 500,
  },
  input: {
    color: '#282C34',
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
});
