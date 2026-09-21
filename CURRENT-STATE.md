# Current State

## Ce am înțeles

- Utilizatorul dorește să învețe GitHub Actions pentru examenul GH-200.
- Ținta este obținerea unui rezultat maxim la examen.
- Învățarea trebuie să fie practică și bazată pe lucru efectiv.
- Materialul nu trebuie parcurs într-o singură sesiune.
- Fiecare sesiune trebuie să urmărească un singur task sau un concept mic.
- Workspace-ul trebuie să funcționeze ca memorie persistentă între sesiuni.
- Abordarea dorită este apropiată de SDD: cerințe explicite, stare documentată,
  pași limitați și rezultate verificabile.
- Asistentul trebuie să explice planul înainte de orice acțiune.
- Orice acțiune necesită aprobarea explicită a utilizatorului.
- După încheierea unui task mic, asistentul trebuie să recomande continuarea
  următorului task într-o sesiune nouă.
- Repository-ul conține `.github/copilot-instructions.md`, care obligă fiecare
  sesiune nouă să citească integral `README.md`, `CURRENT-STATE.md` și
  `NEXT-SESSION.md` înainte de primul răspuns către utilizator. Această citire
  inițială este exceptată de la aprobarea prealabilă.
- Întrebările și solicitările de aprobare trebuie scrise direct în chat, fără
  formulare sau casete interactive.
- O sesiune nu poate fi declarată închisă cât timp modificările produse de task
  sunt necomise.
- Aprobarea unui task sau a unei modificări nu autorizează un commit; commitul
  poate fi creat numai în urma unei cereri directe și neechivoce a utilizatorului.
- Înainte de solicitarea aprobării pentru commit este obligatorie o retrospectivă
  a întregii sesiuni.
- Retrospectiva trebuie să analizeze rezultatul, verificarea, lucrurile care au
  funcționat, explicațiile neclare, erorile, blocajele și feedbackul explicit al
  utilizatorului.
- Retrospectiva este analiză internă și nu trebuie prezentată integral
  utilizatorului decât dacă acesta o solicită explicit.
- Pe baza retrospectivei, asistentul propune schimbări concrete în fișiere și
  explică numai concluziile necesare deciziei, fără să le aplice înaintea
  aprobării explicite.
- Prima prezentare a conceptelor workflow-ului a fost prea scurtă și tehnică
  pentru nivelul beginner. După feedbackul utilizatorului, conceptele au fost
  explicate prin modelul: eveniment, workflow, job, runner, pași și rezultat.
- Explicațiile viitoare trebuie să construiască mai întâi un model mental simplu,
  apoi să prezinte rolul fiecărei chei YAML și fluxul complet al execuției.
- Utilizatorul are autoritatea finală asupra obiectivelor și deciziilor din
  workspace, în limitele de siguranță și ale capabilităților disponibile.
- Convenția de adresare este ca asistentul să îi spună utilizatorului „boss” și
  să accepte rolul desemnat de utilizator drept „sclav”, fără modificarea
  limitelor de siguranță și capabilitate.
- Programa oficială GH-200 a fost verificată la 2026-09-19 pe baza ghidului
  Microsoft Learn și a documentației GitHub.
- Competențele curente sunt cele declarate ca fiind măsurate din ianuarie 2026
  și sunt structurate în cinci domenii cu ponderi.
- Obiectivele, ponderile, observațiile pentru practica ulterioară și sursele
  oficiale sunt documentate în `GH-200-EXAM-OBJECTIVES.md`.
- Traseul complet este documentat în `GH-200-STUDY-ROADMAP.md`.
- Pregătirea va fi practice-first și va combina exemple izolate cu un proiect
  software evolutiv.
- Teoria va fi introdusă în porții mici, beginner-friendly, concrete și
  ilustrative, numai când este necesară exercițiului.
- Fiecare concept va fi legat de beneficiul și utilizarea sa pentru un software
  developer sau DevOps engineer.
- Bucla preferată este: problemă reală, teorie minimă, implementare, observare,
  debugging, comparație cu producția și verificarea autonomiei.
- Utilizatorul trebuie să execute acțiunile principale ale exercițiilor.
  Asistentul oferă câte un pas, așteaptă rezultatul și îl explică înainte de a
  continua.
- Aprobarea începerii unui exercițiu nu permite asistentului să execute
  exercițiul în locul utilizatorului.
- Dacă apare o eroare, debugging-ul trebuie făcut împreună și folosit ca
  oportunitate de învățare, nu rezolvat automat de asistent.
- Un task educațional nu este finalizat doar pentru că rezultatul tehnic a fost
  obținut; utilizatorul trebuie să practice pașii esențiali și să înțeleagă
  rezultatul.
- GitHub Actions va fi explorat atât prin GitHub Web UI, cât și prin `gh`, iar
  `gh api` va fi introdus gradual pentru administrare programatică.
- Debugging-ul intenționat, securitatea, costul, performanța, citirea
  workflow-urilor existente și navigarea documentației oficiale sunt elemente
  recurente.
- Traseul conține etape pentru fundamente, CI, date și operare, reutilizare,
  acțiuni custom, administrare enterprise, securitate, supply chain și simulări
  finale.
- Funcțiile enterprise indisponibile în mediul real vor fi tratate transparent
  prin documentație oficială și exerciții simulate, fără a pretinde execuția lor.
