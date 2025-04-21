import { useParams } from "react-router-dom"
import Worklog from "./Worklog"
import { fetchProfilePageInfo } from "../../backend/sanity/services/memberService";
import '../styles/profilePage.scss'
import { useEffect } from "react";
import { useState } from "react";

export default function ProfilePage({workLoadByMember}){
    const { member } = useParams()
    const [memberInfo, setMemberInfo] = useState([])

    useEffect(() => {
        getProfileCardInfo();
        console.log("ProfilePage: ", memberInfo[0])
        console.log(member)
      }, [member]);
    
    const getProfileCardInfo = async () => {
      const data = await fetchProfilePageInfo(member)
      setMemberInfo(data)
    } 

    return(
        <>
          <section className="profilePage">
            <div className="profilePage__container">
              <img className="profilePage__image" src={memberInfo[0]?.image} alt={`Bilde av ${member}`} />
                <div className="profilePage__info">
                  <h2>{member}</h2>
                  <p>{memberInfo[0]?.bio}</p>

                  <h3>Interesser:</h3>
                  <ul>
                    {memberInfo[0]?.interests.map((interest, index) => (
                      <li key={index}>{interest}</li>
                    ))}
                  </ul>
                </div>
            </div>
            
            <Worklog member={member} workLoadByMember={workLoadByMember}/>
          </section>
        </>
    )
}