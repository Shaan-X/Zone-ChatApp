import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    
        apiKey: "AIzaSyB_9xQuhH5OBc55xLwlFl7ytdPyDIZqQWQ",
        authDomain: "zone-app-912aa.firebaseapp.com",
        projectId: "zone-app-912aa",
        storageBucket: "zone-app-912aa.appspot.com",
        messagingSenderId: "711078089949",
        appId: "1:711078089949:web:dd13fcb0e3318ceeb53734"
     
}).auth();