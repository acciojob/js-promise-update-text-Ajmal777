const output = document.getElementById('output');
const res = new Promise((res, rej)=>{
	setTimeout(()=>{
		res('Hello, World!');
	}, 1000);
});
res.then((data) => {
	output.innerText = data;
});
