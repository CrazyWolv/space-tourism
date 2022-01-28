// ##########  Everything needing import 🙂  ##########
import PropTypes from "prop-types";


// # styles
import "./style.scss";

const Home = ({isMobile, isTablet}) => {
    return (
        <div className="homepage">
            <div className="homepage-content">
                <div className="homepage-flex">
                    <div className="homepage-flex-left">
                    <h5>So, you want to travel to</h5>
                    <div className="heading1">Space</div>
                        <div className="text homepage-flex-left--paragraph">
                            Let’s face it; if you want to go to space, you might as well genuinely go to 
                            outer space and not hover kind of on the edge of it. Well sit back, and relax 
                            because we’ll give you a truly out of this world experience!
                        </div>
                    </div>
                    <div className="homepage-flex-right">
                        <button className="explore-button">
                            <a href="/destinations">Explore</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

//  Home.propTypes = {
    //   ...
// };

export default Home;