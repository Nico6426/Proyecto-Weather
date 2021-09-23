// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: 'https://localhost:44315/',
  getURL:'api/Weather/getWeather?',
  getHistoryURL: 'api/Weather/getHistory?',
  postURL: 'api/Weather/postToHistory',
  //countryIso: 'https://restcountries.eu/rest/v2/all'
  countryIso: 'https://api.worldbank.org/v2/country/?format=json'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
