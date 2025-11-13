import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParamList } from '../types/navigation';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import AppHeader from '../components/AppHeader';
import { AppStrings } from '../theme/AppStrings';

type DocumentScreenNavigationProp = DrawerNavigationProp<
  RootStackParamList,
  'Document'
>;

const DocumentScreen: React.FC = () => {
  const navigation = useNavigation<DocumentScreenNavigationProp>();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.mainContainer, { paddingTop: insets.top }]}>
      <AppHeader
        title={AppStrings.Document}
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

export default DocumentScreen;

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