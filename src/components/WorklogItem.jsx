export default function WorklogItem({ workLoadByDate }) {
  return (
    <>
      {workLoadByDate?.map((logItem, index) => 
      <ul key={index}>
        <li>{logItem.date}</li>
        <li>{logItem.memberName}</li>
        <li>{logItem.entry}</li>
        <li>{logItem.time} timer</li>
      </ul>)}
    </>
  )
}