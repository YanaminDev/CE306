import React from 'react'

export interface SkillTagProps {
    skillName : string
    level? :  'Beginner' | 'Intermediate' | 'Advanced'

}

const SkillTag : React.FC<SkillTagProps> = ({skillName , level}) => {
    let bgColor
    if (level == 'Beginner'){
        bgColor = '#93ff87ff'
    }
    else if (level == 'Intermediate'){
        bgColor = '#f1ce59ff'
    }
    else if (level == 'Advanced'){
        bgColor = '#f87268ff'
    }
    else{
        bgColor = '#f87268ff'
    }
    return (
        <div style={{borderRadius : '8px' , border : '1px none gray' , backgroundColor: bgColor , padding: '8px' ,  display: 'inline-block' ,height : '25px'}}>
            <span>{skillName}   </span>
            <small style={{fontStyle : 'italic' , fontFamily: 'Arial, sans-serif' }}> ({level})</small>
        </div>
    )
}


export default SkillTag