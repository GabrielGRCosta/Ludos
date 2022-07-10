const doGet = (url) => {
const callBack = (resolve, reject) => {
  fetch(url).then((response) => {
    if (!response.ok) throw new Error('Erro ao Executar, status: ' + response.status);
    return response.json();
  })
  .then(resolve).catch(reject);
}
return new Promise(callBack);
}

//doGet('https://swapi.co/api/people/1').then(console.log).catch(console.error);