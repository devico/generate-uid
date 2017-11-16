let range = (from, to) => {
	return Array(to).fill(from).map((_, i) => i)
}

let generateUID = (numGroups) => {
	return range(0, numGroups)
					 .map(() => { 
					   return Math.random().toString(16).slice(-5).toUpperCase()
					 }).join('-');
}

