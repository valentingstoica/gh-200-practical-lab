# GH-200 Practical Study Roadmap

## Scop

Acest traseu transforma programa GH-200 intr-o pregatire bazata pe lucru efectiv.
Teoria nu este parcursa separat si exhaustiv inaintea practicii. Fiecare concept
este introdus atunci cand devine necesar pentru construirea, observarea sau
repararea unei automatizari.

Traseul urmareste competentele oficiale documentate in
`GH-200-EXAM-OBJECTIVES.md`. Ordinea nu copiaza programa: porneste de la
mecanismele de baza, construieste dependentele necesare si revine periodic la
securitate, debugging, cost si operare.

## Cum se desfasoara o sesiune

Fiecare sesiune are un singur task clar si, cand subiectul permite, urmeaza
aceasta bucla:

1. Pornim de la o problema concreta din activitatea unui software developer sau
   DevOps engineer.
2. Clarificam rezultatul dorit si beneficiul, in limbaj beginner-friendly.
3. Introducem doar teoria minima necesara pentru prima incercare.
4. Utilizatorul construieste sau modifica solutia, cu indicii graduale.
5. Rulam si observam rezultatul in GitHub Web UI si/sau cu `gh`.
6. Investigam o eroare reala sau introdusa intentionat.
7. Comparam varianta minima cu o varianta potrivita pentru productie.
8. Notam simptomul, cauza, metoda de diagnostic si remedierea.
9. Verificam intelegerea printr-o schimbare mica realizata cu mai putin ajutor.

Nu toate aceste etape trebuie fortate intr-o singura sesiune. Taskul ramane mic,
iar un concept dificil poate primi un laborator suplimentar inainte de avansare.

## Stilul explicatiilor

- Presupunem ca subiectul este nou si explicam fiecare termen necesar.
- Folosim exemple concrete, fragmente YAML mici, scheme si urmarirea pas cu pas a
  executiei.
- Aratam ce exista inainte, ce schimbam, ce se intampla dupa si de ce este util.
- Distingem regula tehnica de recomandarea de productie si de capcana de examen.
- Daca prima explicatie nu este clara, schimbam analogia sau exemplul.
- Nu consideram un subiect invatat doar pentru ca a fost prezentat.

## Cele doua fire practice

### Exemple izolate

Laboratoare mici izoleaza un singur mecanism, astfel incat efectul lui sa fie
usor de vazut. Exemple: un trigger manual, un output intre joburi, un cache miss,
o matrice sau o permisiune insuficienta.

### Proiect evolutiv

Un proiect software mic va primi treptat un pipeline realist: validare de pull
request, build, testare pe matrice, artifacte, release, deployment protejat,
componente reutilizabile, securizare si optimizare.

Modelul preferat este:

`exemplu izolat -> experiment/debugging -> integrare in proiect -> verificare`

Un concept care nu se potriveste natural proiectului ramane un laborator izolat,
fara integrare artificiala.

## Instrumente si perspective

- Folosim GitHub Web UI pentru grafuri de joburi, logs, annotations, summaries,
  artifacts, environments, approvals, secrets, variables si setari.
- Folosim `gh` pentru workflow runs, logs, reruns, artifacts, pull requests,
  checks si operare repetabila.
- Folosim gradual `gh api` pentru operatii REST care nu au o comanda dedicata.
- Cand este relevant, realizam aceeasi investigatie prin Web UI si CLI si
  comparam viteza, vizibilitatea si posibilitatea de automatizare.
- Exersam gasirea informatiei in documentatia oficiala GitHub, nu memorarea
  izolata a sintaxei.

## Traseul sesiunilor

Numarul sesiunilor este orientativ. O sesiune poate fi impartita daca verificarea
practica ar deveni prea mare, dar nu va combina mai multe taskuri independente.

### Etapa 0 - Punctul de plecare

