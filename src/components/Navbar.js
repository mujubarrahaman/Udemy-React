import {
    FaSearch, FaShoppingCart, FaBell , FaUser 
} from "react-icons/fa"


function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar__s1">
                    <h1 className="navbar__s1__title">Udemy</h1>
                </div>

                <div className="navbar__s2">
                    <i  style={{ color: "#000000" }}><FaSearch/></i>
                    <input placeholder="Search for anything..." />

                </div>

                <div class="navbar__s3">
                    <p>Courses</p>

                    <div class="mylearning">
                        <p>My Learning</p>
                        <div class="mylearning__popup">
                            <p>You did not change any thing yet</p>
                        </div>
                    </div>
                    <i  style={{ color: "#000000" }}><FaShoppingCart/></i>
                    <i  style={{ color: "#000000" }}><FaBell/></i>
                    <i  style={{ color: "#000000" }}><FaUser/></i>

                </div>

                <div class="navbar__s4">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>

            {/* <!--Categories--> */}
            <div className="categories">
                <p>Development</p>
                <p>Business</p>
                <p>It & Software</p>
                <p>Personal Development</p>
                <p>Design</p>
                <p>Marketing</p>
            </div>
        </>
    )
}
export default Navbar
