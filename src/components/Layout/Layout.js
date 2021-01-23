import Header from './Header';
import Footer from './Footer';
import Content from './Content';

const Layout = ({ children, ...props }) => {
  return (
    <div className="wrapper" {...props}>
      {children}
    </div>
  );
};

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout;
