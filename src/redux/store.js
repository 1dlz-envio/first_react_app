import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";

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

            this._state.profilePage = profileReducer(this._state.profilePage, action);
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

            this._callSubscriber(this._state);

      },
}



export default store;

window.store = store;