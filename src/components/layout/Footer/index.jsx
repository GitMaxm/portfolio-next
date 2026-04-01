import './style.css'
import SocialLinks from '../../ui/SocialLinks';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <SocialLinks />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
