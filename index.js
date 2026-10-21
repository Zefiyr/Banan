const choise = ["Камень", "Ножницы", "Бумага", "Ящерица", "Спок"]
const userChoises = ["Камень", "Ножницы", "Бумага"]



while (counter < userChoises.length) {
    const userChoises = userChoises[counter];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let resulstTExt = "";
    if (userChoises == computerChoice) {
        resulstTExt = "0";
    } else if (
        userChoises == "Камень" && (computerChoice == "Ножницы" || computerChoice == "Ящерица") ||
        userChoises == "Ножницы" && (computerChoice == "Бумага" || computerChoice == "Ящерица") ||
        userChoises == "Бумага" && (computerChoice == "Камень" || computerChoice == "Спок") ||
        userChoises == "Ящерица" && (computerChoice == "Спок" || computerChoice == "Бумага") ||
        userChoises == "Спок" && (computerChoice == "Ножницы" || computerChoice == "Камень")
    ) {
        resulstTExt = "human";
    }
    else {
        resulstTExt = "pc";
    }
    history.push(`партия по счету:${counter + 1} ,выбор игрока: ${userChoises},выбор компьютера: ${computerChoice},результат: ${resulstTExt}`);
    counter++;
}
console.log(history)

