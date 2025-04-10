export default function WorklogItem({ workLoadByDate }) {
  return (
    <>
      {workLoadByDate?.map((logItem, index) => <li key={index}>{logItem.date} {logItem.memberName} {logItem.entry} {logItem.time}</li>)}
    </>
  )
}