function getCountOfByClassName(name) {
    let clss = document.getElementsByClassName(name);
    console.log('Amount of class ' + '" ' + name + ' "' + " :", clss.length)
}

let className = 'part';

getCountOfByClassName(className);

getCountOfByClassName('bob');

className = 'item';

getCountOfByClassName(className);

