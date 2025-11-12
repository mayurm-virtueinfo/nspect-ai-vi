import React from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParamList } from '../types/navigation';
import AppHeader from '../components/AppHeader';

type CmsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Cms'
>;

type CmsScreenRouteProp = RouteProp<RootStackParamList, 'Cms'>;

const CmsScreen: React.FC = () => {
  const navigation = useNavigation<CmsScreenNavigationProp>();
  const route = useRoute<CmsScreenRouteProp>();
  const insets = useSafeAreaInsets();

  const { title } = route.params ?? { title: 'CMS Title' };

  const handleGoBack = () => navigation.goBack();

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <AppHeader title={title} isShowBackButton={true} onBack={handleGoBack} />
      <View style={styles.content}>
        <Text>CmsScreen</Text>
      </View>
    </View>
  );
};

export default CmsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1877F2',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
});