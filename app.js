const reasonInput = document.querySelector('#reasonInput');
const amountInput = document.querySelector('#amountInput');
const cancelBtn = document.querySelector('#cancel-btn');
const confirmBtn = document.querySelector('#confirmBtn');

const expenseList = document.querySelector('#expenseList');

const totalExpenses = document.querySelector('#totalExpenses');

const alertCtrl = document.querySelector('ion-alert-controller');

    let allExpenses = 0 ;

    const clear = () => {
        reasonInput.value = '';
        amountInput.value = '';
    }
    confirmBtn.addEventListener('click', () => {
   
    const enterdReason = reasonInput.value;
    const enterdAmount = amountInput.value;

    if(enterdReason.trim().length <= 0 ||
     enterdAmount <= 0 || 
     enterdAmount.trim().length <=0 )
    {

        const alert = document.createElement('ion-alert');
        alert.header = 'Invalid Input';
        alert.subHeader = 'Check Again';
        alert.message = 'Please Enter a Valid Data.';
        alert.buttons = ['OK'];

        document.body.appendChild(alert);
         alert.present();    
        return;
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = enterdReason + ': $ ' + enterdAmount ;
    expenseList.appendChild(newItem);
    allExpenses += +enterdAmount ;
    totalExpenses.textContent = allExpenses;
     clear();
});

cancelBtn.addEventListener('click', () => {
    clear();
});


