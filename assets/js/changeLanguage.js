const translations = {
  en: {
    dashboard: "Dashboard",
    english: "English",
    arabic: "Arabic",
    PotentialGrowth: "Potential growth",
    RevenueCurrent: "Revenue current",
    DailyIncome: "Daily Income",
    ExpenseCurrent: "Expense current",
    LineChart: "Line chart",
    BarChart: "Bar chart",
    VisitorsByCountries: "Visitors By Countries",
    OrderStatus: "Order Status",
    LogOut: "Log out",
    french: "french",
    chooseYouLanguage: "Choose you language",
  },
  ar: {
    dashboard: "الصفحة الرئيسية",
    english: "الانجليزية",
    arabic: "العربية",
    PotentialGrowth: "النمو المحتمل",
    RevenueCurrent: "الإيرادات الحالية",
    DailyIncome: "الدخل اليومي",
    ExpenseCurrent: "المصاريف الحالية",
    LineChart: "خط الرسم البياني",
    BarChart: "شريط الرسم البياني",
    VisitorsByCountries: "الزوار حسب الدول",
    OrderStatus: "حالة الطلب",
    LogOut: "تسجيل خروج",
    french: "الفرنسية",
    chooseYouLanguage: "اختار لغتك",
  },
  fr: {
    dashboard: "tableau de bord ",
    english: "Anglais",
    arabic: "arabe",
    PotentialGrowth: "Croissance potentielle ",
    RevenueCurrent: "Chiffre d'affaires actuel ",
    DailyIncome: "Revenu quotidien",
    ExpenseCurrent: "Dépenses courantes ",
    LineChart: "Graphique en ligne",
    BarChart: "Diagramme à bandes  ",
    VisitorsByCountries: "  Visiteurs par pays",
    OrderStatus: " Statut de la commande",
    LogOut: "Se déconnecter",
    french: "française",
    chooseYouLanguage: " Choisissez la langue",
  },
};

const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  language === "ar" ? (document.dir = "rtl") : (document.dir = "ltr");
  document.dir === "ltr"
    ? (document.querySelector(".navbar").style.width = "auto")
    : (document.querySelector(".navbar").style.width = "100%");
};

// console.log((document.querySelector(".navbar").style.width = "100%"));
