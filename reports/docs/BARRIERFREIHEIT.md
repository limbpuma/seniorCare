# Barrierefreiheit in Deutschland: WCAG und BITV

Diese Dokumentation bietet einen Überblick, wie Sie Barrierefreiheit nach den Web Content Accessibility Guidelines (WCAG) und der Barrierefreie-Informationstechnik-Verordnung (BITV 2.0) umsetzen können.

## Einleitung

Die Einhaltung der WCAG 2.1 Level AA ist für öffentliche Stellen in Deutschland gesetzlich gefordert. Die BITV 2.0 setzt diese Richtlinien in nationales Recht um und gilt auch für viele private Organisationen. Ziel ist es, digitale Angebote so zu gestalten, dass sie von allen Menschen – einschließlich Menschen mit Behinderungen – genutzt werden können.

## Grundprinzipien der WCAG

1. **Wahrnehmbar** – Inhalte müssen von allen Nutzer*innen wahrgenommen werden können, z. B. durch ausreichende Farbkontraste und Alternativtexte.
2. **Bedienbar** – Die Bedienung der Website muss ohne Maus möglich sein. Achten Sie auf gut sichtbare Fokusindikatoren und eine logische Tab-Reihenfolge.
3. **Verständlich** – Texte sollen klar formuliert sein, Formulare verständliche Fehlermeldungen geben und Navigationselemente konsistent gestaltet sein.
4. **Robust** – Die Website muss mit unterschiedlichen Geräten, Browsern und Hilfsmitteln funktionieren. Nutzen Sie validen HTML-Code und semantische Elemente.

## Umsetzungsschritte

### 1. Semantisches HTML verwenden

- Strukturieren Sie Inhalte mit Überschriften (`<h1>` bis `<h6>`), Absätzen (`<p>`) und Listen (`<ul>`, `<ol>`).
- Vermeiden Sie rein dekorative Elemente ohne semantische Bedeutung.

### 2. ARIA nur ergänzend nutzen

- Setzen Sie [ARIA](https://www.w3.org/TR/wai-aria/) Attributen sparsam ein, wenn semantisches HTML allein nicht ausreicht.
- Prüfen Sie regelmäßig mit Screenreadern, ob die ARIA-Bezeichnungen korrekt vorgelesen werden.

### 3. Tastaturbedienbarkeit sicherstellen

- Alle interaktiven Elemente (Links, Buttons, Formulare) müssen mit der Tastatur erreichbar sein.
- Sichtbare Fokusrahmen helfen Nutzer*innen, den aktuellen Fokus zu erkennen.

### 4. Farbkontrast und visuelles Design

- WCAG fordert einen Mindestkontrast von 4,5:1 für normalen Text und 3:1 für große Schrift.
- Prüfen Sie Farbkontraste mit Tools wie [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

### 5. Responsive und skalierbares Layout

- Inhalte sollten sich flexibel an verschiedene Bildschirmgrößen anpassen.
- Text muss bei einer Vergrößerung auf 200 % noch lesbar und bedienbar bleiben.

### 6. Alternative Texte und Medien

- Bilder und Grafiken erhalten aussagekräftige `alt`-Attribute.
- Videos werden nach Möglichkeit mit Untertiteln und Audiodeskription bereitgestellt.

## Tests und Qualitätssicherung

1. **Automatisierte Prüfungen**: Tools wie Lighthouse, axe oder Pa11y decken viele Standardprobleme ab.
2. **Manuelle Tests**: Testen Sie mit Tastatur und Screenreadern (z. B. NVDA, VoiceOver) alle zentralen Anwendungsfälle.
3. **Nutzer*innen-Feedback**: Beziehen Sie Menschen mit Behinderungen in Tests ein, um echte Barrieren aufzudecken.

## Weitere Ressourcen

- [WCAG 2.1 (W3C)](https://www.w3.org/TR/WCAG21/)
- [BITV 2.0](https://www.gesetze-im-internet.de/bitv_2_0/)
- [Bundesfachstelle Barrierefreiheit](https://www.bundesfachstelle-barrierefreiheit.de)

**Hinweis**: Diese Anleitung bietet nur einen Einstieg. Für Rechtsverbindlichkeit und Detailfragen konsultieren Sie bitte die offiziellen Richtlinien und ggf. spezialisierte Fachleute.
