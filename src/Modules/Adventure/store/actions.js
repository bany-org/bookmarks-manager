export const GOLD_INCREASE = 'GOLD_INCREASE';

export const goldIncrease = (value) => {
    console.log('akcja')
    return {
        type: GOLD_INCREASE,
        value: value
    };
}
