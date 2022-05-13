import { collection, doc, getDoc, getDocs, orderBy, query, setDoc } from "firebase/firestore";
import { firestore } from "../components/firebase.config";

// saving new item
export const saveItem = async (data) => {
    await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, { merge: true });    
};

// get all fooditems
export const getAllFoodItems = async () => {
    const items = await getDocs(
        query(collection(firestore, "foodItems"), orderBy("id", "desc"))
    );
    return items.docs.map((doc) => doc.data());
}

