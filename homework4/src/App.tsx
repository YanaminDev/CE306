import UserProfileCard from "./homework1/UserProfileCard";
import './App.css'; 

let people = [{
  userid : 'user0' ,

  email : 'undefined@gmail.com',
  name : 'John Doe',
  avatarUrl : undefined ,
  isOnline : false,
  skills : [{skillName : 'React' , level : 'Advanced' as const },
            {skillName : 'Angular' , level : 'Intermediate' as const },
            {skillName : 'Dgango' , level : 'Beginner' as const },
            {skillName : 'Flutter' , level : 'Advanced' as const },
            {skillName : 'Java' , level : 'Intermediate' as const },
          ]},
          {
  userid : 'user1' ,   
  email : 'thiraphat@gmail.com',
  name : 'Thiraphat Prachan',
  avatarUrl : "/src/assets/bosspic.jpg" ,
  isOnline : true,
  skills : [{skillName : 'React' , level : 'Beginner' as const },
            {skillName : 'HTML' , level : 'Advanced' as const },
            {skillName : 'CSS' , level : 'Advanced' as const },
            {skillName : 'Nodejs' , level : 'Beginner' as const },
            {skillName : 'Python' , level : 'Intermediate' as const },
          ]},

  {
  userid : 'user2' ,  
  email : 'Gussuke76@gmail.com',
  name : 'Gussuke Siam',
  avatarUrl : "/src/assets/guspic.jpg" ,
  isOnline : false,
  skills : [{skillName : 'Python' , level : 'Advanced' as const },
            {skillName : 'Docker' , level : 'Beginner' as const },
            {skillName : 'Vue' , level : 'Intermediate' as const },
            {skillName : 'C#' , level : 'Intermediate' as const },
            
          ]},

          {
  userid : 'user3' ,  
  email : 'TItleYumYum@gmail.com',
  name : 'Suppawit Monkonsuk',
  avatarUrl : "/src/assets/titlepic.jpg" ,
  isOnline : true,
  skills : [{skillName : 'C' , level : 'Advanced' as const },
            {skillName : 'ESP32' , level : 'Advanced' as const },
            {skillName : 'Python' , level : 'Intermediate' as const },
          ]},
          {
  userid : 'user4' ,  
  email : 'TeeExcel@gmail.com',
  name : 'Kittinan Araiwa',
  avatarUrl : "/src/assets/tee.jpg" ,
  isOnline : true,
  skills : [{skillName : 'React' , level : 'Advanced' as const },
            {skillName : 'C++' , level : 'Advanced' as const },
            {skillName : 'Python' , level : 'Intermediate' as const },
          ]},
  

  


]

  


function App(){

  const handleViewDetails = (userId: string | number) => {
    alert("Viewing details for user: " + userId)  }


  return(
    <div className="main_app">
      {people.map((people) => {
        return(
        
        <UserProfileCard userId={people.userid} email={people.email} name={people.name} avatarUrl={people.avatarUrl} isOnline={people.isOnline} skills={people.skills} onViewDetails={handleViewDetails}  ></UserProfileCard> )
      })}
    </div>
      
    
  )
  
}

export default App
      