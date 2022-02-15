function randomizer() {
    let min = document.getElementById("min_id").value;
    let max = document.getElementById("max_id").value;
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('res').textContent = randomNumber;
}
