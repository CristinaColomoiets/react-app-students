import './Footer.css'
import  footerLogo from '../../assets/footerlogo.png'

const Footer = ()=>{
    return(
        <footer className='footer'>
        <a href="https://github.com/CristinaColomoiets/react-app-students"><img className='footerLogo' src={footerLogo} alt="" />GitHub Repository</a>
        </footer>
    )
}

export default Footer
