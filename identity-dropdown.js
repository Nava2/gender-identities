$.getJSON('gender-identities/identities.json', function(data) {
	var genderIdentities = data.identities;
	var dropdown = document.getElementById("identitiesDropdown");
	for (var i = 0; i < genderIdentities.length; i++) {
		var gender = document.createElement("option");
		gender.textContent = genderIdentities[i];
		gender.value = genderIdentities[i];
		dropdown.appendChild(gender);
	}
});