// =========================
// Change header background on scroll
// =========================
window.addEventListener("scroll", function() {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// =========================
// Background Slideshow Code
// =========================
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");

// Create dots dynamically
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => showSlides(i));
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dot");

function showSlides(n) {
  slides.forEach(slide => (slide.style.opacity = "0"));
  dots.forEach(dot => dot.classList.remove("active"));

  if (n !== undefined) {
    slideIndex = n;
  } else {
    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0;
  }

  slides[slideIndex].style.opacity = "1";
  dots[slideIndex].classList.add("active");

  setTimeout(showSlides, 4000); // auto-change every 4s
}

// start slideshow once page loads
window.addEventListener("load", () => showSlides(0));

// =========================
// Services Section Code
// =========================
const categories = {
  "Security & Surveillance": [
    { name: "CCTV & Alarm Security System", image: "img/ccttv.webp", description: "Absolute Security Alarms provides quality camera and video solutions for homes and businesses. Our specialists design reliable surveillance systems tailored to your needs and budget.<br><br><strong>Types:</strong><br>- Dome Camera<br>- Bullet Camera<br>- C-mount Camera<br>- Day/Night Camera<br>- PTZ Camera<br>- Discreet CCTV<br><strong>Optional:</strong> Audio Camera | Wired | Wireless | Drone" },
    { name: "Access Control & Door Access", image: "img/door.png", description: "Door access control systems are digital security systems that ensure authorized access to your building. They ensure only authorized personnel are entering your building while keeping unauthorized personnel out." },
    { name: "Gate Automation", image: "img/gate.webp", description: "Automatic gates are widely used in residential, commercial, and industrial areas for restricting access. They can be seen in home and business driveways, transportation terminals, delivery docks, mini storage complexes, detention facilities, airports, gated communities, and commercial or industrial manufacturing plants." },
    { name: "Smart Traffic Lights System", image: "img/traffic.jpg", description: "Smart traffic lights used a variety of technologies to dynamically change traffic signals at intersections in response to real-time traffic patterns and weather conditions. Technology used by smart traffic lights may include: Sensors and cameras that detect volume and velocity of approaching traffic." },
    { name: "Biometric and Interactive Display", image: "img/55.png", description: "Biometric systems are using personal characteristics (directly linked to who you are) to authenticate or identify a person. A system collects biometric characteristics unique to every person. These biometric characteristics are then directly linked to verify or identify the individual." },
    { name: "Ham Sam Antenna & Repeater Systems", image: "img/77.png", description: "Han Sam Antenna &  Repeater System since 1990 with proven track record, innovative solutions and steadfast commitment to client success. It has been a prominent figure in the realm of homebrew  Antenna and Repeater Systems and Tactical grade communication monitoring and surveillance." },
    { name: "FDAS (Fire Detection & Alarm)", image: "img/66.png", description: "A Fire alarm system has a number of devices working together to detect and warn people through visual and audio appliances when smoke, fire, carbon monoxide, or other emergencies are present." }
  ],
  "Digital Displays & Advertising": [
    { name: "Indoor & Outdoor LED Display", image: "img/LEDD.jpg", description: "These LED displays varies in thickness and brightness, depending on customer’s needs. Suitable for outdoor display as these displays are weatherproof and can withstand moisture and dust. Up to 27,777 pixels per square meter, display size can be as large as you need it to be." },
    { name: "Smart Signage & Video Wall", image: "img/SMART.jpg", description: "Promote your business while informing and entertaining customers with a cost effective, simplified TV and digital signage solution." },
    { name: "Electronic Digital and Equipment", image: "img/8.png", description: "At crave, we provide a wide range of electronic digital and office equipment to meet your communication and productivity needs. Whether you need a laptop, a desktop, a printer, a telephone, a mobile phone, a headset, or any other gadget, we have it all. Our equipment is designed to help you connect with your clients and colleagues, share information quickly and efficiently, and work from anywhere. With crave, you can enjoy the convenience and quality of modern technology without breaking the bank." },
    { name: "Audio & Lighting System", image: "img/9.png", description: "Sound equipment usually consists of microphones, loudspeakers and amplifiers. Connecting and fine-tuning all of these elements to a sound desk or console requires professionalism, experience and concentration: that’s what makes it so important to have a professional technical team that takes responsibility for the set-up and running of the equipment." },
    { name: "BGM & Public Address", image: "img/10.png", description: "A BGM based PA system allows the user to broadcast music to all zones and can help in entertaining/addressing the public in the most effective way." }
  ],
  "Networking & Communication": [
    { name: "Structured Cabling", image: "img/cabling.webp", description: "Structured Cabling provides a reliable backbone for your network infrastructure, ensuring seamless communication and efficient data transfer. Our specialists design and install organized cabling systems that support voice, data, video, and security solutions with scalability for future growth." },
    { name: "Communication Antenna & Repeater", image: "img/11.png", description: "Communication Antenna & Repeater solutions enhance wireless coverage and signal strength for reliable communication in homes, offices, and large facilities. Our systems are designed to minimize dead zones and ensure clear, uninterrupted connections for voice and data transmission." },
    { name: "PBX System", image: "img/pbx.jpg", description: "PBX System provides efficient call management for businesses, connecting internal extensions and external phone lines in one centralized platform. Our solutions improve communication flow, reduce costs, and support advanced features for both small offices and large organizations." },
    { name: "Public WiFi", image: "img/wi.png", description: "Public Wi-Fi or public networks refer to wireless internet access provided in public areas for free use by the general public." },
    { name: "Packetworx IoT System Integrators", image: "img/12.png", description: "Packetworx is a Philippine-based social enterprise providing LoRaWAN® connectivity (via packetNET) and long-battery-life IoT sensors (packetSERIES and packetSENSE) to enable smart city, agriculture, and industrial monitoring across Metro Manila and nationwide.." }
  ],
  "Energy & Green Solutions": [
    { name: "Solar Powered Lights & Panels", image: "img/5.png", description: "Solar street lights use solar panels to capture and store energy from the sun, providing high-intensity lighting at night without consuming electricity or incurring monthly fees." },
    { name: "Waste-to-Energy Plant Machine", image: "img/7.png", description: "Waste-to-Energy Plant Machine converts everyday waste into usable energy, offering a sustainable solution for both waste management and power generation. This system reduces landfill volume, lowers carbon emissions, and produces clean electricity or heat from solid waste." }
  ],
  "Software & Business Systems": [
    { name: "Software & Web Development", image: "img/webb.png", description: "We cater customized software and web development solutions tailored to your business needs. From simple websites to complex systems, our team designs and develops scalable, secure, and user-friendly applications that help you achieve efficiency and growth." },
    { name: "POS System  Package BIR ACCREDITED", image: "img/13.png", description: "A point of sale, or point of purchase, is where you ring up customers. When customers check out online, walk up to your checkout counter, or pick out an item from your stand or booth, they are at the point of sale. Your point-of-sale system is the hardware and software that enable your business to make those sales." },
    { name: "Queue System", image: "img/queue.jpg", description: "A queue management system gathers real-team  data about the service, wait time, and customers. Analytics provided by a queue management system allows to identify key areas the areas that are in need of improvement. Improves business image. The use of queue system boots customer appeal of a business." },
    { name: "Internet Provider (ILEAD ICT Solutions, Inc.)", image: "img/ilead.jpg", description: "Experience High-Speed Internet Connectivity! Lead a Digital Life with Lead ICT Solutions, Inc." }
  ]
};

// =========================
// Open category modal
// =========================
function openCategory(title, products) {
  document.getElementById("modalTitle").textContent = title;
  const container = document.getElementById("modalProducts");
  container.innerHTML = "";

  products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product-card";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;

    const p = document.createElement("p");
    p.textContent = product.name;

    div.appendChild(img);
    div.appendChild(p);
    div.onclick = () => openProduct(product);

    container.appendChild(div);
  });

  document.getElementById("categoryModal").style.display = "flex";
}

