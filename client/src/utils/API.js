import axios from "axios";


export default {

  saveContact: function (saveContactData) {
    console.log("in api", saveContactData)
    return axios.put("/api/saveContact", saveContactData)
  },
  haveContact: function (saveContactData){
    console.log("haveContact api ", saveContactData)
    return axios.get("/api/haveContact", saveContactData)
  },
  getContactList: function(userIdData) {
    console.log("get api utils", userIdData)
    return axios.get("/api/getUser/" + userIdData)
  },
  createUser: function(profileData) {
    console.log("create api", profileData)
    return axios.post("/api/createUser", profileData)
  }
};
