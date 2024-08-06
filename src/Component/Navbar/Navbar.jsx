

import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
			<>
            <nav className={`naV navbar text-white navbar-expand-lg fixed-top py-4`}>
					<div className="container">
						<Link to="home" className="navbar-brand text-white fw-bolder fs-2">START FRAMWORK</Link>
                        <div>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
                                <li className="nav-item me-3"><NavLink to="about"className='nav-link text-white fw-bold mt-3 mt-md-0 px-2 rounded-3'>ABOUT</NavLink></li>
                                <li className="nav-item me-3"><NavLink to="portfolio" className='nav-link text-white fw-bold mt-3 mt-md-0 px-2 rounded-3'>PORTFOLIO</NavLink></li>
                                <li className="nav-item me-3"><NavLink to="contact" className='nav-link text-white fw-bold mt-3 mt-md-0 px-2 rounded-3'>CONTACT</NavLink></li>
                            
                            
                            </ul>
                        </div>
                    </div>
            </nav>
            
			</>
		);
}
