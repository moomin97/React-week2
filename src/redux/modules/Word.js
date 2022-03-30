// widgets.js

// Actions
const CREATE = 'Word/CREATE';

const initialState = {
    list : ["강민이"],
};

// Action Creators
export function createWord(Word) {
    return { type: CREATE, Word}
}




// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "Word/CREATE": {
            const new_word_list = [...state.list, action.Word];
            return {list : new_word_list};
        }
    // do reducer stuff
    default: return state;
    }
    }