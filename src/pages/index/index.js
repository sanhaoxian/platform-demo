import "./index.scss";
let tabUI = require("../../js/tab");
if (process.env.NODE_ENV !== 'production') {
	require('./index.html')
}
tabUI.init();
tabUI.tab($(".tab-wrap2"), {
	autoPlay: 2000,
	animate: true
});