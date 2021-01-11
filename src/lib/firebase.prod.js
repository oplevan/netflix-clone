import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// seed the database

// config

const config = {
  apiKey: 'AIzaSyAD7TQJ_FbHr0SZBBscG_PSGC94lhwY_No',
  authDomain: 'netflix-961e6.firebaseapp.com',
  projectId: 'netflix-961e6',
  storageBucket: 'netflix-961e6.appspot.com',
  messagingSenderId: '686056932198',
  appId: '1:686056932198:web:99ec4c7a9b1f98315d3ea7',
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase); ====> careful here - if uncommented and reload the app it will upload the same data to the firestore which will duplicate the data data

export { firebase };
