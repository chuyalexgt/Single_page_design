import icon from "../icons/icon.png"

const Header = () =>{
    const view = `
    <div class="Header-main">
        <div class="Header-logo">
            <h1>
                <a href="/">
                    <img id = "icon" src=${icon} alt="">
                    100tifi.co
                </a>
            </h1>
        </div>
        <div class="header-nav">
            <a href="#/about/">
            About Us
            </a>
        </div>
    </div>
    `
    return view
}

export default Header