import React from 'react'
import "./UPC.css"
import SkillTag, {type SkillTagProps } from "./SkillTag.tsx";

interface UserProfileCardProps {
    userId : string | number
    email : string 
    name : string
    avatarUrl? : string
    isOnline : boolean
    skills : SkillTagProps[]
    onViewDetails : (userId: string | number) => void
}



const UserProfileCard : React.FC<UserProfileCardProps> = ({userId,email , name , avatarUrl , isOnline , skills, onViewDetails}) => {
    return(
        <div className= "container">
            <img src={avatarUrl || "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" } className='img'  />
            <div className='info'>
                <span style={{display: 'inline-block' , fontWeight: 'bold' ,fontSize: '20px'}}>{name}</span>
                <span style={{display: 'inline-block'}}>{email}</span>
                <span style={{display: 'inline-block'}}>{isOnline? "🟢 Online" : "⚪ Offline"}</span>
            </div>
            

            <b style={{display: 'inline-block' }}>Skills</b>   


            <div className='skills-container'>
            {skills.map(({ skillName, level }) => (
                <SkillTag 
                skillName={skillName} 
                level={level} 
                />
            ))}
            </div>

            <button className='btn' onClick={() => onViewDetails(userId) }>View Detail</button>
        </div>
    )   
}
export default UserProfileCard