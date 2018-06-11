google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Billion BTU'],
    ['1960', 57344],
    ['1961', 62705],
    ['1962', 71216],
    ['1963', 78258],
    ['1964', 87016],
    ['1965', 95878],
    ['1966', 108610],
    ['1967', 119314],
    ['1968', 135509],
    ['1969', 153032],
    ['1969', 153032],
    ['1970', 171346],
    ['1971', 188564],
    ['1972', 209665],
    ['1973', 237104],
    ['1974', 235482],
    ['1975', 242096],
    ['1976', 252408],
    ['1977', 270767],
    ['1978', 289031],
    ['1979', 295551],
    ['1980', 309694],
    ['1981', 317921],
    ['1982', 315744],
    ['1983', 329216],
    ['1984', 353246],
    ['1985', 379307],
    ['1986', 398095],
    ['1987', 417862],
    ['1988', 444382],
    ['1989', 472473],
    ['1990', 489741],
    ['1991', 499299],
    ['1992', 501598],
    ['1993', 521176],
    ['1994', 544365],
    ['1995', 571483],
    ['1996', 586291],
    ['1997', 597240],
    ['1998', 639254],
    ['1999', 638966],
    ['2000', 668216],
    ['2001', 684966],
    ['2002', 718136],
    ['2003', 741696],
    ['2004', 745810],
    ['2005', 767622],
    ['2006', 778685],
    ['2007', 788461],
    ['2008', 771702],
    ['2009', 766848],
    ['2010', 788887],
    ['2011', 768009],
    ['2012', 752941],
    ['2013', 757189],
    ['2014', 771379],
    ['2015', 803865],
    ['2016', 804283]
  ]);

  var options = {
    title: 'Electricity Total Consumption (i.e. Sold) for Florida', titleTextStyle: {color: '#249241'},
    hAxis: {title: 'Year'},
    vAxis: {
      minValue: 0
    }
  };

  var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}

google.charts.setOnLoadCallback(getData);

function drawChart2(freshData) {
  console.log("freshData", freshData)
  freshData.unshift(['Year', 'Billion BTU'])
  var data = google.visualization.arrayToDataTable(freshData);

  var options = {
    title: 'Renewable Energy Production for Florida', titleTextStyle: {color: '#249241'},
    hAxis: {title: 'Year', ticks:[1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015]},
    vAxis: {
      minValue: 0,
    }
  };

  var chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));

  chart.draw(data, options);
}

let testData

function getData(){
  // Create a new request object
  let request = new XMLHttpRequest()
  // TODO: URL to contact goes here
  let requestUrl = "https://api.eia.gov/series/?api_key=7ab515bbd4c29f1d79b995dcd1b548af&series_id=SEDS.REPRB.FL.A"
  // Open a connection
  request.open('GET', requestUrl, true)
  // Callback for when the request completes
  request.onload = function(){
    let theAcutalData = JSON.parse(request.response).series[0].data
    
    drawChart2(theAcutalData)
  }
  // Callback for when there's an error
  request.error = function(err){
    console.log("error is: ", err)
  }
  // Send the request to the specified URL
  request.send()
}