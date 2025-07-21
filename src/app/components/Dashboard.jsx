// src/app/components/Dashboard.jsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { menuItems } from '../constant/constant.js';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/navigation.js';

export default function Dashboard() {

  const [selectedFilter, setSelectedFilter] = useState('*');
  const [displayItems, setDisplayItems] = useState(menuItems);
  const [isTransitioning, setIsTransitioning] = useState(false);
  // Filter items based on selected category
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push('/Experience');
  };


  const filteredItems =
    selectedFilter === '*'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedFilter);

  const handleFilterClick = (filterValue) => {
    setIsTransitioning(true);
    setSelectedFilter(filterValue);
    setTimeout(() => {
      const filtered =
        filterValue === '*'
          ? menuItems
          : menuItems.filter((item) => item.category === filterValue);
      setDisplayItems(filtered);
      setIsTransitioning(false);
    }, 300);
  };



  return (
    <div className="container-xxl position-relative p-0">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
        <Link href="/" className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <i className="fa fa-utensils me-3"></i>Restoran
          </h1>
        </Link>


        <div className="collapse navbar-collapse" id="navbarCollapse">

          <a href="#" className="btn btn-primary py-2 px-4">Book A Table</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container-xxl  hero-header ">
        <div className="container  py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-3 text-white animated slideInLeft">
                Enjoy Our<br />Delicious Meal
              </h1>
              <p className="text-white animated slideInLeft mb-4 pb-2">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              {/* <Link href="/Experience" className="btn btn-primary py-2 px-4">
                AI HELP
              </Link> */}

            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <Image src="/img/hero.png" alt="Hero" width={700} height={700} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>


      {/* --------------------------------------------------------------------------------- */}
      <section id="menu" className="menu section">
        {/* Section Title */}
        <div className="container section-title">
          <h2>Menu</h2>
          <p>Check Our Tasty Menu</p>
        </div>

        <div
          className="container isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          {/* Filters */}
          <div className="row" >
            <div className="col-lg-12 d-flex justify-content-center">
              <ul className="menu-filters isotope-filters" style={{ fontFamily: "Playfair Display,sans-serif" }}>
                <li
                  data-filter="*"
                  className={selectedFilter === '*' ? 'filter-active' : ''}
                  onClick={() => handleFilterClick('*')}
                  style={{ cursor: 'pointer' }}
                >
                  All
                </li>
                <li
                  data-filter=".filter-starters"
                  className={selectedFilter === 'filter-starters' ? 'filter-active' : ''}
                  onClick={() => handleFilterClick('filter-starters')}
                  style={{ cursor: 'pointer' }}
                >
                  Starters
                </li>
                <li
                  data-filter=".filter-salads"
                  className={selectedFilter === 'filter-salads' ? 'filter-active' : ''}
                  onClick={() => handleFilterClick('filter-salads')}
                  style={{ cursor: 'pointer' }}
                >
                  Salads
                </li>
                <li
                  data-filter=".filter-specialty"
                  className={selectedFilter === 'filter-specialty' ? 'filter-active' : ''}
                  onClick={() => handleFilterClick('filter-specialty')}
                  style={{ cursor: 'pointer' }}
                >
                  Specialty
                </li>
              </ul>
            </div>
          </div>

          {/* Menu Items */}
          <div className="row isotope-container" >
            {displayItems.map((item, index) => (
              <div
                key={index}
                className={`col-lg-6 menu-item isotope-item ${item.category} ${isTransitioning ? 'fade-out' : 'fade-in'
                  }`}
              >
                <div className="menu-item-container">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="menu-img"
                    width={75}
                    height={80}
                    style={{ width: '80px', height: '75px' }}
                  />
                  <div className="menu-text">
                    <div className="menu-content">
                      <span className="menu-name" style={{ width: "130px", fontSize: "14px", paddingLeft: "0px" }}>{item.name}</span>
                      <span className="menu-price" style={{ color: "#cda45e" }}>{item.price}</span>
                    </div>
                    <div className="menu-ingredients">{item.ingredients}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Floating AI Assistant Logo */}
 <div className="ai-assistant-wrapper" onClick={handleClick}>
  <div className="ai-assistant">
    <Image
      src="/img/chefflogo.png"
      alt="AI Assistant"
      width={50}
      height={50}
      className="ai-icon"
    />
  </div>
  <div className="ai-order-now">Order Now</div>
</div>




    </div>
  );
}
