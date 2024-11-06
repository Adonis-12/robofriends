import {  CHANGE_SEARCHFIELD ,
          ADD_ROBOT,
          ADD_FIRSTNAME,
          ADD_LASTNAME,
          ADD_EMAIL
          } from "./constants";

export const changeSearchField = (text) => ({
  type:CHANGE_SEARCHFIELD,
  payload: text  
})

export const addRobot = (robot) => ({
  type: ADD_ROBOT,
  payload: robot
})

export const addFirstName = (firstName) => ({
  type: ADD_FIRSTNAME,
  payload : firstName
})

export const addLastName = (lastName) => ({
  type: ADD_LASTNAME,
  payload : lastName
})

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload : email
})