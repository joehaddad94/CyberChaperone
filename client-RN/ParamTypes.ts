export type StackParamList = {
    LoginScreen: undefined;
    RegisterScreen: undefined;
    HomeScreen: undefined;
    CameraScreen: undefined;
    InfoScreen: undefined;
    DashboardScreen: undefined;
    ProfileScreen: undefined;
    SettingsScreen: undefined;
    UsersScreen: undefined;
    ManageProfileScreen: undefined;
    CreateUsersScreen: undefined;
  };

  export type registerCredentials = {
    username: string,
    email: string,
    password: string,
  }

  export type loginCredentials = {
    username: string,
    password: string,
  }

  export type userCredentials = {
    username: string,
    email: string,
    password: string,
  }

  export interface EmotionAverages {
    Neutral: number;
    Happy: number;
    Sad: number;
    Angry: number;
    Fearful: number;
    Disgusted: number;
    Surprised: number;
  }

  export interface MaxEmotions {
    Neutral: number;
    Happy: number;
    Sad: number;
    Angry: number;
    Fearful: number;
    Disgusted: number;
    Surprised: number;
  }

  export interface User {
    username: string;
    id: number;
  }

  export interface ProfileCredentials {
    firstName: string;
    lastName: string;
  }