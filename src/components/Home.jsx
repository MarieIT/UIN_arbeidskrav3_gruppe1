import ProfileCard from "./ProfileCard"
export default function Home({groupmembers}) {
  return (
    
    <main>
      
      <h1>Gruppemedlemmer</h1>
      
        {

          groupmembers.map((groupmember, index) => <ProfileCard key={index} member={groupmember}/>)

        }

        <section id="worklog">


        </section>
      
    </main>


  ); 
}