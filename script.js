function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  const romanNumerals = Object.values(obj);
	
 let result="";
	for (let [symbol,value] of romanNumerals){
		while(num>=value){
			result+=symbol
			num-=value
		}
	}
	return result

}




// do not edit below this line
module.exports = convertToRoman
