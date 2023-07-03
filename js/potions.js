// Виконай рефакторинг методів об'єкта atTheOldToad таким чином,
//  щоб вони працювали не з масивом рядків, а з масивом об'єктів.

// getPotions() - метод для отримання всього зілля.
//  Повертає значення властивості potions.

// addPotion(newPotion) - додає зілля newPotion (вже об'єкт)
//  в масив у властивості potions, але тільки, якщо такого зілля
//   ще немає в інвентарі. В іншому випадку повертається рядок.

// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName
//  з масиву у властивості potions.

// updatePotionName(oldName, newName) - оновлює властивість name 
// об'єкта-зілля з назвою oldName на newName в масиві potions.

const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    getPotions() {
      return this.potions;
    },
    addPotion(newPotion) {
      for(const item of this.potions){
        if(item.name === newPotion.name){
          return `Error! Potion ${newPotion.name} is already in your inventory!`;
        }
      }
      this.potions.push(newPotion);
    },
    removePotion(potionName) {
      for(let i = 0; i < this.potions.length; i+=1){
        const potion = this.potions[i];
        if(potionName === potion.name){
          this.potions.splice(i,1)
        }
      }
    },
     updatePotionName(oldName, newName) {
      for(let i = 0; i < this.potions.length; i+=1){
        const potion = this.potions[i];
        if(potion.name === oldName){
          potion.name = newName
        }
      }
    },
  };
  