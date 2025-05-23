import "../styles/home.scss"
import ProfileCard from "./ProfileCard"
import Worklog from "./Worklog"
export default function Home({groupmembers, workLoadByDate}) {

  return (
    
    <main className="member">

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