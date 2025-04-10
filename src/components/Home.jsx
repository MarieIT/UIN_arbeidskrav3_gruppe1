import ProfileCard from "./ProfileCard"
import Worklog from "./Worklog"
export default function Home({groupmembers, workLoadByDate}) {
  return (
    
    <main>
      
      <h1>Gruppemedlemmer</h1>
      
        {

          groupmembers.map((groupmember, index) => <ProfileCard key={index} member={groupmember}/>)

        }

        <Worklog/>
      
    </main>


  ); 
}