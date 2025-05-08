import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"

function Recommended() 
{
    return (
        <>
        {/* Recommended */}
        <div className="recommended">
                <h1 className="recommended__title">Recommended for you</h1>
                <p>Pick the best fit</p>

                <div className="recommended__container">
                    <div className="course-card">
                        <img src={c1} alt=""></img>
                            <h3>Python Data Visualisation Master Class</h3>
                            <p>Col steele</p>
                            <p>4.9 ⭐⭐⭐⭐</p>
                            <p>499 <del>1999</del></p>
                    </div>

                    <div className="course-card">
                        <img src={c2} alt=""></img>
                            <h3>Basic Advance Programming with EMC</h3>
                            <p>Col steele</p>
                            <p>3.9 ⭐⭐⭐</p>
                            <p>499 <del>1999</del></p>
                    </div>

                    <div className="course-card">
                        <img src={c3} alt=""></img>
                            <h3>WEb Development Bootcamp 2025</h3>
                            <p>Col steele</p>
                            <p>4.9 ⭐⭐⭐⭐</p>
                            <p>499 <del>1999</del></p>
                    </div>

                    <div className="course-card">
                        <img src={c4} alt=""></img>
                            <h3>Master UI/UX Designing with Figma</h3>
                            <p>Col steele</p>
                            <p>4.9 ⭐⭐⭐⭐</p>
                            <p>499 <del>1999</del></p>
                    </div>
                </div>
                </div>

                </>
            
            )
}

            export default Recommended