function stringPermutations(str){
    function process(str){
        if (str.length <= 2){
            return str.length === 2 ? [str, str[1] + str[0]] : [str];
        }
        return str
          .split('')
          .reduce((a, e, i) => a.concat(process(str.slice(0, i) + str.slice(i + 1)).map(value => e + value)), []);
    }

    return process(str).filter((e, i, a) => a.indexOf(e) === i);
}
