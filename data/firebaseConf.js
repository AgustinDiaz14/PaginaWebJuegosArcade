
var firebaseConfig = {
			apiKey: "AIzaSyBTTMvFRHFHDAAkEJt0__9KpkIIjEoJ1Sw",
			authDomain: "paginawebjuegosarcade.firebaseapp.com",
			databaseURL: "https://paginawebjuegosarcade.firebaseio.com",
			projectId: "paginawebjuegosarcade",
			storageBucket: "paginawebjuegosarcade.appspot.com",
			messagingSenderId: "627296857083",
			appId: "1:627296857083:web:98de3be8556ce8d38d795e"
		};

		firebase.initializeApp(firebaseConfig);
		const auth = firebase.auth()
		const firestore = firebase.firestore();
