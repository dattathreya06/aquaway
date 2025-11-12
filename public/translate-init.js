window.googleTranslateElementInit = function () {
  console.log("✅ Google Translate initializing...");
  try {
    new google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,te",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      },
      "google_translate_element"
    );
    console.log("✅ Google Translate initialized and render attempted");
  } catch (err) {
    console.error("❌ Google Translate failed to initialize:", err);
  }
};
