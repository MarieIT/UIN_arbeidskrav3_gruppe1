import "../styles/home.scss"
import ProfileCard from "./ProfileCard"
import Worklog from "./Worklog"
import '../styles/home.scss'
export default function Home({groupmembers, workLoadByDate}) {

  return (
    
    <main className="member">
      
      <h1>Gruppemedlemmer</h1>

      <div className="member__grid">
        {

          groupmembers.map((groupmember, index) => <ProfileCard key={index} member={groupmember}/>)

        }
      </div>
        <Worklog/>

      
    </main>


  ); 
}