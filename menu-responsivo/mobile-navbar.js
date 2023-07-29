class MobileNavbar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if(this.mobileMenu){
            this.addClickEvent ();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobileMenu",
    ".nav-list",
    ".nav-list li",
);