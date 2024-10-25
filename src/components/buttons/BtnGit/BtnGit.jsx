import './style.css';
import img from '../../../img/icons/gitHub-black.svg'

const BtnGit = ({link}) => {
    return (
        <a href={link} target='blank' className="btn-outline">
            <img src={img} alt="" />
            GitHub repo
        </a>
    );
};

export default BtnGit;
