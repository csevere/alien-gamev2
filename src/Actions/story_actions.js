// import default from "react-router-dom/BrowserRouter";

// export const selectStory = (storyId) =>{
//     return{
//         type: 'select_story',
//         payload: storyId
//     };
// };

export const nextCount = () =>{
    return{
        type: 'next'
    };
}

export const backCount = () =>{
    return{
        type: 'back'
    };
}