import "./index.scss";
import printMe from	'./print'
let tabUI = require("../../js/tab");
if (process.env.NODE_ENV !== 'production') {
	require('./index.html')
}
tabUI.init();
tabUI.tab($(".tab-wrap2"), {
	autoPlay: 2000,
	animate: true
});

if(module.hot) {
	module.hot.accept();
	module.hot.accept('./print.js', function(){
		console.log('监听到热更新');
		printMe();
	})
}