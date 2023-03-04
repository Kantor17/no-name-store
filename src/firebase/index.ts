import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARgIxAJIttEouP5s-ALczNhe1UN2Qz2a8",
  authDomain: "noname-store-3a942.firebaseapp.com",
  projectId: "noname-store-3a942",
  storageBucket: "noname-store-3a942.appspot.com",
  messagingSenderId: "820778547732",
  appId: "1:820778547732:web:526f2bc9a3d8b3c6fc0501",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
