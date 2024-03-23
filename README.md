# Weekly Nerd
My repo for my Weekly Nerd blog, a place to share and store my insights from these guest speakers from the minor Web Design and Development 2024.
**NOTE: WILL BE MOVED LATER TO A WEBSITE**, storing in ```README.md``` for now!

To start off, I've always been fascinated by the idea of running a blog but I wanted to document something specific so I could watch myself grow in that aspect. I never quite found the thing I wanted to document for it, however. Sure, I could do it about art, but I never drew enough to do so and it didn't quite excite me. However, as we've been tasked by the minor Web Design and Development to make a blogsite where we document the Weekly Nerd lectures*, this seemed like the perfect opportunity.

Now, I could do this plain and simple, vanilla code: make a certain strict template for each blog page in CSS and hold onto that. But the thing is, that I just don't want to. I want to learn something new, to challenge myself as as developer.

For this blog, I've decided to try to load in the pages dynamically using Express.js and EJS. Wish me luck.

*The Weekly Nerd is a (you guessed it) weekly lecture that us developers get during the minor Web Design and Development at the Amsterdam University of Applied Sciences. We're meant to document our notes from it, and reflect on it: what did it make us think about? What have we learnt from it? Is there anything we've learnt that we'll take with us into the workfield? 

## Index
- [Killian Valkhof: Stop Using CSS For That](#Killian-Valkhof)
- [Fenna de Wilde](#Fenna-de-Wilde)
- [Eerste reflectie] leerdoelen etc.

## Killian Valkhof
07/02: Stop Using JavaScript for That: Moving Features from JavaScript to CSS & HTML.

### Killian
- Onderdeel van het Electron governance team waarmee je met web development kennis desktop applicaties kunt maken.
- Met Electron maakt hij ook Polypane!

- De browser kan meer dan jij kan met js.
- Volgende keer dat je denkt dat er ergens javascript voor nodig is, check dan of dit ook echt (nogsteeds) waar is.


### The Rule of Least Power
- De Regel van Minste Kracht is een fundamenteel principe in webontwikkeling, waarbij de keuze voor programmeertalen gebaseerd is op hun mate van kracht. HTML kan het minst, dus daar begin je mee. Als het met HTML niet lukt, ga dan over in CSS, en als het dan niet lukt, kies dan pas voor JavaScript.
  - JavaScript is het meest breekbaar.
  - Het is makkelijk om met JavaScript grote bestanden te bouwen => betekent langere laadtijden
  - Als je JavaScript breekt, breekt je hele website: dit is minder waarschijnlijk bij HTML/CSS.

**Het belang van de browser(makers)**
Browsermakers zijn actief bezig met het luisteren naar de behoeften van ontwikkelaars en implementeren functies die voorheen handmatig werden gebouwd. Innovaties binnen HTML en CSS verminderen de afhankelijkheid van overmatig gebruik van JavaScript. Door nauw samen te werken met browsers, kunnen ontwikkelaars profiteren van verbeterde prestaties en nieuwe mogelijkheden zonder zwaar te leunen op JavaScript.

**Ook belangrijk..**
Oudere JavaScript-code kan nog steeds functioneren, maar het is belangrijk om regelmatig te evalueren of er modernere en betere benaderingen beschikbaar zijn. Onderzoek bij het herbouwen van iets dat eerder is gemaakt, of er verbeterde methoden zijn om hetzelfde resultaat te bereiken.

### LIVE DEMO
**Custom toggles/custom switches**
- Veel designers willen graag een switch-knop hebben omdat het mooi is. dit moet je inbouwen als developer. I.p.v. ‘React Switch’ te googelen en de eerste te pakken, kan je het ook doen met de checkboxes. Je hoeft dan geen listeners toe te voegen met JavaScript en hoeft niet te denken aan toegankelijkheid omdat de browser het allemaal voor je doet.

**Replaced content: Input systemen**
- Verschillende besturingssystemen hebben verschillende vormen qua input elementen. Input elementen zijn hierdoor niet erg aanpasbaar qua stijl, browserontwikkelaars werken hier aan.
- Met ```appearance: none``` zeg je dat je niet de checkbox wilt van de OS, maar je stijlt het zelf. Nu kun je gebruik maken van een ```pseudo-element```: een normaal ```input``` element kan dit niet gebruiken maar met ```appearance: none``` wel. ```::before``` is de ‘thumb’ (cirkeltje), en ```::after``` is de achtergrond.
- Je kunt nu ook ```:checked {}``` gebruiken om te stijlen dat het gechecked is, bijv
  ```css
  ::checked { background-color: green; }

  ::checked::before { transform: translateX(10px)}.
  ```
  
 _Accessibility_
voor screenreaders: ```input:focus``` werd vroeger gebruikt en ```outline:none``` ook, maar omdat het een raar vierkant dotted lijntje veroorzaakte vonden designers het niet leuk. 
Ondertussen hoeven we geen ```:focus``` meer te gebruiken maar ```input:focus-visible```, dit is ALLEEN voor interactie dat _niet_ met een muis is! Zo kun je stijlen hoe het eruit komt te zien als je een screenreader gebruikt.

Wil je geen focus style voor muis gebruikers? Gebruik dan ```outline-color: transparent```; zo zeg je niet dat de outline er niet is. Sommige mensen gebruiken high-contrast mode, en dan is het voor hen nogsteeds zichtbaar. 

Sinds een aantal weken kun je in safari doen ```input[type=“checkbox” switch]``` Dit is geen web standaard. (Je kunt niet zeggen [type=“switch”] i.v.m. backwards compatibility).
Je hebt ook ```input::thumb {}``` en ```input::track{}``` om het te stijlen.

**Easy dropdown without JavaScript**
[**```<datalist>``` element with a nested ```<option>```.**](https://codepen.io/roza-m/pen/QWoYKyj)

**Ingebouwde Color picker in HTML/CSS**
```html
input[type=“color”]
```
```css
input {
color-scheme: dark;} de browser kan het hele scherm af om kleuren te picken (colorpicker). met color-scheme kun je ook alle form-elementen in dark-mode geven.
```
<!-- in-page transitions: te snel. desorienterend: geven geen gevoel van hoe ver je omlaag bent gescrolled door een navigatie. vroeger deden we dit met jquery. -->


<!-- @media (
prefers-reduced-motion: no-preference ) {
html {
scroll-behavior: smooth;
}}

standaard: geen smooth scroll. pas als aangegeven dat de browser het ondersteunt en het wilt, dan zet je smooth-scrolling aan. -->
<!--
#my-target {
scroll-margin/padding-top:100px;
}

#my-target:target {
outline: 10px solid deeppink;
transition: 1s ease-in-out outline;
} hiermee laat je degene weten dat dit de plek is waar de user moet zijn. -->

**Position fixed/sticky**
Een ```sticky``` element is pas 'fixed' wanneer je een ```top/left/right/bottom``` geeft. Als het 'parent' element van het scherm af is, neemt de parent het sticky element mee, dus het blijft dan niet middenin je scherm staan.
Dit betekent dat je een 'fixed' element (sticky dus) wel kunt stijlen.
```css
div {
position: relative; 
}

div > .sticky {
position: sticky;
top: 50%;
}
```



<!-- carousels
scroll-snap-type zet je op de parent. 
scroll-snap-align zet je op de child.

oh snap video.
youtu.be/34zcWFLCDIc

accordions and modals
details>summary&p
je kunt ook doen ```<details open>``` dan blijft ie open. edit het vormpje van de driehoek met summary::marker {font-size: 1.5rem;} content:””; en [open]summary::marker. let erop dat ze er meerdere kunnen openen. dit is niet een default.-->


**dialog**
Nieuw HTML element wat je kan gebruiken om je gebruiker keuzes te laten maken in de form van een ```modal```. 
Je kon alert, confirm & prompt gebruiken in JavaScript, maar deze onderbreken andere JavaScript functies. De modal is geen browser-actie, dus het is onderdeel van de pagina en hindert geen JavaScript. Je voegt een form toe aan de dialog. Je hebt nu ook ```method=“dialog”```
[Artikel met meer informatie hierover](https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop)

```html
<dialog>
  <form action="" method="dialog"></form>
<button onclick="$$('dialog').showModal()”>
  Show the dialog
</button>
</dialog>
```
Wat stijling hierbij:
```css
button {
  font-size: 1.2rem;
  padding: 5px 15px;
}

dialog::backdrop {
  background-color: #fff5;
  backdrop-filter: blur(4px)
}
```

**Container queries**
Werken als media queries, maar je kijkt niet naar width/height van browser: je kijkt naar de width/height van het omliggende element.


**Parent selector**
```:has()``` werkt als volgt: als mijn formulier een element met het ```id``` other heeft, en die is checked, kijk dan naar #other-text en geef het display:block;
Zie onderstaande code voor een voorbeeld, en/of lees dit [Polypane artikel met meer informatie](https://polypane.app/blog/where-is-has-new-css-selectors-that-make-your-life-easier/)
```css
/* Als formulier #other is gecontroleerd, stijl #other-text */
form #other:checked #other-text {
  display: block;
}

/* Optioneel: verberg #other-text standaard */
#other-text {
  display: none;
}
```

**Field-sizing**
https://polypane.app/blog/field-sizing-just-works/
input elementen hebben een vaste breedte. soms wil je een input die meeschaalt. werkt in chrome: 
``` css
input {
field-sizing: content;
}
/* dit is altijd inline-block;
gebruikt hier als je een width geeft een min/max-width */

**textarea **{
field-sizing: content;
}
// dit is display: block;
```

**Masonry layout**
Bestaat lang in Firefox. Dit jaar komt er een nieuwe versie van in alle browsers.
- Je kunt een grid maken: grid-template-rows:masonry; waarmee je zegt tegen de browser: ‘vul het maar op!’
- Je kunt de browser vertellen in welke richting het grid moet zijn (row/grid)
smashingmagazine.com/native-css-masonry-layout-css-grid/
- [Een artikel over masonry grids]()
```css
.container {
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: masonry;
}
```


<!-- komt in de toekomst: werkt nog niet.
<selectlist>
	<option></option>
	<option></option>
	<option></option>
</selectlist>

selectlist [popover] {}
selectlist::part(button) {

}

scroll-driven animations
zitten in chrome. vervangen alle libraries die je gebruikt om aan de hand van de scrolpositie iets te laten gebeuren

bram.us/2023/02/12/scroll-driven-animations-cover-flow-2022-10-06-full-stack-europe/-->


### Reflectie
Killian liet heel veel CSS properties zien waarvan ik helemaal geen idee had dat ze bestonden, en liet ook veel weten over dingen waarmee browser developers mee bezig zijn, en dit maakt me enthausiast om deze dingen bij te houden. Ik had geen idee hoe krachtig CSS eigenlijk kon zijn, en ik heb gemerkt, ook in de korte tijd na zijn weekly nerd presentatie, dat ik hier steeds bewuster van ben wanneer ik iets codeer: ik kijk altijd eerst of het misschien in CSS kan. De quote ```Once your learn something, you don't learn it again``` is me hierdoor ook erg bijgebleven. 

Al gelijk na zijn presentatie heb ik geexperimenteerd met bijvoorbeeld de container widths/height units, en ik merkte dat ik niet de enige was; ook teamleden tijdens WAFS probeerde dit en andere methoden waarover hij verteld heeft.

Via Github Student kan ik toegang krijgen tot een trial versie van zijn web browser voor developers, Polypane, en dit ga ik ook zeker uitproberen.

***

### Fenna de Wilde
14/02

**Fenna de Wilde**
- Creative front end developer
- Momenteel werkend bij Bakken en Baeck
- Land of Ride (nice inspo website).
- Heeft gewerkt bij Phantom (cryptocurrency)
- Haar 'setup':
  - Emotion: CSS-in-JS library
  - Vercel for deploying
  - Sanity CMS
  - React
  	- Framer motion als animatie library voor React
 	- React-focus-lock: Beheert de focus binnen een opgegeven bereik in een React-applicatie, zoals een modal venster, om de focus te beperken voor toegankelijkheid.
  	- React-aria-components: Een library met toegankelijke React-componenten die voldoen aan ARIA-standaarden voor het bouwen van inclusieve webapplicaties. 

**Fenna, Phantom en toegankelijkheid** 
- Toegankelijkheid was geen eis maar was de eigen motivatie van Fenna
- In het professionele leven word toegankelijkheid niet serieus genomen en er wordt overheen gekeken. Esthetiek en vloeiende animaties krijgen vaak alle aandacht en prioriteit.

**Wat ze altijd _in ieder geval_ meeneemt in haar werk**
- Focus state voor keyboard users -> ```:focus-visible.```
  - ```:focus-visible``` doet het alleen met een keyboard focus of iets dat niet met touch input te maken heeft, zoals bijv in JavaScript focus aanroepen
- aria-attributes
- toegankelijke carousels
- focus guards en esc key configuratie voor modals en overlays
- goede kleurcontrasten, lettergroottes en lijnlengtes
  - Hiervoor gebruikt zij Lighthouse audit: een kleurcontrast checker.
  - Ook in DevTools krijg je een waarschuwing als het contrast niet goed genoeg is.

**Aria-attributes: deep dive**
1. ```aria-controls```: Dit attribuut wordt gebruikt om de relatie tussen twee elementen aan te geven waarbij het ene element controle heeft over het andere. Het element dat de aria-controls heeft, beïnvloedt of toont het gecontroleerde element. Dit kan handig zijn voor bijvoorbeeld tabbladen, waar één tabblad de inhoud van een ander tabblad controleert.
2. ```aria-live```: Dit attribuut wordt gebruikt om aan te geven hoe dynamische veranderingen in de inhoud van een element moeten worden aangekondigd aan screenreaders. Het heeft drie waarden:
	- ```off```: Er worden geen automatische aankondigingen gedaan.
	- ```polite```: Aankondigingen worden gedaan als er een natuurlijke onderbreking in de spraak van de screenreader is.
	- ```assertive```: Aankondigingen worden onmiddellijk gedaan, zelfs als er sprake is van actieve spraak. (Deze vindt Fenna best heftig en heeft ze ook nooit gebruikt/hoeven gebruiken).
3. ```aria-atomic```: Dit attribuut werkt samen met ```aria-live```. Als ```aria-atomic``` is ingesteld op ```true```, betekent dit dat de gehele inhoud van het gecontroleerde element moet worden beschouwd als één enkele wijziging. Zonder ```aria-atomic``` zou alleen de gewijzigde informatie worden aangekondigd.
 	 - In het voorbeeld wat Fenna heeft gegeven wordt ```aria-live``` gebruikt om aan te geven dat dynamische veranderingen onmiddellijk moeten worden aangekondigd aan screenreaders. Dit is belangrijk in situaties waarin de inhoud van een element (bijvoorbeeld een score) dynamisch kan veranderen, en ```aria-atomic``` wordt mogelijk gebruikt om ervoor te zorgen dat de volledige inhoud als één wijziging wordt beschouwd.

**Alt image generator**
Omdat toegankelijkheid zo weinig serieus genomen wordt door developers, heeft ze geprobeerd om een methode te achterhalen waarmee bijvoorbeeld alt teksten automatisch gegenereerd kunnen worden. Maar helaas is AI nog niet ver genoeg om nuttige alt tekst toe te voegen, sterker nog, in het voorbeeld dat ze toonde was het heel erg het tegenovergestelde.. (Een afbeelding van een man in een rolstoel die voor een trap staat, met de alt tekst 'man in wheelchair goes up staircase.' Klopt niet helemaal).

**Laatste tips en dingen om mee te nemen qua toegankelijkheid**
- Alle autoplay videos moet gepauzeerd kunnen worden
**- Gebruik zelf een screenreader om te testen of je website echt toegankelijk is of niet!**
- Voeg een 'skip to main content' button toe, dit hebben alle belangrijkste websites zoals bijvoorbeeld YouTube.
  	- Uberhaubt content kunnen skippen is belangrijk: stel je hebt een carousel van 20 images, je wilt niet dat de user daar verplicht doorheen moet.
  	- Extra puntje: als je een carousel hebt, moet de screenreader de elementen die off-screen staan niet oplezen. 

### Reflectie
Ik heb altijd veel waarde gehecht aan toegankelijkheid en probeer het altijd mee te nemen in mijn projecten, maar ik had geen idee was dat er zoveel dingen waren waar ik niet vanaf wist of waarvan ik niet wist dat daar rekening mee gehouden moet worden voor screenreaders, bijvoorbeeld met de ```aria-live.``` Ik heb al eerder gehoord dat in het bedrijfsleven de semantiek en toegankelijkheid vaak vergeten worden (of juist expres genegeerd worden), maar ik wist niet hoe erg het precies was. Ik zal zeker proberen om, wanneer ik een website design, voorafgaand aan het coderen rekening zal houden met de puntjes die zij hier heeft toegelicht; ik vind het fijn dat ze een lijstje heeft meegegeven met dingen waar ze altijd naar kijkt, dit helpt vor mij om te beginnen met meer bewust zijn over toegankelijkheid.
