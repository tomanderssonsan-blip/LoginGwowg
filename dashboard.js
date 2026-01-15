import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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

const usersDiv = document.getElementById("users");

const snapshot = await getDocs(collection(db,"users"));
snapshot.forEach(doc=>{
  const u = doc.data();
  usersDiv.innerHTML += `
    <div class="user">
      <b>${u.username}</b><br>
      ${u.name}<br>
      ${u.description}
    </div>
  `;
});
