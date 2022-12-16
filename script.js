/*Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emette un messaggio in console con il numero della cella cliccata.
MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico
che vediamo nell'immagine allegata.
MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS.
Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console,
poi coloriamo la cella d'azzurro!*/

const grid = document.getElementById('grid')
const button = document.getElementById('button')
const playMessage = document.getElementById('play-message')

const rows = 10
const columns = 10


function generateCell(content) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.append(content)

    return cell
}

function appendCell(content) {
    grid.appendChild(content)
}

button.addEventListener('click', function (){
    playMessage.classList.add('d-none')
    grid.classList.remove('d-none')

    grid.innerHTML = ''
    for (let i = 0; i < rows*columns; i++){

        const cell = generateCell(i + 1)
        
        cell.addEventListener('click', function(){
            cell.classList.toggle('clicked')
            console.log(i + 1)
        })

        appendCell(cell)
        

    }
})