| Sesiune | Task practic unic | Rezultat verificabil |
| ---: | --- | --- |
| 1 | Evaluarea practica initiala si verificarea instrumentelor | Profil initial al competentelor si Web UI, Git, `gh` si repository functionale |
| 2 | Crearea aplicatiei mici folosite de proiectul evolutiv | Aplicatie cu o comanda de build si o verificare automata executabile local |
| 3 | Crearea primului workflow manual izolat | Inputurile `workflow_dispatch` au tip, obligativitate si valoare implicita, iar schema si IntelliSense valideaza fisierul inainte ca rularea sa fie observata in Web UI si cu `gh` |

### Etapa 1 - Fundamentele workflow-urilor

| Sesiune | Task practic unic | Rezultat verificabil |
| ---: | --- | --- |
| 4 | Automatizarea validarii pentru push si pull request | Evenimentele, filtrele, scope-ul si permisiunile sunt demonstrate pe branch si PR |
| 5 | Modelarea pipeline-ului cu steps, jobs si `needs` | Ordinea executiei si propagarea unui esec sunt vizibile in graful rularii |
| 6 | Folosirea contextelor, expresiilor si variabilelor de mediu | Contextele `github`, `runner`, `env`, `vars`, `secrets`, `inputs`, `matrix`, `needs`, `strategy`, `job` si `steps` sunt evaluate static sau runtime, la momentul corect si fara expunerea datelor sensibile |
| 7 | Transferul datelor prin `GITHUB_ENV`, `GITHUB_OUTPUT` si job outputs | Datele circula controlat intre pasi si joburi |
| 8 | Adaugarea conditiilor si workflow commands | Joburi executate sau omise intentionat si annotations vizibile |
| 9 | Generarea unui raport cu `GITHUB_STEP_SUMMARY` si badge | Rezultatul pipeline-ului este lizibil fara parcurgerea tuturor logurilor |
| 10 | Construirea si depanarea unei matrici | `include`, `exclude`, `fail-fast` si `max-parallel` sunt observate practic |
| 11 | Testarea cu un service container | Serviciu pornit cu port si health check, consumat de testele aplicatiei |
| 12 | Reutilizarea YAML in acelasi fisier | Ancorele, aliasurile si merge-ul sunt create si apoi interpretate dintr-un exemplu existent |

### Etapa 2 - Date, performanta si operarea rularilor

| Sesiune | Task practic unic | Rezultat verificabil |
| ---: | --- | --- |
| 13 | Publicarea si consumarea unui artifact | Artifact transferat intre joburi si descarcat prin Web UI si `gh` |
| 14 | Accelerarea dependintelor cu cache | Cache miss si cache hit comparate prin chei, restore keys si durate |
| 15 | Diagnosticarea unei rulari cu mai multe erori | Cauzele sunt gasite din graph, annotations si logs, apoi joburile sunt rerulate selectiv |
| 16 | Administrarea rularilor, logurilor si retentiei prin API | `gh api` listeaza si administreaza resursele fara operatii manuale repetitive |
| 17 | Optimizarea unei matrici si a retentiei | Costul estimat, paralelismul si stocarea sunt reduse fara pierderea acoperirii necesare |
| 18 | Investigarea unei schimbari de runner image | Software-ul preinstalat si versiunile sunt identificate, iar pipeline-ul devine explicit |

### Etapa 3 - Reutilizare si distributie interna

| Sesiune | Task practic unic | Rezultat verificabil |
| ---: | --- | --- |
| 19 | Crearea unui reusable workflow | `workflow_call`, inputs, secrets si outputs sunt consumate de un caller |
| 20 | Crearea unui composite action | Logica repetata la nivel de steps este impachetata si reutilizata |
| 21 | Compararea mecanismelor de reutilizare | Un scenariu este rezolvat argumentat cu starter workflow, reusable workflow sau composite action |
| 22 | Folosirea si adaptarea unui starter workflow | Template public sau organizational adaptat fara copiere oarba |
| 23 | Guvernarea template-urilor si componentelor reutilizabile | Accesul public/privat si politicile organizationale sunt demonstrate sau simulate documentat |
| 24 | Operarea ciclului de viata al unui workflow | Dezactivarea, reactivarea si diferenta fata de stergere sunt observate practic |

