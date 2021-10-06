class AntyStopka extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <div class="topHeader center">
            <div>
                <div class="topContact">
                    <a href=""><div class="topConEmail">
                        <img src="./files/icons/icon-email.png" alt="">
                        <span>lo@goszczynski.nowytarg.pl</span>
                    </div></a>
    
                    <a href=""><div class="topConPhone">
                        <img src="./files/icons/icon-phone.png" alt="">
                        <span>+18 26 62 955</span>
                    </div></a>
                </div>
            </div>

            <div>
                <div class="topSettings">
                    <div class="topSetContrastLetters">
                        <a href="">
                            <div>
                                <span>A-</span>
                            </div>
                        </a>
    
                        <a href="">
                            <div>
                                <span>A</span>
                            </div>
                        </a>
    
                        <a href="">
                            <div>
                                <span>A+</span>
                            </div>
                        </a>
                    </div>
    
                    <a href="">
                        <div class="topSetContrastBtn">
                            <img src="./files/icons/icon-contrast.png" alt="">
                            <span>Zmień<br>Kontrast</span> 
                        </div>
                    </a>
                </div>
            </div>
            
        </div>
    </header>
        `
    }
}

customElements.define('anty-stopka', AntyStopka)

class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<nav>
        <div class="mainNav center">
            <div class="mainNavLogo">
                <a href=""><img src="./files/icons/icon-goszcz-logo-red.png" alt=""></a>
            </div>

            <div class="mainNavButtons">
                <ul class="mainNavList">
                    <li><a href="./index.html">Strona główna</a></li>
                    <li><a href="./index.html">Aktualności</a></li>
                    <li><a href="./index.html">Szkoła</a>
                            <ul class="drop">
                            <li><a href="#">Statut Szkoły</a></li>
                            <li><a href="#">Galeria</a></li>
                            <li><a href="#">Kadra</a></li>
                            <li><a href="#">Sekretariat</a></li>
                            <li><a href="#">Rada Rodziców</a></li>
                            <li><a href="#">Samorząd Szkolny</a></li>
                            <li><a href="#">Klasy</a></li>
                            <li><a href="#">Pedagog</a></li>
                            <li><a href="#">Biblioteka</a></li>
                            <li><a href="#">Wolontariat</a></li>
                        </ul>
                    </li>
                    <li><a href="./index.html">Rekrutacja</a></li>
                    <li><a href="./index.html">Dla Ucznia i Rodzica</a>
                            <ul class="drop">
                            <li><a href="#">Plan lekcji</a></li>
                            <li><a href="#">E-dziennik Librus</a></li>
                            <li><a href="#">Zastępstwa</a></li>
                            <li><a href="#">Matura</a></li>
                            <li><a href="#">Zajęcia pozalekcyjne</a></li>
                            <li><a href="#">Organizacja roku</a></li>
                            <li><a href="#">Wykaz podręczników</a></li>
                            <li><a href="#">Dodatkowe ubezpieczenie uczniów</a></li>
                            <li><a href="#">Dokumenty/druki</a></li>
                            <li><a href="#">Wolontariat</a></li>
                        </ul>
                    </li>
                    <li><a href="./index.html">Kontakt</a></li>
                    <li><a href="./index.html"><img src="./files/icons/icon-lupa.png" alt=""></a></li>
                </ul>
                <div class="burger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
        </div>
    </nav>`
    }
}

customElements.define('nav-bar', NavBar)
