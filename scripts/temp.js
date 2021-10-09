/* Ten plik odpowiada za wczytywanie dużych fragmentów powtarzającego się kodu na podstronach.

Ładowanie segmentów w HTMLu odbywa się poprzez komendę <nazwa-segmentu></nazwa-segmentu>.*/

class AntyStopka extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <div id="topHeader" class="center">
            <div>
                <div class="topContact">
                    <a href=""><div class="topConEmail">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 247.2 175"><path d="M247.2,8.31A8.31,8.31,0,0,0,238.9,0H8.3A8.31,8.31,0,0,0,0,8.31V166.69H0a8,8,0,0,0,.13,1.39s0,.11,0,.16a8.08,8.08,0,0,0,.37,1.3,1.46,1.46,0,0,0,.07.19A7.52,7.52,0,0,0,1.18,171a1.74,1.74,0,0,1,.11.18,9,9,0,0,0,.84,1.11l.07.09.11.1c.11.12.23.24.35.35l.27.24c.12.1.24.2.37.29l.3.23.39.24.32.2.47.23.27.13a8.38,8.38,0,0,0,2.41.62A4.52,4.52,0,0,0,8,175l.32,0H238.9l.4,0,.44,0a8.46,8.46,0,0,0,2.41-.62,2.44,2.44,0,0,0,.28-.14l.46-.22.33-.2.37-.24a3.55,3.55,0,0,0,.31-.23c.12-.1.25-.19.36-.29s.18-.16.28-.24l.35-.35.11-.1.06-.09a9,9,0,0,0,.84-1.11A1.74,1.74,0,0,0,246,171a8.51,8.51,0,0,0,.6-1.21,1.46,1.46,0,0,0,.07-.19,9.25,9.25,0,0,0,.37-1.3c0-.05,0-.11,0-.16a8,8,0,0,0,.13-1.39h0ZM124,98,30.5,16.62H216.82ZM84.1,85.29,16.59,147.71V26.54Zm12.6,11,21.89,19a8.28,8.28,0,0,0,10.91,0l21.34-18.71,66.84,61.8H29.52Zm66.69-10.69L230.6,26.63V147.71Z"/></svg>
                        <span>lo@goszczynski.nowytarg.pl</span>
                    </div></a>
    
                    <a href=""><div class="topConPhone">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179.09 178.68"><path d="M174.7,161.67l-8.06,7.59a45.26,45.26,0,0,1-11.29,6.39,46.1,46.1,0,0,1-11.53,2.89c-1.8.2-43.63,4.12-95.53-47.78C10.75,93.21-3.09,65.54.56,35.27A47.36,47.36,0,0,1,3.42,23.78,44.92,44.92,0,0,1,9.85,12.45l7.58-8C23.14-1.31,32.26-1.48,37.76,4L65.42,31.68A14.41,14.41,0,0,1,65.05,52l-4.6,4.6L51.1,66c.48.85,1,1.75,1.5,2.69,4.89,8.8,11.58,20.86,24.28,33.57s24.72,19.37,33.52,24.24l2.75,1.53,13.93-13.93c5.7-5.7,14.83-5.87,20.33-.38l27.66,27.66A14.42,14.42,0,0,1,174.7,161.67Z"/></svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179.09 179.09"><path d="M89.54,0a89.55,89.55,0,1,0,89.55,89.54A89.54,89.54,0,0,0,89.54,0Zm0,167.09a77.55,77.55,0,1,1,77.55-77.55A77.64,77.64,0,0,1,89.54,167.09Zm59.53-77.55A59,59,0,0,1,48.06,131l83.46-83.46A58.84,58.84,0,0,1,149.07,89.54Z"/></svg>
                            <span>Zmień<br>kontrast</span> 
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
        this.innerHTML = `<div class="menue center">
        <div class="menueLogo">
            <a href="../../index.html"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 362.35 399.79"><path d="M249.61,235.84H333v22.89H249.5s-68.33,7.63-68.33,76.84c0-69.57-68.55-76.84-68.55-76.84H29.39V235.84h83.34s68.44,5.73,68.44,73.45C181.17,241.56,249.61,235.84,249.61,235.84ZM181.17,348.1c0-67.72-68.55-83.39-68.55-83.39H62.42V399.79H299.93V264.71H249.5S181.17,280.37,181.17,348.1ZM362.35,202.34v27.54H249.61s-68.44-2.32-68.44,66.89c0-69.57-68.44-66.89-68.44-66.89H0V202.34H62.42V118.76a118.76,118.76,0,1,1,237.51,0v83.58Zm-88.17,0V112.67H274a93,93,0,0,0-185.57,0h-.22v89.67h26.57c9.53.31,50.87-2.49,66.43,62.51,15.57-63.07,53.91-61.91,65.23-62.51ZM135.49,89.94l-11.77,7.92,2.48,4L133.51,97v31.46H139V89.94Zm25,25.41a10,10,0,0,0,2.36-.28l-9.51,13.37h6.21l10.17-14.8c1.43-2.09,4.35-5.94,4.35-11.33,0-7-5.17-13-13.58-13s-13.53,6-13.53,13C147,110.12,153,115.35,160.52,115.35Zm0-21.17a8.14,8.14,0,1,1-8.14,8.13A7.93,7.93,0,0,1,160.52,94.18Zm33.55-4.9c-11.06,0-15,10.23-15,19.91s4,20,15,20,15-10.28,15-20S205.12,89.28,194.07,89.28Zm0,34.7c-7.37,0-9.52-8.19-9.52-14.79s2.15-14.79,9.52-14.79,9.51,8.19,9.51,14.79S201.43,124,194.07,124Zm48.67-9.07h-5v-25h-7.86L213.76,115.4v4.4h18.47v8.64h5.5V119.8h5Zm-22.93,0,12.42-19.58v19.58Z"/></svg></a>
        </div>
        <input type="checkbox" id="nav-toggle" class="nav-toggle">
        <nav>
            <ul class="menueList">
                <li><a href="../../index.html">Strona główna</a></li>
                <li><a href="../../index.html">Aktualności</a></li>
                <li><a href="#">Szkoła</a>
                        <ul class="drop">
                        <li><a href="https://goszczynski.nowotarski.edu.pl/pliki/statut_szkoly.pdf">Statut Szkoły</a></li>
                        <li><a href="../szkola/galeria.html">Galeria</a></li>
                        <li><a href="../szkola/kadra.html">Kadra</a></li>
                        <li><a href="../szkola/kontakt.html">Sekretariat</a></li>
                        <li><a href="../szkola/radarodzicow.html">Rada Rodziców</a></li>
                        <li><a href="../szkola/samorzad.html">Samorząd Szkolny</a></li>
                        <li><a href="../szkola/klasy.html">Klasy</a></li>
                        <li><a href="../szkola/pedagog.html">Pedagog</a></li>
                        <li><a href="../szkola/biblioteka.html">Biblioteka</a></li>
                        <li><a href="../szkola/wolontariat.html">Wolontariat</a></li>
                    </ul>
                </li>
                <li><a href="../dlaucznia/rekrutacja.html">Rekrutacja</a></li>
                <li><a href="#">Dla Ucznia i Rodzica</a>
                        <ul class="drop">
                        <li><a href="https://www.goszczynski.edupage.org/timetable">Plan lekcji</a></li>
                        <li><a href="https://portal.librus.pl/rodzina">E-dziennik Librus</a></li>
                        <li><a href="https://www.goszczynski.edupage.org/substitution">Zastępstwa</a></li>
                        <li><a href="../dlaucznia/matura.html">Matura</a></li>
                        <li><a href="../dlaucznia/zajecia-pozalekcyjne.html">Zajęcia pozalekcyjne</a></li>
                        <li><a href="../dlaucznia/organizacja.html">Organizacja roku</a></li>
                        <li><a href="../dlaucznia/wykaz-podrecznikow.html">Wykaz podręczników</a></li>
                        <li><a href="../dlaucznia/ubezpieczenie.html">Dodatkowe ubezpieczenie uczniów</a></li>
                        <li><a href="../dlaucznia/dokumenty.html">Dokumenty/druki</a></li>
                    </ul>
                </li>
                <li><img src="../../files/icons/icon-phone.png" class="navbarico"><a href="../szkola/kontakt.html">Kontakt</a></li>
            </ul>
        </nav>
            <label for="nav-toggle" class="nav-toggle-label">
                <span></span>
            </label>
    </div>`
    }
}

