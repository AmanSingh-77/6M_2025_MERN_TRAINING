import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Blog(){
    return(
        <Fragment className="blog-page">
  <header id="header" className="header d-flex align-items-center sticky-top">
    <div className="container position-relative d-flex align-items-center">
      <a href="index.html" className="logo d-flex align-items-center me-auto">
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="/assets/img/logo.png" alt=""> */}
        <h1 className="sitename">Company</h1>
        <span>.</span>
      </a>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li className="dropdown">
          <Link to='/'>About</Link>
            <ul>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Deep Dropdown</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown" />
                </a>
                <ul>
                  <li>
                    <a href="#">Deep Dropdown 1</a>
                  </li>
                  <li>
                    <a href="#">Deep Dropdown 2</a>
                  </li>
                  <li>
                    <a href="#">Deep Dropdown 3</a>
                  </li>
                  <li>
                    <a href="#">Deep Dropdown 4</a>
                  </li>
                  <li>
                    <a href="#">Deep Dropdown 5</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <Link to='/blog' className="active">Blog</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
      </nav>
      <div className="header-social-links">
        <a href="#" className="twitter">
          <i className="bi bi-twitter-x" />
        </a>
        <a href="#" className="facebook">
          <i className="bi bi-facebook" />
        </a>
        <a href="#" className="instagram">
          <i className="bi bi-instagram" />
        </a>
        <a href="#" className="linkedin">
          <i className="bi bi-linkedin" />
        </a>
      </div>
    </div>
  </header>
  <main className="main">
    {/* Page Title */}
    <div className="page-title accent-background">
      <div className="container d-lg-flex justify-content-between align-items-center">
        <h1 className="mb-2 mb-lg-0">Blog</h1>
        <nav className="breadcrumbs">
          <ol>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="current">Blog</li>
          </ol>
        </nav>
      </div>
    </div>
    {/* End Page Title */}
    {/* Blog Posts Section */}
    <section id="blog-posts" className="blog-posts section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <article className="position-relative h-100">
              <div className="post-img position-relative overflow-hidden">
                <img
                  src="/assets/img/blog/blog-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <span className="post-date">December 12</span>
              </div>
              <div className="post-content d-flex flex-column">
                <h3 className="post-title">
                  Dolorum optio tempore voluptas dignissimos cumque fuga qui
                  quibusdam quia
                </h3>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-person" />{" "}
                    <span className="ps-2">John Doe</span>
                  </div>
                  <span className="px-3 text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-folder2" />{" "}
                    <span className="ps-2">Politics</span>
                  </div>
                </div>
                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas.
                  Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                  nostrum quidem aliquid dicta.
                </p>
                <hr />
                <a href="blog-details.html" className="readmore stretched-link">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
            </article>
          </div>
          {/* End post list item */}
          <div className="col-lg-4">
            <article className="position-relative h-100">
              <div className="post-img position-relative overflow-hidden">
                <img
                  src="/assets/img/blog/blog-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <span className="post-date">March 19</span>
              </div>
              <div className="post-content d-flex flex-column">
                <h3 className="post-title">
                  Nisi magni odit consequatur autem nulla dolorem
                </h3>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-person" />{" "}
                    <span className="ps-2">Julia Parker</span>
                  </div>
                  <span className="px-3 text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-folder2" />{" "}
                    <span className="ps-2">Economics</span>
                  </div>
                </div>
                <p>
                  Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint
                  ullam quis illum voluptatum et. Quo libero rerum voluptatem
                  pariatur nam.
                </p>
                <hr />
                <a href="blog-details.html" className="readmore stretched-link">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
            </article>
          </div>
          {/* End post list item */}
          <div className="col-lg-4">
            <article className="position-relative h-100">
              <div className="post-img position-relative overflow-hidden">
                <img
                  src="/assets/img/blog/blog-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <span className="post-date">June 24</span>
              </div>
              <div className="post-content d-flex flex-column">
                <h3 className="post-title">
                  Possimus soluta ut id suscipit ea ut. In quo quia et soluta
                  libero sit sint.
                </h3>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-person" />{" "}
                    <span className="ps-2">Maria Doe</span>
                  </div>
                  <span className="px-3 text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-folder2" />{" "}
                    <span className="ps-2">Sports</span>
                  </div>
                </div>
                <p>
                  Aut iste neque ut illum qui perspiciatis similique recusandae
                  non. Fugit autem dolorem labore omnis et. Eum temporibus
                  fugiat voluptate enim tenetur sunt omnis.
                </p>
                <hr />
                <a href="blog-details.html" className="readmore stretched-link">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
            </article>
          </div>
          {/* End post list item */}
          <div className="col-lg-4">
            <article className="position-relative h-100">
              <div className="post-img position-relative overflow-hidden">
                <img
                  src="/assets/img/blog/blog-4.jpg"
                  className="img-fluid"
                  alt=""
                />
                <span className="post-date">August 05</span>
              </div>
              <div className="post-content d-flex flex-column">
                <h3 className="post-title">
                  Non rem rerum nam cum quo minus. Dolor distinctio deleniti
                  explicabo eius exercitationem.
                </h3>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-person" />{" "}
                    <span className="ps-2">Maria Doe</span>
                  </div>
                  <span className="px-3 text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-folder2" />{" "}
                    <span className="ps-2">Sports</span>
                  </div>
                </div>
                <p>
                  Aspernatur rerum perferendis et sint. Voluptates cupiditate
                  voluptas atque quae. Rem veritatis rerum enim et autem. Saepe
                  atque cum eligendi eaque iste omnis a qui.
                </p>
                <hr />
                <a href="blog-details.html" className="readmore stretched-link">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
            </article>
          </div>
          {/* End post list item */}
          <div className="col-lg-4">
            <article className="position-relative h-100">
              <div className="post-img position-relative overflow-hidden">
                <img
                  src="/assets/img/blog/blog-5.jpg"
                  className="img-fluid"
                  alt=""
                />
                <span className="post-date">September 17</span>
              </div>
              <div className="post-content d-flex flex-column">
                <h3 className="post-title">
                  Accusamus quaerat aliquam qui debitis facilis consequatur
                </h3>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-person" />{" "}
                    <span className="ps-2">John Parker</span>
                  </div>
                  <span className="px-3 text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-folder2" />{" "}
                    <span className="ps-2">Politics</span>
                  </div>
                </div>
                <p>
                  In itaque assumenda aliquam voluptatem qui temporibus iusto
                  nisi quia. Autem vitae quas aperiam nesciunt mollitia tempora
                  odio omnis. Ipsa odit sit ut amet necessitatibus. Quo ullam ut
                  corrupti autem consequuntur totam dolorem.
                </p>
                <hr />
                <a href="blog-details.html" className="readmore stretched-link">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
            </article>
          </div>
          {/* End post list item */}
          <div className="col-lg-4">
            <article className="position-relative h-100">
              <div className="post-img position-relative overflow-hidden">
                <img
                  src="/assets/img/blog/blog-6.jpg"
                  className="img-fluid"
                  alt=""
                />
                <span className="post-date">December 07</span>
              </div>
              <div className="post-content d-flex flex-column">
                <h3 className="post-title">
                  Distinctio provident quibusdam numquam aperiam aut
                </h3>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-person" />{" "}
                    <span className="ps-2">Julia White</span>
                  </div>
                  <span className="px-3 text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-folder2" />{" "}
                    <span className="ps-2">Economics</span>
                  </div>
                </div>
                <p>
                  Expedita et temporibus eligendi enim molestiae est architecto
                  praesentium dolores. Illo laboriosam officiis quis. Labore
                  officia quia sit voluptatem nisi est dignissimos totam. Et
                  voluptate et consectetur voluptatem id dolor magni impedit.
                  Omnis dolores sit.
                </p>
                <hr />
                <a href="blog-details.html" className="readmore stretched-link">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
            </article>
          </div>
          {/* End post list item */}
        </div>
      </div>
    </section>
    {/* /Blog Posts Section */}
    {/* Blog Pagination Section */}
    <section id="blog-pagination" className="blog-pagination section">
      <div className="container">
        <div className="d-flex justify-content-center">
          <ul>
            <li>
              <a href="#">
                <i className="bi bi-chevron-left" />
              </a>
            </li>
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a href="#" className="active">
                2
              </a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>...</li>
            <li>
              <a href="#">10</a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-chevron-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    {/* /Blog Pagination Section */}
  </main>
  <footer id="footer" className="footer dark-background">
    <div className="container footer-top">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 footer-about">
          <a href="index.html" className="logo d-flex align-items-center">
            <span className="sitename">Company</span>
          </a>
          <div className="footer-contact pt-3">
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p className="mt-3">
              <strong>Phone:</strong> <span>+1 5589 55488 55</span>
            </p>
            <p>
              <strong>Email:</strong> <span>info@example.com</span>
            </p>
          </div>
          <div className="social-links d-flex mt-4">
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
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Terms of service</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li>
              <a href="#">Web Design</a>
            </li>
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Product Management</a>
            </li>
            <li>
              <a href="#">Marketing</a>
            </li>
            <li>
              <a href="#">Graphic Design</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-12 footer-newsletter">
          <h4>Our Newsletter</h4>
          <p>
            Subscribe to our newsletter and receive the latest news about our
            products and services!
          </p>
          <form
            action="forms/newsletter.php"
            method="post"
            className="php-email-form"
          >
            <div className="newsletter-form">
              <input type="email" name="email" />
              <input type="submit" defaultValue="Subscribe" />
            </div>
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">
              Your subscription request has been sent. Thank you!
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="container copyright text-center mt-4">
      <p>
        © <span>Copyright</span>{" "}
        <strong className="px-1 sitename">Company</strong>{" "}
        <span>All Rights Reserved</span>
      </p>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you've purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>{" "}
        Distributed by <a href="“https://themewagon.com">ThemeWagon</a>
      </div>
      <a href="“https://themewagon.com"></a>
    </div>
    <a href="“https://themewagon.com"></a>
  </footer>
  <a href="“https://themewagon.com">{/* Scroll Top */}</a>
  <a
    href="#"
    id="scroll-top"
    className="scroll-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>
</Fragment>

    )
}