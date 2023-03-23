// Connection to a broadcast channel
const bc = new BroadcastChannel('test_channel');

function changeApp(AppValue) {
	const bc=new window.BroadcastChannel('test_channel');
	bc.postMessage(AppValue);
}