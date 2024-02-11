let products = [
    {
      id: 1,name: "Table en bois",description: "Table en bois massif avec finition élégante.",imageUrl: "pic/mobilier-1.jpg",price: 199.99, taxing:166.66,category: 'Mobilier',quantity: 10
    },
    {
      id: 2,name: "etagere",description: "petite etagere style industriel.",imageUrl: "pic/mobilier-2.jpg",price: 89.99,taxing: 74.99,category: 'Mobilier', quantity: 10
    },
    {
      id: 3,name: "canapé cuir marron",description: "Canape en cuir marron trois places.",imageUrl: "pic/mobilier-3.jpg",price: 1299.99,taxing: 1083.33,category: 'Mobilier',quantity: 10
    },
    {
      id: 4,name: "canapé en tissu vert",description: "Canapeen tissu vert 3 places.",imageUrl: "pic/mobilier-4.jpg",price: 999.99,taxing: 833.33,category: 'Mobilier',quantity: 10
    },
    {
      id: 5,name: "ensemble table et chaise ",description: "ensemble table et chaise styles scandinave.",imageUrl: "pic/mobilier-5.jpg",price: 499.49,taxing:416.66,category: 'Mobilier',quantity: 10
    },
    {
      id: 6,name: "suspension noire industriel",description: "Lampe avec un design moderne ",imageUrl: "./pic/luminaire-1.jpg",price: 79.79,taxing:66.49,category: 'Luminaire',quantity: 10
    },
    {
      id: 7,name: "suspension blanche ",description: "Lampe avec un design moderne ",imageUrl: "./pic/luminaire-2.jpg",price: 89.99,taxing:74.99,category: 'Luminaire',quantity: 10
    },
    {
      id: 8,name: "suspencion style bois ",description: "Lampe avec un design modern.",imageUrl: "./pic/luminaire-3.jpg",price: 51.99,taxing:43.33,category: 'Luminaire',quantity: 10
    },
    {
      id: 9,name: "suspencion noir",description: "Lampe avec un design moderne.",imageUrl: "./pic/luminaire-4.jpg",price: 121.49,taxing:101.24,category: 'Luminaire', quantity: 10    
    },
    {
      id: 10,name: "Applique murale",description: "Lampe avec un design moderne.",imageUrl: "./pic/luminaire-5.jpg",price: 39.99,taxing:33.33,category: 'Luminaire',quantity: 10
    },
    {
      id: 11,name: "vase style bois",description: "deux magnifique vase style bois",imageUrl: "./pic/deco-1.jpg",price: 19.99,taxing:16.66,category: 'Décoration',quantity: 10
    },
    {
      id: 12,name: "vase design",description: "Magnifique vase vert pomme .",imageUrl: "./pic/deco-2.jpg",price: 49.99,taxing:41.66,category: 'Décoration',quantity: 10
    },
    {
      id: 13,name: "3 poterie decorative",description: "poterie decorative en terre cuite.",imageUrl: "./pic/deco-3.jpg",price: 119.49,taxing:99.58,category: 'Décoration',quantity: 10,
    },
    {id: 14,name: "vase en terre",description: "vase en terre cuir style grec.",imageUrl: "./pic/deco-4.jpg",price: 149.49,taxing:124.58,category: 'Décoration',quantity: 10
    },
    {
      id: 15,name: "vase bleu",description: "vase en verre souffle bleu.",imageUrl: "./pic/deco-5.jpg",price: 189.99,taxing:158.33,category: 'Décoration',quantity: 10
    },
    {
      id: 16,name: "peau de bete",description: "tapis en fausse peau de bete.",imageUrl: "./pic/tapis-1.jpg",price: 130.00,taxing:108.33,category: 'Tapis',quantity: 10
    },
    {
      id: 17,name: "Tapis style marocain",description: "tapis style marocain motif lineaire.",imageUrl: "./pic/tapis-2.jpg",price: 121.49,taxing:101.24,category: 'Tapis',quantity: 10
    },
    {
      id: 18,name: "tapis orientale",description: "tapis style orientale .",imageUrl: "./pic/tapis-3.jpg",price: 121.49,taxing:101.24,category: 'Tapis',quantity: 10
    },
    {
      id: 19,name: "tapis elephant",description: "Joli petit tapis style crochet en forme de tete d'elephant.",imageUrl: "./pic/tapis-4.jpg",price: 99.99,taxing:83.33,category: 'Tapis',quantity: 10
    },
    {
      id: 20,name: "tapis Noir",description: "tapis moltonne noir .",imageUrl: "./pic/tapis-5.jpg",price: 59.99,taxing:49.99,category: 'Tapis',quantity: 10
    },
  ];
  
  const app = Vue.createApp({
      data() {
          return {
              inventory: products,
              isVisible: false,
              editedProduct: {},
          }
      },
  
      methods: {
          deleteProduct(index){
              const confirmDel = window.confirm('êtes vous sur de vouloir supprimer ce produit de la liste?');
              if(confirmDel){
                  this.inventory.splice(index, 10);
              }
          },
          openModal(product, index){
              this.editedProduct = {...product};
              this.editedProductIndex = index;
              this.isVisible = true;
          },
          closeModal(){
              this.isVisible = false;
          },
          saveChanges(){
              if(this.editedProduct.name === undefined || this.editedProduct.price === undefined || this.editedProduct.quantity === undefined || this.editedProduct.category === undefined){
                  alert('veuillez remplir tous les champs');
                  return;
              }
              const confirmEdit = window.confirm('êtes vous sur de vouloir modifier ce produit?');
              if(confirmEdit){
              this.inventory[this.editedProductIndex] = {...this.editedProduct};
              this.isVisible = false;
          }
          },
          addProduct(){
              const newProduct = {
                  id: this.inventory.length + 10,
                  name: document.getElementById('name').value,
                  price: parseInt(document.getElementById('price').value),
                  quantity: parseInt(document.getElementById('quantity').value),
                  category: document.getElementById('category').value,
              }
              this.inventory.push(newProduct);
          },
      },
  })
  function calculatePriceExcludingVAT(priceIncludingVAT) {
    const VATRate = 20; // Taux de TVA en pourcentage (20%)
    
    // // Vérifie si le prix TTC est un nombre positif
    // if (typeof priceIncludingVAT !== 'number' || isNaN(priceIncludingVAT) || priceIncludingVAT <= 0) {
    //     return null; // Retourne null si le prix TTC est invalide
    // }

    // Calcul du prix hors taxe
    const priceExcludingVAT = priceIncludingVAT / (1 + VATRate / 100);
    return priceExcludingVAT;
}
// Fonction pour afficher les détails d'un produit
function displayProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const productDetails = document.getElementById('productDetails');
        productDetails.innerHTML = '';

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.title;
        productDetails.appendChild(image);

        const title = document.createElement('h2');
        title.textContent = product.title;
        productDetails.appendChild(title);

        const moq = document.createElement('p');
        moq.textContent = "MOQ: " + product.moq;
        productDetails.appendChild(moq);

        const description = document.createElement('p');
        description.textContent = product.description;
        productDetails.appendChild(description);

        const price = document.createElement('p');
        price.textContent = "Prix: " + product.price + "€";
        productDetails.appendChild(price);

        // Vérification de l'état de connexion
        const isLoggedIn = checkIfUserIsLoggedIn(); // Supposons qu'il y ait une fonction pour vérifier l'état de connexion

        if (isLoggedIn) {
            const addButton = document.createElement('button');
            addButton.textContent = "Ajouter au Panier";
            addButton.addEventListener('click', () => addToCart(product));
            productDetails.appendChild(addButton);
        } else {
            const loginPrompt = document.createElement('p');
            loginPrompt.textContent = "Connectez-vous pour ajouter ce produit au panier.";
            productDetails.appendChild(loginPrompt);
        }
    }
}

// Fonction de vérification de l'état de connexion (exemple)
function checkIfUserIsLoggedIn() {
    // Code pour vérifier si l'utilisateur est connecté, par exemple, vérifier l'existence d'un token d'authentification
    // Cette fonction devrait retourner true si l'utilisateur est connecté, sinon false
    return true; // Supposons que l'utilisateur est connecté pour cet exemple
}


  app.mount('#app')