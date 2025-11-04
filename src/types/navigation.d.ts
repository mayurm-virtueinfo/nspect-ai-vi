import { ESPDevice, ESPWifiList } from "@orbital-systems/react-native-esp-idf-provisioning";
import { DeviceCardProps } from "../component/ManageDeviceCard";

export type RootStackParamList = {
  Splash: undefined;
  LaunchScreen: undefined,
  SplashStack: undefined;
  AuthStack: undefined;
  HomeStack: undefined;
  Signin: undefined;
  Notifications: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
  Status: undefined;
  ViewSystem1: undefined;
  ViewSystem2: undefined;
  Actions: undefined;
  Alerts: undefined;
  Profile: undefined;
  HomeTabs:undefined;
  ManageProfile:any;
  HomeScreen:undefined;
  BLEProvisionScreen: undefined;
  BasicScan: undefined;
  ConnectDevice: {selectedDevice:any};
  ReadWrite: undefined;
  Notifications: undefined;
  Disconnect: undefined;
  ESPIDFProvisionScreen: undefined;
  Settings: undefined;
};
export type StatusParamList = {
  Status: undefined;
  ViewSystem1: undefined;
  ViewSystem2: undefined;
  Notifications: undefined;
  ManageProfile:any;
};
export type HistoryParamList = {
  History: undefined;
  Notifications: undefined;
  ManageProfile:any;
  HistoryDetail:any;
};
export type ActionsParamList = {
  Actions: undefined;
  Notifications: undefined;
  AppInfo: undefined;
  PrivacyAndTerms: any;
  ManageLocations: any;
  ManageSystems: any;
  ManageDevices: any;
  AddDevice:{
    selectedDevice?:DeviceCardProps,
    espDevice?:ESPDevice,
    espWifiListItem?:ESPWifiList,
    provisionError?:any,
    bluetoothIdParam?:string
  };
  ManageServices: any;
  CreateNewLocation: any;
  CreateNewSystem:any;
  CreateNewService:any;
  ManageProfile:any;
  HomeScreen:undefined;
  BLEProvisionScreen: undefined;
  BasicScan: undefined;
  ConnectDevice: {selectedDevice:any};
  ReadWrite: undefined;
  Notifications: undefined;
  Disconnect: undefined;
  ESPIDFProvisionScreen: undefined;
  Settings: undefined;
  Provision:
    | { name: string; transport: ESPTransport; security: ESPSecurity }
    | undefined;
  WifiList: { device: ESPDevice };
  ProvisioningScreen: { device: ESPDevice; ssid: string,passphrase: string, espWifiListItem:ESPWifiList };
  WifiPassword: { device: ESPDevice; ssid: string };
  Device: {
    name: string;
    transport: ESPTransport;
    security: ESPSecurity;
    softAPPassword?: string;
    proofOfPossession?: string;
    username?: string;
  };
  SendData: {
    device: ESPDevice;
  };
};