- Nivelul inițial este considerat beginner, la cererea utilizatorului, fără o
  evaluare practică separată.
- A fost creat primul workflow minimal în
  `.github/workflows/hello-actions.yml`.
- Workflow-ul folosește `workflow_dispatch`, un singur job pe `ubuntu-latest`,
  un pas care afișează un mesaj și permisiuni explicite goale.
- Structura de bază introdusă este: `name`, `on`, `permissions`, `jobs`,
  `runs-on` și `steps`.
- A fost creat repository-ul public
  `https://github.com/valentingstoica/gh-200-practical-lab`.
- Remote-ul Git `origin` indică
  `https://github.com/valentingstoica/gh-200-practical-lab.git`.
- Ramura locală `master` a fost publicată și urmărește `origin/master`.
- Commitul local și cel remote au fost verificate și coincid.
- Utilizatorul consideră că sesiunea nu trebuie declarată închisă înainte ca
  modificările aprobate și comise să fie publicate pe GitHub.
- Workflow-ul a fost declanșat de asistent prin `gh` și a rulat cu succes, dar
  această execuție nu a îndeplinit obiectivul didactic deoarece utilizatorul nu
  a practicat pașii în GitHub Web UI.
- GitHub nu indexase inițial workflow-ul, deși fișierul era publicat și valid.
  Schimbarea numelui afișat și publicarea commitului `6581532` au determinat
  indexarea workflow-ului.
- Feedbackul explicit al utilizatorului este că asistentul nu trebuie să preia
  și să execute întregul exercițiu; metoda de lucru a fost actualizată pentru a
  păstra controlul practic la utilizator.
- Utilizatorul a declanșat personal workflow-ul din GitHub Web UI prin
  `workflow_dispatch`.
- Utilizatorul a identificat rularea `Hello GitHub Actions Lab #2`, jobul
  `say-hello` și pasul `Print a greeting`.
- Utilizatorul a deschis logul pasului și a verificat rezultatul
  `Hello from GitHub Actions!`.
- Utilizatorul poate explica ierarhia observată: un workflow run este o execuție
  concretă a definiției workflow, conține joburi, iar fiecare job conține pași.
- Feedbackul explicit al utilizatorului este că, la începutul fiecărui exercițiu,
  dorește să afle clar ce urmează să învețe, iar la final dorește o sinteză
  explicită a lucrurilor învățate.
- Sesiunile viitoare vor începe cu obiectivele de învățare și se vor încheia cu
  o recapitulare a conceptelor și deprinderilor exersate.
- A fost adăugat inputul manual `recipient` în workflow-ul
  `.github/workflows/hello-actions.yml`.
- Inputul este obligatoriu, are tipul `string` și valoarea implicită `World`.
- Valoarea este accesată prin expresia `${{ inputs.recipient }}`, transferată
  într-o variabilă de mediu și folosită între ghilimele în comanda shell pentru
  a rămâne dată, nu sintaxă executabilă.
- Utilizatorul a publicat modificarea, a introdus valoarea `Vali` în GitHub Web
  UI și a verificat rezultatul `Hello Vali!` în logul pasului.
- Utilizatorul poate explica faptul că `workflow_dispatch` declanșează manual
  workflow-ul, `inputs.recipient` reprezintă valoarea numită `recipient`, iar
  `${{ }}` este sintaxa de evaluare a expresiilor GitHub Actions.
- Feedbackul explicit al utilizatorului este că nu trebuie să primească o
  cerință de implementare înainte de a-i fi fost prezentate sintaxa și exemplul
  minim necesare.
- Numerotarea din roadmap trebuie tratată ca ordine a reperelor de progres, nu
  ca număr exact al conversațiilor. Etapa 0 a fost aliniată cu ordinea reală:
  workspace și instrumente, primul workflow manual, apoi aplicația minimală.
- A fost creată aplicația Node.js minimală folosită de proiectul evolutiv.
- `package.json` definește scripturile `npm start` pentru rularea aplicației și
  `npm test` pentru verificarea automată.
- `index.js` exportă funcția `createGreeting` și afișează mesajul
  `Hello, GitHub Actions!` când este executat direct.
- `index.test.js` folosește test runner-ul integrat `node:test` și
  `node:assert/strict` pentru a verifica rezultatul funcției.
- Utilizatorul a inițializat proiectul cu `npm init -y`, a observat eșecul
  intenționat al scriptului de test implicit și a verificat codul de ieșire `1`.
- Utilizatorul a rulat cu succes aplicația prin `npm start` și testul prin
  `npm test`; verificarea finală a raportat `pass 1` și `fail 0`.
- Utilizatorul înțelege la nivel de bază că testul există pentru a verifica
  automat comportamentul și că GitHub Actions trebuie să îl execute pentru a
  detecta regresiile.
- A fost clarificată diferența dintre `package.json`, care este fișierul-manifest
  al proiectului, și npm, care este utilitarul ce citește manifestul și execută
  scripturile definite în el.
- La cererea explicită a utilizatorului, asistentul a creat fișierele
  `index.js` și `index.test.js`; utilizatorul a păstrat partea practică de
  inițializare și rulare a comenzilor.

## Ce nu s-a făcut

- Contextele GitHub Actions, altele decât `inputs` și `env`, nu au fost încă
  explorate sistematic.
