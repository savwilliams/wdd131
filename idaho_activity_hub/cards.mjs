// cards.js
const activities = [
    {
        title: "Explore the Legacy Flight Museum",
        description: "A small but fascinating aviation museum showcasing vintage aircraft and historical artifacts.",
        location: "400 Airport Rd, Rexburg, ID 83440",
        tags: ["Indoors", "I need something quick (1-2 hours)"]
    },
    {
        title: "Snowshoeing at Targhee National Forest",
        description: "A peaceful winter adventure through scenic snow-covered trails.",
        location: "1405 Hollipark Dr, Idaho Falls, ID 83401",
        tags: ["Outdoors", "I have several hours or all day"]
    },
    {
        title: "Hiking at R Mountain (The Menan Buttes)",
        description: "A short, steep hike offering panoramic views of the surrounding area.",
        location: "Menan, ID 83434",
        tags: ["Outdoors", "I have tons of energy", "I need something quick (1-2 hours)"]
    },
    {
        title: "Catch a movie at Paramount 5 Theatre",
        description: "Enjoy the latest movies in a cozy and comfortable theater setting.",
        location: "38 S Center St, Rexburg, ID 83440",
        tags: ["Indoors", "I don't feel like moving", "I need something quick (1-2 hours)"]
    },
    {
        title: "Walk through Nature Park",
        description: "A serene and well-maintained park with trails, ponds, and open spaces.",
        location: "Nature Park Dr., Rexburg, ID 83440",
        tags: ["Outdoors", "I need to limit spending", "I need something quick (1-2 hours)"]
    },
    {
        title: "Soak in the Green Canyon Hot Springs",
        description: "Relax in natural hot spring pools with indoor and outdoor options.",
        location: "2432 N Canyon Creek Rd, Newdale, ID 83436",
        tags: ["Indoors", "I want something to help me relax", "I have several hours or all day"]
    },
    {
        title: "Attend a live music or comedy show at The Romance Theater",
        description: "A historic theater hosting live performances and entertainment events.",
        location: "2 E Main St, Rexburg, ID 83440",
        tags: ["Indoors", "I want something energizing", "I want group activities"]
    },
    {
        title: "Fishing at Henry’s Fork of the Snake River",
        description: "A peaceful spot for fishing, surrounded by beautiful natural scenery.",
        location: "Henry's Fork, Idaho",
        tags: ["Outdoors", "I want solo activities", "I have several hours or all day"]
    },
    {
        title: "Play laser tag at Blast Off",
        description: "A fun and active laser tag experience for groups of friends or family.",
        location: "1980 N Yellowstone Hwy, Idaho Falls, ID 83401",
        tags: ["Indoors", "I want group activities", "I need something quick (1-2 hours)"]
    },
    {
        title: "Visit the Idaho Centennial Carousel",
        description: "A historic carousel offering a nostalgic ride for all ages.",
        location: "S 3rd W, Rexburg, ID 83440",
        tags: ["Outdoors", "I need something quick (1-2 hours)", "I need to limit spending"]
    },
    {
        title: "Day trip to Yellowstone National Park",
        description: "Explore geysers, wildlife, and breathtaking landscapes in one of America’s most famous parks.",
        location: "Yellowstone National Park, Wyoming",
        tags: ["Outdoors", "I have several hours or all day", "I will pay anything to not be bored"]
    },
    {
        title: "Ziplining at Heise Hot Springs",
        description: "An exciting ziplining adventure with breathtaking views of the surrounding area.",
        location: "Heise Hot Springs, Idaho 83443",
        tags: ["Outdoors", "I have tons of energy", "I want something energizing"]
    },
    {
        title: "Tour the BYU-Idaho Campus Gardens",
        description: "A tranquil garden space showcasing diverse plant life and beautiful landscaping.",
        location: "W Campus Dr., Rexburg, ID 83460",
        tags: ["Outdoors", "I need to limit spending", "I want something to help me relax"]
    },
    {
        title: "Bowling at Fat Cats Rexburg",
        description: "A fun bowling alley with additional arcade games and snacks.",
        location: "475 N 2nd E, Rexburg, ID 83440",
        tags: ["Indoors", "I want group activities", "I need something quick (1-2 hours)"]
    },
    {
        title: "Photography at Cress Creek Nature Trail",
        description: "A scenic trail perfect for photography and capturing beautiful moments in nature.",
        location: "11760-11894 S Snake River Rd, Rexburg, ID 83440",
        tags: ["Outdoors", "I want solo activities", "I need to limit spending"]
    },
    {
        title: "Take a scenic drive to Mesa Falls",
        description: "A breathtaking drive with a stop at the majestic Mesa Falls.",
        location: "Upper Mesa Falls, Idaho 83420",
        tags: ["Outdoors", "I want something to help me relax", "I have several hours or all day"]
    },
    {
        title: "Painting pottery at Possibly Picasso",
        description: "A creative and relaxing activity where you can paint your own pottery pieces.",
        location: "3454 S 25th E, Idaho Falls, ID 83404",
        tags: ["Indoors", "I want solo activities", "I don't feel like moving"]
    },
    {
        title: "Rafting or floating on the Snake River",
        description: "An adventurous water activity perfect for groups or individuals.",
        location: "Rexburg, Idaho",
        tags: ["Outdoors", "I have tons of energy", "I have several hours or all day"]
    },
    {
        title: "Visit a farmers’ market",
        description: "A lively market offering fresh produce, homemade goods, and unique crafts.",
        location: "452 W 2nd N, Rexburg, ID 83440",
        tags: ["Outdoors", "I need to limit spending", "I need something quick (1-2 hours)"]
    },
    {
        title: "Escape room at Rexburg Re-Escape",
        description: "A thrilling group activity where you solve puzzles to escape within a time limit.",
        location: "155 W Main St #7, Rexburg, ID 83440",
        tags: ["Indoors", "I will pay anything to not be bored", "I want group activities"]
    },
    {
        title: "Attend a trivia night at a local café",
        description: "A social and competitive event where you can test your knowledge with friends.",
        location: "Rexburg, Idaho",
        tags: ["Indoors", "I want group activities", "I want something energizing"]
    },
    {
        title: "Relax at a local coffee shop (e.g., Soda Vine or Coco Bean)",
        description: "Enjoy a warm drink and a cozy atmosphere perfect for unwinding.",
        location: "Rexburg, Idaho",
        tags: ["Indoors", "I don't feel like moving", "I want something to help me relax"]
    },
    {
        title: "Snowmobiling near Island Park",
        description: "An exhilarating winter adventure through snowy trails and open landscapes.",
        location: "Island Park, Idaho",
        tags: ["Outdoors", "I have tons of energy", "I will pay anything to not be bored"]
    },
    {
        title: "Explore the Grand Teton National Park",
        description: "A day filled with hiking, wildlife spotting, and exploring stunning mountain landscapes.",
        location: "Grand Teton National Park, Wyoming",
        tags: ["Outdoors", "I have several hours or all day", "I want solo activities"]
    },
    {
        title: "Enjoy a book at the Madison Library District",
        description: "A quiet space with a wide selection of books and comfortable seating areas.",
        location: "73 N Center St, Rexburg, ID 83440",
        tags: ["Indoors", "I don't feel like moving", "I want something to help me relax"]
    },
    {
        title: "Jump on trampolines at the Gravity Factory",
        description: "A fun-filled trampoline park with a variety of games for groups or individuals.",
        location: "165 Airport Rd, Rexburg, ID 83440",
        tags: ["Indoors", "I want group activities", "I need something quick (1-2 hours)"]
    },
    {
        title: "Mountain biking near Kelly Canyon",
        description: "Thrilling trails for mountain biking enthusiasts of all skill levels.",
        location: "Kelly Canyon Rd., Idaho 83443",
        tags: ["Outdoors", "I have tons of energy", "I want something energizing"]
    },
    {
        title: "Host a movie night with friends or family",
        description: "Pick a theme and watch movies with popcorn and snacks for a fun, cozy night in.",
        location: "Home",
        tags: ["Indoors", "I want group activities", "I don't feel like moving"]
    },
    {
        title: "Play board games with family",
        description: "Gather the family for a friendly competition with classic board games like Monopoly or Scrabble.",
        location: "Home",
        tags: ["Indoors", "I want group activities", "I need something quick (1-2 hours)"]
    },
    {
        title: "Video game marathon",
        description: "Spend a few hours playing video games, whether solo or with friends online.",
        location: "Home",
        tags: ["Indoors", "I want group activities", "I have tons of energy"]
    },
    {
        title: "Start a puzzle",
        description: "Relax and unwind by piecing together a challenging jigsaw puzzle.",
        location: "Home",
        tags: ["Indoors", "I want solo activities", "I want something to help me relax"]
    },
    {
        title: "Make homemade crafts",
        description: "Get creative and make DIY crafts like candles, jewelry, or home décor.",
        location: "Home",
        tags: ["Indoors", "I want solo activities", "I want something to help me relax"]
    },
    {
        title: "Cook a new recipe",
        description: "Try cooking or baking a new dish from scratch for an exciting culinary challenge.",
        location: "Home",
        tags: ["Indoors", "I want solo activities", "I don't feel like moving"]
    },
    {
        title: "Host a virtual trivia night",
        description: "Connect with friends or family online to compete in a fun trivia competition.",
        location: "Home",
        tags: ["Indoors", "I want group activities", "I want something energizing"]
    },
    {
        title: "Have a spa day",
        description: "Pamper yourself with skincare routines, baths, and relaxation for a calming experience.",
        location: "Home",
        tags: ["Indoors", "I want solo activities", "I want something to help me relax"]
    },
    {
        title: "Try a new workout routine from YouTube",
        description: "Follow an online workout video to get moving, from yoga to high-intensity interval training (HIIT).",
        location: "Home",
        tags: ["Indoors", "I have tons of energy", "I want something energizing"]
    },
    {
        title: "Host a virtual game night",
        description: "Play online multiplayer games with friends for a fun and competitive evening.",
        location: "Home",
        tags: ["Indoors", "I want group activities", "I have tons of energy"]
    },
    {
        title: "Read a book or listen to an audiobook",
        description: "Escape into a good story by reading or listening to an audiobook in a quiet space.",
        location: "Home",
        tags: ["Indoors", "I want solo activities", "I want something to help me relax"]
    },
    {
        title: "Create a vision board",
        description: "Gather magazines, scissors, and glue to make a vision board reflecting your goals and aspirations.",
        location: "Home",
        tags: ["Indoors", "I want solo activities", "I want something to help me relax"]
    },
    {
        title: "Have a makeover or do your makeup",
        description: "Experiment with different makeup styles or give yourself a full makeover for fun.",
        location: "Home",
        tags: ["Indoors", "I want solo activities", "I don't feel like moving"]
    },
    {
        title: "Write in a journal",
        description: "Reflect on your day or explore creative writing in a journal for a therapeutic experience.",
        location: "Home",
        tags: ["Indoors", "I want solo activities", "I want something to help me relax"]
    },
    {
        title: "Host a themed costume party",
        description: "Invite family or roommates to dress up in fun costumes and enjoy snacks and activities.",
        location: "Home",
        tags: ["Indoors", "I want group activities", "I want something energizing"]
    },
    {
        title: "Listen to podcasts or music while relaxing",
        description: "Enjoy a calming or motivational podcast, or simply listen to your favorite playlist while you relax.",
        location: "Home",
        tags: ["Indoors", "I don't feel like moving", "I want something to help me relax"]
    }
];

export function displayCards(filters) {
    const cardMenu = document.querySelector(".card-menu");
    cardMenu.innerHTML = ""; 

    const filteredActivities = activities.filter((activity) =>
        Object.entries(filters).some(([_, values]) =>
            values.some((value) => activity.tags.includes(value))
        )
    );

    filteredActivities.forEach((activity) => {
        const card = document.createElement("div");
        card.classList.add("card-container");
        card.innerHTML = `
            <h3>${activity.title}</h3>
            <p>${activity.description}</p>
            <p>${activity.location}</p>
            <div class="tags-container">
                ${activity.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
            </div>
        `;
        cardMenu.appendChild(card);
    });

    if (filteredActivities.length === 0) {
        cardMenu.innerHTML = "<p>No activities match your filters.</p>";
    }
}
