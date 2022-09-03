import { collection, getDocs } from 'firebase/firestore/lite';
import { firebaseDB } from '../../firebase/config';

export const loadNotes = async (uid = '') => {
  if (!uid) throw new Error("The user id is doesn's exist");

  const collectionRef = collection(firebaseDB, `${uid}/journal/notes`);
  const docs = await getDocs(collectionRef);

  //   saving data in new array
  const notes = [];

  docs.forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() });
  });
  return notes;
};
