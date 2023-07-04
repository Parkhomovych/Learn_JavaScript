const Transaction = {
  DEPOSIT: 'deposit',
  WiTHDRAW: 'withdraw',
};
Object.freeze(Transaction);

// * Кожна транзакція це об'єкт із властивостями:
//   id, type, amount
const account = {
  // баланс
  balanse: 10000,

  // історія транзакцій
  transactions: [{ amount: 20, id: 16, type: 'deposit' }],

  // * Метод створює та повертає об'єкт транзакції.
  // * Приймає суму(amount) та тип(type) транзакції
  createTransaction(amount, type) {
    return {
      id: Date.now(), //підв'язуємо айді до мілісекунд
      amount,
      type,
    };
  },

  // * Метод що відповідає за додавання суми до балансу
  // * Приймає суму транзакції
  // * Викликає createTransaction для створення об'єкта транзакції
  // * Після чого додає його до історії транзакції.
  deposit(amount) {
    // поповненя
    if (amount <= 0) {
      // якщо менше рівне нуля
      return 'Error';
    } else {
      console.log('Операція успішна');
    } //* 'deposit' * //
    const item = this.createTransaction(amount, Transaction.DEPOSIT); // викликаємо створення транзакції(this.createTransaction) поповнення(Transaction.DEPOSIT), результат виконання функції ми зберігаємо в зміну item
    this.balanse += amount; // добавляємо/обновляємо баланс
    this.transactions.push(item); // добавляємо історію транзакції
  },
  // * Метод, що відповідає за зняття суми з балансу.
  // * Приймає суму транзакції
  // * Викликає createTreansaction для створення об'єкта транзакції
  //   після чого додає його до історії транзакції
  // * якщо аmоunt більше ніж поточний баланс, виводить повідомлення
  //   про те, що зняття такої суми не можливе, "Недостатньо коштів".
  withdraw(amount) {
    // зняття
    if (amount > this.balanse) {
      // якщо сума  більша за поточний баланс
      return 'Недостатньо коштів';
    } else if (amount === 0 || amount < 0) {
      // якщо сума  рівна або менша нуля
      return 'Error';
    } else {
      console.log('Операція успішна');
    } //* 'withdraw' * //
    const item = this.createTransaction(amount, Transaction.WiTHDRAW); // викликаємо створення транзакції(this.createTransaction) поповнення(Transaction.WiTHDRAW)

    this.transactions.push(item); // зберігаємо історію транзакцій
    this.balanse -= amount; // міняємо баланс
  },

  // * Метод повертає поточний баланс
  getBalance() {
    return this.balanse;
  },

  // * Метод шукає та повертає об'єкт транзакції по id
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      // перебираємо масив транзакції
      if (transaction.id === id) {
        // якщо масив має такий id
        return transaction; // повертаємо об'єкт який нам підходить
      }
    }
    return 'Транзакції не знайдено';
  },

  // * Метод повертає кількість коштів певного типу транзакції
  //   з усієї історії транзакцій
  getTransactionTotal(type) {
    let sum = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        sum += transaction.amount;
      }
    }
    return sum;
  },
};

account.withdraw(11);
account.deposit(22);
account.withdraw(11);
account.deposit(22);

console.log(account.getTransactionTotal(Transaction.WiTHDRAW));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
