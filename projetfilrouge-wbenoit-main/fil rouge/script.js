
// Exemple tableau des catégories de produits
const categories = [
    { id: 1, name: 'Mobilier d\'intérieur' },
    { id: 2, name: 'Luminaires' },
    { id: 3, name: 'Tapis' },
    { id: 4, name: 'Objets de décorations' }
  ];
  
  // Exemple tableau des produits
  const produits = [
    {
      id: 1,
      image: 'mobilier-5.jpg',
      titre: 'Table à manger en bois',
      description: 'Table à manger en bois massif avec finition élégante.',
      prix: 299.99,
      moq: 5,
      categorieId: 1
    },
    {
      id: 2,
      image: 'luminaire-1.jpg',
      titre: 'Lampe moderne',
      description: 'Lampe avec un design moderne et éclairage ajustable.',
      prix: 129.99,
      moq: 10,
      categorieId: 2
    },
    {
      id: 3,
      image: 'tapis-2.jpg',
      titre: 'Tapis en laine',
      description: 'Tapis doux en laine avec motif géométrique.',
      prix: 89.99,
      moq: 20,
      categorieId: 3
    },
    {
      id: 4,
      image: 'deco-3.jpg',
      titre: 'Vase éthnique en argile',
      description: 'Vase éthnique en argile avec motifs gravés à la main.',
      prix: 49.99,
      moq: 20,
      categorieId: 4
    },
  ];
  //tableau produits
let products = [
  {
    id: 1,
    name: "Table en bois",
    description: "Table en bois massif avec finition élégante.",
    imageUrl: "../Assets/img/deco-2.jpg",
    price: 199.99,
    category: 'Mobilier',
    quantity: 1,
  },
  {
    id: 2,
    name: "etagere",
    description: "petite etagere style industriel.",
    imageUrl: "/Assets/img/deco-2.jpg",
    price: 89.99,
    category: 'Mobilier',
    quantity: 1,
  },
  {
    id: 3,
    name: "canapé cuir marron",
    description: "Canape en cuir marron trois places.",
    imageUrl: "/assets/img/deco-1.jpg",
    price: 1299.99,
    category: 'Mobilier',
    quantity: 1,
  },
  {
    id: 4,
    name: "canapé en tissu vert",
    description: "Canapeen tissu vert 3 places.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 999.99,
    category: 'Mobilier',
    quantity: 1,
  },
  {
    id: 5,
    name: "ensemble table et chaise ",
    description: "ensemble table et chaise styles scandinave.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 499.49,
    category: 'Mobilier',
    quantity: 1,
  },
  {
    id: 6,
    name: "suspension noire industriel",
    description: "Lampe avec un design moderne et éclairage ajustable.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 79.79,
    category: 'Luminaire',
    quantity: 1,
  },
  {
    id: 7,
    name: "suspension noire ",
    description: "Lampe avec un design moderne et éclairage ajustable.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 89.99,
    category: 'Luminaire',
    quantity: 1,
  },
  {
    id: 8,
    name: "suspencion blanche",
    description: "Lampe avec un design modern.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 51.99,
    category: 'Luminaire',
    quantity: 1,
  },
  {
    id: 9,
    name: "suspencion style bois",
    description: "Lampe avec un design moderne.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 121.49,
    category: 'Luminaire',
    quantity: 1,
  },
  {
    id: 10,
    name: "Applique murale",
    description: "Lampe avec un design moderne.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 39.99,
    category: 'Luminaire',
    quantity: 1,
  },
  {
    id: 11,
    name: "vase style bois",
    description: "deux magnifique vase style bois",
    imageUrl: "assets/img/deco-1.jpg",
    price: 19.99,
    category: 'Décoration',
    quantity: 1,
  },
  {
    id: 12,
    name: "vase design",
    description: "Magnifique vase vert pomme .",
    imageUrl: "assets/img/deco-1.jpg",
    price: 49.99,
    category: 'Décoration',
    quantity: 1,
  },
  {
    id: 13,
    name: "3 poterie decorative",
    description: "poterie decorative en terre cuite.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 119.49,
    category: 'Décoration',
    quantity: 1,
  },
  {
    id: 14,
    name: "vase en terre",
    description: "vase en terre cuir style grec.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 149.49,
    category: 'Décoration',
    quantity: 1,
  },
  {
    id: 15,
    name: "vase bleu",
    description: "vase en verre souffle bleu.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 189.99,
    category: 'Décoration',
    quantity: 1,
  },
  {
    id: 16,
    name: "peau de bete",
    description: "tapis en fausse peau de bete.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 130.0,
    category: 'Tapis',
    quantity: 1,
  },
  {
    id: 17,
    name: "Tapis style marocain",
    description: "tapis style marocain motif lineaire.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 121.49,
    category: 'Tapis',
    quantity: 1,
  },
  {
    id: 18,
    name: "tapis orientale",
    description: "tapis style orientale .",
    imageUrl: "assets/img/deco-1.jpg",
    price: 121.49,
    category: 'Tapis',
    quantity: 1,
  },
  {
    id: 19,
    name: "tapis elephant",
    description: "Joli petit tapis style crochet en forme de tete d'elephant.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 99.99,
    category: 'Tapis',
    quantity: 1,
  },
  {
    id: 20,
    name: "tapis Noir",
    description: "tapis moltonne noir .",
    imageUrl: "assets/img/deco-1.jpg",
    price: 59.99,
    category: 'Tapis',
    quantity: 1,
  },
];


