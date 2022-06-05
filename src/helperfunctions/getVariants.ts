// export const getVariants = (optionsValues: string[][]): any[] => {
//     let indexesNow = new Array<number>();
//     let lengths = new Array<number>();
//     let completed = new Array<boolean>();
//     optionsValues.forEach(optionValues => {
//         indexesNow.push(0);
//         lengths.push(optionValues.length);
//         completed.push(false);
//     });
//     let variants = [];
//     let stopCondition = false;
//     while (!stopCondition) {
//         let variant = [];
//         optionsValues.forEach((optionValues, optionIndex) => {
//             variant.push(optionValues[indexesNow[optionIndex]]);
//         });
//         variants.push(variant);
//         for (let index = optionsValues.length - 1; index >= 0; index--) {
//             indexesNow[index]++;
//             if (indexesNow[index] < lengths[index]) {
//                 break;
//             } else {
//                 if (index > 0) {
//                     indexesNow[index] = 0;
//                     //indexesNow[index - 1]++;
//                 } else {
//                     stopCondition = true;
//                 }
//             }
//         }
//     }
//     return variants;
// }


export const getVariants = (optionsValues: string[][], optionsNames: string[]): any[] => {
    let indexesNow = new Array<number>();
    let lengths = new Array<number>();
    let completed = new Array<boolean>();
    optionsValues.forEach(optionValues => {
        indexesNow.push(0);
        lengths.push(optionValues.length);
        completed.push(false);
    });
    let variants = [];
    let stopCondition = false;
    while (!stopCondition) {
        let variant = new Object();
        optionsValues.forEach((optionValues, optionIndex) => {
            variant[optionsNames[optionIndex]] = optionValues[indexesNow[optionIndex]];
            //variant['price'] = '';
            //variant['extras'] = [];
        });
        variants.push(variant);
        for (let index = optionsValues.length - 1; index >= 0; index--) {
            indexesNow[index]++;
            if (indexesNow[index] < lengths[index]) {
                break;
            } else {
                if (index > 0) {
                    indexesNow[index] = 0;
                    //indexesNow[index - 1]++;
                } else {
                    stopCondition = true;
                }
            }
        }
    }
    return variants;
}