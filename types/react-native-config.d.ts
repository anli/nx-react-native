declare module 'react-native-config' {
  export interface NativeConfig {
    AUTH0_DOMAIN: string;
    AUTH0_CLIENT_ID: string;
    GRAPHQL_URL: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
