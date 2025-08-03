// Properties data
const properties = [
  {
    location: "Pretoria",
    price: "R 4 900 000",
    description: "5 Bedroom House for Sale in Silver Lakes Golf Estate",
    images: [
      "https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfNTA1NTc3ZjU0ZGFkNDk2NGExNWQ5ZDIxNTQ0NjFlZGIuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19",
      "https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfNTQ3YzRjZjUxNDk5NGY4MzljYTQwMzA2Y2I2ZGI3OTQuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19",
      "https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfYWViMjM4ZWYxMjhlNGE4OWEwM2UzNGQ1OWEwOWRkOTMuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19",
    ],
    link: "#",
  },
  {
    location: "Centurion",
    price: "R 3 048 900",
    description: "4 Bedroom House for Sale in Silver Wood Estate",
    images: [
      "https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfY2JhMzBkYzUyYTljNGIzZDg2ZDZmODM3N2IyYWRjNzUuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19",
      "https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfYzUzMjRkOTMxOTk3NDA2N2I2Y2FiNmQ3YWY2ZmJlMTEuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19",
      "https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfNDdjMGQ2YWFlMTdiNGZlMWI4ZDFkYmUzOTQxZTNjMzIuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19",
    ],
    link: "#",
  },
  {
    location: "Midrand",
    price: "R 1 985 000",
    description: "3 Bedroom House On Auction in Munyaka",
    images: [
      "https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfZWZhZmI0M2YwZjY0NGQ0NjlkNGVhNGNjMzI1YzI2YTIuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19",
      "https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfYzFiNjhkMWIwMDhmNDdkMTk0NzE2YjczZTQ2Y2ZiNGMuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19",
      "https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfZjJmYzE0MzEyZjBkNGZmNmEyOTZlN2VhMTRjNDAyMDMuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19",
    ],
    link: "#",
  },
  {
    location: "Fourways",
    price: "R 25 000 000",
    description: "3 Bedroom House On Auction",
    images: [
      "https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfMGI2NjVlODUzYmY4NDhhZjk1M2FhMmZkZmQ3NGFhYjguanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19",
      "https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfMTExMmZiZjFmOTY4NGFhOTk1OWIyNmFhYzYzYTYzODEuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19",
      "https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfM2IxOTI3NTU5ZDI1NDcyMThiMjA0ZDk0MTQ2NGZkZGUuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19",
    ],
    link: "#",
  },
  {
    location: "Kempton Park",
    price: "R 1 799 000",
    description: "3 Bedroom House On Auction in Wincrest",
    images: [
      "https://www.genesisprojects.com/wp-content/uploads/2024/09/Exterior_004-scaled.jpg",
      "https://www.genesisprojects.com/wp-content/uploads/2024/09/Unit_A_Kitchen_001_Social_Media.jpg",
      "https://www.genesisprojects.com/wp-content/uploads/2024/09/Unit_A_Lounge_001_Social_Media.jpg",
    ],
    link: "#",
  },
  {
    location: "Waterkloof Ridge",
    price: "R 13 600 000",
    description: "5 Bedroom House On Auction in Carlswald",
    images: [
      "https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfNmJkOGI4YTE4ZWFmNDZlN2I3NmMyMTU0MmViYWIyZmEuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19",
      "https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfMDQxODc5ZDI0NjM1NGIzMmFhNjliNGMyMWUzMjk0OTQuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19",
      "https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfYjdhODdhNWExZmY3NDY1NThkYjZhZmVjOGIyOTQ5NmYuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19",
    ],
    link: "#",
  },
  {
    location: "Durban",
    price: "R 979 900",
    description: "2 Bedroom Apartment On Auction in ZomerWind Apartments",
    images: [
      "https://www.genesisprojects.com/wp-content/uploads/2021/11/ZomerWind-003-scaled.jpg",
      "https://www.genesisprojects.com/wp-content/uploads/2021/11/ZomerWind-004-scaled.jpg",
      "https://www.genesisprojects.com/wp-content/uploads/2021/11/ZomerWind-006-scaled.jpg",
    ],
    link: "#",
  },
  {
    location: "Cape Town",
    price: "R 90 000/PM",
    description: "3 Bedroom House On Auction in WaterFront",
    images: [
      "https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfMDEyNjBjYzgyMDAxNDIxMDlhOTU2OTdmNGM3MjI4Y2MuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19",
      "https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfYzkxMGFkYTUxNjQzNGJiNmIwN2ZiNTMxZGM2ZDk3YjEuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19",
      "https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfN2QzYzQxMDMwZjgzNDUwZGJiYjBiYWIxYjkyNTg4YzIuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19",
    ],
    link: "#",
  },
  {
    location: "Sandton",
    price: "R 45 000 000",
    description: "5 Bedroom House On Auction in Morningside",
    images: [
      "https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfYjMzMjgyNTAwMzhlNDYxMzg5MTBjNDFjNzE1MjU4MDIuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19",
      "https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfZWQyNDM0NzNiZjdlNDc1YmIxM2RlYjEyNWY0Zjk1NzkuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19",
      "https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfOWE4MmJmMGQ2MDljNDk3MTgxMmVlZmE2NWM1Mjg1MWYuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19",
    ],
    link: "#",
  },
  {
    location: "West Rand",
    price: "R 1 899 900",
    description: "3 Bedroom House On Auction in La Polma",
    images: [
      "https://www.genesisprojects.com/wp-content/uploads/2021/09/22829.jpg",
      "https://www.genesisprojects.com/wp-content/uploads/2021/09/22744.jpg",
      "https://www.genesisprojects.com/wp-content/uploads/2021/09/22767.jpg",
    ],
    link: "#",
  },
];

// Render listings dynamically
const listingsContainer = document.getElementById("property-listings");

properties.forEach((property, index) => {
  const container = document.createElement("div");
  container.className = "property";
  container.innerHTML = `
    <a class="care" href="${property.link}">${property.location}</a>
    <div class="slider" id="slider-${index}">
      ${property.images
        .map(
          (img, i) => `
        <img src="${img}" class="slide ${i === 0 ? "active" : ""}" alt="${
            property.location
          } image ${i + 1}">
      `
        )
        .join("")}
      <button class="prev" onclick="prevSlide(${index})">&#10094;</button>
      <button class="next" onclick="nextSlide(${index})">&#10095;</button>
    </div>
    <p>${property.price} – ${property.description}</p>
  `;
  listingsContainer.appendChild(container);
});

// Carousel functionality
const slideIndices = Array(properties.length).fill(0);

function showSlide(propertyIndex, n) {
  const slides = document.querySelectorAll(`#slider-${propertyIndex} .slide`);
  slideIndices[propertyIndex] += n;

  if (slideIndices[propertyIndex] >= slides.length)
    slideIndices[propertyIndex] = 0;
  if (slideIndices[propertyIndex] < 0)
    slideIndices[propertyIndex] = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === slideIndices[propertyIndex]);
  });
}

function nextSlide(index) {
  showSlide(index, 1);
}

function prevSlide(index) {
  showSlide(index, -1);
}

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "🌞";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  themeToggle.textContent = isDark ? "🌞" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
