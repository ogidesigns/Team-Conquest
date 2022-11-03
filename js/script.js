goal: load navigation to each page and change navigation from one location
script: if user navigates to a new page it needs to change the class of current or active

1. Load the nav
2. Check to see where the user is at within the site

var navigation = document.createElement("nav");
document.body.appendChild(navigation);
navigation.setAttribute("class", "nav navbar navbar-expand-lg bg-dark navbar-dark fixed-top");
var fluid = document.createElement("div");
fluid .setAttribute("class" , "container-fluid");
var logoLink = document.createElement("a");
logoLink .setAttribute("href" , "index.html");
var companyName = document.createTextNode("Team Conquest");
logoLink . appendChild(companyName);
navigation.appendChild(logoLink);

//<nav class="nav navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
      //<div class="container-fluid">
        <a class="navbar-brand" href="index.html"><img src="images/initialsLogo.png" alt="Team Conquest Logo" width="30" height="30" class="d-inline-block align-text-top"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="train.html">Train</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="shop.html">Apparel</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>