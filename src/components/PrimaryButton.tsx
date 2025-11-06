import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
  DimensionValue,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../theme/Fonts';

interface PrimaryButtonProps extends PressableProps {
  title: string;
  iSource?: ImageSourcePropType;
  showIcon?: boolean;
  onPress?: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  buttonWidth?: DimensionValue;
  buttonHeight?: number;
  buttonJustifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  buttonBorderRadius?: number;
  buttonMarginTop?: number;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  iSource,
  showIcon = !!iSource,
  buttonStyle,
  textStyle,
  iconStyle,
  buttonWidth = '100%',
  buttonHeight = 50,
  buttonJustifyContent = 'center',
  buttonBorderRadius = 1000,
  buttonMarginTop = 18,
  ...rest
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          width: buttonWidth,
          height: buttonHeight,
          marginTop: buttonMarginTop,
          borderRadius: buttonBorderRadius,
        },
        buttonStyle,
      ]}
      {...rest}
    >
      <LinearGradient
        colors={[
          '#1877F2',
          '#1877F2',
          '#1877F2',
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[
          styles.innerGradient,
          {
            borderRadius: buttonBorderRadius - 1,
            justifyContent: buttonJustifyContent,
          },
        ]}
      >
        {showIcon && iSource && (
          <Image
            source={iSource}
            resizeMode="contain"
            style={[styles.icon, iconStyle]}
          />
        )}

        <Text style={[styles.text, textStyle]}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    overflow: 'hidden',
    shadowColor: 'rgba(22, 22, 22, 0.31)',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  innerGradient: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: Fonts.DMSans_Bold,
    textAlign: 'center',
  },
});

export default PrimaryButton;
