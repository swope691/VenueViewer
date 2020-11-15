import * as firebase from 'firebase';


const firebaseConfig = {
API_KEY='AIzaSyDTV_6alkdTBvtYACELKt13WPbQpf8NjZw',
AUTH_DOMAIN='venueviewer-93298.firebaseapp.com',
DATABASE_URL='https://venueviewer-93298.firebaseio.com',
PROJECT_ID='venueviewer-93298',
STORA_BUCKET='venueviewer-93298.appspot.com',
MESSAGE_SENDER_ID='1056626580920',
APP_ID='1056626580920:web:cb233535ffaf0fcda7834d',
MEASUREMENT_ID='G-6Z7JDQM2JJ',
ANDROID_CLIENT_ID='1056626580920-gb59mmuhnqk0l2q0ruagk42l01hibakj.apps.googleusercontent.com',
IOS_CLIENT_ID='1056626580920-0r8sp4riofupkbm4p3ac6kksthlfpjpk.apps.googleusercontent.com',
};

firebase.initializeApp(firebaseConfig);