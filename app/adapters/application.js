// STANDARD FILE
// import FirestoreAdapter from 'emberfire/adapters/firestore';

// export default FirestoreAdapter.extend({
//     // Uncomment the following lines to enable offline persistence and multi-tab support
//     // enablePersistence: true,
//     // persistenceSettings: { synchronizeTabs: true }
// });
// EOF STANDARD FILE


// Bellow lines to fix bug with emberfire wrongly parsing stuff
// and therefore returning an error on saving to firestore
// This switches to realtime AND fixes erros 
// Works with serializers/application.js
import RealtimeDatabaseAdapter from 'emberfire/adapters/realtime-database';

export default class ApplicationAdapter extends RealtimeDatabaseAdapter {}
