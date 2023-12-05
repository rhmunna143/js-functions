function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || changeArray.length === 0) {
        return 'Invalid!!! Provide a valid array With Elements.';
    } else {
        let totalCost = 0;
        for(let i = 0; i < changeArray.length; i++) {
            totalCost += changeArray[i];
        }

        if(totalCost > totalDue) {
            return 'true';
        } else {
            return 'false';
        }
    }
}