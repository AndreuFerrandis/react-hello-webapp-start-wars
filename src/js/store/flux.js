const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],

			
		},
		actions: {
			getCharacters: () => {
				fetch ('https://www.swapi.tech/api/people/')
				.then (response => response.json())
				.then (data => {
					setStore ({ characters: data })
					console.log(data)
				})
				.catch(error => console.log('Error:' , error)); 
			},
			getPlanets: () => {
				fetch ('https://www.swapi.tech/api/planets/')
				.then (response => response.json())
				.then (data => {
					setStore ({ planets: data })
					console.log(data)
				})
				.catch(error => console.log('Error:' , error)); 
			}
		}
	};
};

export default getState;
