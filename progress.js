// progress.js
import { db, auth } from './firebase.js';
import { doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

async function updateProgress(completedModules) {
  const user = auth.currentUser;
  await setDoc(doc(db, "progress", user.uid), {
    completed: completedModules,
    updated: new Date()
  });
}
