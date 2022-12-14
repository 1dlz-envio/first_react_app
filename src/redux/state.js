
let store = {

      _state: {

            profilePage: {
                  postsData: [{ id: 1, postMassages: 'Hello world!', likeCount: 24 },
                  { id: 2, postMassages: 'How yo doing?', likeCount: 4 },
                  { id: 3, postMassages: 'I`m fine. Tnx', likeCount: 6 },
                  ],
                  newPostText: 'start writing...',

            },
            dialogsPage: {
                  dialogsData: [{ id: 1, name: 'Igor' },
                  { id: 2, name: 'Klark' },
                  { id: 3, name: 'Vlad' },
                  { id: 4, name: 'Fred' },
                  { id: 5, name: 'Brok' },
                  ],
                  massagesData: [{ id: 1, massage: 'Hello world!' },
                  { id: 2, massage: 'How are you?' },
                  { id: 3, massage: 'I`m OK' },
                  ],
                  newMassageText: 'Start writing...',
            },
      },

      _callSubscriber() {
            console.log('State was changed');
      },


      //function which return _state 
      getState() {
            return this._state;
      },

      subscribe(observer) {
            this._callSubscriber = observer; // observer
      },

      dispatch(action) {

            if (action.type === 'PUBLIC-POST') {
                  let newPost = {
                        id: 5,
                        postMassages: this._state.profilePage.newPostText,
                        likeCount: 0,
                  };
                  this._state.profilePage.postsData.push(newPost);
                  this._state.profilePage.newPostText = '';
                  this._callSubscriber(this._state);
            } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
                  this._state.profilePage.newPostText = action.newText;
                  this._callSubscriber(this._state);
            } else if (action.type === 'UPDATE-NEW-MASSAGE-TEXT') {
                  this._state.dialogsPage.newMassageText = action.massage;
                  this._callSubscriber(this._state);
            } else if (action.type === 'PUBLIC-MASSAGE') {
                  let newMassage = {
                        id: 4,
                        massage: this._state.dialogsPage.newMassageText,
                  };
                  this._state.dialogsPage.massagesData.push(newMassage);
                  this._state.dialogsPage.newMassageText = '';
                  this._callSubscriber(this._state);
            }
      },
}

export const addPostActionCreator = () => ({ type: 'PUBLIC-POST', });

export const updateNewPostTextActionCreator = (text) => ({
      type: 'UPDATE-NEW-POST-TEXT',
      newText: text,
});

export default store;

window.store = store;