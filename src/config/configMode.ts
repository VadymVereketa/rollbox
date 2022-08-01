enum Mode {
  LOCAL = 'LOCAL',
  DEV = 'DEV',
  PROD = 'PROD',
  UAT = 'UAT',
}
const mode: any = Mode.DEV;

const config = (() => {
  switch (mode) {
    case Mode.DEV:
      return {
        baseURL: '',
        sentry: {
          enabled: true,
          environment: Mode.DEV,
        },
        admobAndroid: '',
        admobIOS: '',
        publisherID: [''],
        debugAdbmob: false,

        appConfig: {
          bundleId: '',
          appStoreId: '',
          packageName: '',
          teamId: '',
        },
      };
    case Mode.PROD:
      return {
        baseURL: '',
        sentry: {
          enabled: true,
          environment: Mode.PROD,
        },
        admobAndroid: '',
        admobIOS: '',
        publisherID: [''],
        debugAdbmob: false,

        appConfig: {
          bundleId: '',
          appStoreId: '',
          packageName: '',
          teamId: '',
        },
      };
    case Mode.UAT:
      return {
        baseURL: '',
        sentry: {
          enabled: true,
          environment: Mode.UAT,
        },
        admobAndroid: '',
        admobIOS: '',
        publisherID: [''],
        debugAdbmob: false,

        appConfig: {
          bundleId: '',
          appStoreId: '',
          packageName: '',
          teamId: '',
        },
      };
    default:
      return {
        baseURL: '',
        sentry: {
          enabled: true,
          environment: Mode.DEV,
        },
        admobAndroid: '',
        admobIOS: '',
        publisherID: [''],
        debugAdbmob: false,

        appConfig: {
          bundleId: '',
          appStoreId: '',
          packageName: '',
          teamId: '',
        },
      };
  }
})();

const isProd = mode === Mode.PROD;
const isDev = mode !== Mode.PROD;

export {Mode, mode, isProd, isDev};
export default config;
