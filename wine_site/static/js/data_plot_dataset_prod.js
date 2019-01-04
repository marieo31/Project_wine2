  
// Extracting and casting the data
var countries = data.map(data => data.Country);
var prod = data.map(data => 100*data.production)
var full = data.map(data => 100*data.full )
var d_5k = data.map(data => 100*data["5k"])
var d_23k = data.map(data => 100*data["23k"])

// we need to renormalized the production for the selected countries
var sum = prod.reduce((a, b) => a + b, 0);
var prod2 = prod.map(pp => pp/sum*100)

// Creating the traces
var trace1 = {
    x: countries,
    y: prod2,
    name: '2016 production',
    type: 'bar'
  };
  
  var trace2 = {
    x: countries,
    y: full,
    name: 'Full dataset',
    type: 'bar'
  };

  var trace3 = {
    x: countries,
    y: d_23k,
    name: '23k rows dataset',
    type: 'bar'
  };
  
  var data_plot = [trace2, trace1,  trace3];
  
  var layout = {barmode: 'group',
                title:{
                    text: "Sampling the dataset according to annual production"
                },
                yaxis:{
                    title:{
                        text: "Production rate or nb of row in dataset [%]"
                    }
                }
            };
  
  Plotly.newPlot('plot_datasets_prod', data_plot, layout);
//   var link= "https://github.com/marieo31/Project_wine2/tree/master/Resources_cleaned/datasets_vs_production.json"

//   console.log("blabla")
//   d3.json(link, function(Data){
//       console.log(Data)
//   })
  
  
  
//   var trace1 = {
//     x: sent.price,
//     y: sent.compound,
//     mode: "markers",
//     type: "scatter",
//     name: "PriceComp",
//     marker: {
//       color: "#2077b4",
//       symbol: "hexagram"
//     }
//   };
//   priceData= [trace1]
//   // Define the plot layout
//   var layout = {
//     title: "Sentiment Analysis based on Price",
//     xaxis: { title: "Price" },
//     yaxis: { title: "Compound" }
//   };
  
//   // Plot the chart to a div tag with id "plot"
//   Plotly.newPlot("plot", priceData, layout);


//   var trace2 = {
//     x: sent.Score,
//     y: sent.compound,
//     mode: "markers",
//     type: "scatter",
//     name: "PriceComp",
//     marker: {
//       color: "red",
//       symbol: "hexagram"
//     }
//   };
//   priceDat= [trace2]
//   // Define the plot layout
//   var layout = {
//     title: "Sentiment Analysis based on Rating",
//     xaxis: { title: "Rating" },
//     yaxis: { title: "Compound" }
//   };
  
//   // Plot the chart to a div tag with id "plot"
//   Plotly.newPlot("plot2", priceDat, layout);

//   var trace3 = {
//     x: avgg.Price_Avg,
//     y: avgg.Rating_Avg,
//     mode: "markers",
//     type: "scatter",
//     name: "PriceComp",
//     marker: {
//       color: "red",
//       symbol: "hexagram"
//     }
//   };
//   priceDa= [trace3]
//   // Define the plot layout
//   var layout = {
//     title: "Average Price vs Average Rating",
//     xaxis: { title: "Average Price" },
//     yaxis: { title: "Average Rating" }
//   };
  
//   // Plot the chart to a div tag with id "plot"
//   Plotly.newPlot("plot3", priceDa, layout);





//   var trace4 = {
//     x: avgg.User,
//     y: avgg.Price_Avg,
//     name: 'Price Average',
//     marker: {color: 'rgb(55, 83, 109)'},
//     type: 'bar'
//   };
  
//   var trace5 = {
//     x: avgg.User,
//     y: avgg.Rating_Avg,
//     name: 'Rating Average',
//     marker: {color: 'rgb(26, 118, 255)'},
//     type: 'bar'
//   };
  
//   var datam = [trace4, trace5];
  
//   var layout = {
//     title: 'Average Price and Rating per Taster',
//     xaxis: {tickfont: {
//         size: 14,
//         color: 'rgb(107, 107, 107)'
//       }},
//     yaxis: {
//       title: 'Average',
//       titlefont: {
//         size: 16,
//         color: 'rgb(107, 107, 107)'
//       },
//       tickfont: {
//         size: 14,
//         color: 'rgb(107, 107, 107)'
//       }
//     },
//     legend: {
//       x: 0,
//       y: 1.0,
//       bgcolor: 'rgba(255, 255, 255, 0)',
//       bordercolor: 'rgba(255, 255, 255, 0)'
//     },
//     barmode: 'group',
//     bargap: 0.15,
//     bargroupgap: 0.1
//   };
  
//   Plotly.newPlot('plot4', datam, layout);