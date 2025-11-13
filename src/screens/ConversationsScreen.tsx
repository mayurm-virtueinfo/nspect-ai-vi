import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootStackParamList } from '../types/navigation';
import AppHeader from '../components/AppHeader';
import { AppStrings } from '../theme/AppStrings';

type ConversationsScreenNavigationProp = DrawerNavigationProp<
  RootStackParamList,
  'Conversations'
>;

const ConversationsScreen: React.FC = () => {
  const navigation = useNavigation<ConversationsScreenNavigationProp>();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.mainContainer, { paddingTop: insets.top }]}>
      <AppHeader
        title={AppStrings.conversations}
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

export default ConversationsScreen;