// =========================
// Open product details modal
// =========================
function openProduct(product) {
  document.getElementById("productTitle").textContent = product.name;
  document.getElementById("productImage").src = product.image;
  document.getElementById("productImage").alt = product.name;
  document.getElementById("productDesc").innerHTML = product.description || "No description available.";
  document.getElementById("productModal").style.display = "flex";
}

// =========================
// Close modals
// =========================
function closeModal() {
  document.getElementById("categoryModal").style.display = "none";
}
function closeProductModal() {
  document.getElementById("productModal").style.display = "none";
}
window.onclick = function (event) {
  const categoryModal = document.getElementById("categoryModal");
  const productModal = document.getElementById("productModal");
  if (event.target === categoryModal) closeModal();
  if (event.target === productModal) closeProductModal();
};
// =========================
// Search Functionality (display under search bar)
// =========================
document.getElementById("serviceSearch").addEventListener("keyup", function (e) {
  const query = e.target.value.toLowerCase().trim();
  const resultsDiv = document.getElementById("searchResults");
  resultsDiv.innerHTML = "";

  if (query.length < 1) return;

  let found = false;

  for (const [categoryName, products] of Object.entries(categories)) {
    const matched = products.filter((p) =>
      p.name.toLowerCase().includes(query)
    );

    if (matched.length > 0) {
      found = true;

      const categoryBlock = document.createElement("div");
      categoryBlock.classList.add("category-result");

      const categoryTitle = document.createElement("h3");
      categoryTitle.textContent = categoryName;
      categoryBlock.appendChild(categoryTitle);

      matched.forEach((p) => {
        const item = document.createElement("div");
        item.classList.add("search-item");
        item.style.display = "flex";
        item.style.alignItems = "center";
        item.style.margin = "10px 0";
        item.style.cursor = "pointer"; // make it clickable

        item.innerHTML = `
          <img src="${p.image}" alt="${p.name}" style="width:60px; height:60px; object-fit:cover; margin-right:10px; border-radius:5px;">
          <div>
            <strong>${p.name}</strong>
          </div>
        `;

        // click -> open product modal
        item.addEventListener("click", () => openProduct(p));

        categoryBlock.appendChild(item);
      });

      resultsDiv.appendChild(categoryBlock);
    }
  }

  if (!found) {
    resultsDiv.innerHTML = "<p>No results found.</p>";
  }
});
