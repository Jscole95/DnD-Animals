let druidShapes = [];
for (let key in enemies){
	if (enemies[key]["druid type"] != undefined){
		druidShapes.push(key);
	}
}
druidShapes.sort();

druidShapes.forEach(value => {

	//Adds html text and all basic info
	let animal = enemies[value];
	let html = `<div class="animal center ${animal["druid type"]} ">`;
	html += '<div class="info center">';
	html += `<div class="name"><strong>${value}</strong></div>`;
	let hp = findNumbers(animal.attributes.hp);
	html += `<div class="col-1">HP: ${hp}</div>`;
	let ac = findNumbers(animal.attributes.ac);
	html += `<div class="col-1">AC: ${ac}</div>`;
	html += `<div class="col-1">Size: ${animal.attributes.size}</div>`;
	html += `<div class="col-3">Speed: ${animal.attributes.speed}</div>`;
	html += `<div class="col-1">STR: ${animal.attributes.str}</div>`;
	html += `<div class="col-1">DEX: ${animal.attributes.dex}</div>`;
	html += `<div class="col-1">CON: ${animal.attributes.con}</div>`;

	//Checks to make sure animal has specified values
	if (animal.attributes.vulnerabilities != undefined){
		let weakness = splitText(animal.attributes.vulnerabilities);
		html += `<div class="col-1">Weakness:<br>${weakness}</div>`;
	}
	if (animal.attributes.resistances != undefined){
		let resistance = splitText(animal.attributes.resistances);
		html += `<div class="col-1">Resistances:<br>${resistance}</div>`;
	}	
	if (animal.attributes.skills != undefined){
		let skills = splitText(animal.attributes.skills);
		html += `<div class="col-1">Skills:<br>${skills}</div>`;
	}

	//Goes through and adds each trait or action 
	html += '</div><div class="info center"><h4>Traits</h4>';
	for (let key in animal.traits){
		html += `<div><strong>${key}</strong>: ${animal.traits[key]}</div><br>`;
	}
	html += '</div><div class="info center"><h4>Actions</h4>';
	for (let key in animal.actions){
		let attack = returnAttack(animal.actions[key])
		html += `<div><strong>${key}</strong>: ${attack}</div><br>`;
	}

	//Checks if animal has a description or not
	html += '</div>';
	if (animal.description != ""){
		html += `<p class="description center">${animal.description}</p>`;	
	}
	html += '</div>';
	let cr = `#cr${findCR(animal.attributes["challenge rating"])}`
	$(cr).append(html);
});

for (let i = 2; i < 7; i++){
	let id = `#cr${i}`;
	$(id).hide();
}

$(".swimming").hide();
$(".flying").hide();

let lv = "lv2";

$("#level").change(event => {
	lv = event.currentTarget.value;

	if (lv == "lv2"){
		$(".swimming").hide();
		$(".flying").hide();
	}

	if (lv == "lv4" || lv == "lv6"){
		if ($("#boxes")[0][0].checked || $("#boxes")[0][2].checked){
			if ($("#boxes")[0][1].checked){
				$(".swimming").show();
			}
		}
		else $(".swimming").show();
		$(".flying").hide();
	}

	if (lv == "lv8" || lv == "lv9" || lv == "lv12" || lv == "lv15" || lv == "lv18"){
		if ($("#boxes")[0][0].checked || $("#boxes")[0][2].checked){
			if ($("#boxes")[0][1].checked){
				$(".swimming").show();
			}
		}
		else $(".swimming").show();

		if ($("#boxes")[0][0].checked || $("#boxes")[0][1].checked){
			if ($("#boxes")[0][2].checked){
				$(".flying").show();
			}
		}
		else $(".flying").show();
	}

	if (lv == "lv6" || lv == "lv8" || lv == "lv9" || lv == "lv12" || lv == "lv15" || lv == "lv18"){
		$("#cr2").show();
	}
	else $("#cr2").hide();

	if (lv == "lv9" || lv == "lv12" || lv == "lv15" || lv == "lv18"){
		$("#cr3").show();
	}
	else $("#cr3").hide();
	
	if (lv == "lv12" || lv == "lv15" || lv == "lv18"){
		$("#cr4").show();
	}
	else $("#cr4").hide();
	
	if (lv == "lv15" || lv == "lv18"){
		$("#cr5").show();
	}
	else $("#cr5").hide();
	
	if (lv == "lv18"){
		$("#cr6").show();
	}
	else $("#cr6").hide();
});

$("#boxes").change(event => {
	let x = 0;
	if (event.currentTarget[0].checked){
		x++;
		$(".ground").show();
	}
	else $(".ground").hide();


	if (event.currentTarget[1].checked){
		x++;
		if (lv != "lv2"){
			$(".swimming").show();
		}
	}
	else $(".swimming").hide();

	if (event.currentTarget[2].checked){
		x++;
		if (lv != "lv2" && lv != "lv4" && lv != "lv6"){
			$(".flying").show();
		}
	}
	else $(".flying").hide();
	
	if (x == 0){
		$(".ground").show();
		if (lv != "lv2"){
			$(".swimming").show();
		}
		if (lv != "lv2" && lv != "lv4" && lv != "lv6"){
			$(".flying").show();
		}
	}

});

$("#touch").on("click", ".animal", event =>{
	if (event.currentTarget.className.indexOf("expanded") == -1){
		event.currentTarget.className += "expanded";
	}
	else{
		let cName = event.currentTarget.className.slice(0, event.currentTarget.className.indexOf("expanded"));
		cName +=  event.currentTarget.className.slice(event.currentTarget.className.indexOf("expanded") + 8, event.currentTarget.className.length);
		event.currentTarget.className = cName;
	}
});

function findNumbers(text){
	let ret = "";
	while (text.indexOf("(") != 0 && text.length > 0){
		ret += text.charAt(0);
		text = text.slice(1);
	}
	return ret;
}

function splitText(text){
	let ret = "";
	while (text.length > 0){
		if (text.charAt(0) != ","){
			ret += text.charAt(0);
		}
		else {
			ret += "<br>";
			text = text.slice(1);
		}
		text = text.slice(1);
	}
	return ret;
}

function returnAttack(text){
	let ret = "";
	if (text.indexOf("Attack:") != -1){
		ret += text.slice(text.indexOf("Attack:"), text.indexOf("Hit:"));
		ret += "<br>";
		ret += text.slice(text.indexOf("Hit:"), text.indexOf("damage") + 7);
		ret += "<br>";
		ret += text.slice(text.indexOf("damage") + 7, text.length);
		return ret;
	}
	else return text;
}

function findCR(text){
	if (text == "1/8")
		return "18";
	else if (text == "1/4")
		return "14";
	else if (text == "1/2")
		return "12";
	else return text;
}