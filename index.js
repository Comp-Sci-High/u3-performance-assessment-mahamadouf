// Good luck!

const express = require('express')
const app = express()

const WeatherStateInfo = {
  "UnitedStatesMapPhoto": "https://gisgeography.com/wp-content/uploads/2020/04/US-Physical-Map-1536x916.jpg",
  "Cities": [
    {
      "name": "Los Angeles",
      "state": "California",
      "Temperature": "75°F",
      "Humidity": "60%",
      "Precipitation": "10%",
      "Wind": "10 mph",
      "IsRaining": false,
      "IsSnowing": false,
      "IsSunny": true,
      "IsCloudy": false
    },
    {
      "name": "New York City",
      "state": "New York",
      "Temperature": "32°F",
      "Humidity": "75%",
      "Precipitation": "90%",
      "Wind": "15 mph",
      "IsRaining": true,
      "IsSnowing": true,
      "IsSunny": false,
      "IsCloudy": true
    },
    {
      "name": "Miami",
      "state": "Florida",
      "Temperature": "85°F",
      "Humidity": "80%",
      "Precipitation": "70%",
      "Wind": "5 mph",
      "IsRaining": true,
      "IsSnowing": false,
      "IsSunny": false,
      "IsCloudy": true
    },
    {
      "name": "Chicago",
      "state": "Illinois",
      "Temperature": "22°F",
      "Humidity": "55%",
      "Precipitation": "0%",
      "Wind": "20 mph",
      "IsRaining": false,
      "IsSnowing": false,
      "IsSunny": true,
      "IsCloudy": false
    },
    {
      "name": "Austin",
      "state": "Texas",
      "Temperature": "70°F",
      "Humidity": "50%",
      "Precipitation": "5%",
      "Wind": "12 mph",
      "IsRaining": false,
      "IsSnowing": false,
      "IsSunny": true,
      "IsCloudy": false
    }, 
     {
      "name": "San Francisco", 
      "state": "California", 
      "Temperature": "65°F", 
      "Humidity": "60%", 
      "Precipitation": "10%", 
      "Wind": "8 mph", 
      "IsRaining": false, 
      "IsSnowing": false, 
      "IsSunny": false, 
      "IsCloudy": true
    },
    {
      "name": "Denver", 
      "state": "Colorado", 
      "Temperature": "45°F", 
      "Humidity": "30%", 
      "Precipitation": "0%", 
      "Wind": "15 mph", 
      "IsRaining": false, 
      "IsSnowing": false, 
      "IsSunny": true, 
      "IsCloudy": false
    },
    {      "name": "Seattle", "state": "Washington", "Temperature": "55°F", "Humidity": "75%", "Precipitation": "15%", "Wind": "10 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": false, "IsCloudy": true},
    {"name": "Boston", "state": "Massachusetts", "Temperature": "50°F", "Humidity": "65%", "Precipitation": "20%", "Wind": "12 mph", "IsRaining": true, "IsSnowing": false, "IsSunny": false, "IsCloudy": true},
    {"name": "LasVegas", "state": "Nevada", "Temperature": "80°F", "Humidity": "20%", "Precipitation": "0%", "Wind": "5 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Portland", "state": "Oregon", "Temperature": "53°F", "Humidity": "70%", "Precipitation": "10%", "Wind": "7 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": false, "IsCloudy": true},
    {"name": "Nashville", "state": "Tennessee", "Temperature": "60°F", "Humidity": "55%", "Precipitation": "5%", "Wind": "10 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Phoenix", "state": "Arizona", "Temperature": "85°F", "Humidity": "15%", "Precipitation": "0%", "Wind": "8 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Dallas", "state": "Texas", "Temperature": "72°F", "Humidity": "45%", "Precipitation": "5%", "Wind": "10 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Houston", "state": "Texas", "Temperature": "74°F", "Humidity": "60%", "Precipitation": "10%", "Wind": "8 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": false, "IsCloudy": true},
    {"name": "Philadelphia", "state": "Pennsylvania", "Temperature": "52°F", "Humidity": "65%", "Precipitation": "15%", "Wind": "12 mph", "IsRaining": true, "IsSnowing": false, "IsSunny": false, "IsCloudy": true},
    {"name": "SanDiego", "state": "California", "Temperature": "68°F", "Humidity": "55%", "Precipitation": "5%", "Wind": "7 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "SanAntonio", "state": "Texas", "Temperature": "73°F", "Humidity": "50%", "Precipitation": "5%", "Wind": "10 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Charlotte", "state": "North Carolina", "Temperature": "65°F", "Humidity": "50%", "Precipitation": "5%", "Wind": "9 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Atlanta", "state": "Georgia", "Temperature": "66°F", "Humidity": "50%", "Precipitation": "5%", "Wind": "10 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Detroit", "state": "Michigan", "Temperature": "48°F", "Humidity": "60%", "Precipitation": "10%", "Wind": "12 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": false, "IsCloudy": true},
    {"name": "Columbus", "state": "Ohio", "Temperature": "49°F", "Humidity": "55%", "Precipitation": "5%", "Wind": "11 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Indianapolis", "state": "Indiana", "Temperature": "51°F", "Humidity": "50%", "Precipitation": "5%", "Wind": "10 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "KansasCity", "state": "Missouri", "Temperature": "54°F", "Humidity": "45%", "Precipitation": "5%", "Wind": "10 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "OklahomaCity", "state": "Oklahoma", "Temperature": "58°F", "Humidity": "40%", "Precipitation": "5%", "Wind": "12 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "SaltLakeCity", "state": "Utah", "Temperature": "48°F", "Humidity": "35%", "Precipitation": "5%", "Wind": "13 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Minneapolis", "state": "Minnesota", "Temperature": "42°F", "Humidity": "50%", "Precipitation": "5%", "Wind": "14 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Cleveland", "state": "Ohio", "Temperature": "47°F", "Humidity": "55%", "Precipitation": "5%", "Wind": "10 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Tucson", "state": "Arizona", "Temperature": "82°F", "Humidity": "10%", "Precipitation": "0%", "Wind": "6 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Orlando", "state": "Florida", "Temperature": "78°F", "Humidity": "65%", "Precipitation": "5%", "Wind": "8 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Tampa", "state": "Florida", "Temperature": "79°F", "Humidity": "60%", "Precipitation": "10%", "Wind": "7 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Raleigh", "state": "North Carolina", "Temperature": "64°F", "Humidity": "50%", "Precipitation": "5%", "Wind": "8 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Anchorage", "state": "Alaska", "Temperature": "32°F", "Humidity": "85%", "Precipitation": "20%", "Wind": "5 mph", "IsRaining": false, "IsSnowing": true, "IsSunny": false, "IsCloudy": true},
    {"name": "Honolulu", "state": "Hawaii", "Temperature": "82°F", "Humidity": "70%", "Precipitation": "5%", "Wind": "10 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Juneau", "state": "Alaska", "Temperature": "35°F", "Humidity": "80%", "Precipitation": "25%", "Wind": "7 mph", "IsRaining": true, "IsSnowing": false, "IsSunny": false, "IsCloudy": true},
    {"name": "Boise", "state": "Idaho", "Temperature": "45°F", "Humidity": "50%", "Precipitation": "10%", "Wind": "12 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Cheyenne", "state": "Wyoming", "Temperature": "40°F", "Humidity": "45%", "Precipitation": "5%", "Wind": "15 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Helena", "state": "Montana", "Temperature": "38°F", "Humidity": "55%", "Precipitation": "10%", "Wind": "10 mph", "IsRaining": false, "IsSnowing": true, "IsSunny": false, "IsCloudy": true},
    {"name": "Bismarck", "state": "North Dakota", "Temperature": "28°F", "Humidity": "65%", "Precipitation": "15%", "Wind": "20 mph", "IsRaining": false, "IsSnowing": true, "IsSunny": false, "IsCloudy": true},
    {"name": "Pierre", "state": "South Dakota", "Temperature": "33°F", "Humidity": "60%", "Precipitation": "10%", "Wind": "18 mph", "IsRaining": false, "IsSnowing": true, "IsSunny": false, "IsCloudy": true},
    {"name": "Billings", "state": "Montana", "Temperature": "42°F", "Humidity": "40%", "Precipitation": "5%", "Wind": "13 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Fargo", "state": "North Dakota", "Temperature": "26°F", "Humidity": "70%", "Precipitation": "20%", "Wind": "22 mph", "IsRaining": false, "IsSnowing": true, "IsSunny": false, "IsCloudy": true},
    {"name": "Madison", "state": "Wisconsin", "Temperature": "39°F", "Humidity": "50%", "Precipitation": "5%", "Wind": "10 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Lincoln", "state": "Nebraska", "Temperature": "47°F", "Humidity": "45%", "Precipitation": "5%", "Wind": "10 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "LittleRock", "state": "Arkansas", "Temperature": "65°F", "Humidity": "55%", "Precipitation": "5%", "Wind": "8 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Montpelier", "state": "Vermont", "Temperature": "34°F", "Humidity": "70%", "Precipitation": "15%", "Wind": "10 mph", "IsRaining": false, "IsSnowing": true, "IsSunny": false, "IsCloudy": true},
    {"name": "Concord", "state": "New Hampshire", "Temperature": "37°F", "Humidity": "65%", "Precipitation": "10%", "Wind": "12 mph", "IsRaining": false, "IsSnowing": true, "IsSunny": false, "IsCloudy": true},
    {"name": "Providence", "state": "Rhode Island", "Temperature": "44°F", "Humidity": "60%", "Precipitation": "10%", "Wind": "15 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Hartford", "state": "Connecticut", "Temperature": "46°F", "Humidity": "55%", "Precipitation": "10%", "Wind": "13 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Dover", "state": "Delaware", "Temperature": "50°F", "Humidity": "50%", "Precipitation": "5%", "Wind": "10 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Topeka", "state": "Kansas", "Temperature": "55°F", "Humidity": "45%", "Precipitation": "5%", "Wind": "12 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Richmond", "state": "Virginia", "Temperature": "62°F", "Humidity": "50%", "Precipitation": "5%", "Wind": "8 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Charleston", "state": "West Virginia", "Temperature": "59°F", "Humidity": "55%", "Precipitation": "5%", "Wind": "10 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Augusta", "state": "Maine", "Temperature": "31°F", "Humidity": "75%", "Precipitation": "20%", "Wind": "7 mph", "IsRaining": false, "IsSnowing": true, "IsSunny": false, "IsCloudy": true},
    {"name": "Jackson", "state": "Mississippi", "Temperature": "67°F", "Humidity": "50%", "Precipitation": "5%", "Wind": "8 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Montgomery", "state": "Alabama", "Temperature": "70°F", "Humidity": "50%", "Precipitation": "5%", "Wind": "7 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Frankfort", "state": "Kentucky", "Temperature": "60°F", "Humidity": "50%", "Precipitation": "5%", "Wind": "10 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Harrisburg", "state": "Pennsylvania", "Temperature": "52°F", "Humidity": "60%", "Precipitation": "10%", "Wind": "10 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": true, "IsCloudy": false},
    {"name": "Olympia", "state": "Washington", "Temperature": "48°F", "Humidity": "70%", "Precipitation": "15%", "Wind": "10 mph", "IsRaining": false, "IsSnowing": false, "IsSunny": false, "IsCloudy": true},
    {
      "name": "StLouis",
      "state": "Missouri",
      "Temperature": "26°F",
      "Humidity": "80%",
      "Precipitation": "20%",
      "Wind": "10 mph",
      "IsRaining": false,
      "IsSnowing": true,
      "IsSunny": false,
      "IsCloudy": true
    }
  ],
  "States": [
    {
      "StateName": "California",
      "CapitalCity": "Sacramento",
      "Population": "39.5 million",
      "startYear": 1850,
      "StateNum": 31,
      "funFact": "California has the most diverse geography in the US, including beaches, mountains, deserts, and forests."
    },
    {
      "StateName": "NewYork",
      "CapitalCity": "Albany",
      "Population": "19.8 million",
      "startYear": 1788,
      "StateNum": 11,
      "funFact": "New York is home to the first skyscraper ever built, the Flatiron Building."
    },
    {
      "StateName": "Florida",
      "CapitalCity": "Tallahassee",
      "Population": "21.5 million",
      "startYear": 1845,
      "StateNum": 27,
      "funFact": "Florida is the largest producer of oranges in the U.S. and supplies most of the nation's orange juice."
    },
    {
      "StateName": "Illinois",
      "CapitalCity": "Springfield",
      "Population": "12.7 million",
      "startYear": 1818,
      "StateNum": 21,
      "funFact": "Illinois is home to the world's first skyscraper, the Home Insurance Building in Chicago."
    },
    {
      "StateName": "Texas",
      "CapitalCity": "Austin",
      "Population": "29 million",
      "startYear": 1845,
      "StateNum": 28,
      "funFact": "Texas is the second-largest state in the U.S. and has more than 1,000 species of animals."
    },

    {
      "StateName": "Delaware",
      "CapitalCity": "Dover",
      "Population": "1.0 million",
      "startYear": 1787,
      "StateNum": 1,
      "funFact": "Delaware was the first state to ratify the Constitution."
    },
    {
      "StateName": "Pennsylvania",
      "CapitalCity": "Harrisburg",
      "Population": "12.8 million",
      "startYear": 1787,
      "StateNum": 2,
      "funFact": "Pennsylvania is home to the Liberty Bell and Independence Hall."
    },
    {
      "StateName": "NewJersey",
      "CapitalCity": "Trenton",
      "Population": "9.3 million",
      "startYear": 1787,
      "StateNum": 3,
      "funFact": "New Jersey has the most diners in the world and is often referred to as the 'Diner Capital of the World.'"
    },
    {
      "StateName": "Georgia",
      "CapitalCity": "Atlanta",
      "Population": "10.8 million",
      "startYear": 1788,
      "StateNum": 4,
      "funFact": "Georgia is the largest producer of peanuts in the United States."
    },
    {
      "StateName": "Connecticut",
      "CapitalCity": "Hartford",
      "Population": "3.6 million",
      "startYear": 1788,
      "StateNum": 5,
      "funFact": "The first telephone book was published in New Haven, Connecticut, in 1878."
    },
    {
      "StateName": "Massachusetts",
      "CapitalCity": "Boston",
      "Population": "7.0 million",
      "startYear": 1788,
      "StateNum": 6,
      "funFact": "Massachusetts is home to the first public park in America, Boston Common, established in 1634."
    },
    {
      "StateName": "Maryland",
      "CapitalCity": "Annapolis",
      "Population": "6.2 million",
      "startYear": 1788,
      "StateNum": 7,
      "funFact": "The U.S. Naval Academy was founded in Annapolis, Maryland, in 1845."
    },
    {
      "StateName": "SouthCarolina",
      "CapitalCity": "Columbia",
      "Population": "5.3 million",
      "startYear": 1788,
      "StateNum": 8,
      "funFact": "South Carolina produces more peaches than Georgia, known as the 'Peach State.'"
    },
    {
      "StateName": "NewHampshire",
      "CapitalCity": "Concord",
      "Population": "1.4 million",
      "startYear": 1788,
      "StateNum": 9,
      "funFact": "New Hampshire was the first state to establish its own constitution."
    },
    {
      "StateName": "Virginia",
      "CapitalCity": "Richmond",
      "Population": "8.7 million",
      "startYear": 1788,
      "StateNum": 10,
      "funFact": "Virginia is known as the 'Mother of Presidents' because eight U.S. presidents were born there."
    },
    {
      "StateName": "NorthCarolina",
      "CapitalCity": "Raleigh",
      "Population": "10.7 million",
      "startYear": 1789,
      "StateNum": 12,
      "funFact": "North Carolina is the birthplace of aviation, thanks to the Wright brothers' first flight in Kitty Hawk."
    },
    {
      "StateName": "RhodeIsland",
      "CapitalCity": "Providence",
      "Population": "1.1 million",
      "startYear": 1790,
      "StateNum": 13,
      "funFact": "Rhode Island is the smallest state in the U.S. but has the longest official name: 'State of Rhode Island and Providence Plantations.'"
    },
    {
      "StateName": "Vermont",
      "CapitalCity": "Montpelier",
      "Population": "0.6 million",
      "startYear": 1791,
      "StateNum": 14,
      "funFact": "Vermont is the largest producer of maple syrup in the United States."
    },
    {
      "StateName": "Kentucky",
      "CapitalCity": "Frankfort",
      "Population": "4.5 million",
      "startYear": 1792,
      "StateNum": 15,
      "funFact": "Kentucky is known for its bourbon; 95% of the world's bourbon is produced there."
    },
    {
      "StateName": "Tennessee",
      "CapitalCity": "Nashville",
      "Population": "7.1 million",
      "startYear": 1796,
      "StateNum": 16,
      "funFact": "Tennessee is home to the Great Smoky Mountains National Park, the most visited national park in the U.S."
    },
    {
      "StateName": "Ohio",
      "CapitalCity": "Columbus",
      "Population": "11.8 million",
      "startYear": 1803,
      "StateNum": 17,
      "funFact": "Ohio is known as the 'Birthplace of Aviation' because it is home to the Wright brothers."
    },
    {
      "StateName": "Indiana",
      "CapitalCity": "Indianapolis",
      "Population": "6.8 million",
      "startYear": 1816,
      "StateNum": 19,
      "funFact": "Indiana is known for hosting the Indianapolis 500, the largest single-day sporting event in the world."
    },
    {
      "StateName": "Alabama",
      "CapitalCity": "Montgomery",
      "Population": "4.9 million",
      "startYear": 1819,
      "StateNum": 22,
      "funFact": "Alabama was the first state to declare Christmas a legal holiday."
    },
    {
      "StateName": "Michigan",
      "CapitalCity": "Lansing",
      "Population": "10.0 million",
      "startYear": 1837,
      "StateNum": 26,
      "funFact": "Michigan has the longest freshwater coastline of any state in the U.S."
    },
    {
      "StateName": "Wisconsin",
      "CapitalCity": "Madison",
      "Population": "5.9 million",
      "startYear": 1848,
      "StateNum": 30,
      "funFact": "Wisconsin is known as 'America's Dairyland' and produces more cheese than any other state."
    },
    {
      "StateName": "Minnesota",
      "CapitalCity": "Saint Paul",
      "Population": "5.6 million",
      "startYear": 1858,
      "StateNum": 32,
      "funFact": "Minnesota is the Land of 10,000 Lakes, boasting over 11,000 lakes."
    },
    {
      "StateName": "Iowa",
      "CapitalCity": "Des Moines",
      "Population": "3.2 million",
      "startYear": 1846,
      "StateNum": 29,
      "funFact": "Iowa is the only state whose east and west borders are formed entirely by rivers."
    },
    {
      "StateName": "Missouri",
      "CapitalCity": "Jefferson City",
      "Population": "6.2 million",
      "startYear": 1821,
      "StateNum": 24,
      "funFact": "The Gateway Arch in St. Louis is the tallest man-made monument in the U.S."
    },
    {
      "StateName": "Arkansas",
      "CapitalCity": "Little Rock",
      "Population": "3.0 million",
      "startYear": 1836,
      "StateNum": 25,
      "funFact": "Arkansas is home to the only active diamond mine in the U.S., Crater of Diamonds State Park."
    },
    {
      "StateName": "Louisiana",
      "CapitalCity": "Baton Rouge",
      "Population": "4.6 million",
      "startYear": 1812,
      "StateNum": 18,
      "funFact": "Louisiana is known for Mardi Gras, one of the largest and most famous celebrations in the world."
    },
    {
      "StateName": "Montana",
      "CapitalCity": "Helena",
      "Population": "1.1 million",
      "startYear": 1889,
      "StateNum": 41,
      "funFact": "Montana has the largest grizzly bear population in the continental U.S."
    },
    {
      "StateName": "Wyoming",
      "CapitalCity": "Cheyenne",
      "Population": "0.6 million",
      "startYear": 1890,
      "StateNum": 44,
      "funFact": "Wyoming was the first state to grant women the right to vote."
    },
    {
      "StateName": "North Dakota",
      "CapitalCity": "Bismarck",
      "Population": "0.8 million",
      "startYear": 1889,
      "StateNum": 39,
      "funFact": "North Dakota is the nation's leading producer of sunflower seeds."
    },
    {
      "StateName": "South Dakota",
      "CapitalCity": "Pierre",
      "Population": "0.9 million",
      "startYear": 1889,
      "StateNum": 40,
      "funFact": "South Dakota is home to Mount Rushmore."
    },
    {
      "StateName": "Indiana",
      "CapitalCity": "Indianapolis",
      "Population": "6.8 million",
      "startYear": 1816,
      "StateNum": 19,
      "funFact": "Indiana is known for hosting the Indianapolis 500, the largest single-day sporting event in the world."
    },
    {
      "StateName": "Nebraska",
      "CapitalCity": "Lincoln",
      "Population": "1.9 million",
      "startYear": 1867,
      "StateNum": 37,
      "funFact": "Nebraska is home to the largest rail yard in the world, in North Platte."
    },
    {
      "StateName": "Kansas",
      "CapitalCity": "Topeka",
      "Population": "2.9 million",
      "startYear": 1861,
      "StateNum": 34,
      "funFact": "Kansas is known as the 'Sunflower State' and is the leading producer of sunflowers in the U.S."
    },
    {
      "StateName": "Oklahoma",
      "CapitalCity": "Oklahoma City",
      "Population": "3.9 million",
      "startYear": 1907,
      "StateNum": 46,
      "funFact": "Oklahoma has the largest American Indian population of any state."
    },
    {
      "StateName": "Colorado",
      "CapitalCity": "Denver",
      "Population": "5.8 million",
      "startYear": 1876,
      "StateNum": 38,
      "funFact": "Colorado has the highest average elevation of any state in the U.S."
    },
    {
      "StateName": "Idaho",
      "CapitalCity": "Boise",
      "Population": "1.7 million",
      "startYear": 1890,
      "StateNum": 43,
      "funFact": "Idaho is known for its potatoes and produces about one-third of the nation's total crop."
    },
    {
      "StateName": "Utah",
      "CapitalCity": "Salt Lake City",
      "Population": "3.3 million",
      "startYear": 1896,
      "StateNum": 45,
      "funFact": "Utah is home to the Great Salt Lake, the largest saltwater lake in the Western Hemisphere."
    }, {
      "StateName": "Arizona",
      "CapitalCity": "Phoenix",
      "Population": "7.2 million",
      "startYear": 1912,
      "StateNum": 48,
      "funFact": "Arizona is home to the Grand Canyon, one of the Seven Natural Wonders of the World."
    },
    {
      "StateName": "Nevada",
      "CapitalCity": "Carson City",
      "Population": "3.2 million",
      "startYear": 1864,
      "StateNum": 36,
      "funFact": "Nevada has the largest gold-producing mines in the U.S."
    },
    {
      "StateName": "Washington",
      "CapitalCity": "Olympia",
      "Population": "7.7 million",
      "startYear": 1889,
      "StateNum": 42,
      "funFact": "Washington is the leading producer of apples in the U.S."
    },
    {
      "StateName": "Oregon",
      "CapitalCity": "Salem",
      "Population": "4.2 million",
      "startYear": 1859,
      "StateNum": 33,
      "funFact": "Oregon is famous for Crater Lake, the deepest lake in the U.S."
    },
    {
      "StateName": "California",
      "CapitalCity": "Sacramento",
      "Population": "39.2 million",
      "startYear": 1850,
      "StateNum": 31,
      "funFact": "California is the largest state by population and is known for its tech industry and entertainment capital, Hollywood."
    },
    {
      "StateName": "Hawaii",
      "CapitalCity": "Honolulu",
      "Population": "1.4 million",
      "startYear": 1959,
      "StateNum": 50,
      "funFact": "Hawaii is the only state composed entirely of islands."
    },
    {
      "StateName": "Alaska",
      "CapitalCity": "Juneau",
      "Population": "0.7 million",
      "startYear": 1959,
      "StateNum": 49,
      "funFact": "Alaska has more coastline than all other U.S. states combined."
    },
    {
      "StateName": "Kentucky",
      "CapitalCity": "Frankfort",
      "Population": "4.5 million",
      "startYear": 1792,
      "StateNum": 15,
      "funFact": "Kentucky is known for its bourbon; 95% of the world's bourbon is produced there."
    },
    {
      "StateName": "Maine",
      "CapitalCity": "Augusta",
      "Population": "1.3 million",
      "startYear": 1820,
      "StateNum": 23,
      "funFact": "Maine is the only state whose name has one syllable."
    }

  ]
}

app.use((request, resposne, next) => {
  console.log(request.method + "/" + request.url)
  next();
})

app.get("/", (request, response) => {
  response.status(200).send("<h1> Welcome to my page! You'll be able to utilize my API. My API service focuses on the weather and state information. It's purpose is t tell you the weather including the temperature, humidity, precipitation and more in different cities and have facts about different states. Type /docs after the url to figure out how to use this service</h1>")
})

app.get("/docs", (request, response) => {
  response.status(200).send("<h1> To use the API service first you can type the path /api/cities/newyorkcity or any city in place of newyorkcity to see the weather there. To see state info type the path /api/states/texas pr in state in place for texas to see information on the state. Don't add spaces in the state or city names!    </h1>")
})

app.get("/api/cities/newyorkcity", (request, response) => {
  response.status(200).json(WeatherStateInfo.Cities[1])
})

app.get("/api/states/texas", (request, response) => {
  response.status(200).json(WeatherStateInfo.States[4])
})

app.get("/api/cities/:search", (request, response) => {
  const searc = request.params.search
  console.log(searc)

  for(let i = 0 ; i < WeatherStateInfo.Cities.length; i++){
  if (WeatherStateInfo.Cities[i].name.toLowerCase() == searc){
  response.status(200).send(WeatherStateInfo.Cities[i])
}
} 
response.status(200).send("<h1>The city you sent is unavailable, try again! </h1>")
})

app.get("/api/States/:search", (request, response) => {
  const searc = request.params.search
  console.log(searc)

  for(let i = 0 ; i < WeatherStateInfo.States.length; i++){
  if (WeatherStateInfo.States[i].StateName.toLowerCase() == searc){
  response.status(200).send(WeatherStateInfo.States[i])
} 
  } response.status(200).send("<h1>The state you sent is unavailable, try again! </h1>")

})

app.use((request, response, next) => {
  response.status(404).send("404 not found")
})

app.listen(3000, () => {
  console.log("Server running")
})