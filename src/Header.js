import './style.css'
function Header() {
    return (
        <nav className="navbar">
            <div className="left">
                <h2 className="heading">Dextrus</h2>
            </div>
            <div className="right">
                <a href="https://github.com" className="link">Settings</a>
                <a href="https://github.com" className="link">Logout</a>
            </div>
        </nav>
    )
}
export default Header;