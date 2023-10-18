// 4) Sukurti Klasę, kurios pagalba galima būtų kurti TABLE elementą,
// kurio viduje būtų THEAD ir TBODY (gal ir TFOOT jei nori).
// THEAD viduje būtų TR, kurio viduje TH. TBODY viduje būtų TR,
// kurių viduje būtų TD. (jeigu darot su TFOOT, tai ten irgi bus TR su TD kaip buvo TBODY).
// (kas be ko, galimybė suteikti tekstus ir atributus).

export class Table {
    constructor(rows, columns, atributas) {
      this.rows = rows;
      this.columns = columns;
      this.atributas = atributas;
      return this.render();
    }
  
    render() {
      const table = document.createElement('table');

      for (const attribute in this.atributas) {
        table.setAttribute(attribute, this.atributas[attribute]);
      }
  
      // Create the table head
      const tableHead = document.createElement('thead');
      const headRow = document.createElement('tr');
  
      for (let j = 0; j < this.columns; j++) {
        const header = document.createElement('th');
        headRow.appendChild(header);
      }
  
      tableHead.appendChild(headRow);
      table.appendChild(tableHead); // Append the table head to the table
  
      // Create the table body
      const tableBody = document.createElement('tbody');
  
      for (let i = 0; i < this.rows; i++) {
        const row = document.createElement('tr');
  
        for (let j = 0; j < this.columns; j++) {
          const cell = document.createElement('td');
          row.appendChild(cell);
        }
  
        tableBody.appendChild(row);
      }
  
      table.appendChild(tableBody); // Append the table body to the table
  
      return table;
    }
  }