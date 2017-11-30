export const selectStory = (storyId) =>{
    return{
        type: 'select_story',
        payload: storyId
    };
};