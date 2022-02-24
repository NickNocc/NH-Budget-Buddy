let db;

const request = indexDB.open('budget_tracker', 1);

request.onupgradeneeded = function(e) {
    const db = e.target.result;

    db.createObjectStore('new_transaction', { autoIncrement: true });
};

request.onsuccess = function(e) {
    db = e.target.result;

    if (navigator.onLine) {
        uploadTransaction();
    }
};

request.onerror = function(e) {
    console.log(e.target.errorCode);
};

function saveTransaction(newTrans) {
    const transaction = db.transaction(['new_transaction'], 'readwrite');
    const budgetObjectStore = transaction.objectStore('new_transaction');

    budgetObjectStore.add(newTrans);
};

function uploadTransaction() {
    const transaction = db.transaction(['new_transaction'], 'readwrite');
    const budgetObjectStore = transaction.objectStore('new_transaction');
    const getAll = budgetObjectStore.getAll();

    getAll.onsuccess = function () {
        if (getAll.result.length > 0) {
            
        }
    }
}