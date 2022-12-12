// Import Assets
import profile from "../assets/profile.jpeg";

const Header = () => {
  return (
    <section className="header">
      <img src={profile} alt="Arihant Jain" />

      <div className="header__content">
        <h1>Hi! This is Arihant Jain</h1>
        <p>Solidity Developer</p>
        {/* <button> */}
        <a
          href="mailto:aj14arihantjain@gmail.com"
          className="button"
          target="_blank"
        >
          Get In Touch
        </a>
        {/* </button> */}
      </div>
    </section>
  );
};

export default Header;
