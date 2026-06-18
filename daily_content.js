// Contenu quotidien : anecdote + citation pour chaque jour de l'année (clé = JJ-MM)
const DAILY_CONTENT = {
  "01-01": {
    "a_cat": "GT3",
    "a_titre": "Balance of Performance en GT3",
    "a_texte": "Balance of Performance : en GT3, la BoP ajuste le poids, la puissance ou la hauteur de caisse pour rapprocher les performances de voitures très différentes.",
    "c_theme": "Persévérance",
    "c_auteur": "Anonyme",
    "c_texte": "Chaque tour propre construit une victoire que personne ne voit encore."
  },
  "02-01": {
    "a_cat": "F1",
    "a_titre": "DRS en Formule 1",
    "a_texte": "DRS : Le DRS réduit la traînée sur certaines zones pour aider les dépassements, mais il ne remplace pas le talent au freinage.",
    "c_theme": "Discipline",
    "c_auteur": "Pensée sportive",
    "c_texte": "La foi ne supprime pas l'effort, elle donne une raison de continuer."
  },
  "03-01": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Foi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Un relais difficile peut préparer une arrivée victorieuse."
  },
  "04-01": {
    "a_cat": "GT3",
    "a_titre": "Relais pilotes en GT3",
    "a_texte": "Relais pilotes : en GT3, en endurance GT, la régularité des relais compte souvent plus qu'un seul tour spectaculaire.",
    "c_theme": "Leadership",
    "c_auteur": "Pensée sportive",
    "c_texte": "Avancer lentement dans la bonne direction vaut mieux que sprinter vers le mauvais virage."
  },
  "05-01": {
    "a_cat": "IMSA / GT America",
    "a_titre": "Petit Le Mans côté américain",
    "a_texte": "Petit Le Mans : Petit Le Mans concentre l'esprit endurance sur un format plus court mais très intense.",
    "c_theme": "Résilience",
    "c_auteur": "Anonyme",
    "c_texte": "Celui qui reste fidèle dans l'effort progresse même quand le résultat tarde."
  },
  "06-01": {
    "a_cat": "GT3",
    "a_titre": "Pneus en GT3",
    "a_texte": "Pneus : en GT3, la gestion des pneus transforme une voiture rapide en début de relais en vraie candidate à la victoire.",
    "c_theme": "Humilité",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le talent ouvre une porte, mais le caractère décide si tu restes dans la pièce."
  },
  "07-01": {
    "a_cat": "F1",
    "a_titre": "Gestion énergie en Formule 1",
    "a_texte": "Gestion énergie : Les groupes propulseurs hybrides ont rendu la gestion d'énergie aussi stratégique que la vitesse pure.",
    "c_theme": "Courage",
    "c_auteur": "Anonyme",
    "c_texte": "L'équipe qui se fait confiance gagne du temps avant même le départ."
  },
  "08-01": {
    "a_cat": "Supercars / autres GT",
    "a_titre": "Nürburgring : précision obligatoire",
    "a_texte": "Nürburgring : La Nordschleife reste l'un des plus grands examens pour une GT et son pilote.",
    "c_theme": "Espérance",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le courage n'est pas l'absence de peur, c'est la décision d'avancer malgré elle."
  },
  "09-01": {
    "a_cat": "GT3",
    "a_titre": "Freinage en GT3",
    "a_texte": "Freinage : en GT3, le freinage en GT3 est un mélange de puissance, d'endurance mécanique et de précision du pilote.",
    "c_theme": "Intégrité",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "La patience transforme les obstacles en apprentissage."
  },
  "10-01": {
    "a_cat": "F1",
    "a_titre": "Développement en Formule 1",
    "a_texte": "Développement : La bataille se gagne aussi en usine, avec des évolutions parfois invisibles au premier regard.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "La sagesse sait quand attaquer et quand préserver."
  },
  "11-01": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Pensée sportive",
    "c_texte": "Quand la fatigue parle fort, la discipline doit parler plus juste."
  },
  "12-01": {
    "a_cat": "GT3",
    "a_titre": "Aéro en GT3",
    "a_texte": "Aéro : en GT3, les GT3 gardent une aérodynamique efficace, mais moins extrême que les prototypes.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le vrai champion respecte la piste, l'équipe et l'adversaire."
  },
  "13-01": {
    "a_cat": "IMSA / GT America",
    "a_titre": "IMSA côté américain",
    "a_texte": "IMSA : L'IMSA mélange prototypes et GT dans un style très spectaculaire.",
    "c_theme": "Excellence",
    "c_auteur": "Pensée sportive",
    "c_texte": "Le calme dans le chaos est souvent la meilleure trajectoire."
  },
  "14-01": {
    "a_cat": "GT3",
    "a_titre": "Radio en GT3",
    "a_texte": "Radio : en GT3, les échanges radio aident à gérer trafic, météo et stratégie, mais le pilote doit décider en une fraction de seconde.",
    "c_theme": "Gratitude",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le travail invisible finit toujours par apparaître au chronomètre."
  },
  "15-01": {
    "a_cat": "F1",
    "a_titre": "Aéro F1 en Formule 1",
    "a_texte": "Aéro F1 : L'aérodynamique d'une F1 conditionne la vitesse en virage et la sensibilité dans le trafic.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Pensée sportive",
    "c_texte": "La discipline commence quand l'envie s'arrête."
  },
  "16-01": {
    "a_cat": "Supercars / autres GT",
    "a_titre": "Bathurst : précision obligatoire",
    "a_texte": "Bathurst : Bathurst impose de frôler les murs sur une montagne où l'erreur coûte immédiatement cher.",
    "c_theme": "Persévérance",
    "c_auteur": "Pensée sportive",
    "c_texte": "La victoire la plus solide est celle qui ne sacrifie pas l'intégrité."
  },
  "17-01": {
    "a_cat": "GT3",
    "a_titre": "Carrosserie en GT3",
    "a_texte": "Carrosserie : en GT3, une GT3 reste proche d'une silhouette de voiture de route, mais presque tout est optimisé pour la course.",
    "c_theme": "Discipline",
    "c_auteur": "Anonyme",
    "c_texte": "L'humilité apprend plus vite que l'orgueil."
  },
  "18-01": {
    "a_cat": "F1",
    "a_titre": "Pluie en Formule 1",
    "a_texte": "Pluie : Sous la pluie, la trajectoire idéale change et le toucher de pédale devient déterminant.",
    "c_theme": "Foi",
    "c_auteur": "Anonyme",
    "c_texte": "Rester droit dans la pression vaut plus qu'une victoire obtenue de travers."
  },
  "19-01": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Leadership",
    "c_auteur": "Anonyme",
    "c_texte": "La foi ne supprime pas l'effort, elle donne une raison de continuer, même quand le chrono ne récompense pas encore l'effort."
  },
  "20-01": {
    "a_cat": "GT3",
    "a_titre": "Nürburgring 24h en GT3",
    "a_texte": "Nürburgring 24h : en GT3, le Nürburgring combine GT3, météo changeante et trafic massif sur la Nordschleife.",
    "c_theme": "Résilience",
    "c_auteur": "Pensée sportive",
    "c_texte": "Un relais difficile peut préparer une arrivée victorieuse, même quand le chrono ne récompense pas encore l'effort."
  },
  "21-01": {
    "a_cat": "IMSA / GT America",
    "a_titre": "Daytona côté américain",
    "a_texte": "Daytona : Daytona mélange banking, trafic et relais longs, avec une tension unique jusqu'au dernier tour.",
    "c_theme": "Humilité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Chaque erreur corrigée devient une pièce de la prochaine réussite."
  },
  "22-01": {
    "a_cat": "GT3",
    "a_titre": "ABS en GT3",
    "a_texte": "ABS : en GT3, contrairement à beaucoup de monoplaces, les GT3 utilisent l'ABS, ce qui change fortement la confiance au freinage.",
    "c_theme": "Courage",
    "c_auteur": "Pensée sportive",
    "c_texte": "Celui qui reste fidèle dans l'effort progresse même quand le résultat tarde, même quand le chrono ne récompense pas encore l'effort."
  },
  "23-01": {
    "a_cat": "F1",
    "a_titre": "Arrêts aux stands en Formule 1",
    "a_texte": "Arrêts aux stands : Un arrêt F1 se joue en quelques secondes, avec une chorégraphie millimétrée.",
    "c_theme": "Espérance",
    "c_auteur": "Anonyme",
    "c_texte": "Le talent ouvre une porte, mais le caractère décide si tu restes dans la pièce, même quand le chrono ne récompense pas encore l'effort."
  },
  "24-01": {
    "a_cat": "Supercars / autres GT",
    "a_titre": "Macau : précision obligatoire",
    "a_texte": "Macau : Macau demande une précision extrême entre rails, murs et freinages en descente.",
    "c_theme": "Intégrité",
    "c_auteur": "Anonyme",
    "c_texte": "Le dépassement commence là où les excuses s'arrêtent."
  },
  "25-01": {
    "a_cat": "GT3",
    "a_titre": "Pit stop en GT3",
    "a_texte": "Pit stop : en GT3, un arrêt propre peut faire gagner plus qu'un dépassement risqué en piste.",
    "c_theme": "Sagesse",
    "c_auteur": "Anonyme",
    "c_texte": "Le courage n'est pas l'absence de peur, c'est la décision d'avancer malgré elle, même quand le chrono ne récompense pas encore l'effort."
  },
  "26-01": {
    "a_cat": "F1",
    "a_titre": "Qualifications en Formule 1",
    "a_texte": "Qualifications : La qualification récompense la précision maximale sur un seul tour.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Anonyme",
    "c_texte": "La patience transforme les obstacles en apprentissage dans le silence de l'entraînement."
  },
  "27-01": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Patience",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La gratitude garde le cœur stable quand la pression monte dans les moments de pression."
  },
  "28-01": {
    "a_cat": "GT3",
    "a_titre": "Réglages en GT3",
    "a_texte": "Réglages : en GT3, un petit changement d'aileron ou de pression peut transformer l'équilibre d'une GT3.",
    "c_theme": "Excellence",
    "c_auteur": "Anonyme",
    "c_texte": "Quand la fatigue parle fort, la discipline doit parler plus juste avec l'équipe."
  },
  "29-01": {
    "a_cat": "IMSA / GT America",
    "a_titre": "Road America côté américain",
    "a_texte": "Road America : Les circuits américains récompensent souvent le courage au freinage et les sorties de virage solides.",
    "c_theme": "Gratitude",
    "c_auteur": "Anonyme",
    "c_texte": "Le vrai champion respecte la piste, l'équipe et l'adversaire tour après tour."
  },
  "30-01": {
    "a_cat": "GT3",
    "a_titre": "Nuit en GT3",
    "a_texte": "Nuit : en GT3, la nuit révèle les équipages les plus constants : visibilité réduite, fatigue et trafic permanent.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Anonyme",
    "c_texte": "On ne maîtrise pas la météo, mais on peut maîtriser sa réaction en gardant le cap."
  },
  "31-01": {
    "a_cat": "F1",
    "a_titre": "Monoplaces en Formule 1",
    "a_texte": "Monoplaces : La F1 cherche la performance absolue sur un tour comme sur une distance de Grand Prix.",
    "c_theme": "Persévérance",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le travail invisible finit toujours par apparaître au chronomètre lorsque le doute apparaît."
  },
  "01-02": {
    "a_cat": "Supercars / autres GT",
    "a_titre": "Supercars : précision obligatoire",
    "a_texte": "Supercars : Les Supercars australiennes sont réputées pour leurs duels musclés et leur pilotage agressif.",
    "c_theme": "Discipline",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La discipline commence quand l'envie s'arrête aujourd'hui."
  },
  "02-02": {
    "a_cat": "GT3",
    "a_titre": "Fiabilité en GT3",
    "a_texte": "Fiabilité : en GT3, une GT3 doit rester rapide tout en supportant des heures de vibreurs, de chaleur et de freinages violents.",
    "c_theme": "Foi",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Un bon leader ne prend pas toute la lumière ; il aide l'équipe à mieux voir en gardant le cap."
  },
  "03-02": {
    "a_cat": "F1",
    "a_titre": "Pneus F1 en Formule 1",
    "a_texte": "Pneus F1 : La fenêtre de température des pneus peut décider du rythme d'une voiture.",
    "c_theme": "Leadership",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "L'humilité apprend plus vite que l'orgueil avec l'équipe."
  },
  "04-02": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Résilience",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Rester droit dans la pression vaut plus qu'une victoire obtenue de travers aujourd'hui."
  },
  "05-02": {
    "a_cat": "GT3",
    "a_titre": "Drapeaux jaunes en GT3",
    "a_texte": "Drapeaux jaunes : en GT3, un Full Course Yellow peut détruire ou sauver une stratégie d'endurance.",
    "c_theme": "Humilité",
    "c_auteur": "Anonyme",
    "c_texte": "Ne cherche pas seulement à aller vite ; cherche à devenir fiable dans les moments de pression."
  },
  "06-02": {
    "a_cat": "IMSA / GT America",
    "a_titre": "Sebring côté américain",
    "a_texte": "Sebring : Sebring est célèbre pour ses bosses qui mettent les voitures à rude épreuve.",
    "c_theme": "Courage",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Un relais difficile peut préparer une arrivée victorieuse avec humilité."
  },
  "07-02": {
    "a_cat": "GT3",
    "a_titre": "Cockpit en GT3",
    "a_texte": "Cockpit : en GT3, dans le cockpit, boutons, ABS, TC et radio deviennent des réflexes aussi importants que le volant.",
    "c_theme": "Espérance",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Chaque erreur corrigée devient une pièce de la prochaine réussite tour après tour."
  },
  "08-02": {
    "a_cat": "F1",
    "a_titre": "Safety Car en Formule 1",
    "a_texte": "Safety Car : Une Safety Car peut renverser une course en regroupant tout le peloton.",
    "c_theme": "Intégrité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Une course se gagne d'abord dans les petites décisions répétées jusqu'à la ligne d'arrivée."
  },
  "09-02": {
    "a_cat": "Supercars / autres GT",
    "a_titre": "Course de côte : précision obligatoire",
    "a_texte": "Course de côte : Une course de côte récompense l'engagement pur : une seule montée, aucune marge.",
    "c_theme": "Sagesse",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le talent ouvre une porte, mais le caractère décide si tu restes dans la pièce avec humilité."
  },
  "10-02": {
    "a_cat": "GT3",
    "a_titre": "Balance of Performance en GT3",
    "a_texte": "Balance of Performance : en GT3, la BoP ajuste le poids, la puissance ou la hauteur de caisse pour rapprocher les performances de voitures très différentes.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le dépassement commence là où les excuses s'arrêtent dans le silence de l'entraînement."
  },
  "11-02": {
    "a_cat": "F1",
    "a_titre": "DRS en Formule 1",
    "a_texte": "DRS : Le DRS réduit la traînée sur certaines zones pour aider les dépassements, mais il ne remplace pas le talent au freinage.",
    "c_theme": "Patience",
    "c_auteur": "Anonyme",
    "c_texte": "Chaque tour propre construit une victoire que personne ne voit encore dans les moments de pression."
  },
  "12-02": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Excellence",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La patience transforme les obstacles en apprentissage avec l'équipe."
  },
  "13-02": {
    "a_cat": "GT3",
    "a_titre": "Relais pilotes en GT3",
    "a_texte": "Relais pilotes : en GT3, en endurance GT, la régularité des relais compte souvent plus qu'un seul tour spectaculaire.",
    "c_theme": "Gratitude",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "La gratitude garde le cœur stable quand la pression monte tour après tour."
  },
  "14-02": {
    "a_cat": "IMSA / GT America",
    "a_titre": "Petit Le Mans côté américain",
    "a_texte": "Petit Le Mans : Petit Le Mans concentre l'esprit endurance sur un format plus court mais très intense.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Avancer lentement dans la bonne direction vaut mieux que sprinter vers le mauvais virage en gardant le cap."
  },
  "15-02": {
    "a_cat": "GT3",
    "a_titre": "Pneus en GT3",
    "a_texte": "Pneus : en GT3, la gestion des pneus transforme une voiture rapide en début de relais en vraie candidate à la victoire.",
    "c_theme": "Persévérance",
    "c_auteur": "Anonyme",
    "c_texte": "Le vrai champion respecte la piste, l'équipe et l'adversaire lorsque le doute apparaît."
  },
  "16-02": {
    "a_cat": "F1",
    "a_titre": "Gestion énergie en Formule 1",
    "a_texte": "Gestion énergie : Les groupes propulseurs hybrides ont rendu la gestion d'énergie aussi stratégique que la vitesse pure.",
    "c_theme": "Discipline",
    "c_auteur": "Pensée sportive",
    "c_texte": "On ne maîtrise pas la météo, mais on peut maîtriser sa réaction aujourd'hui."
  },
  "17-02": {
    "a_cat": "Supercars / autres GT",
    "a_titre": "Nürburgring : précision obligatoire",
    "a_texte": "Nürburgring : La Nordschleife reste l'un des plus grands examens pour une GT et son pilote.",
    "c_theme": "Foi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "L'équipe qui se fait confiance gagne du temps avant même le départ en gardant le cap."
  },
  "18-02": {
    "a_cat": "GT3",
    "a_titre": "Freinage en GT3",
    "a_texte": "Freinage : en GT3, le freinage en GT3 est un mélange de puissance, d'endurance mécanique et de précision du pilote.",
    "c_theme": "Leadership",
    "c_auteur": "Pensée sportive",
    "c_texte": "La discipline commence quand l'envie s'arrête avec l'équipe."
  },
  "19-02": {
    "a_cat": "F1",
    "a_titre": "Développement en Formule 1",
    "a_texte": "Développement : La bataille se gagne aussi en usine, avec des évolutions parfois invisibles au premier regard.",
    "c_theme": "Résilience",
    "c_auteur": "Anonyme",
    "c_texte": "Un bon leader ne prend pas toute la lumière ; il aide l'équipe à mieux voir aujourd'hui."
  },
  "20-02": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Humilité",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "La sagesse sait quand attaquer et quand préserver dans les moments de pression."
  },
  "21-02": {
    "a_cat": "GT3",
    "a_titre": "Aéro en GT3",
    "a_texte": "Aéro : en GT3, les GT3 gardent une aérodynamique efficace, mais moins extrême que les prototypes.",
    "c_theme": "Courage",
    "c_auteur": "Anonyme",
    "c_texte": "Rester droit dans la pression vaut plus qu'une victoire obtenue de travers avec humilité."
  },
  "22-02": {
    "a_cat": "IMSA / GT America",
    "a_titre": "IMSA côté américain",
    "a_texte": "IMSA : L'IMSA mélange prototypes et GT dans un style très spectaculaire.",
    "c_theme": "Espérance",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Ne cherche pas seulement à aller vite ; cherche à devenir fiable tour après tour."
  },
  "23-02": {
    "a_cat": "GT3",
    "a_titre": "Radio en GT3",
    "a_texte": "Radio : en GT3, les échanges radio aident à gérer trafic, météo et stratégie, mais le pilote doit décider en une fraction de seconde.",
    "c_theme": "Intégrité",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le calme dans le chaos est souvent la meilleure trajectoire jusqu'à la ligne d'arrivée."
  },
  "24-02": {
    "a_cat": "F1",
    "a_titre": "Aéro F1 en Formule 1",
    "a_texte": "Aéro F1 : L'aérodynamique d'une F1 conditionne la vitesse en virage et la sensibilité dans le trafic.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Chaque erreur corrigée devient une pièce de la prochaine réussite avec humilité."
  },
  "25-02": {
    "a_cat": "Supercars / autres GT",
    "a_titre": "Bathurst : précision obligatoire",
    "a_texte": "Bathurst : Bathurst impose de frôler les murs sur une montagne où l'erreur coûte immédiatement cher.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Pensée sportive",
    "c_texte": "Une course se gagne d'abord dans les petites décisions répétées dans le silence de l'entraînement."
  },
  "26-02": {
    "a_cat": "GT3",
    "a_titre": "Carrosserie en GT3",
    "a_texte": "Carrosserie : en GT3, une GT3 reste proche d'une silhouette de voiture de route, mais presque tout est optimisé pour la course.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "La victoire la plus solide est celle qui ne sacrifie pas l'intégrité dans les moments de pression."
  },
  "27-02": {
    "a_cat": "F1",
    "a_titre": "Pluie en Formule 1",
    "a_texte": "Pluie : Sous la pluie, la trajectoire idéale change et le toucher de pédale devient déterminant.",
    "c_theme": "Excellence",
    "c_auteur": "Pensée sportive",
    "c_texte": "Le dépassement commence là où les excuses s'arrêtent avec l'équipe."
  },
  "28-02": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Gratitude",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Chaque tour propre construit une victoire que personne ne voit encore tour après tour."
  },
  "01-03": {
    "a_cat": "GT3",
    "a_titre": "Nürburgring 24h en GT3",
    "a_texte": "Nürburgring 24h : en GT3, le Nürburgring combine GT3, météo changeante et trafic massif sur la Nordschleife.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Pensée sportive",
    "c_texte": "La foi ne supprime pas l'effort, elle donne une raison de continuer en gardant le cap."
  },
  "02-03": {
    "a_cat": "IMSA / GT America",
    "a_titre": "Daytona côté américain",
    "a_texte": "Daytona : Daytona mélange banking, trafic et relais longs, avec une tension unique jusqu'au dernier tour.",
    "c_theme": "Persévérance",
    "c_auteur": "Pensée sportive",
    "c_texte": "La gratitude garde le cœur stable quand la pression monte lorsque le doute apparaît."
  },
  "03-03": {
    "a_cat": "GT3",
    "a_titre": "ABS en GT3",
    "a_texte": "ABS : en GT3, contrairement à beaucoup de monoplaces, les GT3 utilisent l'ABS, ce qui change fortement la confiance au freinage.",
    "c_theme": "Discipline",
    "c_auteur": "Anonyme",
    "c_texte": "Avancer lentement dans la bonne direction vaut mieux que sprinter vers le mauvais virage aujourd'hui."
  },
  "04-03": {
    "a_cat": "F1",
    "a_titre": "Arrêts aux stands en Formule 1",
    "a_texte": "Arrêts aux stands : Un arrêt F1 se joue en quelques secondes, avec une chorégraphie millimétrée.",
    "c_theme": "Foi",
    "c_auteur": "Anonyme",
    "c_texte": "Celui qui reste fidèle dans l'effort progresse même quand le résultat tarde en gardant le cap."
  },
  "05-03": {
    "a_cat": "Supercars / autres GT",
    "a_titre": "Macau : précision obligatoire",
    "a_texte": "Macau : Macau demande une précision extrême entre rails, murs et freinages en descente.",
    "c_theme": "Leadership",
    "c_auteur": "Anonyme",
    "c_texte": "On ne maîtrise pas la météo, mais on peut maîtriser sa réaction avec l'équipe."
  },
  "06-03": {
    "a_cat": "GT3",
    "a_titre": "Pit stop en GT3",
    "a_texte": "Pit stop : en GT3, un arrêt propre peut faire gagner plus qu'un dépassement risqué en piste.",
    "c_theme": "Résilience",
    "c_auteur": "Pensée sportive",
    "c_texte": "L'équipe qui se fait confiance gagne du temps avant même le départ aujourd'hui."
  },
  "07-03": {
    "a_cat": "F1",
    "a_titre": "Qualifications en Formule 1",
    "a_texte": "Qualifications : La qualification récompense la précision maximale sur un seul tour.",
    "c_theme": "Humilité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le courage n'est pas l'absence de peur, c'est la décision d'avancer malgré elle dans les moments de pression."
  },
  "08-03": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Courage",
    "c_auteur": "Pensée sportive",
    "c_texte": "Un bon leader ne prend pas toute la lumière ; il aide l'équipe à mieux voir avec humilité."
  },
  "09-03": {
    "a_cat": "GT3",
    "a_titre": "Réglages en GT3",
    "a_texte": "Réglages : en GT3, un petit changement d'aileron ou de pression peut transformer l'équilibre d'une GT3.",
    "c_theme": "Espérance",
    "c_auteur": "Anonyme",
    "c_texte": "La sagesse sait quand attaquer et quand préserver tour après tour."
  },
  "10-03": {
    "a_cat": "IMSA / GT America",
    "a_titre": "Road America côté américain",
    "a_texte": "Road America : Les circuits américains récompensent souvent le courage au freinage et les sorties de virage solides.",
    "c_theme": "Intégrité",
    "c_auteur": "Anonyme",
    "c_texte": "Quand la fatigue parle fort, la discipline doit parler plus juste jusqu'à la ligne d'arrivée."
  },
  "11-03": {
    "a_cat": "GT3",
    "a_titre": "Nuit en GT3",
    "a_texte": "Nuit : en GT3, la nuit révèle les équipages les plus constants : visibilité réduite, fatigue et trafic permanent.",
    "c_theme": "Sagesse",
    "c_auteur": "Anonyme",
    "c_texte": "Ne cherche pas seulement à aller vite ; cherche à devenir fiable avec humilité."
  },
  "12-03": {
    "a_cat": "F1",
    "a_titre": "Monoplaces en Formule 1",
    "a_texte": "Monoplaces : La F1 cherche la performance absolue sur un tour comme sur une distance de Grand Prix.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Anonyme",
    "c_texte": "Le calme dans le chaos est souvent la meilleure trajectoire dans le silence de l'entraînement."
  },
  "13-03": {
    "a_cat": "Supercars / autres GT",
    "a_titre": "Supercars : précision obligatoire",
    "a_texte": "Supercars : Les Supercars australiennes sont réputées pour leurs duels musclés et leur pilotage agressif.",
    "c_theme": "Patience",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le travail invisible finit toujours par apparaître au chronomètre dans les moments de pression."
  },
  "14-03": {
    "a_cat": "GT3",
    "a_titre": "Fiabilité en GT3",
    "a_texte": "Fiabilité : en GT3, une GT3 doit rester rapide tout en supportant des heures de vibreurs, de chaleur et de freinages violents.",
    "c_theme": "Excellence",
    "c_auteur": "Anonyme",
    "c_texte": "Une course se gagne d'abord dans les petites décisions répétées avec l'équipe."
  },
  "15-03": {
    "a_cat": "F1",
    "a_titre": "Pneus F1 en Formule 1",
    "a_texte": "Pneus F1 : La fenêtre de température des pneus peut décider du rythme d'une voiture.",
    "c_theme": "Gratitude",
    "c_auteur": "Anonyme",
    "c_texte": "La victoire la plus solide est celle qui ne sacrifie pas l'intégrité tour après tour."
  },
  "16-03": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Anonyme",
    "c_texte": "L'humilité apprend plus vite que l'orgueil en gardant le cap."
  },
  "17-03": {
    "a_cat": "GT3",
    "a_titre": "Drapeaux jaunes en GT3",
    "a_texte": "Drapeaux jaunes : en GT3, un Full Course Yellow peut détruire ou sauver une stratégie d'endurance.",
    "c_theme": "Persévérance",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Chaque tour propre construit une victoire que personne ne voit encore lorsque le doute apparaît."
  },
  "18-03": {
    "a_cat": "IMSA / GT America",
    "a_titre": "Sebring côté américain",
    "a_texte": "Sebring : Sebring est célèbre pour ses bosses qui mettent les voitures à rude épreuve.",
    "c_theme": "Discipline",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La foi ne supprime pas l'effort, elle donne une raison de continuer aujourd'hui."
  },
  "19-03": {
    "a_cat": "GT3",
    "a_titre": "Cockpit en GT3",
    "a_texte": "Cockpit : en GT3, dans le cockpit, boutons, ABS, TC et radio deviennent des réflexes aussi importants que le volant.",
    "c_theme": "Foi",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Un relais difficile peut préparer une arrivée victorieuse en gardant le cap."
  },
  "20-03": {
    "a_cat": "F1",
    "a_titre": "Safety Car en Formule 1",
    "a_texte": "Safety Car : Une Safety Car peut renverser une course en regroupant tout le peloton.",
    "c_theme": "Leadership",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Avancer lentement dans la bonne direction vaut mieux que sprinter vers le mauvais virage avec l'équipe."
  },
  "21-03": {
    "a_cat": "Supercars / autres GT",
    "a_titre": "Course de côte : précision obligatoire",
    "a_texte": "Course de côte : Une course de côte récompense l'engagement pur : une seule montée, aucune marge.",
    "c_theme": "Résilience",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Celui qui reste fidèle dans l'effort progresse même quand le résultat tarde aujourd'hui."
  },
  "22-03": {
    "a_cat": "GT3",
    "a_titre": "Balance of Performance en GT3",
    "a_texte": "Balance of Performance : en GT3, la BoP ajuste le poids, la puissance ou la hauteur de caisse pour rapprocher les performances de voitures très différentes.",
    "c_theme": "Humilité",
    "c_auteur": "Anonyme",
    "c_texte": "Le talent ouvre une porte, mais le caractère décide si tu restes dans la pièce dans les moments de pression."
  },
  "23-03": {
    "a_cat": "F1",
    "a_titre": "DRS en Formule 1",
    "a_texte": "DRS : Le DRS réduit la traînée sur certaines zones pour aider les dépassements, mais il ne remplace pas le talent au freinage.",
    "c_theme": "Courage",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "L'équipe qui se fait confiance gagne du temps avant même le départ avec humilité."
  },
  "24-03": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Espérance",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le courage n'est pas l'absence de peur, c'est la décision d'avancer malgré elle tour après tour."
  },
  "25-03": {
    "a_cat": "GT3",
    "a_titre": "Relais pilotes en GT3",
    "a_texte": "Relais pilotes : en GT3, en endurance GT, la régularité des relais compte souvent plus qu'un seul tour spectaculaire.",
    "c_theme": "Intégrité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La patience transforme les obstacles en apprentissage jusqu'à la ligne d'arrivée."
  },
  "26-03": {
    "a_cat": "IMSA / GT America",
    "a_titre": "Petit Le Mans côté américain",
    "a_texte": "Petit Le Mans : Petit Le Mans concentre l'esprit endurance sur un format plus court mais très intense.",
    "c_theme": "Sagesse",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La sagesse sait quand attaquer et quand préserver avec humilité."
  },
  "27-03": {
    "a_cat": "GT3",
    "a_titre": "Pneus en GT3",
    "a_texte": "Pneus : en GT3, la gestion des pneus transforme une voiture rapide en début de relais en vraie candidate à la victoire.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Quand la fatigue parle fort, la discipline doit parler plus juste dans le silence de l'entraînement."
  },
  "28-03": {
    "a_cat": "F1",
    "a_titre": "Gestion énergie en Formule 1",
    "a_texte": "Gestion énergie : Les groupes propulseurs hybrides ont rendu la gestion d'énergie aussi stratégique que la vitesse pure.",
    "c_theme": "Patience",
    "c_auteur": "Anonyme",
    "c_texte": "Le vrai champion respecte la piste, l'équipe et l'adversaire dans les moments de pression."
  },
  "29-03": {
    "a_cat": "Supercars / autres GT",
    "a_titre": "Nürburgring : précision obligatoire",
    "a_texte": "Nürburgring : La Nordschleife reste l'un des plus grands examens pour une GT et son pilote.",
    "c_theme": "Excellence",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le calme dans le chaos est souvent la meilleure trajectoire avec l'équipe."
  },
  "30-03": {
    "a_cat": "GT3",
    "a_titre": "Freinage en GT3",
    "a_texte": "Freinage : en GT3, le freinage en GT3 est un mélange de puissance, d'endurance mécanique et de précision du pilote.",
    "c_theme": "Gratitude",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le travail invisible finit toujours par apparaître au chronomètre tour après tour."
  },
  "31-03": {
    "a_cat": "F1",
    "a_titre": "Développement en Formule 1",
    "a_texte": "Développement : La bataille se gagne aussi en usine, avec des évolutions parfois invisibles au premier regard.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La discipline commence quand l'envie s'arrête en gardant le cap."
  },
  "01-04": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Persévérance",
    "c_auteur": "Anonyme",
    "c_texte": "La victoire la plus solide est celle qui ne sacrifie pas l'intégrité lorsque le doute apparaît."
  },
  "02-04": {
    "a_cat": "GT3",
    "a_titre": "Aéro en GT3",
    "a_texte": "Aéro : en GT3, les GT3 gardent une aérodynamique efficace, mais moins extrême que les prototypes.",
    "c_theme": "Discipline",
    "c_auteur": "Pensée sportive",
    "c_texte": "L'humilité apprend plus vite que l'orgueil aujourd'hui."
  },
  "03-04": {
    "a_cat": "IMSA / GT America",
    "a_titre": "IMSA côté américain",
    "a_texte": "IMSA : L'IMSA mélange prototypes et GT dans un style très spectaculaire.",
    "c_theme": "Foi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Rester droit dans la pression vaut plus qu'une victoire obtenue de travers en gardant le cap."
  },
  "04-04": {
    "a_cat": "GT3",
    "a_titre": "Radio en GT3",
    "a_texte": "Radio : en GT3, les échanges radio aident à gérer trafic, météo et stratégie, mais le pilote doit décider en une fraction de seconde.",
    "c_theme": "Leadership",
    "c_auteur": "Pensée sportive",
    "c_texte": "La foi ne supprime pas l'effort, elle donne une raison de continuer avec l'équipe."
  },
  "05-04": {
    "a_cat": "F1",
    "a_titre": "Aéro F1 en Formule 1",
    "a_texte": "Aéro F1 : L'aérodynamique d'une F1 conditionne la vitesse en virage et la sensibilité dans le trafic.",
    "c_theme": "Résilience",
    "c_auteur": "Anonyme",
    "c_texte": "Un relais difficile peut préparer une arrivée victorieuse aujourd'hui."
  },
  "06-04": {
    "a_cat": "Supercars / autres GT",
    "a_titre": "Bathurst : précision obligatoire",
    "a_texte": "Bathurst : Bathurst impose de frôler les murs sur une montagne où l'erreur coûte immédiatement cher.",
    "c_theme": "Humilité",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Chaque erreur corrigée devient une pièce de la prochaine réussite dans les moments de pression."
  },
  "07-04": {
    "a_cat": "GT3",
    "a_titre": "Carrosserie en GT3",
    "a_texte": "Carrosserie : en GT3, une GT3 reste proche d'une silhouette de voiture de route, mais presque tout est optimisé pour la course.",
    "c_theme": "Courage",
    "c_auteur": "Anonyme",
    "c_texte": "Celui qui reste fidèle dans l'effort progresse même quand le résultat tarde avec humilité."
  },
  "08-04": {
    "a_cat": "F1",
    "a_titre": "Pluie en Formule 1",
    "a_texte": "Pluie : Sous la pluie, la trajectoire idéale change et le toucher de pédale devient déterminant.",
    "c_theme": "Espérance",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le talent ouvre une porte, mais le caractère décide si tu restes dans la pièce tour après tour."
  },
  "09-04": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Intégrité",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le dépassement commence là où les excuses s'arrêtent jusqu'à la ligne d'arrivée."
  },
  "10-04": {
    "a_cat": "GT3",
    "a_titre": "Nürburgring 24h en GT3",
    "a_texte": "Nürburgring 24h : en GT3, le Nürburgring combine GT3, météo changeante et trafic massif sur la Nordschleife.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le courage n'est pas l'absence de peur, c'est la décision d'avancer malgré elle avec humilité."
  },
  "11-04": {
    "a_cat": "IMSA / GT America",
    "a_titre": "Daytona côté américain",
    "a_texte": "Daytona : Daytona mélange banking, trafic et relais longs, avec une tension unique jusqu'au dernier tour.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Pensée sportive",
    "c_texte": "La patience transforme les obstacles en apprentissage dans le silence de l'entraînement, même quand le chrono ne récompense pas encore l'effort."
  },
  "12-04": {
    "a_cat": "GT3",
    "a_titre": "ABS en GT3",
    "a_texte": "ABS : en GT3, contrairement à beaucoup de monoplaces, les GT3 utilisent l'ABS, ce qui change fortement la confiance au freinage.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "La gratitude garde le cœur stable quand la pression monte dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "13-04": {
    "a_cat": "F1",
    "a_titre": "Arrêts aux stands en Formule 1",
    "a_texte": "Arrêts aux stands : Un arrêt F1 se joue en quelques secondes, avec une chorégraphie millimétrée.",
    "c_theme": "Excellence",
    "c_auteur": "Pensée sportive",
    "c_texte": "Quand la fatigue parle fort, la discipline doit parler plus juste avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "14-04": {
    "a_cat": "Supercars / autres GT",
    "a_titre": "Macau : précision obligatoire",
    "a_texte": "Macau : Macau demande une précision extrême entre rails, murs et freinages en descente.",
    "c_theme": "Gratitude",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le vrai champion respecte la piste, l'équipe et l'adversaire tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "15-04": {
    "a_cat": "GT3",
    "a_titre": "Pit stop en GT3",
    "a_texte": "Pit stop : en GT3, un arrêt propre peut faire gagner plus qu'un dépassement risqué en piste.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Pensée sportive",
    "c_texte": "On ne maîtrise pas la météo, mais on peut maîtriser sa réaction en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "16-04": {
    "a_cat": "F1",
    "a_titre": "Qualifications en Formule 1",
    "a_texte": "Qualifications : La qualification récompense la précision maximale sur un seul tour.",
    "c_theme": "Persévérance",
    "c_auteur": "Pensée sportive",
    "c_texte": "Le travail invisible finit toujours par apparaître au chronomètre lorsque le doute apparaît, même quand le chrono ne récompense pas encore l'effort."
  },
  "17-04": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Discipline",
    "c_auteur": "Anonyme",
    "c_texte": "La discipline commence quand l'envie s'arrête aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "18-04": {
    "a_cat": "GT3",
    "a_titre": "Réglages en GT3",
    "a_texte": "Réglages : en GT3, un petit changement d'aileron ou de pression peut transformer l'équilibre d'une GT3.",
    "c_theme": "Foi",
    "c_auteur": "Anonyme",
    "c_texte": "Un bon leader ne prend pas toute la lumière ; il aide l'équipe à mieux voir en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "19-04": {
    "a_cat": "IMSA / GT America",
    "a_titre": "Road America côté américain",
    "a_texte": "Road America : Les circuits américains récompensent souvent le courage au freinage et les sorties de virage solides.",
    "c_theme": "Leadership",
    "c_auteur": "Anonyme",
    "c_texte": "L'humilité apprend plus vite que l'orgueil avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "20-04": {
    "a_cat": "GT3",
    "a_titre": "Nuit en GT3",
    "a_texte": "Nuit : en GT3, la nuit révèle les équipages les plus constants : visibilité réduite, fatigue et trafic permanent.",
    "c_theme": "Résilience",
    "c_auteur": "Pensée sportive",
    "c_texte": "Rester droit dans la pression vaut plus qu'une victoire obtenue de travers aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "21-04": {
    "a_cat": "F1",
    "a_titre": "Monoplaces en Formule 1",
    "a_texte": "Monoplaces : La F1 cherche la performance absolue sur un tour comme sur une distance de Grand Prix.",
    "c_theme": "Humilité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Ne cherche pas seulement à aller vite ; cherche à devenir fiable dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "22-04": {
    "a_cat": "Supercars / autres GT",
    "a_titre": "Supercars : précision obligatoire",
    "a_texte": "Supercars : Les Supercars australiennes sont réputées pour leurs duels musclés et leur pilotage agressif.",
    "c_theme": "Courage",
    "c_auteur": "Pensée sportive",
    "c_texte": "Un relais difficile peut préparer une arrivée victorieuse avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "23-04": {
    "a_cat": "GT3",
    "a_titre": "Fiabilité en GT3",
    "a_texte": "Fiabilité : en GT3, une GT3 doit rester rapide tout en supportant des heures de vibreurs, de chaleur et de freinages violents.",
    "c_theme": "Espérance",
    "c_auteur": "Anonyme",
    "c_texte": "Chaque erreur corrigée devient une pièce de la prochaine réussite tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "24-04": {
    "a_cat": "F1",
    "a_titre": "Pneus F1 en Formule 1",
    "a_texte": "Pneus F1 : La fenêtre de température des pneus peut décider du rythme d'une voiture.",
    "c_theme": "Intégrité",
    "c_auteur": "Anonyme",
    "c_texte": "Une course se gagne d'abord dans les petites décisions répétées jusqu'à la ligne d'arrivée, même quand le chrono ne récompense pas encore l'effort."
  },
  "25-04": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Sagesse",
    "c_auteur": "Anonyme",
    "c_texte": "Le talent ouvre une porte, mais le caractère décide si tu restes dans la pièce avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "26-04": {
    "a_cat": "GT3",
    "a_titre": "Drapeaux jaunes en GT3",
    "a_texte": "Drapeaux jaunes : en GT3, un Full Course Yellow peut détruire ou sauver une stratégie d'endurance.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Anonyme",
    "c_texte": "Le dépassement commence là où les excuses s'arrêtent dans le silence de l'entraînement, même quand le chrono ne récompense pas encore l'effort."
  },
  "27-04": {
    "a_cat": "IMSA / GT America",
    "a_titre": "Sebring côté américain",
    "a_texte": "Sebring : Sebring est célèbre pour ses bosses qui mettent les voitures à rude épreuve.",
    "c_theme": "Patience",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Chaque tour propre construit une victoire que personne ne voit encore dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "28-04": {
    "a_cat": "GT3",
    "a_titre": "Cockpit en GT3",
    "a_texte": "Cockpit : en GT3, dans le cockpit, boutons, ABS, TC et radio deviennent des réflexes aussi importants que le volant.",
    "c_theme": "Excellence",
    "c_auteur": "Anonyme",
    "c_texte": "La patience transforme les obstacles en apprentissage avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "29-04": {
    "a_cat": "F1",
    "a_titre": "Safety Car en Formule 1",
    "a_texte": "Safety Car : Une Safety Car peut renverser une course en regroupant tout le peloton.",
    "c_theme": "Gratitude",
    "c_auteur": "Anonyme",
    "c_texte": "La gratitude garde le cœur stable quand la pression monte tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "30-04": {
    "a_cat": "Supercars / autres GT",
    "a_titre": "Course de côte : précision obligatoire",
    "a_texte": "Course de côte : Une course de côte récompense l'engagement pur : une seule montée, aucune marge.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Anonyme",
    "c_texte": "Avancer lentement dans la bonne direction vaut mieux que sprinter vers le mauvais virage en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "01-05": {
    "a_cat": "GT3",
    "a_titre": "Balance of Performance en GT3",
    "a_texte": "Balance of Performance : en GT3, la BoP ajuste le poids, la puissance ou la hauteur de caisse pour rapprocher les performances de voitures très différentes.",
    "c_theme": "Persévérance",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le vrai champion respecte la piste, l'équipe et l'adversaire lorsque le doute apparaît, même quand le chrono ne récompense pas encore l'effort."
  },
  "02-05": {
    "a_cat": "F1",
    "a_titre": "DRS en Formule 1",
    "a_texte": "DRS : Le DRS réduit la traînée sur certaines zones pour aider les dépassements, mais il ne remplace pas le talent au freinage.",
    "c_theme": "Discipline",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "On ne maîtrise pas la météo, mais on peut maîtriser sa réaction aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "03-05": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Foi",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "L'équipe qui se fait confiance gagne du temps avant même le départ en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "04-05": {
    "a_cat": "GT3",
    "a_titre": "Relais pilotes en GT3",
    "a_texte": "Relais pilotes : en GT3, en endurance GT, la régularité des relais compte souvent plus qu'un seul tour spectaculaire.",
    "c_theme": "Leadership",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "La discipline commence quand l'envie s'arrête avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "05-05": {
    "a_cat": "IMSA / GT America",
    "a_titre": "Petit Le Mans côté américain",
    "a_texte": "Petit Le Mans : Petit Le Mans concentre l'esprit endurance sur un format plus court mais très intense.",
    "c_theme": "Résilience",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Un bon leader ne prend pas toute la lumière ; il aide l'équipe à mieux voir aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "06-05": {
    "a_cat": "GT3",
    "a_titre": "Pneus en GT3",
    "a_texte": "Pneus : en GT3, la gestion des pneus transforme une voiture rapide en début de relais en vraie candidate à la victoire.",
    "c_theme": "Humilité",
    "c_auteur": "Anonyme",
    "c_texte": "La sagesse sait quand attaquer et quand préserver dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "07-05": {
    "a_cat": "F1",
    "a_titre": "Gestion énergie en Formule 1",
    "a_texte": "Gestion énergie : Les groupes propulseurs hybrides ont rendu la gestion d'énergie aussi stratégique que la vitesse pure.",
    "c_theme": "Courage",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Rester droit dans la pression vaut plus qu'une victoire obtenue de travers avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "08-05": {
    "a_cat": "Supercars / autres GT",
    "a_titre": "Nürburgring : précision obligatoire",
    "a_texte": "Nürburgring : La Nordschleife reste l'un des plus grands examens pour une GT et son pilote.",
    "c_theme": "Espérance",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Ne cherche pas seulement à aller vite ; cherche à devenir fiable tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "09-05": {
    "a_cat": "GT3",
    "a_titre": "Freinage en GT3",
    "a_texte": "Freinage : en GT3, le freinage en GT3 est un mélange de puissance, d'endurance mécanique et de précision du pilote.",
    "c_theme": "Intégrité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le calme dans le chaos est souvent la meilleure trajectoire jusqu'à la ligne d'arrivée, même quand le chrono ne récompense pas encore l'effort."
  },
  "10-05": {
    "a_cat": "F1",
    "a_titre": "Développement en Formule 1",
    "a_texte": "Développement : La bataille se gagne aussi en usine, avec des évolutions parfois invisibles au premier regard.",
    "c_theme": "Sagesse",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Chaque erreur corrigée devient une pièce de la prochaine réussite avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "11-05": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Une course se gagne d'abord dans les petites décisions répétées dans le silence de l'entraînement, même quand le chrono ne récompense pas encore l'effort."
  },
  "12-05": {
    "a_cat": "GT3",
    "a_titre": "Aéro en GT3",
    "a_texte": "Aéro : en GT3, les GT3 gardent une aérodynamique efficace, mais moins extrême que les prototypes.",
    "c_theme": "Patience",
    "c_auteur": "Anonyme",
    "c_texte": "La victoire la plus solide est celle qui ne sacrifie pas l'intégrité dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "13-05": {
    "a_cat": "IMSA / GT America",
    "a_titre": "IMSA côté américain",
    "a_texte": "IMSA : L'IMSA mélange prototypes et GT dans un style très spectaculaire.",
    "c_theme": "Excellence",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le dépassement commence là où les excuses s'arrêtent avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "14-05": {
    "a_cat": "GT3",
    "a_titre": "Radio en GT3",
    "a_texte": "Radio : en GT3, les échanges radio aident à gérer trafic, météo et stratégie, mais le pilote doit décider en une fraction de seconde.",
    "c_theme": "Gratitude",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Chaque tour propre construit une victoire que personne ne voit encore tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "15-05": {
    "a_cat": "F1",
    "a_titre": "Aéro F1 en Formule 1",
    "a_texte": "Aéro F1 : L'aérodynamique d'une F1 conditionne la vitesse en virage et la sensibilité dans le trafic.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La foi ne supprime pas l'effort, elle donne une raison de continuer en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "16-05": {
    "a_cat": "Supercars / autres GT",
    "a_titre": "Bathurst : précision obligatoire",
    "a_texte": "Bathurst : Bathurst impose de frôler les murs sur une montagne où l'erreur coûte immédiatement cher.",
    "c_theme": "Persévérance",
    "c_auteur": "Anonyme",
    "c_texte": "La gratitude garde le cœur stable quand la pression monte lorsque le doute apparaît, même quand le chrono ne récompense pas encore l'effort."
  },
  "17-05": {
    "a_cat": "GT3",
    "a_titre": "Carrosserie en GT3",
    "a_texte": "Carrosserie : en GT3, une GT3 reste proche d'une silhouette de voiture de route, mais presque tout est optimisé pour la course.",
    "c_theme": "Discipline",
    "c_auteur": "Pensée sportive",
    "c_texte": "Avancer lentement dans la bonne direction vaut mieux que sprinter vers le mauvais virage aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "18-05": {
    "a_cat": "F1",
    "a_titre": "Pluie en Formule 1",
    "a_texte": "Pluie : Sous la pluie, la trajectoire idéale change et le toucher de pédale devient déterminant.",
    "c_theme": "Foi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Celui qui reste fidèle dans l'effort progresse même quand le résultat tarde en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "19-05": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Leadership",
    "c_auteur": "Pensée sportive",
    "c_texte": "On ne maîtrise pas la météo, mais on peut maîtriser sa réaction avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "20-05": {
    "a_cat": "GT3",
    "a_titre": "Nürburgring 24h en GT3",
    "a_texte": "Nürburgring 24h : en GT3, le Nürburgring combine GT3, météo changeante et trafic massif sur la Nordschleife.",
    "c_theme": "Résilience",
    "c_auteur": "Anonyme",
    "c_texte": "L'équipe qui se fait confiance gagne du temps avant même le départ aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "21-05": {
    "a_cat": "IMSA / GT America",
    "a_titre": "Daytona côté américain",
    "a_texte": "Daytona : Daytona mélange banking, trafic et relais longs, avec une tension unique jusqu'au dernier tour.",
    "c_theme": "Humilité",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le courage n'est pas l'absence de peur, c'est la décision d'avancer malgré elle dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "22-05": {
    "a_cat": "GT3",
    "a_titre": "ABS en GT3",
    "a_texte": "ABS : en GT3, contrairement à beaucoup de monoplaces, les GT3 utilisent l'ABS, ce qui change fortement la confiance au freinage.",
    "c_theme": "Courage",
    "c_auteur": "Anonyme",
    "c_texte": "Un bon leader ne prend pas toute la lumière ; il aide l'équipe à mieux voir avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "23-05": {
    "a_cat": "F1",
    "a_titre": "Arrêts aux stands en Formule 1",
    "a_texte": "Arrêts aux stands : Un arrêt F1 se joue en quelques secondes, avec une chorégraphie millimétrée.",
    "c_theme": "Espérance",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La sagesse sait quand attaquer et quand préserver tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "24-05": {
    "a_cat": "Supercars / autres GT",
    "a_titre": "Macau : précision obligatoire",
    "a_texte": "Macau : Macau demande une précision extrême entre rails, murs et freinages en descente.",
    "c_theme": "Intégrité",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Quand la fatigue parle fort, la discipline doit parler plus juste jusqu'à la ligne d'arrivée, même quand le chrono ne récompense pas encore l'effort."
  },
  "25-05": {
    "a_cat": "GT3",
    "a_titre": "Pit stop en GT3",
    "a_texte": "Pit stop : en GT3, un arrêt propre peut faire gagner plus qu'un dépassement risqué en piste.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Ne cherche pas seulement à aller vite ; cherche à devenir fiable avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "26-05": {
    "a_cat": "F1",
    "a_titre": "Qualifications en Formule 1",
    "a_texte": "Qualifications : La qualification récompense la précision maximale sur un seul tour.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Pensée sportive",
    "c_texte": "Le calme dans le chaos est souvent la meilleure trajectoire dans le silence de l'entraînement, même quand le chrono ne récompense pas encore l'effort."
  },
  "27-05": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le travail invisible finit toujours par apparaître au chronomètre dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "28-05": {
    "a_cat": "GT3",
    "a_titre": "Réglages en GT3",
    "a_texte": "Réglages : en GT3, un petit changement d'aileron ou de pression peut transformer l'équilibre d'une GT3.",
    "c_theme": "Excellence",
    "c_auteur": "Pensée sportive",
    "c_texte": "Une course se gagne d'abord dans les petites décisions répétées avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "29-05": {
    "a_cat": "GT3",
    "a_titre": "Freinage en GT3",
    "a_texte": "Freinage : en GT3, le freinage en GT3 est un mélange de puissance, d'endurance mécanique et de précision du pilote.",
    "c_theme": "Gratitude",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La victoire la plus solide est celle qui ne sacrifie pas l'intégrité tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "30-05": {
    "a_cat": "F1",
    "a_titre": "Développement en Formule 1",
    "a_texte": "Développement : La bataille se gagne aussi en usine, avec des évolutions parfois invisibles au premier regard.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Pensée sportive",
    "c_texte": "L'humilité apprend plus vite que l'orgueil en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "31-05": {
    "a_cat": "GT3",
    "a_titre": "Amateurs et pros en GT3",
    "a_texte": "Amateurs et pros : en GT3, le GT3 mélange souvent pilotes professionnels et gentlemen drivers, ce qui rend la stratégie unique.",
    "c_theme": "Persévérance",
    "c_auteur": "Pensée sportive",
    "c_texte": "Chaque tour propre construit une victoire que personne ne voit encore lorsque le doute apparaît, même quand le chrono ne récompense pas encore l'effort."
  },
  "01-06": {
    "a_cat": "F1",
    "a_titre": "DRS en Formule 1",
    "a_texte": "DRS : Le DRS réduit la traînée sur certaines zones pour aider les dépassements, mais il ne remplace pas le talent au freinage.",
    "c_theme": "Discipline",
    "c_auteur": "Anonyme",
    "c_texte": "La foi ne supprime pas l'effort, elle donne une raison de continuer aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "02-06": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Le Mans : l'école de la patience",
    "a_texte": "Le Mans : Aux 24 Heures du Mans, gagner demande vitesse, fiabilité, stratégie et résistance mentale.",
    "c_theme": "Foi",
    "c_auteur": "Anonyme",
    "c_texte": "Un relais difficile peut préparer une arrivée victorieuse en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "03-06": {
    "a_cat": "GT3",
    "a_titre": "Radio en GT3",
    "a_texte": "Radio : en GT3, les échanges radio aident à gérer trafic, météo et stratégie, mais le pilote doit décider en une fraction de seconde.",
    "c_theme": "Leadership",
    "c_auteur": "Anonyme",
    "c_texte": "Avancer lentement dans la bonne direction vaut mieux que sprinter vers le mauvais virage avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "04-06": {
    "a_cat": "GT3",
    "a_titre": "Départ lancé en GT3",
    "a_texte": "Départ lancé : en GT3, le départ lancé en GT demande sang-froid et placement, car le peloton est lourd et très compact.",
    "c_theme": "Résilience",
    "c_auteur": "Pensée sportive",
    "c_texte": "Celui qui reste fidèle dans l'effort progresse même quand le résultat tarde aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "05-06": {
    "a_cat": "F1",
    "a_titre": "Qualifications en Formule 1",
    "a_texte": "Qualifications : La qualification récompense la précision maximale sur un seul tour.",
    "c_theme": "Humilité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le talent ouvre une porte, mais le caractère décide si tu restes dans la pièce dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "06-06": {
    "a_cat": "GT3",
    "a_titre": "Carrosserie en GT3",
    "a_texte": "Carrosserie : en GT3, une GT3 reste proche d'une silhouette de voiture de route, mais presque tout est optimisé pour la course.",
    "c_theme": "Courage",
    "c_auteur": "Pensée sportive",
    "c_texte": "L'équipe qui se fait confiance gagne du temps avant même le départ avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "07-06": {
    "a_cat": "F1",
    "a_titre": "Pluie en Formule 1",
    "a_texte": "Pluie : Sous la pluie, la trajectoire idéale change et le toucher de pédale devient déterminant.",
    "c_theme": "Espérance",
    "c_auteur": "Anonyme",
    "c_texte": "Le courage n'est pas l'absence de peur, c'est la décision d'avancer malgré elle tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "08-06": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Fiabilité : l'école de la patience",
    "a_texte": "Fiabilité : La voiture la plus rapide ne gagne rien si elle ne voit pas l'arrivée.",
    "c_theme": "Intégrité",
    "c_auteur": "Anonyme",
    "c_texte": "La patience transforme les obstacles en apprentissage jusqu'à la ligne d'arrivée, même quand le chrono ne récompense pas encore l'effort."
  },
  "09-06": {
    "a_cat": "GT3",
    "a_titre": "Nürburgring 24h en GT3",
    "a_texte": "Nürburgring 24h : en GT3, le Nürburgring combine GT3, météo changeante et trafic massif sur la Nordschleife.",
    "c_theme": "Sagesse",
    "c_auteur": "Anonyme",
    "c_texte": "La sagesse sait quand attaquer et quand préserver avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "10-06": {
    "a_cat": "GT3",
    "a_titre": "Balance of Performance en GT3",
    "a_texte": "Balance of Performance : en GT3, la BoP ajuste le poids, la puissance ou la hauteur de caisse pour rapprocher les performances de voitures très différentes.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Anonyme",
    "c_texte": "Quand la fatigue parle fort, la discipline doit parler plus juste dans le silence de l'entraînement, même quand le chrono ne récompense pas encore l'effort."
  },
  "11-06": {
    "a_cat": "F1",
    "a_titre": "DRS en Formule 1",
    "a_texte": "DRS : Le DRS réduit la traînée sur certaines zones pour aider les dépassements, mais il ne remplace pas le talent au freinage.",
    "c_theme": "Patience",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le vrai champion respecte la piste, l'équipe et l'adversaire dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "12-06": {
    "a_cat": "GT3",
    "a_titre": "Contrôle de traction en GT3",
    "a_texte": "Contrôle de traction : en GT3, le contrôle de traction aide à gérer la motricité, surtout lorsque les pneus arrière commencent à souffrir.",
    "c_theme": "Excellence",
    "c_auteur": "Anonyme",
    "c_texte": "Le calme dans le chaos est souvent la meilleure trajectoire avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "13-06": {
    "a_cat": "F1",
    "a_titre": "Pneus F1 en Formule 1",
    "a_texte": "Pneus F1 : La fenêtre de température des pneus peut décider du rythme d'une voiture.",
    "c_theme": "Gratitude",
    "c_auteur": "Anonyme",
    "c_texte": "Le travail invisible finit toujours par apparaître au chronomètre tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "14-06": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Prototypes et GT : l'école de la patience",
    "a_texte": "Prototypes et GT : Le mélange prototypes/GT crée un trafic permanent et des décisions en continu.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Anonyme",
    "c_texte": "La discipline commence quand l'envie s'arrête en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "15-06": {
    "a_cat": "GT3",
    "a_titre": "Pneus en GT3",
    "a_texte": "Pneus : en GT3, la gestion des pneus transforme une voiture rapide en début de relais en vraie candidate à la victoire.",
    "c_theme": "Persévérance",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "La victoire la plus solide est celle qui ne sacrifie pas l'intégrité lorsque le doute apparaît, même quand le chrono ne récompense pas encore l'effort."
  },
  "16-06": {
    "a_cat": "GT3",
    "a_titre": "Trafic en GT3",
    "a_texte": "Trafic : en GT3, les pilotes GT doivent dépasser sans perdre de rythme tout en protégeant leurs pneus et leur carrosserie.",
    "c_theme": "Discipline",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "L'humilité apprend plus vite que l'orgueil aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "17-06": {
    "a_cat": "F1",
    "a_titre": "Pluie en Formule 1",
    "a_texte": "Pluie : Sous la pluie, la trajectoire idéale change et le toucher de pédale devient déterminant.",
    "c_theme": "Foi",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Rester droit dans la pression vaut plus qu'une victoire obtenue de travers en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "18-06": {
    "a_cat": "GT3",
    "a_titre": "Freinage en GT3",
    "a_texte": "Freinage : en GT3, le freinage en GT3 est un mélange de puissance, d'endurance mécanique et de précision du pilote.",
    "c_theme": "Leadership",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "La foi ne supprime pas l'effort, elle donne une raison de continuer avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "19-06": {
    "a_cat": "F1",
    "a_titre": "Développement en Formule 1",
    "a_texte": "Développement : La bataille se gagne aussi en usine, avec des évolutions parfois invisibles au premier regard.",
    "c_theme": "Résilience",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Un relais difficile peut préparer une arrivée victorieuse aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "20-06": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Humilité",
    "c_auteur": "Anonyme",
    "c_texte": "Chaque erreur corrigée devient une pièce de la prochaine réussite dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "21-06": {
    "a_cat": "GT3",
    "a_titre": "Aéro en GT3",
    "a_texte": "Aéro : en GT3, les GT3 gardent une aérodynamique efficace, mais moins extrême que les prototypes.",
    "c_theme": "Courage",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Celui qui reste fidèle dans l'effort progresse même quand le résultat tarde avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "22-06": {
    "a_cat": "GT3",
    "a_titre": "Fiabilité en GT3",
    "a_texte": "Fiabilité : en GT3, une GT3 doit rester rapide tout en supportant des heures de vibreurs, de chaleur et de freinages violents.",
    "c_theme": "Espérance",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le talent ouvre une porte, mais le caractère décide si tu restes dans la pièce tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "23-06": {
    "a_cat": "F1",
    "a_titre": "Pneus F1 en Formule 1",
    "a_texte": "Pneus F1 : La fenêtre de température des pneus peut décider du rythme d'une voiture.",
    "c_theme": "Intégrité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le dépassement commence là où les excuses s'arrêtent jusqu'à la ligne d'arrivée, même quand le chrono ne récompense pas encore l'effort."
  },
  "24-06": {
    "a_cat": "GT3",
    "a_titre": "Départ lancé en GT3",
    "a_texte": "Départ lancé : en GT3, le départ lancé en GT demande sang-froid et placement, car le peloton est lourd et très compact.",
    "c_theme": "Sagesse",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le courage n'est pas l'absence de peur, c'est la décision d'avancer malgré elle avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "25-06": {
    "a_cat": "F1",
    "a_titre": "Qualifications en Formule 1",
    "a_texte": "Qualifications : La qualification récompense la précision maximale sur un seul tour.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "La patience transforme les obstacles en apprentissage dans le silence de l'entraînement, même quand le chrono ne récompense pas encore l'effort."
  },
  "26-06": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Le Mans : l'école de la patience",
    "a_texte": "Le Mans : Aux 24 Heures du Mans, gagner demande vitesse, fiabilité, stratégie et résistance mentale.",
    "c_theme": "Patience",
    "c_auteur": "Anonyme",
    "c_texte": "La gratitude garde le cœur stable quand la pression monte dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "27-06": {
    "a_cat": "GT3",
    "a_titre": "Cockpit en GT3",
    "a_texte": "Cockpit : en GT3, dans le cockpit, boutons, ABS, TC et radio deviennent des réflexes aussi importants que le volant.",
    "c_theme": "Excellence",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Quand la fatigue parle fort, la discipline doit parler plus juste avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "28-06": {
    "a_cat": "GT3",
    "a_titre": "Spa 24h en GT3",
    "a_texte": "Spa 24h : en GT3, les 24 Heures de Spa sont l'un des monuments du GT3 moderne.",
    "c_theme": "Gratitude",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le vrai champion respecte la piste, l'équipe et l'adversaire tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "29-06": {
    "a_cat": "F1",
    "a_titre": "Développement en Formule 1",
    "a_texte": "Développement : La bataille se gagne aussi en usine, avec des évolutions parfois invisibles au premier regard.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "On ne maîtrise pas la météo, mais on peut maîtriser sa réaction en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "30-06": {
    "a_cat": "GT3",
    "a_titre": "Balance of Performance en GT3",
    "a_texte": "Balance of Performance : en GT3, la BoP ajuste le poids, la puissance ou la hauteur de caisse pour rapprocher les performances de voitures très différentes.",
    "c_theme": "Persévérance",
    "c_auteur": "Anonyme",
    "c_texte": "Le travail invisible finit toujours par apparaître au chronomètre lorsque le doute apparaît, même quand le chrono ne récompense pas encore l'effort."
  },
  "01-07": {
    "a_cat": "F1",
    "a_titre": "DRS en Formule 1",
    "a_texte": "DRS : Le DRS réduit la traînée sur certaines zones pour aider les dépassements, mais il ne remplace pas le talent au freinage.",
    "c_theme": "Discipline",
    "c_auteur": "Pensée sportive",
    "c_texte": "La discipline commence quand l'envie s'arrête aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "02-07": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Fiabilité : l'école de la patience",
    "a_texte": "Fiabilité : La voiture la plus rapide ne gagne rien si elle ne voit pas l'arrivée.",
    "c_theme": "Foi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Un bon leader ne prend pas toute la lumière ; il aide l'équipe à mieux voir en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "03-07": {
    "a_cat": "GT3",
    "a_titre": "Relais pilotes en GT3",
    "a_texte": "Relais pilotes : en GT3, en endurance GT, la régularité des relais compte souvent plus qu'un seul tour spectaculaire.",
    "c_theme": "Leadership",
    "c_auteur": "Pensée sportive",
    "c_texte": "L'humilité apprend plus vite que l'orgueil avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "04-07": {
    "a_cat": "GT3",
    "a_titre": "Pit stop en GT3",
    "a_texte": "Pit stop : en GT3, un arrêt propre peut faire gagner plus qu'un dépassement risqué en piste.",
    "c_theme": "Résilience",
    "c_auteur": "Anonyme",
    "c_texte": "Rester droit dans la pression vaut plus qu'une victoire obtenue de travers aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "05-07": {
    "a_cat": "F1",
    "a_titre": "Qualifications en Formule 1",
    "a_texte": "Qualifications : La qualification récompense la précision maximale sur un seul tour.",
    "c_theme": "Humilité",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Ne cherche pas seulement à aller vite ; cherche à devenir fiable dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "06-07": {
    "a_cat": "GT3",
    "a_titre": "Trafic en GT3",
    "a_texte": "Trafic : en GT3, les pilotes GT doivent dépasser sans perdre de rythme tout en protégeant leurs pneus et leur carrosserie.",
    "c_theme": "Courage",
    "c_auteur": "Anonyme",
    "c_texte": "Un relais difficile peut préparer une arrivée victorieuse avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "07-07": {
    "a_cat": "F1",
    "a_titre": "Pluie en Formule 1",
    "a_texte": "Pluie : Sous la pluie, la trajectoire idéale change et le toucher de pédale devient déterminant.",
    "c_theme": "Espérance",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Chaque erreur corrigée devient une pièce de la prochaine réussite tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "08-07": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Prototypes et GT : l'école de la patience",
    "a_texte": "Prototypes et GT : Le mélange prototypes/GT crée un trafic permanent et des décisions en continu.",
    "c_theme": "Intégrité",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Une course se gagne d'abord dans les petites décisions répétées jusqu'à la ligne d'arrivée, même quand le chrono ne récompense pas encore l'effort."
  },
  "09-07": {
    "a_cat": "GT3",
    "a_titre": "Nuit en GT3",
    "a_texte": "Nuit : en GT3, la nuit révèle les équipages les plus constants : visibilité réduite, fatigue et trafic permanent.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le talent ouvre une porte, mais le caractère décide si tu restes dans la pièce avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "10-07": {
    "a_cat": "GT3",
    "a_titre": "Amateurs et pros en GT3",
    "a_texte": "Amateurs et pros : en GT3, le GT3 mélange souvent pilotes professionnels et gentlemen drivers, ce qui rend la stratégie unique.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Pensée sportive",
    "c_texte": "Le dépassement commence là où les excuses s'arrêtent dans le silence de l'entraînement, même quand le chrono ne récompense pas encore l'effort."
  },
  "11-07": {
    "a_cat": "F1",
    "a_titre": "DRS en Formule 1",
    "a_texte": "DRS : Le DRS réduit la traînée sur certaines zones pour aider les dépassements, mais il ne remplace pas le talent au freinage.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Chaque tour propre construit une victoire que personne ne voit encore dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "12-07": {
    "a_cat": "GT3",
    "a_titre": "Fiabilité en GT3",
    "a_texte": "Fiabilité : en GT3, une GT3 doit rester rapide tout en supportant des heures de vibreurs, de chaleur et de freinages violents.",
    "c_theme": "Excellence",
    "c_auteur": "Pensée sportive",
    "c_texte": "La patience transforme les obstacles en apprentissage avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "13-07": {
    "a_cat": "F1",
    "a_titre": "Pneus F1 en Formule 1",
    "a_texte": "Pneus F1 : La fenêtre de température des pneus peut décider du rythme d'une voiture.",
    "c_theme": "Gratitude",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La gratitude garde le cœur stable quand la pression monte tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "14-07": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Pensée sportive",
    "c_texte": "Avancer lentement dans la bonne direction vaut mieux que sprinter vers le mauvais virage en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "15-07": {
    "a_cat": "GT3",
    "a_titre": "Drapeaux jaunes en GT3",
    "a_texte": "Drapeaux jaunes : en GT3, un Full Course Yellow peut détruire ou sauver une stratégie d'endurance.",
    "c_theme": "Persévérance",
    "c_auteur": "Pensée sportive",
    "c_texte": "Le vrai champion respecte la piste, l'équipe et l'adversaire lorsque le doute apparaît, même quand le chrono ne récompense pas encore l'effort."
  },
  "16-07": {
    "a_cat": "GT3",
    "a_titre": "Carrosserie en GT3",
    "a_texte": "Carrosserie : en GT3, une GT3 reste proche d'une silhouette de voiture de route, mais presque tout est optimisé pour la course.",
    "c_theme": "Discipline",
    "c_auteur": "Anonyme",
    "c_texte": "On ne maîtrise pas la météo, mais on peut maîtriser sa réaction aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "17-07": {
    "a_cat": "F1",
    "a_titre": "Pluie en Formule 1",
    "a_texte": "Pluie : Sous la pluie, la trajectoire idéale change et le toucher de pédale devient déterminant.",
    "c_theme": "Foi",
    "c_auteur": "Anonyme",
    "c_texte": "L'équipe qui se fait confiance gagne du temps avant même le départ en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "18-07": {
    "a_cat": "GT3",
    "a_titre": "Spa 24h en GT3",
    "a_texte": "Spa 24h : en GT3, les 24 Heures de Spa sont l'un des monuments du GT3 moderne.",
    "c_theme": "Leadership",
    "c_auteur": "Anonyme",
    "c_texte": "La discipline commence quand l'envie s'arrête avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "19-07": {
    "a_cat": "F1",
    "a_titre": "Développement en Formule 1",
    "a_texte": "Développement : La bataille se gagne aussi en usine, avec des évolutions parfois invisibles au premier regard.",
    "c_theme": "Résilience",
    "c_auteur": "Pensée sportive",
    "c_texte": "Un bon leader ne prend pas toute la lumière ; il aide l'équipe à mieux voir aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "20-07": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Le Mans : l'école de la patience",
    "a_texte": "Le Mans : Aux 24 Heures du Mans, gagner demande vitesse, fiabilité, stratégie et résistance mentale.",
    "c_theme": "Humilité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La sagesse sait quand attaquer et quand préserver dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "21-07": {
    "a_cat": "GT3",
    "a_titre": "ABS en GT3",
    "a_texte": "ABS : en GT3, contrairement à beaucoup de monoplaces, les GT3 utilisent l'ABS, ce qui change fortement la confiance au freinage.",
    "c_theme": "Courage",
    "c_auteur": "Pensée sportive",
    "c_texte": "Rester droit dans la pression vaut plus qu'une victoire obtenue de travers avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "22-07": {
    "a_cat": "GT3",
    "a_titre": "Contrôle de traction en GT3",
    "a_texte": "Contrôle de traction : en GT3, le contrôle de traction aide à gérer la motricité, surtout lorsque les pneus arrière commencent à souffrir.",
    "c_theme": "Espérance",
    "c_auteur": "Anonyme",
    "c_texte": "Ne cherche pas seulement à aller vite ; cherche à devenir fiable tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "23-07": {
    "a_cat": "F1",
    "a_titre": "Pneus F1 en Formule 1",
    "a_texte": "Pneus F1 : La fenêtre de température des pneus peut décider du rythme d'une voiture.",
    "c_theme": "Intégrité",
    "c_auteur": "Anonyme",
    "c_texte": "Le calme dans le chaos est souvent la meilleure trajectoire jusqu'à la ligne d'arrivée, même quand le chrono ne récompense pas encore l'effort."
  },
  "24-07": {
    "a_cat": "GT3",
    "a_titre": "Pit stop en GT3",
    "a_texte": "Pit stop : en GT3, un arrêt propre peut faire gagner plus qu'un dépassement risqué en piste.",
    "c_theme": "Sagesse",
    "c_auteur": "Anonyme",
    "c_texte": "Chaque erreur corrigée devient une pièce de la prochaine réussite avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "25-07": {
    "a_cat": "F1",
    "a_titre": "Qualifications en Formule 1",
    "a_texte": "Qualifications : La qualification récompense la précision maximale sur un seul tour.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Anonyme",
    "c_texte": "Une course se gagne d'abord dans les petites décisions répétées dans le silence de l'entraînement, même quand le chrono ne récompense pas encore l'effort."
  },
  "26-07": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Fiabilité : l'école de la patience",
    "a_texte": "Fiabilité : La voiture la plus rapide ne gagne rien si elle ne voit pas l'arrivée.",
    "c_theme": "Patience",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La victoire la plus solide est celle qui ne sacrifie pas l'intégrité dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "27-07": {
    "a_cat": "GT3",
    "a_titre": "Réglages en GT3",
    "a_texte": "Réglages : en GT3, un petit changement d'aileron ou de pression peut transformer l'équilibre d'une GT3.",
    "c_theme": "Excellence",
    "c_auteur": "Anonyme",
    "c_texte": "Le dépassement commence là où les excuses s'arrêtent avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "28-07": {
    "a_cat": "GT3",
    "a_titre": "Freinage en GT3",
    "a_texte": "Freinage : en GT3, le freinage en GT3 est un mélange de puissance, d'endurance mécanique et de précision du pilote.",
    "c_theme": "Gratitude",
    "c_auteur": "Anonyme",
    "c_texte": "Chaque tour propre construit une victoire que personne ne voit encore tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "29-07": {
    "a_cat": "F1",
    "a_titre": "Développement en Formule 1",
    "a_texte": "Développement : La bataille se gagne aussi en usine, avec des évolutions parfois invisibles au premier regard.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Anonyme",
    "c_texte": "La foi ne supprime pas l'effort, elle donne une raison de continuer en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "30-07": {
    "a_cat": "GT3",
    "a_titre": "Amateurs et pros en GT3",
    "a_texte": "Amateurs et pros : en GT3, le GT3 mélange souvent pilotes professionnels et gentlemen drivers, ce qui rend la stratégie unique.",
    "c_theme": "Persévérance",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "La gratitude garde le cœur stable quand la pression monte lorsque le doute apparaît, même quand le chrono ne récompense pas encore l'effort."
  },
  "31-07": {
    "a_cat": "F1",
    "a_titre": "DRS en Formule 1",
    "a_texte": "DRS : Le DRS réduit la traînée sur certaines zones pour aider les dépassements, mais il ne remplace pas le talent au freinage.",
    "c_theme": "Discipline",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Avancer lentement dans la bonne direction vaut mieux que sprinter vers le mauvais virage aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "01-08": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Prototypes et GT : l'école de la patience",
    "a_texte": "Prototypes et GT : Le mélange prototypes/GT crée un trafic permanent et des décisions en continu.",
    "c_theme": "Foi",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Celui qui reste fidèle dans l'effort progresse même quand le résultat tarde en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "02-08": {
    "a_cat": "GT3",
    "a_titre": "Radio en GT3",
    "a_texte": "Radio : en GT3, les échanges radio aident à gérer trafic, météo et stratégie, mais le pilote doit décider en une fraction de seconde.",
    "c_theme": "Leadership",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "On ne maîtrise pas la météo, mais on peut maîtriser sa réaction avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "03-08": {
    "a_cat": "GT3",
    "a_titre": "Départ lancé en GT3",
    "a_texte": "Départ lancé : en GT3, le départ lancé en GT demande sang-froid et placement, car le peloton est lourd et très compact.",
    "c_theme": "Résilience",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "L'équipe qui se fait confiance gagne du temps avant même le départ aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "04-08": {
    "a_cat": "F1",
    "a_titre": "Qualifications en Formule 1",
    "a_texte": "Qualifications : La qualification récompense la précision maximale sur un seul tour.",
    "c_theme": "Humilité",
    "c_auteur": "Anonyme",
    "c_texte": "Le courage n'est pas l'absence de peur, c'est la décision d'avancer malgré elle dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "05-08": {
    "a_cat": "GT3",
    "a_titre": "Carrosserie en GT3",
    "a_texte": "Carrosserie : en GT3, une GT3 reste proche d'une silhouette de voiture de route, mais presque tout est optimisé pour la course.",
    "c_theme": "Courage",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Un bon leader ne prend pas toute la lumière ; il aide l'équipe à mieux voir avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "06-08": {
    "a_cat": "F1",
    "a_titre": "Pluie en Formule 1",
    "a_texte": "Pluie : Sous la pluie, la trajectoire idéale change et le toucher de pédale devient déterminant.",
    "c_theme": "Espérance",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "La sagesse sait quand attaquer et quand préserver tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "07-08": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Intégrité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Quand la fatigue parle fort, la discipline doit parler plus juste jusqu'à la ligne d'arrivée, même quand le chrono ne récompense pas encore l'effort."
  },
  "08-08": {
    "a_cat": "GT3",
    "a_titre": "Nürburgring 24h en GT3",
    "a_texte": "Nürburgring 24h : en GT3, le Nürburgring combine GT3, météo changeante et trafic massif sur la Nordschleife.",
    "c_theme": "Sagesse",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Ne cherche pas seulement à aller vite ; cherche à devenir fiable avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "09-08": {
    "a_cat": "GT3",
    "a_titre": "Balance of Performance en GT3",
    "a_texte": "Balance of Performance : en GT3, la BoP ajuste le poids, la puissance ou la hauteur de caisse pour rapprocher les performances de voitures très différentes.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le calme dans le chaos est souvent la meilleure trajectoire dans le silence de l'entraînement, même quand le chrono ne récompense pas encore l'effort."
  },
  "10-08": {
    "a_cat": "F1",
    "a_titre": "DRS en Formule 1",
    "a_texte": "DRS : Le DRS réduit la traînée sur certaines zones pour aider les dépassements, mais il ne remplace pas le talent au freinage.",
    "c_theme": "Patience",
    "c_auteur": "Anonyme",
    "c_texte": "Le travail invisible finit toujours par apparaître au chronomètre dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "11-08": {
    "a_cat": "GT3",
    "a_titre": "Contrôle de traction en GT3",
    "a_texte": "Contrôle de traction : en GT3, le contrôle de traction aide à gérer la motricité, surtout lorsque les pneus arrière commencent à souffrir.",
    "c_theme": "Excellence",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Une course se gagne d'abord dans les petites décisions répétées avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "12-08": {
    "a_cat": "F1",
    "a_titre": "Pneus F1 en Formule 1",
    "a_texte": "Pneus F1 : La fenêtre de température des pneus peut décider du rythme d'une voiture.",
    "c_theme": "Gratitude",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "La victoire la plus solide est celle qui ne sacrifie pas l'intégrité tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "13-08": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Le Mans : l'école de la patience",
    "a_texte": "Le Mans : Aux 24 Heures du Mans, gagner demande vitesse, fiabilité, stratégie et résistance mentale.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "L'humilité apprend plus vite que l'orgueil en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "14-08": {
    "a_cat": "GT3",
    "a_titre": "Pneus en GT3",
    "a_texte": "Pneus : en GT3, la gestion des pneus transforme une voiture rapide en début de relais en vraie candidate à la victoire.",
    "c_theme": "Persévérance",
    "c_auteur": "Anonyme",
    "c_texte": "Chaque tour propre construit une victoire que personne ne voit encore lorsque le doute apparaît, même quand le chrono ne récompense pas encore l'effort."
  },
  "15-08": {
    "a_cat": "GT3",
    "a_titre": "Trafic en GT3",
    "a_texte": "Trafic : en GT3, les pilotes GT doivent dépasser sans perdre de rythme tout en protégeant leurs pneus et leur carrosserie.",
    "c_theme": "Discipline",
    "c_auteur": "Pensée sportive",
    "c_texte": "La foi ne supprime pas l'effort, elle donne une raison de continuer aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "16-08": {
    "a_cat": "F1",
    "a_titre": "Pluie en Formule 1",
    "a_texte": "Pluie : Sous la pluie, la trajectoire idéale change et le toucher de pédale devient déterminant.",
    "c_theme": "Foi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Un relais difficile peut préparer une arrivée victorieuse en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "17-08": {
    "a_cat": "GT3",
    "a_titre": "Freinage en GT3",
    "a_texte": "Freinage : en GT3, le freinage en GT3 est un mélange de puissance, d'endurance mécanique et de précision du pilote.",
    "c_theme": "Leadership",
    "c_auteur": "Pensée sportive",
    "c_texte": "Avancer lentement dans la bonne direction vaut mieux que sprinter vers le mauvais virage avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "18-08": {
    "a_cat": "F1",
    "a_titre": "Développement en Formule 1",
    "a_texte": "Développement : La bataille se gagne aussi en usine, avec des évolutions parfois invisibles au premier regard.",
    "c_theme": "Résilience",
    "c_auteur": "Anonyme",
    "c_texte": "Celui qui reste fidèle dans l'effort progresse même quand le résultat tarde aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "19-08": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Fiabilité : l'école de la patience",
    "a_texte": "Fiabilité : La voiture la plus rapide ne gagne rien si elle ne voit pas l'arrivée.",
    "c_theme": "Humilité",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le talent ouvre une porte, mais le caractère décide si tu restes dans la pièce dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "20-08": {
    "a_cat": "GT3",
    "a_titre": "Aéro en GT3",
    "a_texte": "Aéro : en GT3, les GT3 gardent une aérodynamique efficace, mais moins extrême que les prototypes.",
    "c_theme": "Courage",
    "c_auteur": "Anonyme",
    "c_texte": "L'équipe qui se fait confiance gagne du temps avant même le départ avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "21-08": {
    "a_cat": "GT3",
    "a_titre": "Fiabilité en GT3",
    "a_texte": "Fiabilité : en GT3, une GT3 doit rester rapide tout en supportant des heures de vibreurs, de chaleur et de freinages violents.",
    "c_theme": "Espérance",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le courage n'est pas l'absence de peur, c'est la décision d'avancer malgré elle tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "22-08": {
    "a_cat": "F1",
    "a_titre": "Pneus F1 en Formule 1",
    "a_texte": "Pneus F1 : La fenêtre de température des pneus peut décider du rythme d'une voiture.",
    "c_theme": "Intégrité",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "La patience transforme les obstacles en apprentissage jusqu'à la ligne d'arrivée, même quand le chrono ne récompense pas encore l'effort."
  },
  "23-08": {
    "a_cat": "GT3",
    "a_titre": "Départ lancé en GT3",
    "a_texte": "Départ lancé : en GT3, le départ lancé en GT demande sang-froid et placement, car le peloton est lourd et très compact.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "La sagesse sait quand attaquer et quand préserver avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "24-08": {
    "a_cat": "F1",
    "a_titre": "Qualifications en Formule 1",
    "a_texte": "Qualifications : La qualification récompense la précision maximale sur un seul tour.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Pensée sportive",
    "c_texte": "Quand la fatigue parle fort, la discipline doit parler plus juste dans le silence de l'entraînement, même quand le chrono ne récompense pas encore l'effort."
  },
  "25-08": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Prototypes et GT : l'école de la patience",
    "a_texte": "Prototypes et GT : Le mélange prototypes/GT crée un trafic permanent et des décisions en continu.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le vrai champion respecte la piste, l'équipe et l'adversaire dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "26-08": {
    "a_cat": "GT3",
    "a_titre": "Cockpit en GT3",
    "a_texte": "Cockpit : en GT3, dans le cockpit, boutons, ABS, TC et radio deviennent des réflexes aussi importants que le volant.",
    "c_theme": "Excellence",
    "c_auteur": "Pensée sportive",
    "c_texte": "Le calme dans le chaos est souvent la meilleure trajectoire avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "27-08": {
    "a_cat": "GT3",
    "a_titre": "Spa 24h en GT3",
    "a_texte": "Spa 24h : en GT3, les 24 Heures de Spa sont l'un des monuments du GT3 moderne.",
    "c_theme": "Gratitude",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le travail invisible finit toujours par apparaître au chronomètre tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "28-08": {
    "a_cat": "F1",
    "a_titre": "Développement en Formule 1",
    "a_texte": "Développement : La bataille se gagne aussi en usine, avec des évolutions parfois invisibles au premier regard.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Pensée sportive",
    "c_texte": "La discipline commence quand l'envie s'arrête en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "29-08": {
    "a_cat": "GT3",
    "a_titre": "Balance of Performance en GT3",
    "a_texte": "Balance of Performance : en GT3, la BoP ajuste le poids, la puissance ou la hauteur de caisse pour rapprocher les performances de voitures très différentes.",
    "c_theme": "Persévérance",
    "c_auteur": "Pensée sportive",
    "c_texte": "La victoire la plus solide est celle qui ne sacrifie pas l'intégrité lorsque le doute apparaît, même quand le chrono ne récompense pas encore l'effort."
  },
  "30-08": {
    "a_cat": "F1",
    "a_titre": "DRS en Formule 1",
    "a_texte": "DRS : Le DRS réduit la traînée sur certaines zones pour aider les dépassements, mais il ne remplace pas le talent au freinage.",
    "c_theme": "Discipline",
    "c_auteur": "Anonyme",
    "c_texte": "L'humilité apprend plus vite que l'orgueil aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "31-08": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Foi",
    "c_auteur": "Anonyme",
    "c_texte": "Rester droit dans la pression vaut plus qu'une victoire obtenue de travers en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "01-09": {
    "a_cat": "GT3",
    "a_titre": "Relais pilotes en GT3",
    "a_texte": "Relais pilotes : en GT3, en endurance GT, la régularité des relais compte souvent plus qu'un seul tour spectaculaire.",
    "c_theme": "Leadership",
    "c_auteur": "Anonyme",
    "c_texte": "La foi ne supprime pas l'effort, elle donne une raison de continuer avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "02-09": {
    "a_cat": "GT3",
    "a_titre": "Pit stop en GT3",
    "a_texte": "Pit stop : en GT3, un arrêt propre peut faire gagner plus qu'un dépassement risqué en piste.",
    "c_theme": "Résilience",
    "c_auteur": "Pensée sportive",
    "c_texte": "Un relais difficile peut préparer une arrivée victorieuse aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "03-09": {
    "a_cat": "F1",
    "a_titre": "Qualifications en Formule 1",
    "a_texte": "Qualifications : La qualification récompense la précision maximale sur un seul tour.",
    "c_theme": "Humilité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Chaque erreur corrigée devient une pièce de la prochaine réussite dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "04-09": {
    "a_cat": "GT3",
    "a_titre": "Trafic en GT3",
    "a_texte": "Trafic : en GT3, les pilotes GT doivent dépasser sans perdre de rythme tout en protégeant leurs pneus et leur carrosserie.",
    "c_theme": "Courage",
    "c_auteur": "Pensée sportive",
    "c_texte": "Celui qui reste fidèle dans l'effort progresse même quand le résultat tarde avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "05-09": {
    "a_cat": "F1",
    "a_titre": "Pluie en Formule 1",
    "a_texte": "Pluie : Sous la pluie, la trajectoire idéale change et le toucher de pédale devient déterminant.",
    "c_theme": "Espérance",
    "c_auteur": "Anonyme",
    "c_texte": "Le talent ouvre une porte, mais le caractère décide si tu restes dans la pièce tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "06-09": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Le Mans : l'école de la patience",
    "a_texte": "Le Mans : Aux 24 Heures du Mans, gagner demande vitesse, fiabilité, stratégie et résistance mentale.",
    "c_theme": "Intégrité",
    "c_auteur": "Anonyme",
    "c_texte": "Le dépassement commence là où les excuses s'arrêtent jusqu'à la ligne d'arrivée, même quand le chrono ne récompense pas encore l'effort."
  },
  "07-09": {
    "a_cat": "GT3",
    "a_titre": "Nuit en GT3",
    "a_texte": "Nuit : en GT3, la nuit révèle les équipages les plus constants : visibilité réduite, fatigue et trafic permanent.",
    "c_theme": "Sagesse",
    "c_auteur": "Anonyme",
    "c_texte": "Le courage n'est pas l'absence de peur, c'est la décision d'avancer malgré elle avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "08-09": {
    "a_cat": "GT3",
    "a_titre": "Amateurs et pros en GT3",
    "a_texte": "Amateurs et pros : en GT3, le GT3 mélange souvent pilotes professionnels et gentlemen drivers, ce qui rend la stratégie unique.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Anonyme",
    "c_texte": "La patience transforme les obstacles en apprentissage dans le silence de l'entraînement, même quand le chrono ne récompense pas encore l'effort."
  },
  "09-09": {
    "a_cat": "F1",
    "a_titre": "DRS en Formule 1",
    "a_texte": "DRS : Le DRS réduit la traînée sur certaines zones pour aider les dépassements, mais il ne remplace pas le talent au freinage.",
    "c_theme": "Patience",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La gratitude garde le cœur stable quand la pression monte dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "10-09": {
    "a_cat": "GT3",
    "a_titre": "Fiabilité en GT3",
    "a_texte": "Fiabilité : en GT3, une GT3 doit rester rapide tout en supportant des heures de vibreurs, de chaleur et de freinages violents.",
    "c_theme": "Excellence",
    "c_auteur": "Anonyme",
    "c_texte": "Quand la fatigue parle fort, la discipline doit parler plus juste avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "11-09": {
    "a_cat": "F1",
    "a_titre": "Pneus F1 en Formule 1",
    "a_texte": "Pneus F1 : La fenêtre de température des pneus peut décider du rythme d'une voiture.",
    "c_theme": "Gratitude",
    "c_auteur": "Anonyme",
    "c_texte": "Le vrai champion respecte la piste, l'équipe et l'adversaire tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "12-09": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Fiabilité : l'école de la patience",
    "a_texte": "Fiabilité : La voiture la plus rapide ne gagne rien si elle ne voit pas l'arrivée.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Anonyme",
    "c_texte": "On ne maîtrise pas la météo, mais on peut maîtriser sa réaction en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "13-09": {
    "a_cat": "GT3",
    "a_titre": "Drapeaux jaunes en GT3",
    "a_texte": "Drapeaux jaunes : en GT3, un Full Course Yellow peut détruire ou sauver une stratégie d'endurance.",
    "c_theme": "Persévérance",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le travail invisible finit toujours par apparaître au chronomètre lorsque le doute apparaît, même quand le chrono ne récompense pas encore l'effort."
  },
  "14-09": {
    "a_cat": "GT3",
    "a_titre": "Carrosserie en GT3",
    "a_texte": "Carrosserie : en GT3, une GT3 reste proche d'une silhouette de voiture de route, mais presque tout est optimisé pour la course.",
    "c_theme": "Discipline",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La discipline commence quand l'envie s'arrête aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "15-09": {
    "a_cat": "F1",
    "a_titre": "Pluie en Formule 1",
    "a_texte": "Pluie : Sous la pluie, la trajectoire idéale change et le toucher de pédale devient déterminant.",
    "c_theme": "Foi",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Un bon leader ne prend pas toute la lumière ; il aide l'équipe à mieux voir en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "16-09": {
    "a_cat": "GT3",
    "a_titre": "Spa 24h en GT3",
    "a_texte": "Spa 24h : en GT3, les 24 Heures de Spa sont l'un des monuments du GT3 moderne.",
    "c_theme": "Leadership",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "L'humilité apprend plus vite que l'orgueil avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "17-09": {
    "a_cat": "F1",
    "a_titre": "Développement en Formule 1",
    "a_texte": "Développement : La bataille se gagne aussi en usine, avec des évolutions parfois invisibles au premier regard.",
    "c_theme": "Résilience",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Rester droit dans la pression vaut plus qu'une victoire obtenue de travers aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "18-09": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Prototypes et GT : l'école de la patience",
    "a_texte": "Prototypes et GT : Le mélange prototypes/GT crée un trafic permanent et des décisions en continu.",
    "c_theme": "Humilité",
    "c_auteur": "Anonyme",
    "c_texte": "Ne cherche pas seulement à aller vite ; cherche à devenir fiable dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "19-09": {
    "a_cat": "GT3",
    "a_titre": "ABS en GT3",
    "a_texte": "ABS : en GT3, contrairement à beaucoup de monoplaces, les GT3 utilisent l'ABS, ce qui change fortement la confiance au freinage.",
    "c_theme": "Courage",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Un relais difficile peut préparer une arrivée victorieuse avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "20-09": {
    "a_cat": "GT3",
    "a_titre": "Contrôle de traction en GT3",
    "a_texte": "Contrôle de traction : en GT3, le contrôle de traction aide à gérer la motricité, surtout lorsque les pneus arrière commencent à souffrir.",
    "c_theme": "Espérance",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Chaque erreur corrigée devient une pièce de la prochaine réussite tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "21-09": {
    "a_cat": "F1",
    "a_titre": "Pneus F1 en Formule 1",
    "a_texte": "Pneus F1 : La fenêtre de température des pneus peut décider du rythme d'une voiture.",
    "c_theme": "Intégrité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Une course se gagne d'abord dans les petites décisions répétées jusqu'à la ligne d'arrivée, même quand le chrono ne récompense pas encore l'effort."
  },
  "22-09": {
    "a_cat": "GT3",
    "a_titre": "Pit stop en GT3",
    "a_texte": "Pit stop : en GT3, un arrêt propre peut faire gagner plus qu'un dépassement risqué en piste.",
    "c_theme": "Sagesse",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le talent ouvre une porte, mais le caractère décide si tu restes dans la pièce avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "23-09": {
    "a_cat": "F1",
    "a_titre": "Qualifications en Formule 1",
    "a_texte": "Qualifications : La qualification récompense la précision maximale sur un seul tour.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le dépassement commence là où les excuses s'arrêtent dans le silence de l'entraînement, même quand le chrono ne récompense pas encore l'effort."
  },
  "24-09": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Patience",
    "c_auteur": "Anonyme",
    "c_texte": "Chaque tour propre construit une victoire que personne ne voit encore dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "25-09": {
    "a_cat": "GT3",
    "a_titre": "Réglages en GT3",
    "a_texte": "Réglages : en GT3, un petit changement d'aileron ou de pression peut transformer l'équilibre d'une GT3.",
    "c_theme": "Excellence",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La patience transforme les obstacles en apprentissage avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "26-09": {
    "a_cat": "GT3",
    "a_titre": "Freinage en GT3",
    "a_texte": "Freinage : en GT3, le freinage en GT3 est un mélange de puissance, d'endurance mécanique et de précision du pilote.",
    "c_theme": "Gratitude",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "La gratitude garde le cœur stable quand la pression monte tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "27-09": {
    "a_cat": "F1",
    "a_titre": "Développement en Formule 1",
    "a_texte": "Développement : La bataille se gagne aussi en usine, avec des évolutions parfois invisibles au premier regard.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Avancer lentement dans la bonne direction vaut mieux que sprinter vers le mauvais virage en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "28-09": {
    "a_cat": "GT3",
    "a_titre": "Amateurs et pros en GT3",
    "a_texte": "Amateurs et pros : en GT3, le GT3 mélange souvent pilotes professionnels et gentlemen drivers, ce qui rend la stratégie unique.",
    "c_theme": "Persévérance",
    "c_auteur": "Anonyme",
    "c_texte": "Le vrai champion respecte la piste, l'équipe et l'adversaire lorsque le doute apparaît, même quand le chrono ne récompense pas encore l'effort."
  },
  "29-09": {
    "a_cat": "F1",
    "a_titre": "DRS en Formule 1",
    "a_texte": "DRS : Le DRS réduit la traînée sur certaines zones pour aider les dépassements, mais il ne remplace pas le talent au freinage.",
    "c_theme": "Discipline",
    "c_auteur": "Pensée sportive",
    "c_texte": "On ne maîtrise pas la météo, mais on peut maîtriser sa réaction aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "30-09": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Le Mans : l'école de la patience",
    "a_texte": "Le Mans : Aux 24 Heures du Mans, gagner demande vitesse, fiabilité, stratégie et résistance mentale.",
    "c_theme": "Foi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "L'équipe qui se fait confiance gagne du temps avant même le départ en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "01-10": {
    "a_cat": "GT3",
    "a_titre": "Radio en GT3",
    "a_texte": "Radio : en GT3, les échanges radio aident à gérer trafic, météo et stratégie, mais le pilote doit décider en une fraction de seconde.",
    "c_theme": "Leadership",
    "c_auteur": "Pensée sportive",
    "c_texte": "La discipline commence quand l'envie s'arrête avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "02-10": {
    "a_cat": "GT3",
    "a_titre": "Départ lancé en GT3",
    "a_texte": "Départ lancé : en GT3, le départ lancé en GT demande sang-froid et placement, car le peloton est lourd et très compact.",
    "c_theme": "Résilience",
    "c_auteur": "Anonyme",
    "c_texte": "Un bon leader ne prend pas toute la lumière ; il aide l'équipe à mieux voir aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "03-10": {
    "a_cat": "F1",
    "a_titre": "Qualifications en Formule 1",
    "a_texte": "Qualifications : La qualification récompense la précision maximale sur un seul tour.",
    "c_theme": "Humilité",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "La sagesse sait quand attaquer et quand préserver dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "04-10": {
    "a_cat": "GT3",
    "a_titre": "Carrosserie en GT3",
    "a_texte": "Carrosserie : en GT3, une GT3 reste proche d'une silhouette de voiture de route, mais presque tout est optimisé pour la course.",
    "c_theme": "Courage",
    "c_auteur": "Anonyme",
    "c_texte": "Rester droit dans la pression vaut plus qu'une victoire obtenue de travers avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "05-10": {
    "a_cat": "F1",
    "a_titre": "Pluie en Formule 1",
    "a_texte": "Pluie : Sous la pluie, la trajectoire idéale change et le toucher de pédale devient déterminant.",
    "c_theme": "Espérance",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Ne cherche pas seulement à aller vite ; cherche à devenir fiable tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "06-10": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Fiabilité : l'école de la patience",
    "a_texte": "Fiabilité : La voiture la plus rapide ne gagne rien si elle ne voit pas l'arrivée.",
    "c_theme": "Intégrité",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le calme dans le chaos est souvent la meilleure trajectoire jusqu'à la ligne d'arrivée, même quand le chrono ne récompense pas encore l'effort."
  },
  "07-10": {
    "a_cat": "GT3",
    "a_titre": "Nürburgring 24h en GT3",
    "a_texte": "Nürburgring 24h : en GT3, le Nürburgring combine GT3, météo changeante et trafic massif sur la Nordschleife.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Chaque erreur corrigée devient une pièce de la prochaine réussite avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "08-10": {
    "a_cat": "GT3",
    "a_titre": "Balance of Performance en GT3",
    "a_texte": "Balance of Performance : en GT3, la BoP ajuste le poids, la puissance ou la hauteur de caisse pour rapprocher les performances de voitures très différentes.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Pensée sportive",
    "c_texte": "Une course se gagne d'abord dans les petites décisions répétées dans le silence de l'entraînement, même quand le chrono ne récompense pas encore l'effort."
  },
  "09-10": {
    "a_cat": "F1",
    "a_titre": "DRS en Formule 1",
    "a_texte": "DRS : Le DRS réduit la traînée sur certaines zones pour aider les dépassements, mais il ne remplace pas le talent au freinage.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "La victoire la plus solide est celle qui ne sacrifie pas l'intégrité dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "10-10": {
    "a_cat": "GT3",
    "a_titre": "Contrôle de traction en GT3",
    "a_texte": "Contrôle de traction : en GT3, le contrôle de traction aide à gérer la motricité, surtout lorsque les pneus arrière commencent à souffrir.",
    "c_theme": "Excellence",
    "c_auteur": "Pensée sportive",
    "c_texte": "Le dépassement commence là où les excuses s'arrêtent avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "11-10": {
    "a_cat": "F1",
    "a_titre": "Pneus F1 en Formule 1",
    "a_texte": "Pneus F1 : La fenêtre de température des pneus peut décider du rythme d'une voiture.",
    "c_theme": "Gratitude",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Chaque tour propre construit une victoire que personne ne voit encore tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "12-10": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Prototypes et GT : l'école de la patience",
    "a_texte": "Prototypes et GT : Le mélange prototypes/GT crée un trafic permanent et des décisions en continu.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Pensée sportive",
    "c_texte": "La foi ne supprime pas l'effort, elle donne une raison de continuer en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "13-10": {
    "a_cat": "GT3",
    "a_titre": "Pneus en GT3",
    "a_texte": "Pneus : en GT3, la gestion des pneus transforme une voiture rapide en début de relais en vraie candidate à la victoire.",
    "c_theme": "Persévérance",
    "c_auteur": "Pensée sportive",
    "c_texte": "La gratitude garde le cœur stable quand la pression monte lorsque le doute apparaît, même quand le chrono ne récompense pas encore l'effort."
  },
  "14-10": {
    "a_cat": "GT3",
    "a_titre": "Trafic en GT3",
    "a_texte": "Trafic : en GT3, les pilotes GT doivent dépasser sans perdre de rythme tout en protégeant leurs pneus et leur carrosserie.",
    "c_theme": "Discipline",
    "c_auteur": "Anonyme",
    "c_texte": "Avancer lentement dans la bonne direction vaut mieux que sprinter vers le mauvais virage aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "15-10": {
    "a_cat": "F1",
    "a_titre": "Pluie en Formule 1",
    "a_texte": "Pluie : Sous la pluie, la trajectoire idéale change et le toucher de pédale devient déterminant.",
    "c_theme": "Foi",
    "c_auteur": "Anonyme",
    "c_texte": "Celui qui reste fidèle dans l'effort progresse même quand le résultat tarde en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "16-10": {
    "a_cat": "GT3",
    "a_titre": "Freinage en GT3",
    "a_texte": "Freinage : en GT3, le freinage en GT3 est un mélange de puissance, d'endurance mécanique et de précision du pilote.",
    "c_theme": "Leadership",
    "c_auteur": "Anonyme",
    "c_texte": "On ne maîtrise pas la météo, mais on peut maîtriser sa réaction avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "17-10": {
    "a_cat": "F1",
    "a_titre": "Développement en Formule 1",
    "a_texte": "Développement : La bataille se gagne aussi en usine, avec des évolutions parfois invisibles au premier regard.",
    "c_theme": "Résilience",
    "c_auteur": "Pensée sportive",
    "c_texte": "L'équipe qui se fait confiance gagne du temps avant même le départ aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "18-10": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Relais de nuit : l'école de la patience",
    "a_texte": "Relais de nuit : Les relais de nuit testent la concentration lorsque la fatigue rend chaque freinage plus coûteux.",
    "c_theme": "Humilité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le courage n'est pas l'absence de peur, c'est la décision d'avancer malgré elle dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "19-10": {
    "a_cat": "GT3",
    "a_titre": "Aéro en GT3",
    "a_texte": "Aéro : en GT3, les GT3 gardent une aérodynamique efficace, mais moins extrême que les prototypes.",
    "c_theme": "Courage",
    "c_auteur": "Pensée sportive",
    "c_texte": "Un bon leader ne prend pas toute la lumière ; il aide l'équipe à mieux voir avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "20-10": {
    "a_cat": "GT3",
    "a_titre": "Fiabilité en GT3",
    "a_texte": "Fiabilité : en GT3, une GT3 doit rester rapide tout en supportant des heures de vibreurs, de chaleur et de freinages violents.",
    "c_theme": "Espérance",
    "c_auteur": "Anonyme",
    "c_texte": "La sagesse sait quand attaquer et quand préserver tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "21-10": {
    "a_cat": "F1",
    "a_titre": "Pneus F1 en Formule 1",
    "a_texte": "Pneus F1 : La fenêtre de température des pneus peut décider du rythme d'une voiture.",
    "c_theme": "Intégrité",
    "c_auteur": "Anonyme",
    "c_texte": "Quand la fatigue parle fort, la discipline doit parler plus juste jusqu'à la ligne d'arrivée, même quand le chrono ne récompense pas encore l'effort."
  },
  "22-10": {
    "a_cat": "GT3",
    "a_titre": "Départ lancé en GT3",
    "a_texte": "Départ lancé : en GT3, le départ lancé en GT demande sang-froid et placement, car le peloton est lourd et très compact.",
    "c_theme": "Sagesse",
    "c_auteur": "Anonyme",
    "c_texte": "Ne cherche pas seulement à aller vite ; cherche à devenir fiable avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "23-10": {
    "a_cat": "F1",
    "a_titre": "Qualifications en Formule 1",
    "a_texte": "Qualifications : La qualification récompense la précision maximale sur un seul tour.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Anonyme",
    "c_texte": "Le calme dans le chaos est souvent la meilleure trajectoire dans le silence de l'entraînement, même quand le chrono ne récompense pas encore l'effort."
  },
  "24-10": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Le Mans : l'école de la patience",
    "a_texte": "Le Mans : Aux 24 Heures du Mans, gagner demande vitesse, fiabilité, stratégie et résistance mentale.",
    "c_theme": "Patience",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le travail invisible finit toujours par apparaître au chronomètre dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "25-10": {
    "a_cat": "GT3",
    "a_titre": "Cockpit en GT3",
    "a_texte": "Cockpit : en GT3, dans le cockpit, boutons, ABS, TC et radio deviennent des réflexes aussi importants que le volant.",
    "c_theme": "Excellence",
    "c_auteur": "Anonyme",
    "c_texte": "Une course se gagne d'abord dans les petites décisions répétées avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "26-10": {
    "a_cat": "GT3",
    "a_titre": "Spa 24h en GT3",
    "a_texte": "Spa 24h : en GT3, les 24 Heures de Spa sont l'un des monuments du GT3 moderne.",
    "c_theme": "Gratitude",
    "c_auteur": "Anonyme",
    "c_texte": "La victoire la plus solide est celle qui ne sacrifie pas l'intégrité tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "27-10": {
    "a_cat": "F1",
    "a_titre": "Développement en Formule 1",
    "a_texte": "Développement : La bataille se gagne aussi en usine, avec des évolutions parfois invisibles au premier regard.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Anonyme",
    "c_texte": "L'humilité apprend plus vite que l'orgueil en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "28-10": {
    "a_cat": "GT3",
    "a_titre": "Balance of Performance en GT3",
    "a_texte": "Balance of Performance : en GT3, la BoP ajuste le poids, la puissance ou la hauteur de caisse pour rapprocher les performances de voitures très différentes.",
    "c_theme": "Persévérance",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Chaque tour propre construit une victoire que personne ne voit encore lorsque le doute apparaît, même quand le chrono ne récompense pas encore l'effort."
  },
  "29-10": {
    "a_cat": "F1",
    "a_titre": "DRS en Formule 1",
    "a_texte": "DRS : Le DRS réduit la traînée sur certaines zones pour aider les dépassements, mais il ne remplace pas le talent au freinage.",
    "c_theme": "Discipline",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La foi ne supprime pas l'effort, elle donne une raison de continuer aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "30-10": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Fiabilité : l'école de la patience",
    "a_texte": "Fiabilité : La voiture la plus rapide ne gagne rien si elle ne voit pas l'arrivée.",
    "c_theme": "Foi",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Un relais difficile peut préparer une arrivée victorieuse en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "31-10": {
    "a_cat": "GT3",
    "a_titre": "Relais pilotes en GT3",
    "a_texte": "Relais pilotes : en GT3, en endurance GT, la régularité des relais compte souvent plus qu'un seul tour spectaculaire.",
    "c_theme": "Leadership",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Avancer lentement dans la bonne direction vaut mieux que sprinter vers le mauvais virage avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "01-11": {
    "a_cat": "GT3",
    "a_titre": "Pit stop en GT3",
    "a_texte": "Pit stop : en GT3, un arrêt propre peut faire gagner plus qu'un dépassement risqué en piste.",
    "c_theme": "Résilience",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Celui qui reste fidèle dans l'effort progresse même quand le résultat tarde aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "02-11": {
    "a_cat": "F1",
    "a_titre": "Qualifications en Formule 1",
    "a_texte": "Qualifications : La qualification récompense la précision maximale sur un seul tour.",
    "c_theme": "Humilité",
    "c_auteur": "Anonyme",
    "c_texte": "Le talent ouvre une porte, mais le caractère décide si tu restes dans la pièce dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "03-11": {
    "a_cat": "GT3",
    "a_titre": "Trafic en GT3",
    "a_texte": "Trafic : en GT3, les pilotes GT doivent dépasser sans perdre de rythme tout en protégeant leurs pneus et leur carrosserie.",
    "c_theme": "Courage",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "L'équipe qui se fait confiance gagne du temps avant même le départ avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "04-11": {
    "a_cat": "F1",
    "a_titre": "Pluie en Formule 1",
    "a_texte": "Pluie : Sous la pluie, la trajectoire idéale change et le toucher de pédale devient déterminant.",
    "c_theme": "Espérance",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le courage n'est pas l'absence de peur, c'est la décision d'avancer malgré elle tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "05-11": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Prototypes et GT : l'école de la patience",
    "a_texte": "Prototypes et GT : Le mélange prototypes/GT crée un trafic permanent et des décisions en continu.",
    "c_theme": "Intégrité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La patience transforme les obstacles en apprentissage jusqu'à la ligne d'arrivée, même quand le chrono ne récompense pas encore l'effort."
  },
  "06-11": {
    "a_cat": "GT3",
    "a_titre": "Nuit en GT3",
    "a_texte": "Nuit : en GT3, la nuit révèle les équipages les plus constants : visibilité réduite, fatigue et trafic permanent.",
    "c_theme": "Sagesse",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La sagesse sait quand attaquer et quand préserver avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "07-11": {
    "a_cat": "GT3",
    "a_titre": "Amateurs et pros en GT3",
    "a_texte": "Amateurs et pros : en GT3, le GT3 mélange souvent pilotes professionnels et gentlemen drivers, ce qui rend la stratégie unique.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Quand la fatigue parle fort, la discipline doit parler plus juste dans le silence de l'entraînement, même quand le chrono ne récompense pas encore l'effort."
  },
  "08-11": {
    "a_cat": "GT3",
    "a_titre": "Aéro en GT3",
    "a_texte": "Aéro : en GT3, les GT3 gardent une aérodynamique efficace, mais moins extrême que les prototypes.",
    "c_theme": "Patience",
    "c_auteur": "Anonyme",
    "c_texte": "Le vrai champion respecte la piste, l'équipe et l'adversaire dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "09-11": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Le Mans : l'école de la patience",
    "a_texte": "Le Mans : Aux 24 Heures du Mans, gagner demande vitesse, fiabilité, stratégie et résistance mentale.",
    "c_theme": "Excellence",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le calme dans le chaos est souvent la meilleure trajectoire avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "10-11": {
    "a_cat": "GT3",
    "a_titre": "Radio en GT3",
    "a_texte": "Radio : en GT3, les échanges radio aident à gérer trafic, météo et stratégie, mais le pilote doit décider en une fraction de seconde.",
    "c_theme": "Gratitude",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le travail invisible finit toujours par apparaître au chronomètre tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "11-11": {
    "a_cat": "GT3",
    "a_titre": "Départ lancé en GT3",
    "a_texte": "Départ lancé : en GT3, le départ lancé en GT demande sang-froid et placement, car le peloton est lourd et très compact.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La discipline commence quand l'envie s'arrête en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "12-11": {
    "a_cat": "GT3",
    "a_titre": "Drapeaux jaunes en GT3",
    "a_texte": "Drapeaux jaunes : en GT3, un Full Course Yellow peut détruire ou sauver une stratégie d'endurance.",
    "c_theme": "Persévérance",
    "c_auteur": "Anonyme",
    "c_texte": "La victoire la plus solide est celle qui ne sacrifie pas l'intégrité lorsque le doute apparaît, même quand le chrono ne récompense pas encore l'effort."
  },
  "13-11": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Prototypes et GT : l'école de la patience",
    "a_texte": "Prototypes et GT : Le mélange prototypes/GT crée un trafic permanent et des décisions en continu.",
    "c_theme": "Discipline",
    "c_auteur": "Pensée sportive",
    "c_texte": "L'humilité apprend plus vite que l'orgueil aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "14-11": {
    "a_cat": "GT3",
    "a_titre": "Cockpit en GT3",
    "a_texte": "Cockpit : en GT3, dans le cockpit, boutons, ABS, TC et radio deviennent des réflexes aussi importants que le volant.",
    "c_theme": "Foi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Rester droit dans la pression vaut plus qu'une victoire obtenue de travers en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "15-11": {
    "a_cat": "GT3",
    "a_titre": "Spa 24h en GT3",
    "a_texte": "Spa 24h : en GT3, les 24 Heures de Spa sont l'un des monuments du GT3 moderne.",
    "c_theme": "Leadership",
    "c_auteur": "Pensée sportive",
    "c_texte": "La foi ne supprime pas l'effort, elle donne une raison de continuer avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "16-11": {
    "a_cat": "GT3",
    "a_titre": "Nürburgring 24h en GT3",
    "a_texte": "Nürburgring 24h : en GT3, le Nürburgring combine GT3, météo changeante et trafic massif sur la Nordschleife.",
    "c_theme": "Résilience",
    "c_auteur": "Anonyme",
    "c_texte": "Un relais difficile peut préparer une arrivée victorieuse aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "17-11": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Le Mans : l'école de la patience",
    "a_texte": "Le Mans : Aux 24 Heures du Mans, gagner demande vitesse, fiabilité, stratégie et résistance mentale.",
    "c_theme": "Humilité",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Chaque erreur corrigée devient une pièce de la prochaine réussite dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "18-11": {
    "a_cat": "GT3",
    "a_titre": "ABS en GT3",
    "a_texte": "ABS : en GT3, contrairement à beaucoup de monoplaces, les GT3 utilisent l'ABS, ce qui change fortement la confiance au freinage.",
    "c_theme": "Courage",
    "c_auteur": "Anonyme",
    "c_texte": "Celui qui reste fidèle dans l'effort progresse même quand le résultat tarde avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "19-11": {
    "a_cat": "GT3",
    "a_titre": "Contrôle de traction en GT3",
    "a_texte": "Contrôle de traction : en GT3, le contrôle de traction aide à gérer la motricité, surtout lorsque les pneus arrière commencent à souffrir.",
    "c_theme": "Espérance",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le talent ouvre une porte, mais le caractère décide si tu restes dans la pièce tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "20-11": {
    "a_cat": "GT3",
    "a_titre": "Relais pilotes en GT3",
    "a_texte": "Relais pilotes : en GT3, en endurance GT, la régularité des relais compte souvent plus qu'un seul tour spectaculaire.",
    "c_theme": "Intégrité",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le dépassement commence là où les excuses s'arrêtent jusqu'à la ligne d'arrivée, même quand le chrono ne récompense pas encore l'effort."
  },
  "21-11": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Prototypes et GT : l'école de la patience",
    "a_texte": "Prototypes et GT : Le mélange prototypes/GT crée un trafic permanent et des décisions en continu.",
    "c_theme": "Sagesse",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le courage n'est pas l'absence de peur, c'est la décision d'avancer malgré elle avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "22-11": {
    "a_cat": "GT3",
    "a_titre": "Pneus en GT3",
    "a_texte": "Pneus : en GT3, la gestion des pneus transforme une voiture rapide en début de relais en vraie candidate à la victoire.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Pensée sportive",
    "c_texte": "La patience transforme les obstacles en apprentissage dans le silence de l'entraînement, même quand le chrono ne récompense pas encore l'effort."
  },
  "23-11": {
    "a_cat": "GT3",
    "a_titre": "Trafic en GT3",
    "a_texte": "Trafic : en GT3, les pilotes GT doivent dépasser sans perdre de rythme tout en protégeant leurs pneus et leur carrosserie.",
    "c_theme": "Patience",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "La gratitude garde le cœur stable quand la pression monte dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "24-11": {
    "a_cat": "GT3",
    "a_titre": "Réglages en GT3",
    "a_texte": "Réglages : en GT3, un petit changement d'aileron ou de pression peut transformer l'équilibre d'une GT3.",
    "c_theme": "Excellence",
    "c_auteur": "Pensée sportive",
    "c_texte": "Quand la fatigue parle fort, la discipline doit parler plus juste avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "25-11": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Le Mans : l'école de la patience",
    "a_texte": "Le Mans : Aux 24 Heures du Mans, gagner demande vitesse, fiabilité, stratégie et résistance mentale.",
    "c_theme": "Gratitude",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le vrai champion respecte la piste, l'équipe et l'adversaire tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "26-11": {
    "a_cat": "GT3",
    "a_titre": "Nuit en GT3",
    "a_texte": "Nuit : en GT3, la nuit révèle les équipages les plus constants : visibilité réduite, fatigue et trafic permanent.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Pensée sportive",
    "c_texte": "On ne maîtrise pas la météo, mais on peut maîtriser sa réaction en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "27-11": {
    "a_cat": "GT3",
    "a_titre": "Amateurs et pros en GT3",
    "a_texte": "Amateurs et pros : en GT3, le GT3 mélange souvent pilotes professionnels et gentlemen drivers, ce qui rend la stratégie unique.",
    "c_theme": "Persévérance",
    "c_auteur": "Pensée sportive",
    "c_texte": "Le travail invisible finit toujours par apparaître au chronomètre lorsque le doute apparaît, même quand le chrono ne récompense pas encore l'effort."
  },
  "28-11": {
    "a_cat": "GT3",
    "a_titre": "Aéro en GT3",
    "a_texte": "Aéro : en GT3, les GT3 gardent une aérodynamique efficace, mais moins extrême que les prototypes.",
    "c_theme": "Discipline",
    "c_auteur": "Anonyme",
    "c_texte": "La discipline commence quand l'envie s'arrête aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "29-11": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Prototypes et GT : l'école de la patience",
    "a_texte": "Prototypes et GT : Le mélange prototypes/GT crée un trafic permanent et des décisions en continu.",
    "c_theme": "Foi",
    "c_auteur": "Anonyme",
    "c_texte": "Un bon leader ne prend pas toute la lumière ; il aide l'équipe à mieux voir en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "30-11": {
    "a_cat": "GT3",
    "a_titre": "Radio en GT3",
    "a_texte": "Radio : en GT3, les échanges radio aident à gérer trafic, météo et stratégie, mais le pilote doit décider en une fraction de seconde.",
    "c_theme": "Leadership",
    "c_auteur": "Anonyme",
    "c_texte": "L'humilité apprend plus vite que l'orgueil avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "01-12": {
    "a_cat": "GT3",
    "a_titre": "Départ lancé en GT3",
    "a_texte": "Départ lancé : en GT3, le départ lancé en GT demande sang-froid et placement, car le peloton est lourd et très compact.",
    "c_theme": "Résilience",
    "c_auteur": "Pensée sportive",
    "c_texte": "Rester droit dans la pression vaut plus qu'une victoire obtenue de travers aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "02-12": {
    "a_cat": "GT3",
    "a_titre": "Drapeaux jaunes en GT3",
    "a_texte": "Drapeaux jaunes : en GT3, un Full Course Yellow peut détruire ou sauver une stratégie d'endurance.",
    "c_theme": "Humilité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Ne cherche pas seulement à aller vite ; cherche à devenir fiable dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "03-12": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Le Mans : l'école de la patience",
    "a_texte": "Le Mans : Aux 24 Heures du Mans, gagner demande vitesse, fiabilité, stratégie et résistance mentale.",
    "c_theme": "Courage",
    "c_auteur": "Pensée sportive",
    "c_texte": "Un relais difficile peut préparer une arrivée victorieuse avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "04-12": {
    "a_cat": "GT3",
    "a_titre": "Cockpit en GT3",
    "a_texte": "Cockpit : en GT3, dans le cockpit, boutons, ABS, TC et radio deviennent des réflexes aussi importants que le volant.",
    "c_theme": "Espérance",
    "c_auteur": "Anonyme",
    "c_texte": "Chaque erreur corrigée devient une pièce de la prochaine réussite tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "05-12": {
    "a_cat": "GT3",
    "a_titre": "Spa 24h en GT3",
    "a_texte": "Spa 24h : en GT3, les 24 Heures de Spa sont l'un des monuments du GT3 moderne.",
    "c_theme": "Intégrité",
    "c_auteur": "Anonyme",
    "c_texte": "Une course se gagne d'abord dans les petites décisions répétées jusqu'à la ligne d'arrivée, même quand le chrono ne récompense pas encore l'effort."
  },
  "06-12": {
    "a_cat": "GT3",
    "a_titre": "Nürburgring 24h en GT3",
    "a_texte": "Nürburgring 24h : en GT3, le Nürburgring combine GT3, météo changeante et trafic massif sur la Nordschleife.",
    "c_theme": "Sagesse",
    "c_auteur": "Anonyme",
    "c_texte": "Le talent ouvre une porte, mais le caractère décide si tu restes dans la pièce avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "07-12": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Prototypes et GT : l'école de la patience",
    "a_texte": "Prototypes et GT : Le mélange prototypes/GT crée un trafic permanent et des décisions en continu.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Anonyme",
    "c_texte": "Le dépassement commence là où les excuses s'arrêtent dans le silence de l'entraînement, même quand le chrono ne récompense pas encore l'effort."
  },
  "08-12": {
    "a_cat": "GT3",
    "a_titre": "ABS en GT3",
    "a_texte": "ABS : en GT3, contrairement à beaucoup de monoplaces, les GT3 utilisent l'ABS, ce qui change fortement la confiance au freinage.",
    "c_theme": "Patience",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Chaque tour propre construit une victoire que personne ne voit encore dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "09-12": {
    "a_cat": "GT3",
    "a_titre": "Contrôle de traction en GT3",
    "a_texte": "Contrôle de traction : en GT3, le contrôle de traction aide à gérer la motricité, surtout lorsque les pneus arrière commencent à souffrir.",
    "c_theme": "Excellence",
    "c_auteur": "Anonyme",
    "c_texte": "La patience transforme les obstacles en apprentissage avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "10-12": {
    "a_cat": "GT3",
    "a_titre": "Relais pilotes en GT3",
    "a_texte": "Relais pilotes : en GT3, en endurance GT, la régularité des relais compte souvent plus qu'un seul tour spectaculaire.",
    "c_theme": "Gratitude",
    "c_auteur": "Anonyme",
    "c_texte": "La gratitude garde le cœur stable quand la pression monte tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "11-12": {
    "a_cat": "Endurance / Le Mans / WEC",
    "a_titre": "Le Mans : l'école de la patience",
    "a_texte": "Le Mans : Aux 24 Heures du Mans, gagner demande vitesse, fiabilité, stratégie et résistance mentale.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Anonyme",
    "c_texte": "Avancer lentement dans la bonne direction vaut mieux que sprinter vers le mauvais virage en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "12-12": {
    "a_cat": "GT3",
    "a_titre": "Pneus en GT3",
    "a_texte": "Pneus : en GT3, la gestion des pneus transforme une voiture rapide en début de relais en vraie candidate à la victoire.",
    "c_theme": "Persévérance",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Le vrai champion respecte la piste, l'équipe et l'adversaire lorsque le doute apparaît, même quand le chrono ne récompense pas encore l'effort."
  },
  "13-12": {
    "a_cat": "GT3",
    "a_titre": "Trafic en GT3",
    "a_texte": "Trafic : en GT3, les pilotes GT doivent dépasser sans perdre de rythme tout en protégeant leurs pneus et leur carrosserie.",
    "c_theme": "Discipline",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "On ne maîtrise pas la météo, mais on peut maîtriser sa réaction aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "14-12": {
    "a_cat": "GT3",
    "a_titre": "Réglages en GT3",
    "a_texte": "Réglages : en GT3, un petit changement d'aileron ou de pression peut transformer l'équilibre d'une GT3.",
    "c_theme": "Foi",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "L'équipe qui se fait confiance gagne du temps avant même le départ en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "15-12": {
    "a_cat": "GT3",
    "a_titre": "Freinage en GT3",
    "a_texte": "Freinage : en GT3, le freinage en GT3 est un mélange de puissance, d'endurance mécanique et de précision du pilote.",
    "c_theme": "Leadership",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "La discipline commence quand l'envie s'arrête avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "16-12": {
    "a_cat": "GT3",
    "a_titre": "Nuit en GT3",
    "a_texte": "Nuit : en GT3, la nuit révèle les équipages les plus constants : visibilité réduite, fatigue et trafic permanent.",
    "c_theme": "Résilience",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Un bon leader ne prend pas toute la lumière ; il aide l'équipe à mieux voir aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "17-12": {
    "a_cat": "GT3",
    "a_titre": "Amateurs et pros en GT3",
    "a_texte": "Amateurs et pros : en GT3, le GT3 mélange souvent pilotes professionnels et gentlemen drivers, ce qui rend la stratégie unique.",
    "c_theme": "Humilité",
    "c_auteur": "Anonyme",
    "c_texte": "La sagesse sait quand attaquer et quand préserver dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "18-12": {
    "a_cat": "GT3",
    "a_titre": "Aéro en GT3",
    "a_texte": "Aéro : en GT3, les GT3 gardent une aérodynamique efficace, mais moins extrême que les prototypes.",
    "c_theme": "Courage",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Rester droit dans la pression vaut plus qu'une victoire obtenue de travers avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "19-12": {
    "a_cat": "GT3",
    "a_titre": "Fiabilité en GT3",
    "a_texte": "Fiabilité : en GT3, une GT3 doit rester rapide tout en supportant des heures de vibreurs, de chaleur et de freinages violents.",
    "c_theme": "Espérance",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Ne cherche pas seulement à aller vite ; cherche à devenir fiable tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "20-12": {
    "a_cat": "GT3",
    "a_titre": "Radio en GT3",
    "a_texte": "Radio : en GT3, les échanges radio aident à gérer trafic, météo et stratégie, mais le pilote doit décider en une fraction de seconde.",
    "c_theme": "Intégrité",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le calme dans le chaos est souvent la meilleure trajectoire jusqu'à la ligne d'arrivée, même quand le chrono ne récompense pas encore l'effort."
  },
  "21-12": {
    "a_cat": "GT3",
    "a_titre": "Départ lancé en GT3",
    "a_texte": "Départ lancé : en GT3, le départ lancé en GT demande sang-froid et placement, car le peloton est lourd et très compact.",
    "c_theme": "Sagesse",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Chaque erreur corrigée devient une pièce de la prochaine réussite avec humilité, même quand le chrono ne récompense pas encore l'effort."
  },
  "22-12": {
    "a_cat": "GT3",
    "a_titre": "Drapeaux jaunes en GT3",
    "a_texte": "Drapeaux jaunes : en GT3, un Full Course Yellow peut détruire ou sauver une stratégie d'endurance.",
    "c_theme": "Travail d'équipe",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Une course se gagne d'abord dans les petites décisions répétées dans le silence de l'entraînement, même quand le chrono ne récompense pas encore l'effort."
  },
  "23-12": {
    "a_cat": "GT3",
    "a_titre": "Carrosserie en GT3",
    "a_texte": "Carrosserie : en GT3, une GT3 reste proche d'une silhouette de voiture de route, mais presque tout est optimisé pour la course.",
    "c_theme": "Patience",
    "c_auteur": "Anonyme",
    "c_texte": "La victoire la plus solide est celle qui ne sacrifie pas l'intégrité dans les moments de pression, même quand le chrono ne récompense pas encore l'effort."
  },
  "24-12": {
    "a_cat": "GT3",
    "a_titre": "Cockpit en GT3",
    "a_texte": "Cockpit : en GT3, dans le cockpit, boutons, ABS, TC et radio deviennent des réflexes aussi importants que le volant.",
    "c_theme": "Excellence",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Le dépassement commence là où les excuses s'arrêtent avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "25-12": {
    "a_cat": "GT3",
    "a_titre": "Spa 24h en GT3",
    "a_texte": "Spa 24h : en GT3, les 24 Heures de Spa sont l'un des monuments du GT3 moderne.",
    "c_theme": "Gratitude",
    "c_auteur": "Proverbe inspiré",
    "c_texte": "Chaque tour propre construit une victoire que personne ne voit encore tour après tour, même quand le chrono ne récompense pas encore l'effort."
  },
  "26-12": {
    "a_cat": "GT3",
    "a_titre": "Nürburgring 24h en GT3",
    "a_texte": "Nürburgring 24h : en GT3, le Nürburgring combine GT3, météo changeante et trafic massif sur la Nordschleife.",
    "c_theme": "Dépassement de soi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "La foi ne supprime pas l'effort, elle donne une raison de continuer en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "27-12": {
    "a_cat": "GT3",
    "a_titre": "Balance of Performance en GT3",
    "a_texte": "Balance of Performance : en GT3, la BoP ajuste le poids, la puissance ou la hauteur de caisse pour rapprocher les performances de voitures très différentes.",
    "c_theme": "Persévérance",
    "c_auteur": "Anonyme",
    "c_texte": "La gratitude garde le cœur stable quand la pression monte lorsque le doute apparaît, même quand le chrono ne récompense pas encore l'effort."
  },
  "28-12": {
    "a_cat": "GT3",
    "a_titre": "ABS en GT3",
    "a_texte": "ABS : en GT3, contrairement à beaucoup de monoplaces, les GT3 utilisent l'ABS, ce qui change fortement la confiance au freinage.",
    "c_theme": "Discipline",
    "c_auteur": "Pensée sportive",
    "c_texte": "Avancer lentement dans la bonne direction vaut mieux que sprinter vers le mauvais virage aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  },
  "29-12": {
    "a_cat": "GT3",
    "a_titre": "Contrôle de traction en GT3",
    "a_texte": "Contrôle de traction : en GT3, le contrôle de traction aide à gérer la motricité, surtout lorsque les pneus arrière commencent à souffrir.",
    "c_theme": "Foi",
    "c_auteur": "Pensée chrétienne",
    "c_texte": "Celui qui reste fidèle dans l'effort progresse même quand le résultat tarde en gardant le cap, même quand le chrono ne récompense pas encore l'effort."
  },
  "30-12": {
    "a_cat": "GT3",
    "a_titre": "Relais pilotes en GT3",
    "a_texte": "Relais pilotes : en GT3, en endurance GT, la régularité des relais compte souvent plus qu'un seul tour spectaculaire.",
    "c_theme": "Leadership",
    "c_auteur": "Pensée sportive",
    "c_texte": "On ne maîtrise pas la météo, mais on peut maîtriser sa réaction avec l'équipe, même quand le chrono ne récompense pas encore l'effort."
  },
  "31-12": {
    "a_cat": "GT3",
    "a_titre": "Pit stop en GT3",
    "a_texte": "Pit stop : en GT3, un arrêt propre peut faire gagner plus qu'un dépassement risqué en piste.",
    "c_theme": "Résilience",
    "c_auteur": "Anonyme",
    "c_texte": "L'équipe qui se fait confiance gagne du temps avant même le départ aujourd'hui, même quand le chrono ne récompense pas encore l'effort."
  }
};
