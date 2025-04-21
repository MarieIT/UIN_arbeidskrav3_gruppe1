export default function WorklogItem({ workLoadByDate, workLoadByMember, member }) {
    function generateWorkLoad(){
      return member? workLoadByMember.filter((workLogMember) => workLogMember.name === member)[0]?.log : workLoadByDate
    }
  return (
    <>
      {
        generateWorkLoad()?.map((logItem, index) => <li key={index}>{logItem.date} {logItem.memberName} {logItem.entry} {logItem.time}</li>)
      }
    </>
  )
}