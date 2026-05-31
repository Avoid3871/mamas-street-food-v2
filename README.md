# Mama's Streetfood Bar v2 🍔🍟🥤

Herzlich willkommen im Repository für **Mama's Streetfood Bar**! Dies ist die komplett überarbeitete und moderne Version (v2) der Restaurant-Website, die Streetfood, Community und Liebe vereint. 

## 🌟 Projekt-Konzept
Mama's Streetfood Bar ist mehr als nur ein Imbiss in Weiden in der Oberpfalz. Es ist ein offenes "Wohnzimmer", in dem sich Menschen treffen, um internationale Streetfood-Küche zu genießen und an kreativen Events wie dem *Yoga-Brunch* oder *Rap-Frühschoppen* teilzunehmen. Das Design spiegelt diesen Vibe wider: Warm, stylisch, modern und community-zentriert.

## 🎨 UI/UX Design & Animationen
Die Website nutzt ein hochwertiges, handgezeichnetes und puristisches Design mit starken roten Akzenten.
- **Cinematic Hero-Sektion**: Umrandet von animierten, handgezeichneten SVGs (Burger, Bowl, Party etc.) mit butterweichen Fade-Ins.
- **Flüssige Laufband-Menüs**: Integrierte `FlowingMenu`-Komponenten für dynamische Bilddurchläufe.
- **Smooth Scrolling & Blurs**: Einsatz von `GradualBlur` und Framer Motion für hochwertige Übergänge.
- **Responsiv**: Komplett Mobile-First entwickelt.

## 🛠 Tech-Stack
Dieses Projekt nutzt modernste Frontend-Technologien:
- **React 19** & **Vite** (Schnelles, modernes Frontend)
- **Framer Motion** & **GSAP** (Für aufwendige, cineastische Animationen)
- **CSS Modules / Vanilla CSS** (Für ein maßgeschneidertes Styling ohne Bloatware)
- **Upstash Redis** (Als leichtgewichtiges Backend/CMS für das Admin-Panel)
- **Vercel** (Für blitzschnelles Hosting und Serverless Functions)

## 🔑 Das Admin-Panel (`/admin`)
Das Projekt verfügt über ein kennwortgeschütztes Admin-Panel (gebaut mit Vite & React Router), worüber die Speisekarte dynamisch verwaltet werden kann.
- Speisen, Preise und Kategorien in Echtzeit hinzufügen, bearbeiten und löschen.
- Die Daten werden persistent und pfeilschnell über eine **Upstash Redis Datenbank** synchronisiert.
- Komplett nahtlos ins Vercel Hosting integriert.

## 🚀 Lokale Installation
1. Repository klonen:
   ```bash
   git clone https://github.com/DEIN_USERNAME/mamas-street-food-v2.git
   ```
2. In das Verzeichnis wechseln:
   ```bash
   cd mamas-street-food-v2
   ```
3. Abhängigkeiten installieren:
   ```bash
   npm install
   ```
4. Umgebungsvariablen (`.env`) anlegen (Upstash Credentials eintragen):
   ```env
   VITE_UPSTASH_REDIS_REST_URL=your_url
   VITE_UPSTASH_REDIS_REST_TOKEN=your_token
   VITE_ADMIN_PASSWORD=your_password
   ```
5. Entwicklungsserver starten:
   ```bash
   npm run dev
   ```

## 🌐 Deployment
Die Seite ist vollständig für das Vercel-Hosting optimiert, inklusive konfiguriertem `vercel.json` für korrekte SPA-Routing-Regeln (Client-Side Routing).

---
*Gebaut mit ❤️ für Weiden i.d. OPf.*
