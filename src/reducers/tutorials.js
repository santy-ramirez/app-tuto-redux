import {
  RETRIEVE_TUTORIALS,
  CREATE_TUTORIAL,
  UPDATE_TUTORIAL,
  DELETE_TUTORIAL,
  SEARCH_FOR_TITLE
  } from "../actions/types";
  
  const initialState = [];
  
  function tutorialReducer(tutorials = initialState, action) {
    const { type, payload } = action;
    console.log(payload,type)
    switch (type) {
      case CREATE_TUTORIAL:
        return [...tutorials,payload];
      case RETRIEVE_TUTORIALS:
        return payload;
      case SEARCH_FOR_TITLE:
        return payload  
      case UPDATE_TUTORIAL:
        return tutorials.map((tutorial) => {
          if (tutorial.id === payload.id) {
            return {
              ...tutorial,
              ...payload,
            };
          } else {
            return tutorial;
          }
        });
      case DELETE_TUTORIAL:
        return tutorials.filter((t) => t.id !== payload)      
      default:
        return tutorials;
    }
  };

  export default tutorialReducer;