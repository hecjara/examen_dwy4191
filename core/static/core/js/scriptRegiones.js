//SCRIPT PARA QUE CARGUE EL SELECT DE LA COMUNA DEPENDIENDO DE LA REGION SELECCIONADA
//EL ID DE REGION Y EL ID DE LA COMUNA EN EL SCRIPT SON Y DEBEN SER LOS MISMOS QUE ESTAN EN LA BASE DE DATOS
var RegionesYcomunas = {

	"regiones": [{
		"id_region": 1,
		"NombreRegion": "Región de Arica y Parinacota",
		"comunas": [
			{
				"id_comuna": 1,
				"nombre": "Arica",
				"region": 1
			},
			{
				"id_comuna": 2,
				"nombre": "Camarones",
				"region": 1
			},
			{
				"id_comuna": 3,
				"nombre": "Putre",
				"region": 1
			},
			{
				"id_comuna": 4,
				"nombre": "General Lagos",
				"region": 1
			}
		]
	},
	{
		"id_region": 2,
		"NombreRegion": "Región de Tarapacá",
		"comunas": [
			{
				"id_comuna": 5,
				"nombre": "Iquique",
				"region": 2
			},
			{
				"id_comuna": 6,
				"nombre": "Alto Hospicio",
				"region": 2
			},
			{
				"id_comuna": 7,
				"nombre": "Pozo Almonte",
				"region": 2
			},
			{
				"id_comuna": 8,
				"nombre": "Camiña",
				"region": 2
			},
			{
				"id_comuna": 9,
				"nombre": "Colchane",
				"region": 2
			},
			{
				"id_comuna": 10,
				"nombre": "Huara",
				"region": 2
			},
			{
				"id_comuna": 11,
				"nombre": "Pica",
				"region": 2
			}
		]
	},
	{
		"id_region": 3,
		"NombreRegion": "Región de Antofagasta",
		"comunas": [
			{
				"id_comuna": 12,
				"nombre": "Antofagasta",
				"region": 3
			},
			{
				"id_comuna": 13,
				"nombre": "Mejillones",
				"region": 3
			},
			{
				"id_comuna": 14,
				"nombre": "Sierra Gorda",
				"region": 3
			},
			{
				"id_comuna": 15,
				"nombre": "Taltal",
				"region": 3
			},
			{
				"id_comuna": 16,
				"nombre": "Calama",
				"region": 3
			},
			{
				"id_comuna": 17,
				"nombre": "Ollagüe",
				"region": 3
			},
			{
				"id_comuna": 18,
				"nombre": "San Pedro de Atacama",
				"region": 3
			},
			{
				"id_comuna": 19,
				"nombre": "Tocopilla",
				"region": 3
			},
			{
				"id_comuna": 20,
				"nombre": "María Elena",
				"region": 3
			}
		]
	},
	{
		"id_region": 4,
		"NombreRegion": "Región de Atacama",
		"comunas": [
			{
				"id_comuna": 21,
				"nombre": "Copiapó",
				"region": 4
			},
			{
				"id_comuna": 22,
				"nombre": "Caldera",
				"region": 4
			},
			{
				"id_comuna": 23,
				"nombre": "Tierra Amarilla",
				"region": 4
			},
			{
				"id_comuna": 24,
				"nombre": "Chañaral",
				"region": 4
			},
			{
				"id_comuna": 25,
				"nombre": "Diego de Almagro",
				"region": 4
			},
			{
				"id_comuna": 26,
				"nombre": "Vallenar",
				"region": 4
			},
			{
				"id_comuna": 27,
				"nombre": "Alto del Carmen",
				"region": 4
			},
			{
				"id_comuna": 28,
				"nombre": "Freirina",
				"region": 4
			},
			{
				"id_comuna": 29,
				"nombre": "Huasco",
				"region": 4
			}
		]
	},
	{
		"id_region": 5,
		"NombreRegion": "Región de Coquimbo",
		"comunas": [
			{
				"id_comuna": 30,
				"nombre": "La Serena",
				"region": 5
			},
			{
				"id_comuna": 31,
				"nombre": "Coquimbo",
				"region": 5
			},
			{
				"id_comuna": 32,
				"nombre": "Andacollo",
				"region": 5
			},
			{
				"id_comuna": 33,
				"nombre": "La Higuera",
				"region": 5
			},
			{
				"id_comuna": 34,
				"nombre": "Paiguano",
				"region": 5
			},
			{
				"id_comuna": 35,
				"nombre": "Vicuña",
				"region": 5
			},
			{
				"id_comuna": 36,
				"nombre": "Illapel",
				"region": 5
			},
			{
				"id_comuna": 37,
				"nombre": "Canela",
				"region": 5
			},
			{
				"id_comuna": 38,
				"nombre": "Los Vilos",
				"region": 5
			},
			{
				"id_comuna": 39,
				"nombre": "Salamanca",
				"region": 5
			},
			{
				"id_comuna": 40,
				"nombre": "Ovalle",
				"region": 5
			},
			{
				"id_comuna": 41,
				"nombre": "Combarbalá",
				"region": 5
			},
			{
				"id_comuna": 42,
				"nombre": "Monte Patria",
				"region": 5
			},
			{
				"id_comuna": 43,
				"nombre": "Punitaqui",
				"region": 5
			},
			{
				"id_comuna": 44,
				"nombre": "Río Hurtado",
				"region": 5
			}
		]
	},
	{
		"id_region": 6,
		"NombreRegion": "Región de Valparaíso",
		"comunas": [
			{
				"id_comuna": 45,
				"nombre": "Valparaíso",
				"region": 6
			},
			{
				"id_comuna": 46,
				"nombre": "Casablanca",
				"region": 6
			},
			{
				"id_comuna": 47,
				"nombre": "Concón",
				"region": 6
			},
			{
				"id_comuna": 48,
				"nombre": "Juan Fernández",
				"region": 6
			},
			{
				"id_comuna": 49,
				"nombre": "Puchuncaví",
				"region": 6
			},
			{
				"id_comuna": 50,
				"nombre": "Quintero",
				"region": 6
			},
			{
				"id_comuna": 51,
				"nombre": "Viña del Mar",
				"region": 6
			},
			{
				"id_comuna": 52,
				"nombre": "Isla de Pascua",
				"region": 6
			},
			{
				"id_comuna": 53,
				"nombre": "Los Andes",
				"region": 6
			},
			{
				"id_comuna": 54,
				"nombre": "Calle Larga",
				"region": 6
			},
			{
				"id_comuna": 55,
				"nombre": "Rinconada",
				"region": 6
			},
			{
				"id_comuna": 56,
				"nombre": "San Esteban",
				"region": 6
			},
			{
				"id_comuna": 57,
				"nombre": "La Ligua",
				"region": 6
			},
			{
				"id_comuna": 58,
				"nombre": "Cabildo",
				"region": 6
			},
			{
				"id_comuna": 59,
				"nombre": "Papudo",
				"region": 6
			},
			{
				"id_comuna": 60,
				"nombre": "Petorca",
				"region": 6
			},
			{
				"id_comuna": 61,
				"nombre": "Zapallar",
				"region": 6
			},
			{
				"id_comuna": 62,
				"nombre": "Quillota",
				"region": 6
			},
			{
				"id_comuna": 63,
				"nombre": "Calera",
				"region": 6
			},
			{
				"id_comuna": 64,
				"nombre": "Hijuelas",
				"region": 6
			},
			{
				"id_comuna": 65,
				"nombre": "La Cruz",
				"region": 6
			},
			{
				"id_comuna": 66,
				"nombre": "Nogales",
				"region": 6
			},
			{
				"id_comuna": 67,
				"nombre": "San Antonio",
				"region": 6
			},
			{
				"id_comuna": 68,
				"nombre": "Algarrobo",
				"region": 6
			},
			{
				"id_comuna": 69,
				"nombre": "Cartagena",
				"region": 6
			},
			{
				"id_comuna": 70,
				"nombre": "El Quisco",
				"region": 6
			},
			{
				"id_comuna": 71,
				"nombre": "El Tabo",
				"region": 6
			},
			{
				"id_comuna": 72,
				"nombre": "Santo Domingo",
				"region": 6
			},
			{
				"id_comuna": 73,
				"nombre": "San Felipe",
				"region": 6
			},
			{
				"id_comuna": 74,
				"nombre": "Catemu",
				"region": 6
			},
			{
				"id_comuna": 75,
				"nombre": "Llaillay",
				"region": 6
			},
			{
				"id_comuna": 76,
				"nombre": "Panquehue",
				"region": 6
			},
			{
				"id_comuna": 77,
				"nombre": "Putaendo",
				"region": 6
			},
			{
				"id_comuna": 78,
				"nombre": "Santa María",
				"region": 6
			},
			{
				"id_comuna": 79,
				"nombre": "Quilpué",
				"region": 6
			},
			{
				"id_comuna": 80,
				"nombre": "Limache",
				"region": 6
			},
			{
				"id_comuna": 81,
				"nombre": "Olmué",
				"region": 6
			},
			{
				"id_comuna": 82,
				"nombre": "Villa Alemana",
				"region": 6
			}
		]
	},
	{
		"id_region": 7,
		"NombreRegion": "Región Metropolitana de Santiago",
		"comunas": [
			{
				"id_comuna": 83,
				"nombre": "Cerrillos",
				"region": 7
			},
			{
				"id_comuna": 84,
				"nombre": "Cerro Navia",
				"region": 7
			},
			{
				"id_comuna": 85,
				"nombre": "Conchalí",
				"region": 7
			},
			{
				"id_comuna": 86,
				"nombre": "El Bosque",
				"region": 7
			},
			{
				"id_comuna": 87,
				"nombre": "Estación Central",
				"region": 7
			},
			{
				"id_comuna": 88,
				"nombre": "Huechuraba",
				"region": 7
			},
			{
				"id_comuna": 89,
				"nombre": "Independencia",
				"region": 7
			},
			{
				"id_comuna": 90,
				"nombre": "La Cisterna",
				"region": 7
			},
			{
				"id_comuna": 91,
				"nombre": "La Florida",
				"region": 7
			},
			{
				"id_comuna": 92,
				"nombre": "La Granja",
				"region": 7
			},
			{
				"id_comuna": 93,
				"nombre": "La Pintana",
				"region": 7
			},
			{
				"id_comuna": 94,
				"nombre": "La Reina",
				"region": 7
			},
			{
				"id_comuna": 95,
				"nombre": "Las Condes",
				"region": 7
			},
			{
				"id_comuna": 96,
				"nombre": "Lo Barnechea",
				"region": 7
			},
			{
				"id_comuna": 97,
				"nombre": "Lo Espejo",
				"region": 7
			},
			{
				"id_comuna": 98,
				"nombre": "Lo Prado",
				"region": 7
			},
			{
				"id_comuna": 99,
				"nombre": "Macul",
				"region": 7
			},
			{
				"id_comuna": 100,
				"nombre": "Maipú",
				"region": 7
			},
			{
				"id_comuna": 101,
				"nombre": "Ñuñoa",
				"region": 7
			},
			{
				"id_comuna": 102,
				"nombre": "Pedro Aguirre Cerda",
				"region": 7
			},
			{
				"id_comuna": 103,
				"nombre": "Peñalolén",
				"region": 7
			},
			{
				"id_comuna": 104,
				"nombre": "Providencia",
				"region": 7
			},
			{
				"id_comuna": 105,
				"nombre": "Pudahuel",
				"region": 7
			},
			{
				"id_comuna": 106,
				"nombre": "Quilicura",
				"region": 7
			},
			{
				"id_comuna": 107,
				"nombre": "Quinta Normal",
				"region": 7
			},
			{
				"id_comuna": 108,
				"nombre": "Recoleta",
				"region": 7
			},
			{
				"id_comuna": 109,
				"nombre": "Renca",
				"region": 7
			},
			{
				"id_comuna": 110,
				"nombre": "San Joaquín",
				"region": 7
			},
			{
				"id_comuna": 111,
				"nombre": "San Miguel",
				"region": 7
			},
			{
				"id_comuna": 112,
				"nombre": "San Ramón",
				"region": 7
			},
			{
				"id_comuna": 113,
				"nombre": "Vitacura",
				"region": 7
			},
			{
				"id_comuna": 114,
				"nombre": "Puente Alto",
				"region": 7
			},
			{
				"id_comuna": 115,
				"nombre": "Pirque",
				"region": 7
			},
			{
				"id_comuna": 116,
				"nombre": "San José de Maipo",
				"region": 7
			},
			{
				"id_comuna": 117,
				"nombre": "Colina",
				"region": 7
			},
			{
				"id_comuna": 118,
				"nombre": "Lampa",
				"region": 7
			},
			{
				"id_comuna": 119,
				"nombre": "Tiltil",
				"region": 7
			},
			{
				"id_comuna": 120,
				"nombre": "San Bernardo",
				"region": 7
			},
			{
				"id_comuna": 121,
				"nombre": "Buin",
				"region": 7
			},
			{
				"id_comuna": 122,
				"nombre": "Calera de Tango",
				"region": 7
			},
			{
				"id_comuna": 123,
				"nombre": "Paine",
				"region": 7
			},
			{
				"id_comuna": 124,
				"nombre": "Melipilla",
				"region": 7
			},
			{
				"id_comuna": 125,
				"nombre": "Alhué",
				"region": 7
			},
			{
				"id_comuna": 126,
				"nombre": "Curacaví",
				"region": 7
			},
			{
				"id_comuna": 127,
				"nombre": "María Pinto",
				"region": 7
			},
			{
				"id_comuna": 128,
				"nombre": "San Pedro",
				"region": 7
			},
			{
				"id_comuna": 129,
				"nombre": "Talagante",
				"region": 7
			},
			{
				"id_comuna": 130,
				"nombre": "El Monte",
				"region": 7
			},
			{
				"id_comuna": 131,
				"nombre": "Isla de Maipo",
				"region": 7
			},
			{
				"id_comuna": 132,
				"nombre": "Padre Hurtado",
				"region": 7
			},
			{
				"id_comuna": 133,
				"nombre": "Peñaflor",
				"region": 7
			}
		]
	},
	{
		"id_region": 8,
		"NombreRegion": "Región del Libertador General Bernardo O’Higgins",
		"comunas": [
			{
				"id_comuna": 134,
				"nombre": "Rancagua",
				"region": 8
			},
			{
				"id_comuna": 135,
				"nombre": "Codegua",
				"region": 8
			},
			{
				"id_comuna": 136,
				"nombre": "Coinco",
				"region": 8
			},
			{
				"id_comuna": 137,
				"nombre": "Coltauco",
				"region": 8
			},
			{
				"id_comuna": 138,
				"nombre": "Doñihue",
				"region": 8
			},
			{
				"id_comuna": 139,
				"nombre": "Graneros",
				"region": 8
			},
			{
				"id_comuna": 140,
				"nombre": "Las Cabras",
				"region": 8
			},
			{
				"id_comuna": 141,
				"nombre": "Machalí",
				"region": 8
			},
			{
				"id_comuna": 142,
				"nombre": "Malloa",
				"region": 8
			},
			{
				"id_comuna": 143,
				"nombre": "Mostazal",
				"region": 8
			},
			{
				"id_comuna": 144,
				"nombre": "Olivar",
				"region": 8
			},
			{
				"id_comuna": 145,
				"nombre": "Peumo",
				"region": 8
			},
			{
				"id_comuna": 146,
				"nombre": "Pichidegua",
				"region": 8
			},
			{
				"id_comuna": 147,
				"nombre": "Quinta de Tilcoco",
				"region": 8
			},
			{
				"id_comuna": 148,
				"nombre": "Rengo",
				"region": 8
			},
			{
				"id_comuna": 149,
				"nombre": "Requínoa",
				"region": 8
			},
			{
				"id_comuna": 150,
				"nombre": "San Vicente",
				"region": 8
			},
			{
				"id_comuna": 151,
				"nombre": "Pichilemu",
				"region": 8
			},
			{
				"id_comuna": 152,
				"nombre": "La Estrella",
				"region": 8
			},
			{
				"id_comuna": 153,
				"nombre": "Litueche",
				"region": 8
			},
			{
				"id_comuna": 154,
				"nombre": "Marchihue",
				"region": 8
			},
			{
				"id_comuna": 155,
				"nombre": "Navidad",
				"region": 8
			},
			{
				"id_comuna": 156,
				"nombre": "Paredones",
				"region": 8
			},
			{
				"id_comuna": 157,
				"nombre": "San Fernando",
				"region": 8
			},
			{
				"id_comuna": 158,
				"nombre": "Chépica",
				"region": 8
			},
			{
				"id_comuna": 159,
				"nombre": "Chimbarongo",
				"region": 8
			},
			{
				"id_comuna": 160,
				"nombre": "Lolol",
				"region": 8
			},
			{
				"id_comuna": 161,
				"nombre": "Nancagua",
				"region": 8
			},
			{
				"id_comuna": 162,
				"nombre": "Palmilla",
				"region": 8
			},
			{
				"id_comuna": 163,
				"nombre": "Peralillo",
				"region": 8
			},
			{
				"id_comuna": 164,
				"nombre": "Placilla",
				"region": 8
			},
			{
				"id_comuna": 165,
				"nombre": "Pumanque",
				"region": 8
			},
			{
				"id_comuna": 166,
				"nombre": "Santa Cruz",
				"region": 8
			}
		]
	},
	{
		"id_region": 9,
		"NombreRegion": "Región del Maule",
		"comunas": [
			{
				"id_comuna": 167,
				"nombre": "Talca",
				"region": 9
			},
			{
				"id_comuna": 168,
				"nombre": "Constitución",
				"region": 9
			},
			{
				"id_comuna": 169,
				"nombre": "Curepto",
				"region": 9
			},
			{
				"id_comuna": 170,
				"nombre": "Empedrado",
				"region": 9
			},
			{
				"id_comuna": 171,
				"nombre": "Maule",
				"region": 9
			},
			{
				"id_comuna": 172,
				"nombre": "Pelarco",
				"region": 9
			},
			{
				"id_comuna": 173,
				"nombre": "Pencahue",
				"region": 9
			},
			{
				"id_comuna": 174,
				"nombre": "Río Claro",
				"region": 9
			},
			{
				"id_comuna": 175,
				"nombre": "San Clemente",
				"region": 9
			},
			{
				"id_comuna": 176,
				"nombre": "San Rafael",
				"region": 9
			},
			{
				"id_comuna": 177,
				"nombre": "Cauquenes",
				"region": 9
			},
			{
				"id_comuna": 178,
				"nombre": "Chanco",
				"region": 9
			},
			{
				"id_comuna": 179,
				"nombre": "Pelluhue",
				"region": 9
			},
			{
				"id_comuna": 180,
				"nombre": "Curicó",
				"region": 9
			},
			{
				"id_comuna": 181,
				"nombre": "Hualañé",
				"region": 9
			},
			{
				"id_comuna": 182,
				"nombre": "Licantén",
				"region": 9
			},
			{
				"id_comuna": 183,
				"nombre": "Molina",
				"region": 9
			},
			{
				"id_comuna": 184,
				"nombre": "Rauco",
				"region": 9
			},
			{
				"id_comuna": 185,
				"nombre": "Romeral",
				"region": 9
			},
			{
				"id_comuna": 186,
				"nombre": "Sagrada Familia",
				"region": 9
			},
			{
				"id_comuna": 187,
				"nombre": "Teno",
				"region": 9
			},
			{
				"id_comuna": 188,
				"nombre": "Vichuquén",
				"region": 9
			},
			{
				"id_comuna": 189,
				"nombre": "Linares",
				"region": 9
			},
			{
				"id_comuna": 190,
				"nombre": "Colbún",
				"region": 9
			},
			{
				"id_comuna": 191,
				"nombre": "Longaví",
				"region": 9
			},
			{
				"id_comuna": 192,
				"nombre": "Parral",
				"region": 9
			},
			{
				"id_comuna": 193,
				"nombre": "Retiro",
				"region": 9
			},
			{
				"id_comuna": 194,
				"nombre": "San Javier",
				"region": 9
			},
			{
				"id_comuna": 195,
				"nombre": "Villa Alegre",
				"region": 9
			},
			{
				"id_comuna": 196,
				"nombre": "Yerbas Buenas",
				"region": 9
			}
		]
	},
	{
		"id_region": 10,
		"NombreRegion": "Región del Ñuble",
		"comunas": [
			{
				"id_comuna": 197,
				"nombre": "Cobquecura",
				"region": 10
			},
			{
				"id_comuna": 198,
				"nombre": "Coelemu",
				"region": 10
			},
			{
				"id_comuna": 199,
				"nombre": "Ninhue",
				"region": 10
			},
			{
				"id_comuna": 200,
				"nombre": "Portezuelo",
				"region": 10
			},
			{
				"id_comuna": 201,
				"nombre": "Quirihue",
				"region": 10
			},
			{
				"id_comuna": 202,
				"nombre": "Ránquil",
				"region": 10
			},
			{
				"id_comuna": 203,
				"nombre": "Treguaco",
				"region": 10
			},
			{
				"id_comuna": 204,
				"nombre": "Bulnes",
				"region": 10
			},
			{
				"id_comuna": 205,
				"nombre": "Chillán Viejo",
				"region": 10
			},
			{
				"id_comuna": 206,
				"nombre": "Chillán",
				"region": 10
			},
			{
				"id_comuna": 207,
				"nombre": "El Carmen",
				"region": 10
			},
			{
				"id_comuna": 208,
				"nombre": "Pemuco",
				"region": 10
			},
			{
				"id_comuna": 209,
				"nombre": "Pinto",
				"region": 10
			},
			{
				"id_comuna": 210,
				"nombre": "Quillón",
				"region": 10
			},
			{
				"id_comuna": 211,
				"nombre": "San Ignacio",
				"region": 10
			},
			{
				"id_comuna": 212,
				"nombre": "Yungay",
				"region": 10
			},
			{
				"id_comuna": 213,
				"nombre": "Coihueco",
				"region": 10
			},
			{
				"id_comuna": 214,
				"nombre": "Ñiquén",
				"region": 10
			},
			{
				"id_comuna": 215,
				"nombre": "San Carlos",
				"region": 10
			},
			{
				"id_comuna": 216,
				"nombre": "San Fabián",
				"region": 10
			},
			{
				"id_comuna": 217,
				"nombre": "San Nicolás",
				"region": 10
			}
		]
	},
	{
		"id_region": 11,
		"NombreRegion": "Región del Biobío",
		"comunas": [
			{
				"id_comuna": 218,
				"nombre": "Concepción",
				"region": 11
			},
			{
				"id_comuna": 219,
				"nombre": "Coronel",
				"region": 11
			},
			{
				"id_comuna": 220,
				"nombre": "Chiguayante",
				"region": 11
			},
			{
				"id_comuna": 221,
				"nombre": "Florida",
				"region": 11
			},
			{
				"id_comuna": 222,
				"nombre": "Hualqui",
				"region": 11
			},
			{
				"id_comuna": 223,
				"nombre": "Lota",
				"region": 11
			},
			{
				"id_comuna": 224,
				"nombre": "Penco",
				"region": 11
			},
			{
				"id_comuna": 225,
				"nombre": "San Pedro de la Paz",
				"region": 11
			},
			{
				"id_comuna": 226,
				"nombre": "Santa Juana",
				"region": 11
			},
			{
				"id_comuna": 227,
				"nombre": "Talcahuano",
				"region": 11
			},
			{
				"id_comuna": 228,
				"nombre": "Tomé",
				"region": 11
			},
			{
				"id_comuna": 229,
				"nombre": "Hualpén",
				"region": 11
			},
			{
				"id_comuna": 230,
				"nombre": "Lebu",
				"region": 11
			},
			{
				"id_comuna": 231,
				"nombre": "Arauco",
				"region": 11
			},
			{
				"id_comuna": 232,
				"nombre": "Cañete",
				"region": 11
			},
			{
				"id_comuna": 233,
				"nombre": "Contulmo",
				"region": 11
			},
			{
				"id_comuna": 234,
				"nombre": "Curanilahue",
				"region": 11
			},
			{
				"id_comuna": 235,
				"nombre": "Los Álamos",
				"region": 11
			},
			{
				"id_comuna": 236,
				"nombre": "Tirúa",
				"region": 11
			},
			{
				"id_comuna": 237,
				"nombre": "Los Ángeles",
				"region": 11
			},
			{
				"id_comuna": 238,
				"nombre": "Antuco",
				"region": 11
			},
			{
				"id_comuna": 239,
				"nombre": "Cabrero",
				"region": 11
			},
			{
				"id_comuna": 240,
				"nombre": "Laja",
				"region": 11
			},
			{
				"id_comuna": 241,
				"nombre": "Mulchén",
				"region": 11
			},
			{
				"id_comuna": 242,
				"nombre": "Nacimiento",
				"region": 11
			},
			{
				"id_comuna": 243,
				"nombre": "Negrete",
				"region": 11
			},
			{
				"id_comuna": 244,
				"nombre": "Quilaco",
				"region": 11
			},
			{
				"id_comuna": 245,
				"nombre": "Quilleco",
				"region": 11
			},
			{
				"id_comuna": 246,
				"nombre": "San Rosendo",
				"region": 11
			},
			{
				"id_comuna": 247,
				"nombre": "Santa Bárbara",
				"region": 11
			},
			{
				"id_comuna": 248,
				"nombre": "Tucapel",
				"region": 11
			},
			{
				"id_comuna": 249,
				"nombre": "Yumbel",
				"region": 11
			},
			{
				"id_comuna": 250,
				"nombre": "Alto Biobío",
				"region": 11
			}
		]
	},
	{
		"id_region": 12,
		"NombreRegion": "Región de La Araucanía",
		"comunas": [
			{
				"id_comuna": 251,
				"nombre": "Temuco",
				"region": 12
			},
			{
				"id_comuna": 252,
				"nombre": "Carahue",
				"region": 12
			},
			{
				"id_comuna": 253,
				"nombre": "Cunco",
				"region": 12
			},
			{
				"id_comuna": 254,
				"nombre": "Curarrehue",
				"region": 12
			},
			{
				"id_comuna": 255,
				"nombre": "Freire",
				"region": 12
			},
			{
				"id_comuna": 256,
				"nombre": "Galvarino",
				"region": 12
			},
			{
				"id_comuna": 257,
				"nombre": "Gorbea",
				"region": 12
			},
			{
				"id_comuna": 258,
				"nombre": "Lautaro",
				"region": 12
			},
			{
				"id_comuna": 259,
				"nombre": "Loncoche",
				"region": 12
			},
			{
				"id_comuna": 260,
				"nombre": "Melipeuco",
				"region": 12
			},
			{
				"id_comuna": 261,
				"nombre": "Nueva Imperial",
				"region": 12
			},
			{
				"id_comuna": 262,
				"nombre": "Padre las Casas",
				"region": 12
			},
			{
				"id_comuna": 263,
				"nombre": "Perquenco",
				"region": 12
			},
			{
				"id_comuna": 264,
				"nombre": "Pitrufquén",
				"region": 12
			},
			{
				"id_comuna": 265,
				"nombre": "Pucón",
				"region": 12
			},
			{
				"id_comuna": 266,
				"nombre": "Saavedra",
				"region": 12
			},
			{
				"id_comuna": 267,
				"nombre": "Teodoro Schmidt",
				"region": 12
			},
			{
				"id_comuna": 268,
				"nombre": "Toltén",
				"region": 12
			},
			{
				"id_comuna": 269,
				"nombre": "Vilcún",
				"region": 12
			},
			{
				"id_comuna": 270,
				"nombre": "Villarrica",
				"region": 12
			},
			{
				"id_comuna": 271,
				"nombre": "Cholchol",
				"region": 12
			},
			{
				"id_comuna": 272,
				"nombre": "Angol",
				"region": 12
			},
			{
				"id_comuna": 273,
				"nombre": "Collipulli",
				"region": 12
			},
			{
				"id_comuna": 274,
				"nombre": "Curacautín",
				"region": 12
			},
			{
				"id_comuna": 275,
				"nombre": "Ercilla",
				"region": 12
			},
			{
				"id_comuna": 276,
				"nombre": "Lonquimay",
				"region": 12
			},
			{
				"id_comuna": 277,
				"nombre": "Los Sauces",
				"region": 12
			},
			{
				"id_comuna": 278,
				"nombre": "Lumaco",
				"region": 12
			},
			{
				"id_comuna": 279,
				"nombre": "Purén",
				"region": 12
			},
			{
				"id_comuna": 280,
				"nombre": "Renaico",
				"region": 12
			},
			{
				"id_comuna": 281,
				"nombre": "Traiguén",
				"region": 12
			},
			{
				"id_comuna": 282,
				"nombre": "Victoria",
				"region": 12
			}
		]
	},
	{
		"id_region": 13,
		"NombreRegion": "Región de Los Ríos",
		"comunas": [
			{
				"id_comuna": 283,
				"nombre": "Valdivia",
				"region": 13
			},
			{
				"id_comuna": 284,
				"nombre": "Corral",
				"region": 13
			},
			{
				"id_comuna": 285,
				"nombre": "Lanco",
				"region": 13
			},
			{
				"id_comuna": 286,
				"nombre": "Los Lagos",
				"region": 13
			},
			{
				"id_comuna": 287,
				"nombre": "Máfil",
				"region": 13
			},
			{
				"id_comuna": 288,
				"nombre": "Mariquina",
				"region": 13
			},
			{
				"id_comuna": 289,
				"nombre": "Paillaco",
				"region": 13
			},
			{
				"id_comuna": 290,
				"nombre": "Panguipulli",
				"region": 13
			},
			{
				"id_comuna": 291,
				"nombre": "La Unión",
				"region": 13
			},
			{
				"id_comuna": 292,
				"nombre": "Futrono",
				"region": 13
			},
			{
				"id_comuna": 293,
				"nombre": "Lago Ranco",
				"region": 13
			},
			{
				"id_comuna": 294,
				"nombre": "Río Bueno",
				"region": 13
			}
		]
	},
	{
		"id_region": 14,
		"NombreRegion": "Región de Los Lagos",
		"comunas": [
			{
				"id_comuna": 295,
				"nombre": "Puerto Montt",
				"region": 14
			},
			{
				"id_comuna": 296,
				"nombre": "Calbuco",
				"region": 14
			},
			{
				"id_comuna": 297,
				"nombre": "Cochamó",
				"region": 14
			},
			{
				"id_comuna": 298,
				"nombre": "Fresia",
				"region": 14
			},
			{
				"id_comuna": 299,
				"nombre": "Frutillar",
				"region": 14
			},
			{
				"id_comuna": 300,
				"nombre": "Los Muermos",
				"region": 14
			},
			{
				"id_comuna": 301,
				"nombre": "Llanquihue",
				"region": 14
			},
			{
				"id_comuna": 302,
				"nombre": "Maullín",
				"region": 14
			},
			{
				"id_comuna": 303,
				"nombre": "Puerto Varas",
				"region": 14
			},
			{
				"id_comuna": 304,
				"nombre": "Castro",
				"region": 14
			},
			{
				"id_comuna": 305,
				"nombre": "Ancud",
				"region": 14
			},
			{
				"id_comuna": 306,
				"nombre": "Chonchi",
				"region": 14
			},
			{
				"id_comuna": 307,
				"nombre": "Curaco de Vélez",
				"region": 14
			},
			{
				"id_comuna": 308,
				"nombre": "Dalcahue",
				"region": 14
			},
			{
				"id_comuna": 309,
				"nombre": "Puqueldón",
				"region": 14
			},
			{
				"id_comuna": 310,
				"nombre": "Queilén",
				"region": 14
			},
			{
				"id_comuna": 311,
				"nombre": "Quellón",
				"region": 14
			},
			{
				"id_comuna": 312,
				"nombre": "Quemchi",
				"region": 14
			},
			{
				"id_comuna": 313,
				"nombre": "Quinchao",
				"region": 14
			},
			{
				"id_comuna": 314,
				"nombre": "Osorno",
				"region": 14
			},
			{
				"id_comuna": 315,
				"nombre": "Puerto Octay",
				"region": 14
			},
			{
				"id_comuna": 316,
				"nombre": "Purranque",
				"region": 14
			},
			{
				"id_comuna": 317,
				"nombre": "Puyehue",
				"region": 14
			},
			{
				"id_comuna": 318,
				"nombre": "Río Negro",
				"region": 14
			},
			{
				"id_comuna": 319,
				"nombre": "San Juan de la Costa",
				"region": 14
			},
			{
				"id_comuna": 320,
				"nombre": "San Pablo",
				"region": 14
			},
			{
				"id_comuna": 321,
				"nombre": "Chaitén",
				"region": 14
			},
			{
				"id_comuna": 322,
				"nombre": "Futaleufú",
				"region": 14
			},
			{
				"id_comuna": 323,
				"nombre": "Hualaihué",
				"region": 14
			},
			{
				"id_comuna": 324,
				"nombre": "Palena",
				"region": 14
			}
		]
	},
	{
		"id_region": 15,
		"NombreRegion": "Región de Aysén del General Carlos Ibáñez del Campo",
		"comunas": [
			{
				"id_comuna": 325,
				"nombre": "Coihaique",
				"region": 15
			},
			{
				"id_comuna": 326,
				"nombre": "Lago Verde",
				"region": 15
			},
			{
				"id_comuna": 327,
				"nombre": "Aisén",
				"region": 15
			},
			{
				"id_comuna": 328,
				"nombre": "Cisnes",
				"region": 15
			},
			{
				"id_comuna": 329,
				"nombre": "Guaitecas",
				"region": 15
			},
			{
				"id_comuna": 330,
				"nombre": "Cochrane",
				"region": 15
			},
			{
				"id_comuna": 331,
				"nombre": "O’Higgins",
				"region": 15
			},
			{
				"id_comuna": 332,
				"nombre": "Tortel",
				"region": 15
			},
			{
				"id_comuna": 333,
				"nombre": "Chile Chico",
				"region": 15
			},
			{
				"id_comuna": 334,
				"nombre": "Río Ibáñez",
				"region": 15
			}
		]
	},
	{
		"id_region": 16,
		"NombreRegion": "Región de Magallanes y la Antártica Chilena",
		"comunas": [
			{
				"id_comuna": 335,
				"nombre": "Punta Arenas",
				"region": 16
			},
			{
				"id_comuna": 336,
				"nombre": "Laguna Blanca",
				"region": 16
			},
			{
				"id_comuna": 337,
				"nombre": "Río Verde",
				"region": 16
			},
			{
				"id_comuna": 338,
				"nombre": "San Gregorio",
				"region": 16
			},
			{
				"id_comuna": 339,
				"nombre": "Cabo de Hornos",
				"region": 16
			},
			{
				"id_comuna": 340,
				"nombre": "Antártica",
				"region": 16
			},
			{
				"id_comuna": 341,
				"nombre": "Porvenir",
				"region": 16
			},
			{
				"id_comuna": 342,
				"nombre": "Primavera",
				"region": 16
			},
			{
				"id_comuna": 343,
				"nombre": "Timaukel",
				"region": 16
			},
			{
				"id_comuna": 344,
				"nombre": "Natales",
				"region": 16
			},
			{
				"id_comuna": 345,
				"nombre": "Torres del Paine",
				"region": 16
			}
		]
	}
	]
}

