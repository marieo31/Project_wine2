  
// Extracting and casting the data
console.log(data)


// var name = data.map(data => data.Country);
// var prod = data.map(data => 100*data.production)
// var full = data.map(data => 100*data.full )
// var d_5k = data.map(data => 100*data["5k"])
// var d_23k = data.map(data => 100*data["23k"])

// // we need to renormalized the production for the selected countries
// var sum = prod.reduce((a, b) => a + b, 0);
// var prod2 = prod.map(pp => pp/sum*100)

// // Creating the traces
// var trace1 = {
//     x: data[0].prices,
//     y: data[0].prices_dist,
//     name: 'Full dataset',
//     type: 'bar'
//   };

  
// var trace2 = {
//     x: data[1].prices,
//     y: data[1].prices_dist,
//     name: '23k rows',
//     type: 'bar'
//   };

// var trace3 = {
//     x: data[2].prices,
//     y: data[2].prices_dist,
//     name: '5k rows',
//     type: 'bar'
//   };



//   var data_plot = [trace1, trace2, trace3];
//   console.log(data_plot)

//   var layout = { title:{
//                     text: "Price distribution for the datasets"
//                 },
//                 // yaxis:{
//                 //     title:{
//                 //         text: "Distribution"
//                 //     }
//                 // }
//             };
  
//   Plotly.newPlot('plot_datasets_distrib_price', data_plot, layout);


 