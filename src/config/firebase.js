import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
} from "firebase/firestore/lite";
import { v4 } from "uuid";
const firebaseConfig = {
    
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECTID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDERID,
  appId: import.meta.env.VITE_FB_APPID,
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore();

async function updateField(
  collectionName,
  documentId,
  winnervalue,
  loserValue
) {
  const documentRef = doc(firestore, collectionName, documentId);
  try {
    await updateDoc(documentRef, {
      Loser: loserValue,
      Winner: winnervalue,
      active: false,
    });
  } catch (error) {
    console.error(`Error updating field: ${error}`);
  }
}

async function updateUserField(documentId, fieldName, newValue) {
  const documentRef = doc(firestore, "users", documentId);
  try {
    await updateDoc(documentRef, {
      [fieldName]: newValue,
    });
  } catch (error) {
    console.error(`Error updating field: ${error}`);
  }
}

async function createEvent(collectionName, document, activeUser, opponent) {
  const today = new Date();
  const formatedDate = today.toLocaleDateString();
  const tournamentDoc = doc(firestore, `${collectionName}/${document}`);
  const docData = {
    admin: activeUser,
    player: opponent,
    active: true,
    Winner: null,
    Loser: null,
    date: formatedDate,
  };
  try {
    await setDoc(tournamentDoc, docData);
  } catch (error) {
    console.log(`I got an error ${error}`);
  }
}

async function addNewUser(firstname, lastname, email) {
  const ordersCollection = collection(firestore, "users");
  const newDoc = await addDoc(ordersCollection, {
    id: v4(),
    Win: 0,
    Losses: 0,
    firstname: firstname,
    lastname: lastname,
    email: email,
    points: 1000,
    image: null,
  });
  
}

async function readAllDocumentsInCollection(collectionName) {
  const collectionRef = collection(firestore, collectionName);
  const querySnapshot = await getDocs(collectionRef);
  let tournamentArray = [];
  querySnapshot.forEach((doc) => {
    if (doc.exists()) {
      const docData = doc.data();
      tournamentArray.push(docData);
    } else {
      console.log("No such document!");
    }
  });
  return tournamentArray;
}
async function queryForDocs(name, points){
    const findUser = query(collection(firestore, 'users'),
    where('firstname','==', name),
    );
    const querySnapshot = await getDocs(findUser);
    
    if (!querySnapshot.empty) {
        const firstDocument = querySnapshot.docs[0];
        if(points){
          
            updateUserField(firstDocument.id, 'points', firstDocument.data().points + points);
            updateUserField(firstDocument.id, 'Win', firstDocument.data().Win + 1);
        }
        return firstDocument.data();
      } else {
        return null; 
      }
}
async function addLoss(name, points){
    const findUser = query(collection(firestore, 'users'),
    where('firstname','==', name),
    );
    const querySnapshot = await getDocs(findUser);
    if (!querySnapshot.empty) {
        const firstDocument = querySnapshot.docs[0];
        if(points){
            updateUserField(firstDocument.id, 'points', firstDocument.data().points - points);
            updateUserField(firstDocument.id, 'Losses', firstDocument.data().Losses + 1);
        }
      } 
}

async function gameQuery(name) {
  const winnerQuery = query(
    collection(firestore, "games"),
    where("admin", "==", name)
  );

  const adminQuery = query(
    collection(firestore, "games"),
    where("player", "==", name)
  );

  const winnerQuerySnapshot = await getDocs(winnerQuery);
  const adminQuerySnapshot = await getDocs(adminQuery);

  const winnerData = winnerQuerySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const adminData = adminQuerySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  const combinedData = [...winnerData, ...adminData];
  return combinedData;
}

async function emailQuery(email) {
  const customerOrder = query(
    collection(firestore, "users"),
    where("email", "==", email)
  );

  const querySnapshot = await getDocs(customerOrder);
  if (!querySnapshot.empty) {
    const firstDocument = querySnapshot.docs[0];
    return firstDocument.data();
  }
}

async function emailQueryWithDocId(email) {
  const customerOrder = query(
    collection(firestore, "users"),
    where("email", "==", email)
  );

  const querySnapshot = await getDocs(customerOrder);
  if (!querySnapshot.empty) {
    const firstDocument = querySnapshot.docs[0];
    const dataWithId = { docId: firstDocument.id, ...firstDocument.data() };
    return dataWithId;
  }
}

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
export {
  auth,
  provider,
  addNewUser,
  createEvent,
  readAllDocumentsInCollection,
  updateField,
  queryForDocs,
  addLoss,
  emailQuery,
  gameQuery,
  updateUserField,
  emailQueryWithDocId,
};
