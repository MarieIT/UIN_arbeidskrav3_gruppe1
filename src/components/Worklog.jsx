import WorklogItem from "./WorklogItem";

export default function Worklog({ member, workLoadByDate, workLoadByMember }){
    return(
        <>
        <h1>Arbeidslogg</h1>
        <div><WorklogItem workLoadByDate={workLoadByDate} workLoadByMember={workLoadByMember} member={member}/></div>
        </>
    )
}