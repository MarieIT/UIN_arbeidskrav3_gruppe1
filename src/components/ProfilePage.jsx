import { useParams } from "react-router-dom"
import Worklog from "./Worklog"
import { fetchProfilePageInfo } from "../../backend/sanity/services/memberService";
import { useEffect } from "react";
import { useState } from "react";

export default function ProfilePage(){
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
            <section>
              <h2>{member}</h2>
              <p>{memberInfo[0]?.bio}</p>
              <ul>
                {memberInfo[0]?.interests.map((interest, index) => <li key={index}>{interest}</li>)}
              </ul>
              <img src={memberInfo[0]?.image}/>
            </section>
            <Worklog member={member}/>
        </>
    )
}