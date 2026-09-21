# Next Session

## Singurul task propus

Automatizarea validării aplicației pentru evenimentele `push` și
`pull_request`.

## Înainte de execuție

Asistentul va explica mai întâi modelul mental al integrării continue, diferența
dintre evenimentele `push` și `pull_request`, filtrele de branch și permisiunile
minime. Sintaxa YAML necesară va fi prezentată printr-un exemplu minim înaintea
implementării.

Utilizatorul va construi workflow-ul pas cu pas, va crea branch-ul și
pull request-ul necesare exercițiului și va observa rulările în GitHub Web UI.
Asistentul va oferi câte un singur pas și va explica rezultatul înainte de
continuare. Niciun commit și niciun push nu vor fi efectuate de asistent fără
cereri directe și neechivoce.

## Rezultat urmărit

Validarea `npm test` rulează automat pentru un push pe branch-ul configurat și
pentru un pull request, cu scope și permisiuni minime explicate de utilizator.
