/* ══════════════════════════════════════
   CONTACT FORM — EMAIL JS
══════════════════════════════════════ */
const form      = document.getElementById('contact-form');
const status    = document.getElementById('form-status');
const submitBtn = document.getElementById('form-submit');

emailjs.init({
    publicKey: "HvJZuuG9JhmOAUJEM",
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const t = translations[currentLang];

  // client-side validation
  const name    = form.querySelector('[name="name"]').value.trim();
  const email   = form.querySelector('[name="email"]').value.trim();
  const message = form.querySelector('[name="message"]').value.trim();

  if (!name || !email || !message) {
    status.className = 'form-status error';
    status.textContent = currentLang === 'de'
      ? 'Bitte alle Pflichtfelder ausfüllen.'
      : 'Please fill in all required fields.';
    return;
  }
  
  try {
    emailjs.send(
      "service_ou14bbi",
      "template_rg6bv5a",
      {
                from_name: document.getElementById("name").value,
                title:document.getElementById("subject").value,
                from_email: document.getElementById("email").value,
                message: document.getElementById("message").value,
            }
          )
          .then(() => {
            alert("Message sent successfully!");
          })
          .catch((error) => {
            console.error(error);
            alert("Failed to send message.");
          });
          
          emailjs.send(
            "service_ou14bbi",
            "template_x4kiru9",
            {
              from_name: document.getElementById("name").value,
                title:document.getElementById("subject").value,
                from_email: document.getElementById("email").value,
                message: document.getElementById("message").value,
              }
            )
          } catch {
            status.className  = 'form-status error';
            status.textContent = t.form_err;
          } finally {
            submitBtn.disabled = false;
            submitBtn.querySelector('[data-i18n="form_send"]').textContent = t.form_send;
            status.className  = 'form-status';
            status.textContent = '';
            document.getElementById("contact-form").reset();
          }
});
