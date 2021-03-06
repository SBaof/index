const backgrounds = [
    {
        "filename": "backgrounds/f72e1572-c291-48ac-b45c-6d8a5c1a15c0.jpg",
        "title": "Above Ho Chi Minh City, Vietnam",
        "source": "Kien Do",
        "sourceUrl": "https://unsplash.com/kiendo",
        "id": "f72e1572-c291-48ac-b45c-6d8a5c1a15c0"
    },
    {
        "filename": "backgrounds/969d71e6-2126-4313-a5d7-9a28ebc78837.jpg",
        "title": "Pyrenees Mountains",
        "source": "Iris Vallejo",
        "sourceUrl": "http://pixabay.com/en/pyrenees-mountains-snow-zenith-351266/",
        "id": "969d71e6-2126-4313-a5d7-9a28ebc78837"
    },
    {
        "filename": "backgrounds/4f250311-39cb-4aff-9050-87eb462f7f08.jpg",
        "title": "Kerepakupai Meru, Venezuela",
        "source": "AirPano",
        "sourceUrl": "https://500px.com/photo/98450677/churun-meru-(dragon)-waterfall-venezuela-by-airpano",
        "id": "4f250311-39cb-4aff-9050-87eb462f7f08"
    },
    {
        "filename": "backgrounds/c16b3483-3f6a-433b-acdf-f5ded8beba79.jpg",
        "title": "China",
        "source": "AirPano",
        "sourceUrl": "http://www.airpano.com/Photogallery-Photo.php?author=2&photo=58",
        "id": "c16b3483-3f6a-433b-acdf-f5ded8beba79"
    },
    {
        "filename": "backgrounds/ba77f3db-1701-49a7-bd67-4f98edd92747.jpg",
        "title": "Urnersee Lake, Switzerland",
        "source": "Tanya Mishchenko",
        "sourceUrl": "https://www.flickr.com/photos/tanyush/9293898520",
        "id": "ba77f3db-1701-49a7-bd67-4f98edd92747"
    },
    {
        "filename": "backgrounds/4ea1221c-78f0-4952-a3c6-f16acb33b57f.jpg",
        "title": "Mt. Teide, Canary Islands",
        "source": "Michael Bolognesi",
        "sourceUrl": "https://www.flickr.com/photos/bollan/10361139534/",
        "id": "4ea1221c-78f0-4952-a3c6-f16acb33b57f"
    },
    {
        "filename": "backgrounds/6375bb99-9cac-42ff-8f4d-270505fdd1ba.jpg",
        "title": "Port Angeles, Washington, USA",
        "source": "Isaac Gautschi",
        "sourceUrl": "https://www.facebook.com/IsaacGautschiPhotography",
        "id": "6375bb99-9cac-42ff-8f4d-270505fdd1ba"
    },
    {
        "filename": "backgrounds/ff33de87-2620-48bb-87f4-9c77b221ac08.jpg",
        "title": "Kalalau, Hawaii, USA",
        "source": "Romain Guy",
        "sourceUrl": "https://www.flickr.com/photos/romainguy/6986733231/",
        "id": "ff33de87-2620-48bb-87f4-9c77b221ac08"
    },
    {
        "filename": "backgrounds/4b71326f-9007-4519-8e02-8f789caaad6e.jpg",
        "title": "County Clare, Ireland",
        "source": "Kwiatek7",
        "sourceUrl": "http://www.shutterstock.com/pic-131723969/stock-photo-cliffs-of-moher-at-sunset-co-clare-ireland.html",
        "id": "4b71326f-9007-4519-8e02-8f789caaad6e"
    },
    {
        "filename": "backgrounds/8625d9f3-c059-4dc6-b915-37bb5ea7e6a3.jpg",
        "title": "Rio de Janeiro, Brazil",
        "source": "airpano",
        "sourceUrl": "http://www.airpano.ru/files/Rio-de-Janeiro-Brazil/2-2?from=momentum",
        "id": "8625d9f3-c059-4dc6-b915-37bb5ea7e6a3"
    },
    {
        "filename": "backgrounds/4d1cd7aa-1b6f-49a0-8e0b-b65c73a53ad8.jpg",
        "title": "Bariloche, Argentina",
        "source": "Wieslaw Olejniczak",
        "sourceUrl": "https://500px.com/photo/32006633/bariloche-by-wieslaw-olejniczak",
        "id": "4d1cd7aa-1b6f-49a0-8e0b-b65c73a53ad8"
    },
    {
        "filename": "backgrounds/68db4265-fa19-408a-81bc-d8ebed6537db.jpg",
        "title": "Mu Cang Chai, Vietnam",
        "source": "Valeriy Shcherbina",
        "sourceUrl": "http://moda.sh/mu-cang-chai-by-valeriy-shcherbina",
        "id": "68db4265-fa19-408a-81bc-d8ebed6537db"
    },
    {
        "filename": "backgrounds/08b89e75-c03a-41aa-9cb6-d3dd822cdfbe.jpg",
        "title": "Hoher Kasten, Appenzell Alps, Switzerland",
        "source": "Jan Thoma",
        "sourceUrl": "http://janthoma.ch/",
        "id": "08b89e75-c03a-41aa-9cb6-d3dd822cdfbe"
    },
    {
        "filename": "backgrounds/92c873f2-835d-437c-b08f-2332adf19f00.jpg",
        "title": "Rock Islands, Palau",
        "source": "Unknown",
        "sourceUrl": "http://moda.sh/destination-palau",
        "id": "92c873f2-835d-437c-b08f-2332adf19f00"
    },
    {
        "filename": "backgrounds/3068befa-45dd-491c-a506-66b86a5c65f4.jpg",
        "title": "Plougonvelin, France",
        "source": "Frederic Le Mouillour",
        "sourceUrl": "http://www.flickr.com/people/frederic29/",
        "id": "3068befa-45dd-491c-a506-66b86a5c65f4"
    },
    {
        "filename": "backgrounds/5740fe48-d74e-4d95-8ec7-8c1f738cabc0.jpg",
        "title": "Celano, Abruzzi, Italy",
        "source": "Luca Montanari",
        "sourceUrl": "http://www.flickr.com/photos/luca_montanari/8321880331",
        "id": "5740fe48-d74e-4d95-8ec7-8c1f738cabc0"
    },
    {
        "filename": "backgrounds/31fcda47-100b-42e1-a513-c6aa09c3b2dd.jpg",
        "title": "Stunted Pine",
        "source": "Jyrki Salmi",
        "sourceUrl": "http://www.flickr.com/photos/salman2000/9321259912/",
        "id": "31fcda47-100b-42e1-a513-c6aa09c3b2dd"
    },
    {
        "filename": "backgrounds/d6e0923c-8f38-4727-99f2-fd104ecce5da.jpg",
        "title": "Mu Cang Chai, Vietnam",
        "source": "tu_geo",
        "sourceUrl": "http://www.flickr.com/photos/23866512@N05",
        "id": "d6e0923c-8f38-4727-99f2-fd104ecce5da"
    },
    {
        "filename": "backgrounds/3ad1de40-4785-4e31-bd98-be80575c5553.jpg",
        "title": "Space",
        "source": "Unknown",
        "sourceUrl": "http://eskipaper.com/outer-space-wallpaper-23.html",
        "id": "3ad1de40-4785-4e31-bd98-be80575c5553"
    },
    {
        "filename": "backgrounds/9b5ad3aa-31a8-473c-86da-cecd53eca8e6.jpg",
        "title": "Zug, Switzerland",
        "source": "Magdalena Roeseler",
        "sourceUrl": "https://www.flickr.com/photos/magdalenaroeseler/10497301253",
        "id": "9b5ad3aa-31a8-473c-86da-cecd53eca8e6"
    },
    {
        "filename": "backgrounds/201ef627-c78f-4c96-91ae-8fa0adb09346.jpg",
        "title": "Paptsdorf, Germany",
        "source": "skoeber",
        "sourceUrl": "https://www.flickr.com/photos/asphericlens/7227178308",
        "id": "201ef627-c78f-4c96-91ae-8fa0adb09346"
    },
    {
        "filename": "backgrounds/1c4fd43d-e3ca-4dfb-a891-e14ba5af01ea.jpg",
        "title": "Li Jiang, China",
        "source": "Trey Ratcliff",
        "sourceUrl": "https://www.flickr.com/photos/stuckincustoms/11114091294/",
        "id": "1c4fd43d-e3ca-4dfb-a891-e14ba5af01ea"
    },
    {
        "filename": "backgrounds/7efb1557-cf57-4ae3-b07a-ec2175679d1c.jpg",
        "title": "Glenorchy, New Zealand",
        "source": "Trey Ratcliff",
        "sourceUrl": "https://www.flickr.com/photos/stuckincustoms/8498614095",
        "id": "7efb1557-cf57-4ae3-b07a-ec2175679d1c"
    },
    {
        "filename": "backgrounds/bc02cd92-13e1-4bc3-8020-b0acf5c80880.jpg",
        "title": "San Francisco, California, USA",
        "source": "Romain Guy",
        "sourceUrl": "https://www.flickr.com/photos/romainguy/3409068082/",
        "id": "bc02cd92-13e1-4bc3-8020-b0acf5c80880"
    }
];

