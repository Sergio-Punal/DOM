const addCardButton = document.getElementById("addCarta");
addCardButton.addEventListener("click", function() {
  const suit = document.getElementById("palo").value;
  const number = document.getElementById("numero").value;

  // Check if card is already shown
  const cardId = `${suit}-${number}`;
  if (document.getElementById(cardId)) {
    alert("Carta ya mostrada");
    return;
  }

  // Create new figure element
  const newCard = document.createElement("figure");
  newCard.id = cardId;

  // Create new img element
  const newImg = document.createElement("img");
  newImg.src = `imagenes/${suit}/${number}.png`;
  newCard.appendChild(newImg);

  // Add new figure element to the figuras section
  const figuresSection = document.getElementById("figuras");
  figuresSection.appendChild(newCard);
  
  // Add number of card to the select
  const select = document.getElementById("ncartas");
  const option = document.createElement("option");
  option.value = cardId;
  option.text = number;
  select.appendChild(option);
});


// Manejar el evento de click del botón "Borrar carta":
const delCardButton = document.getElementById("delCarta");
delCardButton.addEventListener("click", function() {
  const suit = document.getElementById("palo").value;
  const number = document.getElementById("numero").value;

  // Check if card is already shown
  const cardId = `${suit}-${number}`;
  const card = document.getElementById(cardId);
  if (!card) {
    alert("Carta no encontrada");
    return;
  }

  // Remove card from figures section
  card.remove();
  
  // Remove number of card from the select
  const select = document.getElementById("ncartas");
  select.remove(select.selectedIndex);
});

// Manejar el evento 

const operateButton = document.getElementById("btnOperar");
operateButton.addEventListener("click", function()) {
  const suit = document.getElementById("palo").value;
  const number = document.getElementById("numero").value;
}
  
  // Check if insert or replace is selected
  const insertOption = document.querySelector('input[name="operacion"]:checked');
  if (!insertOption) {
    alert("Debe seleccionar una operación");
    return;
  }
  
  const insert = insertOption

