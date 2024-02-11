function myHeader() {
    let header = document.getElementById("header");
    let lol = document.getElementById("lol");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.classList.add("active");
            lol.src = "pic/bulb2.png";
        } else {
            header.classList.remove("active");
            lol.src = "html/pic/bulb.png";
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




// scriptconfirmcommade

//  pour calculer le total TTC et HT et confirmer la commande

function confirmerCommande() {
    // Récupérer les valeurs des champs de livraison
    var nom = document.getElementById("nom").value;
    var adresse = document.getElementById("adresse").value;
    var codePostal = document.getElementById("codePostal").value;
    var ville = document.getElementById("ville").value;
    var pays = document.getElementById("pays").value;

    // Calculer le total TTC et HT (exemple de valeurs)
  var totalpanier =parent.totalpanier || 0;
    var totalTTC = 75.00;
    var totalHT = 62.50;

    // Afficher les totaux dans les spans correspondants
    document.getElementById("totalTTC").textContent = totalTTC.toFixed(2) + " €";
    document.getElementById("totalHT").textContent = totalHT.toFixed(2) + " €";

    // Envoyer les données de livraison à un serveur ou effectuer d'autres actions ici
    console.log("Commande confirmée avec succès!");
}
// Gérer le clic sur le bouton "Confirmer la commande"
document.getElementById("confirm-order-btn").addEventListener("click", function() {
    // Afficher une pop-up avec un message de confirmation
    alert("Votre commande a été confirmée !");

    // Vous pouvez également effectuer d'autres actions ici, comme rediriger l'utilisateur vers une autre page après la confirmation de la commande
    // window.location.href = "page-de-confirmation.html";
});
