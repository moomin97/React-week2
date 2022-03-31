// widgets.js
import { db } from "../../firebase";
import { collection, doc, getDoc, getDocs, QueryConstraint, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
// Actions
const CREATE = 'Word/CREATE';
const LOAD = "Word/LOAD";
const initialState = {
    list : [],
};

// Action Creators
export function loadWord(my_word) {
    return {type: LOAD, my_word};
}
export function createWord(Word) {
    return { type: CREATE, Word};
}

// middlewares
export const loadWordFB = () => {
    return async function (dispatch) {
        const word_data = await getDocs(collection(db, "word"));
        // console.log(word_data);

        let word_my = [];
        word_data.forEach((a) => {
            console.log(a.data());
            word_my.push({...a.data()});
        });
     console.log(word_my);

     dispatch(loadWord(word_my));
    }
};

export const addWordFB = (Word) => {
        return async function (dispatch) {
            const docRef = await addDoc(collection(db, "word"), Word);
            const Word_dd = {id: docRef.id, ...Word};
            console.log(Word_dd);

            dispatch(createWord(Word_dd));
        }
    }



// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "Word/LOAD": {
            console.log(action.word_my);
            return {list: action.my_word};
            
        }
        case "Word/CREATE": {
            const new_word_list = [...state.list, action.Word];
            return {list : new_word_list};
        }
    // do reducer stuff
    default: return state;
    }
    }