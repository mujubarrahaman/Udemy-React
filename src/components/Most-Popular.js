import m1 from "../assets/images/c5.jpg"
import m2 from "../assets/images/c6.jpg"
import m3 from "../assets/images/c7.jpg"
import m4 from "../assets/images/c8.jpg"
import m5 from "../assets/images/c9.jpg"
import m6 from "../assets/images/c10.jpg"
import m7 from "../assets/images/c11.jpg"
import m8 from "../assets/images/c12.jpg"



function MostPopular(){
    return(
        // <!--Popular section-->
        <div className="popular">
            <h1 className="popular__title">Most Popular</h1>
            <p className="popular__subtitle">Pick the best title</p>
    
            <div className="popular__container">
                <div className="course-card">
                    <img src={m1} alt=""></img>
                    <h3>Python Full Stack Course</h3>
                    <p>Col steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>
    
                <div className="course-card">
                <img src={m2} alt=""></img>
                    <h3>Java Full Stack Course</h3>
                    <p>Col steele</p>
                    <p>3.9 ⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>
    
                <div className="course-card">
                <img src={m3} alt=""></img>
                    <h3>Java Course</h3>
                    <p>Col steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>
    
                <div className="course-card">
                <img src={m4} alt=""></img>
                    <h3>C Course</h3>
                    <p>Col steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
    
    
                </div>
    
    
            </div>
            <div class="popular__container__two">
    
                <div className="course-card">
                <img src={m5} alt=""></img>
                    <h3>Python Course</h3>
                    <p>Col steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>
    
                <div className="course-card">
                <img src={m6} alt=""></img>
                    <h3>SQL Course</h3>
                    <p>Col steele</p>
                    <p>3.9 ⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>
    
                <div className="course-card">
                <img src={m7} alt=""></img>
                    <h3>C++ Course</h3>
                    <p>Col steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>
    
                <div className="course-card">
                <img src={m8} alt=""></img>
                    <h3>PHP Course</h3>
                    <p>Col steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
    
                </div>
    
    
            </div>
    
        </div>
    )
}

export default MostPopular

