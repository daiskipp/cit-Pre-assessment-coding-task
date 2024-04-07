window.onload = function() {
    var table = document.getElementById("multiplication-table");
    for (var i = 1; i <= 12; i++) {
        var row = document.createElement("tr");
        for (var j = 1; j <= 12; j++) {
            var cell = document.createElement(i === 1 || j === 1 ? "th" : "td");
            cell.textContent = i * j;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
};