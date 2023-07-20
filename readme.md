# Calcolo del prezzo del biglietto del treno

## DESCRIZIONE:
Scrivere un programma che chieda all'utente:
Il numero di chilometri da percorrere e 
l'età del passeggero.  
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
### MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.
### MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## Procedimento:
- chiedere all'utente il numero di km da percorrere;
- chiedere all'utente la sua età;
- calcolare il prezzo del biglietto applicando le seguenti regole:
  - 0.21 € al km;
  - sconto:
    - 20% se minorenne;
    - 40% se over 65.
- arrotondare il valore numerico del prezzo a due decimali;
#### MILESTONE 1:
- creare i paragrafi dove inserire gli input e il bottone;
- creare un paragrafo dove inserire il prezzo del biglietto;
- stampare il risultato in console.
#### MILESTONE 2
- collegare gli input e il bottone alle 2 domande (km e età);
- collegare il prezzo del biglietto al paragrafo;
- stampare il recap dei dati e il prezzo finale in pagina.