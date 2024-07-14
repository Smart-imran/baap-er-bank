//step number 1 addeventListner
    document.getElementById("btn-deposit").addEventListener("click", function () {

    //step-1: get diposit amount from the deposit field
    // step-2:for in put field use .value to the input inside field

    const depositeField = document.getElementById("deposit-field");
    const newDepositeAmountstring = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountstring);
     //step -7: clear the deposit field 
    //depositeAmount ="";
    depositeField.value = "";
    if(isNaN(newDepositeAmount)){
        alert("Please Enter a Number");
        return;

    }
    


    // step-3: get the current  deposite total  amount 
    // for non input-- use "innnerTest" to get the text
    const depositeTotalElement = document.getElementById("deposite-total");
    const previousDepositeTotalstring = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalstring);

    /* ---------------------------------------------------------- */

    // step-4: Add number set total deposit
    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;

    //Set the deposit Total
    depositeTotalElement.innerText = currentDepositeTotal;

    /* -------------------------------------------------- */

    //step-5:  Get balance current total

    const balanceTotalelement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalelement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-6: Calculate current total balance

    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
    //set current balanceToaalelement
    balanceTotalelement.innerText =currentBalanceTotal;

})