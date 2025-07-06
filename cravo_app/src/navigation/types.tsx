import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  EmailLogin: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

export type ScreenProps<T extends keyof RootStackParamList> = {
    navigation: NativeStackNavigationProp<RootStackParamList, T>;
    route: RouteProp<RootStackParamList, T>;
};