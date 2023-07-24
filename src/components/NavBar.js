import React , {useContext} from 'react'
import './NavBar.css'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Badge from '@mui/material/Badge';
import ProductContext from '../Contexts/ProductsContext';
export default function NavBar() {
  const contextData = useContext(ProductContext)
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark d-flex">
        <div class="container">
          <span class="navbar-brand mb-0 h1">Navbar</span>
          <ul className="navbar-nav me-auto-ms-3 navbarLinks">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
            <li className="nav-item" onClick={()=> contextData.setShowCart(true)}>
              <Badge badgeContent={contextData.ShoppingCart.length} color="error">
                <ShoppingBagIcon style={{ color: 'white' }} />
              </Badge>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
