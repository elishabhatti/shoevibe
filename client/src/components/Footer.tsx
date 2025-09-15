
const Footer = () => {
  return (
    <footer className="w-full py-6 border-t border-gray-300 bg-white text-center text-sm text-gray-600">
      © {new Date().getFullYear()} All rights reserved —{" "}
      <a
        href="mailto:elishajameel270@gmail.com"
        className="text-blue-600 hover:underline"
      >
        elishajameel270@gmail.com
      </a>
    </footer>
  );
};

export default Footer;