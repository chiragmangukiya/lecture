import { Link } from "react-router-dom";

function Header() {
     return(
          <>
               <div>
                    <h1>This is the home page</h1>
                    <Link to="about">Click to view our about page</Link>
                    <Link to="contact">Click to view our contact page</Link>
               </div>               
          </>
     )
}

export default Header;