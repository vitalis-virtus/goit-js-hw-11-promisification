const task1 = () => {
    const delay = ms => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        },ms)
    })
};

const loggerTask1 = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(loggerTask1); // Resolved after 2000ms
delay(1000).then(loggerTask1); // Resolved after 1000ms
delay(1500).then(loggerTask1); // Resolved after 1500ms
}

task1();


const task2 = () => {
    
const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );
    return new Promise((resolve) => {
        resolve(updatedUsers);
    })
};

const loggerTask2 = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(loggerTask2);
toggleUserState(users, 'Lux').then(loggerTask2);
}

task2();

const task3 = () => {
    const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
  const delay = randomIntegerFromInterval(200, 500);

    const canProcess = Math.random() > 0.3;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (canProcess) {
            resolve(transaction.id, delay);
    } else {
      reject(transaction.id);
        }
       },delay)
    })
    
};

const logSuccess = (id, time) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);
}

task3();






