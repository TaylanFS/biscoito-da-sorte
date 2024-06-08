import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

function App() {
	const [image, setImage] = useState(require("./src/images/biscoito.png"));
	const [changeText, setChangeText] = useState("");

	let phrases = [
		"A vida trará coisas boas se tiver paciência.",
		"Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
		"Não compense na ira o que lhe falta na razão.",
		"Defeitos e virtudes são apenas dois lados da mesma moeda.",
		"A maior de todas as torres começa no solo.",
		"Não há que ser forte. Há que ser flexível.",
		"Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
		"Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
		"A juventude não é uma época da vida, é um estado de espírito.",
		"Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
	];

	function brakeCookie() {
		let anyNumber = Math.floor(Math.random() * phrases.length);

		setChangeText(' " ' + phrases[anyNumber] + ' " ');
		setImage(require("./src/images/biscoitoAberto.png"));
	}

	function reloadCookie() {
		setImage(require("./src/images/biscoito.png"));
		setChangeText("");
	}

	return (
		<View style={styles.container}>
			<Image source={image} style={styles.image} />

			<Text style={styles.textPhrase}> {changeText} </Text>

			<TouchableOpacity style={styles.button} onPress={brakeCookie}>
				<View style={styles.buttonArea}>
					<Text style={styles.buttonsText}> Quebrar biscoito </Text>
				</View>
			</TouchableOpacity>

			<TouchableOpacity
				style={[styles.button, { marginTop: 15, borderColor: "#121212" }]}
				onPress={reloadCookie}
			>
				<View style={styles.buttonArea}>
					<Text style={[styles.buttonsText, { color: "#121212" }]}>
						Reiniciar biscoito
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: 230,
		height: 230,
	},
	textPhrase: {
		fontSize: 20,
		color: "#dd7b22",
		margin: 30,
		fontStyle: "italic",
		textAlign: "center",
	},
	button: {
		width: 230,
		height: 50,
		borderColor: "#dd7b22",
		borderWidth: 2,
		borderRadius: 25,
	},
	buttonArea: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonsText: {
		fontSize: 17,
		fontWeight: "bold",
		color: "#dd7b22",
	},
});

export default App;
