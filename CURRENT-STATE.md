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

## Ce nu s-a făcut

- Nu a fost evaluat nivelul inițial al utilizatorului.
- Nu a fost creat sau executat niciun workflow GitHub Actions.
- Nu a fost creat niciun laborator practic.
