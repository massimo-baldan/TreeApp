# TreeApp

demo web app for portfolio

# How to create the architecture

crea le cartelle principali:

- backend, per il codice backend
- frontend, per il codice frontend
- config, per i file di configurazione
- data, per i dati/informazioni usate nell'app

nella cartella frontend, crea le sottocartelle:

- public, per i file statici da servire al client
- src, per il codice frontend

nella cartella src, crea le sottocartelle:

- components, per i component di vue
- router, per il vue router
- store, per il Vuex
- views, per le pagine dell'app

* file App.vue, per montare l'app
* file main.js, per montare l'app

inizializza il progetto:

- npm init -y, per creare il package.json
- npm install vue, per installare vue

installa le dipendenze di vue:

- npm install vue-router, per installare il router
- npm install vuex@next, per installare il vuex compatibile con la versione 3 di vue
- installa la vue cli se non è installata, npm install -g @vue/cli

installa le altre dipendenze necessarie:

- installa ESlint e Prettier, per una maggiore qualità del codice e per un debug più efficiente:
  npm install eslint prettier eslint-plugin-prettier eslint-config-prettier --save-dev
- npm install d3, per installare la libreria D3.js per i grafici interattivi
- npm install leaflet, per installare la libreria Leaflet per le mappe del mondo
- npm install dotenv, per poter usare file .env per le variabili globali

configura il file main.js per creare e montare l'app;

configura il file router.js (o index.js nella cartella router) per creare le rotte e il router stesso;

configura il file store.js per creare l'istanza del Vuex

configura il file server.js per fare in modo che il server prenda vita
configura il file .env per le variabili globali e mettici dentro la porta del server
