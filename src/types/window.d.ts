export interface EnvConfig {
  auth0: {
    authority: string;
    client_id: string;
    scope: string;
  };
  hosts: {
    api: string;
  };
}

declare global {
  interface Window {
    ENV_CONFIG: EnvConfig;
  }
}
