# Detaillierte Replikationsanleitung für das UI/UX-Design von rumbekeplatse.be

Diese Anleitung bietet eine umfassende Analyse des UI/UX-Designs der Website rumbekeplatse.be und einen detaillierten Prompt, um dieses Design auf die Website eines anderen Restaurants zu übertragen. Ziel ist es, die Ästhetik, Funktionalität und Benutzererfahrung präzise nachzubilden.

## 1. Farbpalette
Die Farbpalette der Website ist entscheidend für ihre warme und einladende, aber dennoch moderne Ausstrahlung. Die Hauptfarben sind:

| Farbe             | Hex-Code  | Beschreibung                               |
| :---------------- | :-------- | :----------------------------------------- |
| **Dunkelrot**     | `#67242B` | Primäre Hintergrundfarbe für Header, Footer und Sektionen. Vermittelt Wärme und Eleganz. |
| **Leuchtendes Rot** | `#FC3845` | Akzentfarbe für Call-to-Action-Buttons, wichtige Hervorhebungen und interaktive Elemente. |
| **Senfgelb**      | `#EED03A` | Akzentfarbe für illustrative Elemente, wie die schwebenden Pommes-Icons, die eine spielerische Note hinzufügen. |
| **Reinweiß**      | `#FFFFFF` | Hintergrundfarbe für Inhaltsbereiche, um Lesbarkeit zu gewährleisten und einen sauberen Kontrast zu schaffen. |
| **Dunkelgrau/Schwarz** | `#32373c` / `#000000` | Für Textinhalte, um eine gute Lesbarkeit auf hellen Hintergründen zu sichern. |

## 2. Typografie
Die Kombination aus einer eleganten Serifenschrift für Überschriften und einer klaren Sans-Serif für Fließtext schafft eine ansprechende Hierarchie und Lesbarkeit.

| Element           | Schriftfamilie      | Stilmerkmale                               |
| :---------------- | :------------------ | :----------------------------------------- |
| **Überschriften** | `Instrument Serif`, `serif` | Elegant, kontrastreich, oft groß und fett, mit engen Zeilenabständen. |
| **Fließtext**     | `Archivo`, `sans-serif` | Modern, sauber, gut lesbar, wird für alle längeren Textpassagen verwendet. |

**Stilmittel:**
*   Große, fette Überschriften sind ein zentrales Merkmal. Achten Sie auf einen engen `line-height` Wert, um die visuelle Einheit zu bewahren.
*   Kursiver Text wird sparsam für Zitate oder besondere Hervorhebungen eingesetzt.

## 3. Layout & Struktur
Das Layout ist modular und visuell ansprechend, mit einer klaren Trennung der Inhaltsbereiche.

*   **Header:** Ein `sticky` Header, der beim Scrollen sichtbar bleibt. Er enthält das Logo (links) und die Navigation (rechts). Darüber befindet sich ein schmaler, roter `Ticker`-Balken mit einem Lauftext für wichtige Ankündigungen (z.B. Öffnungszeiten, besondere Angebote).
*   **Hero-Sektion:** Ein großflächiger Bereich mit einer prominenten Überschrift in der `Instrument Serif`-Schrift. Charakteristisch sind schwebende, handgezeichnete SVG-Illustrationen (z.B. Pommes, Burger, Saucen), die dem Bereich eine spielerische und dynamische Note verleihen.
*   **Sektionen:** Inhalte sind in klar definierten Sektionen organisiert, die sich farblich abwechseln (Dunkelrot für visuell starke Bereiche, Reinweiß für textlastigere Abschnitte).
*   **Bildsprache:** Bilder haben abgerundete Ecken (`border-radius` mit großem Wert). Sie sind oft leicht versetzt oder in organischen, asymmetrischen Rastern angeordnet, was eine dynamische und weniger statische Wirkung erzeugt.
*   **Menü-Design:** Das Menü ist tabellarisch aufgebaut, mit klaren Kategorien (z.B. Vorspeisen, Hauptgerichte, Desserts). Jede Kategorie wird durch ein passendes, handgezeichnetes SVG-Icon visuell unterstützt. Preise sind klar den Gerichten zugeordnet.
*   **Footer:** Enthält Navigationslinks, Social-Media-Links, Kontaktinformationen und rechtliche Hinweise, alles übersichtlich in Spalten angeordnet.

## 4. Spezielle UI-Elemente
Bestimmte UI-Elemente tragen maßgeblich zum Wiedererkennungswert des Designs bei.

*   **Buttons:** Haben eine ovale (`pill-shaped`) Form mit stark abgerundeten Ecken. Sie verwenden entweder die dunkelrote Hintergrundfarbe mit weißer Schrift oder die leuchtend rote Akzentfarbe mit weißer Schrift.
*   **Hover-Effekte:** Navigationslinks zeigen eine subtile Unterstreichung beim Überfahren mit der Maus. Buttons erfahren eine leichte Skalierung oder Farbänderung, um Interaktivität zu signalisieren.
*   **Illustrationen:** Handgezeichnete SVG-Icons von Speisen und Getränken sind über die gesamte Website verteilt und dienen als visuelle Ankerpunkte und zur Auflockerung des Designs.
*   **Cadeaubon-Karte:** Eine visuell ansprechende Geschenkkarte in leuchtendem Rot mit abgerundeten Ecken und einem Geschenk-Icon, die zum Kauf anregt.

