let keyArray = [];

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const getRandomLetters = () => {
    let returnString = '';
    let letterArray = ('abcdefghijklmnopqrstuvwxyz').split('');
    for(let i = 0; i < 20; i++){
        returnString += letterArray[getRandomInt(25)];
    }
    return returnString;
}

export const randomKeyGen = () => {
    let flag = true;

    let key;
    while(flag){
        let nums = getRandomInt(100000000);
        let letters = getRandomLetters();
        key = `${letters}${nums}`;
        if(!keyArray.includes(key)){
            keyArray.push(key);
            flag = false;
        }
    }
    return key;
}
