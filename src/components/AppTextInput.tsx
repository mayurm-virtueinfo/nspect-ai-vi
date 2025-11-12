import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TextInputProps,
  Platform,
  StyleProp,
  ViewStyle,
  Text,
  Image,
} from 'react-native';
import Fonts from '../theme/Fonts';

interface AppTextInputProps extends TextInputProps {
  label?: string;
  rightComponent?: React.ReactNode;
  icon?: any;
  style?: StyleProp<ViewStyle>;
  error?: string;
}

const AppTextInput: React.FC<AppTextInputProps> = ({
  label,
  rightComponent,
  icon,
  style,
  error,
  ...props
}) => {
  return (
    <View style={[style]}>
      {label && <View style={styles.labelContainer}><Text style={styles.label}>{label}</Text></View>}

      <View style={[styles.container]}>
        {icon && 
        <View style={styles.iconContainer}>
          <Image 
            source={icon}
            style={{height: 15, width: 15, resizeMode: 'contain'}}
          />
        </View>}

        <TextInput
          {...props}
          style={[
            styles.input,
            rightComponent ? { paddingRight: 0 } : undefined,
          ]}
          placeholderTextColor="#888"
        />

        {rightComponent && (
          <View style={styles.rightComponentContainer}>{rightComponent}</View>
        )}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    marginBottom: 6,
  },
  label: {
    fontFamily: Fonts.DMSans_Bold,
    fontSize: 14,
    color: '#171717',
    fontWeight: '700',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#ECEFF6',
    paddingHorizontal: 16,
    minHeight: 50,
  },
  iconContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 12,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: Fonts.DMSans_Regular,
    color: '#171717',
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
  },
  rightComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  errorText: {
    color: '#F21818',
    fontSize: 14,
    marginTop: 5,
    fontFamily: Fonts.DMSans_Regular,
  },
});

export default AppTextInput;
