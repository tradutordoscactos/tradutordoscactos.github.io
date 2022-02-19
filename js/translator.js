(function(){
    const englishInput = document.getElementById('englishInput');
    const CactobetoInput = document.getElementById('CactobetoInput');
    const input = document.getElementsByClassName('input');
    const output = document.getElementsByClassName('output');
    const traduzir = document.getElementById('traduzir');
    const revert = document.getElementById('revert');
    const alphabet = {
        'a': 'y', 'A': 'Y', 
        'b': 'p', 'B': 'P', 
        'c': 'l', 'C': 'L', 
        'd': 't', 'D': 'T', 
        'e': 'a', 'E': 'A', 
        'f': 'v', 'F': 'V', 
        'g': 'k', 'G': 'K', 
        'h': 'r', 'H': 'R', 
        'i': 'e', 'I': 'E', 
        'j': 'z', 'J': 'Z', 
        'k': 'g', 'K': 'G', 
        'l': 'm', 'L': 'M', 
        'm': 's', 'M': 'S', 
        'n': 'h', 'N': 'H', 
        'o': 'u', 'O': 'U', 
        'p': 'b', 'P': 'B', 
        'q': 'x', 'Q': 'X', 
        'r': 'n', 'R': 'N', 
        's': 'c', 'S': 'C', 
        't': 'd', 'T': 'D', 
        'u': 'i', 'U': 'I', 
        'v': 'j', 'V': 'J', 
        'x': 'q', 'X': 'Q', 
        'w': 'f', 'W': 'F', 
        'y': 'o', 'Y': 'O', 
        'z': 'w', 'Z': 'W', 
    }
    const alphabetCactobeto = new Object;
    for (var letter in alphabet) {
        alphabetCactobeto[alphabet[letter]] = letter;
    };

    revert.addEventListener('click', function(e) {
        traduzir.classList.toggle('traduzirToCactobeto');
        translate.classList.toggle('traduzirToEnglish');
        englishInput.classList.toggle('input');
        CactobetoInput.classList.toggle('output');
        englishInput.classList.toggle('output');
        CactobetoInput.classList.toggle('input');
        revert.classList.toggle('revert');

        e.preventDefault();
    });

    traduzir.addEventListener('click', function(e) {
        if(traduzir.className === 'traduzirToCactobeto') {
            const english = input[0].value;
            const Cactobeto = english.replaceAll(/([A-Za-z])/g, function (m) {
                return alphabet[m];
            });
            output[0].value = Cactobeto;
        } 
        else if(traduzir.className === 'traduzirToEnglish') {
            const Cactobeto = input[0].value;
            const english = Cactobeto.replaceAll(/([A-Za-z])/g, function (m) {
                return alphabetCactobeto[m];
            });
            output[0].value = english;
        }
        e.preventDefault();
    });

})();