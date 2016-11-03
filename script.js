var person = {
	name:"J",
	age:"W",
	posessions: {
		key:" came in with 1 set of keys, ",
		cash:"$200, ",
		pocketSquare:"1 pocket square",
	},
	dead: function() {
		if (person.name === "Unknown" && person.age === "Unknown") {
			console.log("John Doe " + person.posessions.key + person.posessions.cash + person.posessions.pocketSquare);
		}
		else if (person.name != "Unkown" && person.age != "Unknown" ){
			console.log(person.name + person.age + person.posessions.key + person.posessions.cash + person.posessions.pocketSquare);
		}
	}

}
person.dead()
