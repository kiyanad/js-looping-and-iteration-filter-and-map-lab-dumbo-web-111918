// Code your solution here:
function driversWithRevenueOver(driver, number) {
  return driver.filter(function(oneDriver){
    // debugger
    return oneDriver.revenue > number
   })
}

function driverNamesWithRevenueOver(driver,number) {
const newDriver = driver.filter(function(oneDriver){
    return oneDriver.revenue > number
   })

  return newDriver.map(function(driverName){
     return driverName.name

   })
 }

   function exactMatch (drivers, attribute) {
  let arr = drivers.filter(function (driverName) {

       for (const key in attribute){
         if (attribute[key] === driverName[key]){
         return true;
       }
    //      attribute
    //      key
    // return attribute[key] === driverName[key]
       }

     })
  return arr
   }

function exactMatchToList(drivers, attribute){
    let arr = drivers.filter(function (driverName) {


         for (const key in attribute){
           if (attribute[key] === driverName[key]){
           return true;
          }
        }
       })
  return arr.map(function(driverName){
      return driverName.name
      // debugger
    })

   }
