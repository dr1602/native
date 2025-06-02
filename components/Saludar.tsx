import { ThemedText } from '@/components/ThemedText';
import React from 'react';

interface SaludarProps {
  firtName: string;
  lastName?: string;
}

export const Saludar = ({ firtName = 'usuario', lastName }: SaludarProps) => {
  return (
    <>
      <ThemedText>
        Hola, {firtName} {lastName}
      </ThemedText>
    </>
  );
};
