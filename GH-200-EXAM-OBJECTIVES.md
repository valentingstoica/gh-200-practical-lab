# GH-200 Exam Objectives

## Starea verificarii

- Examen: GH-200 GitHub Actions
- Data verificarii: 2026-09-19
- Versiunea competentelor: "Skills measured as of January 2026"
- Ultima actualizare afisata pentru pagina certificarii: 2026-08-07
- Nivel declarat: intermediar
- Durata evaluarii: 100 de minute
- Prag de promovare: 700

Ghidul oficial precizeaza ca obiectivele descriu modul in care sunt evaluate
competentele si ca examenul poate include si subiecte conexe. Majoritatea
intrebarilor vizeaza functionalitati general disponibile, dar pot aparea
functionalitati Preview utilizate frecvent.

## Profilul candidatului

Candidatul trebuie sa poata automatiza fluxuri de dezvoltare software cu GitHub
Actions. Sunt necesare competente pentru crearea si mentinerea workflow-urilor si
actiunilor, administrarea GitHub Actions la scara organizationala si enterprise,
precum si securizarea si optimizarea automatizarilor. Sunt presupuse cunostinte
despre CI/CD, repository-uri GitHub, GitHub Packages si integrarea serviciilor
third-party.

## Domenii si ponderi

| Domeniu | Pondere |
| --- | ---: |
| Author and manage workflows | 20-25% |
| Consume and troubleshoot workflows | 15-20% |
| Author and maintain actions | 15-20% |
| Manage GitHub Actions for the enterprise | 20-25% |
| Secure and optimize automation | 10-15% |

## 1. Author and manage workflows (20-25%)

### Configure workflow triggers and events

- Configurarea executiei programate, manuale si declansate de webhook-uri sau
  evenimente din repository.
- Alegerea scope-ului, permisiunilor si evenimentelor potrivite automatizarii.
- Definirea si validarea inputurilor `workflow_dispatch`, inclusiv tip,
  obligativitate si valoare implicita.
- Transmiterea inputurilor si maparea secretelor catre workflow-uri reutilizabile
  prin `workflow_call`.

### Design and implement workflow structure

- Folosirea joburilor, pasilor si logicii conditionale.
- Implementarea dependentelor dintre joburi.
- Folosirea workflow commands si a variabilelor de mediu.
- Configurarea service containers, inclusiv porturi, health checks si optiuni de
  container.
- Construirea matricelor cu `strategy` si `matrix`, inclusiv `include`,
  `exclude`, `fail-fast` si `max-parallel`.
- Optimizarea dimensiunii matricelor pentru cost si performanta si intelegerea
  schimbarilor imaginilor runnerelor.
- Folosirea ancorelor, aliasurilor si merge-ului YAML pentru reutilizare in
  acelasi fisier.
- Folosirea contextelor predefinite, inclusiv `github`, `runner`, `env`, `vars`,
  `secrets`, `inputs`, `matrix`, `needs`, `strategy`, `job` si `steps`.
- Evaluarea expresiilor `${{ }}`, diferentierea evaluarii statice de cea din
  runtime si prevenirea expunerii secretelor.
- Intelegerea actiunilor imuabile si a cerintelor de version pinning.
- Folosirea instrumentelor de editor pentru completare, IntelliSense si
  validarea workflow-urilor.

### Manage workflow execution and outputs

- Configurarea cache-ului, artifactelor si politicilor de retentie prin API-urile
  REST pentru loguri, artifacte si workflow runs.
- Transferul datelor intre pasi si joburi prin artifacte, outputs,
  `GITHUB_ENV`, `GITHUB_OUTPUT` si outputs ale workflow-urilor reutilizabile.
- Generarea rapoartelor Markdown cu `GITHUB_STEP_SUMMARY`.
- Adaugarea status badges si a protectiilor pentru environments.

## 2. Consume and troubleshoot workflows (15-20%)

### Interpret workflow behavior and results

- Identificarea triggerelor si efectelor unui workflow din configuratie si
  loguri.
- Diagnosticarea executarilor esuate folosind logurile si istoricul.
- Interpretarea ancorelor, aliasurilor si maparilor YAML combinate.
- Interpretarea expansiunii matricelor si corelarea joburilor cu axele matricei.
- Analizarea esecurilor intre variante si rerularea selectiva a joburilor.

### Access workflow artifacts and logs

- Localizarea workflow-urilor, logurilor si artifactelor in interfata si prin
  API.
- Descarcarea si administrarea artifactelor.

