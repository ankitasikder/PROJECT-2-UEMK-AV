import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
/*ALL THESE WORKS ARE DONE BY 

ANKITA SIKDER

STUDENT OF BTECH, IN UEMK

CONTACT NO.: 8583939774

EMAIL ID: ankita.sikder14@gmail.com
*/
export const Navibar = () => {
    return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand" exact to="/">Algorithm Visualizer</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link exact to="/About"><a class="nav-link" href="#">About<span class="sr-only">(current)</span></a></Link>
      </li>
      <li class="nav-item">
        <Link exact to="Userguide"><a class="nav-link" href="#">UserGuide</a></Link>
      </li>
      <li class="nav-item">
        <Link exact to="contactUs"><a class="nav-link" href="#">ContactUs</a></Link>
      </li>
    </ul>
    <Link exact to="/feedback"><button type="button" class="btn btn-outline-light">Submit Feedback</button></Link>
  </div>
</nav>
    );
}
export default Navibar;
