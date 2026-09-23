# Next Session

## Singurul task

Sesiunea 5 din `GH-200-STUDY-ROADMAP.md`: modelarea pipeline-ului cu `steps`,
`jobs` și `needs`.

Acest fișier preia exact următorul reper neparcurs din roadmap. Nu conține
variante de ales și nu adaugă taskuri din afara roadmap-ului.

## Înainte de execuție

Asistentul va explica mai întâi modelul mental: diferența dintre pași care rulează
secvențial în același job și joburi care rulează implicit în paralel, pe runnere
separate, fără a împărți disk-ul sau procesele. Apoi va explica rolul cheii
`needs`, care creează o dependență explicită și ordonează graful execuției.

Utilizatorul va adăuga un al doilea job în `.github/workflows/ci.yml`, îl va lega
prin `needs` de jobul existent și va observa graful rulării în GitHub Web UI.
Asistentul oferă câte un singur pas și așteaptă rezultatul.

## Debugging inclus în această sesiune

Debugging-ul este element recurent în roadmap, nu o sesiune separată. Aici se
exersează prin propagarea unui eșec: utilizatorul va strica intenționat testul,
va observa că jobul dependent nu rulează și primește starea `skipped`, va citi
logul jobului căzut, va identifica pasul și codul de ieșire, apoi va remedia
problema până când ambele joburi devin verzi.

Dacă apare ocazia, se vor discuta `ACTIONS_STEP_DEBUG`, re-rularea unui job eșuat
și diferența dintre un pas căzut, un job sărit și un job anulat.

## Rezultat urmărit

Graful rulării arată ordinea impusă de `needs`. Utilizatorul explică de ce al
doilea job nu a rulat când primul a eșuat, localizează singur cauza în log și
readuce pipeline-ul în starea verde.

## După această sesiune

Se continuă cu următorul reper din roadmap, sesiunea 6: contexte, expresii și
variabile de mediu.
