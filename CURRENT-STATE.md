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

- A fost creat workflow-ul de integrare continuă `.github/workflows/ci.yml`.
- Workflow-ul se declanșează la `push` și `pull_request`, ambele filtrate pe
  `master`, are `permissions: contents: read` și un singur job numit `test`.
- Jobul rulează patru pași: `actions/checkout@v7`, `actions/setup-node@v7` cu
  `node-version: "26"`, `npm install` și `npm test`.
- Numele jobului a fost `build-and-test` inițial, dar utilizatorul a observat
  corect că proiectul nu are pas de build. Numele unui job trebuie să descrie
  ce face efectiv, nu convenția copiată din alte ecosisteme.
- Versiunile acțiunilor au fost verificate în repository-urile oficiale cu
  `gh release list --repo actions/checkout`, nu presupuse.
- Utilizatorul a ales conștient linia Current (Node 26) în locul Active LTS
  (Node 24), după ce diferența i-a fost explicată.
- Versiunile din `node-version` se scriu între ghilimele, deoarece YAML
  interpretează `20.10` ca număr și îl transformă în `20.1`.
- Au fost verificate empiric trei comportamente ale declanșatoarelor:
  push pe `ci-setup` nu a produs nicio rulare, deschiderea PR-ului a produs
  o rulare `pull_request`, iar merge-ul a produs prima rulare `push` pe `master`.
- Filtrul `branches:` de sub `pull_request` se referă la branch-ul țintă al
  pull request-ului, nu la cel sursă.
- Evenimentul `pull_request` are implicit activity types `opened`,
  `synchronize` și `reopened`. Declararea explicită a cheii `types:` înlocuiește
  lista implicită, nu adaugă la ea.
- Dacă `push` nu este filtrat, un commit pe un branch cu pull request deschis
  produce două rulări, deoarece evenimentele sunt evaluate independent.
- Pentru `push` și `pull_request`, definiția workflow-ului este citită din
  commitul declanșator, nu de pe branch-ul default. Pentru `schedule` este
  citită de pe branch-ul default, iar pentru `pull_request_target` de pe
  branch-ul țintă. Pentru `workflow_dispatch` rulează versiunea de pe
  branch-ul sau tag-ul ales la declanșare; fișierul trebuie să existe și pe
  branch-ul default. (Corectat în reperul 6b; vezi lecția de mai jos.)
- Consecința de securitate este că cine controlează un branch controlează și
  declanșatoarele, deci modificările din `.github/workflows/` se revizuiesc ca
  fiind cod executabil.
- Runnerele self-hosted nu se distrug după job, spre deosebire de cele
  GitHub-hosted, deci combinația repository public plus runner self-hosted
  permite execuția de cod arbitrar pe mașina proprie.
- Câmpul `display_title` al unei rulări provine din titlul pull request-ului
  pentru evenimentul `pull_request` și din mesajul commitului pentru `push`.
- Asistentul afirmase inițial că titlul provine mereu din mesajul commitului.
  Utilizatorul a identificat contraexemplul: rularea `synchronize` avea commitul
  `Test pr`, dar afișa titlul pull request-ului.
- Datele brute se verifică prin
  `gh api repos/OWNER/REPO/actions/runs --jq '.workflow_runs[] | {event, display_title}'`.
- Strategia de merge determină mesajul commitului rezultat: squash folosește
  titlul pull request-ului plus numărul acestuia, merge commit generează
  `Merge pull request #N`, iar rebase păstrează mesajele originale.
- Feedbackul explicit al utilizatorului este că asistentul nu trebuie să ofere
  informații neverificate. A fost adăugată secțiunea „Acuratetea informatiei” în
  `.github/copilot-instructions.md`, care cere verificarea în documentația
  oficială sau în date reale, marcarea explicită a ipotezelor și căutarea
  contraexemplului înainte de a enunța o regulă.
- La cererea explicită a utilizatorului, asistentul a executat comenzile Git și
  `gh` din acest exercițiu; utilizatorul a rămas cel care a decis pașii,
  a pus întrebările de fond și a validat rezultatele.
- Sesiunea 5 a adăugat jobul `vv` în `.github/workflows/ci.yml`, cu
  `needs: test`, `runs-on: ubuntu-latest` și un pas care afișează un mesaj.
  Utilizatorul a scris jobul; asistentul a creat branch-ul, commitul și PR #2
  numai după cererea și aprobarea explicite ale utilizatorului.
- În prima rulare a PR #2, `test` și `vv` au trecut. Utilizatorul a observat
  în graful din GitHub Web UI că `vv` începe după încheierea lui `test`.
  Pașii aceluiași job rulează în ordine pe același runner; joburile fără
  dependențe pot rula în paralel, pe runnere separate, iar `needs` impune
  ordinea și succesul jobului precedent.
