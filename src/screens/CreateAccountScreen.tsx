import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
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
import { validateEmail, validatePassword } from '../utility/Helper';
import PrimaryButton from '../components/PrimaryButton';

type CreateAccountScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CreateAccount'
>;

const CreateAccountScreen: React.FC = () => {
  const { showModal, hideModal } = useAlertModal();
  const navigation = useNavigation<CreateAccountScreenNavigationProp>();

  const [email, setEmail] = useState(__DEV__ ? 'test@gmail.com' : '');
  const [fullName, setFullName] = useState(__DEV__ ? 'Test Dev 12' : '');
  const [companyName, setCompanyName] = useState(__DEV__ ? 'Dev 12 Semaphore' : '');
  const [contactNumber, setContactNumber] = useState(__DEV__ ? '1234567890' : '');
  const [confirmPassword, setConfirmPassword] = useState(__DEV__ ? 'Test@123' : '');
  const [password, setPassword] = useState(__DEV__ ? 'Test@123' : '');

  const handleCreateAccount = () => {
    if (email === '') {
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
    } else if (fullName === '') {
      showModal({
        body: AppStrings.please_enter_the_full_name,
        buttonText: 'Close',
        onClose: () => hideModal(),
      });
    } else if (companyName === '') {
      showModal({
        body: AppStrings.please_enter_the_company_name,
        buttonText: 'Close',
        onClose: () => hideModal(),
      });
    } else if (contactNumber === '') {
      showModal({
        body: AppStrings.please_enter_the_contact_number,
        buttonText: 'Close',
        onClose: () => hideModal(),
      });
    } else if (contactNumber.length < 10) {
      showModal({
        body: AppStrings.please_enter_least_of_ten_number,
        buttonText: 'Close',
        onClose: () => hideModal(),
      });
    } else if (password === '') {
      showModal({
        body: AppStrings.please_enter_the_password,
        buttonText: 'Close',
        onClose: () => hideModal(),
      });
    } else if (!validatePassword(password)) {
      showModal({
        body: AppStrings.the_password_must_be_at_least,
        buttonText: "Close",
        onClose: () => hideModal(),
      });
    } else if (confirmPassword === '') {
      showModal({
        body: AppStrings.please_enter_the_cpassword,
        buttonText: "Close",
        onClose: () => hideModal(),
      });
    } else if (confirmPassword !== password) {
      showModal({
        body: AppStrings.the_entered_passwords_do_not_match,
        buttonText: "Close",
        onClose: () => hideModal(),
      });
    } else {

    }
  };

  const handleGoBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <AppHeader title={AppStrings.create_account} isShowBackButton={true} onBack={handleGoBack} />

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
              value={fullName}
              onChangeText={setFullName}
              label={AppStrings.full_name}
              placeholder={AppStrings.enter_full_name}
              icon={Images.ic_input_user}
              style={styles.input}
            />
            <AppTextInput
              value={companyName}
              onChangeText={setCompanyName}
              label={AppStrings.company_name}
              placeholder={AppStrings.enter_company_name}
              icon={Images.ic_input_user}
              style={styles.input}
            />
            <AppTextInput
              value={contactNumber}
              onChangeText={setContactNumber}
              label={AppStrings.contact_number}
              placeholder={AppStrings.enter_contact_number}
              icon={Images.ic_call}
              style={styles.input}
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
            <AppTextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              label={AppStrings.confirm_password}
              placeholder={AppStrings.enter_confirm_password}
              icon={Images.ic_lock}
              style={styles.input}
              secureTextEntry
            />
            <PrimaryButton
              title={AppStrings.create_account}
              onPress={handleCreateAccount}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CreateAccountScreen;

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
    paddingHorizontal: 25,
    paddingBottom: 60,
  },
  innerContent: {
    flex: 1,
    marginTop: 50,
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
    color: '#1145F5',
    fontFamily: Fonts.DMSans_Bold,
    borderBottomWidth: 1,
    borderColor: '#1145F5',
    marginLeft: 5,
  },
  input: {
    marginTop: 15,
  }
});
