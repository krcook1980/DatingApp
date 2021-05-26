import axios from "axios";

export default {

  createUser: function(profileData) {
    console.log("createUser api", profileData)
    return axios.post("/api/createUser", profileData)
  },
  saveContact: function (saveContactData) {
    console.log("in api saveContact", saveContactData)
    return axios.put("/api/saveContact", saveContactData)
  },

  findMatches: function(userData){
    console.log("in utils api findMatches ", userData)
    return axios.post("/api/findMatches", userData)
  },
  updateUser: function(profile){
    return axios.put("api/updateUser", profile)

  },
  getUser: function(userId){
    console.log("in utils api findMatches ", userId)
    return axios.get("/api/getUser/" + userId)
  }


};
