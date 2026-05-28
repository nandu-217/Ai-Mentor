import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

import logoGoogle from "../../assets/images/google.jpg";
import { auth, googleProvider } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
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
      console.error("Google Login Error:", err);

      toast.error(err.message || "Google sign-in error");
    }
  };

  return (
    <div className="flex flex-col gap-2.5 mt-4">
      <button
        className="flex items-center justify-center w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BEA5] transition-all dark:bg-[#0f172a] dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 cursor-pointer"
        type="button"
        onClick={handleGoogleLogin}
      >
        <img
          src={logoGoogle}
          alt="Google"
          className="w-4 h-4 mr-2.5 object-contain"
        />

        <span className="text-sm">Sign in with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;