- Utilizatorul a introdus intenționat un spațiu final în valoarea așteptată
  din `index.test.js`. `npm test` local a raportat un test eșuat:
  `actual: 'Hello, Vali!'`, `expected: 'Hello, Vali! '`.
  Rularea PR a arătat `test: FAILURE` și `vv: SKIPPED`. Logul pasului
  `Run tests` a indicat assertion error și exit code 1.
- După eliminarea spațiului, testul local a trecut și ambele joburi au fost
  verzi în PR. Utilizatorul a făcut merge la PR #2; rularea rezultată pe
  `master`, declanșată de evenimentul `push`, a trecut. Rulările anterioare
  din PR aveau evenimentul `pull_request`.
- Feedbackul utilizatorului: întrebările se pun în chat, nu în formulare
  interactive; înainte de o modificare, sintaxa și exemplul minim trebuie
  explicate clar. Utilizatorul nu dorește să raporteze manual stările
  accesibile prin GitHub: asistentul le verifică singur, iar utilizatorul
  păstrează pașii practici ai exercițiului.
- În sesiunea 6, utilizatorul a cerut două adaptări ale metodei: învățarea
  `gh` CLI în paralel cu Web UI, prin repetarea fiecărei verificări din UI cu
  comanda `gh` echivalentă, și carduri Anki în engleză la finalul fiecărei
  sesiuni. Au fost evaluate skill-ul `crisak/anki-connect-skill` și serverul
  `timKnudsen/anki-mcp`; ambele cer Anki desktop pornit cu AnkiConnect și cod
  de la terți. S-a ales importul text nativ al Anki (anteturi `#separator`,
  `#deck`, `#notetype`, `#tags`, disponibile din Anki 2.1.54), fără
  dependențe externe, cu fișiere versionate în `anki/`.
- După primele comenzi `gh run list`, `gh run view` și
  `gh run view --job --log`, utilizatorul a decis că CLI este prea complicat
  pentru nevoile lui și rămâne la Web UI. Regula de verificare paralelă UI + CLI
  a fost retrasă, iar recapitularea CLI a sesiunilor 1–5 a fost anulată.
  Competențele REST API cerute de examen (loguri, artifacts, runs, secrets,
  variables) rămân numai în sesiunile dedicate din roadmap, la nivelul
  examenului.
- Sesiunea 6 a creat `.github/workflows/contexts.yml` (`workflow_dispatch`,
  `permissions: {}`), scris de utilizator pas cu pas și rulat din Web UI.
  Au fost practicate contextele `github` (`github.actor`), `runner`
  (`runner.os`, `runner.name`), `env` pe nivel de workflow și pas,
  `vars` (`APP_ENV=staging`), `secrets` (`DB_PASSWORD`, valoare de test),
  `needs` (`needs.show_context.result`), `matrix` și `strategy` (matrice
  `ubuntu-latest` / `windows-latest`, `strategy.job-index`,
  `strategy.job-total`), `steps` (`steps.<id>.outcome`) și `job`
  (`job.status`). `inputs` fusese practicat în sesiunea 2.
- Utilizatorul înțelege că `${{ }}` este înlocuit de GitHub înainte ca shell-ul
  să ruleze, iar `$VAR` este înlocuit de shell; logul arată valoarea deja
  substituită în blocul `env`. Înțelege că tiparul `env` + `run` previne script
  injection și că riscul depinde de cine controlează valoarea.
- Erori întâlnite și remediate de utilizator: `: ` într-un scalar YAML simplu
  (`mapping values are not allowed here`), rezolvat cu blocul `|`; `\n`
  afișat literal, deoarece `echo` din bash nu interpretează escape-urile fără
  `-e`; `runs-on: ${{ strategy.matrix.os }}` a făcut ca jobul matrix să nu fie
  creat deloc, iar rularea să fie `failure`, corect fiind `matrix.os`;
  `echo:` în loc de `echo`; pe Windows shell-ul implicit este `pwsh`, unde
  `$VAR` nu citește variabila de mediu (`$env:VAR`), rezolvat cu
  `defaults.run.shell: bash` la nivel de job.
- Utilizatorul a scris o valoare de test a secretului direct în YAML (commitul
  `7e9d32a`). Valoarea este publică în istoricul Git; fiind inventată, nu are
  impact, dar în producție secretul ar fi considerat compromis și rotit.
- Întrebări valoroase ale utilizatorului: dacă mascarea poate fi folosită ca
  oracol pentru ghicirea parolei (răspuns: cine poate rula workflow-ul are
  deja acces de citire la secrete, iar fork-urile nu primesc secrete) și de ce
  `job.status` este `success`, nu `in_progress` (valorile documentate sunt doar
  `success`, `failure`, `cancelled`).
- Feedback pedagogic: o primă explicație cu multe contexte și reguli deodată
  a fost respinsă („Nu înțeleg nimic”). A funcționat pornirea de la ceva deja
  practicat (`inputs.recipient` din sesiunea 2), analogia „sertarelor”, o
  singură idee pe rând și o întrebare simplă de verificare.