### Etapa 4 - Crearea si mentenanta actiunilor custom

| Sesiune | Task practic unic | Rezultat verificabil |
| ---: | --- | --- |
| 25 | Crearea unei actiuni JavaScript | Metadata, inputs, outputs si workflow commands functioneaza intr-un consumer |
| 26 | Depanarea si impachetarea actiunii JavaScript | Eroare introdusa intentionat, diagnosticata si remediata; distributia este reproductibila |
| 27 | Crearea unei actiuni Docker | `action.yml`, imaginea si entrypoint-ul ruleaza pe hosted runner |
| 28 | Compararea JavaScript, Docker si composite actions | Alegerea tipului potrivit este justificata prin portabilitate, viteza si mentenanta |
| 29 | Versionarea si publicarea unei actiuni | Release, tag-uri si strategie de versiuni consumate din alt workflow |
| 30 | Evaluarea distributiei prin Marketplace | Cerintele de publicare, branding si public/private sunt aplicate sau simulate documentat |
| 31 | Investigarea actiunilor imuabile | Efectele asupra sursei, registry-ului si version pinning sunt demonstrate intr-un exemplu controlat |

### Etapa 5 - Administrarea GitHub Actions la scara

| Sesiune | Task practic unic | Rezultat verificabil |
| ---: | --- | --- |
| 32 | Compararea runnerelor GitHub-hosted si self-hosted | Alegerea runnerului este argumentata pentru cost, securitate, software si retea |
| 33 | Configurarea controlata a unui self-hosted runner | Runner inregistrat, etichetat, folosit de un job si eliminat in siguranta |
| 34 | Diagnosticarea unui runner indisponibil | Labels, groups, queue, conectivitate si software sunt verificate sistematic |
| 35 | Modelarea runner groups si a accesului | Repository-urile permise si izolarea workload-urilor sunt configurate sau simulate documentat |
| 36 | Instalarea software-ului necesar pe runners | `setup-*`, package manager, container sau imagine custom sunt comparate intr-un caz real |
| 37 | Evaluarea restrictiilor de retea si IP allow lists | Cerintele de acces sunt reprezentate intr-un scenariu enterprise concret |
| 38 | Aplicarea politicilor organizationale pentru actions | Allow/deny, verified actions si restrictiile de versionare sunt configurate sau simulate |
| 39 | Administrarea secrets si variables pe mai multe scope-uri | Diferentele organization/repository/environment sunt demonstrate in workflow |
| 40 | Administrarea programatica a secrets si variables | Web UI, `gh secret`/`gh variable` si API sunt comparate fara expunerea valorilor |

Pentru functii organizationale sau enterprise indisponibile in contul de
laborator, sesiunea foloseste documentatia oficiala, capturi sau configuratii
simulate si un exercitiu de decizie. Nu pretindem ca o setare a fost executata
daca accesul real nu exista.

### Etapa 6 - Securitate, deployment si supply chain

| Sesiune | Task practic unic | Rezultat verificabil |
| ---: | --- | --- |
| 41 | Reducerea permisiunilor `GITHUB_TOKEN` | Workflow-ul functioneaza cu permisiuni explicite minime si diferenta fata de PAT este demonstrata |
| 42 | Exploatarea si remedierea unei script injection controlate | Inputul neverificat este identificat, izolat si transmis sigur |
| 43 | Evaluarea si fixarea actiunilor third-party | Actiunile sunt verificate si fixate la SHA complet cu decizie documentata |
| 44 | Protejarea unui deployment cu environment | Secrets, reguli de protectie si approval gate controleaza promovarea |
| 45 | Autentificarea cloud cu OIDC | `id-token` si credentialele temporare sunt explicate si aplicate intr-un exemplu disponibil |
| 46 | Generarea unei artifact attestation | Provenance metadata este generata si verificata pentru un artifact |
| 47 | Securizarea workflow-urilor pornite din fork-uri | Evenimentele, permisiunile si accesul la secrets sunt testate intr-un scenariu de PR |
| 48 | Auditarea pipeline-ului proiectului evolutiv | Riscurile, costurile si oportunitatile de optimizare sunt prioritizate si remediate |

