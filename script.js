// Contains the script with which to randomly generate a scenario.

// Narrative arc.
var arc = [
    'Collapse (a few years)',
    'Collapse (a decade)',
    'Collapse (a generation)',
    'Collapse (two generations)',
    'Collapse (a century)',
    'Collapse (a millenium)',
    'Discipline (a few years)',
    'Discipline (a decade)',
    'Discipline (a generation)',
    'Discipline (two generations)',
    'Discipline (a century)',
    'Discipline (a millenium)',
    'Grow (a few years)',
    'Grow (a decade)',
    'Grow (a generation)',
    'Grow (two generations)',
    'Grow (a century)',
    'Grow (a millenium)',
    'Transform (a few years)',
    'Transform (a decade)',
    'Transform (a generation)',
    'Transform (two generations)',
    'Transform (a century)',
    'Transform (a millenium)',
];

// Terrain.
var terrain = [
    'agriculture',
    'citizenship',
    'cloning',
    'disease',
    'the brain',
    'class',
    'communications',
    'drones',
    'childhood',
    'climate',
    'court',
    'the economy',
    'edcation',
    'entertainment',
    'environment',
    'equality',
    'family',
    'flight',
    'forests',
    'genetics',
    'gender',
    'governance',
    'health',
    'hobbies',
    'home',
    'identity',
    'insects',
    'intellectual property',
    'journalism',
    'justice',
    'learning',
    'memory',
    'mining',
    'the moon',
    'oceans',
    'oil',
    'old age',
    'pets',
    'power',
    'religion',
    'robots',
    'sex',
    'shopping',
    'learning',
    'space',
    'sports',
    'theatre',
    'travel',
    'war',
    'water',
    'wealth',
    'women',
    'work',
    'zombies',
    'the zoo',
];

// Object.
var object = [
    'Advertisement',
    'Artwork',
    'Beverage',
    'Book',
    'Bottle',
    'Box',
    'Brochure',
    'Building',
    'Candy',
    'Clothing',
    'Device',
    'Document',
    'Event',
    'Festival',
    'Flag',
    'MEDO',
    'Game',
    'Headline',
    'Implant',
    'Instrument',
    'Jewelery',
    'Kit',
    'Law',
    'Logo',
    'Lotion',
    'Machine',
    'Magazine Cover',
    'Map',
    'Mask',
    'Monument',
    'Passport',
    'Pill',
    'Plant',
    'Postcard',
    'Poster',
    'Product',
    'Prosthetic',
    'Public Service Annoucement',
    'Relic',
    'Ritual',
    'Show',
    'Slogan',
    'Snack',
    'Song',
    'Souvenir',
    'Statue',
    'Sticker',
    'Symbol',
    'T-Shirt',
    'Tattoo',
    'Tool',
    'Vehicle',
    'Video',
    'Weapon',
];

// Mood.
var mood = [
    'Admiration',
    'Alientation',
    'Amusement',
    'Anger',
    'Anxiety',
    'Awkwardness',
    'Calm',
    'Charm',
    'Cheer',
    'Contentment',
    'Curiosity',
    'Decadence',
    'Delight',
    'Disgust',
    'Dread',
    'Embarassment',
    'Excitement',
    'Exhiliration',
    'Fascination',
    'Fervor',
    'Frustration',
    'Gratitude',
    'Happiness',
    'Hilarity',
    'Hope',
    'Longing',
    'Malaise',
    'Melancholy',
    'Melodrama',
    'Nostalgia',
    'Optimism',
    'Outrage',
    'Pathos',
    'Pleasure',
    'Pride',
    'Rationality',
    'Relief',
    'Resentment',
    'Respect',
    'Sadness',
    'Satisfaction',
    'Serenity',
    'Shame',
    'Shock',
    'Sorrow',
    'Surprise',
    'Unease',
    'Warmth',
    'Weirdness',
    'Wellbeing',
    'Wonder',
    'Worry',
    'Zen'
];

// TODO Fix newline characters here!
function generateScenario(arc,terrain,object,mood)
{
    var outcome = "A scenario  with the arc:" + arc[Math.floor(Math.random() * arc.length)];
    outcome += "\n the terrain: " + terrain[Math.floor(Math.random() * terrain.length)];
    outcome += "\n the object:" + object[Math.floor(Math.random() * object.length)];
    outcome += "\n and the mood:" + mood[Math.floor(Math.random() * mood.length)] + ".";
    return outcome;
}

var outcome = generateScenario(arc,terrain,object,mood);
var containerElement = document.getElementById('me');
var outcomeElement = document.createTextNode(outcome);
containerElement.appendChild(outcomeElement); 