document.body
        .addEventListener('click', (e) => {
                if (e.target.classList.value === 'addcity') {
                        document.getElementById('search').style.display = 'block';
                } else if (e.target.classList.value !== 'addcity' && e.target.id !== 'search') {
                        document.getElementById('search').style.display = 'none';
                }
                // console.log(e.target.classList.value==='addcity');
        })

// clock
setInterval(() => {
        document.getElementById('time').innerHTML = new Date().toLocaleTimeString();
}, 1000)

// "23"-56

const fetchweatherData = async (city) => {
        try {
                document.getElementById('time').innerHTML = 'loading...'
                const responses = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=21f10744539dbbf1f149c533fbc67eb3`);

                document.getElementById('citycountry').innerHTML = `${responses.data.name} , ${responses.data.sys.country}`
                document.getElementById('temp').innerText = (responses.data.main.temp - 273.15).toFixed(2);
                document.getElementById('weather').innerHTML = responses.data.weather[0].main;
                document.getElementById('high').innerHTML = responses.data.main.temp_max;
                document.getElementById('low').innerHTML = responses.data.main.temp_min;
                document.getElementById('speed').innerHTML = ((responses.data.wind.speed * 18) / 5).toFixed(2);




        } catch (err) {
                console.log('Invalid city entered');
        }

}


// search
document.getElementById('search').addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
                console.log(e.target.value);
                fetchweatherData(e.target.value);


        }
})