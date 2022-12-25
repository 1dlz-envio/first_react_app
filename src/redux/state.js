import { rerenderEntireTree } from "../render";

let state = {

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
}



//function of public  new post on the profile wall
export let publicPost = () => {
      let newPost = {
            id: 5,
            postMassage: state.profilePage.newPostText,
            likeCount: 0,
      };
      state.profilePage.postsData.push(newPost);
      state.profilePage.newPostText = '';
      rerenderEntireTree(state);
};

//export typing sumpols in textarea into state.js 
export let updateNewPostText = (newText) => {
      state.profilePage.newPostText = newText;
      rerenderEntireTree(state);
}

export default state;