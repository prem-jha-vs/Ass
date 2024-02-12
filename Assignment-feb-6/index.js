// const p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//             resolve("Promise Resolved");
//     },2000)
// });

// const p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//             resolve("Promise Resolved");
//     },1000)
// });
// const p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//             resolve("Promise Resolved");
//     },1000)
// });


// async function handlePromise(){
//     console.log("first");

//     const val1 = await p1;
//     console.log("for p1");
//     console.log(val1);

//     const val2 = await p2(await val1);
//     console.log("for p2");
//     console.log(val2);

// 	const val3 = await p2(await val2);
//     console.log("for p2");
//     console.log(val3);
// }
// handlePromise();

// const url = 'https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'X-RapidAPI-Key': '2117c4eb19msha8d4ee2b58ce58ap12dddejsn6a3ee030e73c',
// 		'X-RapidAPI-Host': 'AccuWeatherstefan-skliarovV1.p.rapidapi.com'
// 	},
// 	body: new URLSearchParams({
// 		locationKey: 'noida'
// 	})
// };
// async function checkWeather(){
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }
// checkWeather();
function promise1(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Promise is Resolved");
		}, 1000);
	});
}

function promise2(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Promise is Resolved");
		}, 2000);
	});
}
function promise3(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Promise is Resolved");
		}, 3000);
	});
}

async function handlePromise() {
	try{
    const val1 = await promise1();
    console.log("for promise1 "+val1);

    const val2 = await promise2(val1);
    console.log("for promise2 "+val2);

    const val3 = await promise3(val2);
    console.log("for promise3 "+val3);
	}catch(error){
		console.log('error :'+error);
	}
}
handlePromise();