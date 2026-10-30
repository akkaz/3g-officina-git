# Officina Git · 3G

Oggi il traguardo è completare **fork → clone → modifica → prova locale → commit → push → pull request**. Basta correggere una sola riga, purché tu sappia spiegare il problema e mostrare il risultato.

## La missione

Il docente assegna a ciascuno una scheda numerata da **01 a 30**. Nel sito tutte le schede dovrebbero avere lo stesso stile dell'indice. Alcune informazioni sembrano giuste, ma aprendo la tua scheda manca qualcosa: trova il motivo e riparalo.

Lavora soltanto su `missioni/XX/index.html`, dove XX è il tuo numero. Le schede separate permettono a tutti di proporre una correzione senza cambiare il file di un compagno. Il titolo del repo originale è volutamente un'officina: i guasti sono esercizi.

## 1. Fork · 5 minuti

Apri https://github.com/akkaz/3g-officina-git e usa **Fork** per crearne una copia sul tuo account. Controlla che in alto ci sia il tuo nome, non quello del docente.

## 2. Clone e ramo · 10 minuti

Nel TUO fork, pulsante **Code**: copia l'indirizzo HTTPS. In VS Code apri una cartella di lavoro, poi il terminale:

```sh
git clone INCOLLA-QUI-L-URL-DEL-TUO-FORK
cd 3g-officina-git
git switch -c fix-scheda-XX
```

Sostituisci XX con il numero assegnato, per esempio 07. Se preferisci puoi usare **Git: Clone** dalla palette di VS Code. Non eseguire `git init`: il clone è già un repository.

## 3. Prima prova locale · 10 minuti

Con Node.js già disponibile:

```sh
node scripts/serve.mjs
```

Apri http://localhost:8787, poi scegli la tua scheda. Lascia il terminale acceso mentre lavori. In alternativa usa **Live Server** da VS Code, se già installato.

Prima della correzione osserva il problema. Confronta la tua pagina con l'indice. Apri `missioni/XX/index.html` e cerca la risorsa che dovrebbe dare alla pagina lo stile.

<details><summary>Mi sono bloccato: un indizio</summary>

Un collegamento a un file deve corrispondere al suo nome reale. Controlla anche le cartelle: `../` risale di un livello. Non serve riscrivere la pagina o aggiungere una libreria.

</details>

## 4. Correzione e verifica · 10 minuti

Correggi soltanto il guasto della tua scheda. Aggiorna il browser e controlla titolo, colori, spaziature e collegamento di ritorno. Se vuoi una conferma aggiuntiva:

```sh
node scripts/controlla.mjs XX
```

Il controllo riguarda la tua scheda, non le schede ancora da riparare dei compagni. Il controllo sul file non sostituisce la prova nel browser.

## 5. Commit e push · 10 minuti

```sh
git status
git diff
git add missioni/XX/index.html
git commit -m "Corregge lo stile della scheda XX"
git push -u origin fix-scheda-XX
```

Controlla nel tuo fork, sul ramo appena inviato, che la modifica sia arrivata. Un commit solo sul PC non è visibile al docente.

## 6. Pull request · 10 minuti

Nel tuo fork usa **Compare & pull request** (oppure **Contribute → Open pull request**). Controlla:

- destinazione: `akkaz/3g-officina-git`, ramo `main`;
- sorgente: il tuo fork, ramo `fix-scheda-XX`;
- un solo file modificato: `missioni/XX/index.html`.

Titolo: **Fix scheda XX: ripristina lo stile**. Compila il modello: sintomo, causa, correzione e prova fatta in locale. Allega un'immagine della sola pagina corretta. Invia la PR: il docente la rivede e decide se unirla. Non serve che sia già unita per aver completato il giro.

## Consegna · 5 minuti

Mostra al docente il **link della tua PR** e il risultato in locale. Preparati a rispondere: «Che cosa contiene il fork?», «Che cosa ha portato il clone sul PC?», «Che differenza c'è tra commit e push?», «Quale riga hai cambiato e perché?».

## Se sei già avanti

Dopo la prima PR, crea un secondo ramo da `main` per migliorare una frase della tua scheda. Tieni la seconda PR separata dalla prima: una proposta, un obiettivo.

Materiale originale del laboratorio 3G · CFP Zanardelli · 30 ottobre 2026. MIT.
