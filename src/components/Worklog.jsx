import WorklogItem from "./WorklogItem";

export default function Worklog({ member, workLoadByDate }){
    return(
        <>
        <h1>Arbeidslogg</h1>
        <ul><WorklogItem workLoadByDate={workLoadByDate}/></ul>
        </>
    )
}