import { Link } from "react-router-dom";

export default function Nav({ groupmembers }){
    return(
        <header>
            <nav>
                <ul>
                    <Link to="/">Hjem</Link>
                    {groupmembers?.map((member, index) => <Link to={`/${member.name}`} key={index}>{member.name.split(' ')[0]}</Link>)}
                </ul>
            </nav>
        </header>
    )
}