// let cart = [
//   { id: 1, name: 'Produit 1', price: 10, quantity: 2, active: true },
//   { id: 2, name: 'Produit 2', price: 20, quantity: 1, active: true },
//   { id: 3, name: 'Produit 3', price: 30, quantity: 3, active: true }
// ]



var timeout;
// Lorsque la souris entre dans la zone du panier
$('#cart').on({
    mouseenter: function() {
        $('#cart-dropdown').show();
    },

 // Cache le panier avec un délai de 200 millisecondes    
    mouseleave: function() {
        timeout = setTimeout(function() {
            $('#cart-dropdown').hide();
        }, 200);
    }
}),

// laisse le contenu ouvert à son survol
// le cache quand la souris sort
$('#cart-dropdown').on({
    mouseenter: function() {
       // Annule le délai d'attente pour cacher le panier
        clearTimeout(timeout);
    },
    mouseleave: function() {
         // Cache le panier lorsque la souris quitte le contenu du panier
        $('#cart-dropdown').hide();
    }
});
 

//cookies 
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();

  // Gère le problème des caractères spéciaux
  if ('btoa' in window) {
      cvalue = btoa(cvalue);
  }

  document.cookie = cname + "=" + cvalue + "; " + expires + ';path=/';
}

function saveCart(inCartItemsNum, cartArticles) {
  setCookie('inCartItemsNum', inCartItemsNum, 5);
  setCookie('cartArticles', JSON.stringify(cartArticles), 5);
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c[0] == ' ') {
          c = c.substring(1);
      }

      if (c.indexOf(name) != -1) {
          if ('btoa' in window) {
              return atob(c.substring(name.length, c.length));
          } else {
              return c.substring(name.length, c.length);
          }
      }
  }

  return false;
}


// variables pour stocker le nombre d'articles et leurs noms
var inCartItemsNum;
var cartArticles;

// affiche/cache les éléments du panier selon s'il contient des produits
function cartEmptyToggle() {
    if (inCartItemsNum > 0) {
        $('#cart-dropdown .hidden').removeClass('hidden');
        $('#empty-cart-msg').hide();
    }

    else {
        $('#cart-dropdown .go-to-cart').addClass('hidden');
        $('#empty-cart-msg').show();
    }
}

// récupère les informations stockées dans les cookies
inCartItemsNum = parseInt(getCookie('inCartItemsNum') ? getCookie('inCartItemsNum') : 0);
cartArticles = getCookie('cartArticles') ? JSON.parse(getCookie('cartArticles')) : [];

cartEmptyToggle();

// affiche le nombre d'article du panier dans le widget
$('#in-cart-items-num').html(inCartItemsNum);

// hydrate le panier
var items = '';
cartArticles.forEach(function(v) {
   items += '<li id="'+ v.id +'"><a href="'+ v.url +'">'+ v.name +'<br><small>Quantité : <span class="qt">'+ v.qt +'</span></small></a></li>';
});

$('#cart-dropdown').prepend(items);