const quotes = [
		{
	        "body": "When we give up on our dreams, we die while still alive.",
	        "display_date": "2017-06-29",
	        "for_date": "2017-06-29",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-29-0",
	        "source": "Robin Sharma",
	        "twitter": "robinsharma",
	        "_id": "fc1c9fae-5dbb-45f5-96d6-fa19eacb4552"
	    },
	    {
	        "body": "Too many of us are not living our dreams because we are living our fears.",
	        "display_date": "2017-06-28",
	        "for_date": "2017-06-28",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-28-0",
	        "source": "Les Brown",
	        "twitter": "LesBrown77",
	        "_id": "c0cecbd4-f555-4ca9-821b-5bc4edfb6b4f"
	    },
	    {
	        "body": "The path to wisdom is paved with humility.",
	        "display_date": "2017-06-27",
	        "for_date": "2017-06-27",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-27-0",
	        "source": "Tim Fargo",
	        "twitter": "alphabetsuccess",
	        "_id": "c23ff746-12e4-4c6d-8ee6-840281a3ca66"
	    },
	    {
	        "body": "Waste no more time arguing about what a good person should be. Be one.",
	        "display_date": "2017-06-26",
	        "for_date": "2017-06-26",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-26-0",
	        "source": "Marcus Aurelius",
	        "twitter": null,
	        "_id": "8a4b9919-3eef-4b1e-ac9c-6c768f4ddfb6"
	    },
	    {
	        "body": "You cannot start the next chapter of your life if you keep re-reading the last one.",
	        "display_date": "2017-06-25",
	        "for_date": "2017-06-25",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-25-0",
	        "source": "Michael McMillan",
	        "twitter": "m_mcmillan",
	        "_id": "15a16d7f-812a-4f8e-bca1-8d9141451f38"
	    },
	    {
	        "body": "Spend more time smiling than frowning and more time praising than criticizing.",
	        "display_date": "2017-06-24",
	        "for_date": "2017-06-24",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-24-0",
	        "source": "Richard Branson",
	        "twitter": "RichardBranson",
	        "_id": "d8804916-f764-414b-996c-ffdea94006a8"
	    },
	    {
	        "body": "A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.",
	        "display_date": "2017-06-23",
	        "for_date": "2017-06-23",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-23-0",
	        "source": "Winston Churchill",
	        "twitter": null,
	        "_id": "180305ec-530e-4f81-8219-e88f798a72f3"
	    },
	    {
	        "body": "Make sure your worst enemy doesn't live between your two ears.",
	        "display_date": "2017-06-22",
	        "for_date": "2017-06-22",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-22-0",
	        "source": "Laird Hamilton",
	        "twitter": "LairdLife",
	        "_id": "4ccd70bd-3e2c-43c8-a18d-4e8cfce1809a"
	    },
	    {
	        "body": "All things are difficult before they are easy.",
	        "display_date": "2017-06-21",
	        "for_date": "2017-06-21",
	        "is_custom": false,
	        "is_favorite": true,
	        "position": 0,
	        "sort_order": "2017-06-21-0",
	        "source": "Thomas Fuller",
	        "twitter": null,
	        "_id": "358f444c-14be-4092-b689-6c77d1c1d0dd"
	    },
	    {
	        "body": "Never let success get to your head, and never let failure get to your heart.",
	        "display_date": "2017-06-20",
	        "for_date": "2017-06-20",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-20-0",
	        "source": "Drake",
	        "twitter": "Drake",
	        "_id": "84766a54-b5a1-4f96-a05b-086e302dba48"
	    },
	    {
	        "body": "Do what you can, with what you have, where you are.",
	        "display_date": "2017-06-19",
	        "for_date": "2017-06-19",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-19-0",
	        "source": "Theodore Roosevelt",
	        "twitter": null,
	        "_id": "ebcaefdc-990c-4596-b637-b29707ef0115"
	    },
	    {
	        "body": "Doubt kills more dreams than failure ever will.",
	        "display_date": "2017-06-18",
	        "for_date": "2017-06-18",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-18-0",
	        "source": "Suzy Kassem",
	        "twitter": null,
	        "_id": "7d65902f-d524-4e8b-beb6-f1fa1048a5a1"
	    },
	    {
	        "body": "The cave you fear to enter holds the treasure that you seek.",
	        "display_date": "2017-06-17",
	        "for_date": "2017-06-17",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-17-0",
	        "source": "Joseph Campbell",
	        "twitter": null,
	        "_id": "102957b0-4695-4e93-a760-f20c36488876"
	    },
	    {
	        "body": "Let go of those who bring you down and surround yourself with those who bring out the best in you.",
	        "display_date": "2017-06-16",
	        "for_date": "2017-06-16",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-16-0",
	        "source": "Unknown",
	        "twitter": null,
	        "_id": "1694c662-a7af-43dc-be7d-c63a1ae4beed"
	    },
	    {
	        "body": "If it ain't fun, don't do it.",
	        "display_date": "2017-06-15",
	        "for_date": "2017-06-15",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-15-0",
	        "source": "Jack Canfield",
	        "twitter": "JackCanfield",
	        "_id": "0fd780e0-3d6a-4e17-97ba-79038174bf6a"
	    },
	    {
	        "body": "As you think, so shall you become.",
	        "display_date": "2017-06-14",
	        "for_date": "2017-06-14",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-14-0",
	        "source": "Unknown",
	        "twitter": null,
	        "_id": "02265cde-bd7f-4d04-9a80-361900f4f101"
	    },
		    {
	        "body": "Every dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the ,passion to reach for the stars to change the world.",
	        "display_date": "2017-06-13",
	        "for_date": "2017-06-13",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-13-0",
	        "source": "Harriet Tubman",
	        "twitter": null
	    },
	    {
	        "body": "There is no person living who isn't capable of doing more than they think they can do.",
	        "display_date": "2017-06-12",
	        "for_date": "2017-06-12",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-12-0",
	        "source": "Henry Ford",
	        "twitter": null,
	        "_id": "47bd607b-deeb-4c01-8d93-22c49e65d6a7"
	    },
	    {
	        "body": "Knowing is not enough, we must apply. Willing is not enough, we must do.",
	        "display_date": "2017-06-11",
	        "for_date": "2017-06-11",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-11-0",
	        "source": "Bruce Lee",
	        "twitter": null,
	        "_id": "2c2a5627-b192-49e8-a11e-889a3ea1e390"
	    },
	    {
	        "body": "Don't let a bad day make you feel like you have a bad life.",
	        "display_date": "2017-06-10",
	        "for_date": "2017-06-10",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-10-0",
	        "source": "Unknown",
	        "twitter": null,
	        "_id": "23456ed0-c7aa-4ba2-a377-e927c26f7f36"
	    },
		    {
	        "body": "Never let your fear decide your fate.",
	        "display_date": "2017-06-09",
	        "for_date": "2017-06-09",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-09-0",
	        "source": "AWOLNATION, ",
	        "twitter": null
	    },
		    {
	        "body": "I've learned that you shouldn't go through life with a catcher's mitt on both hands; you need to be able to ,throw something back.",
	        "display_date": "2017-06-08",
	        "for_date": "2017-06-08",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-08-0",
	        "source": "Maya Angelou",
	        "twitter": null
	    },
	    {
	        "body": "Life shrinks or expands in proportion to one's courage.",
	        "display_date": "2017-06-07",
	        "for_date": "2017-06-07",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-07-0",
	        "source": "Anaïs Nin",
	        "twitter": null,
	        "_id": "3bc95d86-8779-4643-b9ad-1587f351d81b"
	    },
	    {
	        "body": "If you cannot find peace within yourself, you will never find it anywhere else.",
	        "display_date": "2017-06-06",
	        "for_date": "2017-06-06",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-06-0",
	        "source": "Marvin Gaye",
	        "twitter": null,
	        "_id": "defaaaa2-e18e-4166-877f-f914eca78614"
	    },
	    {
	        "body": "Be who you were created to be, and you will set the world on fire.",
	        "display_date": "2017-06-05",
	        "for_date": "2017-06-05",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-05-0",
	        "source": "St. Catherine of Sienna",
	        "twitter": null,
	        "_id": "4cc365f2-1165-4f19-a76e-eb8eba58eacd"
	    },
		    {
	        "body": "Of all the things that can boost emotions, motivation, and perceptions during a workday, the single most important is making progress in meaningful work.",
	        "display_date": "2017-06-04",
	        "for_date": "2017-06-04",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-04-0",
	        "source": "Teresa Amabile",
	        "twitter": "TeresaAmabile",
	    },
	    {
	        "body": "Don't let small minds convince you that your dreams are too big.",
	        "display_date": "2017-06-03",
	        "for_date": "2017-06-03",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-03-0",
	        "source": "Unknown",
	        "twitter": null,
	        "_id": "96570a62-4700-4934-acc0-73143c32b31c"
	    },
	    {
	        "body": "Never waste a minute thinking about people you don't like.",
	        "display_date": "2017-06-02",
	        "for_date": "2017-06-02",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-02-0",
	        "source": "Dwight D. Eisenhower",
	        "twitter": null,
	        "_id": "d98ec0b9-d1f4-4ec5-8251-be22fe4105e4"
	    },
	    {
	        "body": "To be upset over what you don't have is to waste what you do have.",
	        "display_date": "2017-06-01",
	        "for_date": "2017-06-01",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-06-01-0",
	        "source": "Unknown",
	        "twitter": null,
	        "_id": "e1646475-ee6e-4e4a-b383-aec0e0ba644f"
	    },
	    {
	        "body": "Some of us think holding on makes us strong, but sometimes it is letting go.",
	        "display_date": "2017-05-31",
	        "for_date": "2017-05-31",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-05-31-0",
	        "source": "Herman Hesse",
	        "twitter": null,
	        "_id": "425005ca-4544-48a0-aa81-eedf9061bcba"
	    },
	    {
	        "body": "You can be happy or you can be unhappy. It's just according to the way you look at things.",
	        "display_date": "2017-05-30",
	        "for_date": "2017-05-30",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-05-30-0",
	        "source": "Walt Disney",
	        "twitter": null,
	        "_id": "8c0b1656-60ee-4454-be56-7cca6c98eb3b"
	    },
	    {
	        "body": "The only person you are destined to become is the person you decide to be.",
	        "display_date": "2017-05-29",
	        "for_date": "2017-05-29",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-05-29-0",
	        "source": "Ralph Waldo Emerson",
	        "twitter": null,
	        "_id": "4284ee6a-f80a-4032-bf04-26b6149ae369"
	    },
	    {
	        "body": "Don't let yesterday use up too much of today.",
	        "display_date": "2017-05-28",
	        "for_date": "2017-05-28",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-05-28-0",
	        "source": "Will Rogers",
	        "twitter": null,
	        "_id": "f8456b54-b349-44cd-9024-23b93c8e4221"
	    },
	    {
	        "body": "When you see a person without a smile, give them one of yours.",
	        "display_date": "2017-05-27",
	        "for_date": "2017-05-27",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-05-27-0",
	        "source": "Zig Ziglar",
	        "twitter": null,
	        "_id": "8ba891c1-e40f-4d85-97d7-e4c665a408cb"
	    },
	    {
	        "body": "This is your life. Do what you love, and do it often.",
	        "display_date": "2017-05-26",
	        "for_date": "2017-05-26",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-05-26-0",
	        "source": "Holstee Manifesto",
	        "twitter": "Holstee",
	        "_id": "7322ca86-086e-451a-a088-dd715bbb7633"
	    },
	    {
	        "body": "What you do matters, but why you do it matters much more.",
	        "display_date": "2017-05-25",
	        "for_date": "2017-05-25",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-05-25-0",
	        "source": "Unknown",
	        "twitter": null,
	        "_id": "1d75c491-9ef7-483c-9f45-d32ee1328090"
	    },
		    {
	        "body": "The thing that is really hard, and really amazing, is giving up on being perfect and beginning the work of ,becoming yourself",
	        "display_date": "2017-05-24",
	        "for_date": "2017-05-24",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-05-24-0",
	        "source": "Anna Quindlen",
	        "twitter": null
	    },
	    {
	        "body": "Everyone you will ever meet knows something you don't.",
	        "display_date": "2017-05-23",
	        "for_date": "2017-05-23",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-05-23-0",
	        "source": "Bill Nye",
	        "twitter": "BillNye",
	        "_id": "380022c4-588a-425c-b664-6295ac6c679a"
	    },
	    {
	        "body": "Once you realize how beautiful you are, you will find it hard to keep the company of those who do not.",
	        "display_date": "2017-05-22",
	        "for_date": "2017-05-22",
	        "is_custom": false,
	        "is_favorite": false,
	        "position": 0,
	        "sort_order": "2017-05-22-0",
	        "source": "Bruce Jett",
	        "twitter": null,
	        "_id": "8671a6d7-b142-47c1-9878-9343dacd9586"
	    },
	    {
        "body": "The future belongs to those who believe in the beauty of their dreams.",
        "display_date": "2017-05-21",
        "for_date": "2017-05-21",
        "is_custom": false,
        "is_favorite": false,
        "position": 0,
        "sort_order": "2017-05-21-0",
        "source": "Eleanor Roosevelt",
        "twitter": null,
        "_id": "aafdd013-a350-41ef-a026-86eeb517a9b3"
    }
];

