// ------------------------------------------------------------------
// Firebase web configuration.
// This file only holds the PUBLIC web config (safe to share).
// ------------------------------------------------------------------
//
// SETUP:
// 1. Go to https://console.firebase.google.com and create a project
//    (or open your existing one).
// 2. Add a Web App: Project settings -> General -> "Add app" -> Web.
// 3. Enable sign-in methods: Build -> Authentication -> Sign-in method ->
//    enable "Google" and "Email/Password".
// 4. Add this site's domain under Authentication -> Settings ->
//    Authorized domains (localhost is already allowed).
// 5. Paste the app config values below and save.
//
// Backend setup (for League of Legends sign-in / linking) is in server/.env.

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyASwLGYmmKOtfQJ-ozostyPOheep5TMGZM",
  authDomain: "league-of-noobs.firebaseapp.com",
  projectId: "league-of-noobs",
  appId: "1:440221395994:web:ebe947f31d621929fab5a3",
};

const FIREBASE_CONFIGURED = !FIREBASE_CONFIG.apiKey.startsWith("PASTE");
