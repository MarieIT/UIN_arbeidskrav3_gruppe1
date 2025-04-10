import { Link } from "react-router-dom";
import '../styles/nav.scss'

export default function Nav({ groupmembers }){
    return(
        <header>
            <nav>
                <Link to="/">MMM+A</Link>
                <p>=</p>
                <ul>
                    <li>
                        <Link to="/">Hjem</Link>
                    </li>
                    {groupmembers?.map((member, index) => <li><Link to={`/${member.name}`} key={index}>{member.name.split(' ')[0]}</Link></li>)}
                </ul>
            </nav>
        </header>
    )
}