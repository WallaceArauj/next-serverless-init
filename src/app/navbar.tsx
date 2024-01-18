// components/Navbar.js
import CustomLink from './CustomLink';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <CustomLink href="/" className="text-white font-bold text-xl" legacyBehavior>
          Logo
        </CustomLink>
        <div className="space-x-4">
          <CustomLink href="/" className="text-white" legacyBehavior>
            Home
          </CustomLink>
          <CustomLink href="/about" className="text-white" legacyBehavior>
            About
          </CustomLink>
          <CustomLink href="/contact" className="text-white" legacyBehavior>
            Contact
          </CustomLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
