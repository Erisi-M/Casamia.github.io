var barChartsOptions = {
  series: [
    {
      data: [10, 8, 7, 9, 8],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ["#246dec", "#cc3c43", "#367952", "#f5b74f", "#4f35a1"],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      columnWidth: "40%",
      horizontal: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ["Pasta", "Pizza", "Steak", "Fish", "Beef"],
  },
  yaxis: {
    title: {
      text: "Count",
    },
  },
};

var barChart = new ApexCharts(
  document.querySelector("#bar-chart"),
  barChartsOptions
);

barChart.render();

var areaChartsOptions = {
  series: [
    {
      name: "Purches Orders",
      data: [14, 10, 13, 12, 20],
    },
    {
      name: "Order Sales",
      data: [11, 32, 45, 32, 34, 52],
    },
  ],
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  colors: ["#4f35a1", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: "Purchase Orders",
      },
    },
    {
      opposite: true,
      title: {
        text: "Sales Orders",
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

var chart = new ApexCharts(
  document.querySelector("#area-chart"),
  areaChartsOptions
);
chart.render();