// click bouton ajout panier
$('.add-to-cart').click(function() {

  // récupération des infos du produit
  var $this = $(this);
  var id = $this.attr('data-id');
  var name = $this.attr('data-name');
  var description = $this.attr('data-description');
  var imageurl = $this.attr('data-imageurl');
  var price = $this.attr('data-price');
  var category = $this.attr('data-category')
  var quantity = parseInt($('#quantity').val());
  inCartItemsNum += qt;

  // mise à jour du nombre de produit dans le widget
  $('#in-cart-items-num').html(inCartItemsNum);

  var newArticle = true;

  // vérifie si l'article est pas déjà dans le panier
  cartArticles.forEach(function(v) {
      // si l'article est déjà présent, on incrémente la quantité
      if (v.id == id) {
          newArticle = false;
          v.qt += qt;
          $('#'+ id).html('<a href="'+ url +'">'+ name +'<br><small>Quantité : <span class="qt">'+ v.qt +'</span></small></a>');
      }
  });

  // s'il est nouveau, on l'ajoute
  if (newArticle) {
      $('#cart-dropdown').prepend('<li id="'+ id +'"><a href="'+ url +'">'+ name +'<br><small>Quantité : <span class="qt">'+ qt +'</span></small></a></li>');

      cartArticles.push({
          id: id,
          name: name,
          price: price,
          category: category,
          quantity: quantity,
          imageurl: imageurl
      });
  }

  // sauvegarde le panier
  saveCart(inCartItemsNum, cartArticles);

  // affiche le contenu du panier si c'est le premier article
  cartEmptyToggle();
});
// si on est sur la page ayant pour url monsite.fr/panier/
if (window.location.pathname == '/panier/') {
    var items = '';
    var subTotal = 0;
    var total;
    var weight = 0;

    /* on parcourt notre array et on créé les lignes du tableau pour nos articles :
    * - Le nom de l'article (lien cliquable qui mène à la fiche produit)
    * - son prix
    * - la dernière colonne permet de modifier la quantité et de supprimer l'article
    *
    * On met aussi à jour le sous total et le poids total de la commande
    */
    cartArticles.forEach(function(v) {
        // opération sur un entier pour éviter les problèmes d'arrondis
        var itemPrice = v.price.replace(',', '.') * 1000;
        items += '<tr data-id="'+ v.id +'">\
             <td><a href="'+ v.url +'">'+ v.name +'</a></td>\
             <td>'+ v.price +'€</td>\
             <td><span class="qt">'+ v.qt +'</span> <span class="qt-minus">–</span> <span class="qt-plus">+</span> \
             <a class="delete-item">Supprimer</a></td></tr>';
        subTotal += v.price.replace(',', '.') * v.qt;
        weight += v.weight * v.qt;
    });

    // on reconverti notre résultat en décimal
    subTotal = subTotal / 1000;

    // On insère le contenu du tableau et le sous total
    $('#cart-tablebody').empty().html(items);
    $('.subtotal').html(subTotal.toFixed(2).replace('.', ','));

    // lorsqu'on clique sur le "+" du panier
    $('.qt-plus').on('click', function() {
        var $this = $(this);

        // récupère la quantité actuelle et l'id de l'article
        var qt = parseInt($this.prevAll('.qt').html());
        var id = $this.parent().parent().attr('data-id');
        var artWeight = parseInt($this.parent().parent().attr('data-weight'));

        // met à jour la quantité et le poids
        inCartItemsNum += 1;
        weight += artWeight;
        $this.prevAll('.qt').html(qt + 1);
        $('#in-cart-items-num').html(inCartItemsNum);
        $('#'+ id + ' .qt').html(qt + 1);

        // met à jour cartArticles
        cartArticles.forEach(function(v) {
            // on incrémente la qt
            if (v.id == id) {
                v.qt += 1;

                // récupération du prix
                // on effectue tous les calculs sur des entiers
                subTotal = ((subTotal * 1000) + (parseFloat(v.price.replace(',', '.')) * 1000)) / 1000;
            }
        });

        // met à jour la quantité du widget et sauvegarde le panier
        $('.subtotal').html(subTotal.toFixed(2).replace('.', ','));
        saveCart(inCartItemsNum, cartArticles);
    });

    // quantité -
    $('.qt-minus').click(function() {
        var $this = $(this);
        var qt = parseInt($this.prevAll('.qt').html());
        var id = $this.parent().parent().attr('data-id');
        var artWeight = parseInt($this.parent().parent().attr('data-weight'));

        if (qt > 1) {
            // maj qt
            inCartItemsNum -= 1;
            weight -= artWeight;
            $this.prevAll('.qt').html(qt - 1);
            $('#in-cart-items-num').html(inCartItemsNum);
            $('#'+ id + ' .qt').html(qt - 1);

            cartArticles.forEach(function(v) {
                // on décrémente la qt
                if (v.id == id) {
                    v.qt -= 1;

                    // récupération du prix
                    // on effectue tous les calculs sur des entiers
                    subTotal = ((subTotal * 1000) - (parseFloat(v.price.replace(',', '.')) * 1000)) / 1000;
                }
            });

            $('.subtotal').html(subTotal.toFixed(2).replace('.', ','));
            saveCart(inCartItemsNum, cartArticles);
        }
    });

    // suppression d'un article
    $('.delete-item').click(function() {
        var $this = $(this);
        var qt = parseInt($this.prevAll('.qt').html());
        var id = $this.parent().parent().attr('data-id');
        var artWeight = parseInt($this.parent().parent().attr('data-weight'));
        var arrayId = 0;
        var price;

        // maj qt
        inCartItemsNum -= qt;
        $('#in-cart-items-num').html(inCartItemsNum);

        // supprime l'item du DOM
        $this.parent().parent().hide(600);
        $('#'+ id).remove();

        cartArticles.forEach(function(v) {
            // on récupère l'id de l'article dans l'array
            if (v.id == id) {
                // on met à jour le sous total et retire l'article de l'array
                // as usual, calcul sur des entiers
                var itemPrice = v.price.replace(',', '.') * 1000;
                subTotal -= (itemPrice * qt) / 1000;
                weight -= artWeight * qt;
                cartArticles.splice(arrayId, 1);

                return false;
            }

            arrayId++;
        });

        $('.subtotal').html(subTotal.toFixed(2).replace('.', ','));
        saveCart(inCartItemsNum, cartArticles);
        cartEmptyToggle();
    });
}
// const app = Vue.createApp({
//   data() {
//     return {
// //pour produits
//       product: products,
//       active: false,
//       cartisVisible: false,
//       counter: 0,
//       cart: [],
//       cart : cart,
//     };
//   },
  // methods: {



