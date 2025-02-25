import PageTitile from "../User Layouts/PageTitle";

export default function About(){
    return(
        <div className="about-page">      
            <main className="main">
                
                <PageTitile current = 'About'/>
                
                <section id="about" className="about section">
                <div className="container">
                    <div className="row position-relative">
                    <div
                        className="col-lg-7 about-img"
                        
                    >
                        <img src="/assets/img/about.jpg"/>
                    </div>
                    <div className="col-lg-7">
                        <h2 className="inner-title">Consequatur eius et magnam</h2>
                        <div className="our-story">
                        <h4>Est 1988</h4>
                        <h3>Our Story</h3>
                        <p>
                            Inventore aliquam beatae at et id alias. Ipsa dolores amet
                            consequuntur minima quia maxime autem. Quidem id sed ratione.
                            Tenetur provident autem in reiciendis rerum at dolor. Aliquam
                            consectetur laudantium temporibus dicta minus dolor.
                        </p>
                        <ul>
                            <li>
                            <i className="bi bi-check-circle" />{" "}
                            <span>Ullamco laboris nisi ut aliquip ex ea commo</span>
                            </li>
                            <li>
                            <i className="bi bi-check-circle" />{" "}
                            <span>Duis aute irure dolor in reprehenderit in</span>
                            </li>
                            <li>
                            <i className="bi bi-check-circle" />{" "}
                            <span>Ullamco laboris nisi ut aliquip ex ea</span>
                            </li>
                        </ul>
                        <p>
                            Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non
                            nesciunt suscipit repellendus porro in quo eveniet. Molestias in
                            maxime doloremque.
                        </p>
                        <div className="watch-video d-flex align-items-center position-relative">
                            <i className="bi bi-play-circle" />
                            <a
                            href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                            className="glightbox stretched-link"
                            >
                            Watch Video
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                {/* /About Section */}
                {/* Team Section */}
                <section id="team" className="team section light-background">
                {/* Section Title */}
                <div className="container section-title">
                    <h2>Our Team</h2>
                    <p>
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                    consectetur velit
                    </p>
                </div>
                {/* End Section Title */}
                <div className="container">
                    <div className="row gy-4">
                    <div
                        className="col-lg-3 col-md-6 d-flex align-items-stretch"
                    >
                        <div className="team-member">
                        <div className="member-img">
                            <img
                            src="/assets/img/team/team-1.jpg"
                            className="img-fluid"
                            alt=""
                            />
                            <div className="social">
                            <a href="">
                                <i className="bi bi-twitter-x" />
                            </a>
                            <a href="">
                                <i className="bi bi-facebook" />
                            </a>
                            <a href="">
                                <i className="bi bi-instagram" />
                            </a>
                            <a href="">
                                <i className="bi bi-linkedin" />
                            </a>
                            </div>
                        </div>
                        <div className="member-info">
                            <h4>Walter White</h4>
                            <span>Chief Executive Officer</span>
                        </div>
                        </div>
                    </div>
                    {/* End Team Member */}
                    <div
                        className="col-lg-3 col-md-6 d-flex align-items-stretch"
                       
                        
                    >
                        <div className="team-member">
                        <div className="member-img">
                            <img
                            src="/assets/img/team/team-2.jpg"
                            className="img-fluid"
                            alt=""
                            />
                            <div className="social">
                            <a href="">
                                <i className="bi bi-twitter-x" />
                            </a>
                            <a href="">
                                <i className="bi bi-facebook" />
                            </a>
                            <a href="">
                                <i className="bi bi-instagram" />
                            </a>
                            <a href="">
                                <i className="bi bi-linkedin" />
                            </a>
                            </div>
                        </div>
                        <div className="member-info">
                            <h4>Sarah Jhonson</h4>
                            <span>Product Manager</span>
                        </div>
                        </div>
                    </div>
                    {/* End Team Member */}
                    <div
                        className="col-lg-3 col-md-6 d-flex align-items-stretch"
                       
                    >
                        <div className="team-member">
                        <div className="member-img">
                            <img
                            src="/assets/img/team/team-3.jpg"
                            className="img-fluid"
                            alt=""
                            />
                            <div className="social">
                            <a href="">
                                <i className="bi bi-twitter-x" />
                            </a>
                            <a href="">
                                <i className="bi bi-facebook" />
                            </a>
                            <a href="">
                                <i className="bi bi-instagram" />
                            </a>
                            <a href="">
                                <i className="bi bi-linkedin" />
                            </a>
                            </div>
                        </div>
                        <div className="member-info">
                            <h4>William Anderson</h4>
                            <span>CTO</span>
                        </div>
                        </div>
                    </div>
                    {/* End Team Member */}
                    <div
                        className="col-lg-3 col-md-6 d-flex align-items-stretch"
                        
                    >
                        <div className="team-member">
                        <div className="member-img">
                            <img
                            src="/assets/img/team/team-4.jpg"
                            className="img-fluid"
                            alt=""
                            />
                            <div className="social">
                            <a href="">
                                <i className="bi bi-twitter-x" />
                            </a>
                            <a href="">
                                <i className="bi bi-facebook" />
                            </a>
                            <a href="">
                                <i className="bi bi-instagram" />
                            </a>
                            <a href="">
                                <i className="bi bi-linkedin" />
                            </a>
                            </div>
                        </div>
                        <div className="member-info">
                            <h4>Amanda Jepson</h4>
                            <span>Accountant</span>
                        </div>
                        </div>
                    </div>
                    {/* End Team Member */}
                    </div>
                </div>
                </section>
                {/* /Team Section */}
                {/* Skills Section */}
                <section id="skills" className="skills section">
                {/* Section Title */}
                <div className="container section-title" >
                    <h2>Our Skills</h2>
                    <p>
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                    consectetur velit
                    </p>
                </div>
                {/* End Section Title */}
                <div className="container">
                    <div className="row skills-content skills-animation">
                    <div className="col-lg-6">
                        <div className="progress">
                        <span className="skill">
                            <span>HTML</span> <i className="val">100%</i>
                        </span>
                        <div className="progress-bar-wrap">
                            <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            />
                        </div>
                        </div>
                        {/* End Skills Item */}
                        <div className="progress">
                        <span className="skill">
                            <span>CSS</span> <i className="val">90%</i>
                        </span>
                        <div className="progress-bar-wrap">
                            <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            />
                        </div>
                        </div>
                        {/* End Skills Item */}
                        <div className="progress">
                        <span className="skill">
                            <span>JavaScript</span> <i className="val">75%</i>
                        </span>
                        <div className="progress-bar-wrap">
                            <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            />
                        </div>
                        </div>
                        {/* End Skills Item */}
                    </div>
                    <div className="col-lg-6">
                        <div className="progress">
                        <span className="skill">
                            <span>PHP</span> <i className="val">80%</i>
                        </span>
                        <div className="progress-bar-wrap">
                            <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={80}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            />
                        </div>
                        </div>
                        {/* End Skills Item */}
                        <div className="progress">
                        <span className="skill">
                            <span>WordPress/CMS</span> <i className="val">90%</i>
                        </span>
                        <div className="progress-bar-wrap">
                            <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            />
                        </div>
                        </div>
                        {/* End Skills Item */}
                        <div className="progress">
                        <span className="skill">
                            <span>Photoshop</span> <i className="val">55%</i>
                        </span>
                        <div className="progress-bar-wrap">
                            <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={55}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            />
                        </div>
                        </div>
                        {/* End Skills Item */}
                    </div>
                    </div>
                </div>
                </section>
                {/* /Skills Section */}
                {/* Clients Section */}
                <section id="clients" className="clients section">
                {/* Section Title */}
                <div className="container section-title" >
                    <h2>Clients</h2>
                    <p>
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                    consectetur velit
                    </p>
                </div>
                {/* End Section Title */}
                <div className="container">
                    <div className="row g-0 clients-wrap">
                    <div className="col-xl-3 col-md-4 client-logo">
                        <img
                        src="/assets/img/clients/client-1.png"
                        className="img-fluid"
                        alt=""
                        />
                    </div>
                    {/* End Client Item */}
                    <div className="col-xl-3 col-md-4 client-logo">
                        <img
                        src="/assets/img/clients/client-2.png"
                        className="img-fluid"
                        alt=""
                        />
                    </div>
                    {/* End Client Item */}
                    <div className="col-xl-3 col-md-4 client-logo">
                        <img
                        src="/assets/img/clients/client-3.png"
                        className="img-fluid"
                        alt=""
                        />
                    </div>
                    {/* End Client Item */}
                    <div className="col-xl-3 col-md-4 client-logo">
                        <img
                        src="/assets/img/clients/client-4.png"
                        className="img-fluid"
                        alt=""
                        />
                    </div>
                    {/* End Client Item */}
                    <div className="col-xl-3 col-md-4 client-logo">
                        <img
                        src="/assets/img/clients/client-5.png"
                        className="img-fluid"
                        alt=""
                        />
                    </div>
                    {/* End Client Item */}
                    <div className="col-xl-3 col-md-4 client-logo">
                        <img
                        src="/assets/img/clients/client-6.png"
                        className="img-fluid"
                        alt=""
                        />
                    </div>
                    {/* End Client Item */}
                    <div className="col-xl-3 col-md-4 client-logo">
                        <img
                        src="/assets/img/clients/client-7.png"
                        className="img-fluid"
                        alt=""
                        />
                    </div>
                    {/* End Client Item */}
                    <div className="col-xl-3 col-md-4 client-logo">
                        <img
                        src="/assets/img/clients/client-8.png"
                        className="img-fluid"
                        alt=""
                        />
                    </div>
                    {/* End Client Item */}
                    </div>
                </div>
                </section>
                {/* /Clients Section */}
            </main>
        </div>
    )
}