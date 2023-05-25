function createBaseTypeUtils(){
    return {
        isString(x){
            return typeof x === 'string';
        },
        isNumber(x){
            return typeof x === 'number';
        },
        isFunction(x){
            return typeof x === 'function';
        },
        isNil(x){
            return x === null || x === undefined;
        },
        first(x){
            return x[0]
        },
        last(x){
            return x[x.length-1]
        },
        //大于等于min，小于等于max时 返回true
        between(min,max,target){
            return (target >= min) && (target <= max);
        }
    }
}

const btu = createBaseTypeUtils()
module.exports = btu;
