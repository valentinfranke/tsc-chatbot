// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from 'firebase/analytics';

import { getVertexAI, getGenerativeModel } from "firebase/vertexai-preview";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs9jBWEzF6B9KeLzx7ZCpuKm-iS_-qFA8",
  authDomain: "tsc-chat-bot.firebaseapp.com",
  projectId: "tsc-chat-bot",
  storageBucket: "tsc-chat-bot.appspot.com",
  messagingSenderId: "241922947282",
  appId: "1:241922947282:web:9fd04260ef2ccb786b550b",
  measurementId: "G-MQRNKRHGJ9"
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);
const vertexAI = getVertexAI(app);
const model = getGenerativeModel(vertexAI, { model: "gemini-1.5-flash" });

export default app;

export async function initializeAnalytics() {
  if (typeof window !== 'undefined' && await isSupported()) {
    return getAnalytics(app);
  }
  return null;
}
