// import amplitude from 'amplitude-js';
// import Amplitude, { logEvent } from '@redux-beacon/amplitude';
// import debounceEvent from '@redux-beacon/debounce-event';

// import { createMiddleware } from 'redux-beacon';

// const { SPS_ENV } = process.env;
// const isProduction = SPS_ENV === 'prod';
// const AMPLITUDE_API_KEY = isProduction
//   ? 'e115b5e66bae0611482132bad5877656'
//   : 'b1cf19caac74ae0bd545f8951b02215a';

// const amplitudeInstance = amplitude.getInstance();
// amplitudeInstance.init(AMPLITUDE_API_KEY);

// var identify = new amplitude.Identify().setOnce(
//   'Shop Domain',
//   window.shopOrigin.split('//').pop()
// );
// amplitudeInstance.identify(identify);

// const event = message =>
//   logEvent((action, prevState, nextState) => {
//     return {
//       type: message
//     };
//   });

// const searchEvent = logEvent((action, prevState, nextState) => {
//   return {
//     type: 'Searched for TP',
//     properties: { searchValue: action.payload.searchValue }
//   };
// });

// const videoPlayed = logEvent((action, prevState, nextState) => {
//   return {
//     type: `Clicked ${action.payload.videoName} video`
//   };
// });

// const downloadFile = logEvent((action, prevState, nextState) => {
//   return {
//     type: `Clicked ${action.payload.fileName} download`
//   };
// });

// const pageView = logEvent((action, prevState, nextState) => {
//   var prevPage = prevState.routing.location;
//   var currPage = nextState.routing.location;
//   prevPage = prevPage ? prevPage.slice(1) : '';
//   currPage = currPage ? currPage.slice(1) : '';
//   switch (currPage) {
//     case 'contact': {
//       if (prevPage === 'add_trading-partner')
//         return {
//           type: 'Clicked TP setup contact us'
//         };
//       else
//         return {
//           type: 'Clicked dashboard Contact Us'
//         };
//     }
//     case 'login':
//       return {
//         type: 'Commerce platform launched for existing user'
//       };
//     case 'learn-more':
//       return {
//         type: 'Clicked learn more'
//       };
//     case 'fulfillment':
//       return {
//         type: 'Opened Fulfillment'
//       };
//     default:
//       return null;
//   }
// });

// const eventsMap = {
//   // events
//   SUBMIT_COMPANY_PROFILE_START: event('Submitted company profile'),
//   ADD_TRADING_PARTNER_START: event('Added a trading partner'),
//   DELETE_TRADING_PARTNER_START: event('Deleted a trading partner'),
//   REQUEST_MORE_TRADING_PARTNERS_START: event(
//     'Clicked need to add more trading partners'
//   ),
//   REQUEST_MORE_TRADING_PARTNERS_REJECT: event(
//     'Rejected contact for more partners'
//   ),
//   REQUEST_MORE_TRADING_PARTNERS_COMPLETE: event(
//     'Confirmed contact for more partners'
//   ),
//   SUBMIT_QUESTION_START: event('Submitted question'),
//   UPDATE_COMPANIES_FILTER: debounceEvent(3000, searchEvent),
//   // redirection
//   LOCATION_CHANGE: pageView,
//   // training
//   FILE_DOWNLOAD: downloadFile,
//   VIDEO_PLAYED: videoPlayed
// };

// const target = Amplitude({ instance: amplitudeInstance });
// export default createMiddleware(eventsMap, target);
