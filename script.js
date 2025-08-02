fetch('https://docs.google.com/spreadsheets/d/1jQt7u1lA5TM87TOntexS04UX8j-RdUtYBH8iCiMEV4o/gviz/tq?tqx=out:json')
  .then(res => res.text())
  .then(text => {
    const json = JSON.parse(text.substr(47).slice(0, -2));
    const table = document.getElementById('dataTable');

    // Build header row
    const header = table.insertRow();
    json.table.cols.forEach(col => {
      const cell = header.insertCell();
      cell.outerHTML = `<th>${col.label}</th>`;
    });

    // Build data rows
    json.table.rows.forEach(row => {
      const tr = table.insertRow();
      row.c.forEach(cell => {
        const td = tr.insertCell();
        td.textContent = cell ? cell.v : "";
      });
    });
  });
