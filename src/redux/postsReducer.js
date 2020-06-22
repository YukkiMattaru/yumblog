const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_POST_TITLE = 'UPDATE_NEW_POST_TITLE';
const UPDATE_NEW_POST_PICTURE_URL = 'UPDATE_NEW_POST_PICTURE_URL';

let initialState = {
    posts: [
        {id: 0, title: "Some title", text: "Some text", shortText: "Some short text",
            date: formatDate(new Date()), picture: "https://sun9-72.userapi.com/c856120/v856120861/1060c0/NQ0fmnVzvrI.jpg"},
    ],
    newTitleText: '',
    newPictureUrl: '',
    newPostText: ''
}

let formatDate = (data) => {
    let day = data.getDate();
    if (day < 10) day = '0' + day;

    let month = data.getMonth() + 1;
    if (month < 10) month = '0' + month;

    let year = data.getFullYear() % 100;
    if (year < 10) year = '0' + year;

    return day + '.' + month + '.' + year;
}

let postsReducer = (state = initialState, action) =>

    let stateCopy;

    switch (action.type) {
        case ADD_POST:
            stateCoyp
            if((state.newPostText || state.newPictureUrl) && state.newTitleText) {
                let
            }
        case UPDATE_NEW_POST_TEXT:
        case UPDATE_NEW_POST_TITLE:
        case UPDATE_NEW_POST_PICTURE_URL:
    }
}

export const addPostAC = () => {

}


export const updateNewPostTextAC = () => {

}

export const updateNewPostTitleAC = () => {

}
export const updateNewPostPictureUrlAC = () => {

}

export default postsReducer;