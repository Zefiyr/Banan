const choices = ["Камень", "Ножницы", "Бумага", "Ящерица", "Спок"];
counter= 0;
let win_pc = 0;
let win_human = 0;
while (win_human != 3 || win_pc != 3) {
    const userChoice = prompt()
    console.log(userChoice)
    if (!userChoice || !choices.includes(userChoice)) {
        console.log("false")
        continue
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let resultText = "";

    if (userChoice == computerChoice) {
        resultText = "Ничья";
    } else if (
        (userChoice === "Камень" && (computerChoice == "Ножницы" || computerChoice === "Ящерица")) ||
        (userChoice === "Ножницы" && (computerChoice == "Бумага" || computerChoice === "Ящерица")) ||
        (userChoice === "Бумага" && (computerChoice == "Камень" || computerChoice === "Спок")) ||
        (userChoice === "Ящерица" && (computerChoice == "Спок" || computerChoice === "Бумага")) ||
        (userChoice === "Спок" && (computerChoice == "Ножницы" || computerChoice === "Камень"))
    ) {
        resultText = "human";
        win_human+=1
    } else {
        resultText = "pc";
        win_pc+=1
    }

    console.log(`партия по счёту: ${counter + 1}, выбор игрока: ${userChoice}, выбор компьютера: ${computerChoice}, результат: ${resultText}`);
 
}