const showLinks = document.querySelector('#show-links');
const body = document.querySelector('body');
const links = document.querySelector('#links');
const overlay = document.querySelector('.overlay');

// show links diglog
showLinks.addEventListener('click', function() {
	if (links.style.opacity == 1) {
		links.style.transform = 'translateY(-10px)';
		links.style.opacity = 0;
	} else {
		links.style.transform = 'translateY(0)';
		links.style.opacity = 1;
	}
});

const showTodos = document.querySelector('#bottom-right');
const todos = document.querySelector('.todo-container');

// show todo diglog
showTodos.addEventListener('click', () => {
	todos.style.opacity = todos.style.opacity ==  1 ? 0 : 1;
});

const todoList = todos.querySelector('ul');
const todoCount = todos.querySelector('span[name=todoCount]');
let items = getTodos('items') || [];

refreshTodo();

function refreshTodo () {
	setTodoCount();
	populateList(items, todoList);
	showTodoEmpty();
}

function setTodoCount () {
	todoCount.innerHTML = items.length;
}

function saveTodos (items, key = 'items') {
	if (items && items.length >= 0 && key) {
		localStorage.setItem(key, JSON.stringify(items));
	}
}

function getTodos (key) {
	if (key) {
		return JSON.parse(localStorage.getItem(key));
	}
}

