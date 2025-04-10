import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <header>
            <nav>
                <ul>
                    <Link>Home</Link>
                    {groupmembers.map((member, index) => <Link></Link>)}
                </ul>
            </nav>
        </header>
    )
}