- Utilizatorul a stabilit procedura generală de învățare, documentată în
  `LEARNING-METHOD.md`: harta cunoștințelor este adevărul suprem, roadmap-ul
  și didactica urmează harta, iar Anki oglindește harta 1 la 1 doar pentru
  stabilizarea memoriei, fără ghicitori sau întrebări de tip examen. Cardurile
  sunt în engleză. A fost adăugat reperul 6b în roadmap pentru construirea
  hărții GH-200.
- Au fost generate 58 de carduri provizorii în `anki/session-01.txt` …
  `anki/session-06.txt`, înaintea existenței hărții. Ele trebuie aliniate cu
  harta în reperul 6b și nu au fost încă importate.
- Reperul 6b a creat `GH-200-KNOWLEDGE-MAP.md` din programa oficială
  („Skills measured as of January 2026”, reverificată la 2026-10-01):
  28 de capitole pe subiecte, 256 de elemente cu ID `COD-NN`, tip T/P și
  bullet-ul oficial sursă. 65 de elemente sunt marcate ca predate în
  sesiunile 1-6. Elementele nepredate numesc ce trebuie știut; conținutul
  exact se verifică în documentația oficială la predare.
- Cardurile au fost aliniate cu harta: 65 de carduri, exact unul pentru
  fiecare element predat; alinierea 1 la 1 a fost verificată automat.
  Cardul despre `package.json` și npm a fost eliminat, fiind în afara
  programei, iar 8 carduri au fost adăugate pentru elemente predate fără card.
- Cardurile au fost grupate inițial pe capitole (`anki/COD.txt`). Utilizatorul
  a observat că așa nu știe ce să importe și să învețe după o sesiune, deoarece
  o sesiune predă bucăți din mai multe capitole. Au fost regrupate într-un
  fișier pe sesiune (`anki/S01.txt` … `anki/S06.txt`), cu tag-urile
  `COD COD-NN Sn`. Procedura de folosire este în `LEARNING-METHOD.md`.
- Utilizatorul a precizat ulterior două reguli, adăugate explicit în
  `LEARNING-METHOD.md` și în convențiile hărții: harta nu este statică, ci se
  schimbă pe măsură ce învățăm, iar cardurile se modelează după ea; cardurile
  se învață pe sesiune, la finalul fiecărei sesiuni, selectate în Anki după
  tag-ul `Sn` (Custom Study → Study by card state or tag, conform manualului
  Anki). O propunere de învățare pe capitole a fost respinsă explicit.

## Ce nu s-a făcut

- Cardurile din `anki/` nu au fost încă importate în Anki.
- Contextele au fost practicate la nivel de bază; condițiile `if` cu
  `always()` / `failure()` aparțin sesiunii 8, iar opțiunile avansate ale
  matricei (`include`, `exclude`, `fail-fast`, `max-parallel`) sesiunii 10.
- `concurrency` și cache-ul dependențelor nu au fost încă folosite.
- Branch protection rules și required status checks nu au fost configurate.

## Lecție despre metoda de lucru

- Asistentul i-a oferit utilizatorului variante de task în afara roadmap-ului,
  iar `NEXT-SESSION.md` a ajuns să conțină un task inexistent în
  `GH-200-STUDY-ROADMAP.md`. Au rezultat două surse de adevăr contradictorii și
  confuzie privind poziția reală în traseu.
- Utilizatorul a semnalat explicit că roadmap-ul trebuie să fie un drum drept,
  parcurs pas cu pas.
- Regula stabilită: `GH-200-STUDY-ROADMAP.md` este singura sursă de adevăr
  pentru ordinea sesiunilor, iar `NEXT-SESSION.md` preia exact următorul reper
  neparcurs. Asistentul nu mai oferă variante de ales. Un subiect nou intră în
  traseu numai printr-o modificare aprobată a roadmap-ului.
- Elementele recurente, precum debugging-ul, se exersează în interiorul
  sesiunii curente, nu ca sesiuni separate adăugate ad-hoc.
- Poziția reală confirmată: sesiunile 1-6 și reperul 6b sunt finalizate, iar
  următorul reper este 7.

## Lecție despre acuratețe (reperul 6b)

- În sesiunea 4 s-a consemnat greșit că `workflow_dispatch` citește definiția
  workflow-ului de pe branch-ul default. Documentația oficială
  „Events that trigger workflows” indică pentru `workflow_dispatch`:
  `GITHUB_SHA` = „Last commit on the `GITHUB_REF` branch or tag”, iar
  `GITHUB_REF` = „Branch or tag that received dispatch”. Eroarea a fost
  descoperită la transformarea afirmației în card.
- Memoria workspace-ului poate conține erori. O afirmație veche se reverifică
  în documentația oficială înainte de a fi transformată în element al hărții
  sau în card.
