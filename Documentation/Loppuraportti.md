# Loppuraportti
* Päivitetty 12.12.2019

-----

[Johdanto](#johdanto)

[Kuinka onnistuttiin](#kuinka-onnistuttiin)

[Toteutusprosessin arvionti](#toteutusprosessin-arviointi)

[Ympäristön ja teknologioiden arviointi](#ymp%C3%A4ristön-ja-teknologioiden-arviointi)

[Projektin arviointi](#projektin-arviointi)

[Lopputuloksen tulevaisuus](#lopputuloksen-tulevaisuus)

-----

# Johdanto
Toteutettiin mobiiliprojekti Jyväskylän ammattikorkeakoulun IT-instituutin järjestämän TTOW0635 Mobile Project ‑opintojaksolla,
johon taustatutkimusta tehtiin TTOW0615 Mobile Application Development -opintojaksolla.

Projektin aiheena oli ViroReact teknologialla toteutettu Fireset-niminen AR/VR peliympäristö, jossa voi pelata sille tehtyjä pelejä, yksin tai muiden ihmisten kanssa.


# Lopputulos
Saatiin toteutettua ViroReactilla AR Tikki-korttipeli, jota research assignmentin alussa jo suunnittelimme.
Saimme toteutettua myös päävalikon Firesettiin, josta voisi valita eri pelejä pelattavaksi.
Tämän lisäksi saimme tehtyä myös Playgroundsin, jossa käyttäjä pystyy leikkimään AR ja VR ympäristöjen kanssa.

Projektiin käytettiin yhteensä 261h, jotka jakaantuivat tiimiläisille seuraavasti:

| Nimi | Tunti määrä |
|:-:|:-:|
| Aaltonen Eetu   | 96h |
| Kopakkala Leevi | 91h |
| Rajala Ilari    | 74h |


## Kuinka onnistuttiin
Käytettäviin resursseihin ja tiukkaan aikatauluun nähden projektimme oli onnistunut sillä saimme toteutettua toimivan AR demon aikaiseksi, jossa pystyy pelaamaan Tikki-korttipeliä.
Opimme hyvin paljon uutta mobiili aplikaatio kehittämisestä, sekä AR teknologiasta ja sen implementoinnista.

## Mikä ei onnistunut suunnitellusti
QR-koodin implementointi research assignmentissa ajatellulla tavalla jäi pois yhteensopimattoman React version takia.


# Toteutusprosessin arviointi
Projekti toteutettiin hyvin vapaamuotoisesti sen jälkeen, kun olimme saaneet alustavan projektisuunnitelman tehtyä.
Tiimiläiset tekivät itsenäisesti projektia eteenpäin omien taitojensa ja aikataulunsa mukaisesti, kuitenkin kokoajan kommunikoiden keskenään, jotta työtaakkaa osattiin jakaa.


# Ympäristön ja teknologioiden arviointi
**ViroReact**

Plussat
Nopea ja helppo tapa päästä aloittamaan AR ja VR devaaminen.


Miinukset
Pakettiriippuvuudet (vanhempi node versio)
Debuggaaminen on vaikeaa


# Projektin arviointi
Projekti oli onnistunut vaikkakin aikataulu oli hyvin kiireinen loppuvuoden kurssien palautusten kasautumisen vuoksi, mutta tiimi sai tarpeeksi aikaa käytettyä,
jotta lopputulos olisi toimiva demo. Projekti suunniteltiin alussa hyvin ja tausta tutkimus tehtiin research assignmentissa, jonka pohjalta oli helpompi lähteä toteuttamaan projektia.


# Lopputuloksen tulevaisuus ja jatkokehitys ideat
Fireset projektia voisi lähteä halutessaan vielä jatkokehittämään, sillä siinä on täysin toimiva päävalikko, peli ja Playground.
Pelejä, erillaisia Playgrounds scenejä ja ominaisuuksia, kuten mainoksia, voisi helposti lisätä projektiin. 

**Tikki:**
* Vakaampi WebSocket server ja poikkeusten käsittely
* Pistelaskuri ja voittoehdot
* Chat-ominaisuudet
* Clientin yhteyden katkeamisen käsittely pelin sulkeutuessa/kaatuessa

**Playground:**
* Laajempi valikoima
* Online toimintoja ns. "marketti"
* Kokonaisia pelejä



