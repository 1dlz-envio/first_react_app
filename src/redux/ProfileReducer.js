
const PUBLIC_POST = 'PUBLIC-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
      postsData: [{ id: 1, postMassages: 'Hello world!', likeCount: 24 },
      { id: 2, postMassages: 'How yo doing?', likeCount: 4 },
      { id: 3, postMassages: 'I`m fine. Tnx', likeCount: 6 },
      ],
      newPostText: 'start writing...',
}

export const profileReducer = (state = initialState, action) => {
      switch (action.type) {
            case PUBLIC_POST:
                  let newPost = {
                        id: 5,
                        postMassages: state.newPostText,
                        likeCount: 0,
                  };
                  state.postsData.push(newPost);
                  state.newPostText = '';
                  return state;
            case UPDATE_NEW_POST_TEXT:
                  state.newPostText = action.newText;
                  return state;
            default:
                  return state;
      }
}

export const addPostActionCreator = () => ({ type: PUBLIC_POST, });

export const updateNewPostTextActionCreator = (text) => ({
      type: UPDATE_NEW_POST_TEXT,
      newText: text,
});


export default profileReducer;