// const https = require('https');
const axios = require('axios');

const suburbNames = [
    "Abbotsbury", 
    "Abbotsford", 
    "Acacia Gardens", 
    "Agnes Banks", 
    "Airds", 
    "Alexandria", 
    "Alfords Point", 
    "Allambie Heights", 
    "Allawah", 
    "Ambarvale", 
    "Angus", 
    "Annandale", 
    "Annangrove", 
    "Arcadia", 
    "Arncliffe", 
    "Arndell Park", 
    "Artarmon", 
    "Ashbury", 
    "Ashcroft", 
    "Ashfield", 
    "Asquith", 
    "Auburn", 
    "Austral", 
    "Avalon Beach", 
    "Badgerys Creek", 
    "Balgowlah", 
    "Balgowlah Heights", 
    "Balmain", 
    "Balmain East", 
    "Bangor", 
    "Banksia", 
    "Banksmeadow", 
    "Bankstown", 
    "Bankstown Aerodrome", 
    "Barangaroo", 
    "Barden Ridge", 
    "Bardia", 
    "Bardwell Park", 
    "Bardwell Valley", 
    "Bass Hill", 
    "Baulkham Hills", 
    "Bayview", 
    "Beacon Hill", 
    "Beaconsfield", 
    "Beaumont Hills", 
    "Beecroft", 
    "Belfield", 
    "Bella Vista", 
    "Bellevue Hill", 
    "Belmore", 
    "Belrose", 
    "Berala", 
    "Berkshire Park", 
    "Berowra", 
    "Berowra Creek", 
    "Berowra Heights", 
    "Berowra Waters", 
    "Berrilee", 
    "Beverley Park", 
    "Beverly Hills", 
    "Bexley", 
    "Bexley North", 
    "Bickley Vale", 
    "Bidwill", 
    "Bilgola Beach", 
    "Bilgola Plateau", 
    "Birchgrove", 
    "Birrong", 
    "Blackett", 
    "Blacktown", 
    "Blair Athol", 
    "Blairmount", 
    "Blakehurst", 
    "Bligh Park", 
    "Bondi", 
    "Bondi Beach", 
    "Bondi Junction", 
    "Bonnet Bay", 
    "Bonnyrigg", 
    "Bonnyrigg Heights", 
    "Bossley Park", 
    "Botany", 
    "Bow Bowing", 
    "Box Hill", 
    "Bradbury", 
    "Breakfast Point", 
    "Brighton-Le-Sands", 
    "Bringelly", 
    "Bronte", 
    "Brooklyn", 
    "Brookvale", 
    "Bundeena", 
    "Bungarribee", 
    "Burraneer", 
    "Burwood", 
    "Burwood Heights", 
    "Busby", 
    "Cabarita", 
    "Cabramatta", 
    "Cabramatta West", 
    "Caddens", 
    "Cambridge Gardens", 
    "Cambridge Park", 
    "Camden", 
    "Camden South", 
    "Camellia", 
    "Cammeray", 
    "Campbelltown", 
    "Camperdown", 
    "Campsie", 
    "Canada Bay", 
    "Canley Heights", 
    "Canley Vale", 
    "Canoelands", 
    "Canterbury", 
    "Caringbah", 
    "Caringbah South", 
    "Carlingford", 
    "Carlton", 
    "Carnes Hill", 
    "Carramar", 
    "Carss Park", 
    "Cartwright", 
    "Castle Cove", 
    "Castle Hill", 
    "Castlecrag", 
    "Castlereagh", 
    "Casula", 
    "Catherine Field", 
    "Cattai", 
    "Cawdor", 
    "Cecil Hills", 
    "Cecil Park", 
    "Centennial Park", 
    "Central Business District", 
    "Chatswood", 
    "Chatswood West", 
    "Cheltenham", 
    "Cherrybrook", 
    "Chester Hill", 
    "Chifley", 
    "Chippendale", 
    "Chipping Norton", 
    "Chiswick", 
    "Chullora", 
    "Church Point", 
    "Claremont Meadows", 
    "Clarendon", 
    "Clareville", 
    "Claymore", 
    "Clemton Park", 
    "Clontarf", 
    "Clovelly", 
    "Clyde", 
    "Coasters Retreat", 
    "Cobbitty", 
    "Colebee", 
    "Collaroy", 
    "Collaroy Plateau", 
    "Colyton", 
    "Como", 
    "Concord", 
    "Concord West", 
    "Condell Park", 
    "Connells Point", 
    "Constitution Hill", 
    "Coogee", 
    "Cornwallis", 
    "Cottage Point", 
    "Cowan", 
    "Cranebrook", 
    "Cremorne", 
    "Cremorne Point", 
    "Cromer", 
    "Cronulla", 
    "Crows Nest", 
    "Croydon", 
    "Croydon Park", 
    "Cumberland Reach", 
    "Curl Curl", 
    "Currans Hill", 
    "Currawong Beach", 
    "Daceyville", 
    "Dangar Island", 
    "Darling Point", 
    "Darlinghurst", 
    "Darlington", 
    "Davidson", 
    "Dawes Point", 
    "Dean Park", 
    "Dee Why", 
    "Denham Court", 
    "Denistone", 
    "Denistone East", 
    "Denistone West", 
    "Dharruk", 
    "Dolans Bay", 
    "Dolls Point", 
    "Doonside", 
    "Double Bay", 
    "Dover Heights", 
    "Drummoyne", 
    "Duffys Forest", 
    "Dulwich Hill", 
    "Dundas", 
    "Dundas Valley", 
    "Dural", 
    "Eagle Vale", 
    "Earlwood", 
    "East Gordon", 
    "East Hills", 
    "East Killara", 
    "East Kurrajong", 
    "East Lindfield", 
    "East Ryde", 
    "Eastern Creek", 
    "Eastgardens", 
    "Eastlakes", 
    "Eastwood", 
    "Ebenezer", 
    "Edensor Park", 
    "Edgecliff", 
    "Edmondson Park", 
    "Elanora Heights", 
    "Elderslie", 
    "Elizabeth Bay", 
    "Elizabeth Hills", 
    "Ellis Lane", 
    "Elvina Bay", 
    "Emerton", 
    "Emu Heights", 
    "Emu Plains", 
    "Enfield", 
    "Engadine", 
    "Englorie Park", 
    "Enmore", 
    "Epping", 
    "Ermington", 
    "Erskine Park", 
    "Erskineville", 
    "Eschol Park", 
    "Eveleigh", 
    "Fairfield", 
    "Fairfield East", 
    "Fairfield Heights", 
    "Fairfield West", 
    "Fairlight", 
    "Fiddletown", 
    "Five Dock", 
    "Flemington", 
    "Forest Glen", 
    "Forest Lodge", 
    "Forestville", 
    "Freemans Reach", 
    "Frenchs Forest", 
    "Freshwater", 
    "Gables", 
    "Galston", 
    "Georges Hall", 
    "Gilead", 
    "Girraween", 
    "Gladesville", 
    "Glebe", 
    "Gledswood Hills", 
    "Glen Alpine", 
    "Glendenning", 
    "Glenfield", 
    "Glenhaven", 
    "Glenmore Park", 
    "Glenorie", 
    "Glenwood", 
    "Glossodia", 
    "Gordon", 
    "Grantham Farm", 
    "Granville", 
    "Grasmere", 
    "Grays Point", 
    "Great Mackerel Beach", 
    "Green Valley", 
    "Greenacre", 
    "Greendale", 
    "Greenfield Park", 
    "Greenhills Beach", 
    "Greenwich", 
    "Gregory Hills", 
    "Greystanes", 
    "Grose Vale", 
    "Grose Wold", 
    "Guildford", 
    "Guildford West", 
    "Gymea", 
    "Gymea Bay", 
    "Haberfield", 
    "Hammondville", 
    "Harrington Park", 
    "Harris Park", 
    "Hassall Grove", 
    "Haymarket", 
    "Heathcote", 
    "Hebersham", 
    "Heckenberg", 
    "Henley", 
    "Hillsdale", 
    "Hinchinbrook", 
    "Hobartville", 
    "Holroyd", 
    "Holsworthy", 
    "Homebush", 
    "Homebush West", 
    "Horningsea Park", 
    "Hornsby", 
    "Hornsby Heights", 
    "Horsley Park", 
    "Hoxton Park", 
    "Hunters Hill", 
    "Huntingwood", 
    "Huntleys Cove", 
    "Huntleys Point", 
    "Hurlstone Park", 
    "Hurstville", 
    "Hurstville Grove", 
    "Illawong", 
    "Ingleburn", 
    "Ingleside", 
    "Jamisontown", 
    "Jannali", 
    "Jordan Springs", 
    "Kangaroo Point", 
    "Kareela", 
    "Kearns", 
    "Kellyville", 
    "Kellyville Ridge", 
    "Kemps Creek", 
    "Kensington", 
    "Kenthurst", 
    "Kentlyn", 
    "Killara", 
    "Killarney Heights", 
    "Kings Langley", 
    "Kings Park", 
    "Kingsford", 
    "Kingsgrove", 
    "Kingswood", 
    "Kingswood Park", 
    "Kirkham", 
    "Kirrawee", 
    "Kirribilli", 
    "Kogarah", 
    "Kogarah Bay", 
    "Ku-ring-gai Chase", 
    "Kurmond", 
    "Kurnell", 
    "Kurraba Point", 
    "Kurrajong", 
    "Kurrajong Hills", 
    "Kyeemagh", 
    "Kyle Bay", 
    "La Perouse", 
    "Lakemba", 
    "Lalor Park", 
    "Lane Cove", 
    "Lane Cove North", 
    "Lane Cove West", 
    "Lansdowne", 
    "Lansvale", 
    "Laughtondale", 
    "Lavender Bay", 
    "Leets Vale", 
    "Leichhardt", 
    "Len Waters Estate", 
    "Leonay", 
    "Leppington", 
    "Lethbridge Park", 
    "Leumeah", 
    "Lewisham", 
    "Liberty Grove", 
    "Lidcombe", 
    "Lilli Pilli", 
    "Lilyfield", 
    "Lindfield", 
    "Linley Point", 
    "Little Bay", 
    "Liverpool", 
    "Llandilo", 
    "Loftus", 
    "Londonderry", 
    "Long Point", 
    "Longueville", 
    "Lovett Bay", 
    "Lower Portland", 
    "Lucas Heights", 
    "Luddenham", 
    "Lugarno", 
    "Lurnea", 
    "Macquarie Fields", 
    "Macquarie Links", 
    "Macquarie Park", 
    "Maianbar", 
    "Malabar", 
    "Manly", 
    "Manly Vale", 
    "Maraylya", 
    "Marayong", 
    "Maroota", 
    "Maroubra", 
    "Marrickville", 
    "Marsden Park", 
    "Marsfield", 
    "Mascot", 
    "Matraville", 
    "Mays Hill", 
    "McCarrs Creek", 
    "McGraths Hill", 
    "McMahons Point", 
    "Meadowbank", 
    "Melonba", 
    "Melrose Park", 
    "Menai", 
    "Menangle Park", 
    "Merrylands", 
    "Merrylands West", 
    "Middle Cove", 
    "Middle Dural", 
    "Middleton Grange", 
    "Miller", 
    "Millers Point", 
    "Milperra", 
    "Milsons Passage", 
    "Milsons Point", 
    "Minchinbury", 
    "Minto", 
    "Minto Heights", 
    "Miranda", 
    "Mona Vale", 
    "Monterey", 
    "Moore Park", 
    "Moorebank", 
    "Morning Bay", 
    "Mortdale", 
    "Mortlake", 
    "Mosman", 
    "Mount Annan", 
    "Mount Colah", 
    "Mount Druitt", 
    "Mount Kuring-Gai", 
    "Mount Lewis", 
    "Mount Pritchard", 
    "Mount Vernon", 
    "Mulgoa", 
    "Mulgrave", 
    "Narellan", 
    "Narellan Vale", 
    "Naremburn", 
    "Narrabeen", 
    "Narraweena", 
    "Narwee", 
    "Nelson", 
    "Neutral Bay", 
    "Newington", 
    "Newport", 
    "Newtown", 
    "Nirimba Fields", 
    "Normanhurst", 
    "North Balgowlah", 
    "North Bondi", 
    "North Curl Curl", 
    "North Epping", 
    "North Kellyville", 
    "North Manly", 
    "North Narrabeen", 
    "North Parramatta", 
    "North Richmond", 
    "North Rocks", 
    "North Ryde", 
    "North St Ives", 
    "North St Marys", 
    "North Strathfield", 
    "North Sydney", 
    "North Turramurra", 
    "North Wahroonga", 
    "North Willoughby", 
    "Northbridge", 
    "Northmead", 
    "Northwood", 
    "Norwest", 
    "Oakhurst", 
    "Oakville", 
    "Oatlands", 
    "Oatley", 
    "Old Guildford", 
    "Old Toongabbie", 
    "Oran Park", 
    "Orchard Hills", 
    "Oxford Falls", 
    "Oxley Park", 
    "Oyster Bay", 
    "Paddington", 
    "Padstow", 
    "Padstow Heights", 
    "Pagewood", 
    "Palm Beach", 
    "Panania", 
    "Parklea", 
    "Parramatta", 
    "Peakhurst", 
    "Peakhurst Heights", 
    "Pemulwuy", 
    "Pendle Hill", 
    "Pennant Hills", 
    "Penrith", 
    "Penshurst", 
    "Petersham", 
    "Phillip Bay", 
    "Picnic Point", 
    "Pitt Town", 
    "Pitt Town Bottoms", 
    "Pleasure Point", 
    "Plumpton", 
    "Point Piper", 
    "Port Botany", 
    "Port Hacking", 
    "Potts Hill", 
    "Potts Point", 
    "Prairiewood", 
    "Prestons", 
    "Prospect", 
    "Punchbowl", 
    "Putney", 
    "Pymble", 
    "Pyrmont", 
    "Quakers Hill", 
    "Queens Park", 
    "Queenscliff", 
    "Raby", 
    "Ramsgate", 
    "Ramsgate Beach", 
    "Randwick", 
    "Redfern", 
    "Regents Park", 
    "Regentville", 
    "Revesby", 
    "Revesby Heights", 
    "Rhodes", 
    "Richards", 
    "Richmond", 
    "Richmond Lowlands", 
    "Riverstone", 
    "Riverview", 
    "Riverwood", 
    "Rockdale", 
    "Rodd Point", 
    "Rookwood", 
    "Rooty Hill", 
    "Ropes Crossing", 
    "Rose Bay", 
    "Rosebery", 
    "Rosehill", 
    "Roselands", 
    "Rosemeadow", 
    "Roseville", 
    "Roseville Chase", 
    "Rossmore", 
    "Rouse Hill", 
    "Royal National Park", 
    "Rozelle", 
    "Ruse", 
    "Rushcutters Bay", 
    "Russell Lea", 
    "Rydalmere", 
    "Ryde", 
    "Sackville", 
    "Sackville North", 
    "Sadleir", 
    "Sandringham", 
    "Sandy Point", 
    "Sans Souci", 
    "Scheyville", 
    "Schofields", 
    "Scotland Island", 
    "Seaforth", 
    "Sefton", 
    "Seven Hills", 
    "Shalvey", 
    "Shanes Park", 
    "Silverwater", 
    "Singletons Mill", 
    "Smeaton Grange", 
    "Smithfield", 
    "South Coogee", 
    "South Granville", 
    "South Hurstville", 
    "South Maroota", 
    "South Penrith", 
    "South Turramurra", 
    "South Wentworthville", 
    "South Windsor", 
    "Spring Farm", 
    "St Andrews", 
    "St Clair", 
    "St Helens Park", 
    "St Ives", 
    "St Ives Chase", 
    "St Johns Park", 
    "St Leonards", 
    "St Marys", 
    "St Peters", 
    "Stanhope Gardens", 
    "Stanmore", 
    "Strathfield", 
    "Strathfield South", 
    "Summer Hill", 
    "Surry Hills", 
    "Sutherland", 
    "Sydenham", 
    "Sydney Olympic Park", 
    "Sylvania", 
    "Sylvania Waters", 
    "Tallawong", 
    "Tamarama", 
    "Taren Point", 
    "Telopea", 
    "Tempe", 
    "Tennyson", 
    "Tennyson Point", 
    "Terrey Hills", 
    "The Ponds", 
    "The Rocks", 
    "The Slopes", 
    "Thornleigh", 
    "Toongabbie", 
    "Tregear", 
    "Turramurra", 
    "Turrella", 
    "Ultimo", 
    "Varroville", 
    "Vaucluse", 
    "Villawood", 
    "Vineyard", 
    "Voyager Point", 
    "Wahroonga", 
    "Waitara", 
    "Wakeley", 
    "Wallacia", 
    "Wareemba", 
    "Warrawee", 
    "Warriewood", 
    "Warwick Farm", 
    "Waterfall", 
    "Waterloo", 
    "Watsons Bay", 
    "Wattle Grove", 
    "Waverley", 
    "Waverton", 
    "Wedderburn", 
    "Wentworth Point", 
    "Wentworthville", 
    "Werrington", 
    "Werrington County", 
    "Werrington Downs", 
    "West Hoxton", 
    "West Killara", 
    "West Pennant Hills", 
    "West Pymble", 
    "West Ryde", 
    "Westleigh", 
    "Westmead", 
    "Wetherill Park", 
    "Whalan", 
    "Whale Beach", 
    "Wheeler Heights", 
    "Wilberforce", 
    "Wiley Park", 
    "Willmot", 
    "Willoughby", 
    "Willoughby East", 
    "Windsor", 
    "Windsor Downs", 
    "Winston Hills", 
    "Wisemans Ferry", 
    "Wolli Creek", 
    "Wollstonecraft", 
    "Woodbine", 
    "Woodcroft", 
    "Woodpark", 
    "Woollahra", 
    "Woolloomooloo", 
    "Woolooware", 
    "Woolwich", 
    "Woronora", 
    "Woronora Heights", 
    "Yagoona", 
    "Yarramundi", 
    "Yarrawarrah", 
    "Yennora", 
    "Yowie Bay", 
    "Zetland"
]
// console.log(suburbNames.length);

