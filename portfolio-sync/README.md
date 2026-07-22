# Portfolio sync → ToldByNun.github.io

Aktualisierte Portfolio-Dateien fuer das Pages-Repo.

Dieses Cloud-Agent-Token hat **keinen Push-Zugriff** auf `ToldByNun/ToldByNun.github.io`.
Die Dateien hier sind bereit zum Ueberschreiben dort:

```text
portfolio-sync/index.html          → ToldByNun.github.io/index.html
portfolio-sync/styles.css          → ToldByNun.github.io/styles.css
portfolio-sync/src/content.js      → ToldByNun.github.io/src/content.js
portfolio-sync/src/main.js         → ToldByNun.github.io/src/main.js
```

Videos bleiben im Pages-Repo unter `assets/videos/` (nicht hier dupliziert).

## Was neu ist

- Neue GitHub-Projekte: MecchaChameleon, sentinel, Chicony-AA, kernel-read-driver (jetzt public)
- Alle public Repos als Karten mit Links
- `links`-Feld wird endlich gerendert (war Schema-only, nie im UI)
- Kontakt: GitHub + Job2CV
- Featured: MecchaChameleon External
- Work History + Skills aktualisiert

## Lokal testen

```bash
cd portfolio-sync
# Videos optional vom Pages-Repo verlinken/kopieren nach assets/videos/
npx serve .
```
