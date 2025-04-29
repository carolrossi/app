import './header.css';

export default function Header() {
    return (
        <>
        <div className='simbolocima'>
            <img src='simbolo1.png' className='img'></img>
        </div>
                <header>
            <nav>
            <ul>
                
                <li><a href="#">Homepage</a></li>
                <li><a href="#">Menu</a></li>
                 <li className="logo">
                 <img src="logo.png" alt="Logo" />
                 </li>
                 <li><a href="#">Contato</a></li>
                 <li><a href="#">Cardápio</a></li>
            </ul>

            </nav>
        </header>
        </>

    );
}
