import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li><Link to="members/">Member</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
    </header>
    <main>
      {children}
    </main>
    </>
  )
}