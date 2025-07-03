const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-4 shadow mt-10">
      <div className="max-w-7xl mx-auto text-center text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
