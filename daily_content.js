// Contenu quotidien : anecdote + citation pour chaque jour de l'année (clé = JJ-MM)
const DAILY_CONTENT = 
{
  "01-01": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Ford GT40 1966",
    "a_texte": "En 1966, Ford réussit un triplé aux 24 Heures du Mans avec la GT40. L’arrivée groupée voulue pour la photo créa une polémique : Ken Miles, pourtant immense artisan du projet, fut classé deuxième derrière Bruce McLaren à cause de la distance totale parcourue depuis la position de départ.",
    "c_theme": "Courage",
    "c_auteur": "Josué 1:9",
    "c_texte": "Fortifie-toi et prends courage ; ne t’effraie pas, car Dieu marche avec toi dans ce que tu dois affronter."
  },
  "02-01": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "La Mazda 787B",
    "a_texte": "En 1991, la Mazda 787B devint la première voiture à moteur rotatif à remporter les 24 Heures du Mans. Son cri aigu reste l’un des sons les plus reconnaissables de l’histoire de l’endurance.",
    "c_theme": "Espérance",
    "c_auteur": "Ésaïe 40:31",
    "c_texte": "Ceux qui placent leur confiance en l’Éternel renouvellent leurs forces et trouvent l’élan pour repartir."
  },
  "03-01": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "McLaren F1 GTR 1995",
    "a_texte": "En 1995, la McLaren F1 GTR remporta Le Mans dès sa première participation. À l’origine, la F1 était une supercar de route ; sa victoire montra qu’une base routière exceptionnelle pouvait battre des prototypes dans des conditions très difficiles.",
    "c_theme": "Persévérance",
    "c_auteur": "Galates 6:9",
    "c_texte": "Ne te lasse pas de faire le bien : la récolte arrive pour celui qui ne renonce pas."
  },
  "04-01": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Tom Kristensen",
    "a_texte": "Tom Kristensen est surnommé “Mr Le Mans” grâce à ses neuf victoires aux 24 Heures du Mans. Sa carrière symbolise la régularité plus que le simple coup d’éclat : en endurance, la vitesse doit survivre à la nuit, au trafic et aux erreurs des autres.",
    "c_theme": "Paix",
    "c_auteur": "Jean 14:27",
    "c_texte": "La paix véritable ne dépend pas seulement des circonstances ; elle vient d’un cœur gardé par Dieu."
  },
  "05-01": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Jacky Ickx 1969",
    "a_texte": "En 1969, Jacky Ickx refusa le traditionnel départ en courant du Mans et marcha calmement vers sa Ford GT40 pour protester contre le danger de cette procédure. Il boucla pourtant la course et gagna pour quelques secondes face à Porsche.",
    "c_theme": "Force",
    "c_auteur": "Philippiens 4:13",
    "c_texte": "Je peux tout par celui qui me fortifie."
  },
  "06-01": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Audi R10 TDI",
    "a_texte": "En 2006, l’Audi R10 TDI remporta Le Mans avec un moteur diesel. Ce succès changea la perception du diesel en compétition : il n’était plus seulement synonyme d’économie, mais aussi de couple, d’efficacité et de stratégie longue distance.",
    "c_theme": "Confiance",
    "c_auteur": "Proverbes 3:5",
    "c_texte": "Ne t’appuie pas uniquement sur ta propre intelligence ; apprends aussi à faire confiance à plus grand que toi."
  },
  "07-01": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Porsche 917",
    "a_texte": "La Porsche 917 donna à Porsche sa première victoire au Mans en 1970. Sa puissance et sa vitesse étaient telles que les pilotes devaient composer avec une voiture aussi fascinante qu’intimidante, surtout sur l’ancienne ligne droite des Hunaudières.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Petit à petit, l’oiseau fait son nid."
  },
  "08-01": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Bentley Speed 8",
    "a_texte": "En 2003, Bentley remporta Le Mans avec la Speed 8, mettant fin à une longue attente depuis ses succès historiques des années 1920. Cette victoire reliait deux époques très différentes de l’endurance.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Après la pluie vient le beau temps."
  },
  "09-01": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Toyota 2016",
    "a_texte": "En 2016, Toyota perdit Le Mans dans le dernier tour alors que la victoire semblait acquise. La TS050 ralentit à quelques minutes de l’arrivée, offrant un exemple brutal de la règle la plus dure de l’endurance : rien n’est gagné avant la ligne.",
    "c_theme": "Travail",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Qui veut aller loin ménage sa monture."
  },
  "10-01": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Toyota première victoire",
    "a_texte": "Après plusieurs désillusions, Toyota remporta enfin les 24 Heures du Mans en 2018. Cette victoire fut moins un simple résultat qu’une récompense pour des années d’échecs, de développement et de frustration.",
    "c_theme": "Discipline",
    "c_auteur": "Anonyme",
    "c_texte": "La motivation lance le mouvement ; la discipline le garde vivant."
  },
  "11-01": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Peugeot 905",
    "a_texte": "La Peugeot 905 domina Le Mans au début des années 1990 avec une approche de prototype très moderne. En 1993, Peugeot signa même un triplé, prouvant la solidité d’un programme français ambitieux.",
    "c_theme": "Résilience",
    "c_auteur": "Anonyme",
    "c_texte": "Une mauvaise journée ne définit pas ton chemin entier."
  },
  "12-01": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Matra au Mans",
    "a_texte": "Matra gagna Le Mans trois fois de suite entre 1972 et 1974. Le hurlement de son V12 reste associé à une période où l’endurance française rivalisait au plus haut niveau mondial.",
    "c_theme": "Foi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Dieu ne promet pas toujours un chemin facile, mais il promet sa présence dans le chemin."
  },
  "13-01": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "La nuit au Mans",
    "a_texte": "La nuit transforme Le Mans en une autre course. Les repères changent, les phares fatiguent les yeux et les pilotes doivent dépasser des voitures de catégories différentes avec parfois plus de 100 km/h d’écart en ligne droite.",
    "c_theme": "Humilité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Grandir, c’est accepter d’apprendre même quand on pensait déjà savoir."
  },
  "14-01": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Hunaudières coupée",
    "a_texte": "La ligne droite des Hunaudières était autrefois presque entièrement plate et immense. Les chicanes ajoutées en 1990 ont réduit les vitesses de pointe extrêmes, changeant le caractère du circuit sans enlever sa légende.",
    "c_theme": "Encouragement",
    "c_auteur": "Anonyme",
    "c_texte": "Ce que tu construis en silence finira par parler pour toi."
  },
  "15-01": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Garage 56 NASCAR",
    "a_texte": "En 2023, une Chevrolet Camaro NASCAR participa au Mans dans le cadre du Garage 56. Elle attira énormément d’attention parce qu’elle apportait un son, une taille et une culture de course très différente au milieu des prototypes et GT.",
    "c_theme": "Excellence",
    "c_auteur": "Anonyme",
    "c_texte": "Fais bien les petites choses : elles préparent les grandes."
  },
  "16-01": {
    "a_cat": "GT3",
    "a_titre": "Naissance du GT3",
    "a_texte": "La catégorie GT3, lancée au milieu des années 2000, a changé le sport auto client. Au lieu de voitures totalement libres, elle a rendu possible une compétition mondiale entre Porsche, Ferrari, Lamborghini, Mercedes-AMG, Audi ou BMW grâce à la Balance of Performance.",
    "c_theme": "Courage",
    "c_auteur": "Nelson Mandela",
    "c_texte": "Le courage n’est pas l’absence de peur, mais la capacité d’avancer malgré elle."
  },
  "17-01": {
    "a_cat": "GT3",
    "a_titre": "Balance of Performance",
    "a_texte": "La Balance of Performance est souvent critiquée, mais elle est au cœur du GT3. Elle permet à des voitures très différentes — moteur avant, central ou arrière — de courir ensemble sans qu’un seul concept technique écrase tous les autres.",
    "c_theme": "Persévérance",
    "c_auteur": "Winston Churchill",
    "c_texte": "Le succès consiste à aller d’échec en échec sans perdre son enthousiasme."
  },
  "18-01": {
    "a_cat": "GT3",
    "a_titre": "ABS en GT3",
    "a_texte": "Contrairement à la F1, les GT3 utilisent l’ABS. Cela ne rend pas le freinage facile : le pilote doit tout de même gérer la température, l’usure, les bosses, les pneus et le trafic pendant des relais parfois très longs.",
    "c_theme": "Sport",
    "c_auteur": "Michael Jordan",
    "c_texte": "J’accepte l’échec ; je n’accepte pas de ne pas essayer."
  },
  "19-01": {
    "a_cat": "GT3",
    "a_titre": "Contrôle de traction",
    "a_texte": "Le contrôle de traction en GT3 n’est pas une aide magique. Il se règle selon la pluie, l’usure des pneus et le style du pilote. Trop intrusif, il ralentit la voiture ; trop permissif, il détruit les pneus ou provoque une erreur.",
    "c_theme": "Sport",
    "c_auteur": "Billie Jean King",
    "c_texte": "Les champions continuent à jouer jusqu’à ce qu’ils réussissent."
  },
  "20-01": {
    "a_cat": "GT3",
    "a_titre": "Spa 24 Heures",
    "a_texte": "Les 24 Heures de Spa sont l’une des plus grandes courses GT3 au monde. Le circuit combine longues pleines charges, météo imprévisible et virages rapides comme Eau Rouge, ce qui en fait un test complet pour pilotes et voitures.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe africain",
    "c_texte": "Seul on va plus vite, ensemble on va plus loin."
  },
  "21-01": {
    "a_cat": "GT3",
    "a_titre": "Nürburgring 24h",
    "a_texte": "Les 24 Heures du Nürburgring se déroulent sur une version immense de la Nordschleife. La piste peut être sèche à un endroit et trempée à un autre, ce qui rend le choix des pneus parfois plus important que la vitesse pure.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe chinois",
    "c_texte": "Un voyage de mille kilomètres commence par un premier pas."
  },
  "22-01": {
    "a_cat": "GT3",
    "a_titre": "Bathurst 12 Hour",
    "a_texte": "Bathurst est redouté en GT3 parce que les murs sont proches et la montagne ne pardonne pas. Dans la descente, une petite erreur de placement peut transformer une voiture rapide en épave en quelques mètres.",
    "c_theme": "Foi",
    "c_auteur": "Psaume 23",
    "c_texte": "Même dans la vallée sombre, je ne suis pas abandonné."
  },
  "23-01": {
    "a_cat": "GT3",
    "a_titre": "Porsche 911 GT3 R",
    "a_texte": "La Porsche 911 GT3 R garde l’ADN du moteur arrière. En GT3 moderne, cette architecture impose des réglages spécifiques mais donne souvent une très bonne motricité en sortie de virage.",
    "c_theme": "Espérance",
    "c_auteur": "Romains 8:28",
    "c_texte": "Dieu peut faire concourir toutes choses au bien de ceux qui l’aiment."
  },
  "24-01": {
    "a_cat": "GT3",
    "a_titre": "Mercedes-AMG GT3",
    "a_texte": "La Mercedes-AMG GT3 s’est imposée comme une référence client grâce à sa fiabilité, son moteur atmosphérique puissant et sa présence dans de nombreux championnats. Elle montre que le succès GT3 dépend aussi du support offert aux équipes privées.",
    "c_theme": "Détermination",
    "c_auteur": "Anonyme",
    "c_texte": "Le progrès n’a pas besoin d’être spectaculaire pour être réel."
  },
  "25-01": {
    "a_cat": "GT3",
    "a_titre": "Audi R8 LMS",
    "a_texte": "L’Audi R8 LMS a gagné dans de nombreuses séries GT3, de Spa à Bathurst. Son succès repose autant sur sa performance que sur la qualité du programme client Audi Sport, très important dans cette catégorie.",
    "c_theme": "Confiance",
    "c_auteur": "Anonyme",
    "c_texte": "Tu n’as pas besoin de tout maîtriser pour commencer."
  },
  "26-01": {
    "a_cat": "GT3",
    "a_titre": "Ferrari 296 GT3",
    "a_texte": "La Ferrari 296 GT3 a remplacé la 488 GT3 avec une conception profondément revue. Même sans système hybride en course GT3, elle a permis à Ferrari de rester présente au plus haut niveau des courses clients.",
    "c_theme": "Gratitude",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La gratitude transforme ce qui manque en rappel de ce qui est déjà donné."
  },
  "27-01": {
    "a_cat": "GT3",
    "a_titre": "BMW M4 GT3",
    "a_texte": "La BMW M4 GT3 a succédé à la M6 GT3 avec une philosophie plus moderne. Sa grande calandre a beaucoup fait parler, mais en piste, son rôle est surtout d’offrir une plateforme plus exploitable pour les équipes clientes.",
    "c_theme": "Force",
    "c_auteur": "2 Timothée 1:7",
    "c_texte": "Dieu ne nous donne pas un esprit de peur, mais de force, d’amour et de sagesse."
  },
  "28-01": {
    "a_cat": "GT3",
    "a_titre": "Lamborghini Huracán GT3",
    "a_texte": "La Lamborghini Huracán GT3 a donné à Lamborghini une vraie crédibilité en compétition client. Sa carrière a montré que la marque pouvait être autre chose qu’un symbole de supercar spectaculaire.",
    "c_theme": "Intégrité",
    "c_auteur": "Proverbe biblique",
    "c_texte": "Mieux vaut peu avec droiture que beaucoup avec injustice."
  },
  "29-01": {
    "a_cat": "GT3",
    "a_titre": "GT World Challenge",
    "a_texte": "Le GT World Challenge a construit une vraie scène internationale pour les GT3. Une même marque peut y briller en Europe, en Amérique, en Asie ou en Australie, mais chaque région impose ses propres circuits et styles de course.",
    "c_theme": "Paix",
    "c_auteur": "Philippiens 4:6-7",
    "c_texte": "Présente tes inquiétudes à Dieu, et sa paix gardera ton cœur."
  },
  "30-01": {
    "a_cat": "GT3",
    "a_titre": "Pro-Am en GT3",
    "a_texte": "Le GT3 vit beaucoup grâce au format Pro-Am : un pilote professionnel partage la voiture avec un gentleman driver. Cette formule mélange business, passion et très haut niveau, ce qui rend la catégorie différente de la F1 ou du WEC usine.",
    "c_theme": "Persévérance",
    "c_auteur": "Hébreux 12:1",
    "c_texte": "Cours avec endurance la course qui t’est proposée."
  },
  "31-01": {
    "a_cat": "F1",
    "a_titre": "Premier championnat F1",
    "a_texte": "Le championnat du monde de Formule 1 débuta en 1950 à Silverstone. À l’époque, les voitures avaient peu à voir avec les machines actuelles : pas d’aileron moderne, pas de carbone, pas de télémétrie et une sécurité très limitée.",
    "c_theme": "Courage",
    "c_auteur": "Anonyme",
    "c_texte": "Le courage commence souvent par une décision que personne ne voit."
  },
  "01-02": {
    "a_cat": "F1",
    "a_titre": "Juan Manuel Fangio",
    "a_texte": "Juan Manuel Fangio remporta cinq titres mondiaux dans les années 1950 avec plusieurs constructeurs différents. Son talent était d’autant plus remarquable qu’il pilotait à une époque où chaque erreur pouvait avoir des conséquences dramatiques.",
    "c_theme": "Travail",
    "c_auteur": "Anonyme",
    "c_texte": "Ce que tu répètes aujourd’hui deviendra ton niveau naturel demain."
  },
  "02-02": {
    "a_cat": "F1",
    "a_titre": "Jim Clark",
    "a_texte": "Jim Clark est souvent cité parmi les pilotes les plus naturellement doués. Il brillait en F1, en endurance, en IndyCar et en voitures de tourisme, à une époque où les pilotes passaient beaucoup plus facilement d’une discipline à l’autre.",
    "c_theme": "Espérance",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "L’épreuve n’a pas le dernier mot quand l’espérance reste vivante."
  },
  "03-02": {
    "a_cat": "F1",
    "a_titre": "Lotus et l’effet de sol",
    "a_texte": "À la fin des années 1970, Lotus exploita l’effet de sol pour coller la voiture à la piste grâce au flux d’air sous le châssis. Cette idée changea profondément l’aérodynamique de la F1.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Il n’y a pas de vent favorable pour celui qui ne sait pas où il va."
  },
  "04-02": {
    "a_cat": "F1",
    "a_titre": "Niki Lauda 1976",
    "a_texte": "En 1976, Niki Lauda survécut à un terrible accident au Nürburgring et revint en course seulement quelques semaines plus tard. Son retour reste l’un des exemples les plus forts de courage et de lucidité en sport automobile.",
    "c_theme": "Humilité",
    "c_auteur": "Anonyme",
    "c_texte": "L’orgueil défend ses erreurs ; l’humilité les transforme."
  },
  "05-02": {
    "a_cat": "F1",
    "a_titre": "Senna Monaco",
    "a_texte": "Ayrton Senna reste associé à Monaco, où sa précision semblait presque irréelle. Sur ce circuit étroit, le pilote doit être rapide sans jamais dépasser la limite de quelques centimètres.",
    "c_theme": "Patience",
    "c_auteur": "Anonyme",
    "c_texte": "Certaines victoires mûrissent lentement."
  },
  "06-02": {
    "a_cat": "F1",
    "a_titre": "Senna Donington 1993",
    "a_texte": "Au Grand Prix d’Europe 1993 à Donington, Ayrton Senna réalisa un premier tour devenu légendaire sous la pluie. Il dépassa plusieurs adversaires avec une maîtrise qui illustrait son toucher unique sur piste humide.",
    "c_theme": "Encouragement",
    "c_auteur": "Anonyme",
    "c_texte": "Tu peux être fatigué sans être fini."
  },
  "07-02": {
    "a_cat": "F1",
    "a_titre": "Schumacher 1996 Espagne",
    "a_texte": "En 1996, Michael Schumacher remporta le Grand Prix d’Espagne sous une pluie intense. Cette victoire avec Ferrari, dans des conditions difficiles, annonça la transformation progressive de l’équipe italienne autour de lui.",
    "c_theme": "Foi",
    "c_auteur": "Matthieu 6:34",
    "c_texte": "Ne laisse pas demain voler la force dont tu as besoin aujourd’hui."
  },
  "08-02": {
    "a_cat": "F1",
    "a_titre": "Ferrari 2004",
    "a_texte": "La Ferrari F2004 fut l’une des F1 les plus dominantes de l’histoire moderne. Elle symbolise l’époque Schumacher-Todt-Brawn-Byrne, où stratégie, fiabilité et vitesse formaient un bloc presque imbattable.",
    "c_theme": "Détermination",
    "c_auteur": "Anonyme",
    "c_texte": "Ce n’est pas parce que c’est lent que c’est inutile."
  },
  "09-02": {
    "a_cat": "F1",
    "a_titre": "Brawn GP 2009",
    "a_texte": "Brawn GP remporta le championnat 2009 après avoir failli ne jamais participer à la saison. Le double diffuseur et une excellente exploitation du règlement permirent à une équipe née dans l’urgence de battre les géants.",
    "c_theme": "Leadership",
    "c_auteur": "Anonyme",
    "c_texte": "Un bon leader ne cherche pas la lumière ; il aide les autres à mieux voir."
  },
  "10-02": {
    "a_cat": "F1",
    "a_titre": "Red Bull 2010-2013",
    "a_texte": "Entre 2010 et 2013, Red Bull domina la F1 avec Sebastian Vettel grâce à une aérodynamique exceptionnelle. La capacité d’Adrian Newey à exploiter les flux d’air fut aussi décisive que le pilotage.",
    "c_theme": "Courage",
    "c_auteur": "Josué 1:9",
    "c_texte": "Fortifie-toi et prends courage ; ne t’effraie pas, car Dieu marche avec toi dans ce que tu dois affronter."
  },
  "11-02": {
    "a_cat": "F1",
    "a_titre": "Mercedes hybride",
    "a_texte": "À partir de 2014, Mercedes domina l’ère hybride de la F1. Son moteur très efficace et son intégration châssis-propulseur donnèrent à l’équipe une avance que les autres mirent des années à réduire.",
    "c_theme": "Espérance",
    "c_auteur": "Ésaïe 40:31",
    "c_texte": "Ceux qui placent leur confiance en l’Éternel renouvellent leurs forces et trouvent l’élan pour repartir."
  },
  "12-02": {
    "a_cat": "F1",
    "a_titre": "Hamilton Silverstone 2008",
    "a_texte": "En 2008, Lewis Hamilton domina le Grand Prix de Grande-Bretagne sous une pluie difficile. Sa marge à l’arrivée fut énorme et la course renforça sa réputation de pilote exceptionnel dans les conditions changeantes.",
    "c_theme": "Persévérance",
    "c_auteur": "Galates 6:9",
    "c_texte": "Ne te lasse pas de faire le bien : la récolte arrive pour celui qui ne renonce pas."
  },
  "13-02": {
    "a_cat": "F1",
    "a_titre": "Verstappen Brésil 2016",
    "a_texte": "Au Brésil 2016, Max Verstappen réalisa une remontée spectaculaire sous la pluie. Ses trajectoires différentes et son contrôle de la voiture révélèrent un instinct de pilotage rare dans des conditions extrêmes.",
    "c_theme": "Paix",
    "c_auteur": "Jean 14:27",
    "c_texte": "La paix véritable ne dépend pas seulement des circonstances ; elle vient d’un cœur gardé par Dieu."
  },
  "14-02": {
    "a_cat": "F1",
    "a_titre": "Monaco impossible à doubler",
    "a_texte": "Monaco est souvent critiqué pour le manque de dépassements, mais c’est aussi ce qui rend la qualification si intense. Sur ce circuit, partir devant peut valoir plus qu’une stratégie parfaite.",
    "c_theme": "Force",
    "c_auteur": "Philippiens 4:13",
    "c_texte": "Je peux tout par celui qui me fortifie."
  },
  "15-02": {
    "a_cat": "F1",
    "a_titre": "DRS",
    "a_texte": "Le DRS a été introduit pour faciliter les dépassements en réduisant la traînée dans certaines zones. Il ne remplace pas le talent : le pilote doit encore préparer la sortie de virage et oser freiner au bon moment.",
    "c_theme": "Confiance",
    "c_auteur": "Proverbes 3:5",
    "c_texte": "Ne t’appuie pas uniquement sur ta propre intelligence ; apprends aussi à faire confiance à plus grand que toi."
  },
  "16-02": {
    "a_cat": "F1",
    "a_titre": "Halo",
    "a_texte": "Le halo a été critiqué à son introduction, surtout pour son apparence. Plusieurs incidents ont ensuite montré son importance en matière de sécurité, rappelant que le progrès technique n’est pas toujours populaire au départ.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Petit à petit, l’oiseau fait son nid."
  },
  "17-02": {
    "a_cat": "F1",
    "a_titre": "Freins carbone",
    "a_texte": "Les freins carbone d’une F1 doivent fonctionner à très haute température. À froid, ils peuvent être moins efficaces, ce qui rend les tours de sortie et les relances après Safety Car particulièrement délicats.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Après la pluie vient le beau temps."
  },
  "18-02": {
    "a_cat": "F1",
    "a_titre": "Arrêts aux stands modernes",
    "a_texte": "Les arrêts aux stands modernes en F1 sont devenus une discipline en soi. Une vingtaine de mécaniciens coordonnent leurs gestes en quelques secondes, et une seule roue mal fixée peut ruiner un Grand Prix entier.",
    "c_theme": "Travail",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Qui veut aller loin ménage sa monture."
  },
  "19-02": {
    "a_cat": "F1",
    "a_titre": "Williams FW14B",
    "a_texte": "La Williams FW14B de 1992 utilisait une suspension active très avancée. Nigel Mansell domina la saison, montrant que l’électronique et l’aérodynamique pouvaient transformer l’équilibre d’une F1.",
    "c_theme": "Discipline",
    "c_auteur": "Anonyme",
    "c_texte": "La motivation lance le mouvement ; la discipline le garde vivant."
  },
  "20-02": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Audi Quattro",
    "a_texte": "L’Audi Quattro changea le rallye en imposant la transmission intégrale au plus haut niveau. Après elle, il devint difficile d’imaginer une voiture de rallye moderne sans quatre roues motrices.",
    "c_theme": "Résilience",
    "c_auteur": "Anonyme",
    "c_texte": "Une mauvaise journée ne définit pas ton chemin entier."
  },
  "21-02": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Groupe B",
    "a_texte": "Le Groupe B reste l’une des périodes les plus folles du rallye. Les voitures étaient extrêmement puissantes, les spectateurs très proches et la sécurité insuffisante, ce qui rendit cette époque spectaculaire mais dangereuse.",
    "c_theme": "Foi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Dieu ne promet pas toujours un chemin facile, mais il promet sa présence dans le chemin."
  },
  "22-02": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Michèle Mouton",
    "a_texte": "Michèle Mouton fut l’une des grandes figures du rallye mondial avec Audi. Elle gagna des manches de championnat du monde et prouva que le talent ne dépendait pas du genre dans une discipline extrêmement exigeante.",
    "c_theme": "Humilité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Grandir, c’est accepter d’apprendre même quand on pensait déjà savoir."
  },
  "23-02": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Sébastien Loeb",
    "a_texte": "Sébastien Loeb domina le WRC avec une régularité impressionnante. Ancien gymnaste, il apporta au rallye une précision et une capacité d’adaptation qui lui permirent de gagner sur terre, asphalte, neige et glace.",
    "c_theme": "Encouragement",
    "c_auteur": "Anonyme",
    "c_texte": "Ce que tu construis en silence finira par parler pour toi."
  },
  "24-02": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Colin McRae",
    "a_texte": "Colin McRae incarnait un style de rallye agressif et spectaculaire. Sa devise populaire, “if in doubt, flat out”, résume une approche courageuse mais risquée qui a marqué toute une génération de fans.",
    "c_theme": "Excellence",
    "c_auteur": "Anonyme",
    "c_texte": "Fais bien les petites choses : elles préparent les grandes."
  },
  "25-02": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Monte-Carlo",
    "a_texte": "Le Rallye Monte-Carlo est célèbre pour ses conditions imprévisibles. Une spéciale peut mélanger asphalte sec, neige, glace et plaques humides, obligeant les équipages à accepter une part d’incertitude dans le choix des pneus.",
    "c_theme": "Courage",
    "c_auteur": "Nelson Mandela",
    "c_texte": "Le courage n’est pas l’absence de peur, mais la capacité d’avancer malgré elle."
  },
  "26-02": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Finlande",
    "a_texte": "Le Rallye de Finlande est surnommé le Grand Prix sur terre. Les voitures y volent littéralement sur des bosses rapides, et les pilotes locaux y ont longtemps possédé un avantage grâce à leur connaissance du terrain.",
    "c_theme": "Persévérance",
    "c_auteur": "Winston Churchill",
    "c_texte": "Le succès consiste à aller d’échec en échec sans perdre son enthousiasme."
  },
  "27-02": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Safari Rally",
    "a_texte": "Le Safari Rally a longtemps été l’une des épreuves les plus dures du calendrier. Poussière, chaleur, pierres, boue et longues distances y mettaient les voitures autant à l’épreuve que les équipages.",
    "c_theme": "Sport",
    "c_auteur": "Michael Jordan",
    "c_texte": "J’accepte l’échec ; je n’accepte pas de ne pas essayer."
  },
  "28-02": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Pikes Peak",
    "a_texte": "Pikes Peak est une montée mythique où la puissance ne suffit pas. L’altitude réduit les performances, les virages s’enchaînent sans droit à l’erreur et la météo peut changer rapidement en montant vers le sommet.",
    "c_theme": "Sport",
    "c_auteur": "Billie Jean King",
    "c_texte": "Les champions continuent à jouer jusqu’à ce qu’ils réussissent."
  },
  "01-03": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Peugeot 405 T16 Pikes Peak",
    "a_texte": "La Peugeot 405 T16 de Pikes Peak est devenue mythique grâce au film “Climb Dance”. Les images d’Ari Vatanen attaquant la montagne au soleil levant ont transformé une course de côte en morceau de cinéma automobile.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe africain",
    "c_texte": "Seul on va plus vite, ensemble on va plus loin."
  },
  "02-03": {
    "a_cat": "IMSA / Daytona",
    "a_titre": "Daytona 24",
    "a_texte": "Les 24 Heures de Daytona mélangent banking ovale et portion routière. Cette combinaison oblige les équipes à trouver un compromis rare : une voiture stable à haute vitesse mais efficace dans les freinages lents.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe chinois",
    "c_texte": "Un voyage de mille kilomètres commence par un premier pas."
  },
  "03-03": {
    "a_cat": "IMSA / Daytona",
    "a_titre": "Rolex Daytona",
    "a_texte": "La victoire aux 24 Heures de Daytona offre traditionnellement une montre Rolex aux vainqueurs. C’est l’un des trophées les plus désirés du sport auto, parce qu’il symbolise autant la réussite que la résistance.",
    "c_theme": "Foi",
    "c_auteur": "Psaume 23",
    "c_texte": "Même dans la vallée sombre, je ne suis pas abandonné."
  },
  "04-03": {
    "a_cat": "IMSA / Sebring",
    "a_titre": "Sebring bosselé",
    "a_texte": "Sebring est connu pour ses bosses et ses plaques de béton issues d’un ancien aérodrome. Les voitures y souffrent énormément, ce qui en fait une répétition brutale pour les programmes d’endurance.",
    "c_theme": "Espérance",
    "c_auteur": "Romains 8:28",
    "c_texte": "Dieu peut faire concourir toutes choses au bien de ceux qui l’aiment."
  },
  "05-03": {
    "a_cat": "IMSA / Petit Le Mans",
    "a_titre": "Petit Le Mans",
    "a_texte": "Petit Le Mans, à Road Atlanta, condense l’esprit de l’endurance sur une course plus courte que Le Mans mais souvent très intense. Le trafic y est constant et les neutralisations peuvent bouleverser la stratégie.",
    "c_theme": "Détermination",
    "c_auteur": "Anonyme",
    "c_texte": "Le progrès n’a pas besoin d’être spectaculaire pour être réel."
  },
  "06-03": {
    "a_cat": "IMSA",
    "a_titre": "Deltawing",
    "a_texte": "La Deltawing intrigua le monde de l’endurance avec sa silhouette étroite à l’avant. Même si le projet n’a pas tout gagné, il a rappelé que l’innovation passe parfois par des formes qui semblent absurdes au premier regard.",
    "c_theme": "Confiance",
    "c_auteur": "Anonyme",
    "c_texte": "Tu n’as pas besoin de tout maîtriser pour commencer."
  },
  "07-03": {
    "a_cat": "Supercars / Bathurst",
    "a_titre": "Bathurst 1000",
    "a_texte": "Le Bathurst 1000 est une course culte en Australie. Mount Panorama ressemble à deux circuits en un : une montée et une descente de montagne très techniques, puis de longues sections rapides où l’aspiration compte énormément.",
    "c_theme": "Gratitude",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La gratitude transforme ce qui manque en rappel de ce qui est déjà donné."
  },
  "08-03": {
    "a_cat": "Supercars / Bathurst",
    "a_titre": "Peter Brock",
    "a_texte": "Peter Brock est une légende de Bathurst, où il a gagné neuf fois. En Australie, son nom dépasse le sport automobile : il incarne une culture populaire liée aux voitures de tourisme et aux grands duels Ford-Holden.",
    "c_theme": "Force",
    "c_auteur": "2 Timothée 1:7",
    "c_texte": "Dieu ne nous donne pas un esprit de peur, mais de force, d’amour et de sagesse."
  },
  "09-03": {
    "a_cat": "Supercars / Bathurst",
    "a_titre": "Murs de Bathurst",
    "a_texte": "À Bathurst, les murs sont si proches que les pilotes disent souvent que le circuit “ne pardonne rien”. Une voiture légèrement mal placée dans la descente peut déclencher un accident en chaîne.",
    "c_theme": "Intégrité",
    "c_auteur": "Proverbe biblique",
    "c_texte": "Mieux vaut peu avec droiture que beaucoup avec injustice."
  },
  "10-03": {
    "a_cat": "Nürburgring",
    "a_titre": "Nordschleife",
    "a_texte": "La Nordschleife est surnommée “l’Enfer vert”. Sa longueur, ses bosses, ses changements d’adhérence et ses virages aveugles la rendent très différente des circuits modernes plus courts et plus standardisés.",
    "c_theme": "Paix",
    "c_auteur": "Philippiens 4:6-7",
    "c_texte": "Présente tes inquiétudes à Dieu, et sa paix gardera ton cœur."
  },
  "11-03": {
    "a_cat": "Nürburgring",
    "a_titre": "Record Stefan Bellof",
    "a_texte": "Stefan Bellof signa en 1983 un tour devenu mythique de la Nordschleife avec une Porsche 956. Ce chrono resta une référence pendant des décennies et participa à la légende du circuit.",
    "c_theme": "Persévérance",
    "c_auteur": "Hébreux 12:1",
    "c_texte": "Cours avec endurance la course qui t’est proposée."
  },
  "12-03": {
    "a_cat": "Nürburgring",
    "a_titre": "Météo locale",
    "a_texte": "Sur la Nordschleife, la météo peut varier d’un secteur à l’autre. Une équipe peut chausser des slicks parce que les stands sont au sec, puis découvrir une portion humide ou brumeuse plusieurs kilomètres plus loin.",
    "c_theme": "Courage",
    "c_auteur": "Anonyme",
    "c_texte": "Le courage commence souvent par une décision que personne ne voit."
  },
  "13-03": {
    "a_cat": "IndyCar",
    "a_titre": "Indy 500",
    "a_texte": "Les 500 Miles d’Indianapolis ne sont pas seulement une course rapide. Les pilotes doivent gérer l’aspiration, les arrêts, le trafic, le carburant et la peur permanente de toucher le mur à très haute vitesse.",
    "c_theme": "Travail",
    "c_auteur": "Anonyme",
    "c_texte": "Ce que tu répètes aujourd’hui deviendra ton niveau naturel demain."
  },
  "14-03": {
    "a_cat": "IndyCar",
    "a_titre": "Triple Couronne",
    "a_texte": "La Triple Couronne informelle du sport auto associe souvent Monaco, Le Mans et Indianapolis. Graham Hill reste le seul pilote à avoir gagné les trois, ce qui montre la rareté d’une telle polyvalence.",
    "c_theme": "Espérance",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "L’épreuve n’a pas le dernier mot quand l’espérance reste vivante."
  },
  "15-03": {
    "a_cat": "IndyCar",
    "a_titre": "Mansell en IndyCar",
    "a_texte": "Nigel Mansell quitta la F1 après son titre 1992 et remporta le championnat IndyCar dès 1993. Peu de pilotes ont réussi une transition aussi spectaculaire entre deux mondes aussi différents.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Il n’y a pas de vent favorable pour celui qui ne sait pas où il va."
  },
  "16-03": {
    "a_cat": "NASCAR",
    "a_titre": "Daytona 500",
    "a_texte": "Le Daytona 500 est la course la plus prestigieuse de la NASCAR. La stratégie d’aspiration y est essentielle : un pilote seul peut être rapide, mais un bon partenaire de draft peut transformer une course.",
    "c_theme": "Humilité",
    "c_auteur": "Anonyme",
    "c_texte": "L’orgueil défend ses erreurs ; l’humilité les transforme."
  },
  "17-03": {
    "a_cat": "NASCAR",
    "a_titre": "Dale Earnhardt",
    "a_texte": "Dale Earnhardt attendit longtemps avant de gagner enfin le Daytona 500 en 1998. Après la course, les mécaniciens et membres des équipes adverses l’applaudirent dans la pit lane, signe rare de respect collectif.",
    "c_theme": "Patience",
    "c_auteur": "Anonyme",
    "c_texte": "Certaines victoires mûrissent lentement."
  },
  "18-03": {
    "a_cat": "Dakar",
    "a_titre": "Dakar origine",
    "a_texte": "Le Dakar naquit d’une aventure où l’orientation comptait autant que la vitesse. Contrairement à une course sur circuit, l’équipage doit survivre au terrain, à la navigation, à la fatigue et aux imprévus mécaniques.",
    "c_theme": "Encouragement",
    "c_auteur": "Anonyme",
    "c_texte": "Tu peux être fatigué sans être fini."
  },
  "19-03": {
    "a_cat": "Dakar",
    "a_titre": "Ari Vatanen Dakar",
    "a_texte": "Ari Vatanen gagna plusieurs fois le Dakar après sa carrière en rallye mondial. Son parcours montre que la vitesse pure doit devenir endurance mentale quand la course dure des jours dans le désert.",
    "c_theme": "Foi",
    "c_auteur": "Matthieu 6:34",
    "c_texte": "Ne laisse pas demain voler la force dont tu as besoin aujourd’hui."
  },
  "20-03": {
    "a_cat": "Dakar",
    "a_titre": "Camions du Dakar",
    "a_texte": "Les camions du Dakar impressionnent par leur taille, mais ils roulent à un rythme étonnant sur des terrains cassants. Les voir sauter sur les dunes rappelle que la notion de “voiture de course” peut prendre des formes très différentes.",
    "c_theme": "Détermination",
    "c_auteur": "Anonyme",
    "c_texte": "Ce n’est pas parce que c’est lent que c’est inutile."
  },
  "21-03": {
    "a_cat": "DTM",
    "a_titre": "DTM années 1990",
    "a_texte": "Le DTM des années 1990 mélangeait voitures de tourisme agressives, technologie avancée et duels très physiques. Les Alfa Romeo, Mercedes et Opel ont marqué une génération de fans européens.",
    "c_theme": "Leadership",
    "c_auteur": "Anonyme",
    "c_texte": "Un bon leader ne cherche pas la lumière ; il aide les autres à mieux voir."
  },
  "22-03": {
    "a_cat": "DTM",
    "a_titre": "Alfa 155 V6 TI",
    "a_texte": "L’Alfa Romeo 155 V6 TI domina le DTM 1993 avec sa transmission intégrale et son V6 hurlant. Elle reste l’une des voitures de tourisme les plus aimées par les passionnés.",
    "c_theme": "Courage",
    "c_auteur": "Josué 1:9",
    "c_texte": "Fortifie-toi et prends courage ; ne t’effraie pas, car Dieu marche avec toi dans ce que tu dois affronter."
  },
  "23-03": {
    "a_cat": "Tourisme",
    "a_titre": "BTCC contact",
    "a_texte": "Le BTCC britannique est célèbre pour ses courses de tourisme musclées. Les contacts y font partie de la culture, mais la vraie difficulté reste de rester rapide malgré une voiture parfois abîmée.",
    "c_theme": "Espérance",
    "c_auteur": "Ésaïe 40:31",
    "c_texte": "Ceux qui placent leur confiance en l’Éternel renouvellent leurs forces et trouvent l’élan pour repartir."
  },
  "24-03": {
    "a_cat": "Tourisme",
    "a_titre": "Volvo break BTCC",
    "a_texte": "En 1994, Volvo engagea un break 850 en BTCC. L’image d’un break familial attaquant les circuits britanniques est devenue culte, même si l’idée était aussi un coup marketing très intelligent.",
    "c_theme": "Persévérance",
    "c_auteur": "Galates 6:9",
    "c_texte": "Ne te lasse pas de faire le bien : la récolte arrive pour celui qui ne renonce pas."
  },
  "25-03": {
    "a_cat": "GT / Route",
    "a_titre": "Ferrari F40 LM",
    "a_texte": "La Ferrari F40 LM transforma une icône de route en machine de course extrême. Plus brutale, plus légère et plus rare, elle montre comment une supercar peut devenir encore plus radicale une fois libérée des compromis routiers.",
    "c_theme": "Paix",
    "c_auteur": "Jean 14:27",
    "c_texte": "La paix véritable ne dépend pas seulement des circonstances ; elle vient d’un cœur gardé par Dieu."
  },
  "26-03": {
    "a_cat": "GT / Route",
    "a_titre": "Porsche 911 RSR",
    "a_texte": "La Porsche 911 RSR a longtemps défendu l’idée qu’une architecture née pour la route pouvait rester compétitive en endurance. Le moteur arrière, souvent critiqué, est devenu une partie de son identité en course.",
    "c_theme": "Force",
    "c_auteur": "Philippiens 4:13",
    "c_texte": "Je peux tout par celui qui me fortifie."
  },
  "27-03": {
    "a_cat": "GT / Route",
    "a_titre": "Viper GTS-R",
    "a_texte": "La Dodge Viper GTS-R a marqué les années 1990 et 2000 en GT. Son énorme V10 et son style brutal contrastaient avec les européennes plus fines, mais elle s’est imposée dans les plus grandes courses d’endurance.",
    "c_theme": "Confiance",
    "c_auteur": "Proverbes 3:5",
    "c_texte": "Ne t’appuie pas uniquement sur ta propre intelligence ; apprends aussi à faire confiance à plus grand que toi."
  },
  "28-03": {
    "a_cat": "GT / Route",
    "a_titre": "Corvette Racing",
    "a_texte": "Corvette Racing a bâti sa légende sur la constance. Pendant des années, les Corvette jaunes ont été des références en endurance GT, notamment au Mans et en IMSA.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Petit à petit, l’oiseau fait son nid."
  },
  "29-03": {
    "a_cat": "Technique",
    "a_titre": "Télémétrie",
    "a_texte": "La télémétrie a changé le dialogue entre pilote et ingénieur. Autrefois, le pilote racontait ce qu’il sentait ; aujourd’hui, les données confirment, corrigent ou contredisent parfois son impression.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Après la pluie vient le beau temps."
  },
  "30-03": {
    "a_cat": "Technique",
    "a_titre": "Pneus pluie",
    "a_texte": "Les pneus pluie ne servent pas seulement à évacuer l’eau. Ils doivent aussi monter en température, garder une carcasse stable et offrir de la confiance quand l’adhérence change à chaque mètre.",
    "c_theme": "Travail",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Qui veut aller loin ménage sa monture."
  },
  "31-03": {
    "a_cat": "Technique",
    "a_titre": "Pit limiter",
    "a_texte": "Le limiteur de vitesse dans les stands évite les excès dangereux. Mais son activation au bon moment est critique : trop tôt, on perd du temps ; trop tard, la pénalité peut coûter la course.",
    "c_theme": "Discipline",
    "c_auteur": "Anonyme",
    "c_texte": "La motivation lance le mouvement ; la discipline le garde vivant."
  },
  "01-04": {
    "a_cat": "Technique",
    "a_titre": "Undercut",
    "a_texte": "L’undercut consiste à s’arrêter plus tôt que l’adversaire pour profiter de pneus neufs. Il fonctionne surtout quand le pneu neuf donne immédiatement un avantage suffisant pour compenser le temps perdu au stand.",
    "c_theme": "Résilience",
    "c_auteur": "Anonyme",
    "c_texte": "Une mauvaise journée ne définit pas ton chemin entier."
  },
  "02-04": {
    "a_cat": "Technique",
    "a_titre": "Overcut",
    "a_texte": "L’overcut est l’inverse de l’undercut : rester en piste plus longtemps pour profiter d’air libre ou d’un adversaire bloqué. Il demande une excellente gestion des pneus usés.",
    "c_theme": "Foi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Dieu ne promet pas toujours un chemin facile, mais il promet sa présence dans le chemin."
  },
  "03-04": {
    "a_cat": "Technique",
    "a_titre": "Full Course Yellow",
    "a_texte": "En endurance, un Full Course Yellow peut sauver ou ruiner une stratégie. S’arrêter juste avant ou juste après une neutralisation peut changer plusieurs positions sans aucun dépassement en piste.",
    "c_theme": "Humilité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Grandir, c’est accepter d’apprendre même quand on pensait déjà savoir."
  },
  "04-04": {
    "a_cat": "Technique",
    "a_titre": "Trafic multi-classes",
    "a_texte": "Dans les courses multi-classes, les prototypes doivent dépasser les GT sans perdre trop de temps, tandis que les GT doivent rester prévisibles. La confiance entre catégories est une compétence invisible mais essentielle.",
    "c_theme": "Encouragement",
    "c_auteur": "Anonyme",
    "c_texte": "Ce que tu construis en silence finira par parler pour toi."
  },
  "05-04": {
    "a_cat": "Technique",
    "a_titre": "Double relais",
    "a_texte": "Un double relais permet de garder un pilote dans la voiture pendant deux périodes de pneus ou de carburant. C’est efficace si le pilote est rapide et régulier, mais la fatigue augmente le risque d’erreur.",
    "c_theme": "Excellence",
    "c_auteur": "Anonyme",
    "c_texte": "Fais bien les petites choses : elles préparent les grandes."
  },
  "06-04": {
    "a_cat": "Technique",
    "a_titre": "Température pneus",
    "a_texte": "La fenêtre de température d’un pneu peut transformer une voiture. Trop froid, il glisse ; trop chaud, il se dégrade. Le bon pilote sent ce moment avant même que les données ne le confirment.",
    "c_theme": "Courage",
    "c_auteur": "Nelson Mandela",
    "c_texte": "Le courage n’est pas l’absence de peur, mais la capacité d’avancer malgré elle."
  },
  "07-04": {
    "a_cat": "Technique",
    "a_titre": "Aérodynamique sale",
    "a_texte": "Suivre une voiture de près perturbe l’air qui arrive sur les ailerons. Cette “air sale” peut faire perdre de l’appui, user les pneus avant et rendre un dépassement plus difficile qu’il n’en a l’air.",
    "c_theme": "Persévérance",
    "c_auteur": "Winston Churchill",
    "c_texte": "Le succès consiste à aller d’échec en échec sans perdre son enthousiasme."
  },
  "08-04": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Ford GT40 1966",
    "a_texte": "Détail intéressant : en 1966, Ford réussit un triplé aux 24 Heures du Mans avec la GT40. L’arrivée groupée voulue pour la photo créa une polémique : Ken Miles, pourtant immense artisan du projet, fut classé deuxième derrière Bruce McLaren à cause de la distance totale parcourue depuis la position de départ. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Sport",
    "c_auteur": "Michael Jordan",
    "c_texte": "J’accepte l’échec ; je n’accepte pas de ne pas essayer."
  },
  "09-04": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "La Mazda 787B",
    "a_texte": "Détail intéressant : en 1991, la Mazda 787B devint la première voiture à moteur rotatif à remporter les 24 Heures du Mans. Son cri aigu reste l’un des sons les plus reconnaissables de l’histoire de l’endurance. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Sport",
    "c_auteur": "Billie Jean King",
    "c_texte": "Les champions continuent à jouer jusqu’à ce qu’ils réussissent."
  },
  "10-04": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "McLaren F1 GTR 1995",
    "a_texte": "Détail intéressant : en 1995, la McLaren F1 GTR remporta Le Mans dès sa première participation. À l’origine, la F1 était une supercar de route ; sa victoire montra qu’une base routière exceptionnelle pouvait battre des prototypes dans des conditions très difficiles. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe africain",
    "c_texte": "Seul on va plus vite, ensemble on va plus loin."
  },
  "11-04": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Tom Kristensen",
    "a_texte": "Détail intéressant : tom Kristensen est surnommé “Mr Le Mans” grâce à ses neuf victoires aux 24 Heures du Mans. Sa carrière symbolise la régularité plus que le simple coup d’éclat : en endurance, la vitesse doit survivre à la nuit, au trafic et aux erreurs des autres. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe chinois",
    "c_texte": "Un voyage de mille kilomètres commence par un premier pas."
  },
  "12-04": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Jacky Ickx 1969",
    "a_texte": "Détail intéressant : en 1969, Jacky Ickx refusa le traditionnel départ en courant du Mans et marcha calmement vers sa Ford GT40 pour protester contre le danger de cette procédure. Il boucla pourtant la course et gagna pour quelques secondes face à Porsche. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Foi",
    "c_auteur": "Psaume 23",
    "c_texte": "Même dans la vallée sombre, je ne suis pas abandonné."
  },
  "13-04": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Audi R10 TDI",
    "a_texte": "Détail intéressant : en 2006, l’Audi R10 TDI remporta Le Mans avec un moteur diesel. Ce succès changea la perception du diesel en compétition : il n’était plus seulement synonyme d’économie, mais aussi de couple, d’efficacité et de stratégie longue distance. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Espérance",
    "c_auteur": "Romains 8:28",
    "c_texte": "Dieu peut faire concourir toutes choses au bien de ceux qui l’aiment."
  },
  "14-04": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Porsche 917",
    "a_texte": "Détail intéressant : la Porsche 917 donna à Porsche sa première victoire au Mans en 1970. Sa puissance et sa vitesse étaient telles que les pilotes devaient composer avec une voiture aussi fascinante qu’intimidante, surtout sur l’ancienne ligne droite des Hunaudières. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Détermination",
    "c_auteur": "Anonyme",
    "c_texte": "Le progrès n’a pas besoin d’être spectaculaire pour être réel."
  },
  "15-04": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Bentley Speed 8",
    "a_texte": "Détail intéressant : en 2003, Bentley remporta Le Mans avec la Speed 8, mettant fin à une longue attente depuis ses succès historiques des années 1920. Cette victoire reliait deux époques très différentes de l’endurance. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Confiance",
    "c_auteur": "Anonyme",
    "c_texte": "Tu n’as pas besoin de tout maîtriser pour commencer."
  },
  "16-04": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Toyota 2016",
    "a_texte": "Détail intéressant : en 2016, Toyota perdit Le Mans dans le dernier tour alors que la victoire semblait acquise. La TS050 ralentit à quelques minutes de l’arrivée, offrant un exemple brutal de la règle la plus dure de l’endurance : rien n’est gagné avant la ligne. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Gratitude",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La gratitude transforme ce qui manque en rappel de ce qui est déjà donné."
  },
  "17-04": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Toyota première victoire",
    "a_texte": "Détail intéressant : après plusieurs désillusions, Toyota remporta enfin les 24 Heures du Mans en 2018. Cette victoire fut moins un simple résultat qu’une récompense pour des années d’échecs, de développement et de frustration. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Force",
    "c_auteur": "2 Timothée 1:7",
    "c_texte": "Dieu ne nous donne pas un esprit de peur, mais de force, d’amour et de sagesse."
  },
  "18-04": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Peugeot 905",
    "a_texte": "Détail intéressant : la Peugeot 905 domina Le Mans au début des années 1990 avec une approche de prototype très moderne. En 1993, Peugeot signa même un triplé, prouvant la solidité d’un programme français ambitieux. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Intégrité",
    "c_auteur": "Proverbe biblique",
    "c_texte": "Mieux vaut peu avec droiture que beaucoup avec injustice."
  },
  "19-04": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Matra au Mans",
    "a_texte": "Détail intéressant : matra gagna Le Mans trois fois de suite entre 1972 et 1974. Le hurlement de son V12 reste associé à une période où l’endurance française rivalisait au plus haut niveau mondial. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Paix",
    "c_auteur": "Philippiens 4:6-7",
    "c_texte": "Présente tes inquiétudes à Dieu, et sa paix gardera ton cœur."
  },
  "20-04": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "La nuit au Mans",
    "a_texte": "Détail intéressant : la nuit transforme Le Mans en une autre course. Les repères changent, les phares fatiguent les yeux et les pilotes doivent dépasser des voitures de catégories différentes avec parfois plus de 100 km/h d’écart en ligne droite. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Persévérance",
    "c_auteur": "Hébreux 12:1",
    "c_texte": "Cours avec endurance la course qui t’est proposée."
  },
  "21-04": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Hunaudières coupée",
    "a_texte": "Détail intéressant : la ligne droite des Hunaudières était autrefois presque entièrement plate et immense. Les chicanes ajoutées en 1990 ont réduit les vitesses de pointe extrêmes, changeant le caractère du circuit sans enlever sa légende. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Courage",
    "c_auteur": "Anonyme",
    "c_texte": "Le courage commence souvent par une décision que personne ne voit."
  },
  "22-04": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Garage 56 NASCAR",
    "a_texte": "Détail intéressant : en 2023, une Chevrolet Camaro NASCAR participa au Mans dans le cadre du Garage 56. Elle attira énormément d’attention parce qu’elle apportait un son, une taille et une culture de course très différente au milieu des prototypes et GT. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Travail",
    "c_auteur": "Anonyme",
    "c_texte": "Ce que tu répètes aujourd’hui deviendra ton niveau naturel demain."
  },
  "23-04": {
    "a_cat": "GT3",
    "a_titre": "Naissance du GT3",
    "a_texte": "Détail intéressant : la catégorie GT3, lancée au milieu des années 2000, a changé le sport auto client. Au lieu de voitures totalement libres, elle a rendu possible une compétition mondiale entre Porsche, Ferrari, Lamborghini, Mercedes-AMG, Audi ou BMW grâce à la Balance of Performance. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Espérance",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "L’épreuve n’a pas le dernier mot quand l’espérance reste vivante."
  },
  "24-04": {
    "a_cat": "GT3",
    "a_titre": "Balance of Performance",
    "a_texte": "Détail intéressant : la Balance of Performance est souvent critiquée, mais elle est au cœur du GT3. Elle permet à des voitures très différentes — moteur avant, central ou arrière — de courir ensemble sans qu’un seul concept technique écrase tous les autres. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Il n’y a pas de vent favorable pour celui qui ne sait pas où il va."
  },
  "25-04": {
    "a_cat": "GT3",
    "a_titre": "ABS en GT3",
    "a_texte": "Détail intéressant : contrairement à la F1, les GT3 utilisent l’ABS. Cela ne rend pas le freinage facile : le pilote doit tout de même gérer la température, l’usure, les bosses, les pneus et le trafic pendant des relais parfois très longs. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Humilité",
    "c_auteur": "Anonyme",
    "c_texte": "L’orgueil défend ses erreurs ; l’humilité les transforme."
  },
  "26-04": {
    "a_cat": "GT3",
    "a_titre": "Contrôle de traction",
    "a_texte": "Détail intéressant : le contrôle de traction en GT3 n’est pas une aide magique. Il se règle selon la pluie, l’usure des pneus et le style du pilote. Trop intrusif, il ralentit la voiture ; trop permissif, il détruit les pneus ou provoque une erreur. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Patience",
    "c_auteur": "Anonyme",
    "c_texte": "Certaines victoires mûrissent lentement."
  },
  "27-04": {
    "a_cat": "GT3",
    "a_titre": "Spa 24 Heures",
    "a_texte": "Détail intéressant : les 24 Heures de Spa sont l’une des plus grandes courses GT3 au monde. Le circuit combine longues pleines charges, météo imprévisible et virages rapides comme Eau Rouge, ce qui en fait un test complet pour pilotes et voitures. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Encouragement",
    "c_auteur": "Anonyme",
    "c_texte": "Tu peux être fatigué sans être fini."
  },
  "28-04": {
    "a_cat": "GT3",
    "a_titre": "Nürburgring 24h",
    "a_texte": "Détail intéressant : les 24 Heures du Nürburgring se déroulent sur une version immense de la Nordschleife. La piste peut être sèche à un endroit et trempée à un autre, ce qui rend le choix des pneus parfois plus important que la vitesse pure. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Foi",
    "c_auteur": "Matthieu 6:34",
    "c_texte": "Ne laisse pas demain voler la force dont tu as besoin aujourd’hui."
  },
  "29-04": {
    "a_cat": "GT3",
    "a_titre": "Bathurst 12 Hour",
    "a_texte": "Détail intéressant : bathurst est redouté en GT3 parce que les murs sont proches et la montagne ne pardonne pas. Dans la descente, une petite erreur de placement peut transformer une voiture rapide en épave en quelques mètres. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Détermination",
    "c_auteur": "Anonyme",
    "c_texte": "Ce n’est pas parce que c’est lent que c’est inutile."
  },
  "30-04": {
    "a_cat": "GT3",
    "a_titre": "Porsche 911 GT3 R",
    "a_texte": "Détail intéressant : la Porsche 911 GT3 R garde l’ADN du moteur arrière. En GT3 moderne, cette architecture impose des réglages spécifiques mais donne souvent une très bonne motricité en sortie de virage. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Leadership",
    "c_auteur": "Anonyme",
    "c_texte": "Un bon leader ne cherche pas la lumière ; il aide les autres à mieux voir."
  },
  "01-05": {
    "a_cat": "GT3",
    "a_titre": "Mercedes-AMG GT3",
    "a_texte": "Détail intéressant : la Mercedes-AMG GT3 s’est imposée comme une référence client grâce à sa fiabilité, son moteur atmosphérique puissant et sa présence dans de nombreux championnats. Elle montre que le succès GT3 dépend aussi du support offert aux équipes privées. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Courage",
    "c_auteur": "Josué 1:9",
    "c_texte": "Fortifie-toi et prends courage ; ne t’effraie pas, car Dieu marche avec toi dans ce que tu dois affronter."
  },
  "02-05": {
    "a_cat": "GT3",
    "a_titre": "Audi R8 LMS",
    "a_texte": "Détail intéressant : l’Audi R8 LMS a gagné dans de nombreuses séries GT3, de Spa à Bathurst. Son succès repose autant sur sa performance que sur la qualité du programme client Audi Sport, très important dans cette catégorie. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Espérance",
    "c_auteur": "Ésaïe 40:31",
    "c_texte": "Ceux qui placent leur confiance en l’Éternel renouvellent leurs forces et trouvent l’élan pour repartir."
  },
  "03-05": {
    "a_cat": "GT3",
    "a_titre": "Ferrari 296 GT3",
    "a_texte": "Détail intéressant : la Ferrari 296 GT3 a remplacé la 488 GT3 avec une conception profondément revue. Même sans système hybride en course GT3, elle a permis à Ferrari de rester présente au plus haut niveau des courses clients. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Persévérance",
    "c_auteur": "Galates 6:9",
    "c_texte": "Ne te lasse pas de faire le bien : la récolte arrive pour celui qui ne renonce pas."
  },
  "04-05": {
    "a_cat": "GT3",
    "a_titre": "BMW M4 GT3",
    "a_texte": "Détail intéressant : la BMW M4 GT3 a succédé à la M6 GT3 avec une philosophie plus moderne. Sa grande calandre a beaucoup fait parler, mais en piste, son rôle est surtout d’offrir une plateforme plus exploitable pour les équipes clientes. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Paix",
    "c_auteur": "Jean 14:27",
    "c_texte": "La paix véritable ne dépend pas seulement des circonstances ; elle vient d’un cœur gardé par Dieu."
  },
  "05-05": {
    "a_cat": "GT3",
    "a_titre": "Lamborghini Huracán GT3",
    "a_texte": "Détail intéressant : la Lamborghini Huracán GT3 a donné à Lamborghini une vraie crédibilité en compétition client. Sa carrière a montré que la marque pouvait être autre chose qu’un symbole de supercar spectaculaire. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Force",
    "c_auteur": "Philippiens 4:13",
    "c_texte": "Je peux tout par celui qui me fortifie."
  },
  "06-05": {
    "a_cat": "GT3",
    "a_titre": "GT World Challenge",
    "a_texte": "Détail intéressant : le GT World Challenge a construit une vraie scène internationale pour les GT3. Une même marque peut y briller en Europe, en Amérique, en Asie ou en Australie, mais chaque région impose ses propres circuits et styles de course. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Confiance",
    "c_auteur": "Proverbes 3:5",
    "c_texte": "Ne t’appuie pas uniquement sur ta propre intelligence ; apprends aussi à faire confiance à plus grand que toi."
  },
  "07-05": {
    "a_cat": "GT3",
    "a_titre": "Pro-Am en GT3",
    "a_texte": "Détail intéressant : le GT3 vit beaucoup grâce au format Pro-Am : un pilote professionnel partage la voiture avec un gentleman driver. Cette formule mélange business, passion et très haut niveau, ce qui rend la catégorie différente de la F1 ou du WEC usine. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Petit à petit, l’oiseau fait son nid."
  },
  "08-05": {
    "a_cat": "F1",
    "a_titre": "Premier championnat F1",
    "a_texte": "Détail intéressant : le championnat du monde de Formule 1 débuta en 1950 à Silverstone. À l’époque, les voitures avaient peu à voir avec les machines actuelles : pas d’aileron moderne, pas de carbone, pas de télémétrie et une sécurité très limitée. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Après la pluie vient le beau temps."
  },
  "09-05": {
    "a_cat": "F1",
    "a_titre": "Juan Manuel Fangio",
    "a_texte": "Détail intéressant : juan Manuel Fangio remporta cinq titres mondiaux dans les années 1950 avec plusieurs constructeurs différents. Son talent était d’autant plus remarquable qu’il pilotait à une époque où chaque erreur pouvait avoir des conséquences dramatiques. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Travail",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Qui veut aller loin ménage sa monture."
  },
  "10-05": {
    "a_cat": "F1",
    "a_titre": "Jim Clark",
    "a_texte": "Détail intéressant : jim Clark est souvent cité parmi les pilotes les plus naturellement doués. Il brillait en F1, en endurance, en IndyCar et en voitures de tourisme, à une époque où les pilotes passaient beaucoup plus facilement d’une discipline à l’autre. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Discipline",
    "c_auteur": "Anonyme",
    "c_texte": "La motivation lance le mouvement ; la discipline le garde vivant."
  },
  "11-05": {
    "a_cat": "F1",
    "a_titre": "Lotus et l’effet de sol",
    "a_texte": "Détail intéressant : à la fin des années 1970, Lotus exploita l’effet de sol pour coller la voiture à la piste grâce au flux d’air sous le châssis. Cette idée changea profondément l’aérodynamique de la F1. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Résilience",
    "c_auteur": "Anonyme",
    "c_texte": "Une mauvaise journée ne définit pas ton chemin entier."
  },
  "12-05": {
    "a_cat": "F1",
    "a_titre": "Niki Lauda 1976",
    "a_texte": "Détail intéressant : en 1976, Niki Lauda survécut à un terrible accident au Nürburgring et revint en course seulement quelques semaines plus tard. Son retour reste l’un des exemples les plus forts de courage et de lucidité en sport automobile. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Foi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Dieu ne promet pas toujours un chemin facile, mais il promet sa présence dans le chemin."
  },
  "13-05": {
    "a_cat": "F1",
    "a_titre": "Senna Monaco",
    "a_texte": "Détail intéressant : ayrton Senna reste associé à Monaco, où sa précision semblait presque irréelle. Sur ce circuit étroit, le pilote doit être rapide sans jamais dépasser la limite de quelques centimètres. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Humilité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Grandir, c’est accepter d’apprendre même quand on pensait déjà savoir."
  },
  "14-05": {
    "a_cat": "F1",
    "a_titre": "Senna Donington 1993",
    "a_texte": "Détail intéressant : au Grand Prix d’Europe 1993 à Donington, Ayrton Senna réalisa un premier tour devenu légendaire sous la pluie. Il dépassa plusieurs adversaires avec une maîtrise qui illustrait son toucher unique sur piste humide. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Encouragement",
    "c_auteur": "Anonyme",
    "c_texte": "Ce que tu construis en silence finira par parler pour toi."
  },
  "15-05": {
    "a_cat": "F1",
    "a_titre": "Schumacher 1996 Espagne",
    "a_texte": "Détail intéressant : en 1996, Michael Schumacher remporta le Grand Prix d’Espagne sous une pluie intense. Cette victoire avec Ferrari, dans des conditions difficiles, annonça la transformation progressive de l’équipe italienne autour de lui. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Excellence",
    "c_auteur": "Anonyme",
    "c_texte": "Fais bien les petites choses : elles préparent les grandes."
  },
  "16-05": {
    "a_cat": "F1",
    "a_titre": "Ferrari 2004",
    "a_texte": "Détail intéressant : la Ferrari F2004 fut l’une des F1 les plus dominantes de l’histoire moderne. Elle symbolise l’époque Schumacher-Todt-Brawn-Byrne, où stratégie, fiabilité et vitesse formaient un bloc presque imbattable. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Courage",
    "c_auteur": "Nelson Mandela",
    "c_texte": "Le courage n’est pas l’absence de peur, mais la capacité d’avancer malgré elle."
  },
  "17-05": {
    "a_cat": "F1",
    "a_titre": "Brawn GP 2009",
    "a_texte": "Détail intéressant : brawn GP remporta le championnat 2009 après avoir failli ne jamais participer à la saison. Le double diffuseur et une excellente exploitation du règlement permirent à une équipe née dans l’urgence de battre les géants. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Persévérance",
    "c_auteur": "Winston Churchill",
    "c_texte": "Le succès consiste à aller d’échec en échec sans perdre son enthousiasme."
  },
  "18-05": {
    "a_cat": "F1",
    "a_titre": "Red Bull 2010-2013",
    "a_texte": "Détail intéressant : entre 2010 et 2013, Red Bull domina la F1 avec Sebastian Vettel grâce à une aérodynamique exceptionnelle. La capacité d’Adrian Newey à exploiter les flux d’air fut aussi décisive que le pilotage. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Sport",
    "c_auteur": "Michael Jordan",
    "c_texte": "J’accepte l’échec ; je n’accepte pas de ne pas essayer."
  },
  "19-05": {
    "a_cat": "F1",
    "a_titre": "Mercedes hybride",
    "a_texte": "Détail intéressant : à partir de 2014, Mercedes domina l’ère hybride de la F1. Son moteur très efficace et son intégration châssis-propulseur donnèrent à l’équipe une avance que les autres mirent des années à réduire. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Sport",
    "c_auteur": "Billie Jean King",
    "c_texte": "Les champions continuent à jouer jusqu’à ce qu’ils réussissent."
  },
  "20-05": {
    "a_cat": "F1",
    "a_titre": "Hamilton Silverstone 2008",
    "a_texte": "Détail intéressant : en 2008, Lewis Hamilton domina le Grand Prix de Grande-Bretagne sous une pluie difficile. Sa marge à l’arrivée fut énorme et la course renforça sa réputation de pilote exceptionnel dans les conditions changeantes. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe africain",
    "c_texte": "Seul on va plus vite, ensemble on va plus loin."
  },
  "21-05": {
    "a_cat": "F1",
    "a_titre": "Verstappen Brésil 2016",
    "a_texte": "Détail intéressant : au Brésil 2016, Max Verstappen réalisa une remontée spectaculaire sous la pluie. Ses trajectoires différentes et son contrôle de la voiture révélèrent un instinct de pilotage rare dans des conditions extrêmes. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe chinois",
    "c_texte": "Un voyage de mille kilomètres commence par un premier pas."
  },
  "22-05": {
    "a_cat": "F1",
    "a_titre": "Monaco impossible à doubler",
    "a_texte": "Détail intéressant : monaco est souvent critiqué pour le manque de dépassements, mais c’est aussi ce qui rend la qualification si intense. Sur ce circuit, partir devant peut valoir plus qu’une stratégie parfaite. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Foi",
    "c_auteur": "Psaume 23",
    "c_texte": "Même dans la vallée sombre, je ne suis pas abandonné."
  },
  "23-05": {
    "a_cat": "F1",
    "a_titre": "DRS",
    "a_texte": "Détail intéressant : le DRS a été introduit pour faciliter les dépassements en réduisant la traînée dans certaines zones. Il ne remplace pas le talent : le pilote doit encore préparer la sortie de virage et oser freiner au bon moment. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Espérance",
    "c_auteur": "Romains 8:28",
    "c_texte": "Dieu peut faire concourir toutes choses au bien de ceux qui l’aiment."
  },
  "24-05": {
    "a_cat": "F1",
    "a_titre": "Halo",
    "a_texte": "Détail intéressant : le halo a été critiqué à son introduction, surtout pour son apparence. Plusieurs incidents ont ensuite montré son importance en matière de sécurité, rappelant que le progrès technique n’est pas toujours populaire au départ. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Détermination",
    "c_auteur": "Anonyme",
    "c_texte": "Le progrès n’a pas besoin d’être spectaculaire pour être réel."
  },
  "25-05": {
    "a_cat": "F1",
    "a_titre": "Freins carbone",
    "a_texte": "Détail intéressant : les freins carbone d’une F1 doivent fonctionner à très haute température. À froid, ils peuvent être moins efficaces, ce qui rend les tours de sortie et les relances après Safety Car particulièrement délicats. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Confiance",
    "c_auteur": "Anonyme",
    "c_texte": "Tu n’as pas besoin de tout maîtriser pour commencer."
  },
  "26-05": {
    "a_cat": "F1",
    "a_titre": "Arrêts aux stands modernes",
    "a_texte": "Détail intéressant : les arrêts aux stands modernes en F1 sont devenus une discipline en soi. Une vingtaine de mécaniciens coordonnent leurs gestes en quelques secondes, et une seule roue mal fixée peut ruiner un Grand Prix entier. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Gratitude",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La gratitude transforme ce qui manque en rappel de ce qui est déjà donné."
  },
  "27-05": {
    "a_cat": "F1",
    "a_titre": "Williams FW14B",
    "a_texte": "Détail intéressant : la Williams FW14B de 1992 utilisait une suspension active très avancée. Nigel Mansell domina la saison, montrant que l’électronique et l’aérodynamique pouvaient transformer l’équilibre d’une F1. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Force",
    "c_auteur": "2 Timothée 1:7",
    "c_texte": "Dieu ne nous donne pas un esprit de peur, mais de force, d’amour et de sagesse."
  },
  "28-05": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Audi Quattro",
    "a_texte": "Détail intéressant : l’Audi Quattro changea le rallye en imposant la transmission intégrale au plus haut niveau. Après elle, il devint difficile d’imaginer une voiture de rallye moderne sans quatre roues motrices. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Intégrité",
    "c_auteur": "Proverbe biblique",
    "c_texte": "Mieux vaut peu avec droiture que beaucoup avec injustice."
  },
  "29-05": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Groupe B",
    "a_texte": "Détail intéressant : le Groupe B reste l’une des périodes les plus folles du rallye. Les voitures étaient extrêmement puissantes, les spectateurs très proches et la sécurité insuffisante, ce qui rendit cette époque spectaculaire mais dangereuse. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Paix",
    "c_auteur": "Philippiens 4:6-7",
    "c_texte": "Présente tes inquiétudes à Dieu, et sa paix gardera ton cœur."
  },
  "30-05": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Michèle Mouton",
    "a_texte": "Détail intéressant : michèle Mouton fut l’une des grandes figures du rallye mondial avec Audi. Elle gagna des manches de championnat du monde et prouva que le talent ne dépendait pas du genre dans une discipline extrêmement exigeante. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Persévérance",
    "c_auteur": "Hébreux 12:1",
    "c_texte": "Cours avec endurance la course qui t’est proposée."
  },
  "31-05": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Sébastien Loeb",
    "a_texte": "Détail intéressant : sébastien Loeb domina le WRC avec une régularité impressionnante. Ancien gymnaste, il apporta au rallye une précision et une capacité d’adaptation qui lui permirent de gagner sur terre, asphalte, neige et glace. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Courage",
    "c_auteur": "Anonyme",
    "c_texte": "Le courage commence souvent par une décision que personne ne voit."
  },
  "01-06": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Colin McRae",
    "a_texte": "Détail intéressant : colin McRae incarnait un style de rallye agressif et spectaculaire. Sa devise populaire, “if in doubt, flat out”, résume une approche courageuse mais risquée qui a marqué toute une génération de fans. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Travail",
    "c_auteur": "Anonyme",
    "c_texte": "Ce que tu répètes aujourd’hui deviendra ton niveau naturel demain."
  },
  "02-06": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Monte-Carlo",
    "a_texte": "Détail intéressant : le Rallye Monte-Carlo est célèbre pour ses conditions imprévisibles. Une spéciale peut mélanger asphalte sec, neige, glace et plaques humides, obligeant les équipages à accepter une part d’incertitude dans le choix des pneus. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Espérance",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "L’épreuve n’a pas le dernier mot quand l’espérance reste vivante."
  },
  "03-06": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Finlande",
    "a_texte": "Détail intéressant : le Rallye de Finlande est surnommé le Grand Prix sur terre. Les voitures y volent littéralement sur des bosses rapides, et les pilotes locaux y ont longtemps possédé un avantage grâce à leur connaissance du terrain. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Il n’y a pas de vent favorable pour celui qui ne sait pas où il va."
  },
  "04-06": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Safari Rally",
    "a_texte": "Détail intéressant : le Safari Rally a longtemps été l’une des épreuves les plus dures du calendrier. Poussière, chaleur, pierres, boue et longues distances y mettaient les voitures autant à l’épreuve que les équipages. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Humilité",
    "c_auteur": "Anonyme",
    "c_texte": "L’orgueil défend ses erreurs ; l’humilité les transforme."
  },
  "05-06": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Pikes Peak",
    "a_texte": "Détail intéressant : pikes Peak est une montée mythique où la puissance ne suffit pas. L’altitude réduit les performances, les virages s’enchaînent sans droit à l’erreur et la météo peut changer rapidement en montant vers le sommet. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Patience",
    "c_auteur": "Anonyme",
    "c_texte": "Certaines victoires mûrissent lentement."
  },
  "06-06": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Peugeot 405 T16 Pikes Peak",
    "a_texte": "Détail intéressant : la Peugeot 405 T16 de Pikes Peak est devenue mythique grâce au film “Climb Dance”. Les images d’Ari Vatanen attaquant la montagne au soleil levant ont transformé une course de côte en morceau de cinéma automobile. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Encouragement",
    "c_auteur": "Anonyme",
    "c_texte": "Tu peux être fatigué sans être fini."
  },
  "07-06": {
    "a_cat": "IMSA / Daytona",
    "a_titre": "Daytona 24",
    "a_texte": "Détail intéressant : les 24 Heures de Daytona mélangent banking ovale et portion routière. Cette combinaison oblige les équipes à trouver un compromis rare : une voiture stable à haute vitesse mais efficace dans les freinages lents. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Foi",
    "c_auteur": "Matthieu 6:34",
    "c_texte": "Ne laisse pas demain voler la force dont tu as besoin aujourd’hui."
  },
  "08-06": {
    "a_cat": "IMSA / Daytona",
    "a_titre": "Rolex Daytona",
    "a_texte": "Détail intéressant : la victoire aux 24 Heures de Daytona offre traditionnellement une montre Rolex aux vainqueurs. C’est l’un des trophées les plus désirés du sport auto, parce qu’il symbolise autant la réussite que la résistance. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Détermination",
    "c_auteur": "Anonyme",
    "c_texte": "Ce n’est pas parce que c’est lent que c’est inutile."
  },
  "09-06": {
    "a_cat": "IMSA / Sebring",
    "a_titre": "Sebring bosselé",
    "a_texte": "Détail intéressant : sebring est connu pour ses bosses et ses plaques de béton issues d’un ancien aérodrome. Les voitures y souffrent énormément, ce qui en fait une répétition brutale pour les programmes d’endurance. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Leadership",
    "c_auteur": "Anonyme",
    "c_texte": "Un bon leader ne cherche pas la lumière ; il aide les autres à mieux voir."
  },
  "10-06": {
    "a_cat": "IMSA / Petit Le Mans",
    "a_titre": "Petit Le Mans",
    "a_texte": "Détail intéressant : petit Le Mans, à Road Atlanta, condense l’esprit de l’endurance sur une course plus courte que Le Mans mais souvent très intense. Le trafic y est constant et les neutralisations peuvent bouleverser la stratégie. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Courage",
    "c_auteur": "Josué 1:9",
    "c_texte": "Fortifie-toi et prends courage ; ne t’effraie pas, car Dieu marche avec toi dans ce que tu dois affronter."
  },
  "11-06": {
    "a_cat": "IMSA",
    "a_titre": "Deltawing",
    "a_texte": "Détail intéressant : la Deltawing intrigua le monde de l’endurance avec sa silhouette étroite à l’avant. Même si le projet n’a pas tout gagné, il a rappelé que l’innovation passe parfois par des formes qui semblent absurdes au premier regard. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Espérance",
    "c_auteur": "Ésaïe 40:31",
    "c_texte": "Ceux qui placent leur confiance en l’Éternel renouvellent leurs forces et trouvent l’élan pour repartir."
  },
  "12-06": {
    "a_cat": "Supercars / Bathurst",
    "a_titre": "Bathurst 1000",
    "a_texte": "Détail intéressant : le Bathurst 1000 est une course culte en Australie. Mount Panorama ressemble à deux circuits en un : une montée et une descente de montagne très techniques, puis de longues sections rapides où l’aspiration compte énormément. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Persévérance",
    "c_auteur": "Galates 6:9",
    "c_texte": "Ne te lasse pas de faire le bien : la récolte arrive pour celui qui ne renonce pas."
  },
  "13-06": {
    "a_cat": "Supercars / Bathurst",
    "a_titre": "Peter Brock",
    "a_texte": "Détail intéressant : peter Brock est une légende de Bathurst, où il a gagné neuf fois. En Australie, son nom dépasse le sport automobile : il incarne une culture populaire liée aux voitures de tourisme et aux grands duels Ford-Holden. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Paix",
    "c_auteur": "Jean 14:27",
    "c_texte": "La paix véritable ne dépend pas seulement des circonstances ; elle vient d’un cœur gardé par Dieu."
  },
  "14-06": {
    "a_cat": "Supercars / Bathurst",
    "a_titre": "Murs de Bathurst",
    "a_texte": "Détail intéressant : à Bathurst, les murs sont si proches que les pilotes disent souvent que le circuit “ne pardonne rien”. Une voiture légèrement mal placée dans la descente peut déclencher un accident en chaîne. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Force",
    "c_auteur": "Philippiens 4:13",
    "c_texte": "Je peux tout par celui qui me fortifie."
  },
  "15-06": {
    "a_cat": "Nürburgring",
    "a_titre": "Nordschleife",
    "a_texte": "Détail intéressant : la Nordschleife est surnommée “l’Enfer vert”. Sa longueur, ses bosses, ses changements d’adhérence et ses virages aveugles la rendent très différente des circuits modernes plus courts et plus standardisés. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Confiance",
    "c_auteur": "Proverbes 3:5",
    "c_texte": "Ne t’appuie pas uniquement sur ta propre intelligence ; apprends aussi à faire confiance à plus grand que toi."
  },
  "16-06": {
    "a_cat": "Nürburgring",
    "a_titre": "Record Stefan Bellof",
    "a_texte": "Détail intéressant : stefan Bellof signa en 1983 un tour devenu mythique de la Nordschleife avec une Porsche 956. Ce chrono resta une référence pendant des décennies et participa à la légende du circuit. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Petit à petit, l’oiseau fait son nid."
  },
  "17-06": {
    "a_cat": "Nürburgring",
    "a_titre": "Météo locale",
    "a_texte": "Détail intéressant : sur la Nordschleife, la météo peut varier d’un secteur à l’autre. Une équipe peut chausser des slicks parce que les stands sont au sec, puis découvrir une portion humide ou brumeuse plusieurs kilomètres plus loin. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Après la pluie vient le beau temps."
  },
  "18-06": {
    "a_cat": "IndyCar",
    "a_titre": "Indy 500",
    "a_texte": "Détail intéressant : les 500 Miles d’Indianapolis ne sont pas seulement une course rapide. Les pilotes doivent gérer l’aspiration, les arrêts, le trafic, le carburant et la peur permanente de toucher le mur à très haute vitesse. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Travail",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Qui veut aller loin ménage sa monture."
  },
  "19-06": {
    "a_cat": "IndyCar",
    "a_titre": "Triple Couronne",
    "a_texte": "Détail intéressant : la Triple Couronne informelle du sport auto associe souvent Monaco, Le Mans et Indianapolis. Graham Hill reste le seul pilote à avoir gagné les trois, ce qui montre la rareté d’une telle polyvalence. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Discipline",
    "c_auteur": "Anonyme",
    "c_texte": "La motivation lance le mouvement ; la discipline le garde vivant."
  },
  "20-06": {
    "a_cat": "IndyCar",
    "a_titre": "Mansell en IndyCar",
    "a_texte": "Détail intéressant : nigel Mansell quitta la F1 après son titre 1992 et remporta le championnat IndyCar dès 1993. Peu de pilotes ont réussi une transition aussi spectaculaire entre deux mondes aussi différents. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Résilience",
    "c_auteur": "Anonyme",
    "c_texte": "Une mauvaise journée ne définit pas ton chemin entier."
  },
  "21-06": {
    "a_cat": "NASCAR",
    "a_titre": "Daytona 500",
    "a_texte": "Détail intéressant : le Daytona 500 est la course la plus prestigieuse de la NASCAR. La stratégie d’aspiration y est essentielle : un pilote seul peut être rapide, mais un bon partenaire de draft peut transformer une course. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Foi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Dieu ne promet pas toujours un chemin facile, mais il promet sa présence dans le chemin."
  },
  "22-06": {
    "a_cat": "NASCAR",
    "a_titre": "Dale Earnhardt",
    "a_texte": "Détail intéressant : dale Earnhardt attendit longtemps avant de gagner enfin le Daytona 500 en 1998. Après la course, les mécaniciens et membres des équipes adverses l’applaudirent dans la pit lane, signe rare de respect collectif. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Humilité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Grandir, c’est accepter d’apprendre même quand on pensait déjà savoir."
  },
  "23-06": {
    "a_cat": "Dakar",
    "a_titre": "Dakar origine",
    "a_texte": "Détail intéressant : le Dakar naquit d’une aventure où l’orientation comptait autant que la vitesse. Contrairement à une course sur circuit, l’équipage doit survivre au terrain, à la navigation, à la fatigue et aux imprévus mécaniques. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Encouragement",
    "c_auteur": "Anonyme",
    "c_texte": "Ce que tu construis en silence finira par parler pour toi."
  },
  "24-06": {
    "a_cat": "Dakar",
    "a_titre": "Ari Vatanen Dakar",
    "a_texte": "Détail intéressant : ari Vatanen gagna plusieurs fois le Dakar après sa carrière en rallye mondial. Son parcours montre que la vitesse pure doit devenir endurance mentale quand la course dure des jours dans le désert. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Excellence",
    "c_auteur": "Anonyme",
    "c_texte": "Fais bien les petites choses : elles préparent les grandes."
  },
  "25-06": {
    "a_cat": "Dakar",
    "a_titre": "Camions du Dakar",
    "a_texte": "Détail intéressant : les camions du Dakar impressionnent par leur taille, mais ils roulent à un rythme étonnant sur des terrains cassants. Les voir sauter sur les dunes rappelle que la notion de “voiture de course” peut prendre des formes très différentes. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Courage",
    "c_auteur": "Nelson Mandela",
    "c_texte": "Le courage n’est pas l’absence de peur, mais la capacité d’avancer malgré elle."
  },
  "26-06": {
    "a_cat": "DTM",
    "a_titre": "DTM années 1990",
    "a_texte": "Détail intéressant : le DTM des années 1990 mélangeait voitures de tourisme agressives, technologie avancée et duels très physiques. Les Alfa Romeo, Mercedes et Opel ont marqué une génération de fans européens. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Persévérance",
    "c_auteur": "Winston Churchill",
    "c_texte": "Le succès consiste à aller d’échec en échec sans perdre son enthousiasme."
  },
  "27-06": {
    "a_cat": "DTM",
    "a_titre": "Alfa 155 V6 TI",
    "a_texte": "Détail intéressant : l’Alfa Romeo 155 V6 TI domina le DTM 1993 avec sa transmission intégrale et son V6 hurlant. Elle reste l’une des voitures de tourisme les plus aimées par les passionnés. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Sport",
    "c_auteur": "Michael Jordan",
    "c_texte": "J’accepte l’échec ; je n’accepte pas de ne pas essayer."
  },
  "28-06": {
    "a_cat": "Tourisme",
    "a_titre": "BTCC contact",
    "a_texte": "Détail intéressant : le BTCC britannique est célèbre pour ses courses de tourisme musclées. Les contacts y font partie de la culture, mais la vraie difficulté reste de rester rapide malgré une voiture parfois abîmée. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Sport",
    "c_auteur": "Billie Jean King",
    "c_texte": "Les champions continuent à jouer jusqu’à ce qu’ils réussissent."
  },
  "29-06": {
    "a_cat": "Tourisme",
    "a_titre": "Volvo break BTCC",
    "a_texte": "Détail intéressant : en 1994, Volvo engagea un break 850 en BTCC. L’image d’un break familial attaquant les circuits britanniques est devenue culte, même si l’idée était aussi un coup marketing très intelligent. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe africain",
    "c_texte": "Seul on va plus vite, ensemble on va plus loin."
  },
  "30-06": {
    "a_cat": "GT / Route",
    "a_titre": "Ferrari F40 LM",
    "a_texte": "Détail intéressant : la Ferrari F40 LM transforma une icône de route en machine de course extrême. Plus brutale, plus légère et plus rare, elle montre comment une supercar peut devenir encore plus radicale une fois libérée des compromis routiers. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe chinois",
    "c_texte": "Un voyage de mille kilomètres commence par un premier pas."
  },
  "01-07": {
    "a_cat": "GT / Route",
    "a_titre": "Porsche 911 RSR",
    "a_texte": "Détail intéressant : la Porsche 911 RSR a longtemps défendu l’idée qu’une architecture née pour la route pouvait rester compétitive en endurance. Le moteur arrière, souvent critiqué, est devenu une partie de son identité en course. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Foi",
    "c_auteur": "Psaume 23",
    "c_texte": "Même dans la vallée sombre, je ne suis pas abandonné."
  },
  "02-07": {
    "a_cat": "GT / Route",
    "a_titre": "Viper GTS-R",
    "a_texte": "Détail intéressant : la Dodge Viper GTS-R a marqué les années 1990 et 2000 en GT. Son énorme V10 et son style brutal contrastaient avec les européennes plus fines, mais elle s’est imposée dans les plus grandes courses d’endurance. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Espérance",
    "c_auteur": "Romains 8:28",
    "c_texte": "Dieu peut faire concourir toutes choses au bien de ceux qui l’aiment."
  },
  "03-07": {
    "a_cat": "GT / Route",
    "a_titre": "Corvette Racing",
    "a_texte": "Détail intéressant : corvette Racing a bâti sa légende sur la constance. Pendant des années, les Corvette jaunes ont été des références en endurance GT, notamment au Mans et en IMSA. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Détermination",
    "c_auteur": "Anonyme",
    "c_texte": "Le progrès n’a pas besoin d’être spectaculaire pour être réel."
  },
  "04-07": {
    "a_cat": "Technique",
    "a_titre": "Télémétrie",
    "a_texte": "Détail intéressant : la télémétrie a changé le dialogue entre pilote et ingénieur. Autrefois, le pilote racontait ce qu’il sentait ; aujourd’hui, les données confirment, corrigent ou contredisent parfois son impression. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Confiance",
    "c_auteur": "Anonyme",
    "c_texte": "Tu n’as pas besoin de tout maîtriser pour commencer."
  },
  "05-07": {
    "a_cat": "Technique",
    "a_titre": "Pneus pluie",
    "a_texte": "Détail intéressant : les pneus pluie ne servent pas seulement à évacuer l’eau. Ils doivent aussi monter en température, garder une carcasse stable et offrir de la confiance quand l’adhérence change à chaque mètre. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Gratitude",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La gratitude transforme ce qui manque en rappel de ce qui est déjà donné."
  },
  "06-07": {
    "a_cat": "Technique",
    "a_titre": "Pit limiter",
    "a_texte": "Détail intéressant : le limiteur de vitesse dans les stands évite les excès dangereux. Mais son activation au bon moment est critique : trop tôt, on perd du temps ; trop tard, la pénalité peut coûter la course. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Force",
    "c_auteur": "2 Timothée 1:7",
    "c_texte": "Dieu ne nous donne pas un esprit de peur, mais de force, d’amour et de sagesse."
  },
  "07-07": {
    "a_cat": "Technique",
    "a_titre": "Undercut",
    "a_texte": "Détail intéressant : l’undercut consiste à s’arrêter plus tôt que l’adversaire pour profiter de pneus neufs. Il fonctionne surtout quand le pneu neuf donne immédiatement un avantage suffisant pour compenser le temps perdu au stand. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Intégrité",
    "c_auteur": "Proverbe biblique",
    "c_texte": "Mieux vaut peu avec droiture que beaucoup avec injustice."
  },
  "08-07": {
    "a_cat": "Technique",
    "a_titre": "Overcut",
    "a_texte": "Détail intéressant : l’overcut est l’inverse de l’undercut : rester en piste plus longtemps pour profiter d’air libre ou d’un adversaire bloqué. Il demande une excellente gestion des pneus usés. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Paix",
    "c_auteur": "Philippiens 4:6-7",
    "c_texte": "Présente tes inquiétudes à Dieu, et sa paix gardera ton cœur."
  },
  "09-07": {
    "a_cat": "Technique",
    "a_titre": "Full Course Yellow",
    "a_texte": "Détail intéressant : en endurance, un Full Course Yellow peut sauver ou ruiner une stratégie. S’arrêter juste avant ou juste après une neutralisation peut changer plusieurs positions sans aucun dépassement en piste. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Persévérance",
    "c_auteur": "Hébreux 12:1",
    "c_texte": "Cours avec endurance la course qui t’est proposée."
  },
  "10-07": {
    "a_cat": "Technique",
    "a_titre": "Trafic multi-classes",
    "a_texte": "Détail intéressant : dans les courses multi-classes, les prototypes doivent dépasser les GT sans perdre trop de temps, tandis que les GT doivent rester prévisibles. La confiance entre catégories est une compétence invisible mais essentielle. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Courage",
    "c_auteur": "Anonyme",
    "c_texte": "Le courage commence souvent par une décision que personne ne voit."
  },
  "11-07": {
    "a_cat": "Technique",
    "a_titre": "Double relais",
    "a_texte": "Détail intéressant : un double relais permet de garder un pilote dans la voiture pendant deux périodes de pneus ou de carburant. C’est efficace si le pilote est rapide et régulier, mais la fatigue augmente le risque d’erreur. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Travail",
    "c_auteur": "Anonyme",
    "c_texte": "Ce que tu répètes aujourd’hui deviendra ton niveau naturel demain."
  },
  "12-07": {
    "a_cat": "Technique",
    "a_titre": "Température pneus",
    "a_texte": "Détail intéressant : la fenêtre de température d’un pneu peut transformer une voiture. Trop froid, il glisse ; trop chaud, il se dégrade. Le bon pilote sent ce moment avant même que les données ne le confirment. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Espérance",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "L’épreuve n’a pas le dernier mot quand l’espérance reste vivante."
  },
  "13-07": {
    "a_cat": "Technique",
    "a_titre": "Aérodynamique sale",
    "a_texte": "Détail intéressant : suivre une voiture de près perturbe l’air qui arrive sur les ailerons. Cette “air sale” peut faire perdre de l’appui, user les pneus avant et rendre un dépassement plus difficile qu’il n’en a l’air. Ce n’est pas seulement une statistique : cela rappelle que la course récompense autant la préparation que la vitesse.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Il n’y a pas de vent favorable pour celui qui ne sait pas où il va."
  },
  "14-07": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Ford GT40 1966",
    "a_texte": "Ce fait mérite d’être retenu : en 1966, Ford réussit un triplé aux 24 Heures du Mans avec la GT40. L’arrivée groupée voulue pour la photo créa une polémique : Ken Miles, pourtant immense artisan du projet, fut classé deuxième derrière Bruce McLaren à cause de la distance totale parcourue depuis la position de départ. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Humilité",
    "c_auteur": "Anonyme",
    "c_texte": "L’orgueil défend ses erreurs ; l’humilité les transforme."
  },
  "15-07": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "La Mazda 787B",
    "a_texte": "Ce fait mérite d’être retenu : en 1991, la Mazda 787B devint la première voiture à moteur rotatif à remporter les 24 Heures du Mans. Son cri aigu reste l’un des sons les plus reconnaissables de l’histoire de l’endurance. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Patience",
    "c_auteur": "Anonyme",
    "c_texte": "Certaines victoires mûrissent lentement."
  },
  "16-07": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "McLaren F1 GTR 1995",
    "a_texte": "Ce fait mérite d’être retenu : en 1995, la McLaren F1 GTR remporta Le Mans dès sa première participation. À l’origine, la F1 était une supercar de route ; sa victoire montra qu’une base routière exceptionnelle pouvait battre des prototypes dans des conditions très difficiles. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Encouragement",
    "c_auteur": "Anonyme",
    "c_texte": "Tu peux être fatigué sans être fini."
  },
  "17-07": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Tom Kristensen",
    "a_texte": "Ce fait mérite d’être retenu : tom Kristensen est surnommé “Mr Le Mans” grâce à ses neuf victoires aux 24 Heures du Mans. Sa carrière symbolise la régularité plus que le simple coup d’éclat : en endurance, la vitesse doit survivre à la nuit, au trafic et aux erreurs des autres. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Foi",
    "c_auteur": "Matthieu 6:34",
    "c_texte": "Ne laisse pas demain voler la force dont tu as besoin aujourd’hui."
  },
  "18-07": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Jacky Ickx 1969",
    "a_texte": "Ce fait mérite d’être retenu : en 1969, Jacky Ickx refusa le traditionnel départ en courant du Mans et marcha calmement vers sa Ford GT40 pour protester contre le danger de cette procédure. Il boucla pourtant la course et gagna pour quelques secondes face à Porsche. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Détermination",
    "c_auteur": "Anonyme",
    "c_texte": "Ce n’est pas parce que c’est lent que c’est inutile."
  },
  "19-07": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Audi R10 TDI",
    "a_texte": "Ce fait mérite d’être retenu : en 2006, l’Audi R10 TDI remporta Le Mans avec un moteur diesel. Ce succès changea la perception du diesel en compétition : il n’était plus seulement synonyme d’économie, mais aussi de couple, d’efficacité et de stratégie longue distance. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Leadership",
    "c_auteur": "Anonyme",
    "c_texte": "Un bon leader ne cherche pas la lumière ; il aide les autres à mieux voir."
  },
  "20-07": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Porsche 917",
    "a_texte": "Ce fait mérite d’être retenu : la Porsche 917 donna à Porsche sa première victoire au Mans en 1970. Sa puissance et sa vitesse étaient telles que les pilotes devaient composer avec une voiture aussi fascinante qu’intimidante, surtout sur l’ancienne ligne droite des Hunaudières. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Courage",
    "c_auteur": "Josué 1:9",
    "c_texte": "Fortifie-toi et prends courage ; ne t’effraie pas, car Dieu marche avec toi dans ce que tu dois affronter."
  },
  "21-07": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Bentley Speed 8",
    "a_texte": "Ce fait mérite d’être retenu : en 2003, Bentley remporta Le Mans avec la Speed 8, mettant fin à une longue attente depuis ses succès historiques des années 1920. Cette victoire reliait deux époques très différentes de l’endurance. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Espérance",
    "c_auteur": "Ésaïe 40:31",
    "c_texte": "Ceux qui placent leur confiance en l’Éternel renouvellent leurs forces et trouvent l’élan pour repartir."
  },
  "22-07": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Toyota 2016",
    "a_texte": "Ce fait mérite d’être retenu : en 2016, Toyota perdit Le Mans dans le dernier tour alors que la victoire semblait acquise. La TS050 ralentit à quelques minutes de l’arrivée, offrant un exemple brutal de la règle la plus dure de l’endurance : rien n’est gagné avant la ligne. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Persévérance",
    "c_auteur": "Galates 6:9",
    "c_texte": "Ne te lasse pas de faire le bien : la récolte arrive pour celui qui ne renonce pas."
  },
  "23-07": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Toyota première victoire",
    "a_texte": "Ce fait mérite d’être retenu : après plusieurs désillusions, Toyota remporta enfin les 24 Heures du Mans en 2018. Cette victoire fut moins un simple résultat qu’une récompense pour des années d’échecs, de développement et de frustration. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Paix",
    "c_auteur": "Jean 14:27",
    "c_texte": "La paix véritable ne dépend pas seulement des circonstances ; elle vient d’un cœur gardé par Dieu."
  },
  "24-07": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Peugeot 905",
    "a_texte": "Ce fait mérite d’être retenu : la Peugeot 905 domina Le Mans au début des années 1990 avec une approche de prototype très moderne. En 1993, Peugeot signa même un triplé, prouvant la solidité d’un programme français ambitieux. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Force",
    "c_auteur": "Philippiens 4:13",
    "c_texte": "Je peux tout par celui qui me fortifie."
  },
  "25-07": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Matra au Mans",
    "a_texte": "Ce fait mérite d’être retenu : matra gagna Le Mans trois fois de suite entre 1972 et 1974. Le hurlement de son V12 reste associé à une période où l’endurance française rivalisait au plus haut niveau mondial. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Confiance",
    "c_auteur": "Proverbes 3:5",
    "c_texte": "Ne t’appuie pas uniquement sur ta propre intelligence ; apprends aussi à faire confiance à plus grand que toi."
  },
  "26-07": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "La nuit au Mans",
    "a_texte": "Ce fait mérite d’être retenu : la nuit transforme Le Mans en une autre course. Les repères changent, les phares fatiguent les yeux et les pilotes doivent dépasser des voitures de catégories différentes avec parfois plus de 100 km/h d’écart en ligne droite. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Petit à petit, l’oiseau fait son nid."
  },
  "27-07": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Hunaudières coupée",
    "a_texte": "Ce fait mérite d’être retenu : la ligne droite des Hunaudières était autrefois presque entièrement plate et immense. Les chicanes ajoutées en 1990 ont réduit les vitesses de pointe extrêmes, changeant le caractère du circuit sans enlever sa légende. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Après la pluie vient le beau temps."
  },
  "28-07": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Garage 56 NASCAR",
    "a_texte": "Ce fait mérite d’être retenu : en 2023, une Chevrolet Camaro NASCAR participa au Mans dans le cadre du Garage 56. Elle attira énormément d’attention parce qu’elle apportait un son, une taille et une culture de course très différente au milieu des prototypes et GT. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Travail",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Qui veut aller loin ménage sa monture."
  },
  "29-07": {
    "a_cat": "GT3",
    "a_titre": "Naissance du GT3",
    "a_texte": "Ce fait mérite d’être retenu : la catégorie GT3, lancée au milieu des années 2000, a changé le sport auto client. Au lieu de voitures totalement libres, elle a rendu possible une compétition mondiale entre Porsche, Ferrari, Lamborghini, Mercedes-AMG, Audi ou BMW grâce à la Balance of Performance. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Discipline",
    "c_auteur": "Anonyme",
    "c_texte": "La motivation lance le mouvement ; la discipline le garde vivant."
  },
  "30-07": {
    "a_cat": "GT3",
    "a_titre": "Balance of Performance",
    "a_texte": "Ce fait mérite d’être retenu : la Balance of Performance est souvent critiquée, mais elle est au cœur du GT3. Elle permet à des voitures très différentes — moteur avant, central ou arrière — de courir ensemble sans qu’un seul concept technique écrase tous les autres. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Résilience",
    "c_auteur": "Anonyme",
    "c_texte": "Une mauvaise journée ne définit pas ton chemin entier."
  },
  "31-07": {
    "a_cat": "GT3",
    "a_titre": "ABS en GT3",
    "a_texte": "Ce fait mérite d’être retenu : contrairement à la F1, les GT3 utilisent l’ABS. Cela ne rend pas le freinage facile : le pilote doit tout de même gérer la température, l’usure, les bosses, les pneus et le trafic pendant des relais parfois très longs. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Foi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Dieu ne promet pas toujours un chemin facile, mais il promet sa présence dans le chemin."
  },
  "01-08": {
    "a_cat": "GT3",
    "a_titre": "Contrôle de traction",
    "a_texte": "Ce fait mérite d’être retenu : le contrôle de traction en GT3 n’est pas une aide magique. Il se règle selon la pluie, l’usure des pneus et le style du pilote. Trop intrusif, il ralentit la voiture ; trop permissif, il détruit les pneus ou provoque une erreur. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Humilité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Grandir, c’est accepter d’apprendre même quand on pensait déjà savoir."
  },
  "02-08": {
    "a_cat": "GT3",
    "a_titre": "Spa 24 Heures",
    "a_texte": "Ce fait mérite d’être retenu : les 24 Heures de Spa sont l’une des plus grandes courses GT3 au monde. Le circuit combine longues pleines charges, météo imprévisible et virages rapides comme Eau Rouge, ce qui en fait un test complet pour pilotes et voitures. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Encouragement",
    "c_auteur": "Anonyme",
    "c_texte": "Ce que tu construis en silence finira par parler pour toi."
  },
  "03-08": {
    "a_cat": "GT3",
    "a_titre": "Nürburgring 24h",
    "a_texte": "Ce fait mérite d’être retenu : les 24 Heures du Nürburgring se déroulent sur une version immense de la Nordschleife. La piste peut être sèche à un endroit et trempée à un autre, ce qui rend le choix des pneus parfois plus important que la vitesse pure. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Excellence",
    "c_auteur": "Anonyme",
    "c_texte": "Fais bien les petites choses : elles préparent les grandes."
  },
  "04-08": {
    "a_cat": "GT3",
    "a_titre": "Bathurst 12 Hour",
    "a_texte": "Ce fait mérite d’être retenu : bathurst est redouté en GT3 parce que les murs sont proches et la montagne ne pardonne pas. Dans la descente, une petite erreur de placement peut transformer une voiture rapide en épave en quelques mètres. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Courage",
    "c_auteur": "Nelson Mandela",
    "c_texte": "Le courage n’est pas l’absence de peur, mais la capacité d’avancer malgré elle."
  },
  "05-08": {
    "a_cat": "GT3",
    "a_titre": "Porsche 911 GT3 R",
    "a_texte": "Ce fait mérite d’être retenu : la Porsche 911 GT3 R garde l’ADN du moteur arrière. En GT3 moderne, cette architecture impose des réglages spécifiques mais donne souvent une très bonne motricité en sortie de virage. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Persévérance",
    "c_auteur": "Winston Churchill",
    "c_texte": "Le succès consiste à aller d’échec en échec sans perdre son enthousiasme."
  },
  "06-08": {
    "a_cat": "GT3",
    "a_titre": "Mercedes-AMG GT3",
    "a_texte": "Ce fait mérite d’être retenu : la Mercedes-AMG GT3 s’est imposée comme une référence client grâce à sa fiabilité, son moteur atmosphérique puissant et sa présence dans de nombreux championnats. Elle montre que le succès GT3 dépend aussi du support offert aux équipes privées. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Sport",
    "c_auteur": "Michael Jordan",
    "c_texte": "J’accepte l’échec ; je n’accepte pas de ne pas essayer."
  },
  "07-08": {
    "a_cat": "GT3",
    "a_titre": "Audi R8 LMS",
    "a_texte": "Ce fait mérite d’être retenu : l’Audi R8 LMS a gagné dans de nombreuses séries GT3, de Spa à Bathurst. Son succès repose autant sur sa performance que sur la qualité du programme client Audi Sport, très important dans cette catégorie. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Sport",
    "c_auteur": "Billie Jean King",
    "c_texte": "Les champions continuent à jouer jusqu’à ce qu’ils réussissent."
  },
  "08-08": {
    "a_cat": "GT3",
    "a_titre": "Ferrari 296 GT3",
    "a_texte": "Ce fait mérite d’être retenu : la Ferrari 296 GT3 a remplacé la 488 GT3 avec une conception profondément revue. Même sans système hybride en course GT3, elle a permis à Ferrari de rester présente au plus haut niveau des courses clients. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe africain",
    "c_texte": "Seul on va plus vite, ensemble on va plus loin."
  },
  "09-08": {
    "a_cat": "GT3",
    "a_titre": "BMW M4 GT3",
    "a_texte": "Ce fait mérite d’être retenu : la BMW M4 GT3 a succédé à la M6 GT3 avec une philosophie plus moderne. Sa grande calandre a beaucoup fait parler, mais en piste, son rôle est surtout d’offrir une plateforme plus exploitable pour les équipes clientes. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe chinois",
    "c_texte": "Un voyage de mille kilomètres commence par un premier pas."
  },
  "10-08": {
    "a_cat": "GT3",
    "a_titre": "Lamborghini Huracán GT3",
    "a_texte": "Ce fait mérite d’être retenu : la Lamborghini Huracán GT3 a donné à Lamborghini une vraie crédibilité en compétition client. Sa carrière a montré que la marque pouvait être autre chose qu’un symbole de supercar spectaculaire. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Foi",
    "c_auteur": "Psaume 23",
    "c_texte": "Même dans la vallée sombre, je ne suis pas abandonné."
  },
  "11-08": {
    "a_cat": "GT3",
    "a_titre": "GT World Challenge",
    "a_texte": "Ce fait mérite d’être retenu : le GT World Challenge a construit une vraie scène internationale pour les GT3. Une même marque peut y briller en Europe, en Amérique, en Asie ou en Australie, mais chaque région impose ses propres circuits et styles de course. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Espérance",
    "c_auteur": "Romains 8:28",
    "c_texte": "Dieu peut faire concourir toutes choses au bien de ceux qui l’aiment."
  },
  "12-08": {
    "a_cat": "GT3",
    "a_titre": "Pro-Am en GT3",
    "a_texte": "Ce fait mérite d’être retenu : le GT3 vit beaucoup grâce au format Pro-Am : un pilote professionnel partage la voiture avec un gentleman driver. Cette formule mélange business, passion et très haut niveau, ce qui rend la catégorie différente de la F1 ou du WEC usine. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Détermination",
    "c_auteur": "Anonyme",
    "c_texte": "Le progrès n’a pas besoin d’être spectaculaire pour être réel."
  },
  "13-08": {
    "a_cat": "F1",
    "a_titre": "Premier championnat F1",
    "a_texte": "Ce fait mérite d’être retenu : le championnat du monde de Formule 1 débuta en 1950 à Silverstone. À l’époque, les voitures avaient peu à voir avec les machines actuelles : pas d’aileron moderne, pas de carbone, pas de télémétrie et une sécurité très limitée. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Confiance",
    "c_auteur": "Anonyme",
    "c_texte": "Tu n’as pas besoin de tout maîtriser pour commencer."
  },
  "14-08": {
    "a_cat": "F1",
    "a_titre": "Juan Manuel Fangio",
    "a_texte": "Ce fait mérite d’être retenu : juan Manuel Fangio remporta cinq titres mondiaux dans les années 1950 avec plusieurs constructeurs différents. Son talent était d’autant plus remarquable qu’il pilotait à une époque où chaque erreur pouvait avoir des conséquences dramatiques. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Gratitude",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La gratitude transforme ce qui manque en rappel de ce qui est déjà donné."
  },
  "15-08": {
    "a_cat": "F1",
    "a_titre": "Jim Clark",
    "a_texte": "Ce fait mérite d’être retenu : jim Clark est souvent cité parmi les pilotes les plus naturellement doués. Il brillait en F1, en endurance, en IndyCar et en voitures de tourisme, à une époque où les pilotes passaient beaucoup plus facilement d’une discipline à l’autre. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Force",
    "c_auteur": "2 Timothée 1:7",
    "c_texte": "Dieu ne nous donne pas un esprit de peur, mais de force, d’amour et de sagesse."
  },
  "16-08": {
    "a_cat": "F1",
    "a_titre": "Lotus et l’effet de sol",
    "a_texte": "Ce fait mérite d’être retenu : à la fin des années 1970, Lotus exploita l’effet de sol pour coller la voiture à la piste grâce au flux d’air sous le châssis. Cette idée changea profondément l’aérodynamique de la F1. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Intégrité",
    "c_auteur": "Proverbe biblique",
    "c_texte": "Mieux vaut peu avec droiture que beaucoup avec injustice."
  },
  "17-08": {
    "a_cat": "F1",
    "a_titre": "Niki Lauda 1976",
    "a_texte": "Ce fait mérite d’être retenu : en 1976, Niki Lauda survécut à un terrible accident au Nürburgring et revint en course seulement quelques semaines plus tard. Son retour reste l’un des exemples les plus forts de courage et de lucidité en sport automobile. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Paix",
    "c_auteur": "Philippiens 4:6-7",
    "c_texte": "Présente tes inquiétudes à Dieu, et sa paix gardera ton cœur."
  },
  "18-08": {
    "a_cat": "F1",
    "a_titre": "Senna Monaco",
    "a_texte": "Ce fait mérite d’être retenu : ayrton Senna reste associé à Monaco, où sa précision semblait presque irréelle. Sur ce circuit étroit, le pilote doit être rapide sans jamais dépasser la limite de quelques centimètres. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Persévérance",
    "c_auteur": "Hébreux 12:1",
    "c_texte": "Cours avec endurance la course qui t’est proposée."
  },
  "19-08": {
    "a_cat": "F1",
    "a_titre": "Senna Donington 1993",
    "a_texte": "Ce fait mérite d’être retenu : au Grand Prix d’Europe 1993 à Donington, Ayrton Senna réalisa un premier tour devenu légendaire sous la pluie. Il dépassa plusieurs adversaires avec une maîtrise qui illustrait son toucher unique sur piste humide. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Courage",
    "c_auteur": "Anonyme",
    "c_texte": "Le courage commence souvent par une décision que personne ne voit."
  },
  "20-08": {
    "a_cat": "F1",
    "a_titre": "Schumacher 1996 Espagne",
    "a_texte": "Ce fait mérite d’être retenu : en 1996, Michael Schumacher remporta le Grand Prix d’Espagne sous une pluie intense. Cette victoire avec Ferrari, dans des conditions difficiles, annonça la transformation progressive de l’équipe italienne autour de lui. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Travail",
    "c_auteur": "Anonyme",
    "c_texte": "Ce que tu répètes aujourd’hui deviendra ton niveau naturel demain."
  },
  "21-08": {
    "a_cat": "F1",
    "a_titre": "Ferrari 2004",
    "a_texte": "Ce fait mérite d’être retenu : la Ferrari F2004 fut l’une des F1 les plus dominantes de l’histoire moderne. Elle symbolise l’époque Schumacher-Todt-Brawn-Byrne, où stratégie, fiabilité et vitesse formaient un bloc presque imbattable. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Espérance",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "L’épreuve n’a pas le dernier mot quand l’espérance reste vivante."
  },
  "22-08": {
    "a_cat": "F1",
    "a_titre": "Brawn GP 2009",
    "a_texte": "Ce fait mérite d’être retenu : brawn GP remporta le championnat 2009 après avoir failli ne jamais participer à la saison. Le double diffuseur et une excellente exploitation du règlement permirent à une équipe née dans l’urgence de battre les géants. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Il n’y a pas de vent favorable pour celui qui ne sait pas où il va."
  },
  "23-08": {
    "a_cat": "F1",
    "a_titre": "Red Bull 2010-2013",
    "a_texte": "Ce fait mérite d’être retenu : entre 2010 et 2013, Red Bull domina la F1 avec Sebastian Vettel grâce à une aérodynamique exceptionnelle. La capacité d’Adrian Newey à exploiter les flux d’air fut aussi décisive que le pilotage. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Humilité",
    "c_auteur": "Anonyme",
    "c_texte": "L’orgueil défend ses erreurs ; l’humilité les transforme."
  },
  "24-08": {
    "a_cat": "F1",
    "a_titre": "Mercedes hybride",
    "a_texte": "Ce fait mérite d’être retenu : à partir de 2014, Mercedes domina l’ère hybride de la F1. Son moteur très efficace et son intégration châssis-propulseur donnèrent à l’équipe une avance que les autres mirent des années à réduire. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Patience",
    "c_auteur": "Anonyme",
    "c_texte": "Certaines victoires mûrissent lentement."
  },
  "25-08": {
    "a_cat": "F1",
    "a_titre": "Hamilton Silverstone 2008",
    "a_texte": "Ce fait mérite d’être retenu : en 2008, Lewis Hamilton domina le Grand Prix de Grande-Bretagne sous une pluie difficile. Sa marge à l’arrivée fut énorme et la course renforça sa réputation de pilote exceptionnel dans les conditions changeantes. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Encouragement",
    "c_auteur": "Anonyme",
    "c_texte": "Tu peux être fatigué sans être fini."
  },
  "26-08": {
    "a_cat": "F1",
    "a_titre": "Verstappen Brésil 2016",
    "a_texte": "Ce fait mérite d’être retenu : au Brésil 2016, Max Verstappen réalisa une remontée spectaculaire sous la pluie. Ses trajectoires différentes et son contrôle de la voiture révélèrent un instinct de pilotage rare dans des conditions extrêmes. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Foi",
    "c_auteur": "Matthieu 6:34",
    "c_texte": "Ne laisse pas demain voler la force dont tu as besoin aujourd’hui."
  },
  "27-08": {
    "a_cat": "F1",
    "a_titre": "Monaco impossible à doubler",
    "a_texte": "Ce fait mérite d’être retenu : monaco est souvent critiqué pour le manque de dépassements, mais c’est aussi ce qui rend la qualification si intense. Sur ce circuit, partir devant peut valoir plus qu’une stratégie parfaite. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Détermination",
    "c_auteur": "Anonyme",
    "c_texte": "Ce n’est pas parce que c’est lent que c’est inutile."
  },
  "28-08": {
    "a_cat": "F1",
    "a_titre": "DRS",
    "a_texte": "Ce fait mérite d’être retenu : le DRS a été introduit pour faciliter les dépassements en réduisant la traînée dans certaines zones. Il ne remplace pas le talent : le pilote doit encore préparer la sortie de virage et oser freiner au bon moment. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Leadership",
    "c_auteur": "Anonyme",
    "c_texte": "Un bon leader ne cherche pas la lumière ; il aide les autres à mieux voir."
  },
  "29-08": {
    "a_cat": "F1",
    "a_titre": "Halo",
    "a_texte": "Ce fait mérite d’être retenu : le halo a été critiqué à son introduction, surtout pour son apparence. Plusieurs incidents ont ensuite montré son importance en matière de sécurité, rappelant que le progrès technique n’est pas toujours populaire au départ. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Courage",
    "c_auteur": "Josué 1:9",
    "c_texte": "Fortifie-toi et prends courage ; ne t’effraie pas, car Dieu marche avec toi dans ce que tu dois affronter."
  },
  "30-08": {
    "a_cat": "F1",
    "a_titre": "Freins carbone",
    "a_texte": "Ce fait mérite d’être retenu : les freins carbone d’une F1 doivent fonctionner à très haute température. À froid, ils peuvent être moins efficaces, ce qui rend les tours de sortie et les relances après Safety Car particulièrement délicats. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Espérance",
    "c_auteur": "Ésaïe 40:31",
    "c_texte": "Ceux qui placent leur confiance en l’Éternel renouvellent leurs forces et trouvent l’élan pour repartir."
  },
  "31-08": {
    "a_cat": "F1",
    "a_titre": "Arrêts aux stands modernes",
    "a_texte": "Ce fait mérite d’être retenu : les arrêts aux stands modernes en F1 sont devenus une discipline en soi. Une vingtaine de mécaniciens coordonnent leurs gestes en quelques secondes, et une seule roue mal fixée peut ruiner un Grand Prix entier. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Persévérance",
    "c_auteur": "Galates 6:9",
    "c_texte": "Ne te lasse pas de faire le bien : la récolte arrive pour celui qui ne renonce pas."
  },
  "01-09": {
    "a_cat": "F1",
    "a_titre": "Williams FW14B",
    "a_texte": "Ce fait mérite d’être retenu : la Williams FW14B de 1992 utilisait une suspension active très avancée. Nigel Mansell domina la saison, montrant que l’électronique et l’aérodynamique pouvaient transformer l’équilibre d’une F1. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Paix",
    "c_auteur": "Jean 14:27",
    "c_texte": "La paix véritable ne dépend pas seulement des circonstances ; elle vient d’un cœur gardé par Dieu."
  },
  "02-09": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Audi Quattro",
    "a_texte": "Ce fait mérite d’être retenu : l’Audi Quattro changea le rallye en imposant la transmission intégrale au plus haut niveau. Après elle, il devint difficile d’imaginer une voiture de rallye moderne sans quatre roues motrices. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Force",
    "c_auteur": "Philippiens 4:13",
    "c_texte": "Je peux tout par celui qui me fortifie."
  },
  "03-09": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Groupe B",
    "a_texte": "Ce fait mérite d’être retenu : le Groupe B reste l’une des périodes les plus folles du rallye. Les voitures étaient extrêmement puissantes, les spectateurs très proches et la sécurité insuffisante, ce qui rendit cette époque spectaculaire mais dangereuse. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Confiance",
    "c_auteur": "Proverbes 3:5",
    "c_texte": "Ne t’appuie pas uniquement sur ta propre intelligence ; apprends aussi à faire confiance à plus grand que toi."
  },
  "04-09": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Michèle Mouton",
    "a_texte": "Ce fait mérite d’être retenu : michèle Mouton fut l’une des grandes figures du rallye mondial avec Audi. Elle gagna des manches de championnat du monde et prouva que le talent ne dépendait pas du genre dans une discipline extrêmement exigeante. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Petit à petit, l’oiseau fait son nid."
  },
  "05-09": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Sébastien Loeb",
    "a_texte": "Ce fait mérite d’être retenu : sébastien Loeb domina le WRC avec une régularité impressionnante. Ancien gymnaste, il apporta au rallye une précision et une capacité d’adaptation qui lui permirent de gagner sur terre, asphalte, neige et glace. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Après la pluie vient le beau temps."
  },
  "06-09": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Colin McRae",
    "a_texte": "Ce fait mérite d’être retenu : colin McRae incarnait un style de rallye agressif et spectaculaire. Sa devise populaire, “if in doubt, flat out”, résume une approche courageuse mais risquée qui a marqué toute une génération de fans. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Travail",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Qui veut aller loin ménage sa monture."
  },
  "07-09": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Monte-Carlo",
    "a_texte": "Ce fait mérite d’être retenu : le Rallye Monte-Carlo est célèbre pour ses conditions imprévisibles. Une spéciale peut mélanger asphalte sec, neige, glace et plaques humides, obligeant les équipages à accepter une part d’incertitude dans le choix des pneus. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Discipline",
    "c_auteur": "Anonyme",
    "c_texte": "La motivation lance le mouvement ; la discipline le garde vivant."
  },
  "08-09": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Finlande",
    "a_texte": "Ce fait mérite d’être retenu : le Rallye de Finlande est surnommé le Grand Prix sur terre. Les voitures y volent littéralement sur des bosses rapides, et les pilotes locaux y ont longtemps possédé un avantage grâce à leur connaissance du terrain. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Résilience",
    "c_auteur": "Anonyme",
    "c_texte": "Une mauvaise journée ne définit pas ton chemin entier."
  },
  "09-09": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Safari Rally",
    "a_texte": "Ce fait mérite d’être retenu : le Safari Rally a longtemps été l’une des épreuves les plus dures du calendrier. Poussière, chaleur, pierres, boue et longues distances y mettaient les voitures autant à l’épreuve que les équipages. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Foi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Dieu ne promet pas toujours un chemin facile, mais il promet sa présence dans le chemin."
  },
  "10-09": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Pikes Peak",
    "a_texte": "Ce fait mérite d’être retenu : pikes Peak est une montée mythique où la puissance ne suffit pas. L’altitude réduit les performances, les virages s’enchaînent sans droit à l’erreur et la météo peut changer rapidement en montant vers le sommet. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Humilité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Grandir, c’est accepter d’apprendre même quand on pensait déjà savoir."
  },
  "11-09": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Peugeot 405 T16 Pikes Peak",
    "a_texte": "Ce fait mérite d’être retenu : la Peugeot 405 T16 de Pikes Peak est devenue mythique grâce au film “Climb Dance”. Les images d’Ari Vatanen attaquant la montagne au soleil levant ont transformé une course de côte en morceau de cinéma automobile. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Encouragement",
    "c_auteur": "Anonyme",
    "c_texte": "Ce que tu construis en silence finira par parler pour toi."
  },
  "12-09": {
    "a_cat": "IMSA / Daytona",
    "a_titre": "Daytona 24",
    "a_texte": "Ce fait mérite d’être retenu : les 24 Heures de Daytona mélangent banking ovale et portion routière. Cette combinaison oblige les équipes à trouver un compromis rare : une voiture stable à haute vitesse mais efficace dans les freinages lents. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Excellence",
    "c_auteur": "Anonyme",
    "c_texte": "Fais bien les petites choses : elles préparent les grandes."
  },
  "13-09": {
    "a_cat": "IMSA / Daytona",
    "a_titre": "Rolex Daytona",
    "a_texte": "Ce fait mérite d’être retenu : la victoire aux 24 Heures de Daytona offre traditionnellement une montre Rolex aux vainqueurs. C’est l’un des trophées les plus désirés du sport auto, parce qu’il symbolise autant la réussite que la résistance. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Courage",
    "c_auteur": "Nelson Mandela",
    "c_texte": "Le courage n’est pas l’absence de peur, mais la capacité d’avancer malgré elle."
  },
  "14-09": {
    "a_cat": "IMSA / Sebring",
    "a_titre": "Sebring bosselé",
    "a_texte": "Ce fait mérite d’être retenu : sebring est connu pour ses bosses et ses plaques de béton issues d’un ancien aérodrome. Les voitures y souffrent énormément, ce qui en fait une répétition brutale pour les programmes d’endurance. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Persévérance",
    "c_auteur": "Winston Churchill",
    "c_texte": "Le succès consiste à aller d’échec en échec sans perdre son enthousiasme."
  },
  "15-09": {
    "a_cat": "IMSA / Petit Le Mans",
    "a_titre": "Petit Le Mans",
    "a_texte": "Ce fait mérite d’être retenu : petit Le Mans, à Road Atlanta, condense l’esprit de l’endurance sur une course plus courte que Le Mans mais souvent très intense. Le trafic y est constant et les neutralisations peuvent bouleverser la stratégie. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Sport",
    "c_auteur": "Michael Jordan",
    "c_texte": "J’accepte l’échec ; je n’accepte pas de ne pas essayer."
  },
  "16-09": {
    "a_cat": "IMSA",
    "a_titre": "Deltawing",
    "a_texte": "Ce fait mérite d’être retenu : la Deltawing intrigua le monde de l’endurance avec sa silhouette étroite à l’avant. Même si le projet n’a pas tout gagné, il a rappelé que l’innovation passe parfois par des formes qui semblent absurdes au premier regard. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Sport",
    "c_auteur": "Billie Jean King",
    "c_texte": "Les champions continuent à jouer jusqu’à ce qu’ils réussissent."
  },
  "17-09": {
    "a_cat": "Supercars / Bathurst",
    "a_titre": "Bathurst 1000",
    "a_texte": "Ce fait mérite d’être retenu : le Bathurst 1000 est une course culte en Australie. Mount Panorama ressemble à deux circuits en un : une montée et une descente de montagne très techniques, puis de longues sections rapides où l’aspiration compte énormément. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe africain",
    "c_texte": "Seul on va plus vite, ensemble on va plus loin."
  },
  "18-09": {
    "a_cat": "Supercars / Bathurst",
    "a_titre": "Peter Brock",
    "a_texte": "Ce fait mérite d’être retenu : peter Brock est une légende de Bathurst, où il a gagné neuf fois. En Australie, son nom dépasse le sport automobile : il incarne une culture populaire liée aux voitures de tourisme et aux grands duels Ford-Holden. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe chinois",
    "c_texte": "Un voyage de mille kilomètres commence par un premier pas."
  },
  "19-09": {
    "a_cat": "Supercars / Bathurst",
    "a_titre": "Murs de Bathurst",
    "a_texte": "Ce fait mérite d’être retenu : à Bathurst, les murs sont si proches que les pilotes disent souvent que le circuit “ne pardonne rien”. Une voiture légèrement mal placée dans la descente peut déclencher un accident en chaîne. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Foi",
    "c_auteur": "Psaume 23",
    "c_texte": "Même dans la vallée sombre, je ne suis pas abandonné."
  },
  "20-09": {
    "a_cat": "Nürburgring",
    "a_titre": "Nordschleife",
    "a_texte": "Ce fait mérite d’être retenu : la Nordschleife est surnommée “l’Enfer vert”. Sa longueur, ses bosses, ses changements d’adhérence et ses virages aveugles la rendent très différente des circuits modernes plus courts et plus standardisés. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Espérance",
    "c_auteur": "Romains 8:28",
    "c_texte": "Dieu peut faire concourir toutes choses au bien de ceux qui l’aiment."
  },
  "21-09": {
    "a_cat": "Nürburgring",
    "a_titre": "Record Stefan Bellof",
    "a_texte": "Ce fait mérite d’être retenu : stefan Bellof signa en 1983 un tour devenu mythique de la Nordschleife avec une Porsche 956. Ce chrono resta une référence pendant des décennies et participa à la légende du circuit. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Détermination",
    "c_auteur": "Anonyme",
    "c_texte": "Le progrès n’a pas besoin d’être spectaculaire pour être réel."
  },
  "22-09": {
    "a_cat": "Nürburgring",
    "a_titre": "Météo locale",
    "a_texte": "Ce fait mérite d’être retenu : sur la Nordschleife, la météo peut varier d’un secteur à l’autre. Une équipe peut chausser des slicks parce que les stands sont au sec, puis découvrir une portion humide ou brumeuse plusieurs kilomètres plus loin. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Confiance",
    "c_auteur": "Anonyme",
    "c_texte": "Tu n’as pas besoin de tout maîtriser pour commencer."
  },
  "23-09": {
    "a_cat": "IndyCar",
    "a_titre": "Indy 500",
    "a_texte": "Ce fait mérite d’être retenu : les 500 Miles d’Indianapolis ne sont pas seulement une course rapide. Les pilotes doivent gérer l’aspiration, les arrêts, le trafic, le carburant et la peur permanente de toucher le mur à très haute vitesse. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Gratitude",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La gratitude transforme ce qui manque en rappel de ce qui est déjà donné."
  },
  "24-09": {
    "a_cat": "IndyCar",
    "a_titre": "Triple Couronne",
    "a_texte": "Ce fait mérite d’être retenu : la Triple Couronne informelle du sport auto associe souvent Monaco, Le Mans et Indianapolis. Graham Hill reste le seul pilote à avoir gagné les trois, ce qui montre la rareté d’une telle polyvalence. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Force",
    "c_auteur": "2 Timothée 1:7",
    "c_texte": "Dieu ne nous donne pas un esprit de peur, mais de force, d’amour et de sagesse."
  },
  "25-09": {
    "a_cat": "IndyCar",
    "a_titre": "Mansell en IndyCar",
    "a_texte": "Ce fait mérite d’être retenu : nigel Mansell quitta la F1 après son titre 1992 et remporta le championnat IndyCar dès 1993. Peu de pilotes ont réussi une transition aussi spectaculaire entre deux mondes aussi différents. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Intégrité",
    "c_auteur": "Proverbe biblique",
    "c_texte": "Mieux vaut peu avec droiture que beaucoup avec injustice."
  },
  "26-09": {
    "a_cat": "NASCAR",
    "a_titre": "Daytona 500",
    "a_texte": "Ce fait mérite d’être retenu : le Daytona 500 est la course la plus prestigieuse de la NASCAR. La stratégie d’aspiration y est essentielle : un pilote seul peut être rapide, mais un bon partenaire de draft peut transformer une course. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Paix",
    "c_auteur": "Philippiens 4:6-7",
    "c_texte": "Présente tes inquiétudes à Dieu, et sa paix gardera ton cœur."
  },
  "27-09": {
    "a_cat": "NASCAR",
    "a_titre": "Dale Earnhardt",
    "a_texte": "Ce fait mérite d’être retenu : dale Earnhardt attendit longtemps avant de gagner enfin le Daytona 500 en 1998. Après la course, les mécaniciens et membres des équipes adverses l’applaudirent dans la pit lane, signe rare de respect collectif. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Persévérance",
    "c_auteur": "Hébreux 12:1",
    "c_texte": "Cours avec endurance la course qui t’est proposée."
  },
  "28-09": {
    "a_cat": "Dakar",
    "a_titre": "Dakar origine",
    "a_texte": "Ce fait mérite d’être retenu : le Dakar naquit d’une aventure où l’orientation comptait autant que la vitesse. Contrairement à une course sur circuit, l’équipage doit survivre au terrain, à la navigation, à la fatigue et aux imprévus mécaniques. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Courage",
    "c_auteur": "Anonyme",
    "c_texte": "Le courage commence souvent par une décision que personne ne voit."
  },
  "29-09": {
    "a_cat": "Dakar",
    "a_titre": "Ari Vatanen Dakar",
    "a_texte": "Ce fait mérite d’être retenu : ari Vatanen gagna plusieurs fois le Dakar après sa carrière en rallye mondial. Son parcours montre que la vitesse pure doit devenir endurance mentale quand la course dure des jours dans le désert. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Travail",
    "c_auteur": "Anonyme",
    "c_texte": "Ce que tu répètes aujourd’hui deviendra ton niveau naturel demain."
  },
  "30-09": {
    "a_cat": "Dakar",
    "a_titre": "Camions du Dakar",
    "a_texte": "Ce fait mérite d’être retenu : les camions du Dakar impressionnent par leur taille, mais ils roulent à un rythme étonnant sur des terrains cassants. Les voir sauter sur les dunes rappelle que la notion de “voiture de course” peut prendre des formes très différentes. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Espérance",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "L’épreuve n’a pas le dernier mot quand l’espérance reste vivante."
  },
  "01-10": {
    "a_cat": "DTM",
    "a_titre": "DTM années 1990",
    "a_texte": "Ce fait mérite d’être retenu : le DTM des années 1990 mélangeait voitures de tourisme agressives, technologie avancée et duels très physiques. Les Alfa Romeo, Mercedes et Opel ont marqué une génération de fans européens. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Il n’y a pas de vent favorable pour celui qui ne sait pas où il va."
  },
  "02-10": {
    "a_cat": "DTM",
    "a_titre": "Alfa 155 V6 TI",
    "a_texte": "Ce fait mérite d’être retenu : l’Alfa Romeo 155 V6 TI domina le DTM 1993 avec sa transmission intégrale et son V6 hurlant. Elle reste l’une des voitures de tourisme les plus aimées par les passionnés. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Humilité",
    "c_auteur": "Anonyme",
    "c_texte": "L’orgueil défend ses erreurs ; l’humilité les transforme."
  },
  "03-10": {
    "a_cat": "Tourisme",
    "a_titre": "BTCC contact",
    "a_texte": "Ce fait mérite d’être retenu : le BTCC britannique est célèbre pour ses courses de tourisme musclées. Les contacts y font partie de la culture, mais la vraie difficulté reste de rester rapide malgré une voiture parfois abîmée. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Patience",
    "c_auteur": "Anonyme",
    "c_texte": "Certaines victoires mûrissent lentement."
  },
  "04-10": {
    "a_cat": "Tourisme",
    "a_titre": "Volvo break BTCC",
    "a_texte": "Ce fait mérite d’être retenu : en 1994, Volvo engagea un break 850 en BTCC. L’image d’un break familial attaquant les circuits britanniques est devenue culte, même si l’idée était aussi un coup marketing très intelligent. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Encouragement",
    "c_auteur": "Anonyme",
    "c_texte": "Tu peux être fatigué sans être fini."
  },
  "05-10": {
    "a_cat": "GT / Route",
    "a_titre": "Ferrari F40 LM",
    "a_texte": "Ce fait mérite d’être retenu : la Ferrari F40 LM transforma une icône de route en machine de course extrême. Plus brutale, plus légère et plus rare, elle montre comment une supercar peut devenir encore plus radicale une fois libérée des compromis routiers. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Foi",
    "c_auteur": "Matthieu 6:34",
    "c_texte": "Ne laisse pas demain voler la force dont tu as besoin aujourd’hui."
  },
  "06-10": {
    "a_cat": "GT / Route",
    "a_titre": "Porsche 911 RSR",
    "a_texte": "Ce fait mérite d’être retenu : la Porsche 911 RSR a longtemps défendu l’idée qu’une architecture née pour la route pouvait rester compétitive en endurance. Le moteur arrière, souvent critiqué, est devenu une partie de son identité en course. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Détermination",
    "c_auteur": "Anonyme",
    "c_texte": "Ce n’est pas parce que c’est lent que c’est inutile."
  },
  "07-10": {
    "a_cat": "GT / Route",
    "a_titre": "Viper GTS-R",
    "a_texte": "Ce fait mérite d’être retenu : la Dodge Viper GTS-R a marqué les années 1990 et 2000 en GT. Son énorme V10 et son style brutal contrastaient avec les européennes plus fines, mais elle s’est imposée dans les plus grandes courses d’endurance. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Leadership",
    "c_auteur": "Anonyme",
    "c_texte": "Un bon leader ne cherche pas la lumière ; il aide les autres à mieux voir."
  },
  "08-10": {
    "a_cat": "GT / Route",
    "a_titre": "Corvette Racing",
    "a_texte": "Ce fait mérite d’être retenu : corvette Racing a bâti sa légende sur la constance. Pendant des années, les Corvette jaunes ont été des références en endurance GT, notamment au Mans et en IMSA. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Courage",
    "c_auteur": "Josué 1:9",
    "c_texte": "Fortifie-toi et prends courage ; ne t’effraie pas, car Dieu marche avec toi dans ce que tu dois affronter."
  },
  "09-10": {
    "a_cat": "Technique",
    "a_titre": "Télémétrie",
    "a_texte": "Ce fait mérite d’être retenu : la télémétrie a changé le dialogue entre pilote et ingénieur. Autrefois, le pilote racontait ce qu’il sentait ; aujourd’hui, les données confirment, corrigent ou contredisent parfois son impression. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Espérance",
    "c_auteur": "Ésaïe 40:31",
    "c_texte": "Ceux qui placent leur confiance en l’Éternel renouvellent leurs forces et trouvent l’élan pour repartir."
  },
  "10-10": {
    "a_cat": "Technique",
    "a_titre": "Pneus pluie",
    "a_texte": "Ce fait mérite d’être retenu : les pneus pluie ne servent pas seulement à évacuer l’eau. Ils doivent aussi monter en température, garder une carcasse stable et offrir de la confiance quand l’adhérence change à chaque mètre. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Persévérance",
    "c_auteur": "Galates 6:9",
    "c_texte": "Ne te lasse pas de faire le bien : la récolte arrive pour celui qui ne renonce pas."
  },
  "11-10": {
    "a_cat": "Technique",
    "a_titre": "Pit limiter",
    "a_texte": "Ce fait mérite d’être retenu : le limiteur de vitesse dans les stands évite les excès dangereux. Mais son activation au bon moment est critique : trop tôt, on perd du temps ; trop tard, la pénalité peut coûter la course. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Paix",
    "c_auteur": "Jean 14:27",
    "c_texte": "La paix véritable ne dépend pas seulement des circonstances ; elle vient d’un cœur gardé par Dieu."
  },
  "12-10": {
    "a_cat": "Technique",
    "a_titre": "Undercut",
    "a_texte": "Ce fait mérite d’être retenu : l’undercut consiste à s’arrêter plus tôt que l’adversaire pour profiter de pneus neufs. Il fonctionne surtout quand le pneu neuf donne immédiatement un avantage suffisant pour compenser le temps perdu au stand. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Force",
    "c_auteur": "Philippiens 4:13",
    "c_texte": "Je peux tout par celui qui me fortifie."
  },
  "13-10": {
    "a_cat": "Technique",
    "a_titre": "Overcut",
    "a_texte": "Ce fait mérite d’être retenu : l’overcut est l’inverse de l’undercut : rester en piste plus longtemps pour profiter d’air libre ou d’un adversaire bloqué. Il demande une excellente gestion des pneus usés. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Confiance",
    "c_auteur": "Proverbes 3:5",
    "c_texte": "Ne t’appuie pas uniquement sur ta propre intelligence ; apprends aussi à faire confiance à plus grand que toi."
  },
  "14-10": {
    "a_cat": "Technique",
    "a_titre": "Full Course Yellow",
    "a_texte": "Ce fait mérite d’être retenu : en endurance, un Full Course Yellow peut sauver ou ruiner une stratégie. S’arrêter juste avant ou juste après une neutralisation peut changer plusieurs positions sans aucun dépassement en piste. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Petit à petit, l’oiseau fait son nid."
  },
  "15-10": {
    "a_cat": "Technique",
    "a_titre": "Trafic multi-classes",
    "a_texte": "Ce fait mérite d’être retenu : dans les courses multi-classes, les prototypes doivent dépasser les GT sans perdre trop de temps, tandis que les GT doivent rester prévisibles. La confiance entre catégories est une compétence invisible mais essentielle. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Après la pluie vient le beau temps."
  },
  "16-10": {
    "a_cat": "Technique",
    "a_titre": "Double relais",
    "a_texte": "Ce fait mérite d’être retenu : un double relais permet de garder un pilote dans la voiture pendant deux périodes de pneus ou de carburant. C’est efficace si le pilote est rapide et régulier, mais la fatigue augmente le risque d’erreur. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Travail",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Qui veut aller loin ménage sa monture."
  },
  "17-10": {
    "a_cat": "Technique",
    "a_titre": "Température pneus",
    "a_texte": "Ce fait mérite d’être retenu : la fenêtre de température d’un pneu peut transformer une voiture. Trop froid, il glisse ; trop chaud, il se dégrade. Le bon pilote sent ce moment avant même que les données ne le confirment. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Discipline",
    "c_auteur": "Anonyme",
    "c_texte": "La motivation lance le mouvement ; la discipline le garde vivant."
  },
  "18-10": {
    "a_cat": "Technique",
    "a_titre": "Aérodynamique sale",
    "a_texte": "Ce fait mérite d’être retenu : suivre une voiture de près perturbe l’air qui arrive sur les ailerons. Cette “air sale” peut faire perdre de l’appui, user les pneus avant et rendre un dépassement plus difficile qu’il n’en a l’air. Ce genre d’histoire fonctionne bien en contenu quotidien parce qu’il donne un vrai contexte, pas seulement une définition technique.",
    "c_theme": "Résilience",
    "c_auteur": "Anonyme",
    "c_texte": "Une mauvaise journée ne définit pas ton chemin entier."
  },
  "19-10": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Ford GT40 1966",
    "a_texte": "Dans l’histoire du sport automobile, en 1966, Ford réussit un triplé aux 24 Heures du Mans avec la GT40. L’arrivée groupée voulue pour la photo créa une polémique : Ken Miles, pourtant immense artisan du projet, fut classé deuxième derrière Bruce McLaren à cause de la distance totale parcourue depuis la position de départ. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Foi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Dieu ne promet pas toujours un chemin facile, mais il promet sa présence dans le chemin."
  },
  "20-10": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "La Mazda 787B",
    "a_texte": "Dans l’histoire du sport automobile, en 1991, la Mazda 787B devint la première voiture à moteur rotatif à remporter les 24 Heures du Mans. Son cri aigu reste l’un des sons les plus reconnaissables de l’histoire de l’endurance. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Humilité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Grandir, c’est accepter d’apprendre même quand on pensait déjà savoir."
  },
  "21-10": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "McLaren F1 GTR 1995",
    "a_texte": "Dans l’histoire du sport automobile, en 1995, la McLaren F1 GTR remporta Le Mans dès sa première participation. À l’origine, la F1 était une supercar de route ; sa victoire montra qu’une base routière exceptionnelle pouvait battre des prototypes dans des conditions très difficiles. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Encouragement",
    "c_auteur": "Anonyme",
    "c_texte": "Ce que tu construis en silence finira par parler pour toi."
  },
  "22-10": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Tom Kristensen",
    "a_texte": "Dans l’histoire du sport automobile, tom Kristensen est surnommé “Mr Le Mans” grâce à ses neuf victoires aux 24 Heures du Mans. Sa carrière symbolise la régularité plus que le simple coup d’éclat : en endurance, la vitesse doit survivre à la nuit, au trafic et aux erreurs des autres. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Excellence",
    "c_auteur": "Anonyme",
    "c_texte": "Fais bien les petites choses : elles préparent les grandes."
  },
  "23-10": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Jacky Ickx 1969",
    "a_texte": "Dans l’histoire du sport automobile, en 1969, Jacky Ickx refusa le traditionnel départ en courant du Mans et marcha calmement vers sa Ford GT40 pour protester contre le danger de cette procédure. Il boucla pourtant la course et gagna pour quelques secondes face à Porsche. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Courage",
    "c_auteur": "Nelson Mandela",
    "c_texte": "Le courage n’est pas l’absence de peur, mais la capacité d’avancer malgré elle."
  },
  "24-10": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Audi R10 TDI",
    "a_texte": "Dans l’histoire du sport automobile, en 2006, l’Audi R10 TDI remporta Le Mans avec un moteur diesel. Ce succès changea la perception du diesel en compétition : il n’était plus seulement synonyme d’économie, mais aussi de couple, d’efficacité et de stratégie longue distance. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Persévérance",
    "c_auteur": "Winston Churchill",
    "c_texte": "Le succès consiste à aller d’échec en échec sans perdre son enthousiasme."
  },
  "25-10": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Porsche 917",
    "a_texte": "Dans l’histoire du sport automobile, la Porsche 917 donna à Porsche sa première victoire au Mans en 1970. Sa puissance et sa vitesse étaient telles que les pilotes devaient composer avec une voiture aussi fascinante qu’intimidante, surtout sur l’ancienne ligne droite des Hunaudières. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Sport",
    "c_auteur": "Michael Jordan",
    "c_texte": "J’accepte l’échec ; je n’accepte pas de ne pas essayer."
  },
  "26-10": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Bentley Speed 8",
    "a_texte": "Dans l’histoire du sport automobile, en 2003, Bentley remporta Le Mans avec la Speed 8, mettant fin à une longue attente depuis ses succès historiques des années 1920. Cette victoire reliait deux époques très différentes de l’endurance. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Sport",
    "c_auteur": "Billie Jean King",
    "c_texte": "Les champions continuent à jouer jusqu’à ce qu’ils réussissent."
  },
  "27-10": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Toyota 2016",
    "a_texte": "Dans l’histoire du sport automobile, en 2016, Toyota perdit Le Mans dans le dernier tour alors que la victoire semblait acquise. La TS050 ralentit à quelques minutes de l’arrivée, offrant un exemple brutal de la règle la plus dure de l’endurance : rien n’est gagné avant la ligne. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe africain",
    "c_texte": "Seul on va plus vite, ensemble on va plus loin."
  },
  "28-10": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Toyota première victoire",
    "a_texte": "Dans l’histoire du sport automobile, après plusieurs désillusions, Toyota remporta enfin les 24 Heures du Mans en 2018. Cette victoire fut moins un simple résultat qu’une récompense pour des années d’échecs, de développement et de frustration. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe chinois",
    "c_texte": "Un voyage de mille kilomètres commence par un premier pas."
  },
  "29-10": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Peugeot 905",
    "a_texte": "Dans l’histoire du sport automobile, la Peugeot 905 domina Le Mans au début des années 1990 avec une approche de prototype très moderne. En 1993, Peugeot signa même un triplé, prouvant la solidité d’un programme français ambitieux. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Foi",
    "c_auteur": "Psaume 23",
    "c_texte": "Même dans la vallée sombre, je ne suis pas abandonné."
  },
  "30-10": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Matra au Mans",
    "a_texte": "Dans l’histoire du sport automobile, matra gagna Le Mans trois fois de suite entre 1972 et 1974. Le hurlement de son V12 reste associé à une période où l’endurance française rivalisait au plus haut niveau mondial. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Espérance",
    "c_auteur": "Romains 8:28",
    "c_texte": "Dieu peut faire concourir toutes choses au bien de ceux qui l’aiment."
  },
  "31-10": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "La nuit au Mans",
    "a_texte": "Dans l’histoire du sport automobile, la nuit transforme Le Mans en une autre course. Les repères changent, les phares fatiguent les yeux et les pilotes doivent dépasser des voitures de catégories différentes avec parfois plus de 100 km/h d’écart en ligne droite. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Détermination",
    "c_auteur": "Anonyme",
    "c_texte": "Le progrès n’a pas besoin d’être spectaculaire pour être réel."
  },
  "01-11": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Hunaudières coupée",
    "a_texte": "Dans l’histoire du sport automobile, la ligne droite des Hunaudières était autrefois presque entièrement plate et immense. Les chicanes ajoutées en 1990 ont réduit les vitesses de pointe extrêmes, changeant le caractère du circuit sans enlever sa légende. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Confiance",
    "c_auteur": "Anonyme",
    "c_texte": "Tu n’as pas besoin de tout maîtriser pour commencer."
  },
  "02-11": {
    "a_cat": "Endurance / Le Mans",
    "a_titre": "Garage 56 NASCAR",
    "a_texte": "Dans l’histoire du sport automobile, en 2023, une Chevrolet Camaro NASCAR participa au Mans dans le cadre du Garage 56. Elle attira énormément d’attention parce qu’elle apportait un son, une taille et une culture de course très différente au milieu des prototypes et GT. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Gratitude",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La gratitude transforme ce qui manque en rappel de ce qui est déjà donné."
  },
  "03-11": {
    "a_cat": "GT3",
    "a_titre": "Naissance du GT3",
    "a_texte": "Dans l’histoire du sport automobile, la catégorie GT3, lancée au milieu des années 2000, a changé le sport auto client. Au lieu de voitures totalement libres, elle a rendu possible une compétition mondiale entre Porsche, Ferrari, Lamborghini, Mercedes-AMG, Audi ou BMW grâce à la Balance of Performance. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Force",
    "c_auteur": "2 Timothée 1:7",
    "c_texte": "Dieu ne nous donne pas un esprit de peur, mais de force, d’amour et de sagesse."
  },
  "04-11": {
    "a_cat": "GT3",
    "a_titre": "Balance of Performance",
    "a_texte": "Dans l’histoire du sport automobile, la Balance of Performance est souvent critiquée, mais elle est au cœur du GT3. Elle permet à des voitures très différentes — moteur avant, central ou arrière — de courir ensemble sans qu’un seul concept technique écrase tous les autres. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Intégrité",
    "c_auteur": "Proverbe biblique",
    "c_texte": "Mieux vaut peu avec droiture que beaucoup avec injustice."
  },
  "05-11": {
    "a_cat": "GT3",
    "a_titre": "ABS en GT3",
    "a_texte": "Dans l’histoire du sport automobile, contrairement à la F1, les GT3 utilisent l’ABS. Cela ne rend pas le freinage facile : le pilote doit tout de même gérer la température, l’usure, les bosses, les pneus et le trafic pendant des relais parfois très longs. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Paix",
    "c_auteur": "Philippiens 4:6-7",
    "c_texte": "Présente tes inquiétudes à Dieu, et sa paix gardera ton cœur."
  },
  "06-11": {
    "a_cat": "GT3",
    "a_titre": "Contrôle de traction",
    "a_texte": "Dans l’histoire du sport automobile, le contrôle de traction en GT3 n’est pas une aide magique. Il se règle selon la pluie, l’usure des pneus et le style du pilote. Trop intrusif, il ralentit la voiture ; trop permissif, il détruit les pneus ou provoque une erreur. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Persévérance",
    "c_auteur": "Hébreux 12:1",
    "c_texte": "Cours avec endurance la course qui t’est proposée."
  },
  "07-11": {
    "a_cat": "GT3",
    "a_titre": "Spa 24 Heures",
    "a_texte": "Dans l’histoire du sport automobile, les 24 Heures de Spa sont l’une des plus grandes courses GT3 au monde. Le circuit combine longues pleines charges, météo imprévisible et virages rapides comme Eau Rouge, ce qui en fait un test complet pour pilotes et voitures. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Courage",
    "c_auteur": "Anonyme",
    "c_texte": "Le courage commence souvent par une décision que personne ne voit."
  },
  "08-11": {
    "a_cat": "GT3",
    "a_titre": "Nürburgring 24h",
    "a_texte": "Dans l’histoire du sport automobile, les 24 Heures du Nürburgring se déroulent sur une version immense de la Nordschleife. La piste peut être sèche à un endroit et trempée à un autre, ce qui rend le choix des pneus parfois plus important que la vitesse pure. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Travail",
    "c_auteur": "Anonyme",
    "c_texte": "Ce que tu répètes aujourd’hui deviendra ton niveau naturel demain."
  },
  "09-11": {
    "a_cat": "GT3",
    "a_titre": "Bathurst 12 Hour",
    "a_texte": "Dans l’histoire du sport automobile, bathurst est redouté en GT3 parce que les murs sont proches et la montagne ne pardonne pas. Dans la descente, une petite erreur de placement peut transformer une voiture rapide en épave en quelques mètres. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Espérance",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "L’épreuve n’a pas le dernier mot quand l’espérance reste vivante."
  },
  "10-11": {
    "a_cat": "GT3",
    "a_titre": "Porsche 911 GT3 R",
    "a_texte": "Dans l’histoire du sport automobile, la Porsche 911 GT3 R garde l’ADN du moteur arrière. En GT3 moderne, cette architecture impose des réglages spécifiques mais donne souvent une très bonne motricité en sortie de virage. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Il n’y a pas de vent favorable pour celui qui ne sait pas où il va."
  },
  "11-11": {
    "a_cat": "GT3",
    "a_titre": "Mercedes-AMG GT3",
    "a_texte": "Dans l’histoire du sport automobile, la Mercedes-AMG GT3 s’est imposée comme une référence client grâce à sa fiabilité, son moteur atmosphérique puissant et sa présence dans de nombreux championnats. Elle montre que le succès GT3 dépend aussi du support offert aux équipes privées. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Humilité",
    "c_auteur": "Anonyme",
    "c_texte": "L’orgueil défend ses erreurs ; l’humilité les transforme."
  },
  "12-11": {
    "a_cat": "GT3",
    "a_titre": "Audi R8 LMS",
    "a_texte": "Dans l’histoire du sport automobile, l’Audi R8 LMS a gagné dans de nombreuses séries GT3, de Spa à Bathurst. Son succès repose autant sur sa performance que sur la qualité du programme client Audi Sport, très important dans cette catégorie. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Patience",
    "c_auteur": "Anonyme",
    "c_texte": "Certaines victoires mûrissent lentement."
  },
  "13-11": {
    "a_cat": "GT3",
    "a_titre": "Ferrari 296 GT3",
    "a_texte": "Dans l’histoire du sport automobile, la Ferrari 296 GT3 a remplacé la 488 GT3 avec une conception profondément revue. Même sans système hybride en course GT3, elle a permis à Ferrari de rester présente au plus haut niveau des courses clients. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Encouragement",
    "c_auteur": "Anonyme",
    "c_texte": "Tu peux être fatigué sans être fini."
  },
  "14-11": {
    "a_cat": "GT3",
    "a_titre": "BMW M4 GT3",
    "a_texte": "Dans l’histoire du sport automobile, la BMW M4 GT3 a succédé à la M6 GT3 avec une philosophie plus moderne. Sa grande calandre a beaucoup fait parler, mais en piste, son rôle est surtout d’offrir une plateforme plus exploitable pour les équipes clientes. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Foi",
    "c_auteur": "Matthieu 6:34",
    "c_texte": "Ne laisse pas demain voler la force dont tu as besoin aujourd’hui."
  },
  "15-11": {
    "a_cat": "GT3",
    "a_titre": "Lamborghini Huracán GT3",
    "a_texte": "Dans l’histoire du sport automobile, la Lamborghini Huracán GT3 a donné à Lamborghini une vraie crédibilité en compétition client. Sa carrière a montré que la marque pouvait être autre chose qu’un symbole de supercar spectaculaire. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Détermination",
    "c_auteur": "Anonyme",
    "c_texte": "Ce n’est pas parce que c’est lent que c’est inutile."
  },
  "16-11": {
    "a_cat": "GT3",
    "a_titre": "GT World Challenge",
    "a_texte": "Dans l’histoire du sport automobile, le GT World Challenge a construit une vraie scène internationale pour les GT3. Une même marque peut y briller en Europe, en Amérique, en Asie ou en Australie, mais chaque région impose ses propres circuits et styles de course. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Leadership",
    "c_auteur": "Anonyme",
    "c_texte": "Un bon leader ne cherche pas la lumière ; il aide les autres à mieux voir."
  },
  "17-11": {
    "a_cat": "GT3",
    "a_titre": "Pro-Am en GT3",
    "a_texte": "Dans l’histoire du sport automobile, le GT3 vit beaucoup grâce au format Pro-Am : un pilote professionnel partage la voiture avec un gentleman driver. Cette formule mélange business, passion et très haut niveau, ce qui rend la catégorie différente de la F1 ou du WEC usine. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Courage",
    "c_auteur": "Josué 1:9",
    "c_texte": "Fortifie-toi et prends courage ; ne t’effraie pas, car Dieu marche avec toi dans ce que tu dois affronter."
  },
  "18-11": {
    "a_cat": "F1",
    "a_titre": "Premier championnat F1",
    "a_texte": "Dans l’histoire du sport automobile, le championnat du monde de Formule 1 débuta en 1950 à Silverstone. À l’époque, les voitures avaient peu à voir avec les machines actuelles : pas d’aileron moderne, pas de carbone, pas de télémétrie et une sécurité très limitée. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Espérance",
    "c_auteur": "Ésaïe 40:31",
    "c_texte": "Ceux qui placent leur confiance en l’Éternel renouvellent leurs forces et trouvent l’élan pour repartir."
  },
  "19-11": {
    "a_cat": "F1",
    "a_titre": "Juan Manuel Fangio",
    "a_texte": "Dans l’histoire du sport automobile, juan Manuel Fangio remporta cinq titres mondiaux dans les années 1950 avec plusieurs constructeurs différents. Son talent était d’autant plus remarquable qu’il pilotait à une époque où chaque erreur pouvait avoir des conséquences dramatiques. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Persévérance",
    "c_auteur": "Galates 6:9",
    "c_texte": "Ne te lasse pas de faire le bien : la récolte arrive pour celui qui ne renonce pas."
  },
  "20-11": {
    "a_cat": "F1",
    "a_titre": "Jim Clark",
    "a_texte": "Dans l’histoire du sport automobile, jim Clark est souvent cité parmi les pilotes les plus naturellement doués. Il brillait en F1, en endurance, en IndyCar et en voitures de tourisme, à une époque où les pilotes passaient beaucoup plus facilement d’une discipline à l’autre. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Paix",
    "c_auteur": "Jean 14:27",
    "c_texte": "La paix véritable ne dépend pas seulement des circonstances ; elle vient d’un cœur gardé par Dieu."
  },
  "21-11": {
    "a_cat": "F1",
    "a_titre": "Lotus et l’effet de sol",
    "a_texte": "Dans l’histoire du sport automobile, à la fin des années 1970, Lotus exploita l’effet de sol pour coller la voiture à la piste grâce au flux d’air sous le châssis. Cette idée changea profondément l’aérodynamique de la F1. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Force",
    "c_auteur": "Philippiens 4:13",
    "c_texte": "Je peux tout par celui qui me fortifie."
  },
  "22-11": {
    "a_cat": "F1",
    "a_titre": "Niki Lauda 1976",
    "a_texte": "Dans l’histoire du sport automobile, en 1976, Niki Lauda survécut à un terrible accident au Nürburgring et revint en course seulement quelques semaines plus tard. Son retour reste l’un des exemples les plus forts de courage et de lucidité en sport automobile. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Confiance",
    "c_auteur": "Proverbes 3:5",
    "c_texte": "Ne t’appuie pas uniquement sur ta propre intelligence ; apprends aussi à faire confiance à plus grand que toi."
  },
  "23-11": {
    "a_cat": "F1",
    "a_titre": "Senna Monaco",
    "a_texte": "Dans l’histoire du sport automobile, ayrton Senna reste associé à Monaco, où sa précision semblait presque irréelle. Sur ce circuit étroit, le pilote doit être rapide sans jamais dépasser la limite de quelques centimètres. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Petit à petit, l’oiseau fait son nid."
  },
  "24-11": {
    "a_cat": "F1",
    "a_titre": "Senna Donington 1993",
    "a_texte": "Dans l’histoire du sport automobile, au Grand Prix d’Europe 1993 à Donington, Ayrton Senna réalisa un premier tour devenu légendaire sous la pluie. Il dépassa plusieurs adversaires avec une maîtrise qui illustrait son toucher unique sur piste humide. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Après la pluie vient le beau temps."
  },
  "25-11": {
    "a_cat": "F1",
    "a_titre": "Schumacher 1996 Espagne",
    "a_texte": "Dans l’histoire du sport automobile, en 1996, Michael Schumacher remporta le Grand Prix d’Espagne sous une pluie intense. Cette victoire avec Ferrari, dans des conditions difficiles, annonça la transformation progressive de l’équipe italienne autour de lui. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Travail",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Qui veut aller loin ménage sa monture."
  },
  "26-11": {
    "a_cat": "F1",
    "a_titre": "Ferrari 2004",
    "a_texte": "Dans l’histoire du sport automobile, la Ferrari F2004 fut l’une des F1 les plus dominantes de l’histoire moderne. Elle symbolise l’époque Schumacher-Todt-Brawn-Byrne, où stratégie, fiabilité et vitesse formaient un bloc presque imbattable. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Discipline",
    "c_auteur": "Anonyme",
    "c_texte": "La motivation lance le mouvement ; la discipline le garde vivant."
  },
  "27-11": {
    "a_cat": "F1",
    "a_titre": "Brawn GP 2009",
    "a_texte": "Dans l’histoire du sport automobile, brawn GP remporta le championnat 2009 après avoir failli ne jamais participer à la saison. Le double diffuseur et une excellente exploitation du règlement permirent à une équipe née dans l’urgence de battre les géants. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Résilience",
    "c_auteur": "Anonyme",
    "c_texte": "Une mauvaise journée ne définit pas ton chemin entier."
  },
  "28-11": {
    "a_cat": "F1",
    "a_titre": "Red Bull 2010-2013",
    "a_texte": "Dans l’histoire du sport automobile, entre 2010 et 2013, Red Bull domina la F1 avec Sebastian Vettel grâce à une aérodynamique exceptionnelle. La capacité d’Adrian Newey à exploiter les flux d’air fut aussi décisive que le pilotage. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Foi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Dieu ne promet pas toujours un chemin facile, mais il promet sa présence dans le chemin."
  },
  "29-11": {
    "a_cat": "F1",
    "a_titre": "Mercedes hybride",
    "a_texte": "Dans l’histoire du sport automobile, à partir de 2014, Mercedes domina l’ère hybride de la F1. Son moteur très efficace et son intégration châssis-propulseur donnèrent à l’équipe une avance que les autres mirent des années à réduire. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Humilité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Grandir, c’est accepter d’apprendre même quand on pensait déjà savoir."
  },
  "30-11": {
    "a_cat": "F1",
    "a_titre": "Hamilton Silverstone 2008",
    "a_texte": "Dans l’histoire du sport automobile, en 2008, Lewis Hamilton domina le Grand Prix de Grande-Bretagne sous une pluie difficile. Sa marge à l’arrivée fut énorme et la course renforça sa réputation de pilote exceptionnel dans les conditions changeantes. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Encouragement",
    "c_auteur": "Anonyme",
    "c_texte": "Ce que tu construis en silence finira par parler pour toi."
  },
  "01-12": {
    "a_cat": "F1",
    "a_titre": "Verstappen Brésil 2016",
    "a_texte": "Dans l’histoire du sport automobile, au Brésil 2016, Max Verstappen réalisa une remontée spectaculaire sous la pluie. Ses trajectoires différentes et son contrôle de la voiture révélèrent un instinct de pilotage rare dans des conditions extrêmes. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Excellence",
    "c_auteur": "Anonyme",
    "c_texte": "Fais bien les petites choses : elles préparent les grandes."
  },
  "02-12": {
    "a_cat": "F1",
    "a_titre": "Monaco impossible à doubler",
    "a_texte": "Dans l’histoire du sport automobile, monaco est souvent critiqué pour le manque de dépassements, mais c’est aussi ce qui rend la qualification si intense. Sur ce circuit, partir devant peut valoir plus qu’une stratégie parfaite. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Courage",
    "c_auteur": "Nelson Mandela",
    "c_texte": "Le courage n’est pas l’absence de peur, mais la capacité d’avancer malgré elle."
  },
  "03-12": {
    "a_cat": "F1",
    "a_titre": "DRS",
    "a_texte": "Dans l’histoire du sport automobile, le DRS a été introduit pour faciliter les dépassements en réduisant la traînée dans certaines zones. Il ne remplace pas le talent : le pilote doit encore préparer la sortie de virage et oser freiner au bon moment. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Persévérance",
    "c_auteur": "Winston Churchill",
    "c_texte": "Le succès consiste à aller d’échec en échec sans perdre son enthousiasme."
  },
  "04-12": {
    "a_cat": "F1",
    "a_titre": "Halo",
    "a_texte": "Dans l’histoire du sport automobile, le halo a été critiqué à son introduction, surtout pour son apparence. Plusieurs incidents ont ensuite montré son importance en matière de sécurité, rappelant que le progrès technique n’est pas toujours populaire au départ. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Sport",
    "c_auteur": "Michael Jordan",
    "c_texte": "J’accepte l’échec ; je n’accepte pas de ne pas essayer."
  },
  "05-12": {
    "a_cat": "F1",
    "a_titre": "Freins carbone",
    "a_texte": "Dans l’histoire du sport automobile, les freins carbone d’une F1 doivent fonctionner à très haute température. À froid, ils peuvent être moins efficaces, ce qui rend les tours de sortie et les relances après Safety Car particulièrement délicats. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Sport",
    "c_auteur": "Billie Jean King",
    "c_texte": "Les champions continuent à jouer jusqu’à ce qu’ils réussissent."
  },
  "06-12": {
    "a_cat": "F1",
    "a_titre": "Arrêts aux stands modernes",
    "a_texte": "Dans l’histoire du sport automobile, les arrêts aux stands modernes en F1 sont devenus une discipline en soi. Une vingtaine de mécaniciens coordonnent leurs gestes en quelques secondes, et une seule roue mal fixée peut ruiner un Grand Prix entier. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe africain",
    "c_texte": "Seul on va plus vite, ensemble on va plus loin."
  },
  "07-12": {
    "a_cat": "F1",
    "a_titre": "Williams FW14B",
    "a_texte": "Dans l’histoire du sport automobile, la Williams FW14B de 1992 utilisait une suspension active très avancée. Nigel Mansell domina la saison, montrant que l’électronique et l’aérodynamique pouvaient transformer l’équilibre d’une F1. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe chinois",
    "c_texte": "Un voyage de mille kilomètres commence par un premier pas."
  },
  "08-12": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Audi Quattro",
    "a_texte": "Dans l’histoire du sport automobile, l’Audi Quattro changea le rallye en imposant la transmission intégrale au plus haut niveau. Après elle, il devint difficile d’imaginer une voiture de rallye moderne sans quatre roues motrices. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Foi",
    "c_auteur": "Psaume 23",
    "c_texte": "Même dans la vallée sombre, je ne suis pas abandonné."
  },
  "09-12": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Groupe B",
    "a_texte": "Dans l’histoire du sport automobile, le Groupe B reste l’une des périodes les plus folles du rallye. Les voitures étaient extrêmement puissantes, les spectateurs très proches et la sécurité insuffisante, ce qui rendit cette époque spectaculaire mais dangereuse. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Espérance",
    "c_auteur": "Romains 8:28",
    "c_texte": "Dieu peut faire concourir toutes choses au bien de ceux qui l’aiment."
  },
  "10-12": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Michèle Mouton",
    "a_texte": "Dans l’histoire du sport automobile, michèle Mouton fut l’une des grandes figures du rallye mondial avec Audi. Elle gagna des manches de championnat du monde et prouva que le talent ne dépendait pas du genre dans une discipline extrêmement exigeante. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Détermination",
    "c_auteur": "Anonyme",
    "c_texte": "Le progrès n’a pas besoin d’être spectaculaire pour être réel."
  },
  "11-12": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Sébastien Loeb",
    "a_texte": "Dans l’histoire du sport automobile, sébastien Loeb domina le WRC avec une régularité impressionnante. Ancien gymnaste, il apporta au rallye une précision et une capacité d’adaptation qui lui permirent de gagner sur terre, asphalte, neige et glace. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Confiance",
    "c_auteur": "Anonyme",
    "c_texte": "Tu n’as pas besoin de tout maîtriser pour commencer."
  },
  "12-12": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Colin McRae",
    "a_texte": "Dans l’histoire du sport automobile, colin McRae incarnait un style de rallye agressif et spectaculaire. Sa devise populaire, “if in doubt, flat out”, résume une approche courageuse mais risquée qui a marqué toute une génération de fans. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Gratitude",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La gratitude transforme ce qui manque en rappel de ce qui est déjà donné."
  },
  "13-12": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Monte-Carlo",
    "a_texte": "Dans l’histoire du sport automobile, le Rallye Monte-Carlo est célèbre pour ses conditions imprévisibles. Une spéciale peut mélanger asphalte sec, neige, glace et plaques humides, obligeant les équipages à accepter une part d’incertitude dans le choix des pneus. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Force",
    "c_auteur": "2 Timothée 1:7",
    "c_texte": "Dieu ne nous donne pas un esprit de peur, mais de force, d’amour et de sagesse."
  },
  "14-12": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Finlande",
    "a_texte": "Dans l’histoire du sport automobile, le Rallye de Finlande est surnommé le Grand Prix sur terre. Les voitures y volent littéralement sur des bosses rapides, et les pilotes locaux y ont longtemps possédé un avantage grâce à leur connaissance du terrain. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Intégrité",
    "c_auteur": "Proverbe biblique",
    "c_texte": "Mieux vaut peu avec droiture que beaucoup avec injustice."
  },
  "15-12": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Safari Rally",
    "a_texte": "Dans l’histoire du sport automobile, le Safari Rally a longtemps été l’une des épreuves les plus dures du calendrier. Poussière, chaleur, pierres, boue et longues distances y mettaient les voitures autant à l’épreuve que les équipages. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Paix",
    "c_auteur": "Philippiens 4:6-7",
    "c_texte": "Présente tes inquiétudes à Dieu, et sa paix gardera ton cœur."
  },
  "16-12": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Pikes Peak",
    "a_texte": "Dans l’histoire du sport automobile, pikes Peak est une montée mythique où la puissance ne suffit pas. L’altitude réduit les performances, les virages s’enchaînent sans droit à l’erreur et la météo peut changer rapidement en montant vers le sommet. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Persévérance",
    "c_auteur": "Hébreux 12:1",
    "c_texte": "Cours avec endurance la course qui t’est proposée."
  },
  "17-12": {
    "a_cat": "Rallye / WRC",
    "a_titre": "Peugeot 405 T16 Pikes Peak",
    "a_texte": "Dans l’histoire du sport automobile, la Peugeot 405 T16 de Pikes Peak est devenue mythique grâce au film “Climb Dance”. Les images d’Ari Vatanen attaquant la montagne au soleil levant ont transformé une course de côte en morceau de cinéma automobile. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Courage",
    "c_auteur": "Anonyme",
    "c_texte": "Le courage commence souvent par une décision que personne ne voit."
  },
  "18-12": {
    "a_cat": "IMSA / Daytona",
    "a_titre": "Daytona 24",
    "a_texte": "Dans l’histoire du sport automobile, les 24 Heures de Daytona mélangent banking ovale et portion routière. Cette combinaison oblige les équipes à trouver un compromis rare : une voiture stable à haute vitesse mais efficace dans les freinages lents. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Travail",
    "c_auteur": "Anonyme",
    "c_texte": "Ce que tu répètes aujourd’hui deviendra ton niveau naturel demain."
  },
  "19-12": {
    "a_cat": "IMSA / Daytona",
    "a_titre": "Rolex Daytona",
    "a_texte": "Dans l’histoire du sport automobile, la victoire aux 24 Heures de Daytona offre traditionnellement une montre Rolex aux vainqueurs. C’est l’un des trophées les plus désirés du sport auto, parce qu’il symbolise autant la réussite que la résistance. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Espérance",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "L’épreuve n’a pas le dernier mot quand l’espérance reste vivante."
  },
  "20-12": {
    "a_cat": "IMSA / Sebring",
    "a_titre": "Sebring bosselé",
    "a_texte": "Dans l’histoire du sport automobile, sebring est connu pour ses bosses et ses plaques de béton issues d’un ancien aérodrome. Les voitures y souffrent énormément, ce qui en fait une répétition brutale pour les programmes d’endurance. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe populaire",
    "c_texte": "Il n’y a pas de vent favorable pour celui qui ne sait pas où il va."
  },
  "21-12": {
    "a_cat": "IMSA / Petit Le Mans",
    "a_titre": "Petit Le Mans",
    "a_texte": "Dans l’histoire du sport automobile, petit Le Mans, à Road Atlanta, condense l’esprit de l’endurance sur une course plus courte que Le Mans mais souvent très intense. Le trafic y est constant et les neutralisations peuvent bouleverser la stratégie. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Humilité",
    "c_auteur": "Anonyme",
    "c_texte": "L’orgueil défend ses erreurs ; l’humilité les transforme."
  },
  "22-12": {
    "a_cat": "IMSA",
    "a_titre": "Deltawing",
    "a_texte": "Dans l’histoire du sport automobile, la Deltawing intrigua le monde de l’endurance avec sa silhouette étroite à l’avant. Même si le projet n’a pas tout gagné, il a rappelé que l’innovation passe parfois par des formes qui semblent absurdes au premier regard. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Patience",
    "c_auteur": "Anonyme",
    "c_texte": "Certaines victoires mûrissent lentement."
  },
  "23-12": {
    "a_cat": "Supercars / Bathurst",
    "a_titre": "Bathurst 1000",
    "a_texte": "Dans l’histoire du sport automobile, le Bathurst 1000 est une course culte en Australie. Mount Panorama ressemble à deux circuits en un : une montée et une descente de montagne très techniques, puis de longues sections rapides où l’aspiration compte énormément. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Encouragement",
    "c_auteur": "Anonyme",
    "c_texte": "Tu peux être fatigué sans être fini."
  },
  "24-12": {
    "a_cat": "Supercars / Bathurst",
    "a_titre": "Peter Brock",
    "a_texte": "Dans l’histoire du sport automobile, peter Brock est une légende de Bathurst, où il a gagné neuf fois. En Australie, son nom dépasse le sport automobile : il incarne une culture populaire liée aux voitures de tourisme et aux grands duels Ford-Holden. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Foi",
    "c_auteur": "Matthieu 6:34",
    "c_texte": "Ne laisse pas demain voler la force dont tu as besoin aujourd’hui."
  },
  "25-12": {
    "a_cat": "Supercars / Bathurst",
    "a_titre": "Murs de Bathurst",
    "a_texte": "Dans l’histoire du sport automobile, à Bathurst, les murs sont si proches que les pilotes disent souvent que le circuit “ne pardonne rien”. Une voiture légèrement mal placée dans la descente peut déclencher un accident en chaîne. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Détermination",
    "c_auteur": "Anonyme",
    "c_texte": "Ce n’est pas parce que c’est lent que c’est inutile."
  },
  "26-12": {
    "a_cat": "Nürburgring",
    "a_titre": "Nordschleife",
    "a_texte": "Dans l’histoire du sport automobile, la Nordschleife est surnommée “l’Enfer vert”. Sa longueur, ses bosses, ses changements d’adhérence et ses virages aveugles la rendent très différente des circuits modernes plus courts et plus standardisés. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Leadership",
    "c_auteur": "Anonyme",
    "c_texte": "Un bon leader ne cherche pas la lumière ; il aide les autres à mieux voir."
  },
  "27-12": {
    "a_cat": "Nürburgring",
    "a_titre": "Record Stefan Bellof",
    "a_texte": "Dans l’histoire du sport automobile, stefan Bellof signa en 1983 un tour devenu mythique de la Nordschleife avec une Porsche 956. Ce chrono resta une référence pendant des décennies et participa à la légende du circuit. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Courage",
    "c_auteur": "Josué 1:9",
    "c_texte": "Fortifie-toi et prends courage ; ne t’effraie pas, car Dieu marche avec toi dans ce que tu dois affronter."
  },
  "28-12": {
    "a_cat": "Nürburgring",
    "a_titre": "Météo locale",
    "a_texte": "Dans l’histoire du sport automobile, sur la Nordschleife, la météo peut varier d’un secteur à l’autre. Une équipe peut chausser des slicks parce que les stands sont au sec, puis découvrir une portion humide ou brumeuse plusieurs kilomètres plus loin. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Espérance",
    "c_auteur": "Ésaïe 40:31",
    "c_texte": "Ceux qui placent leur confiance en l’Éternel renouvellent leurs forces et trouvent l’élan pour repartir."
  },
  "29-12": {
    "a_cat": "IndyCar",
    "a_titre": "Indy 500",
    "a_texte": "Dans l’histoire du sport automobile, les 500 Miles d’Indianapolis ne sont pas seulement une course rapide. Les pilotes doivent gérer l’aspiration, les arrêts, le trafic, le carburant et la peur permanente de toucher le mur à très haute vitesse. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Persévérance",
    "c_auteur": "Galates 6:9",
    "c_texte": "Ne te lasse pas de faire le bien : la récolte arrive pour celui qui ne renonce pas."
  },
  "30-12": {
    "a_cat": "IndyCar",
    "a_titre": "Triple Couronne",
    "a_texte": "Dans l’histoire du sport automobile, la Triple Couronne informelle du sport auto associe souvent Monaco, Le Mans et Indianapolis. Graham Hill reste le seul pilote à avoir gagné les trois, ce qui montre la rareté d’une telle polyvalence. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Paix",
    "c_auteur": "Jean 14:27",
    "c_texte": "La paix véritable ne dépend pas seulement des circonstances ; elle vient d’un cœur gardé par Dieu."
  },
  "31-12": {
    "a_cat": "IndyCar",
    "a_titre": "Mansell en IndyCar",
    "a_texte": "Dans l’histoire du sport automobile, nigel Mansell quitta la F1 après son titre 1992 et remporta le championnat IndyCar dès 1993. Peu de pilotes ont réussi une transition aussi spectaculaire entre deux mondes aussi différents. Derrière le résultat, on retrouve toujours le même mélange : choix techniques, pression humaine et exécution parfaite au bon moment.",
    "c_theme": "Force",
    "c_auteur": "Philippiens 4:13",
    "c_texte": "Je peux tout par celui qui me fortifie."
  }
}
;