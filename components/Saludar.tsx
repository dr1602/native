import { ThemedText } from '@/components/ThemedText';
import React from 'react';

interface SaludarProps {
  firtName: string;
  lastName?: string;
}

export const Saludar: React.FC<SaludarProps> = ({
  firtName = 'usuario',
  lastName,
}) => {
  return (
    <>
      <ThemedText>
        Hola, {firtName} {lastName}
      </ThemedText>
    </>
  );
};
