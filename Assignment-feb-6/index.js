// const p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//             resolve("Promise Resolved");
//     },5000)
// });

// const p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//             resolve("Promise Resolved");
//     },10000)
// });


// async function handlePromise(){
//     console.log("first");

//     const val = await p1;
//     console.log("for p1");
//     console.log(val);

//     const val2 = await p2;
//     console.log("for p2");
//     console.log(val2);
// }
// handlePromise();

const url = 'https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '2117c4eb19msha8d4ee2b58ce58ap12dddejsn6a3ee030e73c',
		'X-RapidAPI-Host': 'AccuWeatherstefan-skliarovV1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		locationKey: 'noida'
	})
};
async function checkWeather(){
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
checkWeather();