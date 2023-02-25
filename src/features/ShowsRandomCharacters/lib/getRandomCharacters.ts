function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRandomCharacters = () => {
    const result: number[] = [];

    while (result.length < 6) {
        let characterId = getRandomInt(1, 826);
        if (!result.includes(characterId)) result.push(characterId);
    }

    return result;
};
