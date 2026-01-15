import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* 🔥 SÄTT IN DIN FIREBASE CONFIG HÄR */
const firebaseConfig = {
  apiKey: "AIzaSyBrmjRmJLjrFE5uS2lKfbLKlKlTMp1AQjk",
  authDomain: "logingwowg.firebaseapp.com",
  projectId: "logingwowg",
  storageBucket: "logingwowg.firebasestorage.app",
  messagingSenderId: "681046148898",
  appId: "1:681046148898:web:87cdc4202dd644f861c77b"
};

/* -------------------------------- */

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("save").onclick = async () => {
  const username = document.getElementById("username").value;
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;

  if(!username || !name || !description){
    document.getElementById("msg").innerText = "Fyll i alla fält";
    return;
  }

  await addDoc(collection(db,"users"),{
    username,
    name,
    description,
    created: Date.now()
  });

  window.location = "dashboard.html";
};
