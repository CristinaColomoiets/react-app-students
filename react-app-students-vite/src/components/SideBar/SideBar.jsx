import './Sidebar.css'
import { Link } from 'react-router-dom'
import About from "../About/About"
import ProductsList from '../ProductsList/ProductsList'


const Sidebar = () => {
    return (
        <div className="Sidebar">
            <nav>
                <ul>
                    <li>
                        <Link to={`/`}>Inicio </Link>
                    </li>
                    <li>
                        <Link to={'/products'} element={<ProductsList/>}>Products</Link>
                    </li>
                    <li>
                        {/* <Link to={'/adds'}>Add product</Link> */}
                    </li>
                    <li>
                    <Link to={'/about'} element={<About/>}>About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar