function showPage(id) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  const target = document.getElementById("page-" + id);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  document.getElementById("navLinks").classList.remove("open");
}
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}
function toggleFaq(btn) {
  const item = btn.closest(".faq-item");
  const wasOpen = item.classList.contains("open");
  document
    .querySelectorAll(".faq-item.open")
    .forEach((i) => i.classList.remove("open"));
  if (!wasOpen) item.classList.add("open");
}
function filterFaq(cat, btn) {
  document
    .querySelectorAll(".faq-cat-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  // Show/hide pinned section
  const pinned = document.getElementById("faqPinned");
  if (pinned) pinned.style.display = cat === "all" ? "" : "none";
  // Show/hide main FAQ items
  document.querySelectorAll("#faqGrid .faq-item").forEach((item) => {
    const show =
      cat === "all" || (item.dataset.cat && item.dataset.cat.includes(cat));
    item.style.display = show ? "" : "none";
  });
  // Show/hide section dividers
  document.querySelectorAll(".faq-section-divider").forEach((div) => {
    const headerCat = div.dataset.catHeader;
    div.style.display = cat === "all" || cat === headerCat ? "" : "none";
  });
}
function showPolicy(id, el) {
  document
    .querySelectorAll(".policy-link")
    .forEach((l) => l.classList.remove("active"));
  el.classList.add("active");
  document
    .querySelectorAll('[id^="policy-"]')
    .forEach((p) => (p.style.display = "none"));
  const target = document.getElementById("policy-" + id);
  if (target) target.style.display = "";
}
function toggleTags() {
  const cloud = document.getElementById("tagCloud");
  cloud.classList.toggle("expanded");
  // show/hide hidden tags
  document.querySelectorAll(".tag-hidden").forEach((t) => {
    t.style.display = cloud.classList.contains("expanded")
      ? "inline-flex"
      : "none";
  });
}

function submitContactForm() {
  var name = document
    .querySelector(".contact-form input[type=text]")
    .value.trim();
  var email = document
    .querySelector(".contact-form input[type=email]")
    .value.trim();
  var type = document.querySelector(".contact-form select").value;
  var msg = document.querySelector(".contact-form textarea").value.trim();
  if (!name || !email || !msg) {
    alert("Please fill in your name, email, and message before sending.");
    return;
  }
  var subject = encodeURIComponent("KonnectU Enquiry: " + (type || "General"));
  var body = encodeURIComponent(
    "Name: " +
      name +
      "\nEmail: " +
      email +
      "\nEnquiry Type: " +
      (type || "General") +
      "\n\nMessage:\n" +
      msg,
  );
  window.location.href =
    "mailto:Admin@konnectusolutions.com?subject=" + subject + "&body=" + body;
}
