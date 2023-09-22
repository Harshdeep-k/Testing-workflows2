const fs = require('fs');
console.log("Successful run of the files")
// // Read the SARIF file
// fs.readFile('path/to/your/file.sarif', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading the SARIF file:', err);
//     return;
//   }

//   // Parse the SARIF data as JSON
//   let sarifData;
//   try {
//     sarifData = JSON.parse(data);
//   } catch (error) {
//     console.error('Error parsing the SARIF file as JSON:', error);
//     return;
//   }

//   // Modify the SARIF data as needed
//   // Example: Change the run's tool driver name
//   sarifData.runs[0].tool.driver.name = 'New Tool Name';

//   // Convert the modified SARIF data back to a string
//   const modifiedData = JSON.stringify(sarifData, null, 2);

//   // Write the modified SARIF data back to the file
//   fs.writeFile('path/to/your/file.sarif', modifiedData, 'utf8', (err) => {
//     if (err) {
//       console.error('Error writing the modified SARIF data:', err);
//       return;
//     }
//     console.log('SARIF file modified successfully!');
//   });
// });
