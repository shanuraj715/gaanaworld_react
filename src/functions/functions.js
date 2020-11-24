
export function trimTitle( data ){

	let trimmed = data.split('( ').join('-');
	trimmed = trimmed.split(' )').join('-');
	trimmed = trimmed.split(' _ ').join('-');
	trimmed = trimmed.split(' - ').join('-');
	trimmed = trimmed.split(' ').join('-');
	trimmed = trimmed.toLowerCase();
	trimmed = trimmed.substring(0,45);
	// console.log(trimmed);
	return trimmed;
}