import { orgs } from './constants/constants';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDx3evSmF8MKAHAEAQloJfvT5ZeYtoKrEk",
  authDomain: "graceland-today.firebaseapp.com",
  databaseURL: "https://graceland-today.firebaseio.com",
  projectId: "graceland-today",
  storageBucket: "graceland-today.appspot.com",
  messagingSenderId: "860706059903",
  appId: "1:860706059903:web:9d70219ed57b1b2ef5f14a"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function setOrgAnnouncements(orgs) {
  var payload = {};
  for (let i = 0; i < orgs.length; i++) {
    var cRef = ref(database, orgs[i]);
    onValue(cRef, (snapshot) => {
      payload[orgs[i]] = snapshot.val();
    });
  }
  return payload;
}

export const announcements = setOrgAnnouncements(orgs);
// export const { "Academic Student Council": asc,
//   "COSA": cosa,
//   "Council of House Chaplains": chc,
//   "IDEA": idea,
//   "Intramurals": ims,
//   "Senate": sen } = { ...announcements };
