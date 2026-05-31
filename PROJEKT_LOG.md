# Mama's Streetfood Bar – Projekt Log

## Projekt-Briefing
**Website:** Mama's Streetfood Bar  
**Inhaberin:** Katrin Hartwich  
**Adresse:** Unterer Markt 19, 92637 Weiden in der Oberpfalz  
**Konzept:** Internationale Streetfood-Bar mit Community-Fokus. Kein klassisches Restaurant, sondern ein offener Raum – "Wohnzimmer" für Weiden. Events wie Yoga-Brunch, Rap-Frühschoppen, Pilates und Pop-ups.

**Tech-Stack:** React 19 + Vite, Framer Motion, react-router-dom, Vercel Hosting, Upstash Redis für CMS  
**Design:** Rot/Pink/Blau (aus echtem Logo), Dark Industrial Background, Outfit + Inter Fonts

---

## Änderungslog

### 31.05.2026 – Mobile UX Hotfixes
- **Navbar/Mobile Menu:** Fehlenden `z-index` für das Sticky-Menü in der `index.css` deklariert, damit das Mobile-Menü wieder einen sauberen Hintergrund hat und die Schrift nicht überlappt. Zudem den Desktop-Button auf Mobile via CSS-Spezifität (`!important`) hart ausgeblendet.
- **Hero & Events:** Spezifitätsproblem der schwebenden SVGs gelöst (`display: none !important`), da diese sich sonst über den Text gelegt hätten.
- **Menu:** Punktelinien bei Preisen auf dem Smartphone ausgeblendet, da diese bei Zeilenumbrüchen zu Glitches führten. Custom Scrollbar für die horizontalen Menü-Tabs integriert.

### 31.05.2026 – Mobile UI/UX Optimierungen
- **Global:** Feinabstimmung diverser CSS-Dateien (`Hero`, `About`, `FoodConcept`, `Menu`, `Events`, `Contact`, `Footer`), um das Erlebnis auf Smartphones (< 480px) flüssiger zu machen.
- **Hero & Events:** Schwebende Hintergrund-SVGs werden auf Mobile nun komplett ausgeblendet, um den Fokus auf den Text zu lenken und Überlagerungen zu vermeiden.
- **Größenanpassungen:** Bilder (z.B. im Bento-Grid und der About-Section) haben nun bessere Mobile-Seitenverhältnisse (1:1 bzw. feste kleinere Höhen). Das massive Footer-Logo wurde für Handys auf 80px Höhe herunterskaliert. Paddings bei Bannern und Karten wurden reduziert.

### 31.05.2026 – Finalisierung & GitHub
- **Deployment & Dokumentation:** Eine ausführliche, detaillierte `README.md` geschrieben, die das Konzept, den Tech-Stack und Installationsanweisungen beinhaltet.
- **Versionskontrolle:** Das gesamte Projekt wurde erfolgreich auf GitHub unter dem Repository `mamas-street-food-v2` hochgeladen.

### 31.05.2026 – Animationen & Detail-Verbesserungen
- **Events-Sektion:** Emojis entfernt für einen professionelleren Look. 4 neue handgezeichnete, schwebende SVGs (Yoga, Musik, Hantel, Party) passend zum Hero-Style integriert.
- **Hero-Sektion:** Layout der schwebenden SVGs optimiert und vier weitere Haupt-SVGs (Bowl, Dessert, Party, Yoga) hinzugefügt. Zusätzlich wurden 5 kleinere, leicht transparente Füller-SVGs (Musik, Specials etc.) verstreut eingefügt, um den Hintergrund noch voller und lebendiger wirken zu lassen (insgesamt 12 SVGs).
- **Kontakt-Sektion:** Sämtliche Emojis (Geschenk, Ort, Telefon, Instagram, Uhr) aus dem gesamten Kontakt-Bereich entfernt, um den erwachseneren, puristischen Look konsequent durchzuziehen. Zusätzlich wurde "Instagram" in "Social Media" umbenannt und der Facebook-Link hinzugefügt (sowohl auf der Kontakt-Karte als auch im Footer).
- **Footer-Sektion:** Das Logo wurde nochmals deutlich vergrößert (140px Höhe) für maximale Präsenz und das Raster-Layout (Grid) der Spalten so angepasst, dass die Öffnungszeiten nun ausreichend Platz haben und Zeilenumbrüche bei Wörtern wie "Uhr" oder "Do" vermieden werden.
- **React Bits Integration:** Hinzugefügt und auf Kundenwunsch wieder rückgängig gemacht, um das Design puristisch zu halten.
- **Abhängigkeiten:** `gsap` und `mathjs` installiert und wieder zur Entfernung freigegeben.

