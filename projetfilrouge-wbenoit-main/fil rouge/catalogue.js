function myHeader() {
    let header = document.getElementById("header");
    let lol = document.getElementById("lol");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.classList.add("active");
            lol.src = "pic/bulb2.png";
        } else {
            header.classList.remove("active");
            lol.src = "pic/bulb.png";
        }
    });
}

function myBars() {
    let bars = document.querySelector("#bar");
    let nav = document.querySelector(".navigation");
    bars.onclick = function () {
        if (nav.style.right == "0%") {
            nav.style.right = "-50%";
            bars.src = "pic/menu.png"
        } else {
            nav.style.right = "0%";
            bars.src = "pic/x.png"
        }
        nav.classList.toggle("new");
    };
}

function toTop() {
    let top = document.querySelector(".top");
    window.onscroll = () => {
        if (window.scrollY > 100 || document.documentElement.scrollTop > 100) {
            top.style.display = "block";
        } else {
            top.style.display = "none";
        }
    };

    top.onclick = () => {
        scrollTo(0, 0);
    };
}

function logout() {
    window.location.href = 'connexion.html';
}

function isUserLoggedIn() {
    // Implémentez votre logique de connexion ici
    // Retournez true si l'utilisateur est connecté, sinon false
    return false; // Pour l'exemple, retourne toujours false
}

$(document).ready(function () {
    // Récupérez les éléments DOM
    var welcomeMessage = $('#welcome-message');
    var iconsSection = $('#icons');

    // Vérifiez si l'utilisateur est connecté
    if (isUserLoggedIn()) {
        // Si connecté, affichez le message de bienvenue et les icônes
        welcomeMessage.html('<p>Bienvenue [raison sociale]</p>');
        iconsSection.html('<a href="panier.html"><i class="fa-solid fa-cart-shopping"></i></a>' +
            '<div class="user-icon-dropdown">' +
            '<span>Bienvenue [raison sociale]</span>' +
            '<ul>' +
            '<li><a href="#">Profil</a></li>' +
            '<li><a href="#">Déconnexion</a></li>' +
            '</ul>' +
            '</div>');
    } else {
        // Si déconnecté, affichez un message différent ou masquez la section
        welcomeMessage.html('<p>Connectez-vous pour découvrir notre collection.</p>');
        iconsSection.attr('data-allowed', 'false');
    }

    // Désactivez certaines fonctionnalités pour les utilisateurs non connectés
    if (iconsSection.attr('data-allowed') === 'false') {
        // Désactivez l'ajout au panier
        $('.fa-cart-shopping').css('pointer-events', 'none');
        // Masquez la section du panier
        $('#panier-section').hide(); // Assurez-vous que votre section panier a un id approprié
    }
    
    // Continuez avec le reste de votre code
});

// Vous pouvez appeler vos fonctions après la vérification de connexion
myHeader();
myBars();
toTop();