jQuery(document).ready(function () {

	var iRegion = 0;
	var htmlRegion = '<option value="sin-region">Seleccione región</option><option value="0">--</option>';
	var htmlComunas = '<option value="sin-region">Seleccione comuna</option><option value="0">--</option>';

	jQuery.each(RegionesYcomunas.regiones, function () {
		htmlRegion = htmlRegion + '<option value="' + RegionesYcomunas.regiones[iRegion].id_region + '">' + RegionesYcomunas.regiones[iRegion].NombreRegion + '</option>';
		iRegion++;
	});

	jQuery('#regiones').html(htmlRegion);
	jQuery('#comunas').html(htmlComunas);

	jQuery('#regiones').change(function () {
		var iRegiones = 0;
		var valorRegion = jQuery(this).val();
		var htmlComuna = '<option value="sin-comuna">Seleccione comuna</option><option value="0">--</option>';
		jQuery.each(RegionesYcomunas.regiones, function () {
			if (RegionesYcomunas.regiones[iRegiones].id_region == valorRegion) {
				var iComunas = 0;
				jQuery.each(RegionesYcomunas.regiones[iRegiones].comunas, function () {
					htmlComuna = htmlComuna + '<option value="' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas].id_comuna + '">' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas].nombre + '</option>';
					iComunas++;
				});
			}
			iRegiones++;
		});
		jQuery('#comunas').html(htmlComuna);
	});
	jQuery('#comunas').change(function () {
		if (jQuery(this).val() == '0') {
			alert('selecciones Región');
		} else if (jQuery(this).val() == '0') {
			alert('selecciones Comuna');
		}
	});
	jQuery('#regiones').change(function () {
		if (jQuery(this).val() == '0') {
			alert('selecciones Región');
		}
	});

});