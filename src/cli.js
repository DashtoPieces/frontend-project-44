import readlineSync from 'readline-sync'

export const greatings = () => {
console.log(`Hello, ${userName}!`) 
}

export const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');