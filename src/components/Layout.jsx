import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Layout({ children, groupmembers }) {
  
  return (
    <>
      <Nav groupmembers={groupmembers}/>
      <main>
        {children}
      </main>
    </>
  )
}