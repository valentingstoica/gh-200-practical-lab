# Next Session

## Singurul task propus

Diagnosticarea și remedierea unei rulări eșuate de CI, pornind de la o defecțiune
introdusă intenționat în aplicație.

## Înainte de execuție

Asistentul va explica mai întâi cum se citește o rulare eșuată: unde se vede
jobul și pasul care a căzut, cum se interpretează codul de ieșire, cum se
localizează linia relevantă din log și cum se distinge o problemă de cod de una
de configurare a workflow-ului.

Utilizatorul va strica intenționat testul sau codul aplicației, va deschide un
pull request, va observa rularea roșie, va formula o ipoteză pe baza logului și
va aplica remedierea până când rularea devine verde. Asistentul oferă câte un
singur pas și nu preia debugging-ul.

Dacă apare ocazia, se vor discuta și `ACTIONS_STEP_DEBUG`, re-rularea unui job
eșuat și diferența dintre un pas căzut și un job anulat.

## Rezultat urmărit

Utilizatorul localizează singur cauza eșecului pornind de la logul rulării,
explică de ce a căzut pasul respectiv și readuce pull request-ul în starea verde.

## Taskuri planificate ulterior

- `strategy: matrix` pentru testarea pe mai multe versiuni de Node.
- `concurrency` pentru anularea rulărilor redundante.
