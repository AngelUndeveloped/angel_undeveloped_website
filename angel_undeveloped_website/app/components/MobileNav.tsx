import Link from 'next/link';

const MobileNav = () => (
  <div className="mobile-nav">
    <nav>
      <ul className="mobile-nav__menu">
        <li><Link href="#about"><a className="mobile-nav__link">About</a></Link></li>
        <li><Link href="#featured"><a className="mobile-nav__link">Featured</a></Link></li>
        <li><Link href="#contact"><a className="mobile-nav__link">Contact</a></Link></li>
        <li className="mobile-nav__link-line"></li>
        <li>
          <button aria-label="theme-toggle btn" id="theme-toggle" className="mobile-nav__sun">
            {/* Add SVG */}
          </button>
        </li>
      </ul>
    </nav>
  </div>
);

export default MobileNav;