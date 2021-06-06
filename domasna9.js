let button = document.querySelector('.button');
let inputValue = document.querySelector('.inputValue');
let name = document.querySelector('.name');
let desription = document.querySelector('.description');
let temperature = document.querySelector('.temperature');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'k&appid=5a97cd71fb9addc3b193d885fbc98f01')
    .then(response => {
        response.json;
    })
    .then(data => {
        let nameValue = data['name'];
        let temperatureValue = ['main']['temperature'];
        let descriptionValue = ['weather'][0]['description'];

        name.innerHTML = nameValue;
        temperature.innerHTML = temperatureValue;
        description.innerHTML = descriptionValue;
    })
    .catch(error => alert('Wrong city name!!!'))
});