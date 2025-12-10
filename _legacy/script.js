// Cuando se carga la página, añadir la clase transparent al body

let birds = [
  {
    uid: "76-buteo-albigula",
    name: {
      spanish: "Aguilucho Chico",
      english: "White-throated Hawk",
      latin: "Buteo albigula"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3099/17082018024245aguilucho_chico_tomas_rivas_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3099/17082018024245aguilucho_chico_tomas_rivas_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3099/17082018024245aguilucho_chico_tomas_rivas_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/76-buteo-albigula",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 0
  },
  {
    uid: "46-lophonetta-specularioides",
    name: {
      spanish: "Pato Juarjual",
      english: "Crested Duck",
      latin: "Lophonetta specularioides"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3102/18082018072023pato_juarjual_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3102/18082018072023pato_juarjual_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3102/18082018072023pato_juarjual_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/46-lophonetta-specularioides",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 1
  },
  {
    uid: "33-coscoroba-coscoroba",
    name: {
      spanish: "Cisne Coscoroba",
      english: "Coscoroba Swan",
      latin: "Coscoroba coscoroba"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3105/17082018103640cisne_coscoroba_alejandro_labranque_3_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3105/17082018103640cisne_coscoroba_alejandro_labranque_3_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3105/17082018103640cisne_coscoroba_alejandro_labranque_3_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/33-coscoroba-coscoroba",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 2
  },
  {
    uid: "117-leucophaeus-scoresbii",
    name: {
      spanish: "Gaviota  Austral",
      english: "Dolphin Gull",
      latin: "Leucophaeus scoresbii"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3109/13082018073638gaviota_austral_paula_de_marco_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3109/13082018073638gaviota_austral_paula_de_marco_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3109/13082018073638gaviota_austral_paula_de_marco_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/117-leucophaeus-scoresbii",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 3
  },
  {
    uid: "1-nothoprocta-perdicaria",
    name: {
      spanish: "Perdiz chilena",
      english: "Chilean Tinamou",
      latin: "Nothoprocta perdicaria"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3111/18082018074355perdiz_chilena_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3111/18082018074355perdiz_chilena_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3111/18082018074355perdiz_chilena_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/1-nothoprocta-perdicaria",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 4
  },
  {
    uid: "137-bubo-magellanicus",
    name: {
      spanish: "Tucúquere",
      english: "Magellanic Horned Owl",
      latin: "Bubo magellanicus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3115/13082018100708tucuquere_camilo_maldonado_marin_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3115/13082018100708tucuquere_camilo_maldonado_marin_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3115/13082018100708tucuquere_camilo_maldonado_marin_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/137-bubo-magellanicus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 5
  },
  {
    uid: "116-larus-dominicanus",
    name: {
      spanish: "Gaviota Dominicana",
      english: "Kelp Gull",
      latin: "Larus dominicanus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3118/04082018091522gaviota_dominicana_leslie_brackenridge_b.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3118/04082018091522gaviota_dominicana_leslie_brackenridge_b.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3118/04082018091522gaviota_dominicana_leslie_brackenridge_b.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/116-larus-dominicanus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 6
  },
  {
    uid: "91-himantopus-melanurus",
    name: {
      spanish: "Perrito",
      english: "Black-necked Stilt",
      latin: "Himantopus melanurus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3121/18082018075423perrito_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3121/18082018075423perrito_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3121/18082018075423perrito_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/91-himantopus-melanurus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 7
  },
  {
    uid: "98-haematopus-palliatus",
    name: {
      spanish: "Pilpilén",
      english: "American Oystercatcher",
      latin: "Haematopus palliatus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3124/06082018101359pilpilen_leslie_brackenridge_b.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3124/06082018101359pilpilen_leslie_brackenridge_b.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3124/06082018101359pilpilen_leslie_brackenridge_b.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/98-haematopus-palliatus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 8
  },
  {
    uid: "106-limosa-haemastica",
    name: {
      spanish: "Zarapito de pico recto",
      english: "Hudsonian Godwit",
      latin: "Limosa haemastica"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3126/13082018101547zarapito_pico_recto_leslie_brackenridge_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3126/13082018101547zarapito_pico_recto_leslie_brackenridge_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3126/13082018101547zarapito_pico_recto_leslie_brackenridge_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/106-limosa-haemastica",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 9
  },
  {
    uid: "21-ardea-alba",
    name: {
      spanish: "Garza grande",
      english: "Great White Egret",
      latin: "Ardea alba"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3128/28082018064904garza_grande_gerardo_carinao_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3128/28082018064904garza_grande_gerardo_carinao_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3128/28082018064904garza_grande_gerardo_carinao_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/21-ardea-alba",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 10
  },
  {
    uid: "5-podiceps-occipitalis",
    name: {
      spanish: "Blanquillo",
      english: "Southern Silvery Grebe",
      latin: "Podiceps occipitalis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3131/17082018025342blanquillo_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3131/17082018025342blanquillo_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3131/17082018025342blanquillo_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/5-podiceps-occipitalis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 11
  },
  {
    uid: "216-ardenna-grisea",
    name: {
      spanish: "Fardela Negra",
      english: "Sooty Shearwater",
      latin: "Ardenna grisea"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3134/19082018082146fardela_negra_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3134/19082018082146fardela_negra_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3134/19082018082146fardela_negra_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/216-ardenna-grisea",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 12
  },
  {
    uid: "166-scelorchilus-albicollis",
    name: {
      spanish: "Tapaculo",
      english: "White-throated Tapaculo",
      latin: "Scelorchilus albicollis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3136/13082018092804tapaculo_andre_vielma_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3136/13082018092804tapaculo_andre_vielma_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3136/13082018092804tapaculo_andre_vielma_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/166-scelorchilus-albicollis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 13
  },
  {
    uid: "146-sephanoides-fernandensis",
    name: {
      spanish: "Picaflor de Juan Fernández",
      english: "Juan Fernandez Firecrown",
      latin: "Sephanoides fernandensis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3139/13082018083521picaflor_juan_fernandez_camilo_maldonado_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3139/13082018083521picaflor_juan_fernandez_camilo_maldonado_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3139/13082018083521picaflor_juan_fernandez_camilo_maldonado_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/146-sephanoides-fernandensis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 14
  },
  {
    uid: "28-theristicus-melanopis",
    name: {
      spanish: "Bandurria",
      english: "Black-faced Ibis",
      latin: "Theristicus melanopis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3142/12082018072529bandurria_camilo_maldonado_marin_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3142/12082018072529bandurria_camilo_maldonado_marin_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3142/12082018072529bandurria_camilo_maldonado_marin_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/28-theristicus-melanopis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 15
  },
  {
    uid: "217-metriopelia-melanoptera",
    name: {
      spanish: "Tortolita Cordillerana",
      english: "Black-winged Ground-dove",
      latin: "Metriopelia melanoptera"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3146/18082018100656tortolita_cordillerana_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3146/18082018100656tortolita_cordillerana_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3146/18082018100656tortolita_cordillerana_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/217-metriopelia-melanoptera",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 16
  },
  {
    uid: "78-phalcoboenus-megalopterus",
    name: {
      spanish: "Carancho Cordillerano",
      english: "Mountain Caracara",
      latin: "Phalcoboenus megalopterus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3149/14092018093435.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3149/14092018093435.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3149/14092018093435.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/78-phalcoboenus-megalopterus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 17
  },
  {
    uid: "73-parabuteo-unicinctus",
    name: {
      spanish: "Peuco",
      english: "Harris Hawk",
      latin: "Parabuteo unicinctus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3152/18082018075938peuco_tomas_rivas_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3152/18082018075938peuco_tomas_rivas_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3152/18082018075938peuco_tomas_rivas_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/73-parabuteo-unicinctus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 18
  },
  {
    uid: "154-geositta-cunicularia",
    name: {
      spanish: "Minero Común",
      english: "Common Miner",
      latin: "Geositta cunicularia"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3155/20082018063719minero_comun_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3155/20082018063719minero_comun_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3155/20082018063719minero_comun_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/154-geositta-cunicularia",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 19
  },
  {
    uid: "220-heteronetta-atricapilla",
    name: {
      spanish: "Pato Rinconero",
      english: "Black-headed Duck",
      latin: "Heteronetta atricapilla"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3159/20082018083653pato_rinconero_hembra_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3159/20082018083653pato_rinconero_hembra_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3159/20082018083653pato_rinconero_hembra_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/220-heteronetta-atricapilla",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 20
  },
  {
    uid: "237-phrygilus-unicolor",
    name: {
      spanish: "Pájaro Plomo",
      english: "Plumbeous Sierra-finch",
      latin: "Phrygilus unicolor"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3161/18082018022058pajaro_plomo_macho_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3161/18082018022058pajaro_plomo_macho_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3161/18082018022058pajaro_plomo_macho_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/237-phrygilus-unicolor",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 21
  },
  {
    uid: "165-pteroptochos-tarnii",
    name: {
      spanish: "Hued-hued del Sur",
      english: "Black-throated Huet-huet",
      latin: "Pteroptochos tarnii"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3163/07092018035809.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3163/07092018035809.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3163/07092018035809.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/165-pteroptochos-tarnii",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 22
  },
  {
    uid: "32-cygnus-melancoryphus",
    name: {
      spanish: "Cisne de cuello negro",
      english: "Black-necked Swan",
      latin: "Cygnus melancoryphus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3167/15082018075840cisne_de_cuello_negro_cristian_labranque_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3167/15082018075840cisne_de_cuello_negro_cristian_labranque_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3167/15082018075840cisne_de_cuello_negro_cristian_labranque_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/32-cygnus-melancoryphus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 23
  },
  {
    uid: "189-sicalis-luteola",
    name: {
      spanish: "Chirigüe Común",
      english: "Grassland Yellow-finch",
      latin: "Sicalis luteola"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3171/17082018103004chirigue_alejandro_labranque_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3171/17082018103004chirigue_alejandro_labranque_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3171/17082018103004chirigue_alejandro_labranque_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/189-sicalis-luteola",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 24
  },
  {
    uid: "214-pluvianellus-socialis",
    name: {
      spanish: "Chorlo de Magallanes",
      english: "Magellanic plover",
      latin: "Pluvianellus socialis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3175/21082018044110chorlo_de_magallanes_juan_pablo_rider_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3175/21082018044110chorlo_de_magallanes_juan_pablo_rider_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3175/21082018044110chorlo_de_magallanes_juan_pablo_rider_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/214-pluvianellus-socialis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 25
  },
  {
    uid: "143-caprimulgus-longirostris",
    name: {
      spanish: "Gallina Ciega",
      english: "Greater Band-winged Nightjar",
      latin: "Caprimulgus longirostris"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3178/15082018080245gallina_ciega_andre_vielma_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3178/15082018080245gallina_ciega_andre_vielma_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3178/15082018080245gallina_ciega_andre_vielma_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/143-caprimulgus-longirostris",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 26
  },
  {
    uid: "223-eudyptes-chrysolophus",
    name: {
      spanish: "Pingüino Macaroni",
      english: "Macaroni Penguin",
      latin: "Eudyptes chrysolophus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3182/2908201807041621082018042703pinguino_macaroni_liam_quinn_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3182/2908201807041621082018042703pinguino_macaroni_liam_quinn_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3182/2908201807041621082018042703pinguino_macaroni_liam_quinn_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/223-eudyptes-chrysolophus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 27
  },
  {
    uid: "37-chloephaga-poliocephala",
    name: {
      spanish: "Canquén",
      english: "Ashy-headed Goose",
      latin: "Chloephaga poliocephala"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3184/19082018011819canquen_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3184/19082018011819canquen_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3184/19082018011819canquen_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/37-chloephaga-poliocephala",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 28
  },
  {
    uid: "6-podilymbus-podiceps",
    name: {
      spanish: "Picurio",
      english: "Pied-billed Grebe",
      latin: "Podilymbus podiceps"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3188/18082018081428picurio_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3188/18082018081428picurio_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3188/18082018081428picurio_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/6-podilymbus-podiceps",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 29
  },
  {
    uid: "123-sterna-hirundinacea",
    name: {
      spanish: "Gaviotín Sudamericano",
      english: "South American Tern",
      latin: "Sterna hirundinacea"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3191/18082018125159gaviotin_sudamericano_pedro_valencia_b.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3191/18082018125159gaviotin_sudamericano_pedro_valencia_b.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3191/18082018125159gaviotin_sudamericano_pedro_valencia_b.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/123-sterna-hirundinacea",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 30
  },
  {
    uid: "169-eugralla-paradoxa",
    name: {
      spanish: "Churrín de la Mocha",
      english: "Ochre-flanked tapaculo",
      latin: "Eugralla paradoxa"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3193/01092018082150churrin_de_la_mocha_pio_marshall_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3193/01092018082150churrin_de_la_mocha_pio_marshall_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3193/01092018082150churrin_de_la_mocha_pio_marshall_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/169-eugralla-paradoxa",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 31
  },
  {
    uid: "45-speculanas-specularis",
    name: {
      spanish: "Pato Anteojillo",
      english: "Spectacled Duck",
      latin: "Speculanas specularis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3196/23082018070709pato_anteojillo2_roderich_barria_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3196/23082018070709pato_anteojillo2_roderich_barria_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3196/23082018070709pato_anteojillo2_roderich_barria_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/45-speculanas-specularis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 32
  },
  {
    uid: "94-charadrius-falklandicus",
    name: {
      spanish: "Chorlo de Doble Collar",
      english: "Two-banded Plover",
      latin: "Charadrius falklandicus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3198/17082018051624chorlo_de_doble_collar_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3198/17082018051624chorlo_de_doble_collar_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3198/17082018051624chorlo_de_doble_collar_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/94-charadrius-falklandicus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 33
  },
  {
    uid: "20-rhea-pennata",
    name: {
      spanish: "Ñandú - Suri",
      english: "Lesser Rhea",
      latin: "Rhea pennata"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3200/0409201806283701092018091428n-andu_paula_de_marco_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3200/0409201806283701092018091428n-andu_paula_de_marco_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3200/0409201806283701092018091428n-andu_paula_de_marco_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/20-rhea-pennata",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 34
  },
  {
    uid: "84-pardirallus-sanguinolentus",
    name: {
      spanish: "Pidén",
      english: "Plumbeous Rail",
      latin: "Pardirallus sanguinolentus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3203/18082018081758piden_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3203/18082018081758piden_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3203/18082018081758piden_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/84-pardirallus-sanguinolentus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 35
  },
  {
    uid: "192-agelaius-thilius",
    name: {
      spanish: "Trile",
      english: "Yellow-winged Blackbird",
      latin: "Agelaius thilius"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3206/18082018101605trile_hembra_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3206/18082018101605trile_hembra_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3206/18082018101605trile_hembra_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/192-agelaius-thilius",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 36
  },
  {
    uid: "105-numenius-phaeopus",
    name: {
      spanish: "Zarapito común",
      english: "Whimbrel",
      latin: "Numenius phaeopus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3209/13082018101415zarapito_alain_macias_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3209/13082018101415zarapito_alain_macias_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3209/13082018101415zarapito_alain_macias_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/105-numenius-phaeopus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 37
  },
  {
    uid: "58-anas-platalea",
    name: {
      spanish: "Pato Cuchara",
      english: "Red Shoveler",
      latin: "Anas platalea"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3212/31082018115608pato_cuchara_macho_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3212/31082018115608pato_cuchara_macho_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3212/31082018115608pato_cuchara_macho_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/58-anas-platalea",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 38
  },
  {
    uid: "19-phalacrocorax-atriceps",
    name: {
      spanish: "Cormorán Imperial",
      english: "Imperial Shag",
      latin: "Phalacrocorax atriceps"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3214/13082018075740cormoran_imperial_paula_de_marco_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3214/13082018075740cormoran_imperial_paula_de_marco_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3214/13082018075740cormoran_imperial_paula_de_marco_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/19-phalacrocorax-atriceps",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 39
  },
  {
    uid: "244-phalacrocorax-magellanicus",
    name: {
      spanish: "Cormorán de las rocas",
      english: "Rock Shag",
      latin: "Phalacrocorax magellanicus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3217/20082018041944cormoran_de_las_rocas_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3217/20082018041944cormoran_de_las_rocas_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3217/20082018041944cormoran_de_las_rocas_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/244-phalacrocorax-magellanicus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 40
  },
  {
    uid: "85-laterallus-jamaicensis",
    name: {
      spanish: "Pidencito",
      english: "Black Rail",
      latin: "Laterallus jamaicensis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3220/20082018090013pidencito_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3220/20082018090013pidencito_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3220/20082018090013pidencito_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/85-laterallus-jamaicensis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 41
  },
  {
    uid: "126-sternula-lorata",
    name: {
      spanish: "Gaviotín Chico",
      english: "Peruvian Tern",
      latin: "Sternula lorata"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3223/07092018035526.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3223/07092018035526.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3223/07092018035526.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/126-sternula-lorata",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 42
  },
  {
    uid: "68-vultur-gryphus",
    name: {
      spanish: "Cóndor",
      english: "Andean Condor",
      latin: "Vultur gryphus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3225/20082018041211condor_hembra_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3225/20082018041211condor_hembra_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3225/20082018041211condor_hembra_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/68-vultur-gryphus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 43
  },
  {
    uid: "13-aptenodytes-patagonicus",
    name: {
      spanish: "Pingüino Rey",
      english: "King Penguin",
      latin: "Aptenodytes patagonicus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3229/23082018064956pinguino_rey_roderich_barria_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3229/23082018064956pinguino_rey_roderich_barria_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3229/23082018064956pinguino_rey_roderich_barria_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/13-aptenodytes-patagonicus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 44
  },
  {
    uid: "181-tachycineta-meyeni",
    name: {
      spanish: "Golondrina Chilena",
      english: "Chilean Swallow",
      latin: "Tachycineta meyeni"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3231/13082018090508golondrina_alejandra_lopez_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3231/13082018090508golondrina_alejandra_lopez_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3231/13082018090508golondrina_alejandra_lopez_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/181-tachycineta-meyeni",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 45
  },
  {
    uid: "115-stercorarius-chilensis",
    name: {
      spanish: "Salteador Chileno",
      english: "Chilean Skua",
      latin: "Stercorarius chilensis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3234/20082018091640salteador_chileno_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3234/20082018091640salteador_chileno_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3234/20082018091640salteador_chileno_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/115-stercorarius-chilensis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 46
  },
  {
    uid: "129-patagioenas-araucana",
    name: {
      spanish: "Torcaza",
      english: "Chilean Pigeon",
      latin: "Patagioenas araucana"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3236/18082018090512torcaza_tomas_rivas_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3236/18082018090512torcaza_tomas_rivas_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3236/18082018090512torcaza_tomas_rivas_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/129-patagioenas-araucana",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 47
  },
  {
    uid: "125-larosterna-inca",
    name: {
      spanish: "Gaviotín Monja",
      english: "Inca Tern",
      latin: "Larosterna inca"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3239/12092018083102.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3239/12092018083102.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3239/12092018083102.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/125-larosterna-inca",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 48
  },
  {
    uid: "138-tyto-alba",
    name: {
      spanish: "Lechuza",
      english: "Common Barn-owl",
      latin: "Tyto alba"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3241/2908201806510226082018023506lechuza_andres_vejar_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3241/2908201806510226082018023506lechuza_andres_vejar_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3241/2908201806510226082018023506lechuza_andres_vejar_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/138-tyto-alba",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 49
  },
  {
    uid: "164-asthenes-humicola",
    name: {
      spanish: "Canastero común",
      english: "Dusky-tailed Canastero",
      latin: "Asthenes humicola"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3244/17082018093403canastero_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3244/17082018093403canastero_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3244/17082018093403canastero_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/164-asthenes-humicola",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 50
  },
  {
    uid: "156-ochetorhynchus-melanurus",
    name: {
      spanish: "Chiricoca",
      english: "Crag Chilia",
      latin: "Ochetorhynchus melanurus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3248/23082018041939chiricoca_barbara_palma_villalobos_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3248/23082018041939chiricoca_barbara_palma_villalobos_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3248/23082018041939chiricoca_barbara_palma_villalobos_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/156-ochetorhynchus-melanurus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 51
  },
  {
    uid: "50-anas-flavirostris",
    name: {
      spanish: "Pato Jergón Chico",
      english: "Yellow-billed Teal",
      latin: "Anas flavirostris"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3250/18082018022735pato_jergon_chico_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3250/18082018022735pato_jergon_chico_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3250/18082018022735pato_jergon_chico_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/50-anas-flavirostris",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 52
  },
  {
    uid: "168-scelorchilus-rubecula",
    name: {
      spanish: "Chucao",
      english: "Chucao Tapaculo",
      latin: "Scelorchilus rubecula"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3252/13082018074316chucao_camilo_maldonado_marin_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3252/13082018074316chucao_camilo_maldonado_marin_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3252/13082018074316chucao_camilo_maldonado_marin_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/168-scelorchilus-rubecula",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 53
  },
  {
    uid: "140-strix-rufipes",
    name: {
      spanish: "Concón",
      english: "Rufous-legged Owl",
      latin: "Strix rufipes"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3255/13082018075614concon_barbara_palma_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3255/13082018075614concon_barbara_palma_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3255/13082018075614concon_barbara_palma_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/140-strix-rufipes",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 54
  },
  {
    uid: "170-scytalopus-magellanicus",
    name: {
      spanish: "Churrín del sur",
      english: "Andean tapaculo",
      latin: "Scytalopus magellanicus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3259/01102018093758churrin_barbara_palma_villalobos_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3259/01102018093758churrin_barbara_palma_villalobos_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3259/01102018093758churrin_barbara_palma_villalobos_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/170-scytalopus-magellanicus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 55
  },
  {
    uid: "131-zenaida-meloda",
    name: {
      spanish: "Paloma de Alas Blancas",
      english: "West Peruvian Dove",
      latin: "Zenaida meloda"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3263/20082018064422paloma_de_alas_blancas_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3263/20082018064422paloma_de_alas_blancas_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3263/20082018064422paloma_de_alas_blancas_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/131-zenaida-meloda",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 56
  },
  {
    uid: "147-patagonas-gigas",
    name: {
      spanish: "Picaflor Gigante",
      english: "Giant Hummingbird",
      latin: "Patagonas gigas"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3266/15082018091803picaflor_gigante_alain_macias_2_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3266/15082018091803picaflor_gigante_alain_macias_2_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3266/15082018091803picaflor_gigante_alain_macias_2_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/147-patagonas-gigas",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 57
  },
  {
    uid: "225-anthus-correndera",
    name: {
      spanish: "Bailarín chico común",
      english: "Correndera Pipit",
      latin: "Anthus correndera"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3269/05092018084136bailari-n_chico_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3269/05092018084136bailari-n_chico_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3269/05092018084136bailari-n_chico_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/225-anthus-correndera",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 58
  },
  {
    uid: "114-thinocorus-rumicivorus",
    name: {
      spanish: "Perdicita",
      english: "Least Seedsnipe",
      latin: "Thinocorus rumicivorus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3273/31082018120451perdicita_macho_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3273/31082018120451perdicita_macho_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3273/31082018120451perdicita_macho_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/114-thinocorus-rumicivorus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 59
  },
  {
    uid: "25-nycticorax-nycticorax",
    name: {
      spanish: "Huairavo común",
      english: "Black-crowned Night-heron",
      latin: "Nycticorax nycticorax"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3275/13082018082023huairavo_camilo_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3275/13082018082023huairavo_camilo_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3275/13082018082023huairavo_camilo_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/25-nycticorax-nycticorax",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 60
  },
  {
    uid: "196-phrygilus-patagonicus",
    name: {
      spanish: "Cometocino patagónico",
      english: "Patagonian Sierra-finch",
      latin: "Phrygilus patagonicus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3279/13082018075347cometocino_patagonico_camilo_maldonado_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3279/13082018075347cometocino_patagonico_camilo_maldonado_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3279/13082018075347cometocino_patagonico_camilo_maldonado_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/196-phrygilus-patagonicus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 61
  },
  {
    uid: "145-sephanoides-sephanoides",
    name: {
      spanish: "Picaflor Chico",
      english: "Green-backed Firecrown",
      latin: "Sephanoides sephanoides"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3283/14082018122316picaflor_chico_barbara_palma_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3283/14082018122316picaflor_chico_barbara_palma_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3283/14082018122316picaflor_chico_barbara_palma_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/145-sephanoides-sephanoides",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 62
  },
  {
    uid: "12-aptenodytes-forsteri",
    name: {
      spanish: "Pingüino Emperador",
      english: "Emperor Penguin",
      latin: "Aptenodytes forsteri"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3286/07092018033322.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3286/07092018033322.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3286/07092018033322.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/12-aptenodytes-forsteri",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 63
  },
  {
    uid: "202-passer-domesticus",
    name: {
      spanish: "Gorrión",
      english: "House Sparrow",
      latin: "Passer domesticus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3288/19082018084032gorrion_macho_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3288/19082018084032gorrion_macho_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3288/19082018084032gorrion_macho_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/202-passer-domesticus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 64
  },
  {
    uid: "179-elaenia-albiceps",
    name: {
      spanish: "Fío-Fío",
      english: "White-crested Elaenia",
      latin: "Elaenia albiceps"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3291/13082018080642fio_fio_alejandra_lopez_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3291/13082018080642fio_fio_alejandra_lopez_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3291/13082018080642fio_fio_alejandra_lopez_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/179-elaenia-albiceps",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 65
  },
  {
    uid: "221-thinocorus-orbignyianus",
    name: {
      spanish: "Perdicita Cojón",
      english: "Grey-breasted Seedsnipe",
      latin: "Thinocorus orbignyianus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3295/18082018073655perdicita_cojon__carlos_monteverde_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3295/18082018073655perdicita_cojon__carlos_monteverde_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3295/18082018073655perdicita_cojon__carlos_monteverde_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/221-thinocorus-orbignyianus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 66
  },
  {
    uid: "120-larus-pipixcan",
    name: {
      spanish: "Gaviota de Franklin",
      english: "Franklin´s Gull",
      latin: "Larus pipixcan"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3298/04082018124450gaviota_de_franklin_leslie_brackenridge_b.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3298/04082018124450gaviota_de_franklin_leslie_brackenridge_b.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3298/04082018124450gaviota_de_franklin_leslie_brackenridge_b.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/120-larus-pipixcan",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 67
  },
  {
    uid: "163-leptasthenura-aegithaloides",
    name: {
      spanish: "Tijeral Común",
      english: "Plain-mantled Tit-spinetail",
      latin: "Leptasthenura aegithaloides"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3301/13082018095042tijeral_camilo_maldonado_marin_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3301/13082018095042tijeral_camilo_maldonado_marin_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3301/13082018095042tijeral_camilo_maldonado_marin_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/163-leptasthenura-aegithaloides",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 68
  },
  {
    uid: "51-anas-bahamensis",
    name: {
      spanish: "Pato Gargantillo",
      english: "White-cheeked Pintail",
      latin: "Anas bahamensis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3304/20082018070503pato_gargantillo_macho_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3304/20082018070503pato_gargantillo_macho_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3304/20082018070503pato_gargantillo_macho_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/51-anas-bahamensis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 69
  },
  {
    uid: "134-cyanoliseus-patagonus",
    name: {
      spanish: "Loro Tricahue",
      english: "Burrowing Parrot",
      latin: "Cyanoliseus patagonus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3306/13082018100624tricahue_camilo_maldonado_marin_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3306/13082018100624tricahue_camilo_maldonado_marin_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3306/13082018100624tricahue_camilo_maldonado_marin_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/134-cyanoliseus-patagonus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 70
  },
  {
    uid: "109-calidris-alba",
    name: {
      spanish: "Playero blanco",
      english: "Sanderling",
      latin: "Calidris alba"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3310/27092018121222playero_blanco_leslie_brackenridge_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3310/27092018121222playero_blanco_leslie_brackenridge_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3310/27092018121222playero_blanco_leslie_brackenridge_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/109-calidris-alba",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 71
  },
  {
    uid: "245-muscisaxicola-rufivertex",
    name: {
      spanish: "Dormilona de nuca rojiza",
      english: "Rufous-naped Ground-tyrant",
      latin: "Muscisaxicola rufivertex"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3312/01092018082657dormilona_de_nuca_rojiza_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3312/01092018082657dormilona_de_nuca_rojiza_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3312/01092018082657dormilona_de_nuca_rojiza_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/245-muscisaxicola-rufivertex",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 72
  },
  {
    uid: "176-pyrocephalus-rubinus",
    name: {
      spanish: "Saca-tu-real",
      english: "Common Vermilion Flycatcher",
      latin: "Pyrocephalus rubinus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3315/13082018090121saca_tu_real_camilo_maldonado_marin_jpg_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3315/13082018090121saca_tu_real_camilo_maldonado_marin_jpg_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3315/13082018090121saca_tu_real_camilo_maldonado_marin_jpg_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/176-pyrocephalus-rubinus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 73
  },
  {
    uid: "185-phytotoma-rara",
    name: {
      spanish: "Rara",
      english: "Rufous-tailed Plantcutter",
      latin: "Phytotoma rara"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3317/19082018094719rara_hembra_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3317/19082018094719rara_hembra_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3317/19082018094719rara_hembra_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/185-phytotoma-rara",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 74
  },
  {
    uid: "4-rollandia-rolland",
    name: {
      spanish: "Pimpollo",
      english: "White-tufted Grebe",
      latin: "Rollandia rolland"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3320/13082018083903pimpollo_camilo_maldonado_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3320/13082018083903pimpollo_camilo_maldonado_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3320/13082018083903pimpollo_camilo_maldonado_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/4-rollandia-rolland",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 75
  },
  {
    uid: "155-upucerthia-dumetaria",
    name: {
      spanish: "Bandurrilla Común",
      english: "Scale-throated Earthcreeper",
      latin: "Upucerthia dumetaria"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3322/20082018100949bandurrilla_comun_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3322/20082018100949bandurrilla_comun_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3322/20082018100949bandurrilla_comun_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/155-upucerthia-dumetaria",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 76
  },
  {
    uid: "96-oreopholus-ruficollis",
    name: {
      spanish: "Chorlo de Campo",
      english: "Tawny-throated Dotterel",
      latin: "Oreopholus ruficollis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3326/20082018102923chorlo_de_campo_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3326/20082018102923chorlo_de_campo_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3326/20082018102923chorlo_de_campo_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/96-oreopholus-ruficollis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 77
  },
  {
    uid: "191-molothrus-bonariensis",
    name: {
      spanish: "Mirlo",
      english: "Shiny Cowbird",
      latin: "Molothrus bonariensis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3329/13082018082259mirlo_camilo_maldonado_marin_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3329/13082018082259mirlo_camilo_maldonado_marin_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3329/13082018082259mirlo_camilo_maldonado_marin_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/191-molothrus-bonariensis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 78
  },
  {
    uid: "29-phoenicopterus-chilensis",
    name: {
      spanish: "Flamenco Chileno",
      english: "Chilean Flamingo",
      latin: "Phoenicopterus chilensis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3332/17082018100508flamencochileno_carlos_monteverde_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3332/17082018100508flamencochileno_carlos_monteverde_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3332/17082018100508flamencochileno_carlos_monteverde_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/29-phoenicopterus-chilensis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 79
  },
  {
    uid: "23-bubuculcus-ibis",
    name: {
      spanish: "Garza Bueyera",
      english: "Cattle Egret",
      latin: "Bubuculcus ibis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3335/17082018052831garza_bueyera_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3335/17082018052831garza_bueyera_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3335/17082018052831garza_bueyera_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/23-bubuculcus-ibis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 80
  },
  {
    uid: "93-charadrius-collaris",
    name: {
      spanish: "Chorlo de Collar",
      english: "Collared Plover",
      latin: "Charadrius collaris"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3337/17082018051714chorlo_de_collar_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3337/17082018051714chorlo_de_collar_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3337/17082018051714chorlo_de_collar_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/93-charadrius-collaris",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 81
  },
  {
    uid: "104-tringa-semipalmata",
    name: {
      spanish: "Playero grande",
      english: "Willet",
      latin: "Tringa semipalmata"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3340/20082018090557playero_grande_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3340/20082018090557playero_grande_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3340/20082018090557playero_grande_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/104-tringa-semipalmata",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 82
  },
  {
    uid: "197-phrygilus-fruticeti",
    name: {
      spanish: "Yal Común",
      english: "Mourning Sierra-finch",
      latin: "Phrygilus fruticeti"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3344/18082018102348yal_hembra_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3344/18082018102348yal_hembra_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3344/18082018102348yal_hembra_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/197-phrygilus-fruticeti",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 83
  },
  {
    uid: "153-colaptes-pitius",
    name: {
      spanish: "Pitío",
      english: "Chilean Flicker",
      latin: "Colaptes pitius"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3346/2908201806533523082018020319pitio_pablo_gutierrez_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3346/2908201806533523082018020319pitio_pablo_gutierrez_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3346/2908201806533523082018020319pitio_pablo_gutierrez_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/153-colaptes-pitius",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 84
  },
  {
    uid: "222-macronectes-giganteus",
    name: {
      spanish: "Petrel Gigante Antártico",
      english: "Southern Giant Petrel",
      latin: "Macronectes giganteus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3350/2908201807025523082018065517petrel_gigante_antartico_rodrigo_reyes_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3350/2908201807025523082018065517petrel_gigante_antartico_rodrigo_reyes_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3350/2908201807025523082018065517petrel_gigante_antartico_rodrigo_reyes_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/222-macronectes-giganteus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 85
  },
  {
    uid: "193-sturnella-loyca",
    name: {
      spanish: "Loica",
      english: "Long-tailed Meadowlark",
      latin: "Sturnella loyca"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3352/06082018100456loica.200x0.png",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3352/06082018100456loica.png",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3352/06082018100456loica.200x0.png"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/193-sturnella-loyca",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 86
  },
  {
    uid: "212-sicalis-auriventris",
    name: {
      spanish: "Chirigüe Dorado",
      english: "Greater Yellow Finch",
      latin: "Sicalis auriventris"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3355/31082018111212chirigue_dorado_macho_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3355/31082018111212chirigue_dorado_macho_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3355/31082018111212chirigue_dorado_macho_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/212-sicalis-auriventris",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 87
  },
  {
    uid: "102-tringa-melanoleuca",
    name: {
      spanish: "Pitotoy grande",
      english: "Greater Yellowlegs",
      latin: "Tringa melanoleuca"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3358/27092018115149pitotoy_grande__leslie_brackenridge_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3358/27092018115149pitotoy_grande__leslie_brackenridge_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3358/27092018115149pitotoy_grande__leslie_brackenridge_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/102-tringa-melanoleuca",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 88
  },
  {
    uid: "113-nycticryphes-semicollaris",
    name: {
      spanish: "Becasina Pintada",
      english: "South American Painted-snipe",
      latin: "Nycticryphes semicollaris"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3360/13092018013525.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3360/13092018013525.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3360/13092018013525.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/113-nycticryphes-semicollaris",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 89
  },
  {
    uid: "70-accipiter-chilensis",
    name: {
      spanish: "Peuquito",
      english: "Chilean Hawk",
      latin: "Accipiter chilensis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3363/18082018080538peuquito_tomas_rivas_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3363/18082018080538peuquito_tomas_rivas_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3363/18082018080538peuquito_tomas_rivas_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/70-accipiter-chilensis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 90
  },
  {
    uid: "173-hymenops-perspicillata",
    name: {
      spanish: "Run-run",
      english: "Spectacled Tyrant",
      latin: "Hymenops perspicillata"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3365/13082018085841run_run_camilo_maldonado_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3365/13082018085841run_run_camilo_maldonado_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3365/13082018085841run_run_camilo_maldonado_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/173-hymenops-perspicillata",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 91
  },
  {
    uid: "239-phalaropus-tricolor",
    name: {
      spanish: "Pollito de Mar Tricolor",
      english: "Wilson&amp;Prime,s Phalarope",
      latin: "Phalaropus tricolor"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3367/18082018083719pollito_de_mar_tricolor_pedro_valencia_b.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3367/18082018083719pollito_de_mar_tricolor_pedro_valencia_b.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3367/18082018083719pollito_de_mar_tricolor_pedro_valencia_b.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/239-phalaropus-tricolor",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 92
  },
  {
    uid: "203-carduelis-barbata",
    name: {
      spanish: "Jilguero",
      english: "Black-chinned Siskin",
      latin: "Carduelis barbata"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3369/19082018084655jilguero_comun_macho_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3369/19082018084655jilguero_comun_macho_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3369/19082018084655jilguero_comun_macho_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/203-carduelis-barbata",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 93
  },
  {
    uid: "82-falco-femoralis",
    name: {
      spanish: "Halcón Perdiguero",
      english: "Aplomado Falcon",
      latin: "Falco femoralis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3372/18082018011817halcon_perdiguero_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3372/18082018011817halcon_perdiguero_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3372/18082018011817halcon_perdiguero_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/82-falco-femoralis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 94
  },
  {
    uid: "247-melanodera-xanthogramma",
    name: {
      spanish: "Yal Cordillerano",
      english: "Yellow-bridled Finch",
      latin: "Melanodera xanthogramma"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3374/2908201807164521082018013452yal_cordillerano_sebastian_saiter_web_.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3374/2908201807164521082018013452yal_cordillerano_sebastian_saiter_web_.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3374/2908201807164521082018013452yal_cordillerano_sebastian_saiter_web_.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/247-melanodera-xanthogramma",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 95
  },
  {
    uid: "133-enicognathus-leptorhynchus",
    name: {
      spanish: "Loro Choroy",
      english: "Slender-billed Parakeet",
      latin: "Enicognathus leptorhynchus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3377/19082018012957choroy_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3377/19082018012957choroy_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3377/19082018012957choroy_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/133-enicognathus-leptorhynchus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 96
  },
  {
    uid: "108-aphriza-virgata",
    name: {
      spanish: "Playero de las Rompientes",
      english: "Surfbird",
      latin: "Aphriza virgata"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3380/13082018085312playero_de_las_rompientes_leslie_brackenridge_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3380/13082018085312playero_de_las_rompientes_leslie_brackenridge_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3380/13082018085312playero_de_las_rompientes_leslie_brackenridge_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/108-aphriza-virgata",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 97
  },
  {
    uid: "229-attagis-gayi",
    name: {
      spanish: "Perdicita cordillerana",
      english: "Rufous-bellied Seedsnipe",
      latin: "Attagis gayi"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3382/18082018074020perdicita_cordillerana_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3382/18082018074020perdicita_cordillerana_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3382/18082018074020perdicita_cordillerana_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/229-attagis-gayi",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 98
  },
  {
    uid: "151-campephilus-magellanicus",
    name: {
      spanish: "Carpintero Negro",
      english: "Magellanic Woodpecker",
      latin: "Campephilus magellanicus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3385/23082018011857carpintero_grande_camilo_maldonado_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3385/23082018011857carpintero_grande_camilo_maldonado_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3385/23082018011857carpintero_grande_camilo_maldonado_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/151-campephilus-magellanicus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 99
  },
  {
    uid: "215-cinclodes-fuscus",
    name: {
      spanish: "Churrete Acanelado",
      english: "Buff-winged Cinclodes",
      latin: "Cinclodes fuscus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3389/21082018050542churrete_acanelado_hernan_linetzky_mc-manus_b.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3389/21082018050542churrete_acanelado_hernan_linetzky_mc-manus_b.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3389/21082018050542churrete_acanelado_hernan_linetzky_mc-manus_b.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/215-cinclodes-fuscus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 100
  },
  {
    uid: "75-buteo-ventralis",
    name: {
      spanish: "Aguilucho de Cola Rojiza",
      english: "Rufous-tailed Hawk",
      latin: "Buteo ventralis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3391/17082018024423aguiluchocolarojiza_tomas_rivas_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3391/17082018024423aguiluchocolarojiza_tomas_rivas_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3391/17082018024423aguiluchocolarojiza_tomas_rivas_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/75-buteo-ventralis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 101
  },
  {
    uid: "226-muscisaxicola-flavinucha",
    name: {
      spanish: "Dormilona Fraile",
      english: "Ochre-naped Ground-tyrant",
      latin: "Muscisaxicola flavinucha"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3394/20082018042506dormilona_fraile_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3394/20082018042506dormilona_fraile_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3394/20082018042506dormilona_fraile_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/226-muscisaxicola-flavinucha",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 102
  },
  {
    uid: "162-aphrastura-spinicauda",
    name: {
      spanish: "Rayadito",
      english: "Thorn-tailed Rayadito",
      latin: "Aphrastura spinicauda"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3396/23082018060705rayadito_mauricio_gonzalez_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3396/23082018060705rayadito_mauricio_gonzalez_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3396/23082018060705rayadito_mauricio_gonzalez_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/162-aphrastura-spinicauda",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 103
  },
  {
    uid: "139-asio-flammeus",
    name: {
      spanish: "Nuco",
      english: "Short-eared Owl",
      latin: "Asio flammeus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3399/18082018021324nuco_tomas_rivas_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3399/18082018021324nuco_tomas_rivas_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3399/18082018021324nuco_tomas_rivas_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/139-asio-flammeus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 104
  },
  {
    uid: "74-buteo-polyosoma",
    name: {
      spanish: "Aguilucho Común",
      english: "Red-backed Hawk",
      latin: "Buteo polyosoma"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3401/17082018024833aguiluchocomun_tomas_rivas_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3401/17082018024833aguiluchocomun_tomas_rivas_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3401/17082018024833aguiluchocomun_tomas_rivas_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/74-buteo-polyosoma",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 105
  },
  {
    uid: "186-turdus-falcklandii",
    name: {
      spanish: "Zorzal",
      english: "Austral Thrush",
      latin: "Turdus falcklandii"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3404/15082018080732zorzal_cristian_labranque_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3404/15082018080732zorzal_cristian_labranque_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3404/15082018080732zorzal_cristian_labranque_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/186-turdus-falcklandii",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 106
  },
  {
    uid: "54-anas-sibilatrix",
    name: {
      spanish: "Pato Real",
      english: "Chiloe Wigeon",
      latin: "Anas sibilatrix"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3408/20082018071600pato_real_macho_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3408/20082018071600pato_real_macho_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3408/20082018071600pato_real_macho_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/54-anas-sibilatrix",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 107
  },
  {
    uid: "65-cathartes-aura",
    name: {
      spanish: "Jote de Cabeza Colorada",
      english: "Turkey Vulture",
      latin: "Cathartes aura"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3411/18082018020140jote_cabeza_colorada_tomas_rivas_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3411/18082018020140jote_cabeza_colorada_tomas_rivas_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3411/18082018020140jote_cabeza_colorada_tomas_rivas_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/65-cathartes-aura",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 108
  },
  {
    uid: "26-ixobrychus-involucris",
    name: {
      spanish: "Huairavillo",
      english: "Stripe-backed bittern",
      latin: "Ixobrychus involucris"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3413/13082018081939huairavillo_camilo_maldonado_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3413/13082018081939huairavillo_camilo_maldonado_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3413/13082018081939huairavillo_camilo_maldonado_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/26-ixobrychus-involucris",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 109
  },
  {
    uid: "14-sula-variegata",
    name: {
      spanish: "Piquero",
      english: "Peruvian Booby",
      latin: "Sula variegata"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3415/18082018082127piquero_carlos_monteverde_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3415/18082018082127piquero_carlos_monteverde_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3415/18082018082127piquero_carlos_monteverde_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/14-sula-variegata",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 110
  },
  {
    uid: "201-zonotrichia-capensis",
    name: {
      spanish: "Chincol",
      english: "Rufous-collared Sparrow",
      latin: "Zonotrichia capensis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3417/13092018013010.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3417/13092018013010.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3417/13092018013010.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/201-zonotrichia-capensis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 111
  },
  {
    uid: "7-podiceps-major",
    name: {
      spanish: "Huala",
      english: "Great Grebe",
      latin: "Podiceps major"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3420/28082018060139huala_mono_andes_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3420/28082018060139huala_mono_andes_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3420/28082018060139huala_mono_andes_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/7-podiceps-major",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 112
  },
  {
    uid: "194-phrygilus-gayi",
    name: {
      spanish: "Cometocino de Gay",
      english: "Gray Hooded Sierra-finch",
      latin: "Phrygilus gayi"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3424/15082018080014cometocino_de_gay_andre_vielma_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3424/15082018080014cometocino_de_gay_andre_vielma_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3424/15082018080014cometocino_de_gay_andre_vielma_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/194-phrygilus-gayi",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 113
  },
  {
    uid: "99-haematopus-ater",
    name: {
      spanish: "Pilpilén Negro",
      english: "Blackish Oystercatcher",
      latin: "Haematopus ater"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3427/06082018101025pilpilen_negro_michel_baez_b.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3427/06082018101025pilpilen_negro_michel_baez_b.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3427/06082018101025pilpilen_negro_michel_baez_b.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/99-haematopus-ater",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 114
  },
  {
    uid: "235-agriornis-lividus",
    name: {
      spanish: "Mero",
      english: "Great Shrike-tyrant",
      latin: "Agriornis lividus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3429/20082018063420mero_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3429/20082018063420mero_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3429/20082018063420mero_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/235-agriornis-lividus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 115
  },
  {
    uid: "101-phegornis-mitchellii",
    name: {
      spanish: "Chorlito Cordillerano",
      english: "Diademed Sandpiper-plover",
      latin: "Phegornis mitchellii"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3431/13082018073104chorlito_cordillerano_camilo_maldonado_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3431/13082018073104chorlito_cordillerano_camilo_maldonado_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3431/13082018073104chorlito_cordillerano_camilo_maldonado_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/101-phegornis-mitchellii",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 116
  },
  {
    uid: "218-columba-livia",
    name: {
      spanish: "Paloma doméstica",
      english: "Rock Dove",
      latin: "Columba livia"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3435/05092018085443paloma_domestica_gordon_magee_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3435/05092018085443paloma_domestica_gordon_magee_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3435/05092018085443paloma_domestica_gordon_magee_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/218-columba-livia",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 117
  },
  {
    uid: "200-diuca-diuca",
    name: {
      spanish: "Diuca",
      english: "Common Diuca-finch",
      latin: "Diuca diuca"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3437/15082018080143diuca_andre_vielma_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3437/15082018080143diuca_andre_vielma_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3437/15082018080143diuca_andre_vielma_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/200-diuca-diuca",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 118
  },
  {
    uid: "41-chloephaga-picta",
    name: {
      spanish: "Caiquén",
      english: "Upland Goose",
      latin: "Chloephaga picta"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3441/20082018101508caiquen_hembra_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3441/20082018101508caiquen_hembra_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3441/20082018101508caiquen_hembra_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/41-chloephaga-picta",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 119
  },
  {
    uid: "62-oxyura-ferruginea (jamaicensis)",
    name: {
      spanish: "Pato Rana de Pico Ancho",
      english: "Andean Duck",
      latin: "Oxyura ferruginea (jamaicensis)"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3445/18082018072846pato_rana_pico_ancho_carlos_monteverde_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3445/18082018072846pato_rana_pico_ancho_carlos_monteverde_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3445/18082018072846pato_rana_pico_ancho_carlos_monteverde_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/62-oxyura-ferruginea-jamaicensis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 120
  },
  {
    uid: "158-cinclodes-nigrofumosus",
    name: {
      spanish: "Churrete Costero",
      english: "Seaside Cinclodes",
      latin: "Cinclodes nigrofumosus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3447/23082018053546churrete_costero_cristian_vergara_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3447/23082018053546churrete_costero_cristian_vergara_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3447/23082018053546churrete_costero_cristian_vergara_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/158-cinclodes-nigrofumosus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 121
  },
  {
    uid: "107-arenaria-interpres",
    name: {
      spanish: "Playero vuelvepiedras",
      english: "Ruddy Turnstone",
      latin: "Arenaria interpres"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3449/13082018085555playero_vuelvepiedras_leslie_brackenridge_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3449/13082018085555playero_vuelvepiedras_leslie_brackenridge_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3449/13082018085555playero_vuelvepiedras_leslie_brackenridge_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/107-arenaria-interpres",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 122
  },
  {
    uid: "236-hirundo-rustica",
    name: {
      spanish: "Golondrina Bermeja",
      english: "Barn Swallow",
      latin: "Hirundo rustica"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3451/18082018010729golondrina_bermeja_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3451/18082018010729golondrina_bermeja_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3451/18082018010729golondrina_bermeja_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/236-hirundo-rustica",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 123
  },
  {
    uid: "87-fulica-armillata",
    name: {
      spanish: "Tagua Común",
      english: "Red-gartered Coot",
      latin: "Fulica armillata"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3454/19082018095200tagua_comun_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3454/19082018095200tagua_comun_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3454/19082018095200tagua_comun_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/87-fulica-armillata",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 124
  },
  {
    uid: "97-charadrius-modestus",
    name: {
      spanish: "Chorlo Chileno",
      english: "Rufous-chested Plover",
      latin: "Charadrius modestus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3456/17082018025610chorlo_chileno_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3456/17082018025610chorlo_chileno_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3456/17082018025610chorlo_chileno_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/97-charadrius-modestus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 125
  },
  {
    uid: "233-muscisaxicola-maclovianus",
    name: {
      spanish: "Dormilona Tontita",
      english: "Dark-faced ground-tyrant",
      latin: "Muscisaxicola maclovianus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3459/22082018122710dormilona_tontita_juvenil_luis_piovani_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3459/22082018122710dormilona_tontita_juvenil_luis_piovani_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3459/22082018122710dormilona_tontita_juvenil_luis_piovani_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/233-muscisaxicola-maclovianus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 126
  },
  {
    uid: "161-sylviorthorhynchus-desmurii",
    name: {
      spanish: "Colilarga",
      english: "Des Murs&amp;Prime;s Wiretail",
      latin: "Sylviorthorhynchus desmurii"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3462/17082018051920colilarga_tomas_rivas_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3462/17082018051920colilarga_tomas_rivas_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3462/17082018051920colilarga_tomas_rivas_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/161-sylviorthorhynchus-desmurii",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 127
  },
  {
    uid: "27-plegadis-chihi",
    name: {
      spanish: "Cuervo de Pantano",
      english: "White-faced Ibis",
      latin: "Plegadis chihi"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3465/17082018052311cuervo_del_pantano_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3465/17082018052311cuervo_del_pantano_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3465/17082018052311cuervo_del_pantano_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/27-plegadis-chihi",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 128
  },
  {
    uid: "95-pluvialis-squatarola",
    name: {
      spanish: "Chorlo Ártico",
      english: "Grey Plover",
      latin: "Pluvialis squatarola"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3467/20082018102307chorlo_artico_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3467/20082018102307chorlo_artico_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3467/20082018102307chorlo_artico_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/95-pluvialis-squatarola",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 129
  },
  {
    uid: "160-phleocryptes-melanops",
    name: {
      spanish: "Trabajador",
      english: "Wren-like Rushbird",
      latin: "Phleocryptes melanops"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3470/23082018055733trabajador_antonio_maureira_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3470/23082018055733trabajador_antonio_maureira_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3470/23082018055733trabajador_antonio_maureira_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/160-phleocryptes-melanops",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 130
  },
  {
    uid: "149-rhodopis-vesper",
    name: {
      spanish: "Picaflor del Norte",
      english: "Oasis Hummingbird",
      latin: "Rhodopis vesper"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3473/18082018080945picaflor_del_norte_hembra_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3473/18082018080945picaflor_del_norte_hembra_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3473/18082018080945picaflor_del_norte_hembra_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/149-rhodopis-vesper",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 131
  },
  {
    uid: "242-caracara-plancus",
    name: {
      spanish: "Traro o Carancho Común",
      english: "Southern Caracara",
      latin: "Caracara plancus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3475/18082018101231traro_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3475/18082018101231traro_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3475/18082018101231traro_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/242-caracara-plancus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 132
  },
  {
    uid: "111-gallinago-paraguaiae",
    name: {
      spanish: "Becasina Común",
      english: "South American Snipe",
      latin: "Gallinago paraguaiae"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3478/05092018084208becacina_comu-n_pio_marshall_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3478/05092018084208becacina_comu-n_pio_marshall_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3478/05092018084208becacina_comu-n_pio_marshall_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/111-gallinago-paraguaiae",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 133
  },
  {
    uid: "16-phalacrocorax-brasilianus",
    name: {
      spanish: "Cormorán Yeco",
      english: "Neotropical Cormorant",
      latin: "Phalacrocorax brasilianus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3481/18082018102755yeco_carlos_monteverde_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3481/18082018102755yeco_carlos_monteverde_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3481/18082018102755yeco_carlos_monteverde_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/16-phalacrocorax-brasilianus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 134
  },
  {
    uid: "100-haematopus-leucopodus",
    name: {
      spanish: "Pilpilén Austral",
      english: "Magellanic Oystercatcher",
      latin: "Haematopus leucopodus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3485/23082018064725pilpilen_austral_rodrigo_reyes_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3485/23082018064725pilpilen_austral_rodrigo_reyes_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3485/23082018064725pilpilen_austral_rodrigo_reyes_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/100-haematopus-leucopodus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 135
  },
  {
    uid: "128-rynchops-niger",
    name: {
      spanish: "Rayador",
      english: "Black Skimmer",
      latin: "Rynchops niger"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3487/18082018085124rayador_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3487/18082018085124rayador_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3487/18082018085124rayador_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/128-rynchops-niger",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 136
  },
  {
    uid: "92-recurvirostra-andina",
    name: {
      spanish: "Caití",
      english: "Andean Avocet",
      latin: "Recurvirostra andina"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3490/2908201806492522082018090051caiti_ximena_olivares_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3490/2908201806492522082018090051caiti_ximena_olivares_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3490/2908201806492522082018090051caiti_ximena_olivares_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/92-recurvirostra-andina",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 137
  },
  {
    uid: "79-milvago-chimango",
    name: {
      spanish: "Tiuque",
      english: "Chimango Caracara",
      latin: "Milvago chimango"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3494/05092018090152tiuque_sebastian_saiter_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3494/05092018090152tiuque_sebastian_saiter_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3494/05092018090152tiuque_sebastian_saiter_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/79-milvago-chimango",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 138
  },
  {
    uid: "231-eudyptes-chrysocome",
    name: {
      spanish: "Pingüino de Penacho Amarillo",
      english: "Southern Rockhopper Penguin",
      latin: "Eudyptes chrysocome"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3497/01102018093553pinguuino_de_penacho_amarillo_russell_scott_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3497/01102018093553pinguuino_de_penacho_amarillo_russell_scott_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3497/01102018093553pinguuino_de_penacho_amarillo_russell_scott_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/231-eudyptes-chrysocome",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 139
  },
  {
    uid: "66-coragyps-atratus",
    name: {
      spanish: "Jote de Cabeza Negra",
      english: "American Black Vulture",
      latin: "Coragyps atratus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3499/18082018020928jote_de_cabeza_negra_tomas_rivas_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3499/18082018020928jote_de_cabeza_negra_tomas_rivas_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3499/18082018020928jote_de_cabeza_negra_tomas_rivas_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/66-coragyps-atratus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 140
  },
  {
    uid: "152-picoides-lignarius",
    name: {
      spanish: "Carpinterito",
      english: "Striped Woodpecker",
      latin: "Picoides lignarius"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3501/23082018014912carpinterito_camilo_maldonado_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3501/23082018014912carpinterito_camilo_maldonado_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3501/23082018014912carpinterito_camilo_maldonado_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/152-picoides-lignarius",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 141
  },
  {
    uid: "232-cinclodes-atacamensis",
    name: {
      spanish: "Churrete de alas blancas",
      english: "White-winged cinclodes",
      latin: "Cinclodes atacamensis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3505/21082018055319churrete_de_alas_blancas_bruno_conjeaud_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3505/21082018055319churrete_de_alas_blancas_bruno_conjeaud_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3505/21082018055319churrete_de_alas_blancas_bruno_conjeaud_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/232-cinclodes-atacamensis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 142
  },
  {
    uid: "132-enicognathus-ferrugineus",
    name: {
      spanish: "Cachaña",
      english: "Austral parakeet",
      latin: "Enicognathus ferrugineus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3507/25092018063241cachana_camilo_maldonado_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3507/25092018063241cachana_camilo_maldonado_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3507/25092018063241cachana_camilo_maldonado_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/132-enicognathus-ferrugineus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 143
  },
  {
    uid: "48-merganetta-armata",
    name: {
      spanish: "Pato Cortacorrientes",
      english: "Torrent Duck",
      latin: "Merganetta armata"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3510/26082018041035pato_cortacorrientes_hembra_niccolo_cantarutti_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3510/26082018041035pato_cortacorrientes_hembra_niccolo_cantarutti_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3510/26082018041035pato_cortacorrientes_hembra_niccolo_cantarutti_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/48-merganetta-armata",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 144
  },
  {
    uid: "190-curaeus-curaeus",
    name: {
      spanish: "Tordo",
      english: "Austral Blackbird",
      latin: "Curaeus curaeus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3512/01092018085900tordo_pio_marshall_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3512/01092018085900tordo_pio_marshall_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3512/01092018085900tordo_pio_marshall_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/190-curaeus-curaeus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 145
  },
  {
    uid: "8-thalassarche-melanophrys",
    name: {
      spanish: "Albatros de ceja negra",
      english: "Black browed albatross (Black-browed mollymawk)",
      latin: "Thalassarche melanophrys"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3515/20082018100543albatros_de_ceja_negra_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3515/20082018100543albatros_de_ceja_negra_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3515/20082018100543albatros_de_ceja_negra_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/8-thalassarche-melanophrys",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 146
  },
  {
    uid: "159-pygarrhichas-albogularis",
    name: {
      spanish: "Comesebo Grande",
      english: "White-throated Tree-runner",
      latin: "Pygarrhichas albogularis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3518/05092018084910comesebo_grande_andres_vejar_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3518/05092018084910comesebo_grande_andres_vejar_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3518/05092018084910comesebo_grande_andres_vejar_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/159-pygarrhichas-albogularis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 147
  },
  {
    uid: "71-elanus-leucurus",
    name: {
      spanish: "Bailarín",
      english: "Whited-tailed Kite.",
      latin: "Elanus leucurus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3522/09082018114457bailarin_camilo_maldonado_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3522/09082018114457bailarin_camilo_maldonado_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3522/09082018114457bailarin_camilo_maldonado_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/71-elanus-leucurus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 148
  },
  {
    uid: "195-phrygilus-atriceps",
    name: {
      spanish: "Cometocino del Norte",
      english: "Black-hooded Sierra-finch",
      latin: "Phrygilus atriceps"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3526/13082018075511cometocino_del_norte_camilo_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3526/13082018075511cometocino_del_norte_camilo_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3526/13082018075511cometocino_del_norte_camilo_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/195-phrygilus-atriceps",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 149
  },
  {
    uid: "177-xolmis-pyrope",
    name: {
      spanish: "Diucón",
      english: "Fire-eyed Diucon",
      latin: "Xolmis pyrope"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3530/13082018080441diucon_barbara_palma_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3530/13082018080441diucon_barbara_palma_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3530/13082018080441diucon_barbara_palma_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/177-xolmis-pyrope",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 150
  },
  {
    uid: "2-callipela-californica",
    name: {
      spanish: "Codorniz",
      english: "California Quail",
      latin: "Callipela californica"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3533/19082018013328codorniz_hembra_y_macho_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3533/19082018013328codorniz_hembra_y_macho_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3533/19082018013328codorniz_hembra_y_macho_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/2-callipela-californica",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 151
  },
  {
    uid: "219-columbina-picui",
    name: {
      spanish: "Tortolita cuyana",
      english: "Picui Dove",
      latin: "Columbina picui"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3536/21082018094922tortolita_cuyana_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3536/21082018094922tortolita_cuyana_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3536/21082018094922tortolita_cuyana_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/219-columbina-picui",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 152
  },
  {
    uid: "224-phalaropus-fulicarius",
    name: {
      spanish: "Pollito de Mar Rojizo",
      english: "Red Phalarope",
      latin: "Phalaropus fulicarius"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3538/01092018085221pollito_mar_rojizo_pio_marshall_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3538/01092018085221pollito_mar_rojizo_pio_marshall_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3538/01092018085221pollito_mar_rojizo_pio_marshall_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/224-phalaropus-fulicarius",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 153
  },
  {
    uid: "3-eudromia-elegans",
    name: {
      spanish: "Perdiz copetona / Martineta",
      english: "Elegant Crested Tinamou",
      latin: "Eudromia elegans"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3540/27092018092920perdiz_copetona_2_jorge_chamia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3540/27092018092920perdiz_copetona_2_jorge_chamia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3540/27092018092920perdiz_copetona_2_jorge_chamia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/3-eudromia-elegans",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 154
  },
  {
    uid: "60-netta-peposaca",
    name: {
      spanish: "Pato Negro",
      english: "Rosy-billed Pochard",
      latin: "Netta peposaca"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3542/18082018072436pato_negro_macho_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3542/18082018072436pato_negro_macho_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3542/18082018072436pato_negro_macho_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/60-netta-peposaca",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 155
  },
  {
    uid: "103-tringa-flavipes",
    name: {
      spanish: "Pitotoy Chico",
      english: "Lesser Yellowlegs",
      latin: "Tringa flavipes"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3544/27092018114406pitotoy_chico_leslie_brackenridge__089tfan04_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3544/27092018114406pitotoy_chico_leslie_brackenridge__089tfan04_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3544/27092018114406pitotoy_chico_leslie_brackenridge__089tfan04_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/103-tringa-flavipes",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 156
  },
  {
    uid: "136-myiopsitta-monachus",
    name: {
      spanish: "Cotorra Argentina",
      english: "Monk Parakeet",
      latin: "Myiopsitta monachus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3546/31082018112715cotorra_argentina_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3546/31082018112715cotorra_argentina_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3546/31082018112715cotorra_argentina_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/136-myiopsitta-monachus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 157
  },
  {
    uid: "183-troglodytes-musculus",
    name: {
      spanish: "Chercán",
      english: "Southern House Wren",
      latin: "Troglodytes musculus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3549/14082018073313chercaan_bp.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3549/14082018073313chercaan_bp.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3549/14082018073313chercaan_bp.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/183-troglodytes-musculus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 158
  },
  {
    uid: "248-diomedea-exulans",
    name: {
      spanish: "Albatros errante",
      english: "Wandering Albatross",
      latin: "Diomedea exulans"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3553/21082018011740albatros_errrante_liam_quinn_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3553/21082018011740albatros_errrante_liam_quinn_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3553/21082018011740albatros_errrante_liam_quinn_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/248-diomedea-exulans",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 159
  },
  {
    uid: "80-falco-sparverius",
    name: {
      spanish: "Cernícalo",
      english: "American Kestrel",
      latin: "Falco sparverius"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3556/22082018052943cernicalo_camilo_maldonado_marin_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3556/22082018052943cernicalo_camilo_maldonado_marin_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3556/22082018052943cernicalo_camilo_maldonado_marin_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/80-falco-sparverius",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 160
  },
  {
    uid: "22-egretta-thula",
    name: {
      spanish: "Garza Chica",
      english: "Snowy Egret",
      latin: "Egretta thula"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3559/19082018082620garza_chica_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3559/19082018082620garza_chica_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3559/19082018082620garza_chica_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/22-egretta-thula",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 161
  },
  {
    uid: "49-anas-georgica",
    name: {
      spanish: "Pato Jergón Grande",
      english: "Yellow-billed Pintail",
      latin: "Anas georgica"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3561/18082018071636pato_jergon_grande_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3561/18082018071636pato_jergon_grande_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3561/18082018071636pato_jergon_grande_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/49-anas-georgica",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 162
  },
  {
    uid: "204-carduelis-uropygialis",
    name: {
      spanish: "Jilguero cordillerano",
      english: "Yellow-rumped Siskin",
      latin: "Carduelis uropygialis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3564/20082018043214jilguero_cordillerano_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3564/20082018043214jilguero_cordillerano_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3564/20082018043214jilguero_cordillerano_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/204-carduelis-uropygialis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 163
  },
  {
    uid: "167-pteroptochos-megapodius",
    name: {
      spanish: "Turca",
      english: "Moustached Turca",
      latin: "Pteroptochos megapodius"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3566/13082018100923turca_camilo_maldonado_marin_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3566/13082018100923turca_camilo_maldonado_marin_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3566/13082018100923turca_camilo_maldonado_marin_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/167-pteroptochos-megapodius",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 164
  },
  {
    uid: "88-fulica-leucoptera",
    name: {
      spanish: "Tagua Chica",
      english: "White-winged Coot",
      latin: "Fulica leucoptera"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3569/21082018094156tagua_chica_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3569/21082018094156tagua_chica_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3569/21082018094156tagua_chica_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/88-fulica-leucoptera",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 165
  },
  {
    uid: "127-sterna-elegans",
    name: {
      spanish: "Gaviotín Elegante",
      english: "Elegant Tern",
      latin: "Sterna elegans"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3571/18082018124343gaviotin_elegante_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3571/18082018124343gaviotin_elegante_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3571/18082018124343gaviotin_elegante_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/127-sterna-elegans",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 166
  },
  {
    uid: "38-chloephaga-rubidiceps",
    name: {
      spanish: "Canquén Colorado",
      english: "Ruddy-headed Goose",
      latin: "Chloephaga rubidiceps"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3573/23082018071137canquen_colorado_roderich_barria_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3573/23082018071137canquen_colorado_roderich_barria_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3573/23082018071137canquen_colorado_roderich_barria_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/38-chloephaga-rubidiceps",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 167
  },
  {
    uid: "121-larus-serranus",
    name: {
      spanish: "Gaviota Andina",
      english: "Andean Gull",
      latin: "Larus serranus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3576/18082018123916gaviota_andina_carlos_monteverde_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3576/18082018123916gaviota_andina_carlos_monteverde_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3576/18082018123916gaviota_andina_carlos_monteverde_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/121-larus-serranus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 168
  },
  {
    uid: "174-lessonia-rufa",
    name: {
      spanish: "Colegial",
      english: "Austral Negrito",
      latin: "Lessonia rufa"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3579/13082018075128colegial_barbara_palma_villalobosjpg_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3579/13082018075128colegial_barbara_palma_villalobosjpg_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3579/13082018075128colegial_barbara_palma_villalobosjpg_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/174-lessonia-rufa",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 169
  },
  {
    uid: "83-falco-peregrinus",
    name: {
      spanish: "Halcón Peregrino",
      english: "Peregrine Falcon",
      latin: "Falco peregrinus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3582/18082018015505halcon_peregrino_carlos_monteverde_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3582/18082018015505halcon_peregrino_carlos_monteverde_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3582/18082018015505halcon_peregrino_carlos_monteverde_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/83-falco-peregrinus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 170
  },
  {
    uid: "81-pandion-haliaetus",
    name: {
      spanish: "Águila Pescadora",
      english: "Osprey",
      latin: "Pandion haliaetus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3584/20082018100118aguila_pescadora_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3584/20082018100118aguila_pescadora_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3584/20082018100118aguila_pescadora_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/81-pandion-haliaetus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 171
  },
  {
    uid: "243-geranoaetus-melanoleucus",
    name: {
      spanish: "Águila mora",
      english: "Black-chested Buzzard-Eagle",
      latin: "Geranoaetus melanoleucus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3587/20082018095811aguila_mora_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3587/20082018095811aguila_mora_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3587/20082018095811aguila_mora_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/243-geranoaetus-melanoleucus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 172
  },
  {
    uid: "72-cinereous-harrier",
    name: {
      spanish: "Vari",
      english: "Cinereous Harrier",
      latin: "Cinereous harrier"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3591/18082018101953vari_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3591/18082018101953vari_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3591/18082018101953vari_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/72-cinereous-harrier",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 173
  },
  {
    uid: "17-phalacrocorax-gaimardi",
    name: {
      spanish: "Cormorán Lile",
      english: "Red-legged Cormorant",
      latin: "Phalacrocorax gaimardi"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3594/13082018080235lile_camilo_maldonado_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3594/13082018080235lile_camilo_maldonado_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3594/13082018080235lile_camilo_maldonado_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/17-phalacrocorax-gaimardi",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 174
  },
  {
    uid: "124-sterna-trudeaui",
    name: {
      spanish: "Gaviotín Piquerito",
      english: "Snowy-crowned Tern",
      latin: "Sterna trudeaui"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3596/19082018083502gaviotin_piquerito_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3596/19082018083502gaviotin_piquerito_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3596/19082018083502gaviotin_piquerito_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/124-sterna-trudeaui",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 175
  },
  {
    uid: "175-colorhamphus-parvirostris",
    name: {
      spanish: "Viudita",
      english: "Patagonian Tyrant",
      latin: "Colorhamphus parvirostris"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3598/13082018101301viudita_barbara_palma_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3598/13082018101301viudita_barbara_palma_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3598/13082018101301viudita_barbara_palma_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/175-colorhamphus-parvirostris",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 176
  },
  {
    uid: "24-ardea-cocoi",
    name: {
      spanish: "Garza Cuca",
      english: "Cocoi Heron",
      latin: "Ardea cocoi"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3601/13082018080840garza_cuca_barbara_palma_villalobos_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3601/13082018080840garza_cuca_barbara_palma_villalobos_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3601/13082018080840garza_cuca_barbara_palma_villalobos_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/24-ardea-cocoi",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 177
  },
  {
    uid: "187-mimus-tenca",
    name: {
      spanish: "Tenca",
      english: "Chilean Mockingbird",
      latin: "Mimus tenca"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3604/15082018080535tenca_andre_vielma_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3604/15082018080535tenca_andre_vielma_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3604/15082018080535tenca_andre_vielma_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/187-mimus-tenca",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 178
  },
  {
    uid: "86-porphyriops-melanops",
    name: {
      spanish: "Taguita",
      english: "Spot-flanked Gallinule",
      latin: "Porphyriops melanops"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3607/18082018085636taguita_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3607/18082018085636taguita_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3607/18082018085636taguita_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/86-porphyriops-melanops",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 179
  },
  {
    uid: "30-phoenicoparrus-andinus",
    name: {
      spanish: "Parina Grande",
      english: "Andean Flamingo",
      latin: "Phoenicoparrus andinus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3609/2908201806343226082018032911parina_grande_ricardo_bitran_b.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3609/2908201806343226082018032911parina_grande_ricardo_bitran_b.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3609/2908201806343226082018032911parina_grande_ricardo_bitran_b.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/30-phoenicoparrus-andinus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 180
  },
  {
    uid: "130-zenaida-auriculata",
    name: {
      spanish: "Tórtola Común",
      english: "Eared Dove",
      latin: "Zenaida auriculata"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3612/18082018100202tortola_comun_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3612/18082018100202tortola_comun_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3612/18082018100202tortola_comun_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/130-zenaida-auriculata",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 181
  },
  {
    uid: "89-fulica-rufifrons",
    name: {
      spanish: "Tagua de Frente Roja",
      english: "Red-fronted Coot",
      latin: "Fulica rufifrons"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3615/22082018083952tagua_frente_roja_pablo_gutierrez_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3615/22082018083952tagua_frente_roja_pablo_gutierrez_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3615/22082018083952tagua_frente_roja_pablo_gutierrez_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/89-fulica-rufifrons",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 182
  },
  {
    uid: "178-tachuris-rubrigastra",
    name: {
      spanish: "Sietecolores",
      english: "Many-colored Rush-tyrant",
      latin: "Tachuris rubrigastra"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3618/13082018092703sietecolores_camilo_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3618/13082018092703sietecolores_camilo_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3618/13082018092703sietecolores_camilo_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/178-tachuris-rubrigastra",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 183
  },
  {
    uid: "64-oxyura-vittata",
    name: {
      spanish: "Pato Rana de Pico Delgado",
      english: "Lake Duck",
      latin: "Oxyura vittata"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3621/23082018065905pato_rana__de__pico__delgado__macho_rodrigo_reyes.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3621/23082018065905pato_rana__de__pico__delgado__macho_rodrigo_reyes.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3621/23082018065905pato_rana__de__pico__delgado__macho_rodrigo_reyes.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/64-oxyura-vittata",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 184
  },
  {
    uid: "90-vanellus-chilensis",
    name: {
      spanish: "Queltehue / Treile",
      english: "Southern Lapwing",
      latin: "Vanellus chilensis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3623/13082018085643queltehue_camilo_maldonado_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3623/13082018085643queltehue_camilo_maldonado_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3623/13082018085643queltehue_camilo_maldonado_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/90-vanellus-chilensis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 185
  },
  {
    uid: "52-anas-versicolor",
    name: {
      spanish: "Pato Capuchino",
      english: "Silver Teal",
      latin: "Anas versicolor"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3626/20082018065818pato_capuchino_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3626/20082018065818pato_capuchino_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3626/20082018065818pato_capuchino_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/52-anas-versicolor",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 186
  },
  {
    uid: "172-muscisaxicola-albilora",
    name: {
      spanish: "Dormilona de Ceja Blanca",
      english: "White-browed Ground-tyrant",
      latin: "Muscisaxicola albilora"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3628/17082018095838dormilonacejablanca_carlos_monteverde_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3628/17082018095838dormilonacejablanca_carlos_monteverde_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3628/17082018095838dormilonacejablanca_carlos_monteverde_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/172-muscisaxicola-albilora",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 187
  },
  {
    uid: "15-pelecanus-thagus",
    name: {
      spanish: "Pelícano Común",
      english: "Peruvian Pelican",
      latin: "Pelecanus thagus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3630/18082018073325pelicano_comun_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3630/18082018073325pelicano_comun_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3630/18082018073325pelicano_comun_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/15-pelecanus-thagus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 188
  },
  {
    uid: "234-sterna-hirundo",
    name: {
      spanish: "Gaviotín Boreal",
      english: "Common Tern",
      latin: "Sterna hirundo"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3632/2908201807102021082018045357gaviotin_boreal_gary_vause_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3632/2908201807102021082018045357gaviotin_boreal_gary_vause_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3632/2908201807102021082018045357gaviotin_boreal_gary_vause_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/234-sterna-hirundo",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 189
  },
  {
    uid: "11-spheniscus-humboldti",
    name: {
      spanish: "Pingüino de Humboldt",
      english: "Humboldt Penguin",
      latin: "Spheniscus humboldti"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3634/13082018092252pinguino_camilo_maldonado_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3634/13082018092252pinguino_camilo_maldonado_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3634/13082018092252pinguino_camilo_maldonado_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/11-spheniscus-humboldti",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 190
  },
  {
    uid: "198-phrygilus-alaudinus",
    name: {
      spanish: "Platero",
      english: "Band-tailed Sierra-finch",
      latin: "Phrygilus alaudinus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3637/19082018094050platero_hembra_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3637/19082018094050platero_hembra_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3637/19082018094050platero_hembra_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/198-phrygilus-alaudinus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 191
  },
  {
    uid: "36-chloephaga-hybrida",
    name: {
      spanish: "Caranca",
      english: "Kelp Goose",
      latin: "Chloephaga hybrida"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3640/24082018043244carancas_roderich_barria_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3640/24082018043244carancas_roderich_barria_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3640/24082018043244carancas_roderich_barria_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/36-chloephaga-hybrida",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 192
  },
  {
    uid: "43-tachyeres-pteneres",
    name: {
      spanish: "Quetru No Volador",
      english: "Flightless  Steamer-duck",
      latin: "Tachyeres pteneres"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3643/23082018064205quetru_no_volador_macho_rodrigo_reyes_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3643/23082018064205quetru_no_volador_macho_rodrigo_reyes_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3643/23082018064205quetru_no_volador_macho_rodrigo_reyes_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/43-tachyeres-pteneres",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 193
  },
  {
    uid: "112-gallinago-stricklandii",
    name: {
      spanish: "Becasina grande",
      english: "Fuegian Snipe",
      latin: "Gallinago stricklandii"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3645/23082018071447becasina_grande_claudia_silva_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3645/23082018071447becasina_grande_claudia_silva_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3645/23082018071447becasina_grande_claudia_silva_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/112-gallinago-stricklandii",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 194
  },
  {
    uid: "157-cinclodes-patagonicus",
    name: {
      spanish: "Churrete común",
      english: "Dark-bellied Cinclodes",
      latin: "Cinclodes patagonicus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3648/05092018090437churrete_comun_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3648/05092018090437churrete_comun_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3648/05092018090437churrete_comun_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/157-cinclodes-patagonicus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 195
  },
  {
    uid: "142-athene-cunicularia",
    name: {
      spanish: "Pequén",
      english: "Burrowing Owl",
      latin: "Athene cunicularia"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3650/13082018082633pequen_camilo_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3650/13082018082633pequen_camilo_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3650/13082018082633pequen_camilo_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/142-athene-cunicularia",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 196
  },
  {
    uid: "118-larus-belcheri",
    name: {
      spanish: "Gaviota Peruana",
      english: "Belcher´s Gull",
      latin: "Larus belcheri"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3653/04082018120235_gaviota_peruana_leslie_brackenridge_b.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3653/04082018120235_gaviota_peruana_leslie_brackenridge_b.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3653/04082018120235_gaviota_peruana_leslie_brackenridge_b.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/118-larus-belcheri",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 197
  },
  {
    uid: "171-agriornis-montanus",
    name: {
      spanish: "Mero Gaucho",
      english: "Black-billed Shrike-tyrant",
      latin: "Agriornis montanus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3655/01092018090613mero_gaucho_juvenil_sergio_moya_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3655/01092018090613mero_gaucho_juvenil_sergio_moya_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3655/01092018090613mero_gaucho_juvenil_sergio_moya_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/171-agriornis-montanus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 198
  },
  {
    uid: "209-oreotrochilus-leucopleurus",
    name: {
      spanish: "Picaflor Cordillerano",
      english: "White-sided Hillstar",
      latin: "Oreotrochilus leucopleurus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3657/14082018123034picaflor_cordillerano_camilo_maldonado_marin_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3657/14082018123034picaflor_cordillerano_camilo_maldonado_marin_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3657/14082018123034picaflor_cordillerano_camilo_maldonado_marin_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/209-oreotrochilus-leucopleurus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 199
  },
  {
    uid: "110-calidris-bairdii",
    name: {
      spanish: "Playero de Baird",
      english: "Baird s sandpiper",
      latin: "Calidris bairdii"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3659/13082018084920playero_de_baird_leslie_brackenridge_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3659/13082018084920playero_de_baird_leslie_brackenridge_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3659/13082018084920playero_de_baird_leslie_brackenridge_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/110-calidris-bairdii",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 200
  },
  {
    uid: "180-anairetes-parulus",
    name: {
      spanish: "Cachudito",
      english: "Tufted Tit-tyrant",
      latin: "Anairetes parulus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3662/04082018113001cachudito_bp.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3662/04082018113001cachudito_bp.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3662/04082018113001cachudito_bp.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/180-anairetes-parulus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 201
  },
  {
    uid: "182-pygochelidon-cyanoleuca",
    name: {
      spanish: "Golondrina de Dorso Negro",
      english: "Blue-and-white Swallow",
      latin: "Pygochelidon cyanoleuca"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3666/01092018083836golondrina_de_dorso_negro_pio_marshall_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3666/01092018083836golondrina_de_dorso_negro_pio_marshall_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3666/01092018083836golondrina_de_dorso_negro_pio_marshall_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/182-pygochelidon-cyanoleuca",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 202
  },
  {
    uid: "135-psilopsiagon-aurifrons",
    name: {
      spanish: "Perico Cordillerano",
      english: "Mountain Parakeet",
      latin: "Psilopsiagon aurifrons"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3668/13082018082750perico_cordillerano_camilo_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3668/13082018082750perico_cordillerano_camilo_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3668/13082018082750perico_cordillerano_camilo_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/135-psilopsiagon-aurifrons",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 203
  },
  {
    uid: "9-oceanites-oceanicus",
    name: {
      spanish: "Golondrina de Mar",
      english: "Wilson s storm-petrel",
      latin: "Oceanites oceanicus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3670/01092018084323golondrina_de_mar_de_collar_pio_marshall_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3670/01092018084323golondrina_de_mar_de_collar_pio_marshall_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3670/01092018084323golondrina_de_mar_de_collar_pio_marshall_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/9-oceanites-oceanicus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 204
  },
  {
    uid: "150-ceryle-torquata",
    name: {
      spanish: "Martín Pescador",
      english: "Ringed Kingfisher",
      latin: "Ceryle torquata"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3672/23082018123925martin_pescador_richard_wolf_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3672/23082018123925martin_pescador_richard_wolf_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3672/23082018123925martin_pescador_richard_wolf_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/150-ceryle-torquata",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 205
  },
  {
    uid: "34-chloephaga-melanoptera",
    name: {
      spanish: "Piuquén",
      english: "Andean Goose",
      latin: "Chloephaga melanoptera"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3675/18082018082601piuquen_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3675/18082018082601piuquen_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3675/18082018082601piuquen_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/34-chloephaga-melanoptera",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 206
  },
  {
    uid: "119-larus-modestus",
    name: {
      spanish: "Gaviota Garuma",
      english: "Grey Gull",
      latin: "Larus modestus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3679/04082018092450gaviota_garuma_leslie_brackenridge_b.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3679/04082018092450gaviota_garuma_leslie_brackenridge_b.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3679/04082018092450gaviota_garuma_leslie_brackenridge_b.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/119-larus-modestus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 207
  },
  {
    uid: "18-phalacrocorax-bougainvillii",
    name: {
      spanish: "Guanay",
      english: "Guanay Cormorant",
      latin: "Phalacrocorax bougainvillii"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3683/24082018044401guanay_jorge_abarca_web_2.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3683/24082018044401guanay_jorge_abarca_web_2.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3683/24082018044401guanay_jorge_abarca_web_2.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/18-phalacrocorax-bougainvillii",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 208
  },
  {
    uid: "122-chroicocephalus-maculipennis",
    name: {
      spanish: "Gaviota Cáhuil",
      english: "Brown-hooded Gull",
      latin: "Chroicocephalus maculipennis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3685/04082018123730gaviota_cahuil_leslie_brackenridge_b.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3685/04082018123730gaviota_cahuil_leslie_brackenridge_b.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3685/04082018123730gaviota_cahuil_leslie_brackenridge_b.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/122-chroicocephalus-maculipennis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 209
  },
  {
    uid: "141-glaucidium-nana",
    name: {
      spanish: "Chuncho",
      english: "Austral pygmy-owl",
      latin: "Glaucidium nana"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3688/13082018072628chuncho_camilo_maldonado_marin_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3688/13082018072628chuncho_camilo_maldonado_marin_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3688/13082018072628chuncho_camilo_maldonado_marin_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/141-glaucidium-nana",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 210
  },
  {
    uid: "184-cistothorus-platensis",
    name: {
      spanish: "Chercán de las Vegas",
      english: "Sedge Wren",
      latin: "Cistothorus platensis"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3691/19082018012649chercan_de_lasvegas_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3691/19082018012649chercan_de_lasvegas_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3691/19082018012649chercan_de_lasvegas_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/184-cistothorus-platensis",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 211
  },
  {
    uid: "148-eulidia-yarrellii",
    name: {
      spanish: "Picaflor de Arica",
      english: "Chilean Woodstar",
      latin: "Eulidia yarrellii"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3695/20082018085521picaflor_de_arica_macho_marcos_baumann_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3695/20082018085521picaflor_de_arica_macho_marcos_baumann_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3695/20082018085521picaflor_de_arica_macho_marcos_baumann_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/148-eulidia-yarrellii",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 212
  },
  {
    uid: "56-anas-cyanoptera",
    name: {
      spanish: "Pato Colorado",
      english: "Cinnamon Teal",
      latin: "Anas cyanoptera"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3698/19082018091938pato_colorado_macho_pedro_valencia_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3698/19082018091938pato_colorado_macho_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3698/19082018091938pato_colorado_macho_pedro_valencia_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/56-anas-cyanoptera",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 213
  },
  {
    uid: "31-phoenicoparrus-jamesi",
    name: {
      spanish: "Parina Chica",
      english: "Puna Flamingo",
      latin: "Phoenicoparrus jamesi"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3700/26082018033455parina_chica_hector_bottai_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3700/26082018033455parina_chica_hector_bottai_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3700/26082018033455parina_chica_hector_bottai_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/31-phoenicoparrus-jamesi",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 214
  },
  {
    uid: "10-spheniscus-magellanicus",
    name: {
      spanish: "Pingüino de Magallanes",
      english: "Magellanic Penguin",
      latin: "Spheniscus magellanicus"
    },
    images: {
      main:
        "https://aves.ninjas.cl/api/site/assets/files/3702/28082018011241pinguino_de_magallanes_paula_de_marco_web.200x0.jpg",
      full:
        "https://aves.ninjas.cl/api/site/assets/files/3702/28082018011241pinguino_de_magallanes_paula_de_marco_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3702/28082018011241pinguino_de_magallanes_paula_de_marco_web.200x0.jpg"
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/10-spheniscus-magellanicus",
      parent: "https://aves.ninjas.cl/api/birds"
    },
    sort: 215
  }
];

let grid = document.querySelector(".grid-container");

function playSound(audioElement) {
  audioElement.play();
}

function stopSound(audioElement) {
  audioElement.pause();
}

for (const bird of birds) {
  // Create row for bird
  let row = document.createElement("div");
  row.className = "grid-item";

  // Other bird information goes here
  var name = document.createElement("h2");
  name.innerHTML = bird.name.spanish;

  var englishName = document.createElement("p");
  englishName.innerHTML = bird.name.english + " / " + bird.name.latin;
  englishName.classList.add("habitat");
  // var text = document.createTextNode(bird.name.english);
  // englishName.appendChild(text + " / " + bird.name.latin);
  // englishName.innerHTML = bird.name.english;

  // var latinName = document.createElement("p");
  // latinName.innerHTML = bird.name.latin;

  // Create image element for bird
  const image = document.createElement("img");
  image.src = bird.images.full;

  let habitat = document.createElement("p");

  // Fetch audio information for bird
  fetch(bird._links.self)
    .then((response) => response.json())
    .then((data) => {
      if (data.audio && data.audio.file) {
        const audio = new Audio(data.audio.file);
        // Add event to play sound on mouseover
        image.addEventListener("mouseover", () => {
          playSound(audio);
        });

        // Add event to pause sound on mouseout
        image.addEventListener("mouseout", () => {
          stopSound(audio);
        });

        // row.appendChild(soundIcon);
        row.classList.add("music");

        habitat.innerHTML = data.habitat;
        habitat.classList.add("habitat");
      }
    });
  row.appendChild(image);
  row.insertAdjacentHTML("beforeend", "<h3>" + bird.name.spanish + "</h3>");
  row.appendChild(englishName);
  // row.appendChild(latinName);
  row.appendChild(habitat);
  grid.appendChild(row);
}

const toggleButton = document.getElementById("toggle-dark-mode");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleButton.textContent = document.body.classList.contains("dark-mode")
    ? "🌞"
    : "🌙";
});
