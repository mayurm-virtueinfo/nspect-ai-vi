import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { Images } from '../theme/Images';
import { AppStrings } from '../theme/AppStrings';
import Fonts from '../theme/Fonts';
import AppHeader from '../components/AppHeader';
import AppTextInput from '../components/AppTextInput';
import { useAlertModal } from '../components/AlertModalProvider';
import { validateEmail } from '../utility/Helper';
import PrimaryButton from '../components/PrimaryButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type SigninScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Signin'
>;

const SigninScreen: React.FC = () => {
  const { showModal, hideModal } = useAlertModal();
  const navigation = useNavigation<SigninScreenNavigationProp>();
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState(__DEV__ ? 'test@gmail.com' : '');
  const [password, setPassword] = useState(__DEV__ ? 'Test@123' : '');

  const handleSignIn = () => {
    if (email === '' && password === '') {
      showModal({
        body: AppStrings.please_enter_the_email_and_password,
        buttonText: 'Close',
        onClose: () => hideModal(),
      });
    } else if (email === '') {
      showModal({
        body: AppStrings.please_enter_the_email_address,
        buttonText: 'Close',
        onClose: () => hideModal(),
      });
    } else if (!validateEmail(email)) {
      showModal({
        body: AppStrings.please_enter_valid_email_address,
        buttonText: 'Close',
        onClose: () => hideModal(),
      });
    } else if (password === '') {
      showModal({
        body: AppStrings.please_enter_the_password,
        buttonText: 'Close',
        onClose: () => hideModal(),
      });
    } else {
      navigation.navigate('DrawerNavigator');
    }
  };

  const handleGoBack = () => navigation.goBack();

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <AppHeader title="Sign In" isShowBackButton={true} onBack={handleGoBack} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.innerContent}>
            <AppTextInput
              value={email}
              onChangeText={setEmail}
              label={AppStrings.email_address}
              placeholder={AppStrings.enter_email_address}
              icon={Images.ic_input_user}
              keyboardType={'email-address'}
            />
            <AppTextInput
              value={password}
              onChangeText={setPassword}
              label={AppStrings.password}
              placeholder={AppStrings.enter_password}
              icon={Images.ic_lock}
              style={styles.input}
              secureTextEntry
            />
            <PrimaryButton
              title={AppStrings.sign_in}
              onPress={handleSignIn}
            />

            <View style={styles.footerContainer}>
              <Text style={styles.forgotText}>{AppStrings.forgot_your_password}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.resetText}>{AppStrings.reset_it_here}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1877F2',
  },
  keyboardAvoid: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    paddingBottom: 40,
  },
  innerContent: {
    flex: 1,
    justifyContent: 'center',
  },
  footerContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 25,
  },
  forgotText: {
    color: '#000000',
    fontFamily: Fonts.DMSans_Bold,
  },
  resetText: {
    color: '#1f72ff',
    fontFamily: Fonts.DMSans_Bold,
    borderBottomWidth: 1,
    borderColor: '#1f72ff',
    marginLeft: 5,
  },
  input: {
    marginTop: 15,
  }
});
