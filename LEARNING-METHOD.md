# Learning Method

Procedura generală de învățare a utilizatorului. Este valabilă pentru orice
subiect, nu doar pentru GH-200. Acest workspace o aplică pe GitHub Actions.

Principiile au fost formulate de utilizator în sesiunea 6 (2026-10-01). Orice
sesiune nouă trebuie să le aplice exact, chiar dacă nu cunoaște discuția
inițială.

## Cele trei straturi

| Strat | Rol | În acest workspace |
| --- | --- | --- |
| Harta cunoștințelor | Adevărul suprem: **tot** ce trebuie știut, teorie și practică | `GH-200-KNOWLEDGE-MAP.md` |
| Roadmap, metode, didactică | **Cum** și **în ce ordine** se învață elementele hărții | `GH-200-STUDY-ROADMAP.md`, `README.md`, `.github/copilot-instructions.md` |
| Anki | **Oglinda 1 la 1** a hărții, pentru stabilizarea memoriei | `anki/` |

Ordinea de autoritate este:

`harta cunoștințelor -> roadmap, metode, didactică -> Anki`

- Roadmap-ul, metodele și pedagogia se construiesc după **hartă**, niciodată
  după Anki.
- Anki nu decide ce se predă, în ce ordine sau cum. Doar oglindește harta.
- O schimbare se face întâi în hartă, apoi se propagă în roadmap și în Anki.

## Harta cunoștințelor

- Este construită din sursele oficiale ale subiectului, de exemplu programa
  oficială a examenului.
- Conține atât concepte teoretice, cât și deprinderi practice.
- Fiecare element are un ID stabil, de exemplu `CTX-07`.
- Un element este o bucată de cunoaștere mică, clară și verificabilă.

## Învățarea

- Se învață pentru **înțelegere**, prin teorie și practică, pas cu pas, în mod
  didactic și pedagogic. Nu se învață „pentru carduri”.
- Explicațiile pornesc de la ceva deja practicat de utilizator, introduc o
  singură idee pe rând și se încheie cu o întrebare simplă de verificare.
- Cardurile nu sunt arătate în timpul lecției și nu dictează conținutul ei.
- Un capitol este terminat când toate elementele lui din hartă au fost predate
  și înțelese.

## Anki

Scopul Anki este **stabilizarea** cunoștințelor deja înțelese și readucerea lor
periodică în memorie. Anki **nu** învață lucruri noi și **nu** testează ca la
examen.

- Fiecare element din hartă are carduri care poartă același ID. Nu există
  element fără card și nici card fără element.
- Un card are o întrebare clară și directă, iar răspunsul scurt și exact
  **este chiar cunoștința** care trebuie păstrată. Dacă utilizatorul memorează
  răspunsul, a câștigat exact ce trebuia.
- Interzis: ghicitori, capcane, scenarii-test sau întrebări de tip examen.
  Acestea se rezolvă o dată prin gândire, apoi răspunsul memorat nu mai are
  valoare.
- Exemplu greșit (ghicitoare): „Jobul A eșuează, B are `needs: A`. Ce se
  întâmplă?”
- Exemplu corect (stabilizare): „Ce se întâmplă cu un job dacă un job din
  `needs` eșuează?” → „Este sărit (skipped).”
- După fiecare sesiune, utilizatorul învață cardurile elementelor predate în
  sesiune. Pentru că Anki oglindește harta 1 la 1, a ști toate cardurile
  înseamnă a păstra tot ce a fost predat.

## Format Anki în acest workspace

- Carduri în engleză, în fișiere text importate nativ în Anki prin
  **File → Import** (Anki 2.1.54+).
- Un fișier pe sesiune: `anki/Snn.txt` (de exemplu `anki/S06.txt`), cu
  cardurile elementelor marcate `✅ Sn` în hartă.
- Anteturi: `#separator:Tab`, `#html:true`, `#notetype:Basic`, `#deck:GH-200`
  și `#tags column:3`. A treia coloană a fiecărui card conține tag-urile lui:
  capitolul, ID-ul elementului din hartă și sesiunea (de exemplu
  `CTX CTX-05 S6`).
- Fișierele sunt versionate în Git. Utilizatorul le revizuiește înainte de
  import.

## Cum folosește utilizatorul cardurile

1. După fiecare sesiune, importă un singur fișier nou, `anki/Snn.txt`, prin
   **File → Import**.
2. În aceeași zi învață cardurile noi din deck-ul `GH-200`.
3. Apoi face zilnic recapitulările programate de Anki.