// suburbNames.map(async (suburb) => {
//     await axios.get(`https://geocode.maps.co/search?q=${suburb},%20sydney`).then((res) => {
//         console.log({
//             suburb: suburb,
//             latitude: res.data[0].lat,
//             longitude: res.data[0].lon,
//         }, ", ");
//     }).catch((e) => {
//        //console.log(e.request.path);
//         console.log({
//             url: e.request.path, 
//             name: suburb
//         }, ", ");

//     });
// });

const suburbAndErrorObject = [
    {
    suburb: 'Acacia Gardens',
    latitude: '-33.7324595',
    longitude: '150.9125321'
    }, 
    {
    suburb: 'Allambie Heights',
    latitude: '-33.7705067',
    longitude: '151.249675'
    }, 
    { suburb: 'Belrose', latitude: '-33.730009', longitude: '151.2191438' }, 
    { suburb: 'Bardia', latitude: '-33.9763948', longitude: '150.8604327' }, 
    {
    suburb: 'Agnes Banks',
    latitude: '-33.6145082',
    longitude: '150.7114482'
    }, 
    {
    suburb: 'Bow Bowing',
    latitude: '-34.0161463',
    longitude: '150.8405606'
    }, 
    {
    suburb: 'Ambarvale',
    latitude: '-34.0844252',
    longitude: '150.8017477'
    }, 
    {
    suburb: 'Berowra Waters',
    latitude: '-33.5994177',
    longitude: '151.1229517'
    }, 
    {
    suburb: 'Berrilee',
    latitude: '-33.6127484',
    longitude: '151.1055143'
    }, 
    {
    suburb: 'Barden Ridge',
    latitude: '-34.0311727',
    longitude: '151.0105268'
    }, 
    { suburb: 'Busby', latitude: '-33.915', longitude: '150.8844444' }, 
    { suburb: 'Ashcroft', latitude: '-33.915', longitude: '150.9011111' }, 
    {
    suburb: 'Annangrove',
    latitude: '-33.6574838',
    longitude: '150.9460077'
    }, 
    {
    suburb: 'Crows Nest',
    latitude: '-33.8256273',
    longitude: '151.2014745'
    }, 
    {
    suburb: 'Bradbury',
    latitude: '-34.0816667',
    longitude: '150.8177778'
    }, 
    { suburb: 'Chullora', latitude: '-33.8925', longitude: '151.0477778' }, 
    {
    suburb: 'Bankstown Aerodrome',
    latitude: '-33.9235',
    longitude: '150.9901'
    }, 
    { suburb: 'Claymore', latitude: '-34.0469444', longitude: '150.81' }, 
    {
    suburb: 'Galston',
    latitude: '-33.6467002',
    longitude: '151.0642498'
    }, 
    {
    suburb: 'Catherine Field',
    latitude: '-33.9926657',
    longitude: '150.7650245'
    }, 
    {
    suburb: 'Balgowlah',
    latitude: '-33.7944424',
    longitude: '151.2608261'
    }, 
    {
    suburb: 'Belfield',
    latitude: '-33.9045165',
    longitude: '151.0860013'
    }, 
    {
    suburb: 'Balgowlah Heights',
    latitude: '-33.807495',
    longitude: '151.2649923'
    }, 
    {
    suburb: 'Cabramatta',
    latitude: '-33.8983188',
    longitude: '150.9344502'
    }, 
    {
    suburb: 'Burwood Heights',
    latitude: '-33.8894444',
    longitude: '151.1038889'
    }, 
    { suburb: 'Bronte', latitude: '-33.9042128', longitude: '151.2637774' }, 
    { suburb: 'Putney', latitude: '-33.826067', longitude: '151.1064224' }, 
    { suburb: 'Airds', latitude: '-34.09', longitude: '150.8261111' }, 
    {
    suburb: 'Cammeray',
    latitude: '-33.8222738',
    longitude: '151.2139868'
    }, 
    {
    suburb: 'Carnes Hill',
    latitude: '-33.9378294',
    longitude: '150.8504602'
    }, 
    { suburb: 'Bangor', latitude: '-34.0155034', longitude: '151.0334872' }, 
    {
    suburb: 'Ermington',
    latitude: '-33.8101156',
    longitude: '151.0600559'
    }, 
    {
    suburb: 'East Killara',
    latitude: '-33.7554823',
    longitude: '151.1811998'
    }, 
    {
    suburb: 'Castlereagh',
    latitude: '-33.6647962',
    longitude: '150.6844521'
    }, 
    {
    suburb: 'Bungarribee',
    latitude: '-33.7822832',
    longitude: '150.86499'
    }, 
    {
    suburb: 'Arndell Park',
    latitude: '-33.79',
    longitude: '150.8761111'
    }, 
    { suburb: 'Cattai', latitude: '-33.5482394', longitude: '150.9164045' }, 
    { suburb: 'Dural', latitude: '-33.6876398', longitude: '151.0267199' }, 
    {
    suburb: 'Cabramatta West',
    latitude: '-33.8916949',
    longitude: '150.914639'
    }, 
    {
    suburb: 'Bringelly',
    latitude: '-33.9393505',
    longitude: '150.7309705'
    }, 
    {
    suburb: 'Fiddletown',
    latitude: '-33.5569323',
    longitude: '151.0844279'
    }, 
    {
    suburb: 'Englorie Park',
    latitude: '-34.0806577',
    longitude: '150.7950629'
    }, 
    {
    suburb: 'Drummoyne',
    latitude: '-33.8520678',
    longitude: '151.153689'
    }, 
    {
    suburb: 'Bass Hill',
    latitude: '-33.8986251',
    longitude: '150.9974484'
    }, 
    {
    suburb: 'Beaconsfield',
    latitude: '-33.9114691',
    longitude: '151.200315'
    }, 
    {
    suburb: 'Banksmeadow',
    latitude: '-33.9542459',
    longitude: '151.2157073'
    }, 
    {
    suburb: 'Burraneer',
    latitude: '-34.0644603',
    longitude: '151.1377905'
    }, 
    {
    suburb: 'Clontarf',
    latitude: '-33.8061209',
    longitude: '151.2540182'
    }, 
    {
    suburb: 'Balmain East',
    latitude: '-33.8571789',
    longitude: '151.192354'
    }, 
    {
    suburb: 'Elderslie',
    latitude: '-34.0590289',
    longitude: '150.715403'
    }, 
    {
    suburb: 'Concord',
    latitude: '-33.8556716',
    longitude: '151.1067667'
    }, 
    {
    suburb: 'Brookvale',
    latitude: '-33.7628854',
    longitude: '151.2707024'
    }, 
    {
    suburb: 'Barangaroo',
    latitude: '-33.8614084',
    longitude: '151.2016877'
    }, 
    {
    suburb: 'Clemton Park',
    latitude: '-33.9258322',
    longitude: '151.1029075'
    }, 
    {
    suburb: 'Avalon Beach',
    latitude: '-33.6365039',
    longitude: '151.3290299'
    }, 
    {
    suburb: 'East Lindfield',
    latitude: '-33.7674175',
    longitude: '151.1874672'
    }, 
    {
    suburb: 'Winston Hills',
    latitude: '-33.7761098',
    longitude: '150.9816606'
    }, 
    {
    suburb: 'Belmore',
    latitude: '-33.9194073',
    longitude: '151.0878936'
    }, 
    {
    suburb: 'Edgecliff',
    latitude: '-33.8797692',
    longitude: '151.2361116'
    }, 
    {
    suburb: 'Earlwood',
    latitude: '-33.9247222',
    longitude: '151.1313889'
    }, 
    {
    suburb: 'Arcadia',
    latitude: '-33.6227289',
    longitude: '151.0605602'
    }, 
    {
    suburb: 'Cheltenham',
    latitude: '-33.7569444',
    longitude: '151.0775'
    }, 
    {
    suburb: 'McCarrs Creek',
    latitude: '-33.6432304',
    longitude: '151.2775346'
    }, 
    {
    suburb: 'Dolls Point',
    latitude: '-33.9936111',
    longitude: '151.1447222'
    }, 
    {
    suburb: 'Currawong Beach',
    latitude: '-33.5952267',
    longitude: '151.2987319'
    }, 
    {
    suburb: 'Bligh Park',
    latitude: '-33.6383333',
    longitude: '150.7980556'
    }, 
    {
    suburb: 'Carlton',
    latitude: '-33.9707904',
    longitude: '151.1213704'
    }, 
    {
    suburb: 'Erskine Park',
    latitude: '-33.8086111',
    longitude: '150.8013889'
    }, 
    {
    suburb: 'Bardwell Park',
    latitude: '-33.9355556',
    longitude: '151.1238889'
    }, 
    {
    suburb: 'Carlingford',
    latitude: '-33.7744947',
    longitude: '151.0475215'
    }, 
    {
    suburb: 'Engadine',
    latitude: '-34.0650134',
    longitude: '151.0138225'
    }, 
    {
    suburb: 'Glenhaven',
    latitude: '-33.7027383',
    longitude: '151.0008049'
    }, 
    { suburb: 'Casula', latitude: '-33.9522222', longitude: '150.8952778' }, 
    {
    suburb: 'Centennial Park',
    latitude: '-33.8977778',
    longitude: '151.2338889'
    }, 
    {
    suburb: 'Church Point',
    latitude: '-33.6500957',
    longitude: '151.2853102'
    }, 
    {
    suburb: 'Badgerys Creek',
    latitude: '-33.8816671',
    longitude: '150.7441627'
    }, 
    {
    suburb: 'Chester Hill',
    latitude: '-33.8835449',
    longitude: '150.9994175'
    }, 
    { suburb: 'Auburn', latitude: '-33.8545702', longitude: '151.0255673' }, 
    {
    suburb: 'Cherrybrook',
    latitude: '-33.7227778',
    longitude: '151.0461111'
    }, 
    {
    suburb: 'Greenacre',
    latitude: '-33.9022902',
    longitude: '151.058546'
    }, 
    {
    suburb: 'Castle Hill',
    latitude: '-33.7315318',
    longitude: '151.0071718'
    }, 
    {
    suburb: 'Clovelly',
    latitude: '-33.9126387',
    longitude: '151.2617904'
    }, 
    {
    suburb: 'Ashfield',
    latitude: '-33.8894781',
    longitude: '151.1274125'
    }, 
    {
    suburb: 'Camperdown',
    latitude: '-33.8896116',
    longitude: '151.1800986'
    }, 
    {
    suburb: 'Chippendale',
    latitude: '-33.8863291',
    longitude: '151.1998211'
    }, 
    {
    suburb: 'Beacon Hill',
    latitude: '-33.751787',
    longitude: '151.2600828'
    }, 
    {
    suburb: 'Cumberland Reach',
    latitude: '51.4475348',
    longitude: '-2.6093433'
    }, 
    {
    suburb: 'Bella Vista',
    latitude: '-33.7416936',
    longitude: '150.9547183'
    }, 
    { suburb: 'Burwood', latitude: '-33.8784753', longitude: '151.104049' }, 
    { suburb: 'Gilead', latitude: '-34.115', longitude: '150.7844444' }, 
    {
    suburb: 'Annandale',
    latitude: '-33.881224',
    longitude: '151.1709976'
    }, 
    {
    suburb: 'Dharruk',
    latitude: '-33.7480556',
    longitude: '150.8147222'
    }, 
    {
    suburb: 'Eastlakes',
    latitude: '-33.9310733',
    longitude: '151.2113667'
    }, 
    {
    suburb: 'Harris Park',
    latitude: '-33.8233375',
    longitude: '151.0076541'
    }, 
    {
    suburb: 'Fairfield Heights',
    latitude: '-33.8662814',
    longitude: '150.9395106'
    }, 
    {
    suburb: 'Daceyville',
    latitude: '-33.9289328',
    longitude: '151.2251839'
    }, 
    {
    suburb: 'Killara',
    latitude: '-33.7660606',
    longitude: '151.1601121'
    }, 
    {
    suburb: 'Ingleburn',
    latitude: '-33.9983333',
    longitude: '150.8511111'
    }, 
    {
    suburb: 'Kangaroo Point',
    latitude: '-34.002073',
    longitude: '151.0967132'
    }, 
    {
    suburb: 'Cambridge Gardens',
    latitude: '-33.7377967',
    longitude: '150.7205556'
    }, 
    {
    suburb: 'Elvina Bay',
    latitude: '-33.6377531',
    longitude: '151.2802489'
    }, 
    {
    suburb: 'Hurstville',
    latitude: '-33.960707',
    longitude: '151.1003611'
    }, 
    {
    suburb: 'Elizabeth Hills',
    latitude: '-33.9002288',
    longitude: '150.8487942'
    }, 
    { suburb: 'Ryde', latitude: '-33.8125405', longitude: '151.1115717' }, 
    {
    suburb: 'Currans Hill',
    latitude: '-34.0463519',
    longitude: '150.7712456'
    }, 
    { suburb: 'Kirkham', latitude: '-34.0351341', longitude: '150.711839' }, 
    {
    suburb: 'Ashbury',
    latitude: '-33.9001107',
    longitude: '151.1180724'
    }, 
    {
    suburb: 'Jordan Springs',
    latitude: '-33.7250215',
    longitude: '150.7271271'
    }, 
    {
    suburb: 'Bundeena',
    latitude: '-34.0845443',
    longitude: '151.1512348'
    }, 
    { suburb: 'Leonay', latitude: '-33.7650058', longitude: '150.6511051' }, 
    {
    suburb: 'Rosemeadow',
    latitude: '-34.1066667',
    longitude: '150.7927778'
    }, 
    {
    suburb: 'Chifley',
    latitude: '-33.9702813',
    longitude: '151.2394867'
    }, 
    {
    suburb: 'Woolwich',
    latitude: '-33.8401988',
    longitude: '151.1710614'
    }, 
    {
    suburb: 'Rosebery',
    latitude: '-33.9185861',
    longitude: '151.204692'
    }, 
    {
    suburb: 'Illawong',
    latitude: '-33.9973348',
    longitude: '151.0429726'
    }, 
    {
    suburb: 'Artarmon',
    latitude: '-33.8084051',
    longitude: '151.184511'
    }, 
    {
    suburb: 'Werrington Downs',
    latitude: '-33.7413889',
    longitude: '150.7322222'
    }, 
    { suburb: 'Caddens', latitude: '-33.773603', longitude: '150.7288643' }, 
    {
    suburb: 'Arncliffe',
    latitude: '-33.938236',
    longitude: '151.145508'
    }, 
    {
    suburb: 'Connells Point',
    latitude: '-33.9869476',
    longitude: '151.0942725'
    }, 
    {
    suburb: 'Sackville North',
    latitude: '-33.4816597',
    longitude: '150.8844376'
    }, 
    {
    suburb: 'Werrington County',
    latitude: '-33.7469444',
    longitude: '150.7486111'
    }, 
    {
    suburb: 'Scheyville',
    latitude: '-33.6017926',
    longitude: '150.8928527'
    }, 
    {
    suburb: 'Padstow Heights',
    latitude: '-33.9704029',
    longitude: '151.0330262'
    }, 
    {
    suburb: 'West Pymble',
    latitude: '-33.7646844',
    longitude: '151.1318993'
    }, 
    {
    suburb: 'Denham Court',
    latitude: '-33.9813889',
    longitude: '150.8294444'
    }, 
    {
    suburb: 'Rushcutters Bay',
    latitude: '-33.8750365',
    longitude: '151.2276557'
    }, 
    {
    suburb: 'Rozelle',
    latitude: '-33.8645002',
    longitude: '151.1743543'
    }, 
    {
    suburb: 'Smeaton Grange',
    latitude: '-34.0340877',
    longitude: '150.7553777'
    }, 
    {
    suburb: 'Bardwell Valley',
    latitude: '-33.937452',
    longitude: '151.1304335'
    }, 
    {
    suburb: 'Lugarno',
    latitude: '-33.9823958',
    longitude: '151.0450193'
    }, 
    {
    suburb: 'North Kellyville',
    latitude: '-33.6859488',
    longitude: '150.9535842'
    }, 
    {
    suburb: 'Alexandria',
    latitude: '-33.9091568',
    longitude: '151.1921281'
    }, 
    {
    suburb: 'Brighton-Le-Sands',
    latitude: '-33.9580947',
    longitude: '151.1526052'
    }, 
    {
    suburb: 'Gladesville',
    latitude: '-33.8275',
    longitude: '151.1263889'
    }, 
    {
    suburb: 'Cranebrook',
    latitude: '-33.7048583',
    longitude: '150.70641'
    }, 
    {
    suburb: 'South Coogee',
    latitude: '-33.9322056',
    longitude: '151.2539567'
    }, 
    {
    suburb: 'Hillsdale',
    latitude: '-33.9529465',
    longitude: '151.2274123'
    }, 
    {
    suburb: 'Alfords Point',
    latitude: '-33.9839091',
    longitude: '151.0241615'
    }, 
    {
    suburb: 'Maraylya',
    latitude: '-33.5913984',
    longitude: '150.9221281'
    }, 
    { suburb: 'Angus', latitude: '-33.6802579', longitude: '150.8423654' }, 
    {
    suburb: 'Beaumont Hills',
    latitude: '-33.6997222',
    longitude: '150.9405556'
    }, 
    {
    suburb: 'Royal National Park',
    latitude: '-34.11219955',
    longitude: '151.02672688004589'
    }, 
    {
    suburb: 'East Ryde',
    latitude: '-33.8097017',
    longitude: '151.1353884'
    }, 
    {
    suburb: 'Harrington Park',
    latitude: '-34.0247325',
    longitude: '150.7422344'
    }, 
    { suburb: 'Cowan', latitude: '-33.5888297', longitude: '151.1698568' }, 
    {
    suburb: 'Lalor Park',
    latitude: '-33.7649937',
    longitude: '150.9288833'
    }, 
    {
    suburb: 'Schofields',
    latitude: '-33.6971603',
    longitude: '150.8711915'
    }, 
    {
    suburb: 'Kogarah Bay',
    latitude: '-33.992438050000004',
    longitude: '151.1224004515384'
    }, 
    {
    suburb: 'Chiswick',
    latitude: '-33.8498337',
    longitude: '151.1378781'
    }, 
    {
    suburb: 'Freemans Reach',
    latitude: '-33.5632311',
    longitude: '150.8024693'
    }, 
    {
    suburb: 'Balmain',
    latitude: '-33.8583992',
    longitude: '151.1807353'
    }, 
    {
    suburb: 'Abbotsford',
    latitude: '-33.8505529',
    longitude: '151.129759'
    }, 
    {
    suburb: 'Castle Cove',
    latitude: '-33.7865285',
    longitude: '151.2143187'
    }, 
    {
    suburb: 'North Sydney',
    latitude: '-33.8354519',
    longitude: '151.2083011'
    }, 
    { suburb: 'Berala', latitude: '-33.8753943', longitude: '151.0343253' }, 
    {
    suburb: 'Forest Lodge',
    latitude: '-33.8805556',
    longitude: '151.1783333'
    }, 
    {
    suburb: 'Riverstone',
    latitude: '-33.6797545',
    longitude: '150.8616695'
    }, 
    {
    suburb: 'Sackville',
    latitude: '-33.4971446',
    longitude: '150.8829012'
    }, 
    {
    suburb: 'Bankstown',
    latitude: '-33.9171897',
    longitude: '151.0335881'
    }, 
    {
    suburb: 'Sandringham',
    latitude: '-33.9971236',
    longitude: '151.1400138'
    }, 
    {
    suburb: 'Fairfield',
    latitude: '-33.8728065',
    longitude: '150.9523529'
    }, 
    {
    suburb: 'Sans Souci',
    latitude: '-33.9926292',
    longitude: '151.1337972'
    }, 
    {
    suburb: 'Melrose Park',
    latitude: '-33.8153435',
    longitude: '151.0733298'
    }, 
    {
    suburb: 'Double Bay',
    latitude: '-33.8766373',
    longitude: '151.24245'
    }, 
    {
    suburb: 'Kemps Creek',
    latitude: '-33.8813335',
    longitude: '150.7837238'
    }, 
    { suburb: 'Gordon', latitude: '-33.7553899', longitude: '151.1518099' }, 
    {
    suburb: 'Glenwood',
    latitude: '-33.7331483',
    longitude: '150.928232'
    }, 
    {
    suburb: 'Berkshire Park',
    latitude: '-33.6816667',
    longitude: '150.7844444'
    }, 
    {
    suburb: 'Rooty Hill',
    latitude: '-33.7688649',
    longitude: '150.8411802'
    }, 
    {
    suburb: 'Seven Hills',
    latitude: '-33.7760305',
    longitude: '150.9427044'
    }, 
    {
    suburb: 'Regents Park',
    latitude: '-33.8820048',
    longitude: '151.02569'
    }, 
    {
    suburb: 'Dulwich Hill',
    latitude: '-33.9045849',
    longitude: '151.1386091'
    }, 
    {
    suburb: 'Frenchs Forest',
    latitude: '-33.7479954',
    longitude: '151.2292718'
    }, 
    {
    suburb: 'Banksia',
    latitude: '-33.9448646',
    longitude: '151.1402066'
    }, 
    {
    suburb: 'Petersham',
    latitude: '-33.8945061',
    longitude: '151.1554222'
    }, 
    {
    suburb: 'Emu Plains',
    latitude: '-33.7483333',
    longitude: '150.6677778'
    }, 
    {
    suburb: 'Asquith',
    latitude: '-33.6884076',
    longitude: '151.1078178'
    }, 
    {
    suburb: 'Seaforth',
    latitude: '-33.7910792',
    longitude: '151.2430284'
    }, 
    { suburb: 'Coogee', latitude: '-33.9217004', longitude: '151.2557975' }, 
    {
    suburb: 'East Hills',
    latitude: '-33.960853',
    longitude: '150.9879189'
    }, 
    {
    suburb: 'Brooklyn',
    latitude: '-33.5469129',
    longitude: '151.2265249'
    }, 
    {
    suburb: 'Holsworthy',
    latitude: '-33.9597307',
    longitude: '150.9502719'
    }, 
    {
    suburb: 'Waitara',
    latitude: '-33.7109319',
    longitude: '151.1047986'
    }, 
    {
    suburb: 'Kings Park',
    latitude: '-33.7433333',
    longitude: '150.9086111'
    }, 
    {
    suburb: 'Allawah',
    latitude: '-33.9696934',
    longitude: '151.1145108'
    }, 
    {
    suburb: 'Eschol Park',
    latitude: '-34.0316667',
    longitude: '150.8011111'
    }, 
    {
    suburb: 'Heathcote',
    latitude: '-34.0848266',
    longitude: '151.007392'
    }, 
    {
    suburb: 'Eagle Vale',
    latitude: '-34.0377778',
    longitude: '150.8111111'
    }, 
    { suburb: 'Windsor', latitude: '-33.6055342', longitude: '150.821953' }, 
    {
    suburb: 'East Kurrajong',
    latitude: '-33.515',
    longitude: '150.7677778'
    }, 
    {
    suburb: 'Wolli Creek',
    latitude: '-33.9285225',
    longitude: '151.1539888'
    }, 
    {
    suburb: 'Claremont Meadows',
    latitude: '-33.7691667',
    longitude: '150.7483333'
    }, 
    {
    suburb: 'Shalvey',
    latitude: '-33.7277778',
    longitude: '150.8066667'
    }, 
    {
    suburb: 'Emerton',
    latitude: '-33.7477024',
    longitude: '150.8043608'
    }, 
    {
    suburb: 'Wallacia',
    latitude: '-33.8653337',
    longitude: '150.6409771'
    }, 
    {
    suburb: 'Sadleir',
    latitude: '-33.9169444',
    longitude: '150.8902778'
    }, 
    {
    suburb: 'Silverwater',
    latitude: '-33.834881',
    longitude: '151.0471218'
    }, 
    {
    suburb: 'Eastern Creek',
    latitude: '-33.8059423',
    longitude: '150.849956'
    }, 
    { suburb: 'Cromer', latitude: '-33.7385227', longitude: '151.2762995' }, 
    {
    suburb: 'Yarrawarrah',
    latitude: '-34.056681',
    longitude: '151.0308884'
    }, 
    {
    suburb: 'Condell Park',
    latitude: '-33.9227852',
    longitude: '151.0113144'
    }, 
    {
    suburb: 'Wentworth Point',
    latitude: '-33.8268958',
    longitude: '151.0774351'
    }, 
    { suburb: 'Westleigh', latitude: '-33.715', longitude: '151.0677778' }, 
    {
    suburb: 'Ropes Crossing',
    latitude: '-33.7291948',
    longitude: '150.7788889'
    }, 
    {
    suburb: 'Roselands',
    latitude: '-33.9339943',
    longitude: '151.0765121'
    }, 
    {
    suburb: 'Yarramundi',
    latitude: '-33.6318172',
    longitude: '150.6679956'
    }, 
    {
    suburb: 'Russell Lea',
    latitude: '-33.8585361',
    longitude: '151.1416007'
    }, 
    {
    suburb: 'Tennyson Point',
    latitude: '-33.8313822',
    longitude: '151.116944'
    }, 
    {
    suburb: 'Roseville Chase',
    latitude: '-33.7747222',
    longitude: '151.2002778'
    }, 
    { suburb: 'Cornwallis', latitude: '-33.59', longitude: '150.8094444' }, 
    {
    suburb: 'Woodpark',
    latitude: '-33.8413833',
    longitude: '150.9602776'
    }, 
    {
    suburb: 'Pitt Town Bottoms',
    latitude: '-33.5872298',
    longitude: '150.8449827'
    }, 
    {
    suburb: 'Croydon Park',
    latitude: '-33.8975316',
    longitude: '151.1024641'
    }, 
    {
    suburb: 'Yagoona',
    latitude: '-33.9037907',
    longitude: '151.0176677'
    }, 
    {
    suburb: 'Tregear',
    latitude: '-33.7486957',
    longitude: '150.7957569'
    }, 
    {
    suburb: 'Wattle Grove',
    latitude: '-33.9564013',
    longitude: '150.9405862'
    }, 
    {
    suburb: 'La Perouse',
    latitude: '-33.9887589',
    longitude: '151.2318011'
    }, 
    {
    suburb: 'Rydalmere',
    latitude: '-33.8117088',
    longitude: '151.0411702'
    }, 
    {
    suburb: 'Port Botany',
    latitude: '-33.9734678',
    longitude: '151.2178519'
    }, 
    {
    suburb: 'Taren Point',
    latitude: '-34.0200181',
    longitude: '151.1226751'
    }, 
    {
    suburb: 'Penshurst',
    latitude: '-33.9648292',
    longitude: '151.0849525'
    }, 
    { suburb: 'Ruse', latitude: '-34.0733174', longitude: '150.8463325' }, 
    {
    suburb: 'West Ryde',
    latitude: '-33.8094444',
    longitude: '151.0858333'
    }, 
    {
    suburb: 'Rose Bay',
    latitude: '-33.8741644',
    longitude: '151.265471'
    }, 
    {
    suburb: 'Whale Beach',
    latitude: '-33.6096795',
    longitude: '151.3309449'
    }, 
    {
    suburb: 'Werrington',
    latitude: '-33.758666',
    longitude: '150.7579617'
    }, 
    {
    suburb: 'Kyle Bay',
    latitude: '-33.9897577',
    longitude: '151.0992166'
    }, 
    {
    suburb: 'Wahroonga',
    latitude: '-33.7183413',
    longitude: '151.1174435'
    }, 
    {
    suburb: 'Rouse Hill',
    latitude: '-33.6774941',
    longitude: '150.9160933'
    }, 
    {
    suburb: 'Constitution Hill',
    latitude: '-33.7952082',
    longitude: '150.9727813'
    }, 
    {
    suburb: 'Rossmore',
    latitude: '-33.9483365',
    longitude: '150.7677747'
    }, 
    {
    suburb: 'Strathfield',
    latitude: '-33.8791285',
    longitude: '151.0811758'
    }, 
    {
    suburb: 'Rosehill',
    latitude: '-33.8263889',
    longitude: '151.0305556'
    }, 
    {
    suburb: 'Sydney Olympic Park',
    latitude: '-33.8387399',
    longitude: '151.06909245693873'
    }, 
    {
    suburb: 'Vineyard',
    latitude: '-33.6483333',
    longitude: '150.8677778'
    }, 
    { suburb: 'Cawdor', latitude: '-34.0625115', longitude: '150.6865962' }, 
    {
    suburb: 'Sandy Point',
    latitude: '-33.975407',
    longitude: '150.9939195'
    }, 
    {
    suburb: 'Turramurra',
    latitude: '-33.7328828',
    longitude: '151.128541'
    }, 
    {
    suburb: 'Ellis Lane',
    latitude: '-34.034956',
    longitude: '150.6732584'
    }, 
    {
    suburb: 'Waverley',
    latitude: '-33.9019365',
    longitude: '151.2558816'
    }, 
    {
    suburb: 'Cobbitty',
    latitude: '-34.0144148',
    longitude: '150.724147'
    }, 
    {
    suburb: 'Sydenham',
    latitude: '-33.9147428',
    longitude: '151.1661069'
    }, 
    {
    suburb: 'St Andrews',
    latitude: '-34.0208333',
    longitude: '150.8305556'
    }, 
    { suburb: 'Como', latitude: '-34.0032179', longitude: '151.0631257' }, 
    {
    suburb: 'Roseville',
    latitude: '-33.784545',
    longitude: '151.1778441'
    }, 
    {
    suburb: 'Central Business District',
    latitude: '-33.968761650000005',
    longitude: '151.06124728861968'
    }, 
    {
    suburb: 'Gledswood Hills',
    latitude: '-34.0102826',
    longitude: '150.78002'
    }, 
    {
    suburb: 'Scotland Island',
    latitude: '-33.8351486',
    longitude: '151.2499787'
    }, 
    { suburb: 'Glebe', latitude: '-33.8777782', longitude: '151.1862377' }, 
    {
    suburb: 'Homebush West',
    latitude: '-33.8619802',
    longitude: '151.0665026'
    }, 
    {
    suburb: 'Huntleys Point',
    latitude: '-33.8422131',
    longitude: '151.1419664'
    }, 
    {
    suburb: 'Kensington',
    latitude: '-33.9117191',
    longitude: '151.2195058'
    }, 
    {
    suburb: 'Horsley Park',
    latitude: '-33.8387723',
    longitude: '150.8484629'
    }, 
    {
    suburb: 'Hornsby Heights',
    latitude: '-33.6630602',
    longitude: '151.1021935'
    }, 
    {
    suburb: 'Middle Cove',
    latitude: '-33.7927992',
    longitude: '151.2112471'
    }, 
    {
    suburb: 'Woodbine',
    latitude: '-34.0468369',
    longitude: '150.8242711'
    }, 
    {
    suburb: 'Kellyville Ridge',
    latitude: '-33.7025',
    longitude: '150.9186111'
    }, 
    {
    suburb: 'Northbridge',
    latitude: '-33.8111111',
    longitude: '151.2175'
    }, 
    {
    suburb: 'Huntingwood',
    latitude: '-33.797973',
    longitude: '150.881592'
    }, 
    {
    suburb: 'Laughtondale',
    latitude: '-33.4224715',
    longitude: '151.0267219'
    }, 
    {
    suburb: 'Mona Vale',
    latitude: '-33.6769931',
    longitude: '151.3029577'
    }, 
    {
    suburb: 'Oatlands',
    latitude: '-33.7973385',
    longitude: '151.0256526'
    }, 
    {
    suburb: 'Lane Cove',
    latitude: '-33.8146633',
    longitude: '151.1699224'
    }, 
    { suburb: 'St Ives', latitude: '-33.7292063', longitude: '151.159396' }, 
    { suburb: 'Ultimo', latitude: '-33.8794728', longitude: '151.1984346' }, 
    {
    suburb: 'Plumpton',
    latitude: '-33.7566667',
    longitude: '150.8427778'
    }, 
    {
    suburb: 'Riverview',
    latitude: '-33.823207',
    longitude: '151.1600134'
    }, 
    {
    suburb: 'Wareemba',
    latitude: '-33.8575001',
    longitude: '151.1319513'
    }, 
    {
    suburb: 'Rodd Point',
    latitude: '-33.8658359',
    longitude: '151.143583'
    }, 
    {
    suburb: 'South Granville',
    latitude: '-33.8577778',
    longitude: '151.0105556'
    }, 
    { suburb: 'Oatley', latitude: '-33.9841882', longitude: '151.0743856' }, 
    {
    suburb: 'Middle Dural',
    latitude: '-33.6367412',
    longitude: '151.0127369'
    }, 
    {
    suburb: 'Oran Park',
    latitude: '-33.9948805',
    longitude: '150.7402568'
    }, 
    {
    suburb: 'Punchbowl',
    latitude: '-33.928717',
    longitude: '151.0522591'
    }, 
    {
    suburb: 'Phillip Bay',
    latitude: '-33.9787887',
    longitude: '151.2327229'
    }, 
    {
    suburb: 'Prairiewood',
    latitude: '-33.8631743',
    longitude: '150.9055074'
    }, 
    {
    suburb: 'Kyeemagh',
    latitude: '-33.9492195',
    longitude: '151.1607373'
    }, 
    {
    suburb: 'Darling Point',
    latitude: '-33.8730723',
    longitude: '151.2376378'
    }, 
    {
    suburb: 'Hurstville Grove',
    latitude: '-33.9775526',
    longitude: '151.0929579'
    }, 
    {
    suburb: 'Kurnell',
    latitude: '-34.0222379',
    longitude: '151.1880555'
    }, 
    {
    suburb: 'Kurrajong',
    latitude: '-33.5532572',
    longitude: '150.6677058'
    }, 
    { suburb: 'Mosman', latitude: '-33.8301355', longitude: '151.2447663' }, 
    {
    suburb: 'Northwood',
    latitude: '-33.827964',
    longitude: '151.1782693'
    }, 
    {
    suburb: 'Lane Cove West',
    latitude: '-33.8119396',
    longitude: '151.150078'
    }, 
    { suburb: 'Raby', latitude: '-34.0233333', longitude: '150.8177778' }, 
    {
    suburb: 'Vaucluse',
    latitude: '-33.8558564',
    longitude: '151.2761018'
    }, 
    {
    suburb: 'Ku-ring-gai Chase',
    latitude: '-33.6502778',
    longitude: '151.2008333'
    }, 
    {
    suburb: 'Wetherill Park',
    latitude: '-33.8483333',
    longitude: '150.9011111'
    }, 
    {
    suburb: 'Bilgola Beach',
    latitude: '-33.6443165',
    longitude: '151.324484'
    }, 
    {
    suburb: 'Ramsgate Beach',
    latitude: '-33.9824013',
    longitude: '151.1461479'
    }, 
    {
    suburb: 'Ramsgate',
    latitude: '-33.982713',
    longitude: '151.1399314'
    }, 
    {
    suburb: 'North Willoughby',
    latitude: '-33.7941912',
    longitude: '151.2004163'
    }, 
    {
    suburb: 'South Wentworthville',
    latitude: '-33.82134',
    longitude: '150.9687481'
    }, 
    {
    suburb: 'Prospect',
    latitude: '-33.8002421',
    longitude: '150.9218377'
    }, 
    {
    suburb: 'Orchard Hills',
    latitude: '-33.7816667',
    longitude: '150.7177778'
    }, 
    { suburb: 'Bexley', latitude: '-33.9523543', longitude: '151.1181427' }, 
    {
    suburb: 'North Parramatta',
    latitude: '-33.7952747',
    longitude: '151.0116649'
    }, 
    {
    suburb: 'Sylvania Waters',
    latitude: '-34.0185844',
    longitude: '151.11228'
    }, 
    {
    suburb: 'South Windsor',
    latitude: '-33.6302778',
    longitude: '150.8041667'
    }, 
    {
    suburb: 'Varroville',
    latitude: '-34.0066667',
    longitude: '150.8177778'
    }, 
    {
    suburb: 'Woronora',
    latitude: '-34.1164957',
    longitude: '150.9522795'
    }, 
    {
    suburb: 'Pyrmont',
    latitude: '-33.8692145',
    longitude: '151.1923633'
    }, 
    {
    suburb: 'Potts Point',
    latitude: '-33.8670797',
    longitude: '151.2259967'
    }, 
    {
    suburb: 'Lidcombe',
    latitude: '-33.8638146',
    longitude: '151.0452428'
    }, 
    {
    suburb: 'Mount Annan',
    latitude: '-34.0782799',
    longitude: '150.7632296'
    }, 
    {
    suburb: 'Camellia',
    latitude: '-33.8197799',
    longitude: '151.0346488'
    }, 
    {
    suburb: 'The Rocks',
    latitude: '-33.859992',
    longitude: '151.2083216'
    }, 
    {
    suburb: 'Great Mackerel Beach',
    latitude: '-33.591505',
    longitude: '151.2988852'
    }, 
    { suburb: 'Epping', latitude: '-33.7718546', longitude: '151.0745367' }, 
    {
    suburb: 'Long Point',
    latitude: '-34.0156584',
    longitude: '150.8983181'
    }, 
    {
    suburb: 'Palm Beach',
    latitude: '-33.6005473',
    longitude: '151.3231536'
    }, 
    {
    suburb: 'Milsons Point',
    latitude: '-33.8471255',
    longitude: '151.2115234'
    }, 
    {
    suburb: 'Mount Colah',
    latitude: '-33.6719686',
    longitude: '151.1145291'
    }, 
    {
    suburb: 'Blairmount',
    latitude: '-34.0483333',
    longitude: '150.7927778'
    }, 
    {
    suburb: 'Clarendon',
    latitude: '-33.6105511',
    longitude: '150.7888909'
    }, 
    { suburb: 'Kogarah', latitude: '-33.968226', longitude: '151.1354509' }, 
    {
    suburb: 'Riverwood',
    latitude: '-33.9472222',
    longitude: '151.0530556'
    }, 
    {
    suburb: 'Haymarket',
    latitude: '-33.87849425',
    longitude: '151.2040733935'
    }, 
    {
    suburb: 'Caringbah South',
    latitude: '-34.0554491',
    longitude: '151.1205937'
    }, 
    {
    suburb: 'Canoelands',
    latitude: '-33.4990952',
    longitude: '151.0807415'
    }, 
    {
    suburb: 'Chipping Norton',
    latitude: '-33.919687',
    longitude: '150.9630711'
    }, 
    {
    suburb: 'Camden South',
    latitude: '-34.0829554',
    longitude: '150.6966472'
    }, 
    {
    suburb: 'Eastgardens',
    latitude: '-33.9447657',
    longitude: '151.2250921'
    }, 
    {
    suburb: 'North St Ives',
    latitude: '-33.715',
    longitude: '151.1677778'
    }, 
    {
    suburb: 'Clareville',
    latitude: '-33.6320071',
    longitude: '151.3145323'
    }, 
    {
    suburb: 'Waterfall',
    latitude: '-34.1347694',
    longitude: '150.9931332'
    }, 
    {
    suburb: 'Richards',
    latitude: '-33.6582477',
    longitude: '150.8455771'
    }, 
    {
    suburb: 'Grasmere',
    latitude: '-34.0579584',
    longitude: '150.6707384'
    }, 
    {
    suburb: 'Baulkham Hills',
    latitude: '-33.7611198',
    longitude: '150.9914041'
    }, 
    { suburb: 'Sefton', latitude: '-33.8873088', longitude: '151.0106256' }, 
    {
    suburb: 'Londonderry',
    latitude: '-33.6483333',
    longitude: '150.7344444'
    }, 
    {
    suburb: 'The Slopes',
    latitude: '-33.5342749',
    longitude: '150.7041667'
    }, 
    {
    suburb: 'Pitt Town',
    latitude: '-33.5846533',
    longitude: '150.8709805'
    }, 
    { suburb: 'Box Hill', latitude: '-33.6425', longitude: '150.8988889' }, 
    {
    suburb: 'Merrylands West',
    latitude: '-33.8359501',
    longitude: '150.9681261'
    }, 
    {
    suburb: 'Bonnet Bay',
    latitude: '-34.0101087',
    longitude: '151.053572'
    }, 
    {
    suburb: 'Emu Heights',
    latitude: '-33.7372235',
    longitude: '150.6511051'
    }, 
    {
    suburb: 'Malabar',
    latitude: '-33.9629779',
    longitude: '151.2480171'
    }, 
    { suburb: 'Eastwood', latitude: '-33.79', longitude: '151.0844444' }, 
    {
    suburb: 'Newport',
    latitude: '-33.6591061',
    longitude: '151.3164331'
    }, 
    {
    suburb: 'Macquarie Fields',
    latitude: '-33.9904477',
    longitude: '150.8849303'
    }, 
    {
    suburb: 'Menangle Park',
    latitude: '-34.1034092',
    longitude: '150.7468493'
    }, 
    {
    suburb: 'Beecroft',
    latitude: '-33.7497631',
    longitude: '151.0657475'
    }, 
    {
    suburb: 'Wiley Park',
    latitude: '-33.9230556',
    longitude: '151.0677778'
    }, 
    {
    suburb: 'St Marys',
    latitude: '-33.7650204',
    longitude: '150.7677778'
    }, 
    {
    suburb: 'Enfield',
    latitude: '-33.8900628',
    longitude: '151.0959145'
    }, 
    {
    suburb: 'Edmondson Park',
    latitude: '-33.9628336',
    longitude: '150.8563294'
    }, 
    {
    suburb: 'Carramar',
    latitude: '-33.8838889',
    longitude: '150.9636111'
    }, 
    {
    suburb: 'Caringbah',
    latitude: '-34.0354477',
    longitude: '151.1248018'
    }, 
    {
    suburb: 'Beverly Hills',
    latitude: '-33.9497444',
    longitude: '151.0817342'
    }, 
    {
    suburb: 'Pleasure Point',
    latitude: '-33.9725',
    longitude: '150.9877778'
    }, 
    {
    suburb: 'Berowra Creek',
    latitude: '-33.6272438',
    longitude: '151.1145508'
    }, 
    {
    suburb: 'Stanmore',
    latitude: '-33.8936689',
    longitude: '151.1656456'
    }, 
    {
    suburb: 'Redfern',
    latitude: '-33.8931044',
    longitude: '151.2040292'
    }, 
    {
    suburb: 'Turrella',
    latitude: '-33.9302706',
    longitude: '151.1409234'
    }, 
    {
    suburb: 'Kingswood Park',
    latitude: '-33.7613772',
    longitude: '150.7213283'
    }, 
    {
    suburb: 'Kurrajong Hills',
    latitude: '-33.5420672',
    longitude: '150.6483995'
    }, 
    {
    suburb: 'Heckenberg',
    latitude: '-33.9077778',
    longitude: '150.8913889'
    }, 
    {
    suburb: 'Kirribilli',
    latitude: '-33.8476659',
    longitude: '151.2158138'
    }, 
    {
    suburb: 'Pemulwuy',
    latitude: '-33.8164641',
    longitude: '150.9284441'
    }, 
    {
    suburb: 'Willoughby East',
    latitude: '-33.7991667',
    longitude: '151.2061111'
    }, 
    {
    suburb: 'North Wahroonga',
    latitude: '-33.7024148',
    longitude: '151.1283034'
    }, 
    {
    suburb: 'Kings Langley',
    latitude: '-33.7505506',
    longitude: '150.9372174'
    }, 
    {
    suburb: 'Mortlake',
    latitude: '-33.8410416',
    longitude: '151.1061114'
    }, 
    {
    suburb: 'Kareela',
    latitude: '-34.0157553',
    longitude: '151.0812662'
    }, 
    {
    suburb: 'Hinchinbrook',
    latitude: '-33.9159661',
    longitude: '150.8645957'
    }, 
    {
    suburb: 'Hebersham',
    latitude: '-33.7455739',
    longitude: '150.8253839'
    }, 
    {
    suburb: 'Milsons Passage',
    latitude: '-33.5157613',
    longitude: '151.1768241'
    }, 
    {
    suburb: 'Moorebank',
    latitude: '-33.9332633',
    longitude: '150.949686'
    }, 
    {
    suburb: 'North Bondi',
    latitude: '-33.882351',
    longitude: '151.2768611'
    }, 
    {
    suburb: 'Longueville',
    latitude: '-33.8291667',
    longitude: '151.1686111'
    }, 
    {
    suburb: 'Kenthurst',
    latitude: '-33.6436678',
    longitude: '150.9761716'
    }, 
    {
    suburb: 'Lansdowne',
    latitude: '-33.8948687',
    longitude: '150.9740821'
    }, 
    {
    suburb: 'South Maroota',
    latitude: '-33.5127778',
    longitude: '150.9522222'
    }, 
    { suburb: 'Bidwill', latitude: '-33.7319476', longitude: '150.823408' }, 
    {
    suburb: 'Shanes Park',
    latitude: '-33.7075',
    longitude: '150.7916667'
    }, 
    {
    suburb: 'Colebee',
    latitude: '-33.7270077',
    longitude: '150.8521783'
    }, 
    {
    suburb: 'Peakhurst',
    latitude: '-33.9616444',
    longitude: '151.0590667'
    }, 
    {
    suburb: 'North Curl Curl',
    latitude: '-33.7630002',
    longitude: '151.2904773'
    }, 
    {
    suburb: 'Terrey Hills',
    latitude: '-33.6918185',
    longitude: '151.2205908'
    }, 
    {
    suburb: 'Old Guildford',
    latitude: '-33.8636111',
    longitude: '150.9844444'
    }, 
    {
    suburb: 'Fairfield East',
    latitude: '-33.8747423',
    longitude: '150.9721298'
    }, 
    {
    suburb: 'Bickley Vale',
    latitude: '-34.0789563',
    longitude: '150.6617103'
    }, 
    {
    suburb: 'Old Toongabbie',
    latitude: '-33.7858548',
    longitude: '150.9699533'
    }, 
    {
    suburb: 'Glenorie',
    latitude: '-33.5658885',
    longitude: '150.9927835'
    }, 
    {
    suburb: 'Bossley Park',
    latitude: '-33.8622222',
    longitude: '150.8844444'
    }, 
    {
    suburb: 'Holroyd',
    latitude: '-33.8297155',
    longitude: '150.9974898'
    }, 
    {
    suburb: 'Mulgrave',
    latitude: '-33.627219',
    longitude: '150.8316603'
    }, 
    {
    suburb: 'Five Dock',
    latitude: '-33.8690024',
    longitude: '151.1290231'
    }, 
    {
    suburb: 'Potts Hill',
    latitude: '-33.8922191',
    longitude: '151.0329222'
    }, 
    {
    suburb: 'Northmead',
    latitude: '-33.7844423',
    longitude: '150.9983289'
    }, 
    {
    suburb: 'Naremburn',
    latitude: '-33.8172735',
    longitude: '151.2012204'
    }, 
    {
    suburb: 'Stanhope Gardens',
    latitude: '-33.710284',
    longitude: '150.9258277'
    }, 
    {
    suburb: 'Quakers Hill',
    latitude: '-33.7344444',
    longitude: '150.8788889'
    }, 
    {
    suburb: 'Westmead',
    latitude: '-33.8076498',
    longitude: '150.9877265'
    }, 
    {
    suburb: 'Lavender Bay',
    latitude: '-33.8432002',
    longitude: '151.2074155'
    }, 
    {
    suburb: 'Strathfield South',
    latitude: '-33.8966667',
    longitude: '151.0788889'
    }, 
    {
    suburb: 'Picnic Point',
    latitude: '-33.9709556',
    longitude: '151.0072387'
    }, 
    {
    suburb: 'Spring Farm',
    latitude: '-34.0694444',
    longitude: '150.7272284'
    }, 
    {
    suburb: 'The Ponds',
    latitude: '-33.7066667',
    longitude: '150.9091667'
    }, 
    {
    suburb: 'North St Marys',
    latitude: '-33.7544444',
    longitude: '150.7858333'
    }, 
    {
    suburb: 'Pennant Hills',
    latitude: '-33.7384663',
    longitude: '151.0716639'
    }, 
    {
    suburb: 'Thornleigh',
    latitude: '-33.7236616',
    longitude: '151.0809407'
    }, 
    {
    suburb: 'Lane Cove North',
    latitude: '-33.8054674',
    longitude: '151.1632084'
    }, 
    { suburb: 'Rhodes', latitude: '-33.8290589', longitude: '151.0873578' }, 
    {
    suburb: 'Telopea',
    latitude: '-33.7939218',
    longitude: '151.0409442'
    }, 
    {
    suburb: 'Oxford Falls',
    latitude: '-33.7371005',
    longitude: '151.2438186'
    }, 
    { suburb: 'Llandilo', latitude: '-33.715', longitude: '150.7511111' }, 
    {
    suburb: 'Kingsgrove',
    latitude: '-33.9371844',
    longitude: '151.0996523'
    }, 
    {
    suburb: 'Oyster Bay',
    latitude: '-34.0032775',
    longitude: '151.0812354'
    }, 
    {
    suburb: 'Blair Athol',
    latitude: '-34.0627778',
    longitude: '150.7997222'
    }, 
    { suburb: 'Tempe', latitude: '-33.9247552', longitude: '151.1647529' }, 
    {
    suburb: 'Panania',
    latitude: '-33.9532567',
    longitude: '150.9968874'
    }, 
    {
    suburb: 'Gymea Bay',
    latitude: '-34.0522918',
    longitude: '151.0970783'
    }, 
    {
    suburb: 'Kirrawee',
    latitude: '-34.0344781',
    longitude: '151.0726428'
    }, 
    { suburb: 'Minto', latitude: '-34.0316667', longitude: '150.8511111' }, 
    {
    suburb: 'Toongabbie',
    latitude: '-33.7866894',
    longitude: '150.9526498'
    }, 
    {
    suburb: 'St Leonards',
    latitude: '-33.8225666',
    longitude: '151.1923402'
    }, 
    {
    suburb: 'Penrith',
    latitude: '-33.7510792',
    longitude: '150.6941684'
    }, 
    {
    suburb: 'Birrong',
    latitude: '-33.8918622',
    longitude: '151.0201957'
    }, 
    {
    suburb: 'Queens Park',
    latitude: '-33.8991667',
    longitude: '151.2472222'
    }, 
    {
    suburb: 'Kingswood',
    latitude: '-33.7613772',
    longitude: '150.7213283'
    }, 
    { suburb: 'Pymble', latitude: '-33.7450185', longitude: '151.1424708' }, 
    {
    suburb: 'Lakemba',
    latitude: '-33.9196311',
    longitude: '151.0749236'
    }, 
    {
    suburb: 'Lindfield',
    latitude: '-33.775698',
    longitude: '151.1688652'
    }, 
    {
    suburb: 'Bondi Beach',
    latitude: '-33.8906977',
    longitude: '151.2724119'
    }, 
    {
    suburb: 'Little Bay',
    latitude: '-33.9834309',
    longitude: '151.2470329'
    }, 
    { suburb: 'Eveleigh', latitude: '-33.895', longitude: '151.1913889' }, 
    {
    suburb: 'Kingsford',
    latitude: '-33.9215922',
    longitude: '151.2272307'
    }, 
    {
    suburb: 'Jannali',
    latitude: '-34.0163159',
    longitude: '151.0658096'
    }, 
    {
    suburb: 'Parramatta',
    latitude: '-33.8175113',
    longitude: '151.0054009'
    }, 
    { suburb: 'Lurnea', latitude: '-33.9358333', longitude: '150.8972222' }, 
    {
    suburb: 'West Killara',
    latitude: '-33.7564715',
    longitude: '151.17446304415085'
    }, 
    {
    suburb: 'Green Valley',
    latitude: '-33.9024601',
    longitude: '150.8674187'
    }, 
    {
    suburb: 'East Gordon',
    latitude: '-33.7553899',
    longitude: '151.1518099'
    }, 
    {
    suburb: 'Newtown',
    latitude: '-33.8961132',
    longitude: '151.1801893'
    }, 
    {
    suburb: 'Merrylands',
    latitude: '-33.8350765',
    longitude: '150.9860379'
    }, 
    {
    suburb: 'Liverpool',
    latitude: '-33.9198252',
    longitude: '150.92566'
    }, 
    { suburb: 'Henley', latitude: '-33.8423815', longitude: '151.1360364' }, 
    {
    suburb: 'Kellyville',
    latitude: '-33.7158272',
    longitude: '150.954993'
    }, 
    {
    suburb: 'Girraween',
    latitude: '-33.7983305',
    longitude: '150.9427707'
    }, 
    {
    suburb: 'Woolloomooloo',
    latitude: '-33.8718758',
    longitude: '151.2192218'
    }, 
    {
    suburb: 'Haberfield',
    latitude: '-33.8794325',
    longitude: '151.1391605'
    }, 
    {
    suburb: 'Yennora',
    latitude: '-33.8646287',
    longitude: '150.9711499'
    }, 
    {
    suburb: 'Erskineville',
    latitude: '-33.9021718',
    longitude: '151.1859881'
    }, 
    { suburb: 'Loftus', latitude: '-34.0434357', longitude: '151.0504559' }, 
    {
    suburb: 'Leppington',
    latitude: '-33.9543857',
    longitude: '150.80806378606871'
    }, 
    {
    suburb: 'Ingleside',
    latitude: '-33.6828279',
    longitude: '151.261556'
    }, 
    {
    suburb: 'Grantham Farm',
    latitude: '-33.6630125',
    longitude: '150.8726952'
    }, 
    {
    suburb: 'Horningsea Park',
    latitude: '-33.9460804',
    longitude: '150.8432271'
    }, 
    {
    suburb: 'Zetland',
    latitude: '-33.9076623',
    longitude: '151.2082183'
    }, 
    {
    suburb: 'Glendenning',
    latitude: '-33.7483333',
    longitude: '150.8511111'
    }, 
    {
    suburb: 'Huntleys Cove',
    latitude: '-33.8383333',
    longitude: '151.1375'
    }, 
    {
    suburb: 'Glossodia',
    latitude: '-33.5334431',
    longitude: '150.7853962'
    }, 
    {
    suburb: 'Kentlyn',
    latitude: '-34.0591667',
    longitude: '150.8697222'
    }, 
    {
    suburb: 'Hornsby',
    latitude: '-33.7040253',
    longitude: '151.1005847'
    }, 
    {
    suburb: 'Leumeah',
    latitude: '-34.0543113',
    longitude: '150.8371354'
    }, 
    {
    suburb: 'Gregory Hills',
    latitude: '-34.0276672',
    longitude: '150.7761923'
    }, 
    {
    suburb: 'Mount Vernon',
    latitude: '-33.8566667',
    longitude: '150.8094444'
    }, 
    {
    suburb: 'Maroubra',
    latitude: '-33.9453441',
    longitude: '151.2456824'
    }, 
    {
    suburb: 'South Turramurra',
    latitude: '-33.7510951',
    longitude: '151.1084667'
    }, 
    {
    suburb: 'Greenfield Park',
    latitude: '-33.8752778',
    longitude: '150.8919444'
    }, 
    { suburb: 'Menai', latitude: '-34.014811', longitude: '151.0164823' }, 
    {
    suburb: 'North Turramurra',
    latitude: '-33.6911595',
    longitude: '151.1519372'
    }, 
    {
    suburb: 'Queenscliff',
    latitude: '-33.7823916',
    longitude: '151.2854011'
    }, 
    {
    suburb: 'North Rocks',
    latitude: '-33.7713052',
    longitude: '151.020996'
    }, 
    {
    suburb: 'Wakeley',
    latitude: '-33.8736111',
    longitude: '150.9086111'
    }, 
    {
    suburb: 'North Richmond',
    latitude: '-33.5750113',
    longitude: '150.7056842'
    }, 
    {
    suburb: 'Milperra',
    latitude: '-33.9388237',
    longitude: '150.9846424'
    }, 
    {
    suburb: 'Dean Park',
    latitude: '-33.7328296',
    longitude: '150.852577'
    }, 
    {
    suburb: 'Richmond Lowlands',
    latitude: '-33.5652',
    longitude: '150.7596'
    }, 
    {
    suburb: 'Killarney Heights',
    latitude: '-33.7751234',
    longitude: '151.2181136'
    }, 
    {
    suburb: 'Tamarama',
    latitude: '-33.8987452',
    longitude: '151.2710753'
    }, 
    {
    suburb: 'Middleton Grange',
    latitude: '-33.9147154',
    longitude: '150.8423882'
    }, 
    {
    suburb: 'Duffys Forest',
    latitude: '-33.6733265',
    longitude: '151.1927796'
    }, 
    {
    suburb: 'Hassall Grove',
    latitude: '-33.7316667',
    longitude: '150.8344444'
    }, 
    {
    suburb: 'Nirimba Fields',
    latitude: '-33.7180087',
    longitude: '150.8714368'
    }, 
    {
    suburb: 'Georges Hall',
    latitude: '-33.9101113',
    longitude: '150.9879924'
    }, 
    {
    suburb: 'Narraweena',
    latitude: '-33.7502066',
    longitude: '151.2741566'
    }, 
    {
    suburb: 'Leichhardt',
    latitude: '-33.8819328',
    longitude: '151.155867'
    }, 
    {
    suburb: 'St Helens Park',
    latitude: '-34.1066667',
    longitude: '150.8094444'
    }, 
    {
    suburb: 'Millers Point',
    latitude: '-33.8599129',
    longitude: '151.2041274'
    }, 
    {
    suburb: 'Edensor Park',
    latitude: '-33.8802849',
    longitude: '150.8762602'
    }, 
    {
    suburb: 'Fairfield West',
    latitude: '-33.8689308',
    longitude: '150.9243383'
    }, 
    {
    suburb: 'Lucas Heights',
    latitude: '-34.0400221',
    longitude: '150.9986588'
    }, 
    {
    suburb: 'Revesby Heights',
    latitude: '-33.9683842',
    longitude: '151.0189891'
    }, 
    {
    suburb: 'Breakfast Point',
    latitude: '-33.8422769',
    longitude: '151.1111054'
    }, 
    {
    suburb: 'Bellevue Hill',
    latitude: '-33.8797123',
    longitude: '151.2561988'
    }, 
    {
    suburb: 'North Balgowlah',
    latitude: '-33.7881457',
    longitude: '151.2507285'
    }, 
    {
    suburb: 'South Hurstville',
    latitude: '-33.9777213',
    longitude: '151.1060554'
    }, 
    {
    suburb: 'Wentworthville',
    latitude: '-33.8066667',
    longitude: '150.9677778'
    }, 
    {
    suburb: 'Richmond',
    latitude: '-33.6009721',
    longitude: '150.7496405'
    }, 
    {
    suburb: 'Regentville',
    latitude: '-33.7708351',
    longitude: '150.6616622'
    }, 
    {
    suburb: 'Port Hacking',
    latitude: '-34.06586',
    longitude: '151.10771184019293'
    }, 
    { suburb: 'Bondi', latitude: '-33.8930556', longitude: '151.2633333' }, 
    {
    suburb: 'St Peters',
    latitude: '-33.9159472',
    longitude: '151.176332'
    }, 
    {
    suburb: 'McGraths Hill',
    latitude: '-33.615',
    longitude: '150.8344444'
    }, 
    {
    suburb: 'Marsden Park',
    latitude: '-33.6956552',
    longitude: '150.8147975'
    }, 
    {
    suburb: 'North Epping',
    latitude: '-33.7586111',
    longitude: '151.0941667'
    }, 
    {
    suburb: 'Revesby',
    latitude: '-33.9436876',
    longitude: '151.0137191'
    }, 
    {
    suburb: 'Tallawong',
    latitude: '-33.6903267',
    longitude: '150.886121'
    }, 
    {
    suburb: 'Bilgola Plateau',
    latitude: '-33.6438092',
    longitude: '151.315858'
    }, 
    {
    suburb: 'Campbelltown',
    latitude: '-34.0636914',
    longitude: '150.8206159'
    }, 
    {
    suburb: 'Waverton',
    latitude: '-33.8375313',
    longitude: '151.1973535'
    }, 
    {
    suburb: 'Doonside',
    latitude: '-33.7549501',
    longitude: '150.8685985'
    }, 
    {
    suburb: 'Granville',
    latitude: '-33.8345097',
    longitude: '151.0060111'
    }, 
    { suburb: 'Glen Alpine', latitude: '-34.09', longitude: '150.7844444' }, 
    {
    suburb: 'Glenfield',
    latitude: '-33.9722422',
    longitude: '150.8930882'
    }, 
    {
    suburb: 'Guildford',
    latitude: '-33.8561049',
    longitude: '150.9939232'
    }, 
    {
    suburb: 'Canley Vale',
    latitude: '-33.8871356',
    longitude: '150.9462342'
    }, 
    {
    suburb: 'Mount Pritchard',
    latitude: '-33.9027189',
    longitude: '150.9031488'
    }, 
    {
    suburb: 'Forest Glen',
    latitude: '-33.5483333',
    longitude: '151.0177778'
    }, 
    {
    suburb: 'Blacktown',
    latitude: '-33.7739882',
    longitude: '150.9036186'
    }, 
    {
    suburb: 'Randwick',
    latitude: '-33.914121',
    longitude: '151.2410046'
    }, 
    {
    suburb: 'Leets Vale',
    latitude: '-33.4316667',
    longitude: '150.9511111'
    }, 
    {
    suburb: 'Woollahra',
    latitude: '-33.8857968',
    longitude: '151.2440867'
    }, 
    {
    suburb: 'Macquarie Links',
    latitude: '-33.9816667',
    longitude: '150.8733333'
    }, 
    {
    suburb: 'Pagewood',
    latitude: '-33.9390664',
    longitude: '151.2199363'
    }, 
    { suburb: 'Mulgoa', latitude: '-33.8371562', longitude: '150.6504013' }, 
    {
    suburb: 'Maianbar',
    latitude: '-34.0783413',
    longitude: '151.1303571'
    }, 
    {
    suburb: 'Peakhurst Heights',
    latitude: '-33.9768872',
    longitude: '151.0544039'
    }, 
    {
    suburb: 'Hammondville',
    latitude: '-33.9511518',
    longitude: '150.9608619'
    }, 
    {
    suburb: 'South Penrith',
    latitude: '-33.772521',
    longitude: '150.6982616'
    }, 
    {
    suburb: 'Fairlight',
    latitude: '-33.7938789',
    longitude: '151.2741471'
    }, 
    { suburb: 'Kurmond', latitude: '-33.5483333', longitude: '150.701111' }, 
    {
    suburb: 'Liberty Grove',
    latitude: '-33.8413889',
    longitude: '151.0838889'
    }, 
    { suburb: 'Parklea', latitude: '-33.725', longitude: '150.9161111' }, 
    {
    suburb: 'Maroota',
    latitude: '-33.4577956',
    longitude: '150.9829191'
    }, 
    {
    suburb: 'West Hoxton',
    latitude: '-33.9316667',
    longitude: '150.8344444'
    }, 
    {
    suburb: 'Minto Heights',
    latitude: '-34.0379407',
    longitude: '150.8715274'
    }, 
    {
    suburb: 'McMahons Point',
    latitude: '-33.8443387',
    longitude: '151.2027957'
    }, 
    {
    suburb: 'Len Waters Estate',
    latitude: '-33.9146',
    longitude: '150.8532'
    }, 
    {
    suburb: 'Dangar Island',
    latitude: '-33.5395661',
    longitude: '151.2393914450432'
    }, 
    {
    suburb: 'Freshwater',
    latitude: '-33.7750987',
    longitude: '151.2844815'
    }, 
    {
    suburb: 'Davidson',
    latitude: '-33.7398592',
    longitude: '151.1942222'
    }, 
    { suburb: 'Norwest', latitude: '-33.733048', longitude: '150.964298' }, 
    {
    suburb: 'Berowra',
    latitude: '-33.6237183',
    longitude: '151.1515392'
    }, 
    {
    suburb: 'Rockdale',
    latitude: '-33.9542619',
    longitude: '151.1403655'
    }, 
    { suburb: 'Blackett', latitude: '-33.7372232', longitude: '150.815' }, 
    {
    suburb: 'Colyton',
    latitude: '-33.7822222',
    longitude: '150.7958333'
    }, 
    {
    suburb: 'Kurraba Point',
    latitude: '-33.8415873',
    longitude: '151.223028'
    }, 
    {
    suburb: 'Wilberforce',
    latitude: '-33.5566667',
    longitude: '150.8344444'
    }, 
    { suburb: 'Kearns', latitude: '-34.0233333', longitude: '150.8011111' }, 
    {
    suburb: 'Mount Lewis',
    latitude: '-33.9156089',
    longitude: '151.0499433'
    }, 
    {
    suburb: 'St Ives Chase',
    latitude: '-33.7030556',
    longitude: '151.1652778'
    }, 
    {
    suburb: 'Hunters Hill',
    latitude: '-33.8336171',
    longitude: '151.1449446'
    }, 
    {
    suburb: 'West Pennant Hills',
    latitude: '-33.7478359',
    longitude: '151.0350621'
    }, 
    {
    suburb: 'North Strathfield',
    latitude: '-33.8588178',
    longitude: '151.088578'
    }, 
    { suburb: 'Whalan', latitude: '-33.7566667', longitude: '150.8094444' }, 
    {
    suburb: 'Lethbridge Park',
    latitude: '-33.7386041',
    longitude: '150.8014499'
    }, 
    {
    suburb: 'Sylvania',
    latitude: '-34.0141205',
    longitude: '151.0988161'
    }, 
    {
    suburb: 'Glenmore Park',
    latitude: '-33.7887972',
    longitude: '150.669496'
    }, 
    {
    suburb: 'Mount Druitt',
    latitude: '-33.7705556',
    longitude: '150.8205556'
    }, 
    {
    suburb: 'Flemington',
    latitude: '-33.8648765',
    longitude: '151.069948'
    }, 
    {
    suburb: 'Sutherland',
    latitude: '-34.0312587',
    longitude: '151.0567639'
    }, 
    {
    suburb: 'Monterey',
    latitude: '-33.9720137',
    longitude: '151.1480392'
    }, 
    {
    suburb: 'Dee Why',
    latitude: '-33.7526555',
    longitude: '151.2875707'
    }, 
    {
    suburb: 'Botany',
    latitude: '-33.9498935',
    longitude: '151.18196819346016'
    }, 
    {
    suburb: 'Wollstonecraft',
    latitude: '-33.8332039',
    longitude: '151.1959273'
    }, 
    {
    suburb: 'Normanhurst',
    latitude: '-33.7238649',
    longitude: '151.0977351'
    }, 
    {
    suburb: 'Grose Wold',
    latitude: '-33.6030113',
    longitude: '150.6745178'
    }, 
    {
    suburb: 'Miranda',
    latitude: '-34.0335434',
    longitude: '151.1037193'
    }, 
    {
    suburb: 'Newington',
    latitude: '-33.8403672',
    longitude: '151.0547690019473'
    }, 
    { suburb: 'Nelson', latitude: '-33.6478291', longitude: '150.9213361' }, 
    {
    suburb: 'Meadowbank',
    latitude: '-33.8174993',
    longitude: '151.0884249'
    }, 
    {
    suburb: 'Homebush',
    latitude: '-33.860451',
    longitude: '151.0806118'
    }, 
    { suburb: 'Mascot', latitude: '-33.9289562', longitude: '151.1951782' }, 
    {
    suburb: 'Beverley Park',
    latitude: '-33.9787995',
    longitude: '151.1316285'
    }, 
    { url: '/search?q=Lower%20Portland,%20sydney', name: 'Lower Portland' }, 
    {
    suburb: 'Abbotsbury',
    latitude: '-33.8692846',
    longitude: '150.8667029'
    }, 
    {
    suburb: 'Moore Park',
    latitude: '-33.8958333',
    longitude: '151.2219444'
    }, 
    {
    suburb: 'Surry Hills',
    latitude: '-33.8845123',
    longitude: '151.2100301'
    }, 
    { suburb: 'Camden', latitude: '-34.0532323', longitude: '150.6961705' }, 
    {
    suburb: 'Cottage Point',
    latitude: '-33.6195161',
    longitude: '151.203318'
    }, 
    {
    suburb: 'Coasters Retreat',
    latitude: '-33.6048099',
    longitude: '151.2988042'
    }, 
    {
    suburb: 'Campsie',
    latitude: '-33.9143894',
    longitude: '151.1032133'
    }, 
    {
    suburb: 'Croydon',
    latitude: '-33.8777935',
    longitude: '151.1156502'
    }, 
    { suburb: 'Gymea', latitude: '-34.0341447', longitude: '151.085653' }, 
    {
    suburb: 'Warwick Farm',
    latitude: '-33.915',
    longitude: '150.9344444'
    }, 
    {
    suburb: 'Macquarie Park',
    latitude: '-33.7814961',
    longitude: '151.1256747'
    }, 
    {
    suburb: 'Windsor Downs',
    latitude: '-33.6566667',
    longitude: '150.8094444'
    }, 
    {
    suburb: 'Wisemans Ferry',
    latitude: '-33.3852776',
    longitude: '150.9868024'
    }, 
    {
    suburb: 'Bondi Junction',
    latitude: '-33.8930034',
    longitude: '151.2501228'
    }, 
    {
    suburb: 'Bonnyrigg Heights',
    latitude: '-33.8912101',
    longitude: '150.8695795'
    }, 
    {
    suburb: 'Guildford West',
    latitude: '-33.8483084',
    longitude: '150.9657421'
    }, 
    {
    suburb: 'Cremorne',
    latitude: '-33.8260081',
    longitude: '151.2254326'
    }, 
    {
    suburb: 'Woodcroft',
    latitude: '-33.7586111',
    longitude: '150.8783333'
    }, 
    { suburb: 'Melonba', latitude: '-33.695145', longitude: '150.7953576' }, 
    {
    suburb: 'Forestville',
    latitude: '-33.7620891',
    longitude: '151.2150889'
    }, 
    {
    suburb: 'Concord West',
    latitude: '-33.843168',
    longitude: '151.0920563'
    }, 
    {
    suburb: 'Lewisham',
    latitude: '-33.8953868',
    longitude: '151.1466449'
    }, 
    {
    suburb: 'Waterloo',
    latitude: '-33.9002762',
    longitude: '151.2073137'
    }, 
    {
    suburb: 'Lilli Pilli',
    latitude: '-34.0680729',
    longitude: '151.1159938'
    }, 
    {
    suburb: 'Lansvale',
    latitude: '-33.9003985',
    longitude: '150.9510782'
    }, 
    {
    suburb: 'Hoxton Park',
    latitude: '-33.9294022',
    longitude: '150.8560164'
    }, 
    {
    suburb: 'Castlecrag',
    latitude: '-33.8003455',
    longitude: '151.2197795'
    }, 
    {
    suburb: 'Cronulla',
    latitude: '-34.0575259',
    longitude: '151.1523851'
    }, 
    {
    suburb: 'Villawood',
    latitude: '-33.8857243',
    longitude: '150.9837511'
    }, 
    {
    suburb: 'Linley Point',
    latitude: '-33.8272222',
    longitude: '151.15'
    }, 
    {
    suburb: 'Warriewood',
    latitude: '-33.690306',
    longitude: '151.2942716'
    }, 
    { url: '/search?q=Cartwright,%20sydney', name: 'Cartwright' }, 
    { url: '/search?q=Chatswood,%20sydney', name: 'Chatswood' }, 
    { url: '/search?q=Matraville,%20sydney', name: 'Matraville' }, 
    { url: '/search?q=Summer%20Hill,%20sydney', name: 'Summer Hill' }, 
    { url: '/search?q=Carss%20Park,%20sydney', name: 'Carss Park' }, 
    { url: '/search?q=Pendle%20Hill,%20sydney', name: 'Pendle Hill' }, 
    {
    url: '/search?q=Wheeler%20Heights,%20sydney',
    name: 'Wheeler Heights'
    }, 
    { url: '/search?q=Collaroy,%20sydney', name: 'Collaroy' }, 
    { url: '/search?q=Lovett%20Bay,%20sydney', name: 'Lovett Bay' }, 
    { url: '/search?q=Narwee,%20sydney', name: 'Narwee' }, 
    {
    url: '/search?q=Berowra%20Heights,%20sydney',
    name: 'Berowra Heights'
    }, 
    { url: '/search?q=Gables,%20sydney', name: 'Gables' }, 
    { url: '/search?q=Cremorne%20Point,%20sydney', name: 'Cremorne Point' }, 
    { url: '/search?q=Darlington,%20sydney', name: 'Darlington' }, 
    { url: '/search?q=Denistone%20East,%20sydney', name: 'Denistone East' }, 
    {
    suburb: 'Dundas Valley',
    latitude: '-33.7936744',
    longitude: '151.0559069'
    }, 
    { url: '/search?q=Denistone%20West,%20sydney', name: 'Denistone West' }, 
    { url: '/search?q=Greenwich,%20sydney', name: 'Greenwich' }, 
    { url: '/search?q=Voyager%20Point,%20sydney', name: 'Voyager Point' }, 
    { url: '/search?q=Willoughby,%20sydney', name: 'Willoughby' }, 
    { url: '/search?q=Rookwood,%20sydney', name: 'Rookwood' }, 
    { url: '/search?q=Greystanes,%20sydney', name: 'Greystanes' }, 
    { url: '/search?q=Point%20Piper,%20sydney', name: 'Point Piper' }, 
    { url: '/search?q=Grays%20Point,%20sydney', name: 'Grays Point' }, 
    {
    url: '/search?q=Woronora%20Heights,%20sydney',
    name: 'Woronora Heights'
    }, 
    { url: '/search?q=Willmot,%20sydney', name: 'Willmot' }, 
    {
    suburb: 'Minchinbury',
    latitude: '-33.7866731',
    longitude: '150.8272222'
    }, 
    { url: '/search?q=Bexley%20North,%20sydney', name: 'Bexley North' }, 
    {
    url: '/search?q=Elanora%20Heights,%20sydney',
    name: 'Elanora Heights'
    }, 
    { url: '/search?q=Marsfield,%20sydney', name: 'Marsfield' }, 
    { url: '/search?q=Dover%20Heights,%20sydney', name: 'Dover Heights' }, 
    { url: '/search?q=Narellan,%20sydney', name: 'Narellan' }, 
    {
    suburb: 'Paddington',
    latitude: '-33.8841572',
    longitude: '151.2272766'
    }, 
    { url: '/search?q=Canada%20Bay,%20sydney', name: 'Canada Bay' }, 
    { url: '/search?q=Morning%20Bay,%20sydney', name: 'Morning Bay' }, 
    { url: '/search?q=Woolooware,%20sydney', name: 'Woolooware' }, 
    { url: '/search?q=Yowie%20Bay,%20sydney', name: 'Yowie Bay' }, 
    { url: '/search?q=Watsons%20Bay,%20sydney', name: 'Watsons Bay' }, 
    { url: '/search?q=Hobartville,%20sydney', name: 'Hobartville' }, 
    { url: '/search?q=Wedderburn,%20sydney', name: 'Wedderburn' }, 
    {
    suburb: 'Manly Vale',
    latitude: '-33.7830838',
    longitude: '151.2659938'
    }, 
    { url: '/search?q=Mays%20Hill,%20sydney', name: 'Mays Hill' }, 
    {
    url: '/search?q=Greenhills%20Beach,%20sydney',
    name: 'Greenhills Beach'
    }, 
    { url: '/search?q=Oxley%20Park,%20sydney', name: 'Oxley Park' }, 
    { url: '/search?q=Smithfield,%20sydney', name: 'Smithfield' }, 
    { url: '/search?q=Darlinghurst,%20sydney', name: 'Darlinghurst' }, 
    { url: '/search?q=Jamisontown,%20sydney', name: 'Jamisontown' }, 
    { url: '/search?q=Elizabeth%20Bay,%20sydney', name: 'Elizabeth Bay' }, 
    { url: '/search?q=Prestons,%20sydney', name: 'Prestons' }, 
    { url: '/search?q=Mortdale,%20sydney', name: 'Mortdale' }, 
    { url: '/search?q=Neutral%20Bay,%20sydney', name: 'Neutral Bay' }, 
    { url: '/search?q=Tennyson,%20sydney', name: 'Tennyson' }, 
    { url: '/search?q=Dundas,%20sydney', name: 'Dundas' }, 
    { url: '/search?q=Hurlstone%20Park,%20sydney', name: 'Hurlstone Park' }, 
    { url: '/search?q=Birchgrove,%20sydney', name: 'Birchgrove' }, 
    { url: '/search?q=Marrickville,%20sydney', name: 'Marrickville' }, 
    { url: '/search?q=Denistone,%20sydney', name: 'Denistone' }, 
    { url: '/search?q=Narellan%20Vale,%20sydney', name: 'Narellan Vale' }, 
    { url: '/search?q=Bonnyrigg,%20sydney', name: 'Bonnyrigg' }, 
    { url: '/search?q=North%20Manly,%20sydney', name: 'North Manly' }, 
    { url: '/search?q=Dolans%20Bay,%20sydney', name: 'Dolans Bay' }, 
    { url: '/search?q=Miller,%20sydney', name: 'Miller' }, 
    { url: '/search?q=Cecil%20Hills,%20sydney', name: 'Cecil Hills' }, 
    { url: '/search?q=Bayview,%20sydney', name: 'Bayview' }, 
    { url: '/search?q=Clyde,%20sydney', name: 'Clyde' }, 
    { url: '/search?q=Cabarita,%20sydney', name: 'Cabarita' }, 
    { url: '/search?q=Blakehurst,%20sydney', name: 'Blakehurst' }, 
    { url: '/search?q=Enmore,%20sydney', name: 'Enmore' }, 
    { url: '/search?q=Narrabeen,%20sydney', name: 'Narrabeen' }, 
    {
    suburb: 'Ebenezer',
    latitude: '-33.5166293',
    longitude: '150.8874434'
    }, 
    { url: '/search?q=Padstow,%20sydney', name: 'Padstow' }, 
    {
    suburb: 'North Narrabeen',
    latitude: '-33.70098',
    longitude: '151.2936426'
    }, 
    { suburb: 'Manly', latitude: '-33.7971937', longitude: '151.2879845' }, 
    {
    suburb: 'Greendale',
    latitude: '-33.9150012',
    longitude: '150.6677734'
    }, 
    { url: '/search?q=Oakhurst,%20sydney', name: 'Oakhurst' }, 
    { url: '/search?q=Luddenham,%20sydney', name: 'Luddenham' }, 
    { url: '/search?q=Oakville,%20sydney', name: 'Oakville' }, 
    { url: '/search?q=Curl%20Curl,%20sydney', name: 'Curl Curl' }, 
    { url: '/search?q=Lilyfield,%20sydney', name: 'Lilyfield' }, 
    { url: '/search?q=Cecil%20Park,%20sydney', name: 'Cecil Park' }, 
    { url: '/search?q=Canterbury,%20sydney', name: 'Canterbury' }, 
    {
    suburb: 'Chatswood West',
    latitude: '-33.7960029',
    longitude: '151.1597081'
    }, 
    {
    suburb: 'Grose Vale',
    latitude: '-33.5764147',
    longitude: '150.6552959'
    }, 
    {
    suburb: 'Singletons Mill',
    latitude: '-33.4648101',
    longitude: '151.0738545'
    }, 
    { url: '/search?q=Austral,%20sydney', name: 'Austral' }, 
    {
    suburb: 'Marayong',
    latitude: '-33.7491667',
    longitude: '150.8919444'
    }, 
    {
    suburb: 'North Ryde',
    latitude: '-33.7975472',
    longitude: '151.127306'
    }, 
    {
    url: '/search?q=Collaroy%20Plateau,%20sydney',
    name: 'Collaroy Plateau'
    }, 
    { url: '/search?q=Cambridge%20Park,%20sydney', name: 'Cambridge Park' }, 
    { url: '/search?q=Canley%20Heights,%20sydney', name: 'Canley Heights' }, 
    {
    suburb: 'St Johns Park',
    latitude: '-33.8816667',
    longitude: '150.9011111'
    }, 
    {
    suburb: 'St Clair',
    latitude: '-33.7983333',
    longitude: '150.7844444'
    }, 
    {
    suburb: 'Dawes Point',
    latitude: '-33.8572223',
    longitude: '151.2067756'
    }, 
    {
    suburb: 'Mount Kuring-Gai',
    latitude: '-33.6531707',
    longitude: '151.1368681'
    }, 
    {
    suburb: 'Warrawee',
    latitude: '-33.7279732',
    longitude: '151.1232279'
    }, 
]

let successes = 0;
let failures = 0;


suburbAndErrorObject.map(async (suburb) => {
    if (suburb.url) {
        await axios.get(`https://geocode.maps.co${suburb.url}`).then((res) => {
            successes++;
            console.log({
                suburb: suburb.name,
                latitude: res.data[0].lat,
                longitude: res.data[0].lon,
            }, ", ");
        }).catch((e) => {
            failures++;
           //console.log(e.request.path);
            console.log({
                url: suburb.url,
                name: suburb.name
            }, ", ");
    
        });
    } else {
        successes++;
        console.log(suburb, ", ");
    }
});

// console.log(successes, failures);