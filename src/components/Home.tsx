import githubIcon from "../assets/github.svg";
import instagramIcon from "../assets/instagram.svg";
import linkedinIcon from "../assets/linkedin.svg";
import emailIcon from "../assets/email2.svg";

function Home() {
  return (
    <>
      <div className="home container-fluid">
        <div className="about row">
          <div className="col-lg-12">
            <h1>Hi, My Name is Anoj</h1>
            <p>
              An aspiring fullstack developer with a passion for learning and
              creating.
            </p>
            <a
              className="iconButton"
              target="_blank"
              href="https://www.github.com/anojganesh"
            >
              <img className="icon" src={githubIcon}></img>
            </a>
            <a className="iconButton" target="_blank" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=anojganesh@gmail.com">
              <img className="icon" id="emailIcon" src={emailIcon}></img>
            </a>
            <a
              className="iconButton"
              target="_blank"
              href="https://www.linkedin.com/in/anoj-ganesh-8534881a3/"
            >
              <img className="icon" src={linkedinIcon}></img>
            </a>
          </div>
        </div>
        <div className="row skills row2">
          <div className="col-lg-12">
            <h2>Skills</h2>
          </div>
        </div>
        <div className="row row3">
          <div className="col-md-4">
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS, Bootstrap, JQuery, SVG</span>
          </div>
          <div className="col-md-4">
            <h2>Back-End</h2>
            <span>NodeJS, MySQL, CGI, Git, Apache Server Management</span>
          </div>
          <div className="col-md-4">
            <h2>Languages</h2>
            <span>
              Java, Python, Perl, PHP, Classic ASP, Ruby, Bash, C, Lua, Lisp
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
