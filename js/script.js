function loadNav() {
		var navigation = document.createElement("nav");
		document.body.appendChild(navigation);
		navigation.setAttribute("class", "nav navbar navbar-expand-lg bg-dark navbar-dark fixed-top");
	//create fluid container
		var fluid = document.createElement("div");
		fluid .setAttribute("class" , "container-fluid");
		navigation.appendChild(fluid);
	//Add logo and branding
		var logoLink = document.createElement("a");
		logoLink .setAttribute("href" , "index.html");
		logoLink .setAttribute("class" , "navbar-brand");
	//create logo
		var logo = document.createElement("img");
		logo .setAttribute("src" , "images/initialsLogo.png")
		logo .setAttribute("alt" , "Team Conquest Logo");
		logo .setAttribute("width" , "30");
		logo .setAttribute("height" , "30");
		logo .setAttribute("class" , "d-inline-block align-text-top")
		logoLink .appendChild(logo);
		fluid .appendChild(logoLink);
	//create toggle
		var toggle = document.createElement("button");
		toggle .setAttribute("class" , "navbar-toggler");
		toggle .setAttribute("type" , "button");
		toggle .setAttribute("data-bs-toggle" , "collapse");
		toggle .setAttribute("data-bs-target" , "#navbarSupportedContent");
		toggle .setAttribute("aria-controls" , "navbarSupportedContent");
		toggle .setAttribute("aria-expanded" , "false");
		toggle .setAttribute("aria-label" , "Toggle navigation");
	//create toggle icon
		var toggleIcon = document.createElement("span");
		toggleIcon .setAttribute("class" , "navbar-toggler-icon");
		//build out toggle structure
		toggle .appendChild(toggleIcon);
		fluid .appendChild(toggle);
	//create menu button
		var hamburger = document.createElement("div");
		hamburger .setAttribute("class" , "collapse navbar-collapse");
		hamburger .setAttribute("id" , "navbarSupportedContent");
	//create link list
		var suckerfish = document.createElement("ul");
		suckerfish .setAttribute("class" , "navbar-nav me-auto mb-2 mb-lg-0");
	//create each navigation link
	// home link
		var home = document.createElement("li");
		home .setAttribute("class" , "nav-item");
		var homeLink = document.createElement("a");
		homeLink .setAttribute("href" , "index.html");
		homeLink .setAttribute("class" , "nav-link");
		var homeLinkLabel = document.createTextNode("Home");
		homeLink .appendChild(homeLinkLabel);
		home .appendChild(homeLink);
	// about link
		var about = document.createElement("li");
		about .setAttribute("class" , "nav-item");
		var aboutLink = document.createElement("a");
		aboutLink .setAttribute("href" , "about.html");
		aboutLink .setAttribute("class" , "nav-link");
		var aboutLinkLabel = document.createTextNode("About");
		aboutLink .appendChild(aboutLinkLabel);
		about .appendChild(aboutLink);
	// train link
		var train = document.createElement("li");
		train .setAttribute("class" , "nav-item");
		var trainLink = document.createElement("a");
		trainLink .setAttribute("href" , "train.html");
		trainLink .setAttribute("class" , "nav-link");
		var trainLinkLabel = document.createTextNode("Train");
		trainLink .appendChild(trainLinkLabel);
		train .appendChild(trainLink);
	// apparel link
		var apparel = document.createElement("li");
		apparel .setAttribute("class" , "nav-item");
		var apparelLink = document.createElement("a");
		apparelLink .setAttribute("href" , "apparel.html");
		apparelLink .setAttribute("class" , "nav-link");
		var apparelLinkLabel = document.createTextNode("Apparel");
		apparelLink .appendChild(apparelLinkLabel);
		apparel .appendChild(apparelLink);
	//build suckerfish list
		suckerfish .appendChild(home);
		suckerfish .appendChild(about);
		suckerfish .appendChild(train);
		suckerfish .appendChild(apparel);
		hamburger .appendChild(suckerfish);
		fluid .appendChild(hamburger);
}