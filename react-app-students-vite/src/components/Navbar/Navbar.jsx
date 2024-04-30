import './Navbar.css'
import  studentLogo from '../../assets/logo.png'
import MenuNavicon from '../../assets/menu.png'


const Navbar = () =>{
    return (
        <header>
            <nav className='Navbar'>
                <img className='menu' src={MenuNavicon} alt="Logotipo" />
                <h1>Things</h1>
                <img className='logo' src={studentLogo} alt="Logotipo" />
                
            </nav>
        </header>
    )
}

export default Navbar