function click1(button) {
    if(button.innerHTML == 'Щелчок')
    button.innerHTML = 'Спасибо';
    else 
    button.innerHTML = 'Щелчок';
}

function click2(button) {
    if(button.innerHTML == 'Денис')
    button.innerHTML = 'Данилов';
    else
    button.innerHTML = 'Денис';
}

function click3(button) {
    if(button.innerHTML == 'Нажми меня')
    button.innerHTML = 'Ещё раз нажми';

    else if(button.innerHTML == 'Ещё раз нажми')
    button.innerHTML = 'Ещё';

    else if(button.innerHTML == 'Ещё')
    button.innerHTML = 'Начать сначала';
    else
    button.innerHTML = 'Нажми меня';
}