const produits = [
  {
    id: 1,
    name: "Table en bois",
    description: "Table en bois massif avec finition élégante.",
    imageUrl: "pic/mobilier-1.jpg",
    price: 199.99,
    category: 'Mobilier',
    quantity: 1,
  },
  {
    id: 2,
    name: "etagere",
    description: "petite etagere style industriel.",
    imageUrl: "pic/mobilier-2.jpg",
    price: 89.99,
    category: 'Mobilier',
    quantity: 1,
  },
  {
    id: 3,
    name: "canapé cuir marron",
    description: "Canape en cuir marron trois places.",
    imageUrl: "pic/mobilier-3.jpg",
    price: 1299.99,
    category: 'Mobilier',
    quantity: 1,
  },
  {
    id: 4,
    name: "canapé en tissu vert",
    description: "Canapeen tissu vert 3 places.",
    imageUrl: "pic/mobilier-4.jpg",
    price: 999.99,
    category: 'Mobilier',
    quantity: 1,
  },
  {
    id: 5,
    name: "ensemble table et chaise ",
    description: "ensemble table et chaise styles scandinave.",
    imageUrl: "pic/mobilier-5.jpg",
    price: 499.49,
    category: 'Mobilier',
    quantity: 1,
  },
  {
    id: 6,
    name: "suspension noire industriel",
    description: "Lampe avec un design moderne ",
    imageUrl: "./pic/luminaire-1.jpg",
    price: 79.79,
    category: 'Luminaire',
    quantity: 1,
  },
  {
    id: 7,
    name: "suspension blanche ",
    description: "Lampe avec un design moderne ",
    imageUrl: "./pic/luminaire-2.jpg",
    price: 89.99,
    category: 'Luminaire',
    quantity: 1,
  },
  {
    id: 8,
    name: "suspencion style bois ",
    description: "Lampe avec un design modern.",
    imageUrl: "./pic/luminaire-3.jpg",
    price: 51.99,
    category: 'Luminaire',
    quantity: 1,
  },
  {
    id: 9,
    name: "suspencion noir",
    description: "Lampe avec un design moderne.",
    imageUrl: "./pic/luminaire-4.jpg",
    price: 121.49,
    category: 'Luminaire',
    quantity: 1,
  },
  {
    id: 10,
    name: "Applique murale",
    description: "Lampe avec un design moderne.",
    imageUrl: "./pic/luminaire-5.jpg",
    price: 39.99,
    category: 'Luminaire',
    quantity: 1,
  },
  {
    id: 11,
    name: "vase style bois",
    description: "deux magnifique vase style bois",
    imageUrl: "./pic/deco-1.jpg",
    price: 19.99,
    category: 'Décoration',
    quantity: 1,
  },
  {
    id: 12,
    name: "vase design",
    description: "Magnifique vase vert pomme .",
    imageUrl: "./pic/deco-2.jpg",
    price: 49.99,
    category: 'Décoration',
    quantity: 1,
  },
  {
    id: 13,
    name: "3 poterie decorative",
    description: "poterie decorative en terre cuite.",
    imageUrl: "./pic/deco-3.jpg",
    price: 119.49,
    category: 'Décoration',
    quantity: 1,
  },
  {
    id: 14,
    name: "vase en terre",
    description: "vase en terre cuir style grec.",
    imageUrl: "./pic/deco-4.jpg",
    price: 149.49,
    category: 'Décoration',
    quantity: 1,
  },
  {
    id: 15,
    name: "vase bleu",
    description: "vase en verre souffle bleu.",
    imageUrl: "./pic/deco-5.jpg",
    price: 189.99,
    category: 'Décoration',
    quantity: 1,
  },
  {
    id: 16,
    name: "peau de bete",
    description: "tapis en fausse peau de bete.",
    imageUrl: "./pic/tapis-1.jpg",
    price: 130.00,
    category: 'Tapis',
    quantity: 1,
  },
  {
    id: 17,
    name: "Tapis style marocain",
    description: "tapis style marocain motif lineaire.",
    imageUrl: "./pic/tapis-2.jpg",
    price: 121.49,
    category: 'Tapis',
    quantity: 1,
  },
  {
    id: 18,
    name: "tapis orientale",
    description: "tapis style orientale .",
    imageUrl: "./pic/tapis-3.jpg",
    price: 121.49,
    category: 'Tapis',
    quantity: 1,
  },
  {
    id: 19,
    name: "tapis elephant",
    description: "Joli petit tapis style crochet en forme de tete d'elephant.",
    imageUrl: "./pic/tapis-4.jpg",
    price: 99.99,
    category: 'Tapis',
    quantity: 1,
  },
  {
    id: 20,
    name: "tapis Noir",
    description: "tapis moltonne noir .",
    imageUrl: "./pic/tapis-5.jpg",
    price: 59.99,
    category: 'Tapis',
    quantity: 1,
  },
];

const productsContainer = document.getElementById('listeProduits');
produits.forEach((produit) => {
  const productCard = createProductCard(produit);
  productsContainer.appendChild(productCard);
});

// Fonction pour générer une carte produit
function createProductCard(product) {
  // Création des éléments HTML
  const card = document.createElement('div');
  card.classList.add('product-card');

  const image = document.createElement('img');
  image.src = product.imageUrl; // Utilisation de imageUrl au lieu de image
  image.alt = product.name; // Utilisation de name au lieu de titre

  const title = document.createElement('h2');
  title.textContent = product.name; // Utilisation de name au lieu de titre

  const description = document.createElement('p');
  description.textContent = product.description;

  const price = document.createElement('p');
  price.textContent = `${product.price} €`; // Utilisation de price au lieu de prix

  const addButton = document.createElement('button');
  addButton.textContent = 'Ajouter au panier';
  addButton.addEventListener('click', () => {
    // Ajouter la logique pour ajouter le produit au panier ici
    const productToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1  // Vous pouvez définir une quantité initiale ici
    };
    addBasket(productToAdd); // Appel de la fonction pour ajouter le produit au panier
  });

  // Ajout des éléments à la carte produit
  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(price);
  card.appendChild(addButton);

  return card;
}

