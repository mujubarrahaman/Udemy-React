import sale from "../assets/images/sale.png"

function Header()
{
    return(
            // <!--Sale image-->
    <div className="sale-image">
    <img src={sale} alt="sale"></img>
    <div className="sale-image__offer">
        <h2>
            Udemy Flash Sale 24 Hours to sale
        </h2>
        <p>Get the tp courses for just 499.JUst one day to save but a life time to learn</p>
    </div>

</div>
    )
}   
export default Header