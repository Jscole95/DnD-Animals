let animals = {
	"air-elemental": {
		"type": "flying",
		"cr": 5,
		"hp": 90,
		"ac": 15,
		"speed": "90F",
		"str": 14,
		"dex": 20,
		"con": 14,
		"traits": {
			"Air Form": "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
		},
		"abilities":{
    		"Multiattack": "The elemental makes two slam attacks.",
    		"Slam": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: (2d8 + 5) bludgeoning damage.",
    		"Whirlwind (Recharge 4-6)": "Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes (3d8 + 2) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a Thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was Thrown. If the target is Thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone. If the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone."
		}
	},
	"allosaurus": {
		"type": "normal",
		"cr": 2,
		"hp": 51,
		"ac": 13,
		"speed": 60,
		"str": 19,
		"dex": 13,
		"con": 17,
		"traits": {
			"Pounce": "If the allosaurus moves at least 30 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the allosaurus can make one bite attack against it as a bonus action."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: (2d10 + 4) piercing damage.",
    		"Claw": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: (1d8 + 4) slashing damage."
		}
	},
	"ankylosaurus": {
		"type": "normal",
		"cr": 3,
		"hp": 68,
		"ac": 15,
		"speed": 30,
		"str": 19,
		"dex": 11,
		"con": 15,
		"traits": {},
		"abilities":{
    		"Tail": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: (4d6 + 4) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone."
		}
	},
	"axe-beak": {
		"type": "normal",
		"cr": 0,
		"hp": 19,
		"ac": 11,
		"speed": 50,
		"str": 14,
		"dex": 12,
		"con": 12,
		"traits": {},
		"abilities":{
			"Beak": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: (1d8 + 2) slashing damage."
		}
	},
	"baboon": {
		"type": "normal",
		"cr": 0,
		"hp": 3,
		"ac": 12,
		"speed": "30, 30C",
		"str": 8,
		"dex": 14,
		"con": 11,
		"traits": {
			"Pack Tactics": "The baboon has advantage on an Attack roll against a creature if at least one of the baboon's allies is within 5 ft. of the creature and the ally isn't Incapacitated."
		},
		"abilities":{
			"Bite": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target.	Hit: (1d4 - 1) piercing damage."
		}
	},	
	"badger": {
		"type": "normal",
		"cr": 0,
		"hp": 3,
		"ac": 10,
		"speed": 20,
		"str": 4,
		"dex": 11,
		"con": 12,
		"traits": {
			"Keen Smell": "The badger has advantage on Wisdom (Perception) checks that rely on smell."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 piercing damage."
		}
	},
	"bat": {
		"type": "flying",
		"cr": 0,
		"hp": 1,
		"ac": 12,
		"speed": "5, 30F",
		"str": 2,
		"dex": 15,
		"con": 8,
		"traits": {
			"Echolocation": "The bat can't use its blindsight while Deafened.",
			"Keen Hearing": "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 piercing damage."
		}
	},
	"blood-hawk": {
		"type": "flying",
		"cr": 0,
		"hp": 7,
		"ac": 12,
		"speed": "10, 60F",
		"str": 6,
		"dex": 14,
		"con": 10,
		"traits": {
			"Keen Sight": "The hawk has advantage on Wisdom (Perception) checks that rely on sight.",
			"Pack Tactics": "The hawk has advantage on an Attack roll against a creature if at least one of the hawk's allies is within 5 ft. of the creature and the ally isn't Incapacitated."
		},
		"abilities":{
    		"Beak": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: (1d4 + 2) piercing damage."
		}
	},
	"boar": {
		"type": "normal",
		"cr": 0,
		"hp": 11,
		"ac": 11,
		"speed": 40,
		"str": 13,
		"dex": 11,
		"con": 12,
		"traits": {
			"Charge": "If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk Attack on the same turn, the target takes an extra (1d6) slashing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
			"Relentless (Recharges after a Short or Long Rest)": "If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
		},
		"abilities":{
    		"Tusk": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: (1d6 + 1) slashing damage."
		}
	},
	"brown-bear": {
		"type": "normal",
		"cr": 1,
		"hp": 34,
		"ac": 11,
		"speed": "40, 30C",
		"str": 19,
		"dex": 10,
		"con": 16,
		"traits": {
			"Keen Smell": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
		},
		"abilities":{
    		"Multiattack": "The bear makes two attacks: one with its bite and one with its claws.",
    		"Bite": "Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (1d8 + 4) piercing damage.",
    		"Claws": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (2d6 + 4) slashing damage."
		}
	},
	"camel": {
		"type": "normal",
		"cr": 0,
		"hp": 15,
		"ac": 9,
		"speed": 50,
		"str": 16,
		"dex": 8,
		"con": 14,
		"traits": {},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (1d4) bludgeoning damage."
		}
	},
	"cat": {
		"type": "normal",
		"cr": 0,
		"hp": 2,
		"ac": 12,
		"speed": "40, 30C",
		"str": 3,
		"dex": 15,
		"con": 10,
		"traits": {
			"Keen Smell": "The cat has advantage on Wisdom (Perception) checks that rely on smell."
		},
		"abilities":{
    		"Claws": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing damage."
		}
	},
	"cave-bear": {
		"type": "swimming",
		"cr": 2,
		"hp": 42,
		"ac": 12,
		"speed": "40, 30S",
		"str": 20,
		"dex": 10,
		"con": 16,
		"traits": {
			"Keen Smell": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
		},
		"abilities":{
    		"Multiattack": "The bear makes two attacks: one with its bite and one with its claws.",
    		"Bite": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: (1d8 + 5) piercing damage.",
    		"Claws": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: (2d6 + 5) slashing damage."
		}
	},
	"constrictor-snake": {
		"type": "swimming",
		"cr": 0,
		"hp": 13,
		"ac": 12,
		"speed": "30, 30S",
		"str": 15,
		"dex": 14,
		"con": 12,
		"traits": {},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: (1d6 + 2) piercing damage.",
    		"Constrict": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: (1d8 + 2) bludgeoning damage, and the target is Grappled (escape DC 14). Until this grapple ends, the creature is Restrained, and the snake can't constrict another target."
		}
	},
	"crab": {
		"type": "swimming",
		"cr": 0,
		"hp": 2,
		"ac": 11,
		"speed": "20, 20S",
		"str": 2,
		"dex": 11,
		"con": 10,
		"traits": {
			"Amphibious": "The crab can breathe air and water."
		},
		"abilities":{
    		"Claw": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage."
		}
	},
	"crocodile": {
		"type": "swimming",
		"cr": 0,
		"hp": 19,
		"ac": 12,
		"speed": "20, 20S",
		"str": 15,
		"dex": 10,
		"con": 13,
		"traits": {
			"Hold Breath": "The crocodile can hold its breath for 15 minutes."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: (1d10 + 2) piercing damage, and the target is Grappled (escape DC 12). Until this grapple ends, the target is Restrained, and the crocodile can't bite another target"
		}
	},
	"deer": {
		"type": "normal",
		"cr": 0,
		"hp": 4,
		"ac": 13,
		"speed": 50,
		"str": 11,
		"dex": 16,
		"con": 11,
		"traits": {
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: (1d4) piercing damage."
		}
	},
	"dire-wolf": {
		"type": "normal",
		"cr": 1,
		"hp": 37,
		"ac": 14,
		"speed": 50,
		"str": 17,
		"dex": 15,
		"con": 15,
		"traits": {
			"Keen Hearing and Smell": "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
			"Pack Tactics": "The wolf has advantage on an Attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't Incapacitated."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
		}
	},
	"draft-horse": {
		"type": "normal",
		"cr": 0,
		"hp": 19,
		"ac": 10,
		"speed": 40,
		"str": 18,
		"dex": 10,
		"con": 12,
		"traits": {},
		"abilities":{
    		"Hooves": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: (2d4 + 4) bludgeoning damage."
		}
	},
	"eagle": {
		"type": "flying",
		"cr": 0,
		"hp": 3,
		"ac": 12,
		"speed": "10, 60F",
		"str": 6,
		"dex": 15,
		"con": 10,
		"traits": {
			"Keen Sight": "The eagle has advantage on Wisdom (Perception) checks that rely on sight."
		},
		"abilities":{
    		"Talons": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: (1d4 + 2) slashing damage."
		}
	},
	"earth-elemental": {
		"type": "normal",
		"cr": 5,
		"hp": 126,
		"ac": 17,
		"speed": 30,
		"str": 20,
		"dex": 8,
		"con": 20,
		"traits": {
			"Earth Glide": "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through.",
			"Siege Monster": "The elemental deals double damage to Objects and structures."
		},
		"abilities":{
    		"Multiattack": "The elemental makes two slam attacks.",
    		"Slam": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: (2d8 + 5) bludgeoning damage."
		}
	},
	"elephant": {
		"type": "normal",
		"cr": 4,
		"hp": 76,
		"ac": 12,
		"speed": 40,
		"str": 22,
		"dex": 9,
		"con": 17,
		"traits": {
			"Trampling Charge": "If the elephant moves at least 20 ft. straight toward a creature and then hits it with a gore Attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp Attack against it as a Bonus Action."
		},
		"abilities":{
    		"Gore": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: (3d8 + 6) piercing damage.",
    		"Stomp": "Melee Weapon Attack: +8 to hit, reach 5 ft., one prone creature. Hit: (3d10 + 6) bludgeoning damage."
		}
	},
	"elk": {
		"type": "normal",
		"cr": 0,
		"hp": 13,
		"ac": 10,
		"speed": 50,
		"str": 16,
		"dex": 10,
		"con": 12,
		"traits": {
			"Charge": "If the elk moves at least 20 ft. straight toward a target and then hits it with a ram Attack on the same turn, the target takes an extra (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
		},
		"abilities":{
    		"Ram": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (1d6 + 3) bludgeoning damage.",
    		"Hooves": "Melee Weapon Attack: +5 to hit, reach 5 ft., one prone creature. Hit: (2d4 + 3) bludgeoning damage."
		}
	},
	"fire-elemental": {
		"type": "normal",
		"cr": 5,
		"hp": 102,
		"ac": 13,
		"speed": 50,
		"str": 10,
		"dex": 17,
		"con": 16,
		"traits": {
			"Fire Form": "The elemental can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the elemental or hits it with a melee Attack while within 5 ft. of it takes (1d10) fire damage. In addition, the elemental can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes (1d10) fire damage and catches fire; until someone takes an action to douse the fire, the creature takes (1d10) fire damage at the start of each of its turns.",
			"Illumination": "The elemental sheds bright light in a 30-foot radius and dim light in an additional 30 feet.",
			"Water Susceptibility": "For every 5 ft. the elemental moves in water, or for every gallon of water splashed on it, it takes 1 cold damage."
		},
		"abilities":{
    		"Multiattack": "The elemental makes two touch attacks.",
    		"Touch": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: (2d6 + 3) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes (1d10) fire damage at the start of each of its turns."
		}
	},
	"flying-snake": {
		"type": "flying",
		"cr": 0,
		"hp": 5,
		"ac": 14,
		"speed": "30, 30S, 60F",
		"str": 4,
		"dex": 18,
		"con": 11,
		"traits": {
			"Flyby": "The snake doesn't provoke Opportunity Attacks when it flies out of an enemy's reach."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 1 piercing plus (3d4) poison damage."
		}
	},
	"frog": {
		"type": "swimming",
		"cr": 0,
		"hp": 1,
		"ac": 11,
		"speed": "20, 20S",
		"str": 1,
		"dex": 13,
		"con": 8,
		"traits": {
			"Amphibious": "The frog can breathe air and water",
			"Standing Leap": "The frog's long jump is up to 10 ft. and its high jump is up to 5 ft., with or without a running start."
		},
		"abilities":{}
	},
	"giant-badger": {
		"type": "normal",
		"cr": 0,
		"hp": 13,
		"ac": 10,
		"speed": 30,
		"str": 13,
		"dex": 10,
		"con": 15,
		"traits": {
			"Keen Smell": "The Badger has advantage on Wisdom (Perception) checks that rely on smell."
		},
		"abilities":{
    		"Multiattack": "The Badger makes two attacks: one with its bite and one with its claws.",
    		"Bite": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: (1d6 + 1) piercing damage.",
    		"Claws": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: (2d4 + 1) slashing damage."
		}
	},
	"giant-bat": {
		"type": "flying",
		"cr": 0,
		"hp": 22,
		"ac": 13,
		"speed": "10, 60F",
		"str": 15,
		"dex": 16,
		"con": 11,
		"traits": {
			"Echolocation": "The bat can't use its blindsight while Deafened.",
			"Keen Hearing": "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: (1d6 + 2) piercing damage."
		}
	},
	"giant-boar": {
		"type": "normal",
		"cr": 2,
		"hp": 42,
		"ac": 12,
		"speed": 40,
		"str": 17,
		"dex": 10,
		"con": 16,
		"traits": {
			"Charge": "If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk Attack on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
			"Relentless (Recharges after a Short or Long Rest)": "If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
		},
		"abilities":{
			"Tusk": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (2d6 + 3) slashing damage."
		}
	},
	"giant-centipede": {
		"type": "normal",
		"cr": 0,
		"hp": 4,
		"ac": 13,
		"speed": "30, 30C",
		"str": 5,
		"dex": 14,
		"con": 12,
		"traits": {},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or take (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but Poisoned for 1 hour, even after regaining hit points, and is Paralyzed while Poisoned in this way."
		}
	},
	"giant-constrictor-snake": {
		"type": "swimming",
		"cr": 2,
		"hp": 60,
		"ac": 12,
		"speed": "30, 30S",
		"str": 19,
		"dex": 14,
		"con": 12,
		"traits": {},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: (2d6 + 4) piercing damage.",
    		"Constrict": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: (2d8 + 4) bludgeoning damage, and the target is Grappled (escape DC 16). Until this grapple ends, the creature is Restrained, and the snake can't constrict another target."
		}
	},
	"giant-crab": {
		"type": "swimming",
		"cr": 0,
		"hp": 13,
		"ac": 15,
		"speed": "30, 30S",
		"str": 13,
		"dex": 15,
		"con": 11,
		"traits": {
			"Amphibious": "The crab can breathe air and water."
		},
		"abilities":{
    		"Claw": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: (1d6 + 1) bludgeoning damage, and the target is Grappled (escape DC 11). The crab has two claws, each of which can grapple only one target."
		}
	},
	"giant-crocodile": {
		"type": "swimming",
		"cr": 5,
		"hp": 85,
		"ac": 14,
		"speed": "30, 50S",
		"str": 21,
		"dex": 9,
		"con": 17,
		"traits": {
			"Hold Breath": "The Crocodile can hold its breath for 30 minutes."
		},
		"abilities":{
    		"Multiattack": "The Crocodile makes two attacks: one with its bite and one with its tail.",
    		"Bite": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: (3d10 + 5) piercing damage, and the target is Grappled (escape DC 16). Until this grapple ends, the target is Restrained, and the Crocodile can't bite another target.",
    		"Tail": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not Grappled by the Crocodile. Hit: (2d8 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone."
		}
	},
	"giant-eagle": {
		"type": "flying",
		"cr": 1,
		"hp": 26,
		"ac": 13,
		"speed": "10, 80F",
		"str": 16,
		"dex": 17,
		"con": 13,
		"traits": {
			"Keen Sight": "The eagle has advantage on Wisdom (Perception) checks that rely on sight."
		},
		"abilities":{
    		"Multiattack": "The eagle makes two attacks: one with its beak and one with its talons.",
    		"Beak": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (1d6 + 3) piercing damage.",
    		"Talons": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (2d6 + 3) slashing damage."
		}
	},
	"giant-elk": {
		"type": "normal",
		"cr": 2,
		"hp": 42,
		"ac": 14,
		"speed": 60,
		"str": 19,
		"dex": 16,
		"con": 14,
		"traits": {
			"Charge": "If the elk moves at least 20 ft. straight toward a target and then hits it with a ram Attack on the same turn, the target takes an extra (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone."
		},
		"abilities":{
    		"Ram": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: (2d6 + 4) bludgeoning damage.",
    		"Hooves": "Melee Weapon Attack: +6 to hit, reach 5 ft., one prone creature. Hit: (4d8 + 4) bludgeoning damage."
		}
	},
	"giant-fire-beetle": {
		"type": "normal",
		"cr": 0,
		"hp": 4,
		"ac": 13,
		"speed": 30,
		"str": 8,
		"dex": 10,
		"con": 12,
		"traits": {
			"Illumination": "The beetle sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: (1d6 - 1) slashing damage."
		}
	},
	"giant-frog": {
		"type": "swimming",
		"cr": 0,
		"hp": 18,
		"ac": 11,
		"speed": "30, 30S",
		"str": 12,
		"dex": 13,
		"con": 11,
		"traits": {
			"Amphibious": "The frog can breathe air and water",
			"Standing Leap": "The frog's long jump is up to 20 ft. and its high jump is up to 10 ft., with or without a running start."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: (1d6 + 1) piercing damage, and the target is Grappled (escape DC 11). Until this grapple ends, the target is Restrained, and the frog can't bite another target.",
    		"Swallow": "The frog makes one bite Attack against a Small or smaller target it is Grappling. If the Attack hits, the target is swallowed, and the grapple ends. The swallowed target is Blinded and Restrained, it has total cover against attacks and other effects outside the frog, and it takes (2d4) acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer Restrained by it and can escape from the corpse using 5 ft. of Movement, exiting prone."
		}
	},
	"giant-goat": {
		"type": "normal",
		"cr": 0,
		"hp": 19,
		"ac": 11,
		"speed": 40,
		"str": 17,
		"dex": 11,
		"con": 12,
		"traits": {
			"Charge": "If the goat moves at least 20 ft. straight toward a target and then hits it with a ram Attack on the same turn, the target takes an extra (2d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
			"Sure-Footed": "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
		},
		"abilities":{
    		"Ram": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (2d4 + 3) bludgeoning damage."
		}
	},
	"giant-hyena": {
		"type": "normal",
		"cr": 1,
		"hp": 45,
		"ac": 12,
		"speed": 50,
		"str": 16,
		"dex": 14,
		"con": 14,
		"traits": {
			"Rampage": "When the hyena reduces a creature to 0 hit points with a melee Attack on its turn, the hyena can take a Bonus Action to move up to half its speed and make a bite Attack."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (2d6 + 3) piercing damage."
		}
	},
	"giant-lizard": {
		"type": "normal",
		"cr": 0,
		"hp": 19,
		"ac": 12,
		"speed": "30, 30C",
		"str": 15,
		"dex": 12,
		"con": 13,
		"traits": {
			"Variant: Hold Breath": "The Lizard can hold its breath for 15 minutes. (A Lizard that has this trait also has a swimming speed of 30 feet.)",
			"Variant: Spider Climb": "The Lizard can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: (1d8 + 2) piercing damage."
		}
	},
	"giant-octopus": {
		"type": "swimming",
		"cr": 1,
		"hp": 52,
		"ac": 11,
		"speed": "10, 60S",
		"str": 17,
		"dex": 13,
		"con": 13,
		"traits": {
			"Hold Breath": "While out of water, the Octopus can hold its breath for 1 hour.",
			"Underwater Camouflage": "The Octopus has advantage on Dexterity (Stealth) checks made while Underwater.",
			"Water Breathing": "The Octopus can breathe only Underwater."
		},
		"abilities":{
    		"Tentacles": "Melee Weapon Attack: +5 to hit, reach 15 ft., one target. Hit: (2d6 + 3) bludgeoning damage. If the target is a creature, it is Grappled (escape DC 16). Until this grapple ends, the target is Restrained, and the Octopus can't use its tentacles on another target.",
    		"Ink Cloud (Recharges after a Short or Long Rest)": "A 20-foot-radius cloud of ink extends all around the Octopus if it is Underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the Octopus can use the Dash action as a Bonus Action."
		}
	},
	"giant-owl": {
		"type": "flying",
		"cr": 0,
		"hp": 19,
		"ac": 12,
		"speed": "5, 60F",
		"str": 13,
		"dex": 15,
		"con": 12,
		"traits": {
			"Flyby": "The owl doesn't provoke Opportunity Attacks when it flies out of an enemy's reach.",
			"Keen Hearing and Sight": "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight."
		},
		"abilities":{
    		"Talons": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: (2d6 + 1) slashing damage."
		}
	},
	"giant-poisonous-snake": {
		"type": "swimming",
		"cr": 0,
		"hp": 11,
		"ac": 14,
		"speed": "30, 30S",
		"str": 10,
		"dex": 18,
		"con": 13,
		"traits": {},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: (1d4 + 4) piercing damage, and the target must make a DC 11 Constitution saving throw, taking (3d6) poison damage on a failed save, or half as much damage on a successful one."
		}
	},
	"giant-rat": {
		"type": "normal",
		"cr": 0,
		"hp": 7,
		"ac": 12,
		"speed": 30,
		"str": 7,
		"dex": 15,
		"con": 11,
		"traits": {
			"Keen Smell": "The rat has advantage on Wisdom (Perception) checks that rely on smell.",
			"Pack Tactics": "The rat has advantage on an Attack roll against a creature if at least one of the rat's allies is within 5 ft. of the creature and the ally isn't Incapacitated."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: (1d4 + 2) piercing damage."
		}
	},
	"giant-scorpion": {
		"type": "normal",
		"cr": 3,
		"hp": 52,
		"ac": 15,
		"speed": 40,
		"str": 15,
		"dex": 13,
		"con": 15,
		"traits": {},
		"abilities":{
    		"Multiattack": "The Scorpion makes three attacks: two with its claws and one with its sting.",
    		"Claw": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: (1d8 + 2) bludgeoning damage, and the target is Grappled (escape DC 12). The Scorpion has two claws, each of which can grapple only one target.",
    		"Sting": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: (1d10 + 2) piercing damage, and the target must make a DC 12 Constitution saving throw, taking (4d10) poison damage on a failed save, or half as much damage on a successful one."
		}
	},
	"giant-sea-horse": {
		"type": "swimming",
		"cr": 0,
		"hp": 16,
		"ac": 13,
		"speed": "40S",
		"str": 12,
		"dex": 15,
		"con": 11,
		"traits": {
			"Charge": "If the Sea Horse moves at least 20 ft. straight toward a target and then hits it with a ram Attack on the same turn, the target takes an extra (2d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
			"Water Breathing": "The Sea Horse can breathe only Underwater."
		},
		"abilities":{
    		"Ram": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: (1d6 + 1) bludgeoning damage."
		}
	},
	"giant-shark": {
		"type": "swimming",
		"cr": 5,
		"hp": 126,
		"ac": 13,
		"speed": "50S",
		"str": 23,
		"dex": 11,
		"con": 21,
		"traits": {
			"Blood Frenzy": "The shark has advantage on melee Attack rolls against any creature that doesn't have all its hit points.",
			"Water Breathing": "The shark can breathe only Underwater."
		},
		"abilities":{
    		"Bite": "Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: (3d10 + 6) piercing damage."
		}
	},
	"giant-spider": {
		"type": "normal",
		"cr": 1,
		"hp": 26,
		"ac": 14,
		"speed": "30, 30C",
		"str": 14,
		"dex": 16,
		"con": 12,
		"traits": {
			"Spider Climb": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
			"Web Sense": "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.",
			"Web Walker": "The spider ignores Movement restrictions caused by webbing."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: (1d8 + 3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but Poisoned for 1 hour, even after regaining hit points, and is Paralyzed while Poisoned in this way.",
    		"Web (Recharge 5-6)": "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit: The target is Restrained by webbing. As an action, the Restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)."
		}
	},
	"giant-toad": {
		"type": "swimming",
		"cr": 1,
		"hp": 39,
		"ac": 11,
		"speed": "20, 40S",
		"str": 15,
		"dex": 13,
		"con": 13,
		"traits": {
			"Amphibious": "The toad can breathe air and water",
			"Standing Leap": "The toad's long jump is up to 20 ft. and its high jump is up to 10 ft., with or without a running start."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: (1d10 + 2) piercing damage plus (1d10) poison damage, and the target is Grappled (escape DC 13). Until this grapple ends, the target is Restrained, and the toad can't bite another target.",
    		"Swallow": "The toad makes one bite Attack against a Medium or smaller target it is Grappling. If the Attack hits, the target is swallowed, and the grapple ends. The swallowed target is Blinded and Restrained, it has total cover against attacks and other effects outside the toad, and it takes (3d6) acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time. If the toad dies, a swallowed creature is no longer Restrained by it and can escape from the corpse using 5 feet of Movement, exiting prone."
		}
	},
	"giant-vulture": {
		"type": "flying",
		"cr": 1,
		"hp": 22,
		"ac": 10,
		"speed": "10, 60F",
		"str": 15,
		"dex": 10,
		"con": 15,
		"traits": {
			"Keen Sight and Smell": "The Vulture has advantage on Wisdom (Perception) checks that rely on sight or smell.",
			"Pack Tactics": "The Vulture has advantage on an Attack roll against a creature if at least one of the vulture's allies is within 5 ft. of the creature and the ally isn't Incapacitated."
		},
		"abilities":{
    		"Multiattack": "The Vulture makes two attacks: one with its beak and one with its talons.",
    		"Beak": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: (2d4 + 2) piercing damage.",
    		"Talons": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: (2d6 + 2) slashing damage."
		}
	},
	"giant-wasp": {
		"type": "flying",
		"cr": 0,
		"hp": 13,
		"ac": 12,
		"speed": "10, 50S, 50F",
		"str": 10,
		"dex": 14,
		"con": 10,
		"traits": {},
		"abilities":{
    		"Sting": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: (1d6 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but Poisoned for 1 hour, even after regaining hit points, and is Paralyzed while Poisoned in this way."
		}
	},
	"giant-weasel": {
		"type": "normal",
		"cr": 0,
		"hp": 9,
		"ac": 13,
		"speed": 40,
		"str": 11,
		"dex": 16,
		"con": 10,
		"traits": {
			"Keen Hearing and Smell": "The Weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
		},
		"abilities":{
    		"Bite": "Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (1d4 + 3) piercing damage."
		}
	},
	"giant-wolf-spider": {
		"type": "normal",
		"cr": 0,
		"hp": 11,
		"ac": 13,
		"speed": "40, 40C",
		"str": 12,
		"dex": 16,
		"con": 13,
		"traits": {
			"Spider Climb": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
			"Web Sense": "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.",
			"Web Walker": "The spider ignores Movement restrictions caused by webbing."
		},
		"abilities":{
    		"Bite": "Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: (1d6 + 1) piercing damage, and the target must make a DC 11 Constitution saving throw, taking (2d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but Poisoned for 1 hour, even after regaining hit points, and is Paralyzed while Poisoned in this way."
		}
	},
	"goat": {
		"type": "normal",
		"cr": 0,
		"hp": 4,
		"ac": 10,
		"speed": 40,
		"str": 12,
		"dex": 10,
		"con": 11,
		"traits": {
			"Charge": "If the goat moves at least 20 ft. straight toward a target and then hits it with a ram Attack on the same turn, the target takes an extra (1d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked prone.",
			"Sure-Footed": "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
		},
		"abilities":{
    		"Ram": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: (1d4 + 1) bludgeoning damage."
		}
	},
	"hawk": {
		"type": "flying",
		"cr": 0,
		"hp": 1,
		"ac": 13,
		"speed": "10, 60F",
		"str": 5,
		"dex": 16,
		"con": 8,
		"traits": {
			"Keen Sight": "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
		},
		"abilities":{
    		"Talons": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 slashing damage."
		}
	},
	"hunter-shark": {
		"type": "swimming",
		"cr": 2,
		"hp": 45,
		"ac": 12,
		"speed": "40S",
		"str": 18,
		"dex": 13,
		"con": 15,
		"traits": {
			"Blood Frenzy": "The shark has advantage on melee Attack rolls against any creature that doesn't have all its hit points.",
			"Water Breathing": "The shark can breathe only Underwater."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: (2d8 + 4) piercing damage."
		}
	},
	"hyena": {
		"type": "normal",
		"cr": 0,
		"hp": 5,
		"ac": 11,
		"speed": 50,
		"str": 11,
		"dex": 13,
		"con": 12,
		"traits": {
			"Pack Tactics": "The hyena has advantage on an Attack roll against a creature if at least one of the hyena's allies is within 5 ft. of the creature and the ally isn't Incapacitated."
		},
		"abilities":{
    		"Bite": "Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: (1d6) piercing damage."
		}
	},
	"jackal": {
		"type": "normal",
		"cr": 0,
		"hp": 3,
		"ac": 12,
		"speed": 40,
		"str": 8,
		"dex": 15,
		"con": 11,
		"traits": {
			"Keen Hearing and Smell": "The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
			"Pack Tactics": "The jackal has advantage on an Attack roll against a creature if at least one of the jackal's allies is within 5 ft. of the creature and the ally isn't Incapacitated."
		},
		"abilities":{
			"Bite": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: (1d4 - 1) piercing damage."
		}
	},
	"killer-whale": {
		"type": "swimming",
		"cr": 3,
		"hp": 90,
		"ac": 12,
		"speed": "60S",
		"str": 19,
		"dex": 10,
		"con": 13,
		"traits": {
			"Echolocation": "The whale can't use its blindsight while Deafened.",
			"Hold Breath": "The whale can hold its breath for 30 minutes",
			"Keen Hearing": "The whale has advantage on Wisdom (Perception) checks that rely on hearing."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: (5d6 + 4) piercing damage."
		}
	},
	"lion": {
		"type": "normal",
		"cr": 1,
		"hp": 26,
		"ac": 12,
		"speed": 50,
		"str": 17,
		"dex": 15,
		"con": 13,
		"traits": {
			"Keen Smell": "The lion has advantage on Wisdom (Perception) checks that rely on smell.",
			"Pack Tactics": "The lion has advantage on an Attack roll against a creature if at least one of the lion's allies is within 5 ft. of the creature and the ally isn't Incapacitated.",
			"Running Leap": "With a 10-foot running start, the lion can long jump up to 25 feet.",
			"Pounce": "If the lion moves at least 20 ft. straight toward a creature and then hits it with a claw Attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the lion can make one bite Attack against it as a Bonus Action."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (1d8 + 3) piercing damage.",
    		"Claw": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (1d6 + 3) slashing damage."
		}
	},
	"lizard": {
		"type": "normal",
		"cr": 0,
		"hp": 2,
		"ac": 10,
		"speed": "20, 20C",
		"str": 2,
		"dex": 11,
		"con": 10,
		"traits": {
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage."
		}
	},
	"mammoth": {
		"type": "normal",
		"cr": 6,
		"hp": 126,
		"ac": 13,
		"speed": 40,
		"str": 24,
		"dex": 9,
		"con": 21,
		"traits": {
			"Trampling Charge": "If the mammoth moves at least 20 ft. straight toward a creature and then hits it with a gore Attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp Attack against it as a Bonus Action."
		},
		"abilities":{
    		"Gore": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: (4d8 + 7) piercing damage.",
    		"Stomp": "Melee Weapon Attack: +10 to hit, reach 5 ft., one prone creature. Hit: (4d10 + 7) bludgeoning damage."
		}
	},
	"mastiff": {
		"type": "normal",
		"cr": 0,
		"hp": 5,
		"ac": 12,
		"speed": 40,
		"str": 13,
		"dex": 14,
		"con": 12,
		"traits": {
			"Keen Hearing and Smell": "The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: (1d6 + 1) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."
		}
	},
	"mule": {
		"type": "normal",
		"cr": 0,
		"hp": 11,
		"ac": 10,
		"speed": 40,
		"str": 14,
		"dex": 10,
		"con": 13,
		"traits": {
			"Beast of Burden": "The mule is considered to be a Large animal for the purpose of determining its carrying capacity.",
			"Sure-Footed": "The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
		},
		"abilities":{
    		"Hooves": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: (1d4 + 2) bludgeoning damage."
		}
	},
	"octopus": {
		"type": "swimming",
		"cr": 0,
		"hp": 3,
		"ac": 12,
		"speed": "5, 30S",
		"str": 4,
		"dex": 15,
		"con": 11,
		"traits": {
			"Hold Breath": "While out of water, the octopus can hold its breath for 30 minutes.",
			"Underwater Camouflage": "The octopus has advantage on Dexterity (Stealth) checks made while Underwater.",
			"Water Breathing": "The octopus can breathe only Underwater."
		},
		"abilities":{
    		"Tentacles": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage, and the target is Grappled (escape DC 10). Until this grapple ends, the octopus can't use its tentacles on another target.",
			"Ink Cloud (Recharges after a Short or Long Rest)": "A 5-foot-radius cloud of ink extends all around the octopus if it is Underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a Bonus Action."
		}
	},
	"owl": {
		"type": "flying",
		"cr": 0,
		"hp": 1,
		"ac": 11,
		"speed": "5, 60F",
		"str": 3,
		"dex": 13,
		"con": 8,
		"traits": {
			"Flyby": "The owl doesn't provoke Opportunity Attacks when it flies out of an enemy's reach.",
			"Keen Hearing and Sight": "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight."
		},
		"abilities":{
    		"Talons": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 1 slashing damage."
		}
	},
	"panther": {
		"type": "normal",
		"cr": 0,
		"hp": 13,
		"ac": 12,
		"speed": "50, 40C",
		"str": 14,
		"dex": 15,
		"con": 10,
		"traits": {
			"Keen Smell": "The panther has advantage on Wisdom (Perception) checks that rely on smell.",
			"Pounce": "If the panther moves at least 20 ft. straight toward a creature and then hits it with a claw Attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite Attack against it as a Bonus Action."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: (1d6 + 2) piercing damage.",
    		"Claw": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: (1d4 + 2) slashing damage."
		}
	},
	"Plesiosaurus": {
		"type": "swimming",
		"cr": 2,
		"hp": 68,
		"ac": 13,
		"speed": "20, 40S",
		"str": 18,
		"dex": 15,
		"con": 16,
		"traits": {
			"Hold Breath": "The plesiosaurus can hold its breath for 1 hour."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: (3d6 + 4) piercing damage."
		}
	},
	"polar-bear": {
		"type": "swimming",
		"cr": 2,
		"hp": 45,
		"ac": 12,
		"speed": "40, 30S",
		"str": 20,
		"dex": 10,
		"con": 16,
		"traits": {
			"Keen Smell": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
		},
		"abilities":{
    		"Multiattack": "The bear makes two attacks: one with its bite and one with its claws.",
    		"Bite": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: (1d8 + 5) piercing damage.",
    		"Claws": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: (2d6 + 5) slashing damage."
		}
	},
	"poisonous-snake": {
		"type": "swimming",
		"cr": 0,
		"hp": 2,
		"ac": 13,
		"speed": "30, 30S",
		"str": 2,
		"dex": 16,
		"con": 11,
		"traits": {},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage, and the target must make a DC 10 Constitution saving throw, taking (2d4) poison damage on a failed save, or half as much damage on a successful one."
		}
	},
	"pony": {
		"type": "normal",
		"cr": 0,
		"hp": 11,
		"ac": 10,
		"speed": 40,
		"str": 15,
		"dex": 10,
		"con": 13,
		"traits": {},
		"abilities":{
    		"Hooves": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: (2d4 + 2) bludgeoning damage."
		}
	},
	"pteranodon": {
		"type": "flying",
		"cr": 0,
		"hp": 13,
		"ac": 13,
		"speed": "10, 60F",
		"str": 12,
		"dex": 15,
		"con": 10,
		"traits": {
			"Flyby": "The pteranodon doesn't provoke an opportunity attack when it flies out of an enemy's reach."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: (2d4 + 1) piercing damage."
		}
	},
	"quipper": {
		"type": "swimming",
		"cr": 0,
		"hp": 1,
		"ac": 13,
		"speed": "40S",
		"str": 2,
		"dex": 16,
		"con": 9,
		"traits": {
			"Blood Frenzy": "The quipper has advantage on melee Attack rolls against any creature that doesn't have all its hit points.",
			"Water Breathing": "The quipper can breathe only Underwater."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage."
		}
	},
	"rat": {
		"type": "normal",
		"cr": 0,
		"hp": 1,
		"ac": 10,
		"speed": 20,
		"str": 2,
		"dex": 11,
		"con": 9,
		"traits": {
			"Keen Smell": "The rat has advantage on Wisdom (Perception) checks that rely on smell."
		},
		"abilities":{
    		"bite": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage."
		}
	},
	"raven": {
		"type": "flying",
		"cr": 0,
		"hp": 1,
		"ac": 12,
		"speed": "10, 50F",
		"str": 2,
		"dex": 14,
		"con": 8,
		"traits": {
			"Mimicry": "The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check."
		},
		"abilities":{
    		"Beak": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing damage."
		}
	},
	"reef-shark": {
		"type": "swimming",
		"cr": 0,
		"hp": 22,
		"ac": 12,
		"speed": "40S",
		"str": 14,
		"dex": 13,
		"con": 13,
		"traits": {
			"Pack Tactics": "The shark has advantage on an Attack roll against a creature if at least one of the shark's allies is within 5 ft. of the creature and the ally isn't Incapacitated.",
			"Water Breathing": "The shark can breathe only Underwater."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: (1d8 + 2) piercing damage."
		}
	},
	"rhinoceros": {
		"type": "normal",
		"cr": 2,
		"hp": 45,
		"ac": 11,
		"speed": 40,
		"str": 21,
		"dex": 8,
		"con": 15,
		"traits": {
			"Charge": "If the rhinoceros moves at least 20 ft. straight toward a target and then hits it with a gore Attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
		},
		"abilities":{
    		"Gore": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: (2d8 + 5) bludgeoning damage."
		}
	},
	"riding-horse": {
		"type": "normal",
		"cr": 0,
		"hp": 13,
		"ac": 10,
		"speed": 60,
		"str": 16,
		"dex": 10,
		"con": 12,
		"traits": {},
		"abilities":{
    		"Hooves": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (2d4 + 3) bludgeoning damage."
		}
	},
	"saber-toothed-tiger": {
		"type": "normal",
		"cr": 2,
		"hp": 52,
		"ac": 12,
		"speed": 40,
		"str": 18,
		"dex": 14,
		"con": 15,
		"traits": {
			"Keen Smell": "The tiger has advantage on Wisdom (Perception) checks that rely on smell.",
			"Pounce": "If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw Attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite Attack against it as a Bonus Action."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: (1d10 + 5) piercing damage.",
    		"Claw": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: (2d6 + 5) slashing damage."
		}
	},
	"scorpion": {
		"type": "normal",
		"cr": 0,
		"hp": 1,
		"ac": 11,
		"speed": 10,
		"str": 2,
		"dex": 11,
		"con": 8,
		"traits": {
		},
		"abilities":{
    		"Sting": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must make a DC 9 Constitution saving throw, taking (1d8) poison damage on a failed save, or half as much damage on a successful one."
		}
	},
	"sea-horse": {
		"type": "swimming",
		"cr": 0,
		"hp": 1,
		"ac": 11,
		"speed": "20S",
		"str": 1,
		"dex": 12,
		"con": 8,
		"traits": {
			"Water Breathing": "The sea horse can breathe only Underwater."
		},
		"abilities":{}
	},
	"spider": {
		"type": "normal",
		"cr": 0,
		"hp": 1,
		"ac": 12,
		"speed": "20, 20C",
		"str": 2,
		"dex": 14,
		"con": 8,
		"traits": {
			"Spider Climb": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
			"Web Sense": "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.",
			"Web Walker": "The spider ignores Movement restrictions caused by webbing."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 9 Constitution saving throw or take (1d4) poison damage."
		}
	},
	"stirge": {
		"type": "flying",
		"cr": 0,
		"hp": 2,
		"ac": 14,
		"speed": "10, 40F",
		"str": 4,
		"dex": 16,
		"con": 11,
		"traits": {},
		"abilities":{
    		"Blood Drain": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: (1d4 + 3) piercing damage, and the stirge attaches to the target. While attached, the stirge doesn't Attack. Instead, at the start of each of the stirge's turns, the target loses (1d4 + 3) hit points due to blood loss. The stirge can detach itself by spending 5 feet of its Movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge."
		}
	},
	"tiger": {
		"type": "normal",
		"cr": 1,
		"hp": 37,
		"ac": 12,
		"speed": 40,
		"str": 17,
		"dex": 15,
		"con": 14,
		"traits": {
			"Keen Smell": "The tiger has advantage on Wisdom (Perception) checks that rely on smell.",
			"Pounce": "If the tiger moves at least 20 ft. straight toward a creature and then hits it with a claw Attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite Attack against it as a Bonus Action."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (1d10 + 3) piercing damage.",
    		"Claw": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (1d8 + 3) slashing damage."
		}
	},
	"triceratops": {
		"type": "normal",
		"cr": 5,
		"hp": 95,
		"ac": 13,
		"speed": 50,
		"str": 22,
		"dex": 9,
		"con": 17,
		"traits": {
			"Trampling Charge": "If the triceratops moves at least 20 ft. straight toward a creature and then hits it with a gore Attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the triceratops can make one stomp Attack against it as a Bonus Action."
		},
		"abilities":{
    		"Gore": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: (4d8 + 6) piercing damage.",
    		"Stomp": "Melee Weapon Attack: +9 to hit, reach 5 ft., one prone creature. Hit: (3d10 + 6) bludgeoning damage"
		}
	},
	"vulture": {
		"type": "flying",
		"cr": 0,
		"hp": 5,
		"ac": 10,
		"speed": "10, 50F",
		"str": 7,
		"dex": 10,
		"con": 13,
		"traits": {
			"Keen Sight and Smell": "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell.",
			"Pack Tactics": "The vulture has advantage on an Attack roll against a creature if at least one of the vulture's allies is within 5 ft. of the creature and the ally isn't Incapacitated."
		},
		"abilities":{
    		"Beak": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: (1d4) piercing damage."
		}
	},
	"warhorse": {
		"type": "normal",
		"cr": 0,
		"hp": 19,
		"ac": 11,
		"speed": 60,
		"str": 18,
		"dex": 12,
		"con": 13,
		"traits": {
			"Trampling Charge": "If the horse moves at least 20 ft. straight toward a creature and then hits it with a hooves Attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another Attack with its hooves against it as a Bonus Action."
		},
		"abilities":{
			"Hooves": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: (2d6 + 4) bludgeoning damage."
		}
	},
	"water-elemental": {
		"type": "swimming",
		"cr": 5,
		"hp": 114,
		"ac": 14,
		"speed": "30, 90S",
		"str": 18,
		"dex": 14,
		"con": 18,
		"traits": {
			"Water Form": "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.",
			"Freeze": "If the elemental takes cold damage, it partially freezes; its speed is reduced by 20 ft. until the end of its next turn."
		},
		"abilities":{
    		"Multiattack": "The elemental makes two slam attacks.",
    		"Slam": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: (d8 + 4) bludgeoning damage.",
    		"Whelm (Recharge 4-6)": "Each creature in the elemental's space must make a DC 15 Strength saving throw. On a failure, a target takes (2d8 + 4) bludgeoning damage. If it is Large or smaller, it is also Grappled (escape DC 14). Until this grapple ends, the target is Restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space. The elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental's turns, each target Grappled by it takes (2d8 + 4) bludgeoning damage. A creature within 5 feet of the elemental can pull a creature or object out of it by taking an action to make a DC 14 Strength and succeeding."
		}
	},
	"weasel": {
		"type": "normal",
		"cr": 0,
		"hp": 1,
		"ac": 13,
		"speed": 30,
		"str": 3,
		"dex": 16,
		"con": 8,
		"traits": {
			"Keen Hearing and Smell": "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 1 piercing damage."
		}
	},
	"wolf": {
		"type": "normal",
		"cr": 0,
		"hp": 11,
		"ac": 13,
		"speed": 40,
		"str": 12,
		"dex": 15,
		"con": 12,
		"traits": {
			"Keen Hearing and Smell": "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
			"Pack Tactics": "The wolf has advantage on an Attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't Incapacitated."
		},
		"abilities":{
    		"Bite": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: (2d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."
		}
	},
}