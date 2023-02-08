import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/ProfileReducer';
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
      return {
            posts: state.profilePage.postsData,
            newPostText: state.profilePage.newPostText,
      }
};

let mapDispatchToProps = (dispatch) => {
      return {
            updateNewPostText: (text) => {
                  dispatch(updateNewPostTextActionCreator(text))
            },
            addPost: () => {
                  dispatch(addPostActionCreator())
            },
      }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;