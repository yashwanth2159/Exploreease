function showCards(items, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
    `;

    card.addEventListener("click", () => {
      showModal(item.name, item.image, item.description || "Description not available.");
    });

    container.appendChild(card);
  });
}

function showModal(title, imageUrl, description) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalImage").src = imageUrl;
  document.getElementById("modalDescription").textContent = description;
  document.getElementById("infoModal").style.display = "block";
}

function closeModal() {
  document.getElementById("infoModal").style.display = "none";
showCards(state.topDestinations, "destinations");
showCards(state.famousFoods, "foods");
}
