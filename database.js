import firebase, { database } from 'firebase';
import Firebase from './config/firebase';
import 'firebase/firestore';



export const dbh = firebase.firestore();


export async function getNotes(notesRetreived){
    var notesList = [];

    var snapshot = await dbh.collection('notes')
    .orderBy('createdAt')
    .get()

    snapshot.forEach((doc) =>{
        const noteItem = doc.data();
        noteItem.id = doc.id;
        notesList.push(noteItem)
    });

    notesRetreived(notesList);
}

export function uploadNote(note, onNoteUploaded, { updating }) {
  
    if (updating) {
        console.log("Updating....");
        updateNote(food, onNoteUploaded);
    } else {
        console.log("adding...");
        addProject(note, onNoteUploaded);
      }
    }

export function updateNote(note, updateComplete) {
    note.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
    console.log("Updating note in firebase");
  
    firebase.firestore()
      .collection('notes')
      .doc(note.id).set(note)
      .then(() => updateComplete(note))
      .catch((error) => console.log(error));
  }
  

export function deleteNote(note, deleteComplete) {
    console.log(note);
  
    firebase.firestore()
      .collection('notes')
      .doc(note.id).delete()
      .then(() => deleteComplete())
      .catch((error) => console.log(error));
  }


export function addProject(note, addComplete){
    note.createdAt = firebase.firestore.FieldValue.serverTimestamp();
    dbh.collection('notes')
    .add(note)
    .then((snapshot) => {
      note.id = snapshot.id;
      snapshot.set(note);
    }).then(() => addComplete(note))
    .catch((error) => console.log(error));
}


// snapshot.get())
//     .then((noteData) => addComplete(noteData.data()))
//     .catch((error)=> console.log(error));


// export async function getNotes(notesRetreived){
//     var snapshot = await dbh.collection(notes)
// }

