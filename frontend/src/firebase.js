import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAMLk9AR_45kxmcXLebUTTvvhNbAPuK41Q",
  authDomain: "ai-mentor-478ca.firebaseapp.com",
  projectId: "ai-mentor-478ca",
  storageBucket: "ai-mentor-478ca.firebasestorage.app",
  messagingSenderId: "581201803628",
  appId: "1:581201803628:web:8b497f9f20fc4cd53d5b49",
  measurementId: "G-29KQQN1V8W",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const analytics = getAnalytics(app);

export default app;