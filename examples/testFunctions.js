function darkmode() {
    if (document.querySelector('body').className === "theme") {
        document.querySelector('body').className = "dark-theme"
    }
    else {
        document.querySelector('body').className = "theme"
    }
    
  }