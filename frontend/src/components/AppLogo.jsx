import { Link } from 'react-router-dom';
import logo from '../assets/imgs/logo.png';

export const AppLogo = ({ textColor }) => {

    const classNames = `logo text-${textColor}`

    return (
        <Link to="/" className="d-flex align-items-center justify-content-center">
            <img src={logo} width="44" height="44" alt="" />
            <h2 className={classNames}>NW-Cosmetic</h2>
        </Link>
    );
};
