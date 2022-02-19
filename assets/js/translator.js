(function(){
    const NormalInput = document.getElementById('NormalInput');
    const CactobetoInput = document.getElementById('CactobetoInput');
    const input = document.getElementsByClassName('input');
    const output = document.getElementsByClassName('output');
    const Traduzir = document.getElementById('Traduzir');
    const revert = document.getElementById('revert');
    const alphabet = {
        'a': '#', 'A': '#', 
        'b': 'p', 'B': 'P', 
        'c': '%', 'C': '%', 
        'd': 't', 'D': 'T', 
        'e': '¨', 'E': '¨', 
        'f': '@', 'F': '@', 
        'g': '*', 'G': '*', 
        'h': 'r', 'H': 'R', 
        'i': '§', 'I': '§', 
        'j': 'z', 'J': 'Z', 
        'k': '∩', 'K': '∩', 
        'l': 'm', 'L': 'M', 
        'm': 's', 'M': 'S', 
        'n': 'h', 'N': 'H', 
        'o': 'u', 'O': 'U', 
        'p': 'b', 'P': 'B', 
        'q': 'x', 'Q': 'X', 
        'r': 'n', 'R': 'N', 
        's': 'ⅵ', 'S': 'ⅵ', 
        't': 'd', 'T': 'D', 
        'u': '!', 'U': '!', 
        'v': 'j', 'V': 'J', 
        'x': 'q', 'X': 'Q', 
        'w': 'f', 'W': 'F', 
        'y': 'o', 'Y': 'O', 
        'z': '£', 'Z': '£', 
    }
    const alphabetCactobeto = new Object;
    for (var letter in alphabet) {
        alphabetCactobeto[alphabet[letter]] = letter;
    };

    revert.addEventListener('click', function(e) {
        Traduzir.classList.toggle('TraduzirToCactobeto');
        Traduzir.classList.toggle('TraduzirToNormal');
        NormalInput.classList.toggle('input');
        CactobetoInput.classList.toggle('output');
        NormalInput.classList.toggle('output');
        CactobetoInput.classList.toggle('input');
        revert.classList.toggle('revert');

        e.preventDefault();
    });

    Traduzir.addEventListener('click', function(e) {
        if(Traduzir.className === 'TraduzirToCactobeto') {
            const Normal = input[0].value;
            const Cactobeto = Normal.replaceAll(/([A-Za-z])/g, function (m) {
                return alphabet[m];
            });
            output[0].value = Cactobeto;
        } 
        else if(Traduzir.className === 'TraduzirToNormal') {
            const Cactobeto = input[0].value;
            const Normal = Cactobeto.replaceAll(/([A-Za-z])/g, function (m) {
                return alphabetCactobeto[m];
            });
            output[0].value = Normal;
        }
        e.preventDefault();
    });

})();