// Fonction pour afficher les produits dans un conteneur de catégorie donné
function displayProducts(categoryId, products) {
  const container = document.getElementById(categoryId);
  const productsContainer = container.querySelector('.products-container');

  // Nettoyer le conteneur des produits précédents
  productsContainer.innerHTML = '';

  // Filtrer les produits par catégorie
  const categoryProducts = products.filter(product => product.category === categoryId);

  // Générer et afficher les cartes produits dans le conteneur
  categoryProducts.forEach(product => {
    const card = createProductCard(product);
    productsContainer.appendChild(card);
  });
}

const categories = [
  { id: 'Mobilier', name: 'Mobilier d\'intérieur' },
  { id: 'Luminaire', name: 'Luminaires' },
  { id: 'Tapis', name: 'Tapis' },
  { id: 'Décoration', name: 'Objets de décorations' }
];

// Pour chaque catégorie, afficher les produits correspondants
categories.forEach(categorie => {
  const elementListe = document.createElement('li');
  elementListe.textContent = categorie.name;
  elementListe.id = `categorie-${categorie.id}`;
  listeProduits.appendChild(elementListe);
});

// permet de tout lier 
function saveBasket(basket){
  localStorage.setItem("basket",JSON.stringify(basket));
}

function getBasket(){
  let basket = localStorage.getItem("basket");
  if (basket == null) {
    return [];
  } else {
    return JSON.parse(basket);
  }
}

function addBasket(product){
  let basket = getBasket();
  let foundProduct = basket.find(p => p.id == product.id);
  if(foundProduct != undefined){
    foundProduct.quantity++;
  } else {
    product.quantity = 1;
    basket.push(product);
  }

  saveBasket(basket);
}

function removeFromBasket(product){
  let basket = getBasket();
  basket = basket.filter(p => p.id != product.id)
  saveBasket(basket);
}

function changeQuantity(product,quantity){
  let basket = getBasket();
  let foundProduct = basket.find(p => p.id == product.id);
  if(foundProduct != undefined){
    foundProduct.quantity += quantity;
    if(foundProduct.quantity <= 0){
      removeFromBasket(foundProduct)
    } else {
      saveBasket(basket);
    }
  }   
}

function getNumberProduct(){
  let basket = getBasket();
  let number = 0;
  for (let product of basket) {
    number += product.quantity;
  }
  return number;
}

function getTotalPrice(){
  let basket = getBasket();
  let total = 0;
  for(let product of basket) {
    total += product.quantity * product.price;
  }
  return total;
}

// Ajoutez des gestionnaires d'événements pour les boutons +/- pour ajuster la quantité
decrementButton.addEventListener('click', () => {
  let quantity = parseInt(quantityValueElement.textContent);
  if (quantity > 10) {
    quantity--;
    quantityValueElement.textContent = quantity;
  }
});

incrementButton.addEventListener('click', () => {
  let quantity = parseInt(quantityValueElement.textContent);
  quantity++;
  quantityValueElement.textContent = quantity;
});

document.querySelectorAll('.category-link').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    const targetCategory = link.getAttribute('href'); // Récupère l'ID de la catégorie cible
    const targetElement = document.querySelector(targetCategory); // Sélectionne l'élément de catégorie
    targetElement.scrollIntoView({ behavior: 'smooth' }); // Fait défiler jusqu'à la catégorie cible en douceur
  });
});

// Fonction pour ajouter un produit au panier
function ajouterAuPanier(produit) {
  // Ajoutez ici la logique pour ajouter le produit au panier
}

// Sélectionnez tous les boutons "Ajouter au panier"
document.querySelectorAll('.product-card button').forEach(button => {
  button.addEventListener('click', () => {
    // Récupérez les détails du produit à partir du DOM
    const productCard = button.closest('.product-card');
    const productId = parseInt(productCard.dataset.productId); // Utilisez parseInt pour convertir en nombre entier
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = parseFloat(productCard.querySelector('p').textContent);
    
    // Créez un objet représentant le produit
    const product = {
      id: productId,
      name: productName,
      price: productPrice
    };
    
    // Ajoutez le produit au panier en utilisant la fonction addBasket
    addBasket(product);
  });
});

//barre de recherche


function search_produits() {
  let input = document.getElementById('category').value.trim().toLowerCase();

  produits.forEach(produit => {
    let produitElement = document.getElementById('produit-' + produit.id);
    let nameMatch = produit.name.toLowerCase().includes(input);
    let categoryMatch = produit.category.toLowerCase().includes(input);

    if (nameMatch || categoryMatch) {
      produitElement.style.display = "block";
    } else {
      produitElement.style.display = "none";
    }
  });
}
