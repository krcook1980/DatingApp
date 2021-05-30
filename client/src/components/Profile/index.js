import React, { useState } from "react"
import "./style.css"
function Profile() {
    const [username, setUsername] = useState("Your Username");
    const [about, setAbout] = useState("Tell us about yourself");

    return (
        <div className="Profile">
            <div className="upper-container">
                <div className="image-container">
                    <img src=" " alt=" " height="100px" width="100px" />
                </div>
            </div>
            <div className="lower-container">
                <h3> {username} </h3>

                <p> {about} </p>
            </div>
        </div>
    )
}
export default Profile