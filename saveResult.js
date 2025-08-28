// saveResult.js
import { db, auth } from './firebase.js';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

async function saveQuizResult(score, totalQuestions) {
  const user = auth.currentUser;
  if (!user) return alert("User not logged in!");

  await addDoc(collection(db, "quizResults"), {
    userId: user.uid,
    score: score,
    total: totalQuestions,
    date: new Date()
  });

  alert("Result saved to database!");
}
