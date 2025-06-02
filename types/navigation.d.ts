export type RootStackParamList = {
  Themed: undefined;
  Home: undefined;
  Saludo: undefined;
  CoolHome: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
