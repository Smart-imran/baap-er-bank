
// step-1: Add event listner :
   document.getElementById("btn-withdraw").addEventListener("click",function(){

    //step-1: get withdrow amount from the deposit field.
    // step-2:for in put field use .value to the input inside field.
    //2.2- Also make sure to convert string to a number by using parseFloat().
   
     const withdrawField = document.getElementById("withdraw-field");
     const newWithdrawAmountString = withdrawField.value;
     const newwithdrawAmount = parseFloat(newWithdrawAmountString);

     //step-3: get the total withdrow amount
     const withdrawtotalElement = document.getElementById("withdrow-total");
     const previousWithdrawtotalString =withdrawtotalElement.innerText;
     const previousWithdrawtotal =parseFloat(previousWithdrawtotalString);

     //step-4: add number to set total withdraw
     const currentWithdrawTotal = previousWithdrawtotal + newwithdrawAmount;
     //step-5: set total withdraw amount
     withdrawtotalElement.innerText = currentWithdrawTotal;

     /* ------------------------------------------------------- */

     //step-5:  Get (-) balance current total

    const balanceTotalelement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalelement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    /* ------------------------------------------------------------- */

    //step-6: Calculate current total balance

    const currentBalanceTotal = previousBalanceTotal - newwithdrawAmount;
    //set current balanceToaalelement
    balanceTotalelement.innerText =currentBalanceTotal;     


     withdrawField.value = "";


   })