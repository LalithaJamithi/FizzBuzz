const trackedDivisions = new Set();

export function processValue(value) {
    let result = '';
    if (value === '' || isNaN(value)){
        result = 'Invalid Item'
    }
    if (value != '' && value % 3 === 0) {
      result += 'Fizz';
      trackedDivisions.add("Divided " + value + " by 3");
    }
    if (value != '' && value % 5 === 0) {
      result += 'Buzz';
      trackedDivisions.add("Divided " + value + " by 5");
    }
    return result || value.toString(); // Return value or result string
  }
  
  export function getDivisions() {
    // Simulate tracking divisions    
    if (trackedDivisions) { // Check if tracked
      return Array.from(trackedDivisions);
    }
    return [];
  }
  