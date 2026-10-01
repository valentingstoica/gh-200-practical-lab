# GH-200 Knowledge Map

Harta cunoștințelor GH-200 reprezintă **adevărul suprem** al pregătirii, conform
`LEARNING-METHOD.md`. Conține tot ce trebuie știut și practicat pentru examen.
Roadmap-ul, metodele și didactica se construiesc după hartă, iar Anki o
oglindește 1 la 1.

## Surse

- [Study guide for Exam GH-200: GitHub Actions](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-200),
  „Skills measured as of January 2026”, pagină actualizată la 2026-02-06,
  verificată la 2026-10-01.
- [GitHub Actions documentation](https://docs.github.com/en/actions), pentru
  conținutul exact al fiecărui element.

## Convenții

- **ID:** `COD-NN`, stabil. Un ID nu se renumerotează și nu se refolosește.
  Elementele noi primesc următorul număr liber din capitol.
- **Element:** o bucată de cunoaștere mică, clară și verificabilă.
  - Elementele predate conțin cunoștința exactă, verificată.
  - Elementele nepredate numesc ce trebuie știut. Conținutul exact se verifică
    în documentația oficială în sesiunea în care sunt predate.
- **Tip:** `T` = teorie (ce și de ce), `P` = practică (cum se face).
- **Sursă:** bullet-ul oficial din programa GH-200, conform codurilor de mai jos.
- **Status:** `✅ Sn` = predat și înțeles în sesiunea `n`; gol = nepredat.
- **Anki:** fiecare element `✅ Sn` are carduri în `anki/Snn.txt`, cu tag-urile
  `COD COD-NN Sn`. Elementele nepredate primesc carduri când sunt predate.

## Codurile programei oficiale

| Cod | Bullet oficial |
| --- | --- |
| **D1** | **Author and manage workflows (20–25%)** |
| D1.1.a | Configure workflows to run for scheduled, manual, webhook, and repository events |
| D1.1.b | Choose appropriate scope, permissions, and events for workflow automation |
| D1.1.c | Define and validate `workflow_dispatch` inputs; pass inputs to reusable workflows via `workflow_call` with inputs and secrets mapping |
| D1.2.a | Use jobs, steps, and conditional logic |
| D1.2.b | Implement dependencies between jobs |
| D1.2.c | Use workflow commands and environment variables |
| D1.2.d | Use service containers; configure ports, health checks, and container options |
| D1.2.e | Use strategy and matrix; include/exclude; fail-fast, max-parallel; optimize matrix size; account for runner image changes |
| D1.2.f | Implement YAML anchors and aliases (`&`, `*`, merge `<<`) within a single workflow file |
| D1.2.g | Use predefined contexts; understand immutable actions behavior and version pinning requirements |
| D1.2.h | Evaluate expressions with `${{ }}`; static vs runtime evaluation; prevent secret leakage |
| D1.2.i | Leverage editor tooling (VS Code extension, YAML schema completion, IntelliSense, validation) |
| D1.3.a | Configure caching and artifact management; apply retention policies via REST APIs |
| D1.3.b | Pass data between jobs and steps (artifacts, outputs, `GITHUB_ENV`, `GITHUB_OUTPUT`, reusable workflow outputs) |
| D1.3.c | Generate job summaries using `GITHUB_STEP_SUMMARY` |
| D1.3.d | Add workflow status badges and environment protections |
| **D2** | **Consume and troubleshoot workflows (15–20%)** |
| D2.1.a | Identify workflow triggers and effects from configuration and logs |
| D2.1.b | Diagnose failed workflow runs using logs and run history |
| D2.1.c | Expand and interpret YAML anchors, aliases, and merged mappings |
| D2.1.d | Interpret matrix expansions; correlate job names to axes; analyze failures; selectively rerun matrix jobs |
| D2.2.a | Locate workflows, logs, and artifacts in the UI and via API |
| D2.2.b | Download and manage workflow artifacts |
| D2.3.a | Consume organization-level and reusable workflows |
| D2.3.b | Consume non-public organization workflow templates |
| D2.3.c | Use starter workflows; customize and adapt |
| D2.3.d | Differentiate starter workflows vs reusable workflows vs composite actions |
| D2.3.e | Contrast disabling and deleting workflows |
| **D3** | **Author and maintain actions (15–20%)** |
| D3.1.a | Identify and implement action types (JavaScript, Docker, composite); immutable actions rollout, version pinning, registry sources |
| D3.1.b | Troubleshoot action execution and errors |
| D3.2.a | Specify required files, directory structure, and metadata |
| D3.2.b | Implement workflow commands within actions |
| D3.3.a | Select distribution models (public, private, marketplace) |
| D3.3.b | Publish actions to the GitHub Marketplace |
| D3.3.c | Apply versioning and release strategies |
| **D4** | **Manage GitHub Actions for the enterprise (20–25%)** |
| D4.1.a | Define and manage reusable components and templates |
| D4.1.b | Control access to actions and workflows within the enterprise |
| D4.1.c | Configure organizational use policies |
| D4.2.a | Configure and monitor GitHub-hosted and self-hosted runners |
| D4.2.b | Apply IP allow lists and networking settings |
| D4.2.c | Manage runner groups and troubleshoot runner issues |
| D4.2.d | Identify preinstalled software on GitHub-hosted runners; install additional software at runtime |
| D4.3.a | Define and scope encrypted secrets and variables (organization, repository, environment) |
| D4.3.b | Access secrets and variables in workflows and actions; manage them via REST APIs |
| **D5** | **Secure and optimize automation (10–15%)** |
| D5.1.a | Use environment protections and approval gates |
| D5.1.b | Identify and use trustworthy actions from the Marketplace |
| D5.1.c | Mitigate script injection |
| D5.1.d | Understand `GITHUB_TOKEN` lifecycle; granular permissions; contrast with PAT; restrict write scopes |
| D5.1.e | Use OIDC token (`id-token` permission) for cloud provider federation |
| D5.1.f | Pin third-party actions to full commit SHAs; immutable actions enforcement; avoid floating refs |
| D5.1.g | Enforce action usage policies (allow/deny lists, required reviewers for unverified actions) |
| D5.1.h | Generate and verify artifact attestations / provenance |
| D5.2.a | Configure caching and artifact retention for efficiency; retention policies via REST APIs |
| D5.2.b | Recommend strategies for scaling and optimizing workflows |

## D1 — Author and manage workflows

### WF — Fișierul workflow și structura YAML

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| WF-01 | Fișierele workflow se află în `.github/workflows/`, cu extensia `.yml` sau `.yaml`. | T | D1.2.a | ✅ S1 |
| WF-02 | Cheile unui workflow minimal sunt `name`, `on`, `permissions`, `jobs`; fiecare job are `runs-on` și `steps`. | T | D1.2.a | ✅ S1 |
| WF-03 | Un workflow run este o execuție concretă a unui workflow; conține joburi, iar fiecare job conține pași. | T | D1.2.a | ✅ S1 |
| WF-04 | `runs-on` alege runnerul jobului; `ubuntu-latest` este o mașină virtuală Ubuntu găzduită de GitHub. | T | D1.2.a | ✅ S1 |
| WF-05 | Un pas eșuează când comanda lui se termină cu un exit code diferit de 0. | T | D2.1.b | ✅ S3 |
| WF-06 | CI rulează testele automate la fiecare schimbare, pentru a detecta regresiile fără verificări manuale. | T | Profilul candidatului (CI/CD) | ✅ S3 |
| WF-07 | Versiunile numerice se scriu între ghilimele în YAML; `20.10` necitat devine numărul `20.1`. | P | D1.2.a | ✅ S4 |
| WF-08 | `: ` într-un scalar YAML simplu este citit ca separator de mapare; se folosește blocul `\|`. | P | D1.2.a | ✅ S6 |
| WF-09 | Shell-ul implicit al pașilor `run` pe runnerele Windows este `pwsh`. | T | D1.2.c | ✅ S6 |
| WF-10 | În PowerShell, o variabilă de mediu se citește cu `$env:NAME`. | P | D1.2.c | ✅ S6 |
| WF-11 | `defaults.run.shell` stabilește același shell pentru toți pașii `run` ai jobului. | P | D1.2.a | ✅ S6 |
| WF-12 | `shell: bash` pe Windows folosește bash-ul inclus în Git for Windows. | T | D1.2.a | ✅ S6 |
| WF-13 | `echo` din bash nu interpretează `\n` fără opțiunea `-e`. | P | D1.2.a | ✅ S6 |
| WF-14 | Pașii `uses` (acțiune) față de pașii `run` (comandă) și transmiterea inputurilor cu `with`. | P | D1.2.a | |
| WF-15 | Cheia `run-name` și numele afișat al unei rulări. | P | D1.2.a | |
| WF-16 | `working-directory` și `shell` la nivel de pas. | P | D1.2.a | |

### TRG — Triggere, evenimente și inputuri

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| TRG-01 | Categoriile de declanșare: evenimente din repository, programate, manuale și webhook externe. | T | D1.1.a | |
| TRG-02 | `workflow_dispatch` permite pornirea manuală a workflow-ului din tabul Actions. | T | D1.1.a | ✅ S2 |
| TRG-03 | Butonul „Run workflow” apare numai dacă fișierul workflow există pe branch-ul default. | T | D1.1.a | ✅ S2 |
| TRG-04 | Un input `workflow_dispatch` se definește cu `description`, `required`, `type` și `default`. | P | D1.1.c | ✅ S2 |
| TRG-05 | Inputul `recipient` se citește cu `${{ inputs.recipient }}`. | P | D1.1.c | ✅ S2 |
| TRG-06 | Tipurile de input `workflow_dispatch` disponibile și validarea valorilor. | P | D1.1.c | |
| TRG-07 | Diferența dintre contextul `inputs` și `github.event.inputs`. | T | D1.1.c | |
| TRG-08 | `schedule` cu sintaxa cron: fus orar, întârzieri și rularea numai pe branch-ul default. | P | D1.1.a | |
| TRG-09 | `repository_dispatch`, declanșat prin REST API, cu `event_type` și `client_payload`. | P | D1.1.a | |
| TRG-10 | `workflow_run`, declanșat de finalizarea altui workflow. | P | D1.1.a | |
| TRG-11 | Filtrele `branches`, `branches-ignore`, `tags`, `paths` și `paths-ignore`. | P | D1.1.a | |
| TRG-12 | La `pull_request`, filtrul `branches` se aplică branch-ului țintă (base), nu celui sursă. | T | D1.1.a | ✅ S4 |
| TRG-13 | Activity types implicite pentru `pull_request` sunt `opened`, `synchronize` și `reopened`. | T | D1.1.a | ✅ S4 |
| TRG-14 | `types:` declarat explicit înlocuiește lista implicită de activity types, nu o completează. | T | D1.1.a | ✅ S4 |
| TRG-15 | Un `push` nefiltrat plus `pull_request` produc două rulări pentru un commit pe un branch cu PR deschis, deoarece evenimentele sunt evaluate independent. | T | D1.1.b | ✅ S4 |
| TRG-16 | Pentru `push` și `pull_request`, definiția workflow-ului este citită din commitul declanșator. | T | D1.1.b | ✅ S4 |
| TRG-17 | Pentru `schedule`, definiția workflow-ului este citită de pe branch-ul default. | T | D1.1.b | ✅ S4 |
| TRG-18 | Pentru `workflow_dispatch`, rulează versiunea workflow-ului de pe branch-ul sau tag-ul ales la declanșare; fișierul trebuie să existe și pe branch-ul default. Corectat în 6b. | T | D1.1.b | ✅ S4 |
| TRG-19 | Pentru `pull_request_target`, definiția workflow-ului este citită de pe branch-ul țintă (base). | T | D1.1.b | ✅ S4 |
| TRG-20 | Evenimentele care declanșează un workflow numai dacă fișierul există pe branch-ul default. | T | D1.1.a | |
| TRG-21 | Cine controlează un branch controlează workflow-urile rulate din el; modificările din `.github/workflows/` se revizuiesc ca cod executabil. | T | D1.1.b | ✅ S4 |
| TRG-22 | Alegerea între `pull_request` și `pull_request_target` după permisiuni și accesul la secrete. | T | D1.1.b | |

### JOB — Joburi, pași, condiții și dependențe

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| JOB-01 | Pașii aceluiași job rulează secvențial, pe același runner. | T | D1.2.a | ✅ S5 |
| JOB-02 | Joburile fără dependențe rulează în paralel, fiecare pe alt runner. | T | D1.2.b | ✅ S5 |
| JOB-03 | `needs: test` face ca jobul să aștepte `test` și să ruleze numai dacă `test` a reușit. | P | D1.2.b | ✅ S5 |
| JOB-04 | Implicit, un job este sărit (skipped) dacă un job din `needs` eșuează. | T | D1.2.b | ✅ S5 |
| JOB-05 | Ordinea joburilor definită prin `needs` se vede în graful rulării din Web UI. | P | D1.2.b | ✅ S5 |
| JOB-06 | Condiția `if` la nivel de job și de pas. | P | D1.2.a | |
| JOB-07 | Funcțiile de status `success()`, `failure()`, `always()`, `cancelled()` și condiția implicită. | T | D1.2.a | |
| JOB-08 | `needs` cu mai multe joburi și rularea unui job dependent după un eșec. | P | D1.2.b | |
| JOB-09 | `continue-on-error` la nivel de pas și de job. | P | D1.2.a | |
| JOB-10 | `timeout-minutes` la nivel de pas și de job. | P | D1.2.a | |

### CMD — Workflow commands și variabile de mediu implicite

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| CMD-01 | Sintaxa workflow commands `::command parameter=value::message`. | T | D1.2.c | |
| CMD-02 | Annotations `notice`, `warning` și `error`, cu fișier și linie. | P | D1.2.c | |
| CMD-03 | Gruparea logurilor (`group`, `endgroup`) și mesajele `debug`. | P | D1.2.c | |
| CMD-04 | Mascarea unei valori cu `add-mask`. | P | D1.2.c | |
| CMD-05 | Adăugarea unui director în `PATH` prin `GITHUB_PATH`. | P | D1.2.c | |
| CMD-06 | Variabilele de mediu implicite (de exemplu `GITHUB_SHA`, `GITHUB_REF`, `RUNNER_OS`) și relația lor cu contextele. | T | D1.2.c | |

### CTX — Contexte

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| CTX-01 | Un context este un obiect cu informații despre rulare, runner, variabile etc., citit cu `${{ context.property }}`. | T | D1.2.g | ✅ S6 |
| CTX-02 | `github.actor` conține username-ul utilizatorului care a declanșat rularea inițială. | T | D1.2.g | ✅ S6 |
| CTX-03 | `github.event` conține payload-ul complet al webhook-ului care a declanșat rularea. | T | D1.2.g | |
| CTX-04 | `github.ref`, `github.sha` și `github.event_name`. | T | D1.2.g | |
| CTX-05 | `runner.os` conține sistemul de operare al runnerului (`Linux`, `Windows`, `macOS`), iar `runner.name` numele runnerului. | T | D1.2.g | ✅ S6 |
| CTX-06 | `env` se definește la nivel de workflow, job și pas; la conflict câștigă nivelul cel mai specific. | T | D1.2.c | ✅ S6 |
| CTX-07 | `vars` conține configurație nesensibilă, afișată în loguri; `secrets` conține valori sensibile, mascate ca `***`. | T | D1.2.g | ✅ S6 |
| CTX-08 | Valorile matricei se citesc din `matrix` (de exemplu `matrix.os`); `strategy` conține doar `fail-fast`, `job-index`, `job-total` și `max-parallel`. | T | D1.2.g | ✅ S6 |
| CTX-09 | `strategy.job-index` este indexul, numerotat de la zero, al jobului curent din matrice; `strategy.job-total` este numărul total de joburi din matrice. | T | D1.2.g | ✅ S6 |
| CTX-10 | `needs.<job_id>.result` conține rezultatul unui job din `needs`: `success`, `failure`, `cancelled` sau `skipped`. | T | D1.2.g | ✅ S6 |
| CTX-11 | `steps.<id>.outcome` cere un `id` pe pasul anterior; sunt disponibili numai pașii care au rulat deja. | P | D1.2.g | ✅ S6 |
| CTX-12 | Diferența dintre `steps.<id>.outcome` și `steps.<id>.conclusion` când se folosește `continue-on-error`. | T | D1.2.g | |
| CTX-13 | `job.status` poate fi `success`, `failure` sau `cancelled`; nu există `in_progress`. | T | D1.2.g | ✅ S6 |
| CTX-14 | În `jobs.<job_id>.if` sunt disponibile contextele `github`, `needs`, `vars` și `inputs`. | T | D1.2.h | ✅ S6 |
| CTX-15 | `runner` nu este disponibil în `jobs.<job_id>.if`, deoarece cheia este evaluată înainte ca jobul să fie trimis unui runner. | T | D1.2.h | ✅ S6 |
| CTX-16 | Tabelul oficial de disponibilitate a contextelor pe chei de workflow. | P | D1.2.h | |
| CTX-17 | O proprietate inexistentă a unui context este evaluată ca șir gol. | T | D1.2.h | ✅ S6 |

### EXP — Expresii și prevenirea scurgerii secretelor

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| EXP-01 | `${{ }}` este sintaxa expresiilor; GitHub o evaluează și înlocuiește rezultatul în textul workflow-ului înainte de rularea shell-ului. | T | D1.2.h | ✅ S2 |
| EXP-02 | GitHub înlocuiește `${{ github.actor }}` înaintea scriptului; shell-ul (de exemplu bash) înlocuiește `$ACTOR`. | T | D1.2.h | ✅ S6 |
| EXP-03 | Evaluarea statică, la parsarea workflow-ului, față de evaluarea runtime și cheile evaluate în fiecare moment. | T | D1.2.h | |
| EXP-04 | Literali, operatori și reguli de comparație în expresii. | T | D1.2.h | |
| EXP-05 | Funcțiile `contains`, `startsWith`, `endsWith`, `format`, `join`, `toJSON`, `fromJSON` și `hashFiles`. | P | D1.2.h | |
| EXP-06 | Scrierea condițiilor `if` cu și fără `${{ }}`. | P | D1.2.h | |
| EXP-07 | Folosirea secretelor în condiții `if`. | P | D1.2.h | |
| EXP-08 | Runnerul înlocuiește cu `***` potrivirile exacte ale valorilor secretelor folosite în job. | T | D1.2.h | ✅ S6 |
| EXP-09 | Mascarea nu este o garanție: valorile transformate (Base64, inversate, împărțite) nu sunt mascate. | T | D1.2.h | ✅ S6 |
| EXP-10 | Datele structurate (JSON, YAML) nu se folosesc ca secret, deoarece mascarea cere potriviri exacte. | T | D1.2.h | ✅ S6 |
| EXP-11 | Un secret apărut nemascat în log impune ștergerea logului și rotirea secretului. | P | D1.2.h | ✅ S6 |

### MTX — Matrice, strategy și imaginile runnerelor

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| MTX-01 | O matrice rulează același job de mai multe ori, câte o dată pentru fiecare combinație de valori. | T | D1.2.e | ✅ S6 |
| MTX-02 | O valoare din matrice se folosește în `runs-on` cu `runs-on: ${{ matrix.os }}`. | P | D1.2.e | ✅ S6 |
| MTX-03 | Numărul de combinații al unei matrici cu mai multe axe. | T | D1.2.e | |
| MTX-04 | `include`: adăugarea de combinații și de valori suplimentare. | P | D1.2.e | |
| MTX-05 | `exclude`: eliminarea unor combinații. | P | D1.2.e | |
| MTX-06 | `fail-fast` și valoarea lui implicită. | T | D1.2.e | |
| MTX-07 | `max-parallel`. | T | D1.2.e | |
| MTX-08 | `continue-on-error` pentru anumite variante ale matricei. | P | D1.2.e | |
| MTX-09 | Numărul maxim de joburi generate de o matrice. | T | D1.2.e | |
| MTX-10 | Numele joburilor din matrice și corelarea lor cu axele. | P | D2.1.d | |
| MTX-11 | Analiza eșecurilor între variante și rerularea unui singur job din matrice. | P | D2.1.d | |
| MTX-12 | Reducerea dimensiunii matricei pentru cost și performanță. | P | D1.2.e | |
| MTX-13 | Schimbările imaginilor runnerelor: migrarea etichetelor `-latest` (`windows-latest` către Windows Server 2025) și retragerea imaginilor vechi (Ubuntu 20.04). | T | D1.2.e | |

### SVC — Service containers

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| SVC-01 | Rolul `services:`: servicii dependente (baze de date, cozi) pornite pentru un job. | T | D1.2.d | |
| SVC-02 | `image`, `env` și credențialele unui service container. | P | D1.2.d | |
| SVC-03 | Maparea porturilor și adresa serviciului: job pe runner față de job în container. | P | D1.2.d | |
| SVC-04 | Health checks prin `options`. | P | D1.2.d | |
| SVC-05 | Opțiunile de container (`options`, `volumes`). | P | D1.2.d | |
| SVC-06 | Rularea unui job într-un container cu `container:`. | P | D1.2.d | |
| SVC-07 | Cerințele de sistem de operare ale runnerului pentru service containers. | T | D1.2.d | |

### YML — YAML anchors, aliases și merge

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| YML-01 | Ancora `&name` marchează un nod pentru reutilizare. | T | D1.2.f | |
| YML-02 | Aliasul `*name` reutilizează nodul ancorat. | T | D1.2.f | |
| YML-03 | Cheia de merge `<<` combină o mapare ancorată într-o mapare nouă. | T | D1.2.f | |
| YML-04 | Suprascrierea cheilor după merge și precedența lor. | T | D1.2.f | |
| YML-05 | Reutilizarea pașilor repetați și limitele ancorelor (un singur fișier). | P | D1.2.f | |
| YML-06 | Expandarea manuală și interpretarea unei configurații cu anchors, aliases și merge. | P | D2.1.c | |

### DAT — Date între pași și joburi, artifacts și cache

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| DAT-01 | `GITHUB_ENV`: variabile de mediu pentru pașii următori ai aceluiași job. | P | D1.3.b | |
| DAT-02 | `GITHUB_OUTPUT` și citirea cu `steps.<id>.outputs.<name>`. | P | D1.3.b | |
| DAT-03 | Valori pe mai multe linii în fișierele de mediu, cu delimitator. | P | D1.3.b | |
| DAT-04 | Job outputs (`jobs.<id>.outputs`) și citirea cu `needs.<job>.outputs.<name>`. | P | D1.3.b | |
| DAT-05 | Transferul fișierelor între joburi cu `upload-artifact` și `download-artifact`. | P | D1.3.b | |
| DAT-06 | `retention-days` pentru un artifact. | P | D1.3.a | |
| DAT-07 | Diferența dintre artifact și cache. | T | D1.3.a | |
| DAT-08 | `actions/cache`: `key`, `restore-keys`, cache hit, cache miss și outputul `cache-hit`. | P | D1.3.a | |
| DAT-09 | Cache-ul integrat în acțiunile `setup-*` (de exemplu `setup-node` cu `cache`). | P | D1.3.a | |
| DAT-10 | Restricțiile de acces ale cache-ului între branch-uri, limita de mărime și evacuarea. | T | D1.3.a | |

### RPT — Job summaries și status badges

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| RPT-01 | Scrierea unui raport Markdown în `GITHUB_STEP_SUMMARY`. | P | D1.3.c | |
| RPT-02 | Unde apare summary-ul, cum se adaugă, se suprascrie și se șterge conținutul. | T | D1.3.c | |
| RPT-03 | URL-ul unui status badge și parametrii pentru branch și eveniment. | P | D1.3.d | |

### EDT — Editor tooling

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| EDT-01 | Extensia GitHub Actions pentru VS Code: vizualizarea rulărilor și a logurilor. | P | D1.2.i | |
| EDT-02 | Completarea și validarea YAML pe baza schemei workflow-urilor. | P | D1.2.i | |
| EDT-03 | IntelliSense pentru inputurile acțiunilor, pe baza metadatelor. | P | D1.2.i | |

## D2 — Consume and troubleshoot workflows

### TRB — Interpretare și diagnosticare

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| TRB-01 | `display_title` al unei rulări este titlul PR-ului pentru `pull_request` și mesajul commitului pentru `push`. | T | D2.1.a | ✅ S4 |
| TRB-02 | Cauza eșecului unui job se găsește în Web UI: rularea → jobul eșuat → pasul eșuat → logul (mesajul de eroare și exit code-ul). | P | D2.1.b | ✅ S5 |
| TRB-03 | Identificarea evenimentului și a efectelor unei rulări din configurație și loguri. | P | D2.1.a | |
| TRB-04 | Istoricul rulărilor și filtrarea după workflow, branch, eveniment și status. | P | D2.1.b | |
| TRB-05 | Rerularea tuturor joburilor, a joburilor eșuate sau a unui singur job. | P | D2.1.b | |
| TRB-06 | Debug logging: `ACTIONS_STEP_DEBUG`, `ACTIONS_RUNNER_DEBUG` și rerularea cu debug logging. | P | D2.1.b | |
| TRB-07 | Annotations în pagina de rezumat a rulării. | P | D2.1.b | |
| TRB-08 | Erori de configurare care fac rularea să eșueze înainte de crearea joburilor. | P | D2.1.b | |

### API — Rulări, loguri, artifacts și retenție în UI și prin REST API

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| API-01 | Statusul unei rulări sau al unui job în REST API este `queued`, `in_progress` sau `completed`; descrie faza din exterior, spre deosebire de `job.status`. | T | D2.2.a | ✅ S6 |
| API-02 | Localizarea workflow-urilor, rulărilor, logurilor și artifactelor în Web UI. | P | D2.2.a | |
| API-03 | Listarea workflow-urilor și a rulărilor prin REST API. | P | D2.2.a | |
| API-04 | Descărcarea și ștergerea logurilor prin REST API. | P | D1.3.a | |
| API-05 | Listarea, descărcarea și ștergerea artifactelor prin REST API. | P | D2.2.b | |
| API-06 | Descărcarea artifactelor din Web UI și cu `gh run download`. | P | D2.2.b | |
| API-07 | Retenția implicită a artifactelor și logurilor și limitele ei la repository, organizație și enterprise. | T | D1.3.a | |
| API-08 | Configurarea retenției prin REST API la nivel de repository și organizație. | P | D1.3.a | |
| API-09 | Anularea, rerularea și ștergerea rulărilor prin REST API. | P | D2.2.a | |
| API-10 | Listarea și ștergerea cache-urilor prin REST API. | P | D1.3.a | |

### TPL — Starter workflows, templates și ciclul de viață

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| TPL-01 | Starter workflow: schelet copiat, independent după creare. | T | D2.3.d | |
| TPL-02 | Workflow templates organizaționale în repository-ul `.github`, directorul `workflow-templates/`, cu fișierul `.properties.json`. | P | D4.1.a | |
| TPL-03 | Folosirea templates non-publice ale organizației. | P | D2.3.b | |
| TPL-04 | Adaptarea unui starter workflow și placeholder-ul `$default-branch`. | P | D2.3.c | |
| TPL-05 | Diferența dintre starter workflows, reusable workflows și composite actions. | T | D2.3.d | |
| TPL-06 | Diferența dintre dezactivarea și ștergerea unui workflow. | T | D2.3.e | |
| TPL-07 | Dezactivarea automată a workflow-urilor programate în repository-uri publice după 60 de zile fără activitate. | T | D2.3.e | |

### RWF — Reusable workflows

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| RWF-01 | Un reusable workflow se declară cu `on: workflow_call`. | T | D1.1.c | |
| RWF-02 | Apelarea cu `jobs.<id>.uses: owner/repo/.github/workflows/file.yml@ref`. | P | D2.3.a | |
| RWF-03 | Inputurile `workflow_call` și transmiterea lor cu `with`. | P | D1.1.c | |
| RWF-04 | Maparea secretelor și `secrets: inherit`. | P | D1.1.c | |
| RWF-05 | Outputurile unui reusable workflow. | P | D1.3.b | |
| RWF-06 | Limitele de imbricare și numărul de workflow-uri apelate. | T | D2.3.a | |
| RWF-07 | Permisiunile `GITHUB_TOKEN` în workflow-ul apelat. | T | D2.3.a | |
| RWF-08 | Variabilele `env` ale caller-ului nu se propagă în workflow-ul apelat. | T | D2.3.a | |
| RWF-09 | Folosirea workflow-urilor la nivel de organizație. | P | D2.3.a | |

## D3 — Author and maintain actions

### ACT — Tipuri de acțiuni, structură și metadata

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| ACT-01 | Cele trei tipuri de acțiuni: JavaScript, Docker container și composite. | T | D3.1.a | |
| ACT-02 | Fișierul de metadata `action.yml` / `action.yaml` și cheile `name`, `description`, `inputs`, `outputs`, `runs`. | P | D3.2.a | |
| ACT-03 | Valorile `runs.using` pentru fiecare tip de acțiune. | T | D3.2.a | |
| ACT-04 | Acțiunea JavaScript: toolkit-ul `@actions/*` și distribuirea dependențelor (bundling). | P | D3.1.a | |
| ACT-05 | Acțiunea Docker: `Dockerfile` sau imagine, `entrypoint`, `args` și runnerele suportate. | P | D3.1.a | |
| ACT-06 | Acțiunea composite: pașii `run` cer `shell`. | P | D3.1.a | |
| ACT-07 | Inputurile unei acțiuni ajung ca variabile `INPUT_<NAME>`. | T | D3.2.a | |
| ACT-08 | Outputurile unei acțiuni pentru fiecare tip. | P | D3.2.a | |
| ACT-09 | Workflow commands și funcțiile toolkit în acțiuni (outputs, annotations, mascare, eșec). | P | D3.2.b | |
| ACT-10 | Structura directoarelor, mai multe acțiuni într-un repository și acțiunile locale `uses: ./path`, care cer checkout. | P | D3.2.a | |
| ACT-11 | Scripturile `pre` și `post`. | T | D3.2.a | |
| ACT-12 | Diagnosticarea erorilor de execuție ale unei acțiuni. | P | D3.1.b | |

### DST — Distribuire, Marketplace și versionare

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| DST-01 | Distribuirea publică, privată și internă și setarea de acces pentru acțiunile din repository-uri private. | T | D3.3.a | |
| DST-02 | Cerințele de publicare în GitHub Marketplace. | T | D3.3.b | |
| DST-03 | `branding` în metadata acțiunii. | P | D3.3.b | |
| DST-04 | Publicarea în Marketplace printr-un release. | P | D3.3.b | |
| DST-05 | Versionarea semantică și tag-urile majore (de exemplu `v1`) actualizate la fiecare release. | P | D3.3.c | |
| DST-06 | Referirea unei acțiuni prin tag, SHA sau branch și compromisurile fiecărei variante. | T | D3.3.c | |

### IMM — Acțiuni imuabile

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| IMM-01 | Ce sunt acțiunile imuabile. | T | D3.1.a | |
| IMM-02 | Introducerea acțiunilor imuabile pe hosted runners și sursa (registry) din care se descarcă acțiunile. | T | D3.1.a | |
| IMM-03 | Efectele acțiunilor imuabile asupra version pinning. | T | D1.2.g | |

## D4 — Manage GitHub Actions for the enterprise

### GOV — Guvernare și politici

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| GOV-01 | Opțiunile politicii de acțiuni permise: toate, doar locale, selectate (create de GitHub, verified creators, modele). | T | D4.1.c | |
| GOV-02 | Moștenirea politicilor: enterprise → organizație → repository. | T | D4.1.c | |
| GOV-03 | Listele allow și block pentru acțiuni și reusable workflows. | P | D5.1.g | |
| GOV-04 | Politica ce impune fixarea acțiunilor la SHA complet. | P | D5.1.g | |
| GOV-05 | Accesul la acțiuni și reusable workflows din repository-uri private sau interne. | P | D4.1.b | |
| GOV-06 | Permisiunile implicite ale `GITHUB_TOKEN` setate la nivel de organizație și repository. | P | D4.1.c | |
| GOV-07 | Aprobarea rulărilor declanșate de contribuitori externi și fork-uri. | P | D5.1.g | |
| GOV-08 | Dezactivarea GitHub Actions pentru un repository sau o organizație. | P | D4.1.c | |

### RUN — Runnere

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| RUN-01 | Comparația runnerelor GitHub-hosted și self-hosted: cost, securitate, software, rețea. | T | D4.2.a | |
| RUN-02 | Runnerele self-hosted nu sunt distruse după job; un repository public cu runner self-hosted permite rularea și persistența codului neverificat pe mașina proprie. | T | D4.2.a | ✅ S4 |
| RUN-03 | Etichetele runnerelor (implicite și custom) și selecția cu `runs-on`. | P | D4.2.a | |
| RUN-04 | Înregistrarea și eliminarea unui runner self-hosted la nivel de repository, organizație și enterprise. | P | D4.2.a | |
| RUN-05 | Runner groups și controlul accesului repository-urilor. | P | D4.2.c | |
| RUN-06 | Monitorizarea stării runnerelor. | P | D4.2.a | |
| RUN-07 | Diagnosticarea runnerelor: joburi în coadă, etichete, conectivitate, loguri de diagnostic. | P | D4.2.c | |
| RUN-08 | Comunicarea runnerelor self-hosted cu GitHub și configurarea proxy. | T | D4.2.b | |
| RUN-09 | IP allow lists și runnerele GitHub-hosted. | T | D4.2.b | |
| RUN-10 | Larger runners. | T | D4.2.a | |
| RUN-11 | Runnere efemere, JIT și autoscaling. | T | D4.2.a | |
| RUN-12 | Software-ul preinstalat pe GitHub-hosted runners: repository-ul `runner-images`, release notes, toolcache. | P | D4.2.d | |
| RUN-13 | Instalarea software-ului suplimentar: acțiuni `setup-*`, package managers, cache, imagini container, imagini custom. | P | D4.2.d | |

### SCV — Secrets și variables

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| SCV-01 | Scope-ul secretelor și variabilelor: organizație, repository, environment și precedența lor. | T | D4.3.a | |
| SCV-02 | Politicile de acces ale repository-urilor la secretele organizației. | P | D4.3.a | |
| SCV-03 | Transmiterea secretelor către acțiuni prin `with` și `env`. | P | D4.3.b | |
| SCV-04 | Orice utilizator cu acces de scriere în repository poate citi indirect toate secretele repository-ului. | T | D4.3.b | ✅ S6 |
| SCV-05 | Workflow-urile declanșate din fork-uri nu primesc secrete, cu excepția `GITHUB_TOKEN`. | T | D4.3.b | ✅ S6 |
| SCV-06 | Un secret publicat într-un commit este compromis, rămâne în istoricul Git și trebuie rotit. | T | D4.3.a | ✅ S6 |
| SCV-07 | Regulile de denumire și limitele secretelor. | T | D4.3.a | |
| SCV-08 | Regulile de denumire, limitele și precedența variabilelor. | T | D4.3.a | |
| SCV-09 | Administrarea secretelor prin REST API, cu criptarea valorii folosind cheia publică. | P | D4.3.b | |
| SCV-10 | Administrarea variabilelor prin REST API. | P | D4.3.b | |
| SCV-11 | `gh secret` și `gh variable`. | P | D4.3.b | |

## D5 — Secure and optimize automation

### ENV — Environments și approval gates

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| ENV-01 | Crearea unui environment și asocierea lui cu un job prin `environment:`. | P | D1.3.d | |
| ENV-02 | Required reviewers ca approval gate. | P | D5.1.a | |
| ENV-03 | Interzicerea auto-aprobării (prevent self-review). | P | D5.1.a | |
| ENV-04 | Wait timer. | P | D5.1.a | |
| ENV-05 | Restricționarea branch-urilor și tag-urilor care pot face deployment. | P | D5.1.a | |
| ENV-06 | Momentul în care secretele și variabilele unui environment devin disponibile jobului. | T | D5.1.a | |
| ENV-07 | Custom deployment protection rules. | T | D5.1.a | |
| ENV-08 | URL-ul environment-ului și istoricul deployment-urilor. | P | D1.3.d | |

### TOK — `GITHUB_TOKEN`, permisiuni și PAT

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| TOK-01 | Ciclul de viață al `GITHUB_TOKEN`: creare per job și expirare. | T | D5.1.d | |
| TOK-02 | `permissions: {}` la nivel de workflow nu acordă niciun scope explicit `GITHUB_TOKEN`; logul afișează totuși `Metadata: read`. | P | D5.1.d | ✅ S1 |
| TOK-03 | `permissions: contents: read` acordă citirea conținutului repository-ului; orice permisiune nelistată devine `none`, cu excepția `metadata`. | P | D5.1.d | ✅ S4 |
| TOK-04 | Lista scope-urilor, valorile `read`, `write`, `none` și suprascrierea la nivel de job. | T | D5.1.d | |
| TOK-05 | Setarea permisiunilor implicite ale `GITHUB_TOKEN` (restricționate sau permisive). | T | D5.1.d | |
| TOK-06 | `GITHUB_TOKEN` față de PAT classic, PAT fine-grained și token-urile GitHub App. | T | D5.1.d | |
| TOK-07 | Evenimentele produse cu `GITHUB_TOKEN` și declanșarea de noi rulări. | T | D5.1.d | |
| TOK-08 | Permisiunile `GITHUB_TOKEN` în rulările declanșate din fork-uri. | T | D5.1.d | |
| TOK-09 | Restrângerea scope-urilor de scriere la joburile care au nevoie de ele. | P | D5.1.d | |

### INJ — Script injection

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| INJ-01 | Mecanismul script injection: valoarea din `${{ }}` este inserată în script înainte de execuție. | T | D5.1.c | |
| INJ-02 | Valorile `github` controlabile de atacatori sunt input neverificat: titlul și corpul PR-ului, `github.head_ref`, mesajele commiturilor, corpurile issue-urilor și comentariilor. | T | D5.1.c | ✅ S6 |
| INJ-03 | O variabilă `env` intermediară, în locul `${{ }}` direct în `run`, transmite valoarea ca dată, nu ca cod. | P | D5.1.c | ✅ S6 |
| INJ-04 | Variabila se scrie între ghilimele duble în bash (`"$RECIPIENT"`), ca shell-ul să o trateze ca un singur argument, fără împărțire în cuvinte și fără expandarea caracterelor glob. | P | D5.1.c | ✅ S2 |
| INJ-05 | Validarea și sanitizarea inputurilor. | P | D5.1.c | |
| INJ-06 | Preferarea acțiunilor verificate, cu inputuri, față de scripturile inline. | T | D5.1.c | |
| INJ-07 | Riscurile triggerelor privilegiate (`pull_request_target`, `workflow_run`) combinate cu cod neverificat. | T | D5.1.c | |

### OIDC — Federare cloud cu OIDC

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| OIDC-01 | Rolul OIDC: credențiale cloud temporare, fără secrete cu durată lungă. | T | D5.1.e | |
| OIDC-02 | Permisiunea `id-token: write`. | P | D5.1.e | |
| OIDC-03 | Relația de încredere în cloud și condițiile pe claim-uri (`sub`: repository, branch, environment). | T | D5.1.e | |
| OIDC-04 | Acțiunile oficiale de autentificare la furnizorii cloud. | P | D5.1.e | |
| OIDC-05 | Claim-urile `aud` și `iss` ale token-ului. | T | D5.1.e | |

### SUP — Supply chain: acțiuni de încredere, pinning și attestations

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| SUP-01 | Versiunile existente ale unei acțiuni se verifică în releases și tag-urile repository-ului ei (de exemplu `github.com/actions/checkout/releases`). | P | D5.1.f | ✅ S4 |
| SUP-02 | Criteriile unei acțiuni de încredere din Marketplace: verified creator, cod sursă, mentenanță. | T | D5.1.b | |
| SUP-03 | Fixarea acțiunilor third-party la SHA-ul complet al commitului. | P | D5.1.f | |
| SUP-04 | Riscurile referințelor flotante (`@main`, `@v1`). | T | D5.1.f | |
| SUP-05 | Actualizarea acțiunilor fixate cu Dependabot. | P | D5.1.f | |
| SUP-06 | Generarea artifact attestations și permisiunile necesare. | P | D5.1.h | |
| SUP-07 | Verificarea attestations cu `gh attestation verify`. | P | D5.1.h | |
| SUP-08 | Provenance și SLSA. | T | D5.1.h | |
| SUP-09 | Integrarea verificării attestations în deployment. | P | D5.1.h | |

### OPT — Performanță și cost

| ID | Element | Tip | Sursă | Status |
| --- | --- | --- | --- | --- |
| OPT-01 | Măsurarea duratei și a timpului facturabil al rulărilor. | P | D5.2.b | |
| OPT-02 | Facturarea minutelor GitHub-hosted: sistemul de operare, vizibilitatea repository-ului, stocarea. | T | D5.2.b | |
| OPT-03 | Reducerea costului de stocare prin retenția artifactelor și logurilor. | P | D5.2.a | |
| OPT-04 | `concurrency` și `cancel-in-progress` pentru evitarea rulărilor redundante. | P | D5.2.b | |
| OPT-05 | Paralelizarea și împărțirea joburilor. | T | D5.2.b | |
| OPT-06 | Strategii de scalare: larger runners și autoscaling pentru self-hosted. | T | D5.2.b | |
| OPT-07 | Proiectarea cheilor de cache pentru o rată mare de cache hit. | P | D5.2.a | |

## Rezumat

| Domeniu | Capitole | Elemente | Predate |
| --- | --- | ---: | ---: |
| D1 | WF, TRG, JOB, CMD, CTX, EXP, MTX, SVC, YML, DAT, RPT, EDT | 124 | 52 |
| D2 | TRB, API, TPL, RWF | 34 | 3 |
| D3 | ACT, DST, IMM | 21 | 0 |
| D4 | GOV, RUN, SCV | 32 | 4 |
| D5 | ENV, TOK, INJ, OIDC, SUP, OPT | 45 | 6 |
| **Total** | **28** | **256** | **65** |
