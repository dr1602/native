import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { StyleSheet } from 'react-native';

interface SaludarProps {
  firtName: string;
  lastName?: string;
}

export const Saludar = ({ firtName = 'usuario', lastName }: SaludarProps) => {
  return (
    <>
      <ThemedText style={styles.saludarStyles}>
        Hola, {firtName} {lastName}
      </ThemedText>
    </>
  );
};

const styles = StyleSheet.create({
  saludarStyles: {
    backgroundColor: 'red',
  },
});
