import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import DeviceInfo from 'react-native-device-info';
import Icon from 'react-native-vector-icons/Feather';
import Fonts from '../theme/Fonts';
import { AppStrings } from '../theme/AppStrings';


export const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();
  const appVersion = DeviceInfo.getVersion();

  const handleNavigate = (screen: string) => {
    navigation.closeDrawer();
    // navigation.navigate(screen); // Uncomment if routes exist
  };

  return (
    <View style={[styles.overlay, { paddingTop: insets.top }]}>
      <View style={[styles.drawerContainer]}>
        {/* Close Button */}
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => navigation.toggleDrawer()}
        >
          <Icon name="x" size={20} color="#000" />
        </TouchableOpacity>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={() => handleNavigate('Profile')}>
            <Text style={styles.menuText}>My Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => {
              navigation.closeDrawer();
              navigation.navigate('Cms', {
                title: AppStrings.terms_of_service,
              });
            }}>
            <Text style={styles.menuText}>Terms of Service</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            navigation.closeDrawer();
            navigation.navigate('Cms', {
              title: AppStrings.privacy_policy,
            });
          }}>
            <Text style={styles.menuText}>Privacy Policy</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleNavigate('SignOut')}>
            <Text style={styles.menuText}>Sign Out</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleNavigate('DeleteAccount')}>
            <Text style={styles.deleteText}>Delete Account</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom App Version */}
        <Text style={styles.versionText}>App ver {appVersion}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  closeBtn: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    left: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 60 ,
    alignItems: 'center',
  },
  menuText: {
    fontSize: 24,
    color: '#000',
    fontFamily: Fonts.DMSans_Bold,
  },
  deleteText: {
    fontSize: 18,
    fontFamily: Fonts.DMSans_Regular,
    color: '#F21818',
  },
  versionText: {
    fontSize: 12,
    fontFamily: Fonts.DMSans_Regular,
    color: '#171717',
    marginBottom: 30,
  },
});
