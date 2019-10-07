module.exports = function check(str, bracketsConfig) {

  let getBrackets = bracketsConfig.map(item => item.join(''));

      for (let i = 0; i < getBrackets.length; ) {
          let item = getBrackets[i]
          if (str.indexOf(item) !== -1) {
            str = str.replace(item, '');
            i = 0;
          } else i++;
      };
      
      return str === "" ? true : false;

    console.log(getBrackets);
}
