import {Link} from 'react-router-dom'

interface NavbarProps {
    user?: string
}

export default function Navbar(props?:NavbarProps) {

    function renderButtons() {
        if (props?.user) {
            return (
                <div className="buttonHolder">
                    <Link to={'/dashboard'}>Dashboard</Link>
                    <Link to={'/logout'}>Logout</Link>
                </div>
            )
        } else {
            return (
                <div className="buttonHolder">
                    <Link to={'/signup'}>Signup</Link>
                    <Link to={'/logout'}>Login</Link>
                </div>
            )
        }
    }

    return (
        <div className="navbar-main">
            <h3>Logo Placeholder</h3>
            {renderButtons()}
        </div>
    )
}