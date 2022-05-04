import React from 'react';
import ReactDOM from 'react-dom';
function Nav() {
    const navStyle = {
        marginTop: 20,
       
      }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><strong>mrbrackins.</strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Directory</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Program</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
        </li>
       
      </ul> */}
      <form className="d-flex">
     <a className="dropdown-item" href="#">This portfolio site is made with React + Laravel </a>
       
      </form>
    </div>
  </div>
</nav>
    );
}
export default Nav;
// DOM element
if (document.getElementById('nav')) {
    ReactDOM.render(<Nav />, document.getElementById('nav'));
}