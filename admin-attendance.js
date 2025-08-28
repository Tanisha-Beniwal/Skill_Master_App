// admin-attendance.js
import { db, auth } from './firebase.js';
import {
  collection,
  getDocs
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
import {
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

const ADMIN_EMAILS = ['admin@example.com']; // Replace with real admin emails

onAuthStateChanged(auth, async (user) => {
  if (!user || !ADMIN_EMAILS.includes(user.email)) {
    alert('Access denied. Admins only.');
    window.location.href = 'index.html';
    return;
  }

  const tableBody = document.querySelector('#attendance-table tbody');
  const snapshot = await getDocs(collection(db, 'attendance'));

  snapshot.forEach(doc => {
    const data = doc.data();
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${data.userId}</td>
      <td>${data.date}</td>
      <td>${data.status}</td>
    `;

    tableBody.appendChild(row);
  });
});