// //pour produits
// // Parcourir le panier
// panier.forEach(produit => {
//   // Créer un lien vers la page de produit avec l'identifiant du produit
//   const lienProduit = document.createElement('a');
//   lienProduit.href = `products.html?id=${produit.produitId}`;
//   lienProduit.textContent = `Product ${produit.produitId}`;
  
//   // Ajouter le lien à votre page, par exemple à un élément avec l'id "liste-produits"
//   document.getElementById('liste-produits').appendChild(lienProduit);
// }),

// // Initialisation du panier vide
// const : panier = [],

// // Parcourir chaque commande
// commandes. forEach(commande => {
//     // Parcourir chaque produit dans la commande
//     commande.produits.forEach(produit => {
//         // Ajouter le produit au panier
//         panier.push({
//             produitId: produit.produitId,
//             quantite: produit.quantite,
//             coutTotal: commande.coutTotal,
//             userId: commande.userId
//         });
//     });
// }),

// // Afficher le panier résultant
// console:log(panier),



//   // Méthode pour ajouter un produit au panier
//   addToCart(product) {
//     // Vérifie si le produit est déjà dans le panier
//     let existingProduct = this.cart.find((item) => item.id === product.id);
//     if (existingProduct) {
//       // Si le produit existe déjà, incrémente la quantité
//       existingProduct.quantity++;
//     } else {
//       // Sinon, ajoute le produit au panier avec une quantité de 1
//       this.cart.push({ ...product, quantity: 1, active: true });
//     }
//     // Enregistre les modifications localement
//     this.localSave();
//   },
//   // Méthode pour calculer le prix total du panier
//   totalPrice() {
//     return this.cart.reduce((acc, product) => {
//       // Vérifie si le produit est actif
//       if (product.active) {
//         // Calcule le prix total du produit et l'ajoute à l'accumulateur
//         return acc + parseFloat(product.price * product.quantity);
//       } else {
//         return acc;
//       }
//     }, 0).toFixed(2); // Convertit le total en format à deux décimales
//   },
//   // Méthode pour enregistrer les modifications localement
//   localSave() {
//     // Code pour sauvegarder localement les données du panier
//   },




// app.mount("#app");

