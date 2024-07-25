const numberOfRows = 10;
const triangle = generatePascalTriangle(numberOfRows);

// create the table for pascal triangle
const container = document.getElementById("pascal'triangle");
const table = createPascalsTriangleTable(triangle);
container.appendChild(table);

// Function section to generate Pascal triangle
function generatePascalTriangle(numberOfRows){
    if(numberOfRows<=0) return[];
    let triangle = [[1]];

    for(let i = 1; i <numberOfRows; i++){
        let prevRow = triangle[i-1];
        let newRow = [1];

        for(let j = 1; j< i; j++){
            newRow.push(prevRow[j-1] + prevRow[j]);
        }
        newRow.push(1);
        triangle.push(newRow);
    }
    return triangle;
}


function createPascalsTriangleTable(triangle) {
    let table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.margin = "10px";
    table.style.textAlign = "center";

    for( let row of triangle) {
        let tr = document.createElement("tr");

        for(let cell of row){
            let td = document.createElement("td");
            td.style.border = "1px solid black";
            td.style.padding = "5px";
            td.textContent = cell;
            tr.appendChild(td);

        }
        table.appendChild(tr);
    }
    return table;
}


