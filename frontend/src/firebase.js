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

const missingEnvVars = Object.entries(firebaseConfig)
  .filter(([_, value]) => !value)
  .map(([key]) => key);

if (missingEnvVars.length > 0) {
  throw new Error(
    `Missing firebase environment variables:${missingEnvVars.join(", ")}. Please check your .env file`,
  );
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
<<<<<<< HEAD

export const analytics = getAnalytics(app);

export default app;
=======
googleProvider.addScope("email");
googleProvider.addScope("profile");
export { signInWithPopup };
>>>>>>> 0fedac340207309a6ba55f3f0229c8e3998dbbf3