## 5. UX-Prinzipien
Das Design legt Wert auf eine intuitive und angenehme Benutzererfahrung.

*   **Mobile First:** Das Design ist responsiv und für mobile Geräte optimiert, um eine nahtlose Erfahrung auf allen Bildschirmgrößen zu gewährleisten.
*   **Klare Call-to-Actions:** Prominente Buttons wie "Menü ansehen" und "Route planen" leiten den Benutzer intuitiv zu den wichtigsten Informationen.
*   **Social Proof:** Integration von Kundenbewertungen und Zitaten schafft Vertrauen und Glaubwürdigkeit.
*   **Visuelle Hierarchie:** Durch den Einsatz von Farben, Typografie und Layout wird eine klare visuelle Hierarchie geschaffen, die den Benutzer durch die Inhalte führt.

## Replikations-Prompt für ein Restaurant-Website-Design

**Ziel:** Erstelle ein UI/UX-Design für eine Restaurant-Website, das die Ästhetik und Funktionalität von rumbekeplatse.be präzise repliziert. Das Design soll modern, einladend und benutzerfreundlich sein, mit einem Fokus auf klare Menüpräsentation und ansprechende visuelle Elemente.

**1. Farbpalette:**
*   **Primäre Hintergrundfarbe:** `#67242B` (Dunkelrot/Burgunder)
*   **Akzentfarbe für CTAs & Hervorhebungen:** `#FC3845` (Leuchtendes Rot)
*   **Illustrationsfarbe:** `#EED03A` (Senfgelb)
*   **Inhalts-Hintergrund:** `#FFFFFF` (Reinweiß)
*   **Textfarben:** `#32373c` (Dunkelgrau) und `#000000` (Schwarz)

**2. Typografie:**
*   **Überschriften:** Verwende die Schriftfamilie `Instrument Serif` (mit `serif` als Fallback). Setze Überschriften groß, fett und mit einem engen `line-height` um. Nutze Kursivschrift sparsam für Zitate oder besondere Akzente.
*   **Fließtext:** Verwende die Schriftfamilie `Archivo` (mit `sans-serif` als Fallback) für alle Absätze und längeren Texte.

**3. Layout & Struktur:**
*   **Header:** Implementiere einen `sticky` Header mit dem Restaurant-Logo links und einer Navigationsleiste rechts. Füge einen schmalen, roten `Ticker`-Balken am oberen Rand hinzu, der wichtige Nachrichten als Lauftext anzeigt.
*   **Hero-Sektion:** Gestalte einen großflächigen Hero-Bereich mit dem Restaurantnamen und einem Slogan in `Instrument Serif`. Integriere schwebende, handgezeichnete SVG-Illustrationen, die zum Thema des Restaurants passen (z.B. Besteck, Teller, spezifische Gerichte).
*   **Sektionen:** Strukturiere die Inhalte in klar abgegrenzten Sektionen, die sich farblich abwechseln (Dunkelrot für visuelle Highlights, Reinweiß für Textblöcke).
*   **Bilder:** Alle Bilder sollen stark abgerundete Ecken haben. Ordne Bilder dynamisch und leicht versetzt an, um eine moderne und organische Ästhetik zu schaffen.
*   **Menü:** Präsentiere das Menü in einem tabellarischen Format mit klappen Kategorien. Jede Kategorie soll ein passendes, handgezeichnetes SVG-Icon erhalten. Preise müssen klar und übersichtlich dargestellt werden.
*   **Footer:** Ein übersichtlicher Footer mit Navigationslinks, Social-Media-Icons, Kontaktinformationen und der Adresse des Restaurants.

**4. UI-Elemente:**
*   **Buttons:** Gestalte alle Buttons oval (`pill-shaped`) mit stark abgerundeten Ecken. Verwende die Farben `#67242B` oder `#FC3845` als Hintergrund und weißen Text.
*   **Hover-Effekte:** Füge subtile Unterstreichungen für Navigationslinks und leichte Skalierungs- oder Farbänderungseffekte für Buttons hinzu.
*   **Illustrationen:** Erstelle eine Reihe von handgezeichneten SVG-Icons, die spezifische Gerichte oder Elemente des Restaurants repräsentieren und über die Website verteilt sind.
*   **Geschenkkarten-Sektion:** Implementiere eine Sektion für Geschenkkarten, die visuell einer roten, abgerundeten Geschenkkarte ähnelt, mit einem passenden Icon.

**5. UX-Prinzipien:**
*   **Responsivität:** Das gesamte Design muss vollständig responsiv sein und auf allen Geräten (Desktop, Tablet, Mobile) optimal funktionieren.
*   **Benutzerführung:** Sorge für eine klare und intuitive Benutzerführung mit prominent platzierten Call-to-Actions zu den wichtigsten Seiten (Menü, Reservierung, Kontakt).
*   **Vertrauensbildung:** Integriere eine Sektion für Kundenbewertungen oder Testimonials, um Social Proof zu liefern.

**Anwendung:** Ersetze alle Inhalte (Texte, Bilder, Menüpunkte) durch die spezifischen Informationen des neuen Restaurants, während das beschriebene Designschema strikt beibehalten wird. Achte darauf, dass die handgezeichneten Illustrationen thematisch zum neuen Restaurant passen.
