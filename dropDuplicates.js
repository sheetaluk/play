var dropDuplicates_maintainInsertionOrder = function(unsortedArray) { 
  var unsortedObjectsArray = [];        
  var visitedHash = {};

  // if element not in visited hash put in new array
  unsortedArray.map(function(element, i) {
    if (!visitedHash[element]) {
      visitedHash[element] = element;
      unsortedObjectsArray.push(element);
    }
  });
  //maintain insertion order
  return unsortedObjectsArray;

  //sort array
  //return unsortedObjectsArray.sort();
}

var dropDuplicates_sortReturnOrigPositions = function(unsortedArray) {
  var unsortedObjectsArray = [], sortedObjectsArray = [];        
  var visitedHash = {};

  // if element not in visited hash put in new array
  unsortedArray.map(function(element,i) {
    if (!visitedHash[element]) {
      visitedHash[element] = element;
      var newObject = {
        "value" : element,
        "position" : i
      }; 
      unsortedObjectsArray.push(newObject);
    }
  });
       
  unsortedObjectsArray.sort(function(m,n) {
    if (m.value < n.value) {
      return -1;
    }
    if (m.value > n.value) {
      return 1;
    }
    return 0;
  });
        
  //return positions unsorted
  return $.map(unsortedObjectsArray, function(value, key) {
    return value.position;
  })
}
