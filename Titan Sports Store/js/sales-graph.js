function createBarChart(data) {
    // Start with the container.
    var chart = document.createElement("div");
    chart.setAttribute("id", "mainDiv");

    // The container must have position: relative.
    chart.style.position = "relative";

    // The chart's height is the value of its largest
    // data item plus a little margin.

    var height = 0;

    for (var i = 0; i < data.length; i += 1) {
        height = Math.max(height, data[i].value);
    }

    chart.style.height = (height + 10) + "px";

    // Give the chart a bottom border.
    chart.style.borderBottomStyle = "solid";
    chart.style.borderBottomWidth = "1px";

    // Iterate through the data.
    var barPosition = 0;

    // We have a preset bar width for the purposes of this
    // example.  A full-blown chart module would make this
    // customizable.
    var barWidth = 50;
    for (i = 0; i < data.length; i += 1) {
        // Basic column setup.
        var dataItem = data[i];
        var bar = document.createElement("div");
        bar.style.position = "absolute";
        bar.style.left = barPosition + "px";
        bar.style.width = barWidth + "px";
        bar.style.backgroundColor = dataItem.color;
        bar.style.height = dataItem.value + "px";
        bar.style.borderStyle = "ridge";
        bar.style.borderColor = dataItem.color;
        bar.style.fontWeight = "bold";
        bar.style.color = "white";
        bar.style.fontSize = "10px";
        bar.textContent = data[i].month + " " + data[i].color + " " + data[i].value;

        // Visual flair with CSS Level 3 (for maximum compatibility
        // we set multiple possible properties to the same value).
        // Hardcoded values here just for illustration; a
        // full module would allow major customizability.
        bar.style.MozBoxShadow = "rgba(128, 128, 128, 0.75) 0px 7px 12px";
        bar.style.WebkitBoxShadow = "rgba(128, 128, 128, 0.75) 0px 7px 12px";
        bar.style.boxShadow = "rgba(128, 128, 128, 0.75) 0px 7px 12px";
        bar.style.MozBorderRadiusTopleft = "8px";
        bar.style.WebkitBorderTopLeftRadius = "8px";
        bar.style.borderTopLeftRadius = "8px";
        bar.style.MozBorderRadiusTopright = "8px";
        bar.style.WebkitBorderTopRightRadius = "8px";
        bar.style.borderTopRightRadius = "8px";
        bar.style.backgroundImage =
            "-moz-linear-gradient(" + dataItem.color + ", black)";
        bar.style.backgroundImage =
            "-webkit-gradient(linear, 0% 0%, 0% 100%," +
            "color-stop(0, " + dataItem.color + "), color-stop(1, black))";
        bar.style.backgroundImage =
            "linear-gradient(" + dataItem.color + ", black)";

        // Recall that positioning properties are treated *relative*
        // to the corresponding sides of the containing element.
        bar.style.bottom = "0px";
        chart.appendChild(bar);

        // Move to the next bar.  We provide an entire bar's
        // width as space between columns.
        barPosition += (barWidth * 2);
    }

    return chart;
}


// function resetGraph() {
//     var millisecondsPerFrame = 2000;
//     var bars = document.getElementById("mainDiv").querySelectorAll("div");

//     bars.forEach(); {
//         setInterval(function () { func }, millisecondsPerFrame);



window.onload = function () {
    var colors = [{ month: "Jan", color: "red", value: 40 },
    { month: "Feb", color: "blue", value: 10 },
    { month: "Mar", color: "green", value: 100 },
    { month: "Apl", color: "yellow", value: 65 },
    { month: "May", color: "brown", value: 75 },
    { month: "Jun", color: "pink", value: 120 },
    { month: "Jul", color: "purple", value: 121 },
    { month: "Aug", color: "grey", value: 175 },
    { month: "Sep", color: "black", value: 220 },
    { month: "Oct", color: "orange", value: 275 },
    { month: "Nov", color: "silver", value: 300 },
    { month: "Dec", color: "gold", value: 15 }
    ];

    var chart = createBarChart(colors);
    document.body.appendChild(chart);

    var b = document.getElementById("reset");

    b.onclick = resetGraph();
};