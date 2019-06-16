
	let f = [[1,2],[3,4]].map(function ([a,b]) {
		return a + b;
	})
	let f1 = [[1,2,3],[3,4,4]].map(function ([a,b,c]) {

		return a + b
	})
	let foo = [1,2,3].map(function (a,b) {
		return a + b;
	})
	console.log(f1)
	// console.log(f);
	console.log(foo);
	// console.log([[1, 2], [3, 4]].map(([a, b]) => a + b))
	// let arr = [1, 2, 3];
	// let {[arr.length - 1] : last,0 : first} = arr;
	// console.log(first)
	// console.log(last)
	// let x;
	// ({x} = {x:1})
	// console.log(x)
	// let obj = {};
	// let arr = [];

	// ({foo:obj.prop,bar:arr[0]}
	// 	={foo:124,bar:true})
	// 	console.log(obj)
	// 	console.log(arr)
	// let [x = true] = [];
	// console.log(x);
	// function foo() {
	// 	console.log('aaa');
	// }
	// let [x = foo()] = [1];
	// x = [2][0]
	// console.log(x);
	// let [a,b,c,d,e,f,g] = [1,," ","",[],undefined,null,]

	// // let [a,b,c] = [1,2,3]
	// console.log(a)
	// console.log(b)
	// console.log(c)
	// console.log(d)
	// console.log(e)
	// console.log(f)
	// console.log(g)