function increaseValue(field) {
    var input = document.getElementById(field);
    var value = parseInt(input.value, 10);
    input.value = isNaN(value) ? 0 : value + 1;
}

function decreaseValue(field) {
    var input = document.getElementById(field);
    var value = parseInt(input.value, 10);
    input.value = isNaN(value) ? 0 : value - 1;
}

document.addEventListener("DOMContentLoaded", function () {
    const fightButton = document.getElementById("fight-button");
    const battleResultText = document.getElementById("battle-result-text");
    const playerSkillCurrentInput = document.getElementById("skill-current");
    const playerSkillInitialInput = document.getElementById("skill-initial");
    const playerStaminaCurrentInput = document.getElementById("stamina-current");
    const playerStaminaInitialInput = document.getElementById("stamina-initial");
    const playerLuckCurrentInput = document.getElementById("luck-current");
    const playerLuckInitialInput = document.getElementById("luck-initial");
    const monsterSkillInput = document.getElementById("monster-skill");
    const monsterStaminaInput = document.getElementById("monster-stamina");

    const luckCheckButton = document.getElementById("luck-check-button");
    const luckResultText = document.getElementById("luck-result-text");

    const rollDiceButton = document.getElementById("roll-dice-button");
    const rollDice1Input = document.getElementById("dice-1");
    const rollDice2Input = document.getElementById("dice-2");

    fightButton.addEventListener("click", function () {
        const playerSkillCurrent = Number(playerSkillCurrentInput.value);
        const playerSkillInitial = Number(playerSkillInitialInput.value);
        const playerStaminaCurrent = Number(playerStaminaCurrentInput.value);
        const playerStaminaInitial = Number(playerStaminaInitialInput.value);
        const playerLuckCurrent = Number(playerLuckCurrentInput.value);
        const playerLuckInitial = Number(playerLuckInitialInput.value);
        const monsterSkill = Number(monsterSkillInput.value);
        const monsterStamina = Number(monsterStaminaInput.value);

        const playerSkillResult = rollDice() + rollDice() + playerSkillCurrent;
        const monsterSkillResult = rollDice() + rollDice() + monsterSkill;

        if (playerSkillResult > monsterSkillResult) {
            monsterStaminaInput.value = monsterStamina - 2;
            battleResultText.value = "Monster hurt";
        } else if (playerSkillResult < monsterSkillResult) {
            playerStaminaCurrentInput.value = playerStaminaCurrent - 2;
            battleResultText.value = "Player hurt";
        } else {
            battleResultText.value = "Tie result";
        }
    });

    luckCheckButton.addEventListener("click", function () {
        const diceResult = rollDice() + rollDice();
        const playerLuck = Number(playerLuckCurrentInput.value);

        if (diceResult > playerLuck) {
            luckResultText.value = "Bad luck";
        } else {
            luckResultText.value = "Success!";
        }

        playerLuckCurrentInput.value = playerLuck - 1;
    });

    rollDiceButton.addEventListener("click", function () {
        rollDice1Input.value = rollDice();
        rollDice2Input.value = rollDice();
    });

    function rollDice() {
        return Math.floor(Math.random() * 6) + 1; // Assuming a six-sided die
    }
});

