$.getJSON('gender-identities/pronouns.json', function(data) {
	var pronouns = data.pronouns;
	var dropdown = document.getElementById("pronounsDropdown");
	for (var i = 0; i < pronouns.length; i++) {
		var pronoun = document.createElement("option");
		pronoun.textContent = pronouns[i];
		pronoun.value = pronouns[i];
		dropdown.appendChild(pronoun);
	}
});