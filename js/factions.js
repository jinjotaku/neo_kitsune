const FactionsDB = {
    JSA: {
        id: "JSA",
        name: "JSA",
        // Aquí defines dinámicamente los botones de sectorial para esta facción
        sectorials: [
            { id: "ALL", name: "TODAS (JSA)" },
            { id: "JSA", name: "JSA GENÉRICO" },
            { id: "Shindenbutai", name: "SHINDENBUTAI" },
            { id: "Oban", name: "OBAN" }
        ],
        troops:  [
            
            {
                id: "senku",
                name: "Senku Troops",
                type: "LI",
                sectorials: ["JSA", "Shindenbutai"],
                badge: "N5 Shinden",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=SK",
                notes: "Infantería de línea de voluntarios Shindenbutai en Shinju. Fiables y con excelente soporte de fuego táctico.",
                ava: "5",
                stats: { mov: "10-10", cc: 15, bs: 11, ph: 10, wip: 12, arm: 0, bts: 3, w: 1, s: 2 },
                skills: ["Coraje"],
                profiles: [
                    { id: "sen1", name: "Fusil Combi", cost: 9, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "sen2", name: "Fusil Combi (Teniente)", cost: 9, swc: 0.5, lt: true, order: "Regular", imp: "No" },
                    { id: "sen3", name: "Fusil Combi + Sanitario (Paramédico)", cost: 11, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "sen4", name: "Fusil Combi + Observador Artilleria", cost: 10, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "sen5", name: "Ametralladora", cost: 17, swc: 1, lt: false, order: "Regular", imp: "No" }
                ]
            },
            {
                id: "metsuke",
                name: "Metsuke Patrols",
                type: "LI",
                sectorials: ["Shindenbutai"],
                badge: "Mando N5",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=MT",
                notes: "Unidades de vigilancia militar. Tienen funciones preventivas de infoguerra.",
                ava: "2",
                stats: { mov: "10-10", cc: 21, bs: 12, ph: 12, wip: 13, arm: 1, bts: 3, w: 1, s: 2 },
                skills: ["Holoproyector","Artes Marciales N2","Atque CD (+1R)","Ataque Sorpresa (-3)","Contrainteligencia","Inmnidad (Shock)","Coraje", "Sigilo"],
                profiles: [
                    { id: "met1", name: "Strategos N1 Teniente + Pulso Flash + Nanopulser + Pistola Pesada + Arma CC Shock (PS=7)", cost: 22, swc: 0, lt: true, order: "Regular", imp: "No" },
                    { id: "met2", name: "Teniente 1 Orden + Pulso Flash + Nanopulser + Pistola Pesada + Arma CC Shock (PS=7)", cost: 23, swc: 1, lt: true, order: "Regular", imp: "No" }
                ]
            },
             {
                id: "keisotsu",
                name: "Keisotsu Butai",
                type: "LI",
                sectorials: ["JSA","Oban"],
                badge: "Tropa Base",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=KB",
                notes: "Infantería de línea básica de la JSA. Clave para ganar volumen de órdenes de forma económica.",
                ava: "Total",
                stats: { mov: "10-10", cc: 17, bs: 11, ph: 10, wip: 12, arm: 1, bts: 0, w: 1, s: 2 },
                skills: ["Coraje"],
                profiles: [
                    { id: "kei1", name: "Fusil Combi", cost: 10, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "kei2", name: "Fusil Combi (Teniente)", cost: 10, swc: 0.5, lt: true, order: "Regular", imp: "No" },
                    { id: "kei3", name: "Fusil Combi + Sanitario (Paramedic)", cost: 12, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "kei4", name: "Fusil Combi + Pulso Flash (ps=6) + Observador Artilleria", cost: 11, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "kei5", name: "Ametralladora (HMG)", cost: 18, swc: 1, lt: false, order: "Regular", imp: "No" },
                    { id: "kei6", name: "Lanzamisiles", cost: 15, swc: 1.5, lt: false, order: "Regular", imp: "No" },
                    { id: "kei7", name: "Fusil Combi + CrazyKoala + Hacker (Disp. de Hackeo: ECM Hacker -6)", cost: 16, swc: 0.5, lt: false, order: "Regular", imp: "No" }
                ]
            },
              {
                id: "kempeitai",
                name: "Kempeitai",
                type: "LI",
                sectorials: ["JSA", "Oban"],
                badge: "Mando",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=KP",
                notes: "Oficiales políticos y de seguridad militar. Aseguran la cadena de mando si cae el Teniente.",
                ava: "3",
                stats: { mov: "10-10", cc: 17, bs: 12, ph: 10, wip: 14, arm: 1, bts: 0, w: 1, s: 2 },
                skills: ["Sexto Sentido", "Coraje", "N2"],
                profiles: [
                    { id: "kemp1", name: "Cadena de Mando + Escopeta Abordaje + Arma CC PARA (-3)", cost: 17, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "kemp2", name: "Cadena de Mando + Fusil Combi + Arma CC PARA (-3)", cost: 20, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "kemp3", name: "Spitfire + Arma CC PARA (-3)", cost: 22, swc: 1, lt: true, order: "Regular", imp: "No" },
                    { id: "kemp4", name: "Visor Multiespectral N2 + Fusil Precision Shock + Arma CC PARA (-3)", cost: 22, swc: 1, lt: true, order: "Regular", imp: "No" }
                ]
            },
	    {
                id: "kyosho",
                name: "Kyosho Saibayunitto",
                type: "LI",
                sectorials: ["JSA", "Shindenbutai"],
                badge: "Mando",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=KP",
                notes: "Oficiales políticos y de seguridad militar. Aseguran la cadena de mando si cae el Teniente.",
                ava: "1",
                stats: { mov: "10-10", cc: 17, bs: 11, ph: 10, wip: 13, arm: 1, bts: 6, w: 1, s: 2 },
                skills: ["Hacker (Upgrade: Control total (TS-2))"],
                profiles: [
                    { id: "sho1", name: "Hacker Asesino + Fusil Multi + Cibermina + Pistola Breaker", cost: 20, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "sho2", name: "Hacker + Fusil Multi + Cibermina + Pistola Breaker", cost: 20, swc: 0, lt: false, order: "Regular", imp: "No" }
                ]
            },
	    {
                id: "sacha",
                name: "Sacha",
                type: "LI",
                sectorials: ["JSA", "Shindenbutai", "Oban"],
                badge: "Mercenaria",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=KP",
                notes: "Mercenario.",
                ava: "1",
                stats: { mov: "10-10", cc: 17, bs: 11, ph: 12, wip: 13, arm: 1, bts: 3, w: 1, s: 2 },
                skills: ["Botin", "Desp. Avanzado (+10cm)", "Operativo Especialista"],
                profiles: [
                    { id: "sch1", name: "Pulso flash + Granadas E/M (+1R) + Pistola Aturdidora (+1R)", cost: 6, swc: 0, lt: false, order: "Irregular", imp: "No" },
                    
                ]
            },
	   {
                id: "taguraida",
                name: "Taguraida, piloto de TAG",
                type: "LI",
                sectorials: ["JSA", "Shindenbutai", "Oban"],
                badge: "Apoyo",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=KP",
                notes: "Piloto de los TAGS de JSA.",
                ava: "1",
                stats: { mov: "10-10", cc: 21, bs: 12, ph: 12, wip: 13, arm: 0, bts: 0, w: 1, s: 2 },
                skills: ["Artes Marciales N1", "Coraje", "Sigilo", "TAGCom (Esquivar (FIS+3)","Gizmokit (Fis+1)"],
                profiles: [
                    { id: "tgu1", name: "Observador de Artilleria + Escopeta Ligera + Pulso flash + Cargas-D + Arma CC Shock (PS=7)", cost: 11, swc: 0, lt: false, order: "Regular", imp: "No" }
                    
                ]
            },
	   {
                id: "warcors",
                name: "Warcors, reporteros de guerra",
                type: "LI",
                sectorials: ["JSA", "Shindenbutai", "Oban"],
                badge: "Mercenaria",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=KP",
                notes: "Warcors, reporteros de guerra.",
                ava: "1",
                stats: { mov: "10-10", cc: 11, bs: 9, ph: 11, wip: 13, arm: 0, bts: 0, w: 1, s: 2 },
                skills: ["Reportero"],
                profiles: [
                    { id: "cors1", name: "Pulso flash + Pistola Aturdidora + Arma CC PARA (-3) + Visor 360", cost: 3, swc: 0, lt: false, order: "Irregular", imp: "No" },
		    { id: "cors2", name: "Pulso flash + Pistola Aturdidora + Arma CC PARA (-3) + Sexto Sentido", cost: 3, swc: 0, lt: false, order: "Irregular", imp: "No" }
                    
                ]
            },
            {
                id: "tokusetsu",
                name: "Tokusetsu Butai",
                type: "LI",
                sectorials: ["JSA", "Shindenbutai"],
                badge: "Especialistas",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=TK",
                notes: "Tropa técnica de asistencia médica e ingeniería mecánica. Indispensables en torneos.",
                ava: "2",
                stats: { mov: "10-10", cc: 15, bs: 11, ph: 10, wip: 13, arm: 1, bts: 0, w: 1, s: 2 },
                skills: ["Coraje"],
                profiles: [
                    { id: "tok1", name: "Médico + Fusil Combi", cost: 14, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "tok2", name: "Ingeniero + Fusil Combi + Cargas D + Desactivador + Gizmokit)", cost: 14, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "tok3", name: "Ingeniero + Fusil Combi + Cargas D + Desactivador + Gizmokit + Cobertura Desplegable)", cost: 15, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "tok4", name: "Ingeniero + Fusil Combi + Cargas D + Desactivador + Gizmokit+ Torreta (F. Combi))", cost: 17, swc: 0, lt: false, order: "Regular", imp: "No" }


                ]
            },
             {
                id: "yuriko",
                name: "Yuriko Oda",
                type: "LI",
                sectorials: ["JSA", "Shindenbutai", "Oban"],
                badge: "Héroe Especialista",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=YO",
                notes: "Ingeniera estrella de la JSA. Esencial para mantener activos a los Remotos y TAGs bajo fuego.",
                ava: "1",
                stats: { mov: "10-10", cc: 15, bs: 12, ph: 11, wip: 13, arm: 1, bts: 3, w: 1, s: 2 },
                skills: ["Ingeniero","Minador", "Cargas-D", "Mimetismo (-3)", "Esquivar (+3)", "Esquivar (+2,5 cm)", "Inmunidad (Shock)"],
                profiles: [
                    { id: "yo1", name: "Fusil Combi + Panzerfaust", cost: 23, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "yo2", name: "Fusil Combi + Lanzaminas E/M + CC AP", cost: 25, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "yo3", name: "(Desp. Avanzado) + Fusil Combi + Lanzaminas E/M + CC AP", cost: 28, swc: 0.5, lt: false, order: "Regular", imp: "No" },
                ]
            },
            {
                id: "jizamurai",
                name: "Jizamurai Hanryodan",
                type: "MI",
                sectorials: ["JSA", "Shindenbutai"],
                badge: "Defensiva",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=JZ",
                notes: "Unidad militar regional defensiva. Gran potencia de fuego reactiva.",
                ava: "1",
                stats: { mov: "15-5", cc: 13, bs: 13, ph: 13, wip: 13, arm: 3, bts: 3, w: 1, s: 2 },
                skills: ["Esquivar (+3)", "Esquiva (+5cm)", "Artes Marciales N3", "Intuicion de combate", "Mimetismo (-3)","Sigilo" ],
                profiles: [
                    { id: "jiz1", name: "Escopeta ligera + Arma CC DA (PS=5)", cost: 21, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "jiz2", name: "Escopeta ligera + Arma CC EM (PS=5)", cost: 21, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "jiz3", name: "Subfusil + Arma CC DA (PS=5)", cost: 22, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "jiz4", name: "Escopeta Ligera + Thunderbolt + Arma CC DA (PS=5)", cost: 24, swc: 0, lt: false, order: "Regular", imp: "No" }
                ]
            },
            {
                id: "raiden",
                name: "Raiden Seibutai",
                type: "MI",
                sectorials: ["JSA", "Shindenbutai"],
                badge: "Embozada",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=RD",
                notes: "Emboscadores tácticos. Escudan el avance usando sus visores y letales misiles.",
                ava: "3",
                stats: { mov: "10-10", cc: 16, bs: 13, ph: 11, wip: 13, arm: 3, bts: 3, w: 1, s: 2 },
                skills: ["Mimetismo (-3)", "Despliegue Oculto", "Visor X", "Ataque Sorpresa (-3)","Coraje","Minador"],
                profiles: [
                    { id: "rai1", name: "Lanzamisiles + Pistola Pesada", cost: 25, swc: 1.5, lt: false, order: "Regular", imp: "No" },
                    { id: "rai2", name: "Lanzacohetes Pesado (HRL) + Minas Shock", cost: 33, swc: 2, lt: false, order: "Regular", imp: "No" }
                ]
            },
	    {
                id: "shurayuki",
                name: "Shurayuki Onna Koroshi-ya",
                type: "MI",
                sectorials: ["JSA", "Shindenbutai"],
                badge: "Veterana",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=RD",
                notes: "Emboscadores tácticos. Escudan el avance usando sus visores y letales misiles.",
                ava: "1",
                stats: { mov: "10-10", cc: 23, bs: 12, ph: 12, wip: 13, arm: 2, bts: 3, w: 1, s: 2 },
                skills: ["Holomascara", "Artes Marciales N4", "Visor X","Sin Incapacidad por Herida" ,"Ataque CD (Shock)","Sigilo","Tropa Religiosa"],
                profiles: [
                    { id: "shur1", name: "Fusil Multi + NanoPulser + Arma CC Viral (PS=5)", cost: 30, swc: 0, lt: false, order: "Regular", imp: "No" },
                  
                ]
            },
	    {
                id: "sohei",
                name: "Sohei Tsugekitai",
                type: "MI",
                sectorials: ["JSA", "Shindenbutai"],
                badge: "Veterana",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=RD",
                notes: "Emboscadores tácticos. Escudan el avance usando sus visores y letales misiles.",
                ava: "1",
                stats: { mov: "10-10", cc: 23, bs: 11, ph: 13, wip: 13, arm: 3, bts: 3, w: 1, s: 2 },
                skills: ["Esquivar (+5cm)", "Artes Marciales N3", "Frenesi","Inmunidad (Shock)" ,"Sigilo","Tropa Religiosa"],
                profiles: [
                    { id: "soh1", name: "Subfusil + Granadas + Arma CC AP+Shock (PS=5)", cost: 16, swc: 0, lt: false, order: "Regular", imp: "No" },
		    { id: "soh2", name: "Pulzar (+1R) + Granadas + Pistola Asalto + Arma CC AP+Shock (PS=5)", cost: 16, swc: 0, lt: false, order: "Regular", imp: "No" }
                  
                ]
            },

            {
                id: "genbutai",
                name: "Genbutai",
                type: "MI",
                sectorials: ["JSA", "Oban"],
                badge: "Especialista",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=RD",
                notes: "Emboscadores tácticos. Escudan el avance usando sus visores y letales misiles.",
                ava: "1",
                stats: { mov: "10-10", cc: 18, bs: 13, ph: 11, wip: 13, arm: 3, bts: 6, w: 1, s: 2 },
                skills: ["Ataque CD (TS-1)","Fogueado","Inmunidad (AP)", "Inmunidad (Shock)", "Tropa Religiosa"],
                profiles: [
                    { id: "gen1", name: "Escopeta Abordaje + Chain-colt + Pistola Breaker + Arma CC PARA (-6)", cost: 18, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "gen2", name: "Sanitario + Escopeta Abordaje + Chain-colt + Pistola Breaker + Arma CC PARA (-6)", cost: 20, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "gen3", name: "Ingeniero + Subfusil + Panzerfaust + Cargas-D + Pistola Breaker + Arma CC PARA (-6)", cost: 23, swc: 0, lt: false, order: "Regular", imp: "No" },
		    { id: "gen4", name: "Operativo Especialista + Fusil Multi + Lanzallamas Pesado + Cargas-D + Pistola Breaker + Arma CC PARA (-6)", cost: 26, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "gen5", name: "Suboficial + Red Fury + Pistola Breaker + Arma CC PARA (-6)", cost: 29, swc: 1, lt: false, order: "Regular", imp: "No" }
                ]
            },

             {
                id: "tanuki",
                name: "Tanuki",
                type: "MI",
                sectorials: ["Shindenbutai"],
                badge: "Especialista",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=RD",
                notes: "Emboscadores tácticos. Escudan el avance usando sus visores y letales misiles.",
                ava: "5",
                stats: { mov: "10-10", cc: 17, bs: 13, ph: 11, wip: 13, arm: 2, bts: 3, w: 1, s: 2 },
                skills: ["N2","Fogueado","Esquivar (+3)", "Inmunidad (Shock)", "Terreno Total"],
                profiles: [
                    { id: "tnk1", name: "Cadena de mando + Escopeta Abordaje + Chain-colt + Pulso flash)", cost: 18, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "tnk2", name: "Sanitario + Escopeta Abordaje + Contender", cost: 20, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "tnk3", name: "Operativo Especialista + Fusil Multi + Cargas-D + Desactivador Gizmokit", cost: 19, swc: 0, lt: false, order: "Regular", imp: "No" },
		    { id: "tnk4", name: "Hacker + Subfusil + Disco Baller", cost: 20, swc: 0.5, lt: false, order: "Regular", imp: "No" },
                    { id: "tnk5", name: "Fusil Francotirador Multi + Visor Multiespectral N2 ", cost: 27, swc: 1.5, lt: false, order: "Regular", imp: "No" },
                    { id: "tnk6", name: "Teniente + Ametralladora + Visor Multiespectral N2 ", cost: 29, swc: 1, lt: true, order: "Regular", imp: "No" },
                    { id: "tnk7", name: "Ametralladora + Visor Multiespectral N2 ", cost: 29, swc: 1.5, lt: false, order: "Regular", imp: "No" }
                ]
            },

            {
                id: "teishin",
                name: "Teishin Guntai",
                type: "MI",
                sectorials: ["JSA", "Shindenbutai"],
                badge: "Infiltración",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=TS",
                notes: "Operadores encubiertos técnicos. Perfectos para hackear consolas y asegurar misiones.",
                ava: "2",
                stats: { mov: "10-10", cc: 21, bs: 11, ph: 12, wip: 13, arm: 2, bts: 3, w: 1, s: 2 },
                skills: ["Artes Marciales N1", "Coraje", "Esquivar (+2,5cm)", "Paracaidista", "Salto de combate", "Sigilo", "Super Salto" ],
                profiles: [
                    { id: "teish1", name: "Escopeta de Abordaje + Cargas D + Minas Shock + Arma CC Shock (PS=7)", cost: 19, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "teish2", name: "Hacker Asesino + Escopeta de Abordaje + Cargas D + Minas Shock + Arma CC Shock (PS=7)", cost: 21, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "teish3", name: "Hacker + Escopeta de Abordaje + Cargas D + Minas Shock + Arma CC Shock (PS=7)", cost: 21, swc: 0.5, lt: false, order: "Regular", imp: "No" },
                    { id: "teish4", name: "Observador Artilleria + Subfusil + Pulso Flash + Cargas D + Minas Shock + Arma CC Shock (PS=7)", cost: 19, swc: 0.5, lt: false, order: "Regular", imp: "No" },
                ]
            },

            {
                id: "hatamoto",
                name: "Hatamoto Imperial Guard",
                type: "HI",
                sectorials: ["JSA", "Shindenbutai"],
                badge: "Élite N5",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=HT",
                notes: "Unidades samuráis de élite. Equipados con Nanoscreen y letales espadas de Monofilamento.",
                ava: "2",
                stats: { mov: "15-5", cc: 23, bs: 13, ph: 13, wip: 13, arm: 2, bts: 6, w: 2, s: 2 },
                skills: ["Nanoscreen", "Visor X","Artes Marciales N4","Coraje","Frenesi","Esquivar (+5cm)","Mimetismo (-3)", "Intuicion de Combate", "Guerrero Nato", "Operativo Especialista", "Sigilo", "Sin Cobertura"],
                profiles: [
                    { id: "hat1", name: "Red Fury + Pistola Pesada + Arma CC Monofilamento + Arma E/M (PS=4)", cost: 40, swc: 1, lt: false, order: "Regular", imp: "No" },
                    { id: "hat2", name: "Teniente (+1 Orden) + Red Fury + Pistola Pesada + Arma CC Monofilamento + Arma E/M (PS=4)", cost: 38, swc: 0, lt: true, order: "Regular", imp: "No" },
                    { id: "hat3", name: "Carabina de Plasma + Pistola Pesada + Arma CC Monofilamento + Arma E/M (PS=4)", cost: 34, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "hat4", name: "Teniente (+1 Orden) + Carabina de Plasma + Pistola Pesada + Arma CC Monofilamento + Arma E/M (PS=4)", cost: 36, swc: 0, lt: true, order: "Regular", imp: "No" },
                    { id: "hat5", name: "Spitfire + Pistola Pesada + Arma CC Monofilamento + Arma E/M (PS=4)", cost: 41, swc: 1.5, lt: false, order: "Regular", imp: "No" },
                    { id: "hat6", name: "Teniente (+1 Orden) + Spitfire + Pistola Pesada + Arma CC Monofilamento + Arma E/M (PS=4)", cost: 39, swc: 0, lt: true, order: "Regular", imp: "No" }

                ]
            },
            {
                id: "shizoku",
                name: "Shizoku FTO",
                type: "HI",
                sectorials: ["JSA", "Shindenbutai"],
                badge: "Pesada N5",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=SZ",
                notes: "Escoltas pesados. Cuentan con despliegues estratégicos agresivos.",
                ava: "1",
                stats: { mov: "15-5", cc: 22, bs: 13, ph: 14, wip: 13, arm: 5, bts: 6, w: 2, s: 2 },
                skills: ["Esquivar (+5cm)", "Mimetismo (-3)","Berserk","Frenesí","Sigilo","Artes Marciales N3", "Coraje"],
                profiles: [
                    { id: "shiz1", name: "Ametralladora AP + Chain Rifle + Arma CC AP+DA (PS=4)", cost: 43, swc: 1.5, lt: false, order: "Regular", imp: "No" },
                    { id: "shiz2", name: "Lanzacohetes pesado (+1R) + Chain Rifle + Arma CC AP+DA (PS=4)", cost: 33, swc: 1.5, lt: false, order: "Regular", imp: "No" }
                ]
            },
            {
                id: "kazuraba",
                name: "Kazuraba",
                type: "HI",
                sectorials: ["Shindenbutai"],
                badge: "Mercenaria",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=SZ",
                notes: "Escoltas pesados. Cuentan con despliegues estratégicos agresivos.",
                ava: "1",
                stats: { mov: "15-5", cc: 18, bs: 12, ph: 12, wip: 13, arm: 3, bts: 6, w: 2, s: 2 },
                skills: ["Esquivar (+3)", "Ataque CD (+1R)","Botin","Operativo Especialista","Tecnoorganico","Inmunidad (IMM-B)"],
                profiles: [
                    { id: "kaz1", name: "Fusil lanzaadhesivo + Pulso flash + Granadas E/M + Pistola Aturdidora", cost: 19, swc: 0, lt: false, order: "Iregular", imp: "No" }
                ]
            },
            {
                id: "domaru",
                name: "Domaru Butai",
                type: "HI",
                sectorials: ["JSA", "Oban"],
                badge: "Samurái",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=DM",
                notes: "Servoarmaduras tradicionales para confrontación brutal. Auténtica vanguardia guerrera.",
                ava: "2",
                stats: { mov: "10-10", cc: 24, bs: 12, ph: 14, wip: 13, arm: 3, bts: 3, w: 2, s: 2 },
                skills: ["Frenesí", "Artes Marciales N3", "Berserk","Esquivar (+5cm)","Sigilo","Ataque CD (TS-1)", "Ataque CC (Shock)"],
                profiles: [
                    { id: "dom1", name: "Chain Rifle + Contender + Arma CC AP (PS=4) + Granadas E/M", cost: 19, swc: 0, lt: false, order: "Regular", imp: "Sí" },
                    { id: "dom2", name: "Chain Rifle + Contender + Arma CC EM (PS=4) + Granadas E/M", cost: 20, swc: 0, lt: false, order: "Regular", imp: "Sí" },
                    { id: "dom3", name: "Escopeta de Abordaje + Contender + Arma CC EM (PS=4) + Granadas E/M", cost: 23, swc: 0, lt: false, order: "Regular", imp: "Sí" },
                    { id: "dom4", name: "Teniente (+1 Orden) + Chain Rifle + Contender + Arma CC EM (PS=4) + Granadas E/M", cost: 23, swc: 0, lt: true, order: "Regular", imp: "Sí" },
                    { id: "dom2", name: "Observador Artilleria + Fusil Combi + Pulso Flash + Arma CC EM (PS=4) + Granadas E/M", cost: 27, swc: 0, lt: false, order: "Regular", imp: "Sí" },
                    { id: "dom5", name: "Spitfire + Arma CC E/M (PS=4)", cost: 31, swc: 1.5, lt: false, order: "Regular", imp: "Sí" },
                    { id: "dom6", name: "Teniente (+1 Orden) + Spitfire + Arma CC E/M (PS=4)", cost: 35, swc: 1.5, lt: true, order: "Regular", imp: "Sí" }
                ]
            },
            {
                id: "tanko",
                name: "Tanko Zensenbutai",
                type: "HI",
                sectorials: ["JSA", "Oban"],
                badge: "Samurái",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=TK",
                notes: "Tropa de asalto acorazada. Famosos por su agresividad táctica casi suicida.",
                ava: "3",
                stats: { mov: "15-5", cc: 23, bs: 13, ph: 13, wip: 13, arm: 3, bts: 3, w: 2, s: 2 },
                skills: ["Impetuoso", "Artes Marciales N2", "Cobertura Limitada", "Esquivar (+2.5cm)","Coraje","Sigilo"],
                profiles: [
                    { id: "tan1", name: "Blitzen + Escopeta Ligera + Arma CC monofilo + Arma CC Shock (PS=6)", cost: 18, swc: 0, lt: false, order: "Regular", imp: "Sí" },
                    { id: "tan2", name: "Blitzen + Subfusil + Arma CC monofilo + Arma CC Shock (PS=6)", cost: 19, swc: 0, lt: false, order: "Regular", imp: "Sí" },
                    { id: "tan4", name: "Blitzen + Escopeta Ligera + Arma CC monofilo + Arma CC Shock (PS=6) + Disco Baller + Desactivador", cost: 19, swc: 0, lt: false, order: "Regular", imp: "Sí" },
                    { id: "tan5", name: "Flammenspeer + Contender + Arma CC monofilo + Arma CC Shock (PS=6)", cost: 19, swc: 0, lt: false, order: "Regular", imp: "Sí" },
                    { id: "tan6", name: "Lanzamisiles + Arma CC monofilo + Arma CC Shock (PS=6)", cost: 26, swc: 1.5, lt: false, order: "Regular", imp: "Sí" }
                ]
            },
            {
                id: "daiyokai",
                name: "Daiyokai Butai",
                type: "HI",
                sectorials: ["JSA", "Oban"],
                badge: "Titán S5",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=DY",
                notes: "Imponente coloso blindado de silueta de tamaño S5. Devasta líneas defensivas.",
                ava: "1",
                stats: { mov: "10-10", cc: 21, bs: 13, ph: 14, wip: 13, arm: 5, bts: 3, w: 2, s: 5 },
                skills: ["Ataque CD (TS-1)", "Sin Incapacidad por Herida", "Artes Marciales N2", "sigilo", "coraje"],
                profiles: [
                    { id: "dy1", name: "Red Fury + Panzerfaust + Arma CC AP + DA (PS=4)", cost: 47, swc: 1, lt: false, order: "Regular", imp: "No" },
                    { id: "dy2", name: "AP Spitfire + Panzerfaust + Arma CC AP + DA (PS=4)", cost: 50, swc: 1, lt: false, order: "Regular", imp: "No" },
                    { id: "dy3", name: "MULTI Marksman Rifle + Panzerfaust + Arma CC AP + DA (PS=4)", cost: 46, swc: 0, lt: false, order: "Regular", imp: "No" }
                ]
            },
            {
                id: "karakuri",
                name: "Karakuri Special Project",
                type: "HI",
                sectorials: ["JSA", "Oban"],
                badge: "Autómatas",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=KK",
                notes: "Ginecoides de combate con blindaje redundante e inmunidad masiva a tipos de miunión.",
                ava: "3",
                stats: { mov: "10-10", cc: 10, bs: 13, ph: 10, wip: 13, arm: 3, bts: 6, w: 3, s: 3 },
                skills: ["Inmunidad (Mejorada)", "Presencia Remota", "Gizmokit (Fis=12)", "Observador de Artilleria", "Coraje"],
                profiles: [
                    { id: "kara1", name: "Mk12 + Chain Rifle + Panzerfaust + Pulso Flash ", cost: 38, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "kara2", name: "Fusil Multi + Chain Rifle + Panzerfaust + Pulso Flash ", cost: 35, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "kara3", name: "E/Mitter + Chain Rifle + Panzerfaust + Pulso Flash ", cost: 31, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "kara4", name: "Escopeta Pesada + Chain Rifle + Panzerfaust + Pulso Flash ", cost: 38, swc: 0, lt: false, order: "Regular", imp: "No" }
                ]
            },
            {
                id: "neko",
                name: "Neko Oyama",
                type: "HI",
                sectorials: ["JSA", "Oban"],
                badge: "Héroe HI",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=NO",
                notes: "Legendario comandante militar Domaru Butai. Una fuerza imparable en el cuerpo a cuerpo.",
                ava: "1",
                stats: { mov: "15-5", cc: 24, bs: 12, ph: 14, wip: 14, arm: 3, bts: 6, w: 2, s: 2 },
                skills: ["Sentido Tactico","Frenesí", "Artes Marciales N3", "Berserk","Esquivar (+5cm)","Sigilo","Ataque CD (TS-1)", "Ataque CC (Shock)"],
                profiles: [
                    { id: "neko1", name: "Chain Rifle + Contender + Granadas E/M + Pistola Breaker + Arma CC E/M (PS=4) + Arma CC AP (PS=4)", cost: 28, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "neko2", name: "Teniente + Chain Rifle + Contender + Granadas E/M + Pistola Breaker + Arma CC E/M (PS=4) + Arma CC AP (PS=4)", cost: 28, swc: 0, lt: true, order: "Regular", imp: "No" },
                ]
            },
            {
                id: "shikami",
                name: "Shikami",
                type: "HI",
                sectorials: ["JSA", "Oban"],
                badge: "Acrobacia",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=SH",
                notes: "Infantería pesada ágil. Capaces de saltar obstáculos y disparar suspendidos en el aire.",
                ava: "2",
                stats: { mov: "15-5", cc: 23, bs: 13, ph: 14, wip: 13, arm: 3, bts: 3, w: 2, s: 2 },
                skills: ["Súper-Salto (7.5cm) ", "Despliegue Avanzado (+10cm)","Esquivar (+5cm)","Operativo Especialista","Sigilo","Trepar+", "Mimetismo (-6)", "Artes Marciales N3"],
                profiles: [
                    { id: "shi1", name: "Contender + Pulso Flash (+1R) + Pistola Asalto + Granadas Eclipse + Arma CC AP+DA (PS=4)", cost: 42, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "shi2", name: "Fusil Multi + Pulso Flash (+1R) + Pistola Asalto + Granadas Eclipse + Arma CC AP+DA (PS=4)", cost: 47, swc: 0, lt: false, order: "Regular", imp: "No" }
                ]
            },
            {
                id: "oyoroi",
                name: "O-Yoroi Kidobutai",
                type: "TAG",
                sectorials: ["JSA", "Oban"],
                badge: "T.A.G. S7",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=OY",
                notes: "Armadura mecanizada táctica de asalto pesado. Extremadamente rápida y destructiva.",
                ava: "1",
                stats: { mov: "15-10", cc: 23, bs: 14, ph: 16, wip: 13, arm: 7, bts: 6, w: 3, s: 7 },
                skills: ["Sentido Tactico","Ataque CD (TS-1)", "Esquivar (+5 cm)","Esquivar (FIS=13)", "Artes Marciales N2", "Gizmokit (FIS=11)","Minador","Sigilo","Coraje","ECM: Guiado (-6)"],
                profiles: [
                    { id: "oy1", name: "Ametralladora Multi + Lanzallamas Pesado + Crazy Koala + Arma CC EXP (PS=3)", cost: 78, swc: 1.5, lt: false, order: "Regular", imp: "No" },
                    { id: "oy2", name: "Teniente + Ametralladora Multi + Lanzallamas Pesado + Crazy Koala + Arma CC EXP (PS=3)", cost: 78, swc: 1.5, lt: true, order: "Regular", imp: "No" }
                ]
            },

            {
                id: "mechazoid",
                name: "Mechazoid Sokorentai",
                type: "TAG",
                sectorials: ["JSA", "Shindenbutai"],
                badge: "T.A.G. S7",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=OY",
                notes: "Armadura mecanizada táctica de asalto pesado. Extremadamente rápida y destructiva.",
                ava: "1",
                stats: { mov: "15-10", cc: 23, bs: 13, ph: 15, wip: 13, arm: 6, bts: 6, w: 3, s: 6 },
                skills: ["Sentido Tactico","Ataque CD (TS-1)", "Esquivar (+7.5cm)","Esquivar (FIS=11)", "Artes Marciales N2", "Gizmokit (FIS=11)","Intuicion de Combate","Sigilo","Tropa Religiosa","ECM: Guiado (-6)"],
                profiles: [
                    { id: "mc1", name: "Ametralladora AP + Pulzar + Panzerfaust + Arma CC EXP (PS=4)", cost: 66, swc: 1.5, lt: false, order: "Regular", imp: "No" },
                    { id: "mc2", name: "Spitfire Multi + Pulzar + Panzerfaust + Arma CC EXP (PS=4)", cost: 69, swc: 1.5, lt: false, order: "Regular", imp: "No" },
                    { id: "mc3", name: "Teniente + Spitfire Multi + Pulzar + Panzerfaust + Arma CC EXP (PS=4)", cost: 69, swc: 1.5, lt: true, order: "Regular", imp: "No" }
                ]
            },
            {
                id: "nokizaru",
                name: "Nokizaru Unit",
                type: "SK",
                sectorials: ["JSA", "Shindenbutai"],
                badge: "Sigilo N5",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=NK",
                notes: "Especialistas tridimensionales. Maestros en infiltrarse y eliminar objetivos de alto valor.",
                ava: "1",
                stats: { mov: "10-10", cc: 23, bs: 12, ph: 12, wip: 13, arm: 0, bts: 6, w: 1, s: 2 },
                skills: ["Visor Multiespectral N1","Artes Marciales N3","Despliegue Avanzado (20cm)", "Esquivar (+2.5cm)", "Sigilo", "Mimetismo (-3)"],
                profiles: [
                    { id: "nok1", name: "Observador de Artilleria + Subfusil + Pulso Flash + Minas Shock + Cargas-D + Pistola Silenciada + Arma CC Shock (PS=6)", cost: 25, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "nok2", name: "Hacker Asesino + Subfusil + Minas Shock + Cargas-D + Pistola Silenciada + Arma CC Shock (PS=6)", cost: 27, swc: 1, lt: false, order: "Regular", imp: "No" },
                    { id: "nok3", name: "Fusil de precision Multi + Pistola Silenciada + Arma CC Shock (PS=6)", cost: 30, swc: 0, lt: false, order: "Regular", imp: "No" }
                ]
            },
            {
                id: "kurayami",
                name: "Ninjas Kurayami",
                type: "SK",
                sectorials: ["JSA", "Shindenbutai"],
                badge: "Clásico JSA",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=NJ",
                notes: "La muerte desde las sombras. Gran despliegue encubierto y maestría marcial.",
                ava: "2",
                stats: { mov: "10-10", cc: 22, bs: 11, ph: 13, wip: 13, arm: 0, bts: 3, w: 1, s: 2 },
                skills: ["BangBomb (+4)","Mimetismo (-3)","Ataque Sorpresa (-3)","Coraje","Esquivar (+2.5cm)","Sigilo","Super-Salto","Infiltración", "Despliegue Oculto", "Artes Marciales N2"],
                profiles: [
                    { id: "nin1", name: "Subfusil + Minas Viral + Arma CC DA(PS=6)", cost: 22, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "nin2", name: "Minador + Subfusil + Minas Viral + Arma CC DA(PS=6)", cost: 23, swc: 0.5, lt: false, order: "Regular", imp: "No" },
                    { id: "nin3", name: "Hacker Escopeta Ligera + Minas Viral + Cargas-D + Arma CC DA(PS=6", cost: 26, swc: 0.5, lt: false, order: "Regular", imp: "No" }
                ]
            },
            
            {
            id: "ninjas",
                name: "Ninjas",
                type: "SK",
                sectorials: ["JSA", "Shindenbutai", "Oban"],
                badge: "Clásico JSA",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=NJ",
                notes: "La muerte desde las sombras. Gran despliegue encubierto y maestría marcial.",
                ava: "2",
                stats: { mov: "10-10", cc: 23, bs: 11, ph: 12, wip: 13, arm: 1, bts: 0, w: 1, s: 2 },
                skills: ["Mimetismo (-6)","Ataque Sorpresa (-3)","Coraje","Esquivar (+2.5cm)","Sigilo","Camuflaje","Infiltración", "Despliegue Oculto", "Artes Marciales N3"],
                profiles: [
                    { id: "nij1", name: "Subfusil + Arma CC DA(PS=6)", cost: 27, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "nij2", name: "Hacker + Subfusil + Arma CC DA(PS=6)", cost: 33, swc: 0.5, lt: false, order: "Regular", imp: "No" },
                    { id: "nij3", name: "Fusil Francotirador MULTI Arma CC DA(PS=6)", cost: 31, swc: 1.5, lt: false, order: "Regular", imp: "No" },
                    { id: "nij4", name: "Arco Táctico (+1DE) + Minas Shock + Arma CC DA(PS=6)", cost: 24, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "nij5", name: "Hacker Asesino + Arco Táctico (+1DE) + Minas Shock + Arma CC DA(PS=6)", cost: 26, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "nij6", name: "Observador de Artilleria + Escopeta de Abordaje + Pulso Flash + Arma CC DA(PS=6)", cost: 30, swc: 0.5, lt: false, order: "Regular", imp: "No" }
                ]
            },

            {
                id: "oniwaban",
                name: "Oniwaban",
                type: "SK",
                sectorials: ["JSA", "Oban"],
                badge: "Élite",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=OW",
                notes: "Maestros asesinos del sindicato ninja. Letalidad extrema con katanas monofilamento.",
                ava: "2",
                stats: { mov: "10-10", cc: 24, bs: 11, ph: 12, wip: 14, arm: 1, bts: 0, w: 1, s: 2 },
                skills: ["Despliegue Oculto", "Infiltración (FIS=18)", "Artes Marciales N4","Camuflaje","Esquivar (+5cm)","Mimetismo (-6)","Sigilo","Ataque Sorpresa (-3)"],
                profiles: [
                    { id: "oni1", name: "Escopeta de Abordaje + Nanopulser + Arma CC E/M (PS=5) + Arma CC Monofilo", cost: 30, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "oni2", name: "Subfusil + Nanopulser + Arma CC E/M (PS=5) + Arma CC Monofilo", cost: 30, swc: 0, lt: false, order: "Regular", imp: "No" },
                    { id: "oni3", name: "Teniente + Escopeta de Abordaje + Nanopulser + Arma CC E/M (PS=5) + Arma CC Monofilo", cost: 30, swc: 1, lt: true, order: "Regular", imp: "No" }
                ]
            },
            {
                id: "shinobu",
                name: "Shinobu Kitsune",
                type: "SK",
                sectorials: ["JSA", "Oban"],
                badge: "Personaje JSA",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=SK",
                notes: "Asesina y maestra de ninjas sin igual en la Esfera Humana.",
                ava: "1",
                stats: { mov: "10-10", cc: 25, bs: 12, ph: 13, wip: 14, arm: 1, bts: 3, w: 1, s: 2 },
                skills: ["Despliegue Oculto", "Infiltración (FIS=19)", "Artes Marciales N5","Camuflaje","Esquivar (+5cm)","Mimetismo (-6)","Sigilo","Ataque Sorpresa (-3)"],
                profiles: [
                    { id: "sk1", name: "Fusil Combi + Nanopulser + Granadas de Humo + Arma CC Monofilo", cost: 44, swc: 0.5, lt: false, order: "Regular", imp: "No" },
                    { id: "sk2", name: "Teniente + Fusil Combi + Nanopulser + Granadas de Humo + Arma CC Monofilo", cost: 44, swc: 0.5, lt: true, order: "Regular", imp: "No" }
                ]
            },
            {
                id: "saito",
                name: "Saito Togan",
                type: "SK",
                sectorials: ["JSA", "Oban"],
                badge: "Mercenario",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=ST",
                notes: "Ninja renegado. Gran capacidad de infiltración y combate de asalto coordinado.",
                ava: "1",
                stats: { mov: "10-10", cc: 24, bs: 11, ph: 13, wip: 13, arm: 1, bts: 0, w: 1, s: 2 },
                skills: ["Bangbomb (+4)","Despliegue Oculto", "Infiltración", "Artes Marciales N4","Mimetismo (-6)", "Coraje", "Esquivar (+2.5cm)", "Sigilo" ],
                profiles: [
                    { id: "sai1", name: "Escopeta Abordaje T2 + Granadas de Humo + Espada CC EXP (PS=4)", cost: 33, swc: 0, lt: false, order: "Regular", imp: "No" }
                ]
            },
            {
                id: "ryuken",
                name: "Ryuken Unit-9",
                type: "SK",
                sectorials: ["JSA", "Oban"],
                badge: "Sabotaje",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=RK",
                notes: "Especialistas de emboscada urbana. Limitan el movimiento con sus minas.",
                ava: "2",
                stats: { mov: "10-10", cc: 14, bs: 12, ph: 11, wip: 13, arm: 1, bts: 0, w: 1, s: 2 },
                skills: ["Señuelo 1", "Mimetismo (-6)", "Visor X", "Minador"],
                profiles: [
                    { id: "ryu1", name: "Desp. avanzado (20cm) + Subfusil + Pistola Breaker (+1R) + Cargas-D + Minas Shock", cost: 22, swc: 0.5, lt: false, order: "Regular", imp: "No" },
                    { id: "ryu2", name: "Camuflaje (1 uso) + Ataque sorpresa (-3) + Lanzacohetes Pesado + Minas Antipersona Shock", cost: 23, swc: 1.5, lt: false, order: "Regular", imp: "No" },
                    { id: "ryu3", name: "Desp. avanzado (20cm) + Subfusil + Pistola Breaker (+1R) + Cargas-D + Minas Shock + Hacker Asesino", cost: 25, swc: 0.5, lt: false, order: "Regular", imp: "No" }
                ]
            },
             {
                id: "yamabushi",
                name: "Yamabushi",
                type: "WB",
                sectorials: ["Shindenbutai"],
                badge: "Mercenaria",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=RD",
                notes: "Emboscadores tácticos. Escudan el avance usando sus visores y letales misiles.",
                ava: "2",
                stats: { mov: "15-5", cc: 23, bs: 11, ph: 13, wip: 13, arm: 1, bts: 3, w: 1, s: 2 },
                skills: ["Esquivar (+5cm)", "Artes Marciales N3", "Frenesi","Mimetismo (-3)", "Despliegue Avanzado (+10cm) ","Sigilo","Tropa Religiosa","Ataque CC (Shock)"],
                profiles: [
                    { id: "yama1", name: "Chain Rifle + Panzerfaust + Pistola Pesada + Arma CC DA (PS=4)", cost: 15, swc: 0, lt: false, order: "Regular", imp: "No" },
	            { id: "yama2", name: "Camuflaje (1Uso) + Chain Rifle + Panzerfaust + Pistola Pesada + Arma CC DA (PS=4)", cost: 15, swc: 0, lt: false, order: "Regular", imp: "No" },
		    { id: "yama3", name: "Sanitario + Chain Rifle + Arco Tactico + Pistola Pesada + Arma CC DA (PS=4)", cost: 16, swc: 0, lt: false, order: "Regular", imp: "No" },
		    { id: "yama4", name: "Camuflaje (1Uso) + Chain Rifle + Arco Tactico (+1R) + Pistola Pesada + Arma CC DA (PS=4)", cost: 17, swc: 0, lt: false, order: "Regular", imp: "No" }
                  
                ]
            },
             {
                id: "yuanyuan",
                name: "Yuan Yuan",
                type: "WB",
                sectorials: ["Oban"],
                badge: "Mercenaria",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=RD",
                notes: "Emboscadores tácticos. Escudan el avance usando sus visores y letales misiles.",
                ava: "2",
                stats: { mov: "10-10", cc: 22, bs: 10, ph: 14, wip: 13, arm: 0, bts: 0, w: 1, s: 2 },
                skills: ["Botin", "Impetuoso", "Paracaidista","Salto Combate (FIS=11)", "Sin Cobertura ","Super-Salto"],
                profiles: [
                    { id: "yuan1", name: "Chain Rifle + Granadas Humo + Pistola Pesada + Arma CC AP (PS=6)", cost: 6, swc: 0, lt: false, order: "Irregular", imp: "No" },
                    { id: "yuan2", name: "Chain Rifle + Granadas Humo  + Arma CC DA (PS=6)", cost: 7, swc: 0, lt: false, order: "Irregular", imp: "No" },
                    { id: "yuan3", name: "Escopeta de Abordaje + Granadas Humo + Arma CC AP (PS=6)", cost: 11, swc: 0, lt: false, order: "Irregular", imp: "No" },
                    { id: "yuan4", name: "Fusil + Granadas Humo + Arma CC AP (PS=6)", cost: 11, swc: 0, lt: false, order: "Irregular", imp: "No" }
                ]
            },
            {
                id: "kyojin",
                name: "Kyojin Killers",
                type: "WB",
                sectorials: ["JSA", "Shindenbutai"],
                badge: "Asalto N5",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=KJ",
                notes: "Cazadores letales de vanguardia. Utilizan fuego pesado para limpiar trincheras.",
                ava: "1",
                stats: { mov: "10-10", cc: 20, bs: 11, ph: 13, wip: 12, arm: 0, bts: 0, w: 1, s: 2 },
                skills: ["Ataque CC (+1R)","Ataque Sorpresa (-3)","Camuflaje (1 Uso)","Despliegue Avanzado (+20cm)","Mimetismo (-3)", "Tropa Religiosa", "Sigilo", "Super-Salto"],
                profiles: [
                    { id: "kyoj1", name: "Lanzallamas Pesado + Flammenspeer + Arma CC DA (PS=6)", cost: 15, swc: 0, lt: false, order: "Irregular", imp: "No" },
                    { id: "kyoj2", name: "Lanzallamas Ligero + Contender + Arma CC DA (PS=6)", cost: 18, swc: 0, lt: false, order: "Irregular", imp: "No" }
                ]
            },
            {
                id: "aragoto",
                name: "Aragoto Senkenbutai",
                type: "WB",
                sectorials: ["JSA", "Oban"],
                badge: "Motos JSA",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=AR",
                notes: "Unidades rápidas en moto de asalto pesado. Provocan el caos en la retaguardia.",
                ava: "2",
                stats: { mov: "20-15", cc: 16, bs: 12, ph: 11, wip: 13, arm: 2, bts: 0, w: 1, s: 4 },
                skills: ["Moto", "Impetuoso", "Mimetismo (-3)", "Esquivar (+ 5cm)", "Cobertura limitada"],
                profiles: [
                    { id: "ara1", name: "Spitfire + Pistola de Abordaje + Arma CC", cost: 20, swc: 1, lt: false, order: "Regular", imp: "Sí" },
                    { id: "ara2", name: "Escopeta de Abordaje Pistola de Abordaje + Arma CC", cost: 13, swc: 0, lt: false, order: "Regular", imp: "Sí" },
                    { id: "ara3", name: "Fusil Combi + Hacker Asesino + Escopeta ligera + Pistola de Abordaje + Arma CC", cost: 19, swc: 0, lt: false, order: "Regular", imp: "Sí" },
                    { id: "ara4", name: "Fusil Combi + Hacker + Escopeta ligera + Pistola de Abordaje + Arma CC", cost: 19, swc: 0.5, lt: false, order: "Regular", imp: "Sí" }
                ]
            },
            {
                id: "kuroshi",
                name: "Kuroshi Rider",
                type: "WB",
                sectorials: ["JSA", "Oban"],
                badge: "Héroe Moto",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=KR",
                notes: "Comandante motorizada de los Aragoto. Velocidad y agilidad brutales.",
                ava: "1",
                stats: { mov: "20-15", cc: 23, bs: 12, ph: 13, wip: 14, arm: 2, bts: 3, w: 1, s: 4 },
                skills: ["Moto", "Mimetismo (-3)", "Artes Marciales N1", "Inmunidad (Shock)","Impetuoso","Tenaz","Cobertura Limitada","Esquivar (+7.5cm)","Observador de Artilleria","Coraje"],
                profiles: [
                    { id: "kur1", name: "Fusil Combi + Escopeta Ligera + Lanzagranadas de Humo + Cargas-d + Pistola breaker + Arma CC AP+Shock (PS=6)", cost: 26, swc: 0, lt: false, order: "Regular", imp: "Sí" },
                    { id: "kur2", name: "Fusil Combi + Escopeta Ligera + Lanzagranadas de Humo + Cargas-d + Pistola breaker + Arma CC AP+Shock (PS=6)", cost: 29, swc: 0, lt: true, order: "Regular", imp: "Sí" }
                ]
            },
            {
                id: "musashi",
                name: "Miyamoto Musashi",
                type: "WB",
                sectorials: ["JSA", "Oban"],
                badge: "Mercenario",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=MM",
                notes: "Recreación biónica de la leyenda clásica del kenjutsu. Letalidad extrema.",
                ava: "1",
                stats: { mov: "15-10", cc: 25, bs: 9, ph: 14, wip: 15, arm: 1, bts: 3, w: 1, s: 2 },
                skills: ["Artes Marciales N5", "Esquivar (+5cm)", "NWI (Sin Incapacidad)", "Ataque CC (AP)","Coraje", "Inminidad (BLI)","Sigilo" ],
                profiles: [
                    { id: "mus1", name: "Chain Rifle + Flash Pulse + Arco tactico + Arma CC EXP (PS=4)", cost: 21, swc: 0, lt: false, order: "Irregular", imp: "No" },
                    { id: "mus2", name: "Chain Rifle + Flash Pulse + Arco tactico + Arma CC EXP (PS=4)", cost: 25, swc: 0.5, lt: false, order: "Regular", imp: "No" }
                ]
            },
            {
                id: "yojimbo",
                name: "Yojimbo Moto",
                type: "WB",
                sectorials: ["JSA", "Shindenbutai", "Oban"],
                badge: "Mercenario",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=YJ",
                notes: "Guardaespaldas Ronin contratado. Coloca coberturas de humo para proteger la carga.",
                ava: "1",
                stats: { mov: "20-15", cc: 24, bs: 12, ph: 14, wip: 13, arm: 1, bts: 3, w: 1, s: 4 },
                skills: ["Moto", "Granadas de Humo", "Artes Marciales N4", "Esquiva (+5cm)","Sin Incapacidad por Herida","Mimetismo (-3)","Inmunidad (Criticos)","Cobertura Limitada","Coraje", "Minador"],
                profiles: [
                    { id: "yoj1", name: "Contender (+1R) + Granadas de Humo + Lanzagranadas de Humo + CrazyKoala + Arma CC DA (PS=3)", cost: 20, swc: 0, lt: false, order: "Irregular", imp: "Sí" }
                ]
            },

            {
                id: "yaozao",
                name: "Yaozao Remotes",
                type: "REM",
                sectorials: ["JSA", "Shindenbutai", "Oban"],
                badge: "Soporte",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=YK",
                notes: "Plataformas robóticas genéricas de apoyo táctico de la JSA.",
                ava: "3",
                stats: { mov: "15-10", cc: 11, bs: 8, ph: 10, wip: 13, arm: 0, bts: 3, w: 1, s: 1 },
                skills: ["Coraje", "Mimetismo (-3)", "Periferico (Servidor)"],
                profiles: [
                    { id: "yao1", name: "Arma CC PARA (-3)", cost: 3, swc: 0, lt: false, order: "Irregular", imp: "No" }
                   
                ]
            },
            {
                id: "yaoxie",
                name: "Yaoxie Rui Shi Remotes",
                type: "REM",
                sectorials: ["JSA", "Shindenbutai", "Oban"],
                badge: "Ataque",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=YX",
                notes: "Drones tácticos especializados en asaltar líneas de visibilidad bloqueadas.",
                ava: "2",
                stats: { mov: "15-10", cc: 13, bs: 12, ph: 10, wip: 13, arm: 1, bts: 6, w: 1, s: 4 },
                skills: ["Repetidor","Presencia Remota", "Coraje"],
                profiles: [
                    { id: "yxe1", name: "Spitfire + Arma CC PARA (-3) + Visor Multiespectral N2)", cost: 23, swc: 1, lt: false, order: "Regular", imp: "No" },
                    { id: "yxe2", name: "Red Fury + Dispensador de minas (Shock) + Arma CC PARA (-3) + Visor Multiespectral N1)", cost: 21, swc: 0.5, lt: false, order: "Regular", imp: "No" }
                ]
            },
             {
                id: "yaoxie2",
                name: "Yaoxie Lu Duan RemoteS",
                type: "REM",
                sectorials: ["JSA", "Shindenbutai", "Oban"],
                badge: "Ataque",
                avatar: "https://placehold.co/100x100/0c0e1a/00f0ff?text=YX",
                notes: "Drones tácticos especializados en asaltar líneas de visibilidad bloqueadas.",
                ava: "2",
                stats: { mov: "15-10", cc: 13, bs: 12, ph: 10, wip: 13, arm: 1, bts: 6, w: 1, s: 4 },
                skills: ["Holoproyector","Visor Multiespectral N1","Coraje","Ataque CD (+1R)","Atque Sorpresa (-3)","Presencia Remota", "Esquiva (+3\")"],
                profiles: [
                    { id: "yxe1", name: "Thunderbolt + Carabina E/M + Minas E/M + Arma CC PARA (-3)", cost: 20, swc: 1, lt: false, order: "Regular", imp: "No" },
                    { id: "yxe2", name: "Mk12 + Lanzallamas Pesado + Minas E/M + Arma CC PARA (-3)", cost: 24, swc: 0, lt: false, order: "Regular", imp: "No" }
                ]
            },    
]        
},
    
// PARA EL FUTURO:
    PANO: {
        id: "PANO",
        name: "PANO",
        // Aquí defines dinámicamente los botones de sectorial para esta facción
        sectorials: [
            { id: "ALL", name: "TODAS (PANO)" },
            { id: "PANO", name: "PANO GENÉRICO" },
            { id: "MO", name: "Ordenes" }
           
        ],
        troops:  [ 
      
      
      {
        "id": "mo_black_friar",
        "name": "Black Friar",
        "type": "MI",
        "ava": "2",
        "sectorials": ["MO"],
        "skills": ["Multiespectral L2", "Incorruptible", "Tropas Religiosas"],
        "stats": { "mov": "4-4", "cc": "19", "bs": "12", "ph": "11", "wip": "14", "arm": "3", "bts": "6", "w": "1", "s": "2" },
        "profiles": [
          { "id": "bf_multi", "name": "Fusil MULTI", "cost": 28, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "mo_knight_montesa",
        "name": "Caballero de Montesa",
        "type": "HI",
        "ava": "2",
        "sectorials": ["MO"],
        "skills": ["Tropas Religiosas", "Moto"],
        "stats": { "mov": "6-4", "cc": "20", "bs": "12", "ph": "12", "wip": "13", "arm": "4", "bts": "3", "w": "2", "s": "6" },
        "profiles": [
          { "id": "mont_combi", "name": "Fusil Combi", "cost": 35, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "mo_santiago_knight",
        "name": "Caballero de Santiago",
        "type": "HI",
        "ava": "2",
        "sectorials": ["MO"],
        "skills": ["Tropas Religiosas", "Infiltración", "Coraje"],
        "stats": { "mov": "4-4", "cc": "21", "bs": "13", "ph": "12", "wip": "14", "arm": "4", "bts": "6", "w": "2", "s": "2" },
        "profiles": [
          { "id": "sk_spitfire", "name": "Spitfire", "cost": 42, "swc": 1, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "mo_sepulchre_knight",
        "name": "Caballero del Sepulcro",
        "type": "HI",
        "ava": "2",
        "sectorials": ["MO"],
        "skills": ["Tropas Religiosas", "Strategos L1"],
        "stats": { "mov": "4-4", "cc": "21", "bs": "13", "ph": "12", "wip": "14", "arm": "5", "bts": "3", "w": "2", "s": "2" },
        "profiles": [
          { "id": "sep_lt", "name": "Teniente", "cost": 38, "swc": 0, "lt": true, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "mo_knight_hospitaller",
        "name": "Caballero Hospitalario",
        "type": "HI",
        "ava": "3",
        "sectorials": ["MO"],
        "skills": ["Incorruptible", "Coraje", "Multiespectral L1", "Tropas Religiosas"],
        "stats": { "mov": "4-4", "cc": "21", "bs": "13", "ph": "11", "wip": "13", "arm": "4", "bts": "3", "w": "2", "s": "2" },
        "profiles": [
          { "id": "hosp_lt", "name": "Teniente (Chain of Command)", "cost": 36, "swc": 0, "lt": true, "order": "Regular", "imp": "No" },
          { "id": "hosp_hsg", "name": "HMG", "cost": 39, "swc": 1.5, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "mo_magister_knight",
        "name": "Caballero Magister",
        "type": "HI",
        "ava": "4",
        "sectorials": ["MO"],
        "skills": ["Tropas Religiosas", "Impetuoso", "Salto de Combate"],
        "stats": { "mov": "4-4", "cc": "20", "bs": "12", "ph": "11", "wip": "13", "arm": "3", "bts": "3", "w": "1", "s": "2" },
        "profiles": [
          { "id": "mk_panzer", "name": "Panzerfaust", "cost": 22, "swc": 0.5, "lt": false, "order": "Regular", "imp": "Sí" }
        ]
      },
      {
        "id": "mo_teutonic_knight",
        "name": "Caballero Teutónico",
        "type": "HI",
        "ava": "4",
        "sectorials": ["MO"],
        "skills": ["Berserker", "Tropas Religiosas", "Coraje"],
        "stats": { "mov": "4-4", "cc": "22", "bs": "12", "ph": "12", "wip": "13", "arm": "4", "bts": "3", "w": "2", "s": "2" },
        "profiles": [
          { "id": "tk_combi", "name": "Fusil Combi", "cost": 32, "swc": 0, "lt": false, "order": "Regular", "imp": "No" },
          { "id": "tk_chain", "name": "Fusil + Escopeta Boarding", "cost": 33, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "mo_crusader_brethren",
        "name": "Hermanos Cruzados",
        "type": "HI",
        "ava": "3",
        "sectorials": ["MO"],
        "skills": ["Tropas Religiosas", "AD: Salto de Combate"],
        "stats": { "mov": "4-4", "cc": "19", "bs": "12", "ph": "11", "wip": "13", "arm": "3", "bts": "3", "w": "1", "s": "2" },
        "profiles": [
          { "id": "cb_combi", "name": "Fusil Combi", "cost": 24, "swc": 0, "lt": false, "order": "Regular", "imp": "No" },
          { "id": "cb_hmg", "name": "HMG", "cost": 30, "swc": 1, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "mo_joan_arc",
        "name": "Juana de Arco",
        "type": "HI",
        "ava": "1",
        "sectorials": ["MO"],
        "skills": ["Inspiración", "Coraje", "Incorruptible", "Tropas Religiosas"],
        "stats": { "mov": "4-4", "cc": "24", "bs": "14", "ph": "12", "wip": "15", "arm": "5", "bts": "3", "w": "2", "s": "2" },
        "profiles": [
          { "id": "joan_lt", "name": "Teniente", "cost": 45, "swc": 1, "lt": true, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "mo_father_knight",
        "name": "Padre-Caballero",
        "type": "HI",
        "ava": "2",
        "sectorials": ["MO"],
        "skills": ["Tropas Religiosas", "Coraje", "Fireteam: Core"],
        "stats": { "mov": "4-4", "cc": "23", "bs": "13", "ph": "12", "wip": "14", "arm": "4", "bts": "6", "w": "2", "s": "2" },
        "profiles": [
          { "id": "fk_combi", "name": "Fusil Combi", "cost": 40, "swc": 0, "lt": false, "order": "Regular", "imp": "No" },
          { "id": "fk_red_fury", "name": "Red Fury", "cost": 44, "swc": 1, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "mo_order_sergeant",
        "name": "Sargento de la Orden",
        "type": "LI",
        "ava": "Total",
        "sectorials": ["MO"],
        "skills": ["Tropas Religiosas"],
        "stats": { "mov": "4-4", "cc": "14", "bs": "11", "ph": "10", "wip": "12", "arm": "1", "bts": "0", "w": "1", "s": "2" },
        "profiles": [
          { "id": "os_combi", "name": "Fusil Combi", "cost": 12, "swc": 0, "lt": false, "order": "Regular", "imp": "No" },
          { "id": "os_sniper", "name": "Fusil de Precisión", "cost": 15, "swc": 1, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "mo_trinitarian",
        "name": "Trinitario",
        "type": "MI",
        "ava": "3",
        "sectorials": ["MO"],
        "skills": ["Tropas Religiosas", "Camuflaje", "Infiltración"],
        "stats": { "mov": "4-4", "cc": "18", "bs": "12", "ph": "11", "wip": "13", "arm": "2", "bts": "3", "w": "1", "s": "2" },
        "profiles": [
          { "id": "trin_combi", "name": "Fusil Combi", "cost": 27, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "mo_knight_justice",
        "name": "Caballero de Justicia",
        "type": "HI",
        "ava": "2",
        "sectorials": ["MO"],
        "skills": ["Tropas Religiosas", "Coraje", "Chain of Command"],
        "stats": { "mov": "4-4", "cc": "22", "bs": "13", "ph": "12", "wip": "14", "arm": "4", "bts": "3", "w": "2", "s": "2" },
        "profiles": [
          { "id": "kj_combi", "name": "Fusil Combi", "cost": 36, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "mo_ballist",
        "name": "Ballestero",
        "type": "LI",
        "ava": "Total",
        "sectorials": ["MO"],
        "skills": ["Tropas Religiosas"],
        "stats": { "mov": "4-4", "cc": "14", "bs": "12", "ph": "10", "wip": "12", "arm": "1", "bts": "0", "w": "1", "s": "2" },
        "profiles": [
          { "id": "bal_combi", "name": "Fusil Combi", "cost": 14, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      }
    ]
  },

    ARIADNA: {
        id: "ARIADNA",
        name: "ARIADNA",
        // Aquí defines dinámicamente los botones de sectorial para esta facción
        sectorials: [
            { id: "ALL", name: "TODAS (ARIADNA)" },
            { id: "AR", name: "Ariadna Generico" },
            { id: "KOSMO", name: "Kosmoflot" }
           
        ],
        troops:  [ 

            
      {
        "id": "kosmo_volkolak",
        "name": "Volkolak",
        "type": "HI",
        "ava": "2",
        "sectorials": ["KOSMO"],
        "skills": ["Regeneración", "Coraje", "Tropas Religiosas"],
        "stats": { "mov": "4-4", "cc": "20", "bs": "13", "ph": "13", "wip": "13", "arm": "4", "bts": "3", "w": "2", "s": "2" },
        "profiles": [
          { "id": "volk_hmg", "name": "HMG", "cost": 41, "swc": 1.5, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "kosmo_frontovik",
        "name": "Frontovik",
        "type": "MI",
        "ava": "3",
        "sectorials": ["KOSMO"],
        "skills": ["Multiespectral L1", "Visor X"],
        "stats": { "mov": "4-4", "cc": "17", "bs": "12", "ph": "11", "wip": "13", "arm": "2", "bts": "3", "w": "1", "s": "2" },
        "profiles": [
          { "id": "front_combi", "name": "Fusil Combi", "cost": 24, "swc": 0, "lt": false, "order": "Regular", "imp": "No" },
          { "id": "front_marksman", "name": "Fusil de Precisión", "cost": 29, "swc": 1, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "kosmo_kosmosoldat",
        "name": "Kosmosoldat",
        "type": "HI",
        "ava": "2",
        "sectorials": ["KOSMO"],
        "skills": ["Coraje", "Super Salto"],
        "stats": { "mov": "4-4", "cc": "20", "bs": "13", "ph": "13", "wip": "13", "arm": "5", "bts": "3", "w": "2", "s": "2" },
        "profiles": [
          { "id": "kosmo_lt", "name": "Teniente", "cost": 39, "swc": 1, "lt": true, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "kosmo_rokot",
        "name": "Rokot",
        "type": "LI",
        "ava": "Total",
        "sectorials": ["KOSMO"],
        "skills": ["Chain of Command"],
        "stats": { "mov": "4-4", "cc": "14", "bs": "11", "ph": "10", "wip": "12", "arm": "0", "bts": "0", "w": "1", "s": "2" },
        "profiles": [
          { "id": "rokot_combi", "name": "Fusil Combi", "cost": 10, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "kosmo_polar_bear",
        "name": "Oso Polar",
        "type": "WB",
        "ava": "2",
        "sectorials": ["KOSMO"],
        "skills": ["Impetuoso", "Coraje", "Super Salto"],
        "stats": { "mov": "6-4", "cc": "22", "bs": "10", "ph": "14", "wip": "11", "arm": "3", "bts": "0", "w": "1", "s": "2" },
        "profiles": [
          { "id": "bear_cc", "name": "CCW", "cost": 18, "swc": 0, "lt": false, "order": "Irregular", "imp": "Sí" }
        ]
      },
      {
        "id": "kosmo_blackjack",
        "name": "Blackjack",
        "type": "HI",
        "ava": "1",
        "sectorials": ["KOSMO"],
        "skills": ["Blindaje Total", "Incorruptible"],
        "stats": { "mov": "4-4", "cc": "18", "bs": "13", "ph": "12", "wip": "13", "arm": "6", "bts": "6", "w": "2", "s": "2" },
        "profiles": [
          { "id": "bj_t2", "name": "Rifle T2", "cost": 48, "swc": 1.5, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "kosmo_uxia",
        "name": "Uxia McNeill",
        "type": "SK",
        "ava": "1",
        "sectorials": ["KOSMO"],
        "skills": ["Camuflaje TO", "Infiltración", "Despliegue Avanzado"],
        "stats": { "mov": "4-4", "cc": "22", "bs": "12", "ph": "12", "wip": "14", "arm": "2", "bts": "0", "w": "1", "s": "2" },
        "profiles": [
          { "id": "uxia_board", "name": "Escopeta Boarding", "cost": 27, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "kosmo_paracommando",
        "name": "Para-Comando",
        "type": "LI",
        "ava": "2",
        "sectorials": ["KOSMO"],
        "skills": ["AD: Salto de Combate", "Infiltración"],
        "stats": { "mov": "4-4", "cc": "17", "bs": "12", "ph": "11", "wip": "13", "arm": "1", "bts": "0", "w": "1", "s": "2" },
        "profiles": [
          { "id": "para_combi", "name": "Fusil Combi", "cost": 18, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "kosmo_irmandinho",
        "name": "Irmandinho",
        "type": "LI",
        "ava": "2",
        "sectorials": ["KOSMO"],
        "skills": ["Despliegue Avanzado", "Chain of Command"],
        "stats": { "mov": "4-4", "cc": "18", "bs": "11", "ph": "12", "wip": "12", "arm": "1", "bts": "0", "w": "1", "s": "2" },
        "profiles": [
          { "id": "irma_chain", "name": "Escopeta Ligera", "cost": 8, "swc": 0, "lt": false, "order": "Irregular", "imp": "Sí" }
        ]
      },
      {
        "id": "kosmo_wardriver",
        "name": "Wardriver",
        "type": "LI",
        "ava": "2",
        "sectorials": ["KOSMO"],
        "skills": ["Hacker"],
        "stats": { "mov": "4-4", "cc": "14", "bs": "10", "ph": "10", "wip": "13", "arm": "0", "bts": "3", "w": "1", "s": "2" },
        "profiles": [
          { "id": "ward_hacker", "name": "Hacker (Dispositivo de Hacker)", "cost": 15, "swc": 0.5, "lt": false, "order": "Regular", "imp": "No" }
        ]
      }
    ]
  },

  NOMADAS: {
        id: "NOMADAS",
        name: "NOMADAS",
        // Aquí defines dinámicamente los botones de sectorial para esta facción
        sectorials: [
            { id: "ALL", name: "TODAS (NOMADAS)" },
            { id: "NM", name: "Nomadas Generico" },
            { id: "BAK", name: "Bakunin" }
           
        ],
        troops:  [ 
{
        "id": "bak_moderator",
        "name": "Moderador",
        "type": "LI",
        "ava": "Total",
        "sectorials": ["BAK"],
        "skills": ["Chain of Command"],
        "stats": { "mov": "4-4", "cc": "13", "bs": "10", "ph": "10", "wip": "12", "arm": "0", "bts": "0", "w": "1", "s": "2" },
        "profiles": [
          { "id": "mod_combi", "name": "Fusil Combi", "cost": 9, "swc": 0, "lt": false, "order": "Regular", "imp": "No" },
          { "id": "mod_hacker", "name": "Hacker", "cost": 15, "swc": 0.5, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "bak_reverend_moira",
        "name": "Reverenda Moira",
        "type": "MI",
        "ava": "3",
        "sectorials": ["BAK"],
        "skills": ["Multiespectral L2", "Visor X"],
        "stats": { "mov": "4-4", "cc": "17", "bs": "12", "ph": "11", "wip": "14", "arm": "2", "bts": "3", "w": "1", "s": "2" },
        "profiles": [
          { "id": "moira_multi", "name": "Fusil MULTI", "cost": 28, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "bak_reverend_custodier",
        "name": "Reverenda Custodier",
        "type": "MI",
        "ava": "2",
        "sectorials": ["BAK"],
        "skills": ["Hacker (Dispositivo de Hacker)", "Infiltración"],
        "stats": { "mov": "4-4", "cc": "17", "bs": "12", "ph": "11", "wip": "15", "arm": "2", "bts": "6", "w": "1", "s": "2" },
        "profiles": [
          { "id": "cust_hacker", "name": "Hacker (Killer)", "cost": 25, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "bak_riot_grrl",
        "name": "Riot Grrl",
        "type": "HI",
        "ava": "4",
        "sectorials": ["BAK"],
        "skills": ["Coraje", "Super Salto"],
        "stats": { "mov": "4-4", "cc": "19", "bs": "13", "ph": "11", "wip": "13", "arm": "3", "bts": "3", "w": "2", "s": "2" },
        "profiles": [
          { "id": "riot_spitfire", "name": "Spitfire", "cost": 34, "swc": 1.5, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "bak_taskmaster",
        "name": "Taskmaster",
        "type": "HI",
        "ava": "2",
        "sectorials": ["BAK"],
        "skills": ["Coraje", "Blindaje Total"],
        "stats": { "mov": "4-4", "cc": "18", "bs": "13", "ph": "12", "wip": "13", "arm": "5", "bts": "6", "w": "2", "s": "2" },
        "profiles": [
          { "id": "task_redfury", "name": "Red Fury", "cost": 46, "swc": 1, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "bak_zero",
        "name": "Zero",
        "type": "SK",
        "ava": "3",
        "sectorials": ["BAK"],
        "skills": ["Camuflaje TO", "Infiltración"],
        "stats": { "mov": "4-4", "cc": "16", "bs": "11", "ph": "11", "wip": "13", "arm": "1", "bts": "0", "w": "1", "s": "2" },
        "profiles": [
          { "id": "zero_combi", "name": "Fusil Combi", "cost": 19, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "bak_sin_eater",
        "name": "Sin-Eater",
        "type": "MI",
        "ava": "2",
        "sectorials": ["BAK"],
        "skills": ["TO Camuflaje", "Mimetismo L3"],
        "stats": { "mov": "4-4", "cc": "15", "bs": "13", "ph": "10", "wip": "13", "arm": "2", "bts": "3", "w": "1", "s": "2" },
        "profiles": [
          { "id": "se_sniper", "name": "Fusil de Precisión", "cost": 32, "swc": 1.5, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "bak_morlock",
        "name": "Morlock",
        "type": "WB",
        "ava": "Total",
        "sectorials": ["BAK"],
        "skills": ["Impetuoso", "Super Salto", "Berserker"],
        "stats": { "mov": "6-4", "cc": "20", "bs": "9", "ph": "13", "wip": "11", "arm": "1", "bts": "0", "w": "1", "s": "2" },
        "profiles": [
          { "id": "mor_chain", "name": "Escopeta Ligera", "cost": 6, "swc": 0, "lt": false, "order": "Irregular", "imp": "Sí" }
        ]
      },
      {
        "id": "bak_bran_do_castro",
        "name": "Bran do Castro",
        "type": "SK",
        "ava": "1",
        "sectorials": ["BAK"],
        "skills": ["Infiltración", "Asesino (Chain of Command)"],
        "stats": { "mov": "4-4", "cc": "23", "bs": "12", "ph": "12", "wip": "14", "arm": "2", "bts": "0", "w": "1", "s": "2" },
        "profiles": [
          { "id": "bran_cc", "name": "Asesino", "cost": 31, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "bak_lizard",
        "name": "Lizard",
        "type": "TAG",
        "ava": "1",
        "sectorials": ["BAK"],
        "skills": ["Blindaje Total", "Coraje"],
        "stats": { "mov": "6-4", "cc": "18", "bs": "13", "ph": "14", "wip": "13", "arm": "8", "bts": "6", "w": "3", "s": "7" },
        "profiles": [
          { "id": "liz_hmg", "name": "HMG", "cost": 85, "swc": 2, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "bak_zoe_piwell",
        "name": "Zoe & Pi-Well",
        "type": "LI",
        "ava": "1",
        "sectorials": ["BAK"],
        "skills": ["Hacker", "Ingeniero"],
        "stats": { "mov": "4-4", "cc": "14", "bs": "11", "ph": "10", "wip": "14", "arm": "1", "bts": "3", "w": "1", "s": "2" },
        "profiles": [
          { "id": "zoe_support", "name": "Zoe (Hacker/Ingeniero)", "cost": 47, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "bak_clockmaker",
        "name": "Clockmaker",
        "type": "LI",
        "ava": "1",
        "sectorials": ["BAK"],
        "skills": ["Ingeniero"],
        "stats": { "mov": "4-4", "cc": "14", "bs": "11", "ph": "11", "wip": "14", "arm": "1", "bts": "0", "w": "1", "s": "2" },
        "profiles": [
          { "id": "clock_eng", "name": "Ingeniero", "cost": 18, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "bak_daktari",
        "name": "Daktari",
        "type": "LI",
        "ava": "1",
        "sectorials": ["BAK"],
        "skills": ["Médico"],
        "stats": { "mov": "4-4", "cc": "13", "bs": "10", "ph": "10", "wip": "13", "arm": "0", "bts": "0", "w": "1", "s": "2" },
        "profiles": [
          { "id": "dak_med", "name": "Médico", "cost": 14, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "bak_chimera",
        "name": "Quimera (Überfallkommando)",
        "type": "WB",
        "ava": "1",
        "sectorials": ["BAK"],
        "skills": ["Impetuoso", "Salto de Combate"],
        "stats": { "mov": "6-4", "cc": "21", "bs": "12", "ph": "13", "wip": "13", "arm": "2", "bts": "0", "w": "1", "s": "2" },
        "profiles": [
          { "id": "chim_assault", "name": "Quimera", "cost": 21, "swc": 0, "lt": false, "order": "Irregular", "imp": "Sí" }
        ]
      },
      {
        "id": "bak_vertigo_zond",
        "name": "Vertigo Zond",
        "type": "REM",
        "ava": "2",
        "sectorials": ["BAK"],
        "skills": ["Visor X", "Fuego de Supresión"],
        "stats": { "mov": "6-4", "cc": "10", "bs": "11", "ph": "10", "wip": "12", "arm": "0", "bts": "3", "w": "1", "s": "4" },
        "profiles": [
          { "id": "vert_missile", "name": "Lanzamisiles Inteligente", "cost": 18, "swc": 1.5, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "bak_vostok",
        "name": "Vostok",
        "type": "REM",
        "ava": "2",
        "sectorials": ["BAK"],
        "skills": ["Visor X", "Multiespectral L2"],
        "stats": { "mov": "6-4", "cc": "13", "bs": "12", "ph": "11", "wip": "12", "arm": "2", "bts": "3", "w": "1", "s": "4" },
        "profiles": [
          { "id": "vost_hmg", "name": "HMG", "cost": 28, "swc": 1, "lt": false, "order": "Regular", "imp": "No" }
        ]
      }
    ]
  },

    ALEPH: {
        id: "ALEPH",
        name: "ALEPH",
        // Aquí defines dinámicamente los botones de sectorial para esta facción
        sectorials: [
            { id: "ALL", name: "TODAS (ALEPH)" },
            { id: "PHALANX", name: "Falange" },
            { id: "OSS", name: "SSO" }
              ],
        troops:  [ 
            
      {
        "id": "ph_myrmidon",
        "name": "Myrmidon",
        "type": "LI",
        "ava": "4",
        "sectorials": ["PHALANX"],
        "skills": ["Frenesí", "Humo", "Visor Multiespectral L1"],
        "stats": { "mov": "4-4", "cc": "18", "bs": "12", "ph": "11", "wip": "14", "arm": "1", "bts": "0", "w": "1", "s": "2" },
        "profiles": [
          { "id": "myr_combi", "name": "Fusil Combi", "cost": 25, "swc": 0, "lt": false, "order": "Regular", "imp": "No" },
          { "id": "myr_spitfire", "name": "Spitfire", "cost": 29, "swc": 1, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "ph_thorakitai",
        "name": "Thorakitai",
        "type": "MI",
        "ava": "4",
        "sectorials": ["PHALANX"],
        "skills": ["Blindaje Total", "Coraje"],
        "stats": { "mov": "4-4", "cc": "15", "bs": "12", "ph": "11", "wip": "13", "arm": "2", "bts": "3", "w": "1", "s": "2" },
        "profiles": [
          { "id": "thor_combi", "name": "Fusil Combi", "cost": 16, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "ph_penthesilea",
        "name": "Penthesilea",
        "type": "SK",
        "ava": "1",
        "sectorials": ["PHALANX"],
        "skills": ["Infiltración", "Moto", "Duelo", "Asesino"],
        "stats": { "mov": "6-4", "cc": "24", "bs": "13", "ph": "12", "wip": "15", "arm": "2", "bts": "3", "w": "1", "s": "6" },
        "profiles": [
          { "id": "pent_combi", "name": "Fusil Combi", "cost": 38, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "ph_agema",
        "name": "Agema Marksman",
        "type": "MI",
        "ava": "2",
        "sectorials": ["PHALANX"],
        "skills": ["Visor Multiespectral L2", "Visor X"],
        "stats": { "mov": "4-4", "cc": "14", "bs": "13", "ph": "11", "wip": "13", "arm": "1", "bts": "0", "w": "1", "s": "2" },
        "profiles": [
          { "id": "ag_sniper", "name": "Fusil de Precisión", "cost": 27, "swc": 1.5, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "ph_ekdromoi",
        "name": "Ekdromoi",
        "type": "SK",
        "ava": "2",
        "sectorials": ["PHALANX"],
        "skills": ["AD: Salto de Combate", "Cadena de Mando"],
        "stats": { "mov": "4-4", "cc": "20", "bs": "12", "ph": "12", "wip": "13", "arm": "1", "bts": "0", "w": "1", "s": "2" },
        "profiles": [
          { "id": "ekd_chain", "name": "Chain Rifle", "cost": 20, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "ph_ajax",
        "name": "Ajax el Grande",
        "type": "HI",
        "ava": "1",
        "sectorials": ["PHALANX"],
        "skills": ["Berserker", "Coraje", "Super Salto"],
        "stats": { "mov": "4-4", "cc": "25", "bs": "12", "ph": "15", "wip": "13", "arm": "6", "bts": "6", "w": "3", "s": "2" },
        "profiles": [
          { "id": "ajax_ccw", "name": "CCW pesada", "cost": 39, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "ph_hector",
        "name": "Héctor",
        "type": "HI",
        "ava": "1",
        "sectorials": ["PHALANX"],
        "skills": ["Strategos L3", "Incorruptible", "Coraje"],
        "stats": { "mov": "4-4", "cc": "22", "bs": "14", "ph": "13", "wip": "15", "arm": "5", "bts": "6", "w": "2", "s": "2" },
        "profiles": [
          { "id": "hector_multi", "name": "Fusil MULTI", "cost": 72, "swc": 1.5, "lt": true, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "ph_phoenix",
        "name": "Phoenix",
        "type": "HI",
        "ava": "1",
        "sectorials": ["PHALANX"],
        "skills": ["Visor Multiespectral L2", "Regeneración"],
        "stats": { "mov": "4-4", "cc": "19", "bs": "13", "ph": "12", "wip": "13", "arm": "3", "bts": "3", "w": "2", "s": "2" },
        "profiles": [
          { "id": "phoenix_ml", "name": "Lanzamisiles", "cost": 40, "swc": 1.5, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },

      {
        "id": "oss_dakini",
        "name": "Dakini Tacbot",
        "type": "LI",
        "ava": "Total",
        "sectorials": ["OSS"],
        "skills": ["Sin Incapacidad por Heridas", "Blindaje Total"],
        "stats": { "mov": "6-4", "cc": "13", "bs": "11", "ph": "10", "wip": "13", "arm": "1", "bts": "3", "w": "1", "s": "2" },
        "profiles": [
          { "id": "dak_combi", "name": "Fusil Combi", "cost": 13, "swc": 0, "lt": false, "order": "Regular", "imp": "No" },
          { "id": "dak_hacker", "name": "Hacker", "cost": 17, "swc": 0.5, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "oss_dasyus",
        "name": "Dasyus",
        "type": "SK",
        "ava": "2",
        "sectorials": ["OSS"],
        "skills": ["Camuflaje TO", "Infiltración"],
        "stats": { "mov": "4-4", "cc": "16", "bs": "12", "ph": "11", "wip": "14", "arm": "1", "bts": "3", "w": "1", "s": "2" },
        "profiles": [
          { "id": "das_combi", "name": "Fusil Combi", "cost": 27, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "oss_asura",
        "name": "Asura",
        "type": "HI",
        "ava": "1",
        "sectorials": ["OSS"],
        "skills": ["Blindaje Total", "Incorruptible"],
        "stats": { "mov": "4-4", "cc": "20", "bs": "14", "ph": "13", "wip": "15", "arm": "5", "bts": "6", "w": "2", "s": "2" },
        "profiles": [
          { "id": "as_multi", "name": "Fusil MULTI", "cost": 65, "swc": 1.5, "lt": true, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "oss_garuda",
        "name": "Garuda Tacbot",
        "type": "REM",
        "ava": "2",
        "sectorials": ["OSS"],
        "skills": ["AD: Salto de Combate", "Blindaje Total"],
        "stats": { "mov": "6-4", "cc": "14", "bs": "12", "ph": "11", "wip": "13", "arm": "1", "bts": "3", "w": "1", "s": "2" },
        "profiles": [
          { "id": "gar_spitfire", "name": "Spitfire", "cost": 26, "swc": 1, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "oss_yadu",
        "name": "Yadu",
        "type": "MI",
        "ava": "3",
        "sectorials": ["OSS"],
        "skills": ["Multiespectral L1", "Visor X"],
        "stats": { "mov": "4-4", "cc": "17", "bs": "12", "ph": "11", "wip": "13", "arm": "2", "bts": "3", "w": "1", "s": "2" },
        "profiles": [
          { "id": "yadu_combi", "name": "Fusil Combi", "cost": 28, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "oss_deva",
        "name": "Deva",
        "type": "LI",
        "ava": "Total",
        "sectorials": ["OSS"],
        "skills": ["Chain of Command"],
        "stats": { "mov": "4-4", "cc": "14", "bs": "11", "ph": "10", "wip": "14", "arm": "1", "bts": "3", "w": "1", "s": "2" },
        "profiles": [
          { "id": "deva_combi", "name": "Fusil Combi", "cost": 16, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "oss_parvati",
        "name": "Parvati",
        "type": "MI",
        "ava": "1",
        "sectorials": ["OSS"],
        "skills": ["Médico", "Ingeniero"],
        "stats": { "mov": "4-4", "cc": "16", "bs": "12", "ph": "11", "wip": "15", "arm": "2", "bts": "6", "w": "1", "s": "2" },
        "profiles": [
          { "id": "parv_combi", "name": "Fusil Combi", "cost": 38, "swc": 0, "lt": false, "order": "Regular", "imp": "No" }
        ]
      },
      {
        "id": "oss_marut",
        "name": "Marut",
        "type": "TAG",
        "ava": "1",
        "sectorials": ["OSS"],
        "skills": ["Blindaje Total", "Visor Multiespectral L2"],
        "stats": { "mov": "6-4", "cc": "20", "bs": "15", "ph": "15", "wip": "14", "arm": "8", "bts": "9", "w": "3", "s": "8" },
        "profiles": [
          { "id": "marut_hmg", "name": "HMG", "cost": 120, "swc": 2, "lt": true, "order": "Regular", "imp": "No" }
        ]
      },

    ]
  },

 // ALIENS: {
    //    id: "ALIENS",
    //    name: "ALIENS",
        // Aquí defines dinámicamente los botones de sectorial para esta facción
    //    sectorials: [
    //        { id: "ALL", name: "TODAS (ALIENS)" },
    //        { id: "PHALANX", name: "Next Wave" }
    //          ],
    //    troops:  [

    // YUJING: { id: "YUJING", name: "Yu Jing Empire", sectorials: [...], troops: [...] },
    // PANOCEANIA: { id: "PANOCEANIA", name: "Ordenes", sectorials: [...], troops: [...] }

    //  NA2: {
    //    id: "NA2",
    //    name: "Non-Aligned Armies",
    //    sectorials: ["Druze Bay", "JSA Alliance"],
    //    troops: [
    //        // ... Aquí irían tus tropas
    //    ]
    // }
};
;


    