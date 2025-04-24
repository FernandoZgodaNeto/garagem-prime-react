import logo from '../assets/images/logo-bg.png';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" className="logo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <a className="nav-link active" aria-current="page" href="#home">
                                Home
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#carros">
                                Carros
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#footer">
                                Conheça-nos
                            </a>
                        </li>
                    </ul>
                    <a className="btn" href="#contato">
                        Entre em contato
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