### Etapa 7 - Integrare si pregatire finala

| Sesiune | Task practic unic | Rezultat verificabil |
| ---: | --- | --- |
| 49 | Implementarea unui ticket CI fara reteta | Cerinta profesionala este transformata autonom intr-un workflow verificat |
| 50 | Implementarea unui ticket de release/deployment | Artifactul trece controlat de la build la environment protejat |
| 51 | Repararea unui repository cu defecte multiple | Triggers, matrice, outputs, cache, permissions si runner issues sunt depanate sistematic |
| 52 | Simularea practica GH-200 | Set de cerinte time-boxed rezolvat, cu lacune clasificate pe domenii |
| 53 | Remedierea lacunelor din simulare | Exercitii tintite elimina punctele slabe observate |
| 54 | Recapitularea finala pe obiective | Fiecare obiectiv este explicat printr-un exemplu realizat si o decizie practica |

## Elemente recurente

Acestea nu sunt amanate pana la o etapa unica:

- **Debugging:** fiecare etapa contine erori intentionate si citirea logurilor.
- **Securitate:** permisiunile, inputurile, secrets si pinning-ul sunt verificate
  de la primele workflow-uri.
- **Cost si performanta:** observam durata, paralelismul, cache-ul si retentia.
- **Web UI si CLI:** alegem interfata potrivita si invatam echivalentele utile.
- **Documentatie oficiala:** exersam cautarea raspunsului si validarea sintaxei.
- **Citirea workflow-urilor:** interpretam configuratii existente, nu doar scriem.
- **Decizii profesionale:** comparam alternative si compromisuri, nu memoram o
  singura reteta.

## Maparea domeniilor oficiale

| Domeniu GH-200 | Sesiuni principale | Acoperire recurenta |
| --- | --- | --- |
| Author and manage workflows (20-25%) | 3-14, 19 | 15-18, 41-48, 49-54 |
| Consume and troubleshoot workflows (15-20%) | 15-24 | 10, 13-14, 34, 49-54 |
| Author and maintain actions (15-20%) | 20, 25-31 | 38, 43, 48-54 |
| Manage GitHub Actions for the enterprise (20-25%) | 23, 32-40 | 18, 44, 47-54 |
| Secure and optimize automation (10-15%) | 14, 17, 41-48 | Toate etapele, incepand cu primul workflow |

## Evidenta progresului

Pentru fiecare sesiune finalizata, `CURRENT-STATE.md` va pastra:

- rezultatul practic obtinut;
- conceptele demonstrate;
- erorile importante, cauza si remedierea;
- nivelul de ajutor necesar;
- punctele care trebuie reluate;
- urmatorul task unic.

Traseul se adapteaza pe baza rezultatelor. Ponderile examenului ghideaza timpul
total: authoring-ul workflow-urilor si administrarea enterprise primesc cea mai
mare acoperire, dar niciun obiectiv oficial nu este omis.

## Criteriul de pregatire

Pregatirea nu este considerata completa doar prin parcurgerea listei. La final,
utilizatorul trebuie sa poata:

- explica beneficiul si comportamentul mecanismelor GH-200 prin exemple concrete;
- construi si modifica workflow-uri fara o reteta completa;
- interpreta un workflow scris de altcineva;
- diagnostica esecuri din Web UI, `gh`, logs si API;
- alege intre alternative pe baza securitatii, costului si mentenantei;
- opera componentele relevante la nivel de repository si intelege guvernarea la
  nivel de organization/enterprise;
- lega fiecare obiectiv oficial de o experienta practica verificata.
