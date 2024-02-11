const loginText = document.querySelector(".title-text .login");
        const loginForm = document.querySelector("form.login");
        const loginBtn = document.querySelector("label.login");
        const signupBtn = document.querySelector("label.signup");
        const signupLink = document.querySelector("form .signup-link a");
        signupBtn.onclick = (() => {
            loginForm.style.marginLeft = "-50%";
            loginText.style.marginLeft = "-50%";
        });
        loginBtn.onclick = (() => {
            loginForm.style.marginLeft = "0%";
            loginText.style.marginLeft = "0%";
        });
        signupLink.onclick = (() => {
            signupBtn.click();
            return false;
        });
        function logout() {
    
            window.location.href = 'connexion.html';
          }
          document.addEventListener('DOMContentLoaded', function() {
            let raisonSocialeInput = document.getElementById('raisonSocialeInput');
            let raisonSocialeError = document.getElementById('raisonSocialeError');
        
            raisonSocialeInput.addEventListener('input', function() {
                // Afficher le message d'erreur si le champ est vide
                raisonSocialeError.style.display = (raisonSocialeInput.validity.valueMissing) ? 'block' : 'none';
            });
        
            // Ajoutez un écouteur d'événements pour le formulaire
            let signupForm = document.getElementById('signupForm');
            signupForm.addEventListener('submit', function(event) {
                
                if (raisonSocialeInput.validity.valueMissing) {
                    event.preventDefault();
                   
                    alert('Veuillez remplir le champ "Raison sociale".');
                }
               
            });
        });
        
          document.addEventListener('DOMContentLoaded', function() {
            let siretInput = document.getElementById('siretInput');
            let codePostalInput = document.getElementById('codePostalInput');
            let villeInput = document.getElementById('villeInput');
            let emailInput = document.getElementById('emailInput');
            let passwordInput = document.getElementById('passwordInput');
        
            siretInput.addEventListener('input', function() {
                // Remplacer les caractères non numériques par une chaîne vide
                this.value = this.value.replace(/[^0-9]/g, '');
        
                // Limiter la longueur à 14 caractères
                if (this.value.length > 14) {
                    this.value = this.value.slice(0, 14);
                }
            });
        
            codePostalInput.addEventListener('input', function() {
                // Remplacer les caractères non numériques par une chaîne vide
                this.value = this.value.replace(/[^0-9]/g, '');
        
                // Limiter la longueur à 5 caractères
                if (this.value.length > 5) {
                    this.value = this.value.slice(0, 5);
                }
            });
        
            villeInput.addEventListener('input', function() {
                // Remplacer les caractères non alphabétiques par une chaîne vide
                this.value = this.value.replace(/[^a-zA-Z]/g, '');
            });
        
            emailInput.addEventListener('input', function() {
                
            });
        
            passwordInput.addEventListener('input', function() {
                // Vérifier que le mot de passe a au moins 8 caractères, une majuscule et un caractère spécial
                let hasUpperCase = /[A-Z]/.test(this.value);
                let hasSpecialChar = /[! ?]/.test(this.value);
        
                if (this.value.length < 8 || !hasUpperCase || !hasSpecialChar) {
                    // Ajoutez ici votre logique de gestion des erreurs, par exemple, afficher un message d'erreur
                }
            });
        });