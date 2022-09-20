import {  RETRIEVE_TUTORIALS,CREATE_TUTORIAL, UPDATE_TUTORIAL, DELETE_TUTORIAL, SEARCH_FOR_TITLE } from "./types"
import TutorialService from "../services/TutorialService"


///create tutorial
export const createTutorial = (title,description,published) => async (dispatch) => {
  try {
    const res = await TutorialService.create({ title,description, published});

    dispatch({
      type: CREATE_TUTORIAL,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
  export const retrieveTutorials = () => async (dispatch) => {
   
    try {
      const res = await TutorialService.geAll();
  
      dispatch({
        type: RETRIEVE_TUTORIALS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // update 

  export const updateTutorial = (id,data) => async (dispatch)=>{
    try {
     const res = await TutorialService.updateTutorial(id,data);
     dispatch({
      type:UPDATE_TUTORIAL,
      payload:res.data
     })
     return Promise.resolve(res.data);

    } catch (error) {
      return Promise.reject(error);
    }
  }

  export const deleteTutorial = (id) => async(dispatch) => {

    try {
    const res =  await TutorialService.deleteTutorial(id);
      dispatch({
        type: DELETE_TUTORIAL,
        payload: id
      });
    } catch (error) {
      console.log(error)
    }
  }

/// find for title

export const findBytitle = (title)=> async(dispatch) => {
  try {
    const res = await TutorialService.findByTitle(title);
  console.log(res.data)
    dispatch({
      type: SEARCH_FOR_TITLE,
      payload: res.data
    })
  } catch (error) {
   console.error(error) 
  }
}

  