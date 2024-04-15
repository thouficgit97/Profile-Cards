import React from "react";
import PropTypes from "prop-types";
const UserData=[
  {
  name:"Thoufic",
  city:"Madurai",
  description:"Frontend Developer",
  skills:["C++","HTML","CSS","JavaScript","React","SQL"],
  online:true,
  profile:"images/Thoufic.JPG",
  },
  {
    name:"Thoufic",
    city:"Madurai",
    description:"Backend Developer",
    skills:["C++","React","SQL","php","SpringBoot","nodeJS","ExpressJS"],
    online:false,
    profile:"images/Thoufic.JPG",
  },
  {
      name:"Thoufic",
      city:"Madurai",
      description:"FullStack Developer",
      skills:["C++","React","SQL","php","Java","nodeJS","ExpressJS","MongoDB"],
      online:false,
      profile:"images/Thoufic.JPG",
  },
];

function User(props){
    return <div className="cardContainer">
        <span className={props.online? "pro online" : "pro offline"}>{props.online?"Online":"Offline"}</span>
        <img src={props.profile} className="img" alt="user" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                   {props.skills.map((skill,index) => (
                    <li key={index}>{skill}</li>
                   ))}
                </ul>
            </div>
        </div>
    
}

export const Usercard = () => {
  return (
    <>
    {
      UserData.map((user,index) => (
        <User key={index}
         name={user.name}
         city={user.city}
         description={user.description}
         online={user.online}
         profile={user.profile}
         skills={user.skills}
         />
      ))
    }
    </>
  )
}

/* <User name="Thoufic" city="Madurai" desc="Frontend Developer" skills={["C++","HTML","CSS","JavaScript","React"]} online={true}
    profile="images/Thoufic.JPG"/> */

User.PropTypes = {
  name : PropTypes.string.isRequired,
  city : PropTypes.string.isRequired,
  description : PropTypes.string.isRequired,
  skills : PropTypes.arrayOf(PropTypes.string).isRequired,
  profile : PropTypes.string.isRequired,
  online : PropTypes.bool.isRequired,
};