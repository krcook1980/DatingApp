import axios from "axios";

export default {

  createUser: function(profileData) {
    
    return axios.post("/api/createUser", profileData)
  },
  saveContact: function (saveContactData) {
    
    return axios.put("/api/saveContact", saveContactData)
  },

  findMatches: function(userData){
   
    return axios.post("/api/findMatches", userData)
  },
  updateUser: function(profile){
    return axios.put("api/updateUser", profile)

  },
  getUser: function(userId){
    
    return axios.get("/api/getUser/" + userId)
  },
  login: function(userData){
   
    return axios.post("/login", userData)
  },
  blockUser: function(saveBlock){
    return axios.put("/api/blockUser", saveBlock)
  }
};
