import { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';

import { CoolHome } from '@/components/CoolHome';
import { ThemedText } from '@/components/ThemedText';

const renderScene = SceneMap({
  first: ThemedText,
  second: CoolHome,
});

const routes = [
  { key: 'theme', title: 'Title' },
  { key: 'coolHome', title: 'Cool Home' },
];

export const NavigatioTab = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState<number>(0);
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};
