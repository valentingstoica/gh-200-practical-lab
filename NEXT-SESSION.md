# Next Session

## Singurul task propus

Adăugarea și utilizarea unui input manual în primul workflow pentru introducerea
contextelor și expresiilor GitHub Actions.

## Înainte de execuție

Asistentul va prezenta explicit ce va învăța utilizatorul și modelul mental
minimal, apoi va oferi câte un singur pas. Utilizatorul va executa fiecare
acțiune, va comunica ce observă, iar asistentul va explica rezultatul înainte de
pasul următor.

Exercițiul va acoperi gradual:

- definirea unui input simplu pentru `workflow_dispatch`;
- accesarea valorii prin contextul `inputs`;
- sintaxa expresiilor `${{ }}`;
- folosirea inputului într-o comandă `run`;
- declanșarea manuală și verificarea valorii în loguri.

La final, asistentul va prezenta explicit ce a învățat utilizatorul și va
verifica înțelegerea printr-o explicație formulată de acesta. Asistentul nu va
executa exercițiul în locul utilizatorului. Dacă apare o eroare, va opri
progresia, va explica diagnosticul și va ghida utilizatorul fără să preia
automat controlul. Niciun commit și niciun push nu vor fi efectuate fără cereri
directe și neechivoce.

## Rezultat urmărit

Utilizatorul configurează un input manual, îl furnizează din GitHub Web UI,
verifică valoarea în loguri și explică legătura dintre `workflow_dispatch`,
contextul `inputs` și expresia `${{ }}`.
