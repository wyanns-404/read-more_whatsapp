function generateText() {
    const firstWord = document.getElementById('firstWord').value;
    const secondWord = document.getElementById('secondWord').value;

    if (firstWord && secondWord) {
        const zeroWidthSpace = '\u200b';
        const readMoreText = `${firstWord}${zeroWidthSpace.repeat(4000)}${" "}${secondWord}`;
        document.getElementById('resultText').value = readMoreText;
        document.getElementById('resultContainer').classList.remove('d-none');
    }
}

function copyToClipboard() {
    const resultText = document.getElementById('resultText');
    resultText.select();
    document.execCommand('copy');
    alert('Teks telah disalin!');
}
