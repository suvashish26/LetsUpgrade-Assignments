const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
console.log(clothes[0]);
/* The value of clothes[0] is undefined .Because of this length behavior, when JavaScript executes clothes.length = 0,
all the items of the array clothes are deleted. clothes[0] is undefined, because clothes array was emptied.*/
var arr=[13,6,8,90,72];
 for (var i = 0, sum = 0; i < arr.length; sum += arr[i++]);{  //sum= sum+array;
    console.log(sum);
}