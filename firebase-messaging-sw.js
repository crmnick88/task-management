importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyC2gI8SbTx81sZsXPjctfEesfn7P2kKlKk",
  authDomain: "task-management-2beb8.firebaseapp.com",
  projectId: "task-management-2beb8",
  storageBucket: "task-management-2beb8.firebasestorage.app",
  messagingSenderId: "100466346989",
  appId: "1:100466346989:web:7344dded39f76143b0702c"
};


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload);

  const notificationTitle = payload?.notification?.title || 'התראה';
  const notificationOptions = {
    body: payload?.notification?.body || '',
    // היה /icon.png שלא קיים - מתוקן לאייקון שיש אצלך בפרויקט
    icon: 'icon-192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
