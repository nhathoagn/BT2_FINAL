const a = async (index) => {
    console.log('a', index)
}
const b = async (index) => {
    await a(index);
    console.log('b', index)
}

b(1);
b(2);
b(3);

// var iphonePhones = ["iphone 4", "iphone 5", "iphone 6"];
//
// console.log("array: " , iphonePhones)