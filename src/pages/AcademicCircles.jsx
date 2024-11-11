import React, { useState, useRef, useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/theme.jsx';
import styles from './AcademicCircles.module.css';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer';

const AcademicCircles = () => {
  const [{ themeName, toggleTheme, isContrast, toggleContrast }] = useContext(ThemeContext);
  return (
    <>
      <PageNav />
      <main data-theme={isContrast ? 'contrast' : themeName === 'dark' ? 'dark' : 'light'}>
        <div className={styles.main}>
          <h1>Poznaj nasze koła naukowe i znajdź coś dla siebie</h1>
          <div className={styles.container}>

            <div className={styles.card}>
              <h2>Studenckie Koło Naukowe Akustyków "SONIC"</h2>
              <p>Niektórzy twierdzą, że SONIC to najgłośniejsze koło naukowe na Naszej Uczelni. Inni - wręcz przeciwnie - uważają, że nikt nie zna się na ciszy tak jak my. Prawda - jak to zwykle bywa - leży gdzieś pośrodku. Jedno jest pewne - jesteśmy grupą ludzi żywo zafascynowanych akustyką i kochających dźwięk.</p>
              <p>Z nami będziecie mogli zgłębić tajniki fal akustycznych, poeksperymentować z ultradźwiękami lub poprowadzić ciekawe badania w komorze bezechowej. Jeśli chcielibyście nas spotkać - możecie nas złapać w pokoju 213 Katedry Akustyki lub w pokoju 10 przy szklanym łączniku (obok pokoju Samorządu).</p>
              <p>Zajrzyjcie na nasze media społecznościowe</p>
              <ul>
                <li>nstagram: sknasonic</li>
                <li>Facebook: @sknasonic</li>
                <li>Możecie skontaktować się z nami także mailowo: skna.sonic@gmail.com</li>
              </ul>
              <p>Aby wstąpić do naszego Koła, wystarczy jedynie że wypełnicie Kartę Członkowską (znajdziecie takową w pokoju 213 Katedry Akustyki, możemy Wam ją również podesłać mailowo do samodzielnego wydruku - wtedy napiszcie do nas). Po krótkim spotkaniu i rozmowie z naszym Prezesem (może się odbyć przy pysznej kapuczinie lub dobrej herbatce), ten wpisze Was na listę Członków Koła.</p>

              <p>Opiekun: mgr Jakub Bondek, jakub.bondek@amu.edu.pl</p>
              <p>Zarząd</p>
              <ul>
                <li>Prezes Marianna Jarzombek</li>
                <li>Wiceprezes Jakub Dumanowski</li>
                <li>Sekretarz Julia Wesołowska</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h2>Astronomiczne Koło Naukowe</h2>
              <p>Astronomiczne Koło Naukowe UAM zrzesza studentów Uniwersytetu im. Adama Mickiewicza w Poznaniu interesujących się astronomią. Na spotkaniach Koła wymieniamy się wiedzą i ciekawostkami astronomicznymi, a także zapraszamy do wygłoszenia prelekcji gości zajmujących się rozmaitymi dziedzinami astronomii. W ramach naszej działalności uczestniczymy w organizacji wydarzeń popularnonaukowych, a raz w semestrze delegaci z naszego koła uczestniczą w Konferencji Studenckich Astronomicznych Kół Naukowych KSAKN.
Jesteśmy aktywni na portalu Facebook.</p>
              <p>Kontakt: aknuam.zarzad@gmail.com</p>
              <p>Opiekun: prof. UAM dr hab. Wojciech Dimitrow - dimitrov@amu.edu.pl</p>
              <p>Zarząd</p>
              <ul>
                <li>Prezes: Joanna Pietrucha</li>
                <li>Zastępca Prezesa: Michał Pawłowski</li>
              </ul>
              <p>Storna <a href="http://www.astro.amu.edu.pl/pl/studia/kolo-naukowe/" target='_blank'>www</a></p>
            </div>
            <div className={styles.card}>
              <h2>Studenckie Koło Naukowe Biofizyków Molekularnych "NEUTRINO"</h2>
             <p>Studenckie Koło Naukowe Biofizyków Molekularnych „Neutrino” rozpoczęło swoją działalność w marcu 2022 roku i jest jednym z najmłodszych kół naukowych na Wydziale Fizyki UAM, które zrzesza pełnych entuzjazmu i energii studentów z pasją do biofizyki molekularnej.</p>
              <p>Jednym z naszych głównych przedsięwzięć jest prowadzenie własnych, nowatorskich projektów badawczych. Obecnie skupiamy się na odkrywaniu skomplikowanych oddziaływań chlorofilu w roślinnych i glonowych białkach fotosyntetycznych. Wykorzystując techniki spektroskopii optycznej badamy fascynujące zjawiska absorpcji i emisji światła w tych złożonych układach biologicznych. Ponadto, z dumą informujemy, że z powodzeniem zaadaptowaliśmy komercyjny spektrofluorymetr do przeprowadzania pomiarów anizotropii fluorescencji, poszerzając tym samym obszar naszych potencjalnych badań. Część wyników naszej pracy mieliśmy okazję zaprezentować na I Poznańskiej Konferencji Młodych Fizyków, która odbyła się na Wydziale Fizyki UAM w maju 2022 roku.</p>
              <p>Nasza działalność wykracza jednak dalece poza granice laboratorium. Niezmiernie ważne jest dla nas również popularyzowanie fizyki i biofizyki, dlatego aktywnie angażujemy się w różne działania edukacyjne mające rozbudzić ciekawość i pogłębić zrozumienie zjawisk zachodzących na poziomie molekularnym. Jednym z naszych najważniejszych osiągnięć na tym polu jest udział w Poznańskim Festiwalu Nauki i Sztuki - w roku 2023 nasze stoisko zatytułowane „Kiedy fizyka spotyka biologię” odwiedziła ponad setka ciekawych świata młodych ludzi, którzy mogli samodzielnie zrealizować przygotowane przez nas eksperymenty.</p>
              <p>Jednak "Neutrino" to nie tylko praca naukowa, ale także radość z życia! Organizujemy wycieczki oraz wyjazdy naukowe połączone ze zwiedzaniem, które stanowią ciekawą odskocznię od naszych codziennych studenckich obowiązków. Wiosną zorganizowaliśmy I Nocny Marsz Biofizyka zatytułowany „Do ujścia Różanego Potoku”. Ta 15-kilometrowa wędrówka nie tylko pozwoliła nam odkryć piękne przyrodniczo tereny w obrębie Poznania, ale także stworzyła doskonałą okazję do nieformalnych dyskusji naukowych i integracji między członkami naszego koła. W planach mamy również wizytę w Katedrze Biofizyki UMCS w Lublinie, podczas której chcemy zapoznać się z kierunkami badań i bazą aparaturową tej jednostki naukowej oraz możliwościami potencjalnej współpracy. Na pewno nie zabraknie również czasu na poznanie uroków Lublina.</p>
              <p>Studenckie Koło Naukowe Biofizyków Molekularnych „Neutrino” to droga do nowych możliwości badawczych, wydarzeń naukowych i ekscytujących przygód. Skontaktuj się z nami już dziś i wyrusz w niezwykłą drogę odkrywania tajemnic mikroświata i osobistego rozwoju.</p>
              <p>Skład zarządu:</p>
              <ul>
                <li>Prezes - Karolina Mielnik</li>
                <li>Wiceprezes - Krzysztof Pakuła</li>
                <li>Sekretarz - Olga Stężycka</li>
              </ul>
              <p>Opiekun: dr Wojciech Giera - w_giera@amu.edu.pl</p>
            </div>
            <div className={styles.card}>
              <h2>Studenckie Koło Naukowe "Errno"</h2>
              <p>Jesteśmy zainteresowani technologią, komputerami, wszystkim związanym z branża IT i nie tylko. Posiadamy chęć do nauki, próbujemy zrobić rzeczy które nam przyjdą na myśl, niezależnie od środowiska, języka programowania, silnika, programu w jakim mamy pracować jeżeli wpadniemy na pomysł próbujemy znaleźć jak najwygodniejsze narzędzie do jego zbudowania. Chcemy uczestniczyć w jak największej ilości konkursów, game jamów, itp, żeby uzyskać znajomości, doświadczenie oraz zbudować CV godne do prezentowania ale najważniejsze to przyjemność wynikająca z rozwoju i dobrej zabawy.</p>
              <p>Kontakt: aluerrno@gmail.com</p>
              <p>Opiekun: </p>
              <ul>
                <li>prof. UAM  dr hab. Karol Bartkiewicz</li>
                <li>mgr Szymon Krakowski</li>
              </ul>
              <p>Skład:</p>
              <ul>
                <li>Nikodem Panknin</li>
                <li>Miłosz Klim</li>
                <li>Jakub Kwieciński</li>
              </ul>
              <p>Strona <a href="https://studenckie-kolo-naukowe-errno.github.io/" target="_blank">www</a></p>
              <p><a href="https://www.facebook.com/Errno404" target="_blank">Facebook</a></p>
            </div>
            <div className={styles.card}>
              <h2>Studenckie Koło Naukowe Fizyków "FUSION"</h2>
              <p>Studenckie Koło Naukowe Fizyków „Fusion”, jest najstarszą organizacja na wydziale- podmiotem z wieloletnim doświadczeniem, zrzeszającym studentów z wszystkich kierunków na Wydziale Fizyki. Znaczną część działalności koła skupia się na popularyzacji nauki. Sporo pracy wkładamy w przygotowanie zajęć, które były by ciekawe i klarownie wyjaśniały problemy badawcze. Nasza działalność jest świetną przestrzenią do dopracowywania warsztatu nauczycielskiego, a naukowa część koła zawiera całą charakterystykę pracy badawczej fizyka w mikroskali, seminaria oraz spotkania z naukowcami. Zrealizowaliśmy mnóstwo projektów badawczych, a każdy nowy pomysł pomożemy zrealizować. Rozwiązując różne wyzwania badawcze i edukacyjne, staliśmy się liderem w otrzymywaniu dofinansowań z Poznańskiego Parku Naukowego Technologicznego, współpracujemy z innymi instytucjami i kołami (połączyliśmy nawet fizykę z historią) oraz uczestniczymy w piknikach, festiwalach( Festiwal Nauki i Sztuki, Pyrkon, Noc Naukowców), wystawach i konferencjach. Regularnie wykonujemy pokazy w szkołach.</p>
              <p>Jeśli chcesz poszerzyć swoje horyzonty zapraszamy do nas.</p>
              <p><a href="https://www.fizyka.amu.edu.pl/__data/assets/pdf_file/0018/406701/Deklaracja-Fusion.pdf" target="_blank">Wniosek</a> o dołączenie do grona członków Studenckiego Koła Naukowego Fizyków Fusion. Wniosek należy przekazać opiekunowi koła bądź członkom.</p>
              <p>Kontakt</p>
              <ul>
                <li>sknf.fusion@gmail.com, sknf@amu.edu.pl</li>
                <li>Facebook: https://www.facebook.com/fusionUAM</li>
                <li>Instagram: https://www.instagram.com/sknf_fusion/</li>
                <li>Tiktok: https://www.tiktok.com/@tiktokowa_fizyka</li>
              </ul>
              <p>Opiekun: dr Magdalena Grajek - grajek@amu.edu.pl</p>
              <p>Zarząd:</p>
              <ul>
                <li>Prezes: Bartłomiej Kulas</li>
                <li>Wiceprezes: Miłosz Wiśniewski</li>
                <li>Skarbnik: Agnieszka Skubała</li>
                <li>Sekretarz: Tymoteusz Braciszewski</li>
              </ul>
              <p>Strona<a href="http://sknf.amu.edu.pl/" target="_blank">www</a></p>
            </div>
            <div className={styles.card}>
              <h2>Studenckie Koło Naukowe Optyki i Optometrii</h2>
              <p>Jako koło naukowe zajmujemy się popularyzacją nauki w zakresie optyki i optometrii. Organizujemy badania przesiewowe wzroku w placówkach edukacyjnych i społecznych. Przeprowadzamy pokazy naukowe dla dzieci pokazując doświadczenia ze świata optyki i jednocześnie prezentując jak prawidłowo należy dbać o wzrok. Na naszych social mediach można również znaleźć posty edukujące m.in. o tym czym są wady wzroku czy w jaki sposób pielęgnować okulary. Aktywnie bierzemy udział w konferencjach optyczno-optometrycznych organizowanych na terenie całej Polski, gdzie zaznajamiamy się z ekspertami z naszej branży i bierzemy udział w licznych szkoleniach, czy to pogłębiających naszą wiedzę zawodową, jak i tą z zakresu kompetencji miękkich.</p>
              <p>Nasze koło powstało już w 2013 przy Laboratorium Fizyki Widzenia i Optometrii na Wydziale Fizyki UAM a jego pierwszym opiekunem był prof. dr hab. Ryszard Naskręcki. W okresie pandemii miało przerwę w większej działalności. W roku akademickim 2021/2022 zostało wznowione w zasadzie od zera i od razu ruszyło z kopyta. Na początku liczyło 11 członków. Szybko jednak osiągnęliśmy ich ponad 30 z wszystkich roczników studentów Optyki i Optometrii na Wydziale Fizyki - pomimo, że liczebność studentów na tym kierunku nie należy do najwyższych, czyniąc nasze koło największym na wydziale. Obecnie naszym opiekunem naukowym jest dr Zenon Woźniak.</p>
              <p>Opiekun: dr Magdalena Grajek - grajek@amu.edu.pl</p>
              <p>Zarząd:</p>
              <ul>
                <li>Prezes: Zuzanna Pałgan</li>
                <li>Wiceprezes: Hanna Pienierska</li>
                <li>Sekretarz: Julia Zaborowska</li>
                <li>Skarbnik: Julia Sikorska</li>
              </ul>
              <p>Instagram: https://www.instagram.com/knoo.uam/?hl=am-et</p>
            </div>
            <div className={styles.card}>
              <h2>Studenckie Koło Naukowe Fizyków Medycznych w Radioterapii "RADIUS"</h2>
              <p>Koło Naukowe Fizyków w Radioterapii „Radius”, działa na Wydziale Fizyki od ponad 5 lat, zrzesza studentów studiujących biofizykę i fizykę medyczną. Działalność koła naukowego polega na łączeniu pracy badawczej z kliniką. Staramy się odpowiadać na pytania studentów dotyczące rozwoju swojej przyszłej kariery zawodowej i naukowej. Organizujemy wyjazdy naukowe. Pomagamy w organizacji stażów, wolontariatów i praktyk. W celu poszerzenia horyzontów swojej wiedzy aranżujemy konferencje, seminaria i webinaria. W ramach działalności koła edukujemy społeczność w tematach około onkologicznych. Prezentujemy aspekty związane z pracą Fizyka medycznego. Naświetlanie wiązkami promieniotwórczymi (radioterapia), umieszczanie źródeł promieniowania w ciele pacjenta (brachyterapia), planowanie przejścia wiązki przez tkanki ludzkie (planowanie leczenia) oraz odkrywanie nowych metod dostarczania leków i obrazowania (nanotechnologia). Nasze koła stawia na integrację środowisk fizycznych, biologicznych i chemicznych.</p>
              <p>Prężnie działamy i chętnie nawiązujemy współpracę (Wielkopolskie Centrum Onkologii, Polskie Towarzystwo Fizyków Medycznych).</p>
              <p><a href="https://www.fizyka.amu.edu.pl/__data/assets/pdf_file/0023/406715/Deklaracja-Radius.pdf" target="_blank">Wniosek</a> o dołączenie do grona członków Studenckiego Koła Naukowego Fizyków Fusion. Wniosek należy przekazać opiekunowi koła bądź członkom.</p>
              <p>Kontakt:</p>
              <ul>
                <li>radiusfizykamedyczna@gmail.com</li>
                <li>Facebook: https://www.facebook.com/kolo.naukowe.radius</li>
                <li>Instagram: https://www.instagram.com/kolo_radius_uam/</li>
              </ul>
              <p>Prezes: Iga Strzelczak</p>
              <p>Wice: Adrianna Kędziora</p>
              <p>Sekretarz: Iga Sienkiewicz</p>
              <p>Prowadzący sekcje ds marketingu: Aleksandra Dudkiewicz</p>
              <p>Prowadzący sekcje ds finansów: Maja Chocaj</p>
              <p>Opiekunowie:</p>
              <ul>
                <li>prof. dr hab. Julian Malicki - julian.malicki@wco.pl</li>
                <li>dr Marta Kruszyna-Mochalska</li>
                <li>mgr. Kinga Graczyk</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default AcademicCircles