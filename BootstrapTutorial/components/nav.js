function navbar(){
    return `<!-- Button trigger modal -->

  
    <!-- LoginModal -->
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="loginModalLabel">Login to !Learner</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
  
              <form>
                  <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label" >Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control" id="inputEmail3" placeholder="Enter E-mail">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                      <input type="password" class="form-control" id="inputPassword3" placeholder="Enter password">
                    </div>
                  </div>
                  
               
                </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" data-bs-dismiss="modal"  class="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Button trigger modal -->
  
    
    <!-- Sign UpModal -->
    <div class="modal fade" id="signModal" tabindex="-1" aria-labelledby="signModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="signModalLabel">Get an !Learner Account</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <div class="row g-3">
                  <div class="col">
                    <input type="text" class="form-control" id="name" placeholder="First name" aria-label="First name">
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
                  </div>
                </div>
                <form class="row g-3 my-1" >
                  <div class="col-md-6">
                    
                    <input type="email" class="form-control" id="inputEmail4" placeholder="E-mail">
                  </div>
                  <div class="col-md-6">
                   
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Create Password">
                  </div>
                  <div class="col-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                  </div>
                  <div class="col-12">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                  </div>
                  <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity">
                  </div>
                  <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip">
                  </div>
                  <div class="col-12">
                    
                  </div>
                 
                </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"  >Sign-Up</button>
          </div>
        </div>
      </div>
    </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
      <nav  class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
              <a class="navbar-brand" href="#">! <strong>L</strong>earner</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="/">Home</a>
                      </li>
                     
                      <li class="nav-item">
                          <a class="nav-link active" href="/about.html">About</a>
                      </li>
  
                      <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button"
                              data-bs-toggle="dropdown" aria-expanded="false">
                              Blog
                          </a>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li><a class="dropdown-item" href="/">Technology</a></li>
                              <li><a class="dropdown-item" href="/">Web-Development</a></li>
                              <li>
                                  <hr class="dropdown-divider" />
                              </li>
                              <li>
                                  <a class="dropdown-item" href="/">Something else here</a>
                              </li>
                          </ul>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link active" href="/contactUs.html">Contact Us</a>
                      </li>
  
                  </ul>
                  <form class="d-flex">
                      <input class="form-control me-2" id="sh" type="search" placeholder="Search" aria-label="Search" />
                      <button onclick="Search()" class="btn btn-outline-success" >
                          Search
                      </button>
                  </form>
                  <div class="mx-2 my-2">
                      <button class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
                      <button class="btn btn-primary"  data-bs-toggle="modal" id="name1" data-bs-target="#signModal">Sign-Up</button>                </div>
              </div>
           
          </div>
      </nav>
    
  `
}

export  {navbar};

