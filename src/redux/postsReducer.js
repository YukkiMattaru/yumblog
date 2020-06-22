const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_POST_TITLE = 'UPDATE_NEW_POST_TITLE';
const UPDATE_NEW_POST_PICTURE_URL = 'UPDATE_NEW_POST_PICTURE_URL';

let initialState = {
    posts: [
        {id: 0, title: "Some title", text: "Some text", shortText: "Some short text",
            date: "20.02.2020 20:20", picture: "https://sun9-72.userapi.com/c856120/v856120861/1060c0/NQ0fmnVzvrI.jpg"},
        {id: 1, title: "Some title", text: "Some text", shortText: "Some short text",
            date: "20.02.2020 20:20", picture: ""},
        {id: 2, title: "Some title", text: "Some text", shortText: "Some short text",
            date: "20.02.2020 20:20", picture: "https://sun9-72.userapi.com/c856120/v856120861/1060c0/NQ0fmnVzvrI.jpg"},
        {id: 3, title: "Some title", text: "Some text", shortText: "Some short text",
            date: "20.02.2020 20:20", picture: ""},
        {id: 3, title: "Some title", text: "Some text", shortText: "Some short text",
            date: "20.02.2020 20:20", picture: ""},
        {id: 3, title: "Some title", text: "Some text", shortText: "Some short text",
            date: "20.02.2020 20:20", picture: ""},
        {id: 3, title: "Some title", text: "Some text", shortText: "Some short text",
            date: "20.02.2020 20:20", picture: ""},
        {id: 3, title: "Some title", text: "Some text", shortText: "Some short text",
            date: "20.02.2020 20:20", picture: ""},
        {id: 3, title: "Some title", text: "Some text", shortText: "Some short text",
            date: "20.02.2020 20:20", picture: ""},
        {id: 3, title: "Some title", text: "Some text", shortText: "Some short text",
            date: "20.02.2020 20:20", picture: ""},
        {id: 3, title: "Some title", text: "Some text", shortText: "Some short text",
            date: "20.02.2020 20:20", picture: ""},
        {id: 3, title: "Some title", text: "Some text", shortText: "Some short text",
            date: "20.02.2020 20:20", picture: ""},
        {id: 3, title: "Some title", text: "Some text", shortText: "Some short text",
            date: "20.02.2020 20:20", picture: ""},
    ],
    newTitleText: '',
    newPictureUrl: '',
    newPostText: ''
};

let formatDate = (data) => {
    let day = data.getDate();
    if (day < 10) day = '0' + day;

    let month = data.getMonth() + 1;
    if (month < 10) month = '0' + month;

    let year = data.getFullYear();

    let hour = data.getHours();
    if (hour < 10) hour = '0' + hour;

    let minutes = data.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;

    let seconds = data.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;

    return `${day}.${month}.${year} ${hour}:${minutes}:${seconds}`;
}
let createShortText = (text) => {
    let short = '';
    text = text.trim();
    while (short.length <= 150 || short[short.length-1] !== ' ') {
        if (short.length === text.length) return short;
        if (short.length > 165) break;
        short += text[short.length];
    }
    return short.trim() + "..."
}

const postsReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case ADD_POST: {
            stateCopy = {
                ...state,
                posts: [...state.posts]
            };
            if ((state.newPostText || state.newPictureUrl) && state.newTitleText) {
                let newPost = {
                    id: state.posts.length,
                    title: state.newTitleText,
                    text: state.newPostText,
                    shortText: createShortText(state.newPostText),
                    date: formatDate(new Date()),
                    picture: state.newPictureUrl
                }
                stateCopy.posts.push(newPost);
                stateCopy.newPostText = "";
                stateCopy.newPictureUrl = "";
                stateCopy.newTitleText = "";
            }
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        case UPDATE_NEW_POST_TITLE: {
            return {...state, newTitleText: action.newTitle}
        }
        case UPDATE_NEW_POST_PICTURE_URL: {
            return {...state, newPictureUrl: action.newUrl}
        }
        default: return {...state}
    }
}

export const addPostAC = () => ({type: ADD_POST});

export const updateNewPostTextAC = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text};
}

export const updateNewPostTitleAC = (title) => {
    return { type: UPDATE_NEW_POST_TITLE, newTitle: title};
}
export const updateNewPostPictureUrlAC = (url) => {
    return { type: UPDATE_NEW_POST_PICTURE_URL, newUrl: url};
}

export default postsReducer;