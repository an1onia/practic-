
// Selectează elementele necesare
const formOpenBtn = document.querySelector("#form-open");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");

// Verifică dacă elementele există înainte de a adăuga evenimente
if (formOpenBtn && formContainer && formCloseBtn) {
  // Afișează formularul de login
  formOpenBtn.addEventListener("click", () => {
    formContainer.style.display = "block"; // Afișează formularul
    formContainer.style.opacity = "1"; // Setează opacitatea pentru a fi vizibil
    formContainer.style.pointerEvents = "auto"; // Permite interacțiunea
  });

  // Ascunde formularul de login
  formCloseBtn.addEventListener("click", () => {
    formContainer.style.opacity = "0"; // Ascunde formularul treptat
    formContainer.style.pointerEvents = "none"; // Dezactivează interacțiunea
    setTimeout(() => {
      formContainer.style.display = "none"; // Ascunde complet după animație
    }, 300); // Așteaptă 300ms pentru a sincroniza cu animația
  });
} else {
  console.error("Elementele necesare pentru funcționalitatea de login nu au fost găsite.");
}
// Selectează elementele necesare
const passwordInput = document.querySelector(".input_box input[type='password']");
const togglePasswordBtn = document.querySelector(".pw_hide");

// Verifică dacă elementele există
if (passwordInput && togglePasswordBtn) {
  togglePasswordBtn.addEventListener("click", () => {
    // Verifică tipul input-ului și schimbă-l
    if (passwordInput.type === "password") {
      passwordInput.type = "text"; // Schimbă în text pentru a face vizibilă parola
      togglePasswordBtn.classList.remove("uil-eye-slash");
      togglePasswordBtn.classList.add("uil-eye"); // Schimbă iconița
    } else {
      passwordInput.type = "password"; // Schimbă înapoi în password
      togglePasswordBtn.classList.remove("uil-eye");
      togglePasswordBtn.classList.add("uil-eye-slash"); // Schimbă iconița
    }
  });
}


// Selectează link-urile pentru comutare între formulare
const switchToSignupLink = document.querySelector(".switch-to-signup");
const switchToLoginLink = document.querySelector(".switch-to-login");
const loginForm = document.querySelector(".form_login");
const signupForm = document.querySelector(".form_signup");

// Verifică dacă elementele există
if (switchToSignupLink && switchToLoginLink && loginForm && signupForm) {
  // Comută la formularul de creare cont
  switchToSignupLink.addEventListener("click", (event) => {
    event.preventDefault(); // Previne comportamentul implicit al link-ului
    loginForm.style.display = "none"; // Ascunde formularul de autentificare
    signupForm.style.display = "block"; // Afișează formularul de creare cont
  });

  // Comută la formularul de autentificare
  switchToLoginLink.addEventListener("click", (event) => {
    event.preventDefault(); // Previne comportamentul implicit al link-ului
    signupForm.style.display = "none"; // Ascunde formularul de creare cont
    loginForm.style.display = "block"; // Afișează formularul de autentificare
  });
}

// Selectează toate butoanele de filtrare și postările
const filterButtons = document.querySelectorAll(".filter-item");
const postBoxes = document.querySelectorAll(".post-box");

// Adaugă un eveniment de click pentru fiecare buton de filtrare
filterButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault(); // Previne comportamentul implicit (scroll sau redirecționare)

    const filter = button.getAttribute("data-filter").toLowerCase();

    // Afișează sau ascunde postările în funcție de filtru
    postBoxes.forEach((post) => {
      if (filter === "toate" || post.classList.contains(filter)) {
        post.style.display = "block"; // Afișează postarea
      } else {
        post.style.display = "none"; // Ascunde postarea
      }
    });

    // Actualizează starea activă a butoanelor
    filterButtons.forEach((btn) => btn.classList.remove("active-filter"));
    button.classList.add("active-filter");
  });
});
