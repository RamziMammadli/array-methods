//ARRAY/ITERATION METHODS

//length     -- uzunluq
//push()     -- arrayin sonuna elave edir
//pop()      -- arraydan sondan elementi silir
//shift()    -- arrayin evvelinden element silir
//unshift()  -- arrayin evveline element elave edir
//includes() -- arrayin icerisinde elementi yoxlayir (olub olmadigini)
//slice()    -- arraydan hisse cixarir
//splice()   -- arraydan silib elave edir
//join()     -- arrayi stringe cevirir
//reverse()  -- arrayi tersine cevirir
//sort()     -- arrayi siralayir
//find()     -- serte uygun ilk elementi qaytarir
//some()     -- array en az bir element uygun gelirse true qaytarir
//every()    -- arrayda her bir element uygundursa true qaytarir
//foreach()  -- arrayin her elementi uzerinde emeliyyat aparir ve yeni array yaratmir
//map()      -- arrayda her elementi deyisir ve yeni array yaradir
//filter()   -- arrayda serte uygun elementleri qaytarir

// ***** length
// let arr = [1, 2, 5, 78]
// console.log(arr.length);

// ***** push() pop() shift() unshift()
// let arr = [1,2,3,4]

// arr.push(4)
// arr.pop()
// arr.unshift(0)
// arr.shift()

// ***** includes()
// let arr = [1, 2 , 3]
// console.log(arr.includes(12));

//slice()
// let arr = [1,2,3,4]
// let newArr = arr.slice(1,3)
// console.log(newArr);

//splice()
// let arr = [1,2,3,4]
// arr.splice(1, 2, 45, 46)
// console.log(arr);

//join()
// let arr = ["Ramzi", "Mammadli"]
// console.log(arr.join(" "));

//reverse()
// let arr = [1 , 3, 7, 5]
// console.log(arr.reverse());

// sort()
// let arr = [1,5,3,7,6]
// console.log( arr.sort((a,b) => b - a) );
// console.log(arr.sort());

//find()
// let arr = [1, 10, 108,5,108]
// console.log(arr.find(e => e === 108));

//some() and every()
// let arr = [1 , 2, 3, 4]
// console.log(arr.some(x => x === 2)); true qaytardi
// console.log(arr.every(x => x === 3)); false qaytardi

//foreach()
// let arr = [1,2,3,4,5,6]
// arr.forEach((item) => console.log(item * 5))

//map()

// let newArr = arr.map((item) => item * 2)
// console.log(newArr);

//filter()
// let filterArr = arr.filter(item => item > 2)
// console.log(filterArr);






