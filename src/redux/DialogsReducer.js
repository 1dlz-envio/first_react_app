
const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE-NEW-MASSAGE-TEXT';
const PUBLIC_MASSAGE = 'PUBLIC-MASSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
      switch (action.type) {
            case UPDATE_NEW_MASSAGE_TEXT:
                  state.newMassageText = action.massage;
                  return state;
            case (PUBLIC_MASSAGE):
                  let newMassage = {
                        id: 4,
                        massage: state.newMassageText,
                  };
                  state.massagesData.push(newMassage);
                  state.newMassageText = '';
                  return state;
            default:
                  return state;
      }
}

export default dialogsReducer;