const addTodo = function (e) {
	e.preventDefault();
	const text = (this.querySelector('[name=item]')).value;
	if (!text) {
		return;
	}
	item = {
		text,
		addtime: + new Date(),
		done: false
	};
	items.push(item);
	saveTodos(items, 'items');
	refreshTodo();
	this.reset();
}

function populateList(items, itemList) {
	itemList.innerHTML = items.map((item, i) => {
		return `
			<li>
				<input type="checkbox" data-index="${i}" id="item${i}" ${item.done ? 'checked' : ''}>
				<label for="item${i}">
					<span>${item.text}</span>
				</label>
				<span class="remove" data-index="${i}" name="remove">x</span>
			</li>
		`;
	}).join('');
};

function toggelDone (e) {
	if (e.target.matches('input')) {
		const index = e.target.dataset.index;
		items[index].done = !items[index].done;
		saveTodos(items);
		populateList(items, todoList);
	} else if (e.target.matches('span[name=remove]')) {
		const index = e.target.dataset.index;
		items.splice(index, 1);
	} else {
		return ;
	}
	saveTodos(items);
	refreshTodo();
};

function showTodoEmpty () {
	const empty = todos.querySelector('.empty-todo');
	const todoContent = todos.querySelector('.todo-content');
	if (items.length == 0) {
		empty.classList.remove('hide');
		todoContent.classList.add('hide');
	} else {
		empty.classList.add('hide');
		todoContent.classList.remove('hide');
	}
}

