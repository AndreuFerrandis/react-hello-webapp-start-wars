/* const characterImageUrls = {
    "Luke Skywalker": "https://starwars-visualguide.com/assets/img/characters/1.jpg",
    "Darth Vader": "https://ruta-de-la-imagen.com/darth-vader.jpg",
    
}; */


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterImageUrls: {
				"Luke Skywalker": "https://starwars-visualguide.com/assets/img/characters/1.jpg",
    			"Darth Vader": "https://starwars-visualguide.com/assets/img/characters/4.jpg",
				"C-3PO":"https://starwars-visualguide.com/assets/img/characters/2.jpg",
				"R2-D2":"https://starwars-visualguide.com/assets/img/characters/3.jpg",
				"Leia Organa":"https://starwars-visualguide.com/assets/img/characters/5.jpg",
				"Owen Lars":"https://starwars-visualguide.com/assets/img/characters/6.jpg",
				"Beru Whitesun lars":"https://starwars-visualguide.com/assets/img/characters/7.jpg",
				"R5-D4":"https://starwars-visualguide.com/assets/img/characters/8.jpg",
				"Biggs Darklighter":"https://starwars-visualguide.com/assets/img/characters/9.jpg",
				"Obi-Wan Kenobi":"https://starwars-visualguide.com/assets/img/characters/10.jpg",
			},
			characters: [],
			planetsImageUrls: {
				"Tatooine":"https://starwars-visualguide.com/assets/img/planets/10.jpg",
				"Alderaan":"https://starwars-visualguide.com/assets/img/planets/2.jpg",
				"Yavin IV":"https://starwars-visualguide.com/assets/img/planets/3.jpg",
				"Hoth":"https://starwars-visualguide.com/assets/img/planets/4.jpg",
				"Dagobah":"https://starwars-visualguide.com/assets/img/planets/5.jpg",
				"Bespin":"https://starwars-visualguide.com/assets/img/planets/6.jpg",
				"Endor":"https://starwars-visualguide.com/assets/img/planets/7.jpg",
				"Naboo":"https://starwars-visualguide.com/assets/img/planets/8.jpg",
				"Coruscant":"https://starwars-visualguide.com/assets/img/planets/9.jpg",
				"Kamino":"https://starwars-visualguide.com/assets/img/planets/10.jpg",
			},
			planets: [],
			vehicles: []

			
		},
		actions: {
			getCharacters: () => {
				fetch ('https://www.swapi.tech/api/people/')
				.then (response => response.json())
				.then (data => {
					setStore ({ characters: data.results  })
					console.log(data.results)
				})
				.catch(error => console.log('Error:' , error)); 
			},

			getPlanets: () => {
				fetch ('https://www.swapi.tech/api/planets/')
				.then (response => response.json())
				.then (data => {
					setStore ({ planets: data.results })
					console.log(data.results)
				})
				.catch(error => console.log('Error:' , error)); 
			},

			getVehicles: () => { 
				fetch ('https://www.swapi.tech/api/planets/')
				.then (response => response.json())
				.then (data => {
					setStore ({ vehicles: data })
					console.log(data)
				})
				.catch(error => console.log('Error:' , error));
			}	
		}
	};
};

export default getState;
