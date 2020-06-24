function darkmode() {
    var body = document.querySelector('body')
    var button = document.querySelector('button')
    var nav = document.querySelector('nav')
    var github = document.getElementById('github-logo')
    var linkedin = document.getElementById('linkedin-logo')
    var instagram = document.getElementById('instagram-logo')
    var twitter = document.getElementById('twitter-logo')
    var gh = document.getElementById('gh-logo')


    if (body.className === "light-theme") {
        body.className = "dark-theme"
        nav.className = "navbar sticky-top navbar-expand navbar-dark"
        button.innerHTML = "Light Mode"
        github.src = "static/media/github-dark.svg"
        linkedin.src = "static/media/linkedin-dark.svg"
        instagram.src = "static/media/instagram-dark.svg"
        twitter.src = "static/media/twitter-dark.svg"
        gh.src = "static/media/gh-dark.png"
    }
    else {
        body.className = "light-theme"
        nav.className = "navbar sticky-top navbar-expand navbar-light"
        button.innerHTML = "Dark Mode"
        github.src = "static/media/github.svg"
        linkedin.src = "static/media/linkedin.svg"
        instagram.src = "static/media/instagram.svg"
        twitter.src = "static/media/twitter.svg"
        gh.src = "static/media/gh.png"
    }
}