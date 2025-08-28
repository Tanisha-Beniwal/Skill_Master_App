// quiz.js
import { db } from './firebase.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const quizForm = document.getElementById('quizForm');

if (quizForm) {
  quizForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const score = calculateScore(); // Your own logic

    try {
      await addDoc(collection(db, "quizScores"), {
        username: username,
        score: score,
        timestamp: new Date()
      });
      alert('Score submitted!');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  });
}
