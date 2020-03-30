const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`Type some content that you want to not anyone read. AKA: Secret Message! Write Some Content: `, (inputValue) => {
  const response = genertateSecretMessage(inputValue);
  console.log(response);
  readline.close()
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
} // picked from Stackoverflow, link: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array?page=1&tab=votes#tab-top

function genertateSecretMessage(content) {
	// const content = "Shhh! I am an hidden message for Someone!";
	const letters = content.split('');
	let HTMLContent = "<div style='display: flex'>";

	const randomNumbers = shuffleArray(Array.from(Array(letters.length).keys()));

	for(let i = 0; i < letters.length; i++) {
		const text = letters[i];
		const order = randomNumbers[i]; // random order to display letters in random order
		HTMLContent = `${HTMLContent}<span style="order: ${order}">${text === ' ' ? '&nbsp;' : text}</span>`;
	}
	HTMLContent = `${HTMLContent}</div>`;

	return HTMLContent;
}