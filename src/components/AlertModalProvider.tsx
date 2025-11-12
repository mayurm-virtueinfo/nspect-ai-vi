import React, { createContext, useContext, useState, ReactNode } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { Colors } from "../theme/Colors";
import Fonts from "../theme/Fonts";

type ModalConfig = {
  title?: string;
  body?: string;
  buttonText?: string;
  onClose?: () => void;
};

type ModalContextType = {
  showModal: (config: ModalConfig) => void;
  hideModal: () => void;
  showLoader: () => void;
  hideLoader: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const AlertModalProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const [config, setConfig] = useState<ModalConfig>({});
  const [loading, setLoading] = useState(false);

  const showModal = (modalConfig: ModalConfig) => {
    setConfig(modalConfig);
    setVisible(true);
  };

  const hideModal = () => {
    hideLoader();
    setVisible(false);
    config.onClose?.();
  };
  const showLoader = () => {
    hideModal();
    setLoading(true);
  }
  const hideLoader = () => {
    setLoading(false);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal, showLoader, hideLoader }}>
      {children}

      <Modal transparent animationType="fade" visible={visible || loading} >
        <View style={styles.overlay}>
          {
            visible && <View style={styles.container}>
              {config.title && <Text style={styles.title}>{config.title}</Text>}
              {config.body && <Text style={styles.body}>{config.body}</Text>}
              <TouchableOpacity onPress={hideModal} style={styles.button}>
                <Text style={styles.buttonText}>
                  {config.buttonText || "OK"}
                </Text>
              </TouchableOpacity>
            </View>
          }

          {
            loading && <ActivityIndicator
              animating={loading}
              size="large"
              color={'white'}
            />
          }
        </View>
      </Modal>
    </ModalContext.Provider>
  );
};

export const useAlertModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useAlertModal must be used within AlertModalProvider");
  }
  return context;
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.DMSans_Bold,
    // fontWeight: "bold",
    color: Colors.primaryText,
    marginBottom: 12,
    textAlign: "center",
  },
  body: {
    fontSize: 16,
    fontFamily: Fonts.DMSans_Regular,
    // fontWeight: "bold",
    color: Colors.primaryText,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: '#1877F2',
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '60%',
    alignSelf: 'center'
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 14,
  },
});
