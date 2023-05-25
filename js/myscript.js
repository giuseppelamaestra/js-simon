//Traccia

//Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
//Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

//Consigli
//Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
//Da quante ore è composto un giorno?
//Da quanti minuti è composta un'ora?
////Da quanti secondi è composto un minuto?
//Da quanti millisecondi è composto un secondo?
//Quanti millisecondi mi separano da domani alle 9:30?
//Esiste un oggetto JS in grado di gestire le date?
//Esistono dei metodi per trasformare una data in millisecondi?//



let tomorrow = new Date("May 26, 2023 09:30:00").getTime();


let UptadeEverySecond = setInterval(function(){   

    let now = new Date().getTime();

    let difference = tomorrow - now; 

   

    
    let days = Math.floor(difference / (24 * 60 * 60 * 1000));
    let hours = Math.floor(difference % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
    let minutes = Math.floor(difference % (60 * 60 * 1000) / (60 * 1000));
    let seconds = Math.floor(difference % (60 * 1000) / (1000));

   
    































}, 1000)