customElements.define('nav-bar', NavBar)

class SectMain extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<section>
        <div class="sectionMain center">
            <div class="sectionMainTitle">
                <span>I Liceum Ogólnokształcące</span>
                <div class="mainTitle">
                    <span>im. Seweryna Goszczyńskiego</span>
                </div><span>w Nowym Targu</span>
            </div>
        </div>
    </section>`
    }
}

customElements.define('sect-main', SectMain)

class LogoBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="logoSection">
        <a href="" target="_blank"><img src="../../files/logo/logo-starostwo.png" alt=""></a>
        <a href="" target="_blank"><img src="../../files/logo/logo-ore.png" alt=""></a>
        <a href="" target="_blank"><img src="../../files/logo/logo-tarcza.png" alt=""></a>
        <a href="" target="_blank"><img src="../../files/logo/logo-bip.png" alt=""></a>
        <a href="" target="_blank"><img src="../../files/logo/logo-uek.png" alt=""></a>
        </div>`
    }
}

customElements.define('logo-bar', LogoBar)

/* musi być wielkastopa bo nazwy web componentów muszą być dwuczłonowe */
class WielkaStopa extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer class="center">
        <div class="footerMain">
            <div class="footerMainLeft">
                <div class="ftrLeftSchoolName">
                    <a href="#topHeader">
                        <div class="ftrLeftSchoolLogo">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 362.35 399.79"><path d="M249.61,235.84H333v22.89H249.5s-68.33,7.63-68.33,76.84c0-69.57-68.55-76.84-68.55-76.84H29.39V235.84h83.34s68.44,5.73,68.44,73.45C181.17,241.56,249.61,235.84,249.61,235.84ZM181.17,348.1c0-67.72-68.55-83.39-68.55-83.39H62.42V399.79H299.93V264.71H249.5S181.17,280.37,181.17,348.1ZM362.35,202.34v27.54H249.61s-68.44-2.32-68.44,66.89c0-69.57-68.44-66.89-68.44-66.89H0V202.34H62.42V118.76a118.76,118.76,0,1,1,237.51,0v83.58Zm-88.17,0V112.67H274a93,93,0,0,0-185.57,0h-.22v89.67h26.57c9.53.31,50.87-2.49,66.43,62.51,15.57-63.07,53.91-61.91,65.23-62.51ZM135.49,89.94l-11.77,7.92,2.48,4L133.51,97v31.46H139V89.94Zm25,25.41a10,10,0,0,0,2.36-.28l-9.51,13.37h6.21l10.17-14.8c1.43-2.09,4.35-5.94,4.35-11.33,0-7-5.17-13-13.58-13s-13.53,6-13.53,13C147,110.12,153,115.35,160.52,115.35Zm0-21.17a8.14,8.14,0,1,1-8.14,8.13A7.93,7.93,0,0,1,160.52,94.18Zm33.55-4.9c-11.06,0-15,10.23-15,19.91s4,20,15,20,15-10.28,15-20S205.12,89.28,194.07,89.28Zm0,34.7c-7.37,0-9.52-8.19-9.52-14.79s2.15-14.79,9.52-14.79,9.51,8.19,9.51,14.79S201.43,124,194.07,124Zm48.67-9.07h-5v-25h-7.86L213.76,115.4v4.4h18.47v8.64h5.5V119.8h5Zm-22.93,0,12.42-19.58v19.58Z"/></svg>
                        </div>
                    </a>

                    <div class="ftrLeftName">
                        <b>LICEUM OGÓLNOKSZTAŁCĄCE</b><br>im. Seweryna Goszczyńskiego w Nowym Targu
                    </div>
                </div>

                <div class="ftrLeftContact">
                    <a href="">
                        <div class="ftrLeftElement1">
                            <div class="ftrLeftElement1Logo">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135.22 179.09"><path d="M67.61,0A67.69,67.69,0,0,0,2.21,84.85c0,.08,0,.15,0,.23s.26,1,.65,2.22c.09.33.2.65.3,1,.28.86.63,1.87,1,3,5,13.87,20.4,48.85,59.2,86.11a6,6,0,0,0,8.22.07C120.73,132,132.49,86.93,133,85c0-.06,0-.12,0-.17A67.7,67.7,0,0,0,67.61,0Zm53.12,84.15,0,.16c-1.83,5.82-7.85,22.55-21.89,43.4a232.71,232.71,0,0,1-31.11,37,254.82,254.82,0,0,1-30.46-36.62A194.54,194.54,0,0,1,16.24,89c-1-2.57-1.62-4.49-2-5.65a55.61,55.61,0,1,1,106.48.81ZM67.61,102.27a34.59,34.59,0,1,1,34.54-34.58A34.6,34.6,0,0,1,67.61,102.27Zm0-57.15A22.57,22.57,0,1,0,90.15,67.69,22.58,22.58,0,0,0,67.61,45.12Z"/></svg>
                            </div>
    
                            <div class="ftrLeftElement1Text">
                                34-400 Nowy Targ<br>Plac Krasińskiego 1
                            </div>
                        </div>
                    </a>

                    <a href="">
                        <div class="ftrLeftElement2">
                            <div class="ftrLeftElement2Logo">
                                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="24px" height="24px" version="1.1" style="shape-rendering: geometricPrecision; text-rendering: geometricPrecision; image-rendering: optimizeQuality; fill-rule: evenodd; clip-rule: evenodd;" viewBox="0 0 24 24" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"><path class="fil0" d="M17.25 24c-0.78,0 -1.54,-0.14 -2.3,-0.41 -3.3,-1.2 -6.38,-3.16 -8.88,-5.66 -2.5,-2.5 -4.46,-5.58 -5.66,-8.88 -0.39,-1.07 -0.5,-2.17 -0.34,-3.27 0.15,-1.03 0.55,-2.03 1.16,-2.9 0.6,-0.86 1.41,-1.58 2.34,-2.08 0.99,-0.53 2.06,-0.8 3.2,-0.8 0.35,0 0.66,0.25 0.73,0.59l1.18 5.5c0.05,0.24 -0.02,0.5 -0.2,0.68l-2.01 2.01c1.89,3.78 4.97,6.86 8.74,8.75l2.02 -2.01c0.18,-0.18 0.44,-0.25 0.68,-0.2l5.5 1.18c0.34,0.07 0.59,0.38 0.59,0.73 0,1.14 -0.27,2.21 -0.8,3.2 -0.5,0.93 -1.22,1.74 -2.08,2.34 -0.87,0.61 -1.87,1.01 -2.9,1.16 -0.33,0.05 -0.65,0.07 -0.97,0.07l0 0zm-11.08 -22.47c-1.5,0.17 -2.83,0.95 -3.72,2.22 -0.99,1.41 -1.22,3.16 -0.63,4.78 2.31,6.37 7.28,11.34 13.65,13.65 1.62,0.59 3.37,0.36 4.78,-0.63 1.27,-0.89 2.05,-2.22 2.22,-3.72l-4.47 -0.96 -2.1 2.1c-0.23,0.23 -0.57,0.29 -0.85,0.15 -4.46,-2.1 -8.07,-5.71 -10.17,-10.17 -0.14,-0.28 -0.08,-0.62 0.15,-0.85l2.1 -2.1 -0.96 -4.47z"></path></svg>
                            </div>
    
                            <div class="ftrLeftElement2Text">
                                Sekretariat<br>+18 26 62 955
                            </div>
                        </div>
                    </a>

                    <a href="">
                        <div class="ftrLeftElement3">
                            <div class="ftrLeftElement3Logo">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 247.2 175"><path d="M247.2,8.31A8.31,8.31,0,0,0,238.9,0H8.3A8.31,8.31,0,0,0,0,8.31V166.69H0a8,8,0,0,0,.13,1.39s0,.11,0,.16a8.08,8.08,0,0,0,.37,1.3,1.46,1.46,0,0,0,.07.19A7.52,7.52,0,0,0,1.18,171a1.74,1.74,0,0,1,.11.18,9,9,0,0,0,.84,1.11l.07.09.11.1c.11.12.23.24.35.35l.27.24c.12.1.24.2.37.29l.3.23.39.24.32.2.47.23.27.13a8.38,8.38,0,0,0,2.41.62A4.52,4.52,0,0,0,8,175l.32,0H238.9l.4,0,.44,0a8.46,8.46,0,0,0,2.41-.62,2.44,2.44,0,0,0,.28-.14l.46-.22.33-.2.37-.24a3.55,3.55,0,0,0,.31-.23c.12-.1.25-.19.36-.29s.18-.16.28-.24l.35-.35.11-.1.06-.09a9,9,0,0,0,.84-1.11A1.74,1.74,0,0,0,246,171a8.51,8.51,0,0,0,.6-1.21,1.46,1.46,0,0,0,.07-.19,9.25,9.25,0,0,0,.37-1.3c0-.05,0-.11,0-.16a8,8,0,0,0,.13-1.39h0ZM124,98,30.5,16.62H216.82ZM84.1,85.29,16.59,147.71V26.54Zm12.6,11,21.89,19a8.28,8.28,0,0,0,10.91,0l21.34-18.71,66.84,61.8H29.52Zm66.69-10.69L230.6,26.63V147.71Z"/></svg>
                            </div>
    
                            <div class="ftrLeftElement3Text">
                                Adres E-mail<br>lo@goszczynski.nowytarg.pl
                            </div>
                        </div>
                    </a>
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
    </footer>`
    }
}

customElements.define('wielka-stopa', WielkaStopa)
