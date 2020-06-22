import { connect } from 'react-redux';
import { addPostAC, updateNewPostTextAC, updateNewPostPictureUrlAC, updateNewPostTitleAC } from "../../redux/postsReducer";
import Posts from "./Posts";

let mapStateToProps = (state) => {
    return {
        posts: state.postsState.posts,
        newPostText: state.postsState.newPostText,
        newTitleText: state.postsState.newTitleText,
        newPictureUrl: state.postsState.newPictureUrl
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextAC(text))
        },
        updateNewPostTitle: (title) => {
            dispatch(updateNewPostTitleAC(title))
        },
        updateNewPostPictureUrl: (url) => {
            dispatch(updateNewPostPictureUrlAC(url))
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;