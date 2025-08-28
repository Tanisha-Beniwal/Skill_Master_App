// attendance.js
import { db, auth } from './firebase.js';
import {
  doc,
  setDoc,
  getDocs,
  collection,
  query,
  where
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
import {
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

let currentUser;

onAuthStateChanged(auth, async (user) => {
  if (user) {
    currentUser = user;
    loadAttendanceHistory();
  } else {
    alert('Please log in to mark attendance.');
    window.location.href = 'index.html';
  }
});

window.markAttendance = async function () {
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];
  const docId = `${currentUser.uid}_${dateStr}`;

  await setDoc(doc(db, 'attendance', docId), {
    userId: currentUser.uid,
    date: dateStr,
    status: 'present'
  });

  alert('Attendance marked successfully!');
  loadAttendanceHistory();
};

async function loadAttendanceHistory() {
  const q = query(collection(db, 'attendance'), where('userId', '==', currentUser.uid));
  const snapshot = await getDocs(q);

  const tbody = document.querySelector('#history-table tbody');
  tbody.innerHTML = '';

  snapshot.forEach(doc => {
    const data = doc.data();
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${data.date}</td>
      <td>${data.status}</td>
    `;
    tbody.appendChild(row);
  });
}
