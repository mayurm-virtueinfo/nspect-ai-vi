import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppHeader from '../components/AppHeader';
import { AppStrings } from '../theme/AppStrings';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootStackParamList } from '../types/navigation';

type InspectionsScreenNavigationProp = DrawerNavigationProp<
  RootStackParamList,
  'Inspections'
>;

const InspectionsScreen: React.FC = () => {
  const navigation = useNavigation<InspectionsScreenNavigationProp>();
  const insets = useSafeAreaInsets();
  
  return (
    <View style={[styles.mainContainer, { paddingTop: insets.top }]}>
      <AppHeader
        title={AppStrings.Inspections}
        showDrawer={true}
        showSearch={true}
        onPressMenu={() => {
          navigation.toggleDrawer();
        }}
      />
      <View style={styles.container}>

      </View>
    </View>
  );
};

export default InspectionsScreen;

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