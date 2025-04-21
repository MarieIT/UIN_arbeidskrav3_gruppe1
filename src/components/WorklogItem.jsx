export default function WorklogItem({ workLoadByDate, workLoadByMember, member }) {
    function generateWorkLoad(){
      return member? workLoadByMember.filter((workLogMember) => workLogMember.name === member)[0]?.log : workLoadByDate
    }
  return (
    <>
      {generateWorkLoad()?.map((logItem, index) => 
        <ul key={index}>
          <li>{logItem.date}</li>
          <li>{logItem.memberName}</li>
          <li>{logItem.entry}</li>
          <li>{logItem.time}</li>
        </ul>
        )}
    </>
  )
}