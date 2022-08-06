var color = 'blue';
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

button1.addEventListener('click', function(){    
    var container = document.getElementById('main');
    container.style.background = 'blue';
})

button2.addEventListener('click', function(){    
    var container = document.getElementById('main');
    container.style.background = 'red';
})

button3.addEventListener('click', function(){    
    var container = document.getElementById('main');
    container.style.background = '#012030';
})

