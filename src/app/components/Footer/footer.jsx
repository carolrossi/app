import './footer.css';

export default function Footer () {
    return (
        <>
        <footer className='footer'>
            <img src='logo.png' className='logo' ></img>
            <div  className='teste'>
            <p>&copy; 2025 | Todos os direitos reservados</p>
            <div className='icons'>
            <div>
            <a href="#" className="instagram-icon">
            <img src="./instagram.svg" alt="" width={35} />
            </a>
            <a href="pglogin.html" className="twitter-icon">
            <img src="./x.svg" alt="" width={30} />
            </a>
            <a href="#" className="facebook-icon">
            <img src="./facebook.svg" alt="" width={30} />
            </a>
            </div>
            </div>
        </div>
        </footer>
        </>
    )
}