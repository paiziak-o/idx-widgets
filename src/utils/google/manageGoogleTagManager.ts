/**
 * Disable/Enable Google Analytics
 *
 * https://developers.google.com/analytics/devguides/collection/ga4/disable-analytics
 */
const CONFIG_KEY = 'config';

const manageGoogleTagManager = (status: boolean): void => {
  const _window = (window as any);
  const id: string | undefined = _window.dataLayer?.reduce((
    result: string,
    [key, value]: string[],
  ) => {
    if (key === CONFIG_KEY) {
      return value;
    }

    return result;
  }, '');

  if (id) {
    _window[`ga-disable-${id}`] = status;
  }
};

export default manageGoogleTagManager;
