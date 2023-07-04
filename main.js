{
	// const btnClikmeHTML = document.querySelector(".btnClikme");
	// btnClikmeHTML.addEventListener("click", function () {
	// 	console.log("me estan dando click");
	// });
}

{
	// ! opcion 1
	// const buttonsHTML = document.querySelector(".buttons");
	// buttonsHTML.addEventListener("click", function (event) {
	// 	if (event.target.classList.contains("btn")) {
	// 		elementId.textContent = event.target.id;
	// 	}
	// });
	// ! opcion 2
	// const buttonsHTML = document.querySelectorAll(".buttons button");
	// for (const button of buttonsHTML) {
	// 	button.addEventListener("click", function (e) {
	// 		elementId.textContent = e.target.id;
	// 	});
	// }
}

{
	// ! settimeout
	// ! ejemplo 1
	// btnHidden.addEventListener("click", function () {
	// 	document.querySelector(".box").classList.add("box__hidden");
	// 	setTimeout(function () {
	// 		document.querySelector(".box").classList.remove("box__hidden");
	// 	}, 3000);
	// });
	// btnShow.addEventListener("click", function () {
	// 	setTimeout(function () {
	// 		document.querySelector(".box").classList.remove("box__hidden");
	// 	}, 1000);
	// });
	// ! ejemplo 2
	// function loader() {
	// 	setTimeout(function () {
	// 		document
	// 			.querySelector(".content__loader")
	// 			.classList.add("content__loader__hidden");
	// 	}, 1000);
	// }
	// window.addEventListener("load", function () {
	// 	loader();
	// });
}

{
	// ! setInterval
	// const numberHTML = document.querySelector("#number");
	// const btnStartHTML = document.querySelector("#btnStart");
	// btnStartHTML.addEventListener("click", function () {
	// 	let number = 0;
	// 	const intervalNumber = setInterval(function () {
	// 		numberHTML.innerHTML = ++number;
	// 		if (number === 1000) return clearInterval(intervalNumber);
	// 	}, 1);
	// });
}

{
	// ! ejemplo botones
	// const content__buttonsHTML = document.querySelector(".content__buttons");
	// const boxHTML = document.querySelector(".box");
	// content__buttonsHTML.addEventListener("click", function (e) {
	// 	const color = e.target.dataset.color;
	// 	boxHTML.style.backgroundColor = "#" + color;
	// });
}

const users = [
	{
		name: "brayan stiven",
		age: 23,
		ocuation: "dev",
		perfil: `Desarrollador Full Stack Web con 3 años de experiencia. Apasionado por la programación, domina el front-end y el back-end. Adora los gatos y disfruta aprender sobre su comportamiento. También es entusiasta de la observación del cielo, fascinado por las estrellas y el universo. Busca oportunidades para crecer y crear soluciones innovadoras.`,
		hobbies: ["learn", "read", "eat", "run"],
	},
	{
		name: "Edwar",
		age: 33,
		ocuation: "Dev in progress",
		perfil: `Estudiante promedio y canson`,
		hobbies: ["ya no es ella", "soy yo", "XD", "A gozar"],
	},
	{
		name: "Carlos",
		age: 25,
		ocuation: "Web fullstack develpment",
		perfil: `Dev Junior`,
		hobbies: ["code", "football", "videogame", "exercises"],
	},
	{
		name: "Gustavo Alberto Molano Ruiz",
		age: 54,
		ocuation: "FrontEnd Developer",
		perfil: `Me gusta mucho desarrollar aplicaciones en FrontEnd y además de eso disfruto viajar y conducir motos`,
		hobbies: ["motos", "cine", "cocinar", "viajar"],
	},
	{
		name: "Juan",
		age: 60,
		ocuation: "tradef",
		perfil: `comerciante profesional en el intercambio de bienes electronicos`,
		hobbies: [
			"jugar fornai",
			"ver cómo BTC se cae",
			"ir a comer hamburguesas",
			"juzgar a la gente ",
		],
	},
	{
		name: "Danilo-COONUX",
		age: 25,
		ocuation: "Estudiante",
		perfil: "desempleado",
		hobbies: ["p", "g", "l", "programador"],
	},
	{
		name: "Angel Nieto",
		age: 29,
		ocuation: "Maestro Matematicas",
		perfil: `desarrollador de HTML`,
		hobbies: ["CSS", "JavaScript", "matematicas", "ver Naruto sin relleno"],
	},
	{
		name: "Martin",
		age: 18,
		ocuation: "Ex professional e-sports player",
		perfil: `Estudiante decidido pero lento `,
		hobbies: ["Videojuegos", "Boxeo", "Gym", "Boxeo x2"],
	},
	{
		name: "Juan",
		age: 27,
		ocupation: "Dev ",
		perfil: "Estudiante",
		hobbies: ["correr", "tomar", "leer", "raves"],
	},
	{
		name: "Kevin Polo",
		age: 19,
		ocuation: "amo de la silla",
		perfil: `quiere trabajar por dinero`,
		hobbies: ["ejercicio", "programacion", "dibujo", "cocina"],
	},
	{
		name: "Juan carlos",
		age: 38,
		ocuation: "Ingeniero Mecanico",
		perfil: "Me gusta aprender a programar en diferentes tipos de lenguajes, realizar viajes, manejar autos .... ",
		hobbies: ["futbol", "musica", "baile", ""],
	},
];

function printHobbies(hobbies) {
	let html = "";

	for (const hobby of hobbies) {
		html += `
        <li>${hobby}</li>
        `;
	}

	return html;
}

function printUsers(array) {
	let html = "";

	for (const { age, hobbies, name, ocuation, perfil } of array) {
		html += `
            <div class="user">
                <p>${name} - ${age}</p>
                <p>${ocuation}</p>
                <p>
                    <small>${perfil}</small>
                </p>
                <ul>
                    ${printHobbies(hobbies)}
                </ul>
            </div>
         `;
	}

	document.querySelector(".users").innerHTML = html;
}

document.querySelector(".buttons").addEventListener("click", function (e) {
	if (e.target.classList.contains("btn")) {
		if (e.target.id === "btnAZ") {
			const arrayAux = structuredClone(users).sort((a, b) =>
				a.name.localeCompare(b.name)
			);
			printUsers(arrayAux);
		}

		if (e.target.id === "btnZA") {
			const arrayAux = structuredClone(users).sort((b, a) =>
                a.name.localeCompare(b.name)
            );
			printUsers(arrayAux);
		}
		if (e.target.id === "btnAges") {
			const arrayAux = structuredClone(users).sort((a, b) =>
                a.age - b.age
            );
            printUsers(arrayAux);
        }
		if (e.target.id === "btnOriginal") {
            printUsers(users);
        }		
	}
});

printUsers(users);
