import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

import logoGoogle from "../../assets/images/google.jpg";
import { auth, googleProvider } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { useState } from "react";

const getGoogleAuthErrorMessage = (errorCode) => {
  switch (errorCode) {
    case "auth/popup-blocked":
      return "Please allow popups for Google Sign-In and try again.";
    case "auth/popup-closed-by-user":
      return "Sign-in was cancelled. Please try again.";
    case "auth/network-request-failed":
      return "Network error. Please check your internet connection.";
    case "auth/too-many-requests":
      return "Too many attempts. Please wait and try again.";
    case "auth/cancelled-popup-request":
      return "Another sign-in is already in progress.";
    case "auth/unauthorized-domain":
      return "This domain is not authorized for Google Sign-In.";
    default:
      return "Google sign-in failed. Please try again.";
  }
};

const SocialLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    if (loading) return;
    setLoading(true);
    try {
      // Google popup login
      const result = await signInWithPopup(auth, googleProvider);

      const user = result.user;

      // Firebase token
      const idToken = await user.getIdToken();

      // Send token to backend
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/google-login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ idToken }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Google login failed");
      }

      toast.success("Logged in successfully!");

      // Save user using AuthContext
      login({
        ...data,
        isGoogleUser: true,
      });

      // Redirect user
      if (!data.isProfileComplete) {
        navigate("/complete-profile");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
<<<<<<< HEAD
      console.error("Google Login Error:", err);

      toast.error(err.message || "Google sign-in error");
=======
  console.error("Google Sign-In Error:", err);
  const message = err.code
    ? getGoogleAuthErrorMessage(err.code)
    : err.message || "Google sign-in failed. Please try again.";
     toast.error(message);
}
    finally {
     setLoading(false);
>>>>>>> 0fedac340207309a6ba55f3f0229c8e3998dbbf3
    }
  };

  return (
    <div className="flex flex-col gap-2.5 mt-4">
      <button
        disabled={loading}
        className={`flex items-center justify-center w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BEA5] transition-all dark:bg-[#0f172a] dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 cursor-pointer ${
        loading
      ? "opacity-60 cursor-not-allowed"
      : "hover:bg-gray-50 cursor-pointer"
      }
    `}
        type="button"
        onClick={handleGoogleLogin}
      >
        <img
          src={logoGoogle}
          alt="Google"
          className="w-4 h-4 mr-2.5 object-contain"
        />
<<<<<<< HEAD

        <span className="text-sm">Sign in with Google</span>
=======
        <span className="text-sm"> {loading ? "Signing in..." : "Sign in with Google"}</span>
>>>>>>> 0fedac340207309a6ba55f3f0229c8e3998dbbf3
      </button>
    </div>
  );
};

export default SocialLogin;