### 31.05.2026 – UI/UX Redesign (rumbekeplatse.be Style)
- **Neues Design-Konzept:** Replikation der UI/UX-Richtlinien von rumbekeplatse.be mit Fokus auf warme, moderne und einladende Ästhetik.
- **Farbpalette:** Dunkelrot (#67242B), Leuchtendes Rot (#FC3845), Senfgelb (#EED03A) für Illustrationen, Weiß und Dunkelgrau.
- **Typografie:** Umstellung auf Google Fonts `Instrument Serif` (Überschriften) und `Archivo` (Fließtext) für starke Kontraste.
- **Header & Navbar:** Implementierung eines roten Ticker-Banners für Ankündigungen oberhalb der sticky Navbar.
- **Hero-Bereich:** Großflächiger Bereich mit animierten, schwebenden SVG-Illustrationen (Burger, Pommes, Drink) im handgezeichneten Stil.
- **Layout:** Abwechselnde Hintergrundfarben (Dark Red und White) für verschiedene Sektionen, stark abgerundete Bilder (`border-radius`), "Pill-shaped" Buttons mit Hover-Effekten.
- **Menü:** Tabellarisches Menü-Layout mit Icons für jede Kategorie.
- **Kontakt/Footer:** Integration einer Cadeaubon/Geschenkkarten-Sektion in leuchtendem Rot. Dark Theme für Footer und Kontakt-Bereich.
- **Git Repo:** Neues Git-Repository initialisiert.

### 31.05.2026 – Komplettes Website Redesign (v2)
- **Neues Design-Konzept:** Komplett überarbeitete Farbpalette basierend auf dem echten Logo:
  - Primary: #E83C42 (Logo-Rot)
  - Accent: #F8C8D4 (Logo-Pink)
  - Highlight: #2B4AE8 (Blaues Herz aus dem Logo)
  - Background: Dark Industrial (#0F0F0F)
- **Echte Bilder integriert:**
  - Hero: Interior-Foto (Backsteinwände, Kunst, Bar-Atmosphäre)
  - About: Foto vom alten Imbiss-Stand als Origin-Story
  - Food: 3 echte Essensfotos (Crispy Chicken, Bowl, Dessert) in Bento-Grid
  - Logo: Echtes transparentes Logo statt Text
- **Hero:** Cinematic Fullscreen mit Interior-Foto als Background, Gradient-Overlay, Split-Layout mit Öffnungszeiten-Card
- **About:** 2-Spalten mit Foto vom alten Restaurant, "2024"-Floating-Card, Zitat-Block, Stat-Counters
- **FoodConcept:** Bento-Style Foto-Grid mit echten Essensfotos, Tag-Badges ("Beliebt", "Neu"), 3 Feature-Cards
- **Menu:** Aktualisierte Tag-Farben (Rot, Blau, Pink passend zur neuen Palette)
- **Events:** Blue Glow Akzent, Red Primary CTA
- **Navbar:** Echtes Logo-Bild, Red-Underline aktive Section
- **Footer:** Logo-Bild statt Text, Red Hover-States
- **Admin:** Rot-Akzent für Buttons, Focus-States, Fehlermeldungen
- **Build:** Erfolgreich mit allen echten Bildern (Logo 1.4MB, Food-Fotos ~300KB je)

### 31.05.2026 – Initiale Erstellung (v1)
- Projekt-Setup mit Vite React
- Alle Basis-Komponenten erstellt
- Admin CMS mit Upstash Redis
- SEO: Schema.org, Meta-Tags, Open Graph, sitemap.xml, robots.txt
- Default-Menü: 6 Kategorien
