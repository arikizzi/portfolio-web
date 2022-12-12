// Import Assets
import lottery from "../assets/lottery.jpg";
import erc20 from "../assets/erc20.jpg";
import ico from "../assets/ico.jpg";

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects__cards">
        <div className="projects__card">
          <h3>Lottery</h3>
          <img src={lottery} alt="Lottery" />
          <p>
            This is Smart Contract built for a Decentralized Lottery where
            people can try their luck and a single winner takes all the Ether!
          </p>

          {/* <a href="" target="_blank" className="button">
            Site
          </a> */}
          <a
            href="https://github.com/arikizzi/Project-Lottery.git"
            target="_blank"
            className="button"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>Project ERC-20</h3>
          <img src={erc20} alt="ERC-20" />
          <p>
            This project is about building a Smart Contract for ERC20 token with
            Solidity. This token possess all the features of a cryptocurrency.
          </p>

          {/* <a
            href=""
            target="_blank"
            className="button"
          >
            Site
          </a> */}
          <a
            href="https://github.com/arikizzi/Project-ERC20.git"
            target="_blank"
            className="button"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>Project ICO</h3>
          <img src={ico} alt="ICO" />
          <p>
            This project is about building a Smart Contract for hosting an
            ICO(i.e. an Initial Coin Offering) for an ERC-20 token with
            Solidity.
          </p>

          {/* <a href="" target="_blank" className="button">
            Site
          </a> */}
          <a
            href="https://github.com/arikizzi/Project-ICO.git"
            target="_blank"
            className="button"
          >
            Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
