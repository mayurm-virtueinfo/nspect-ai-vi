import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { AppStrings } from '../theme/AppStrings';
import AppHeader from '../components/AppHeader';

type DashboardScreenNavigationProp = DrawerNavigationProp<
  RootStackParamList,
  'Dashboard'
>;

const DashboardScreen: React.FC = () => {
  const navigation = useNavigation<DashboardScreenNavigationProp>();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.mainContainer, {paddingTop: insets.top}]}>
      <AppHeader
        title={AppStrings.dashboard}
        showDrawer={true} 
        showSearch={true}
        onPressMenu={() => {
          navigation.toggleDrawer();
        }}
      />
      <View style={styles.container}>

      </View>
    </View>
  )
}

export default DashboardScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#1877F2',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  }
});