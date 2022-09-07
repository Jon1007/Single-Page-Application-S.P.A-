import {Link} from "react-router-dom";

function Footer () {
  return(
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          ©{new Date().getFullYear()}CopyRight Text
          <Link className="grey-text text-lighten-4 right" to="/">
            Project
          </Link>
        < /div>

      </div>
    </footer>
  )
}

export {Footer}