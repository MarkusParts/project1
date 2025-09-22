function dateNowFormattedET(){
	let timeNow = new Date();
	const MonthNamesET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "november", "detsember"];
	return timeNow.getDate() + "." + monthNamesET[timeNow.getMonth()] + " " + timeNow.getFullYear();