function cleanTodoForm () {
	todoForm.reset();
}

const todoForm = todos.querySelector('form');
const todoRemove = todos.querySelector('.remove');
const clean = todos.querySelector('.clean');
todoForm.addEventListener('submit', addTodo);
todoList.addEventListener('click', toggelDone);
clean.addEventListener('click', cleanTodoForm);

// static background-image pre-url
const bgLinkPre = 'http://img.sanbf.cn/';

// generate a random number between min & max
const random = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

// get background-image by random from qiniu
const getBg = function () {
	const bgIndex = random(0, 23);
	const bgInfo = backgrounds[bgIndex];
	bgInfo.img = `${bgLinkPre}${bgInfo.id}.jpg`;
	return bgInfo;
}

// animate of hover background-image-info & quote
const show = function (father, son, daughter) {
	father.addEventListener('mouseover', function() {
		son.style.transform = 'translateY(-5px)';
		daughter.style.transform = 'translateY(1px)';
		daughter.style.opacity = .8;
	});
	father.addEventListener('mouseout', function() {
		son.style.transform = 'translateY(10px)';
		daughter.style.transform = 'translateY(0)';
		daughter.style.opacity = 0;
	});
};

// set background image info
const setInfos = function (bgInfo) {
	const pageBg = document.querySelector('#background');
	const btmBgInfo = document.querySelector('#bottom-left');
	const btmBgInfoTitle = btmBgInfo.querySelector('.bg-title');
	const btmBgInfoAuthor = btmBgInfo.querySelector('.bg-author');
	pageBg.style.backgroundImage = `url(${bgInfo.img})`;
	pageBg.style.opacity = 0;
	setTimeout(() => {
		pageBg.style.opacity = 1;
	}, 100);
	btmBgInfoTitle.innerHTML = bgInfo.title;
	btmBgInfoAuthor.innerHTML = bgInfo.source;
	show(btmBgInfo, btmBgInfoTitle, btmBgInfoAuthor);
}

// set quote
const setQuote = function (quotes) {
	const qIndex = random(1, 39);
	const quote = quotes[qIndex];
	const btmQuote = document.querySelector('#bottom-center');
	const btmQuoteBody = btmQuote.querySelector('.quote-body');
	const btmQuoteAuthor = btmQuote.querySelector('.quote-author');
	btmQuoteBody.innerHTML = quote.body;
	btmQuoteAuthor.innerHTML = quote.source;
	show(btmQuote, btmQuoteBody, btmQuoteAuthor);
}

setInfos(getBg());
setQuote(quotes);



