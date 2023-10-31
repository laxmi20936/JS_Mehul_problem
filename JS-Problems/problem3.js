 const createHelloWorld = function (...args) {
    console.log(args)
	return function (){
		return "Hello World"
	}
}

const f = createHelloWorld("hi", 2,3)
console.log(f())