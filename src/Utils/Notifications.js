import React from 'react';
import { Toast } from 'native-base';
import { Platform, ToastAndroid } from 'react-native';

export default showToasterMessage = (message: string) => {
  if (Platform.OS === 'ios') {
    Toast.show({
      text: message,
    });
  } else {
    ToastAndroid.show(message, ToastAndroid.LONG);
  }
};