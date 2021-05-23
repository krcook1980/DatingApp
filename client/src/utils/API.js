import axios from "axios";


export default {

  createUser: function (profileData) {
    console.log("create api", profileData)
    return axios.post("/api/createUser", profileData)
  },
  getContactList: function (userIdData) {
    console.log("get api utils", userIdData)
    return axios.get("/api/getUser/" + userIdData)
  },
  saveContact: function (saveContactData) {
    console.log("in api", saveContactData)
    return axios.put("/api/saveContact", saveContactData)
  },
  findMatches: function (userId, saveMatches) {
    console.log("data ", saveMatches)
    return axios.get("/api/findMatches/" + userId, saveMatches)
  }




};


//req.body.________ (key)
