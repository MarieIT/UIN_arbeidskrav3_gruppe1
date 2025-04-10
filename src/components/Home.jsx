import ProfileCard from "./ProfileCard"
import Worklog from "./Worklog"
import '../styles/partials/home.scss'
export default function Home({groupmembers, workLoadByDate }) {
  return (
    
    <main className="member">
      
      <h1>Gruppemedlemmer</h1>

      <div className="member__grid">
        {

          groupmembers.map((groupmember, index) => <ProfileCard key={index} member={groupmember}/>)

        }
      </div>
      <section className="work-log">
        {

          <Worklog workLoadByDate={workLoadByDate}/>

        }
      </section>      
    </main>


  ); 
}