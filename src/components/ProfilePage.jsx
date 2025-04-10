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
        console.log("ProfilePage: ", memberInfo)
      }, [member]);
    
      const getProfileCardInfo = async () => {
        const data = await fetchProfilePageInfo(member)
        setMemberInfo(data)
      } 

    return(
        <>
            <h2>{member}</h2>
            <p></p>
            <ul>
            </ul>
            <Worklog member={member}/>
        </>
    )
}