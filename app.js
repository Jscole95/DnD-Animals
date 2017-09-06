$("#sqearch").click((event) => {
	switch ($("#animal-type").val()){
		case "all-animals":
			$(".main-box").removeClass("invis2");
			break;

		case "normal":
			$(".swimming").addClass("invis2");
			$(".flying").addClass("invis2");
			$(".normal").removeClass("invis2");
			break;

		case "swimming":
			$(".normal").addClass("invis2");
			$(".flying").addClass("invis2");
			$(".swimming").removeClass("invis2");
			break;

		case "flying":
			$(".normal").addClass("invis2");
			$(".swimming").addClass("invis2");
			$(".flying").removeClass("invis2");
			break;

		default:
			break;
	}

	switch ($("#challenge-rating").val()){
		case "all":
			$(".cr0").removeClass("invis3");
			$(".cr1").removeClass("invis3");
			$(".cr2").removeClass("invis3");
			$(".cr3").removeClass("invis3");
			$(".cr4").removeClass("invis3");
			$(".cr5").removeClass("invis3");
			$(".cr6").removeClass("invis3");
			break;

		case "cr0":
			$(".cr1").addClass("invis3");
			$(".cr2").addClass("invis3");
			$(".cr3").addClass("invis3");
			$(".cr4").addClass("invis3");
			$(".cr5").addClass("invis3");
			$(".cr6").addClass("invis3");
			$(".cr0").removeClass("invis3");
			break;

		case "cr1":
			$(".cr0").addClass("invis3");
			$(".cr2").addClass("invis3");
			$(".cr3").addClass("invis3");
			$(".cr4").addClass("invis3");
			$(".cr5").addClass("invis3");
			$(".cr6").addClass("invis3");
			$(".cr1").removeClass("invis3");
			break;

		case "cr2":
			$(".cr0").addClass("invis3");
			$(".cr1").addClass("invis3");
			$(".cr3").addClass("invis3");
			$(".cr4").addClass("invis3");
			$(".cr5").addClass("invis3");
			$(".cr6").addClass("invis3");
			$(".cr2").removeClass("invis3");
			break;

		case "cr3":
			$(".cr0").addClass("invis3");
			$(".cr1").addClass("invis3");
			$(".cr2").addClass("invis3");
			$(".cr4").addClass("invis3");
			$(".cr5").addClass("invis3");
			$(".cr6").addClass("invis3");
			$(".cr3").removeClass("invis3");
			break;

		case "cr4":
			$(".cr0").addClass("invis3");
			$(".cr1").addClass("invis3");
			$(".cr2").addClass("invis3");
			$(".cr3").addClass("invis3");
			$(".cr5").addClass("invis3");
			$(".cr6").addClass("invis3");
			$(".cr4").removeClass("invis3");
			break;

		case "cr5":
			$(".cr0").addClass("invis3");
			$(".cr1").addClass("invis3");
			$(".cr2").addClass("invis3");
			$(".cr3").addClass("invis3");
			$(".cr4").addClass("invis3");
			$(".cr6").addClass("invis3");
			$(".cr5").removeClass("invis3");
			break;

		case "cr6":
			$(".cr0").addClass("invis3");
			$(".cr1").addClass("invis3");
			$(".cr2").addClass("invis3");
			$(".cr3").addClass("invis3");
			$(".cr4").addClass("invis3");
			$(".cr5").addClass("invis3");
			$(".cr6").removeClass("invis3");
			break;

		default:
			break;
	}
});

$("#search").click((event) => {
	event.preventDefault();
	let x = 0;
	$(".main-box").addClass("invis2 invis3");
	if ($("#normal").is(":checked")){
		$(".normal").removeClass("invis2");
		x++;
	}
	if ($("#swimming").is(":checked")){
		$(".swimming").removeClass("invis2");
		x++;
	}
	if ($("#flying").is(":checked")){
		$(".flying").removeClass("invis2");
		x++;
	}
	if (x == 0){
		$(".normal").removeClass("invis2");
		$(".swimming").removeClass("invis2");
		$(".flying").removeClass("invis2");
	}
	x = 0;
	if ($("#cr0").is(":checked")){
		$(".cr0").removeClass("invis3");
		x++;
	}
	if ($("#cr1").is(":checked")){
		$(".cr1").removeClass("invis3");
		x++;
	}
	if ($("#cr2").is(":checked")){
		$(".cr2").removeClass("invis3");
		x++;
	}
	if ($("#cr3").is(":checked")){
		$(".cr3").removeClass("invis3");
		x++;
	}
	if ($("#cr4").is(":checked")){
		$(".cr4").removeClass("invis3");
		x++;
	}
	if ($("#cr5").is(":checked")){
		$(".cr5").removeClass("invis3");
		x++;
	}
	if ($("#cr6").is(":checked")){
		$(".cr6").removeClass("invis3");
		x++;
	}
	if (x == 0){
		$(".cr0").removeClass("invis3");
		$(".cr1").removeClass("invis3");
		$(".cr2").removeClass("invis3");
		$(".cr3").removeClass("invis3");
		$(".cr4").removeClass("invis3");
		$(".cr5").removeClass("invis3");
		$(".cr6").removeClass("invis3");
	}
});

function updateAnimals(){
	let ret = [];
	for (let key in animals){
		let update = "";
		let anim = animals[key];
		update += `<div class="main-box ${anim.type} cr${anim.cr}" id="${key}">`;
		let name = key.slice(0, 1).toUpperCase() + key.slice(1);
		while (name.indexOf("-") != -1){
			let x = name.indexOf("-");
			name = name.slice(0, x) + " " + name.slice(x+1, x+2).toUpperCase() + name.slice(x+2, name.length);
		}
		update += `<h4>${name} - ${anim.cr}</h4><br/>`;
		update += `<div class="health info">HP: ${anim.hp}</div>`;
		update += `<div class="info">AC: ${anim.ac}</div>`;
		update += `<div class="info">Speed: ${anim.speed}</div>`;
		update += `<div class="info">STR: ${anim.str}</div>`;
		update += `<div class="info">DEX: ${anim.dex}</div>`;
		update += `<div class="info">CON: ${anim.con}</div>`;
		update += `<div class="skills invis">`;
		update += `<h3>Traits:</h3>`;
		for (let trait in anim.traits){
			update += `<p><span class="bold">${trait}</span>: ${anim.traits[trait]}</p>`;
		}
		update += `</div><div class="skills invis">`;
		update += `<h3>Actions:</h3>`;
		for (let ability in anim.abilities){
			let realAbility = returnAttack(anim.abilities[ability])
			update += `<p><span class="bold">${ability}</span>: ${realAbility}</p>`;
		}
		update += `</div></div>`;
		ret.push(update);
	}
	ret.forEach(lol => {
		$("#top").append(lol);
	});
};

function returnAttack(ability){
	let attack = ability.indexOf("Attack:");
	let hit = ability.indexOf("Hit:");
	let damage = ability.indexOf("damage");
	let ret;
	if (attack != -1){
		ret = ability.slice(0, attack-1) + "<br/>&nbsp&nbsp" + ability.slice(attack, hit-1);
		ret += "<br/>&nbsp&nbsp" + ability.slice(hit, damage+7);
		if (ability.length > damage+7)
			ret += "<br/>&nbsp&nbsp" + ability.slice(damage+8, ability.length);
		return ret;
	}
	else return ability;
}

$("#top").on("click", ".main-box", (event) => {
	let test = "#" + event.currentTarget.id;
	$(test).find(".skills").toggleClass("invis");
	$(test).toggleClass("expanded");
});


$(updateAnimals);