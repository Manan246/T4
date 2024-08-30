import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from "./Home.js"
import Contact from "./Contact.js"
import Shop from "./Shop.js"
import Nopage from "./Nopage.js"

function Main() {
    return (
        <div>
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Shop">Shop</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="Contact" element={<Contact />}></Route>
                    <Route path="Shop" element={<Shop />}></Route>
                    <Route path="*" element={<Nopage />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Main