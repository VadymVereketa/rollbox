import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Permissions} from 'react-native-fbsdk';

const fbPermissions: Permissions[] = ['public_profile', 'email'];
const ignoreList = [/'defaultValue'/];

const configGoogleSignin = () => {
  GoogleSignin.configure({
    webClientId: '',
    iosClientId: '',
    scopes: ['profile', 'email'],
  });
};
export {fbPermissions, configGoogleSignin, ignoreList};
