function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const transactionTotal = quantity * pricePerDroid;

    if ( transactionTotal > customerCredits) {
        return "Insufficient funds!"
    }

    return `You ordered ${quantity} droids worth ${transactionTotal} credits!`
}