// 6. Company Users
// Write a function, which keeps the information about companies and their employees.
// You will receive an array of strings containing the company name and employee's id. Add each employee to the given company. Keep in mind that a company cannot have two employees with the same id.
// When you finish reading data, order the companies by their name in ascending order.
// Print the company name and each employee's id in the following format:
// {companyName}
// -- {id1}
// -- {id2}
// -- {idN}
// Input / Constraints
// · The input come as array of strings, each in the format: "{companyName} -> {employeeId}".
// · The input always will be valid.

function companyUsers(array) {
    let companyList = {};

    array.forEach(element => {
        let [name, id] = element.split(' -> '); //сплитваме по -> 
        if (!companyList[name]) { // проверяваме дали това име го има в обекта ако не го създаваме с празна стойност (масив)
            companyList[name] = []; //създаваме го като празен масив за да може да пушваме Id-tata
        }
        companyList[name].push(id); //пушваме id-tata към името на компанията.
    });
    //console.log(JSON.stringify(companyList));
    // за да сортираме трябва да превърнем обекта в обикновен масив и сортираме по азбучен ред ascending order 
    let sortedCompany = Object.entries(companyList).sort((a, b) => a[0].localeCompare(b[0]));
    for (const [name, allId] of sortedCompany) { // завъртаме обекта за да вземем името и it-то
        console.log(`${name}`);
        let uniqueId = new Set(allId); // създаваме нов сет за да проверим уникалните id-ta
        for (const id of uniqueId) { // завъртаме ги всичките и ги принтираме
            console.log(`-- ${id}`);
        }
    }
}
companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);
companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111' ]);