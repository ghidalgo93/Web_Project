function darkmode() {
    var body = document.querySelector('body')
    var button = document.querySelector('button')
    var nav = document.querySelector('nav')

    if (body.className === "light-theme") {
        body.className = "dark-theme"
        nav.className = "navbar sticky-top navbar-expand navbar-dark"
        button.innerHTML = "Light Mode"

    }
    else {
        body.className = "light-theme"
        nav.className = "navbar sticky-top navbar-expand navbar-light"
        button.innerHTML = "Dark Mode"
    }
    
  }