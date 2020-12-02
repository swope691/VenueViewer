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


export function addProject(note, addComplete){
    note.createdAt = firebase.firestore.FieldValue.serverTimestamp();
    
    dbh.collection('notes').add({
        venueName: note.venueName,
        address: "",
        management: {
            manager1: {
                name: "",
                email: "",
            },
            manager2: {
                name: "",
                email: "",
            },
            manager3: {
                name: "",
                email: "",
            },
            manager4: {
                name: "",
                email: "",
            },
            manager5: {
                name: "",
                email: "",
            } 
        },
        venueInfo: ""
        

    }).then((snapshot) => {
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

