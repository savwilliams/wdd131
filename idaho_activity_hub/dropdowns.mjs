

  
  
  //populate dropdowns once clicked functions-------------------------------------------------------
  const boardGames = [
    { title: 'Catan', description: 'Players trade and settle resources to dominate the island in this classic strategy game.' },
    { title: 'Secret Hitler', description: 'A hidden roles game where players deceive and deduce to uncover the secret fascists or stop them.' },
    { title: 'Exploding Kittens', description: 'A chaotic card game of luck and strategy where players avoid drawing the dreaded kitten card.' },
    { title: 'Scythe', description: 'A visually stunning game set in an alternate-history 1920s, focused on conquest, resource management, and mech battles.' },
    { title: 'Unstable Unicorns', description: 'Players build unicorn armies while sabotaging others in this competitive card game.' },
    { title: 'Terraforming Mars', description: 'Compete to transform Mars into a habitable planet by managing resources and strategic card play.' },
    { title: 'Azul', description: 'A tile-laying game where players create beautiful mosaics while managing limited resources.' },
    { title: 'Gloomhaven', description: 'A cooperative campaign game with rich storytelling and evolving gameplay.' },
    { title: 'Ticket to Ride', description: 'A classic game of building train routes across countries while balancing risk and reward.' },
    { title: 'Pandemic', description: 'Players work together to stop global outbreaks in this cooperative survival game.' },
    { title: 'Taskmaster Board Game', description: 'Inspired by the TV show, players complete absurd challenges for points and laughs.' },
    { title: 'Codenames', description: 'A team-based word game where players identify their agents through clever clues.' },
    { title: 'Dixit', description: 'A storytelling game where players interpret whimsical artwork to score points.' },
    { title: 'Ark Nova', description: 'Players build and manage modern zoos in this strategic and highly thematic game.' },
    { title: 'Cascadia', description: 'A puzzle tile-placement game about creating harmonious habitats for wildlife.' },
    { title: 'Root', description: 'A war game of woodland creatures vying for control, blending strategy with asymmetric play.' },
    { title: 'Scrawl', description: 'A hilarious party game where bad drawings and wacky interpretations bring laughs.' },
    { title: 'Corks', description: 'A fast-paced family game where players grab tokens to match their cards.' },
    { title: 'Carcassonne', description: 'Players build medieval landscapes with tiles, scoring by completing cities, roads, and fields.' }
  ];
  
  const restaurants = [
    { title: 'Red Rabbit Grill', description: '155 W Main St #8' },
    { title: 'Gringos', description: '43 S Center St' },
    { title: 'Righteous Slice', description: '175 W 2nd S #100' },
    { title: 'Guerrero\'s Mexican Food', description: '27 W Main St' },
    { title: 'The Hickory', description: '485 N 2nd E suite 104' },
    { title: 'Da Pineapple Grill', description: '383 S 2nd W' },
    { title: 'Original Thai Restaurant', description: '10 E Main St' },
    { title: 'Kainoa\'s Hawaiian Grill', description: '115 S 2nd W' },
    { title: 'Cafe Rio Fresh Modern Mexican', description: '76 W 2nd S' },
    { title: 'Millhollow Restaurant', description: '48 S 1st E' },
    { title: 'Five Guys', description: '179 W 2nd S' },
    { title: 'Fresco Kitchen And Grill', description: '1181 S Yellowstone Hwy' },
    { title: 'TacoTime', description: '274 S 2nd W' },
    { title: 'Freddy\'s Frozen Custard & Steakburgers', description: '42 N 2nd E' },
    { title: 'Applebee\'s Grill + Bar', description: '975 University Blvd' },
    { title: 'Mandarin Restaurant', description: '222 E 7th N' },
    { title: 'Cafe Sabor', description: '160 W 2nd S' },
    { title: 'Cupbop - Korean BBQ in a Cup', description: '163 W Main St ste 103' },
    { title: 'Little Caesars Pizza', description: '26 W 1st S' },
    { title: 'Taco Bell', description: '22 W Main St' }
  ];
  
  const rexburgParks = [
    { title: 'Smith Park', description: 'E Main St' },
    { title: 'Porter Park', description: 'S 2nd W & 3rd W' },
    { title: 'Riverside Park', description: '50 W 2nd N' },
    { title: 'Nature Park', description: '5th West & 3rd North, Rexburg, ID 83440' },
    { title: 'Evergreen Park', description: '766 Lodgepole St' },
    { title: 'Park Street Park', description: '513 Park St' },
    { title: 'Hidden Valley Park', description: '47 Mill Race Rd' },
    { title: 'Rexburg Spray Park', description: 'Rexburg, ID' },
    { title: 'Rotary Park', description: '234 Syringa St' },
    { title: 'Rexburg Bike Park', description: '50 W 2nd N' },
    { title: 'Eagle Park & Campground', description: '4 Eagle Pk Dr' },
    { title: 'Rexburg Rapids', description: '50 W 2nd N' },
    { title: 'BYU-Idaho Upper Playfields', description: '620 S Center St' },
    { title: 'Beehive Pavilion', description: 'Rexburg, ID' }
  ];
  
  const topMovies = [
    { title: "All We Imagine as Light", description: "A poignant exploration of contemporary Mumbai, celebrating everyday life." },
    { title: "Nowhere Special", description: "A touching story of a single father trying to find the perfect family for his young son before time runs out." },
    { title: "Girls Will Be Girls", description: "A coming-of-age story set in a Himalayan boarding school where a girl discovers love and self-identity." },
    { title: "The Promised Land", description: "A drama about a Danish man in 1750s America struggling to build a new life in a foreign land." },
    { title: "Ghostlight", description: "A heartfelt drama about grief, focusing on a construction worker’s emotional journey." },
    { title: "Lisa Frankenstein", description: "A quirky reimagining of the Frankenstein story, with a twist of 90s nostalgia." },
    { title: "One Life", description: "Anthony Hopkins stars in this poignant tale of a Holocaust survivor’s efforts to rescue children." },
    { title: "The Return", description: "A visually stunning thriller where a group of travelers return to a strange and mysterious place." },
    { title: "Hit Man", description: "A fast-paced crime drama about a reluctant hitman on a mission that could change his life." },
    { title: "Problemista", description: "A surreal comedy that blends cultural commentary with eccentric humor." },
    { title: "Ziggy Stardust", description: "A biographical drama about the life of David Bowie, exploring his rise to fame." },
    { title: "High on Life", description: "A light-hearted adventure that follows a group of friends embarking on a risky but thrilling road trip." },
    { title: "Ordinary Angels", description: "A feel-good film about ordinary people making extraordinary sacrifices." },
    { title: "The Substance", description: "A mysterious thriller where a scientist grapples with the consequences of his own discoveries." },
    { title: "The Fall Guy", description: "An action-packed film featuring a stuntman caught in a web of intrigue and danger." },
    { title: "Good Grief", description: "A heartfelt comedy about the journey of moving on from grief." },
    { title: "The Crime Is Mine", description: "A clever, suspenseful crime story with plenty of twists and dark humor." },
    { title: "Sometimes I Think About Dying", description: "A darkly humorous take on existential questions, with Daisy Ridley in a standout role." },
    { title: "Orion and the Dark", description: "A beautiful fantasy about a young boy finding courage in a magical world." },
    { title: "The Kitchen", description: "A suspenseful story of three women who take over a criminal empire in New York." }
  ];
  




  export function populateDropdown(){  
    //show and hide dropdowns function----------------------------------------------------------------
    document.querySelectorAll('.dropbtn').forEach(button => {
        button.addEventListener('click', () => {
            const dropdown = button.nextElementSibling;
            dropdown.classList.toggle('show');
        });
    });
    
    window.addEventListener('click', event => {
      console.log(event.target)
        if (!event.target.classList.contains('dropbtn')){
        const dropdowns = document.querySelectorAll(".dropdown-content");
        dropdowns.forEach(dropdown => {
            if (dropdown.classList.contains('show')){
            dropdown.classList.remove('.show');
            }
        });
        }
    });
    

    document.addEventListener('DOMContentLoaded', () => {
  
    // Function to populate a dropdown
    function populateDropdown(dropdownId, items) {
        const dropdownContent = document.querySelector(`#${dropdownId} .dropdown-content`);
        items.forEach(item => {
            const dropdownItem = document.createElement('div');
            dropdownItem.classList.add('dropdown-item');
            dropdownItem.innerHTML = `<h2>${item.title}</h2><p>${item.description}</p>`;
            dropdownContent.appendChild(dropdownItem);
        });
    }
    
    populateDropdown('dropdown-boardgames', boardGames);
    populateDropdown('dropdown-restaurants', restaurants);
    populateDropdown('dropdown-parks', rexburgParks);
    populateDropdown('dropdown-movies', topMovies);
  });
  //-----------------------------------------------------------------------------
  
} 
  