import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Images } from '../theme/Images';

const { height } = Dimensions.get('window');

interface AppHeaderProps {
  title?: string;
  onBack?: () => void;
  isShowBackButton?: boolean;
  showDrawer?: boolean;
  openDrawer?: () => void;
  isShowCart?: boolean;
  onCartClick?: () => void;
  isShowBlueBell?: boolean;
  onBlueBellClick?: () => void;
  mainStyle?: StyleProp<ViewStyle>;
  showAvtar?: boolean;
  onProfilePress?: () => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  onBack,
  isShowBackButton = false,
  mainStyle,
  showAvtar = false,
  onProfilePress,
}) => {
  return (
    <View style={[styles.container, mainStyle]}>
      {/* Left: Back Button */}
      {isShowBackButton && (
        <Pressable onPress={onBack} style={styles.backContainer}>
          <Image source={Images.ic_back_arrow} style={styles.backImage} />
        </Pressable>
      )}

      {/* Center: Logo */}
      <View style={styles.centerContent}>
        <Image source={Images.ic_logo_bg} style={styles.logoImage1} />
        <Image source={Images.ic_logo} style={styles.logoImage2} />
      </View>

      {/* Right: Avatar / Bell */}
      <View style={styles.rightContent}>
        {showAvtar && (
          <TouchableOpacity onPress={onProfilePress} style={styles.bellBtn}>
            <Image
              source={Images.ic_back_arrow}
              style={styles.backImage}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // centers logo in the middle
    height: height * 0.08,
    shadowColor: Platform.OS === 'ios' ? '#00000029' : 'rgba(0, 0, 0, 0.6)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1.0,
    elevation: Platform.OS === 'ios' ? 0.1 : 1,
    width: '100%',
  },
  backContainer: {
    position: 'absolute',
    left: 20,
    backgroundColor: 'white',
    borderRadius: 60,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  rightContent: {
    position: 'absolute',
    right: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bellBtn: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    marginLeft: 8,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage2: {
    position: 'absolute',
    height: 46,
    width: 28,
    resizeMode: 'contain',
  },
  logoImage1: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
  },
  backImage: {
    height: 14,
    width: 14,
    resizeMode: 'contain',
  },
});

export default AppHeader;
