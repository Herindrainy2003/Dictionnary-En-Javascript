let search = document.querySelector('#search');
let word = document.querySelector('#word');
let info = document.querySelector('#info')

search.addEventListener('click', () => {
    let word_input = word.value;
    
    let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word_input;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Assuming data is an array of definitions for the word
            data.forEach(entry => {
                entry.meanings.forEach(meaning => {  
                    meaning.definitions.forEach(definition => {
                       let liste = document.createElement('li')
                     liste.textContent = definition.definition 
                        info.appendChild(liste)
                       
                    });
                });
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});


