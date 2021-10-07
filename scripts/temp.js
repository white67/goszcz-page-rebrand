class AntyStopka extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <div class="topHeader center">
            <div>
                <div class="topContact">
                    <a href=""><div class="topConEmail">
                        <img src="../../files/icons/icon-email.png" alt="">
                        <span>lo@goszczynski.nowytarg.pl</span>
                    </div></a>
    
                    <a href=""><div class="topConPhone">
                        <img src="../../files/icons/icon-phone.png" alt="">
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
                            <img src="../../files/icons/icon-contrast.png" alt="">
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
                <a href=""><img src="../../files/icons/icon-goszcz-logo-red.png" alt=""></a>
            </div>

            <div class="mainNavButtons">
                <ul class="mainNavList">
                    <li><a href="../../index.html">Strona główna</a></li>
                    <li><a href="../../index.html">Aktualności</a></li>
                    <li><a href="../../index.html">Szkoła</a>
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
                    <li><a href="../../index.html">Rekrutacja</a></li>
                    <li><a href="../../index.html">Dla Ucznia i Rodzica</a>
                            <ul class="drop">
                            <li><a href="https://www.goszczynski.edupage.org/timetable">Plan lekcji</a></li>
                            <li><a href="https://portal.librus.pl/rodzina">E-dziennik Librus</a></li>
                            <li><a href="https://www.goszczynski.edupage.org/substitution">Zastępstwa</a></li>
                            <li><a href="#">Matura</a></li>
                            <li><a href="#">Zajęcia pozalekcyjne</a></li>
                            <li><a href="#">Organizacja roku</a></li>
                            <li><a href="#">Wykaz podręczników</a></li>
                            <li><a href="#">Dodatkowe ubezpieczenie uczniów</a></li>
                            <li><a href="#">Dokumenty/druki</a></li>
                            <li><a href="#">Wolontariat</a></li>
                        </ul>
                    </li>
                    <li><img src="../../files/icons/icon-phone.png" class="navbarico"><a href="./index.html">Kontakt</a></li>
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

/* musi być wielkastopa bo nazwy web componentów muszą być dwuczłonowe */
class WielkaStopa extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer class="center">
        <div class="footerMain">
            <div class="footerMainLeft">
                <div class="ftrLeftSchoolName">
                    <div class="ftrLeftSchoolLogo">
                        <img src="../../files/icons/icon-goszcz-logo-darkblue.png" alt="">
                    </div>

                    <div class="ftrLeftName">
                        <b>LICEUM OGÓLNOKSZTAŁCĄCE</b><br>im. Seweryna Goszczyńskiego w Nowym Targu
                    </div>
                </div>

                <div class="ftrLeftContact">
                    <div class="ftrLeftLocation">
                        <div class="ftrLeftLocationLogo">
                            <img src="../../files/icons/icon-waypoint-grey.png" alt="">
                        </div>

                        <div class="ftrLeftLocationText">
                            34-400 Nowy Targ<br>Plac Krasińskiego 1
                        </div>
                    </div>

                    <div class="ftrLeftPhone">
                        <div class="ftrLeftPhoneLogo">
                            <img src="../../files/icons/icon-phone-grey.png" alt="">
                        </div>

                        <div class="ftrLeftPhoneText">
                            +18 26 62 955<br>lo@goszczynski.nowytarg.pl
                        </div>
                    </div>
                </div>
            </div>

            <div class="footerMainRight">
                <div class="ftrRightText">
                    <span><b>BĄDŹ Z NAMI</b></span><br>
                    <span>Aktualności i informacje</span>
                </div>

                <div class="ftrRightLogoSection">
                    <div class="logoSectionFacebook">
                        <a href="https://www.facebook.com/1lonowytarg" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="40" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg>
                        </a>
                    </div>

                    <div class="logoSectionYoutube">
                        <a href="https://www.youtube.com/channel/UC95cTxsIHwtGj5c-K6wRmhQ" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                        </a>
                    </div>

                    <div class="logoSectionInstagram">
                        <a href="https://www.instagram.com/samorzad_1_lo/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="40" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="footerMenu">

        </div>
    </footer>`
    }
}

customElements.define('wielka-stopa', WielkaStopa)