// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// import admin from "firebase-admin";

// // https://firebase.google.com/docs/web/setup#available-libraries

// const initFireBaseAdmin = () =>{
//     const apps = getApps();

// if(!apps.length)
// {
//     initializeApp({
//          credential  : cert({
//              projectId:process.env.Firebase_project_id,
//              clientEmail: process.env.Firebaase_client_email,
//              privateKey: process.env.Firebase_private_key,

//          })
//         }
//     )
//     // return {
//     //     auth: getAuth(),
//     //     db: getFirestore()
//     // }





// }
// }
// const auth = admin.auth();
// const db = admin.firestore();
// export { auth, db };


// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { cert, getApps } from 'firebase-admin';
// const firebaseConfig = {
//   credential: cert({
//     projectId: process.env.Firebase_project_id,
//     clientEmail: process.env.Firebaase_client_email,
//     privateKey: process.env.Firebase_private_key,
//   }),
// };
// const initFireBaseAdmin = () => {
//   const apps = getApps();
//   if (!apps.length) {
//     initializeApp(firebaseConfig);
//   }
// };
// initFireBaseAdmin();
// const auth = getAuth();
// const db = getFirestore();
// export { auth, db };


import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin SDK
function initFirebaseAdmin() {
  const apps = getApps();

  if (!apps.length) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // Replace newlines in the private key
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      }),
    });
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
}

export const { auth, db } = initFirebaseAdmin();