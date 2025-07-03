import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="flex-grow px-4 py-6 max-w-7xl mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
