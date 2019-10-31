@Component({
  templateUrl:'/index.html'
})

function palindrome(str) {
  var reg = /[\W_]/g;
  
  var smallStr = str.toLowerCase().replace(reg, "");
  
  var reversed = smallStr.split("").reversed().join("");
  if (reversed === smallStr) return true;
  
  return false;
}

palindrome("racecar");
palindrome("eye");
palindrome("nope");