### Use and manage workflow templates

- Consumarea workflow-urilor reutilizabile si a celor disponibile la nivel de
  organizatie.
- Folosirea template-urilor organizationale non-publice.
- Folosirea si adaptarea starter workflows publice si private.
- Diferentierea dintre starter workflows, reusable workflows si composite
  actions.
- Diferentierea dezactivarii unui workflow de stergerea acestuia.

## 3. Author and maintain actions (15-20%)

### Create and troubleshoot custom actions

- Identificarea si implementarea actiunilor JavaScript, Docker si composite.
- Intelegerea introducerii actiunilor imuabile pe hosted runners, inclusiv
  efectele asupra version pinning si surselor de registry.
- Diagnosticarea executiei actiunilor si a erorilor.

### Define action structure and metadata

- Definirea fisierelor obligatorii, structurii directoarelor si metadata.
- Implementarea workflow commands in actiuni.

### Distribute and maintain actions

- Alegerea distributiei publice, private sau prin GitHub Marketplace.
- Publicarea actiunilor in GitHub Marketplace.
- Aplicarea strategiilor de versionare si release.

## 4. Manage GitHub Actions for the enterprise (20-25%)

### Distribute and govern actions and workflows

- Definirea si administrarea componentelor si template-urilor reutilizabile.
- Controlarea accesului la actiuni si workflow-uri in enterprise.
- Configurarea politicilor organizationale de utilizare.

### Manage runners at scale

- Configurarea si monitorizarea runnerelor GitHub-hosted si self-hosted.
- Aplicarea IP allow lists si a setarilor de retea.
- Administrarea runner groups si diagnosticarea problemelor runnerelor.
- Identificarea software-ului preinstalat si a versiunilor disponibile pe
  GitHub-hosted runners.
- Instalarea software-ului suplimentar prin actiuni `setup-*`, package managers,
  cache, imagini container sau imagini self-hosted personalizate.

### Manage encrypted secrets and variables

- Definirea si scope-ul secretelor si variabilelor la nivel de organizatie,
  repository si environment.
- Accesarea si folosirea secretelor si variabilelor in workflow-uri si actiuni.
- Administrarea programatica a secretelor si variabilelor prin API-urile REST.

## 5. Secure and optimize automation (10-15%)

### Implement security best practices

- Folosirea protectiilor de environment si a approval gates.
- Identificarea actiunilor de incredere din Marketplace.
- Prevenirea script injection prin validarea inputurilor, permisiuni minime,
  evitarea datelor neverificate in `run:`, quoting corect si preferarea
  actiunilor verificate fata de scripturile inline.
- Intelegerea ciclului de viata si scope-ului `GITHUB_TOKEN`, configurarea
  permisiunilor granulare si diferentierea fata de PAT.
- Folosirea OIDC si a permisiunii `id-token` pentru credidentiale cloud
  temporare.
- Fixarea actiunilor third-party la SHA-ul complet al commitului si evitarea
  referintelor flotante fara justificare.
- Aplicarea politicilor allow/deny si a aprobarilor pentru actiuni neverificate.
- Generarea si verificarea artifact attestations si a provenance metadata.

### Optimize workflow performance and cost

- Optimizarea cache-ului si retentiei artifactelor, inclusiv prin API REST.
- Recomandarea strategiilor de scalare si optimizare a workflow-urilor.

## Observatii pentru traseul practic

- Domeniile cu pondere maxima sunt authoring-ul workflow-urilor si administrarea
  enterprise.
- Securitatea nu este izolata intr-un singur domeniu: permisiunile, secretele,
  OIDC, pinning-ul si prevenirea injectiilor apar in mai multe contexte.
- Debugging-ul trebuie exersat explicit, inclusiv loguri, matrice, artifacte,
  templates si runners.
- Obiectivele introduse sau accentuate in versiunea din ianuarie 2026 includ
  YAML anchors, service containers, job summaries, actiuni imuabile, artifact
  attestations si administrarea programatica a retentiei, secretelor si
  variabilelor.

Aceste observatii organizeaza programa, dar nu stabilesc inca ordinea
laboratoarelor.

## Surse oficiale

- [Study guide for Exam GH-200: GitHub Actions](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-200)
- [GitHub Actions certification details](https://learn.microsoft.com/en-us/credentials/certifications/github-actions/)
- [GitHub Actions documentation](https://docs.github.com/en/actions)
- [Secure use reference](https://docs.github.com/en/actions/reference/security/secure-use)

