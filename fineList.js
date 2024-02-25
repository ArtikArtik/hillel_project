"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey) {
    // змінна для збереження масиву результатів
    let result = [];
    // цикл, що проходить по всіх об'єктах в масиві DB
    for (let i = 0; i < DB.length; i++) {
    // змінна для збереження поточного об'єкту
    let fine = DB[i];
    // перевірка чи об'єкт відповідає параметру searchKey
    if (fine.номер === searchKey || fine.тип === searchKey) {
    // якщо об'єкт відповідає параметру searchKey, то додаємо його до масиву результатів
    result.push(fine);
    }
    }
    // повертаємо масив результатів
    return result;
    }