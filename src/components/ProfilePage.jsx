import { useParams } from "react-router-dom"
import Worklog from "./Worklog"

export default function ProfilePage(){
    const { member } = useParams()

    return(
        <>
            <h2>{member}</h2>
            <img src="../assets/react.svg"></img>
            <p>some bio</p>
            <ul>
                <li>some interest</li>
            </ul>
            <Worklog member={member}/>
        </>
    )
}