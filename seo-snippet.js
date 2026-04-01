// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.iampsychiatry.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.iampsychiatry.com/","title_tag":"Private Psychiatrist Luton & ADHD Assessment | IamPsychiatry","meta_description":"Private Psychiatrist in Luton offering ADHD assessment, Adult ADHD treatment, anxiety and depression therapy, alcohol dependence treatment and mental health services UK-wide."},{"page_url":"https://www.iampsychiatry.com/private-psychiatrist","title_tag":"Consultant Psychiatrist Luton & Mental Health Services | IamPsychiatry","meta_description":"Consultant psychiatrist in Luton providing private psychiatric assessment, Adult ADHD treatment, anxiety and depression therapy, addictions care and holistic mental health services UK."},{"page_url":"https://www.iampsychiatry.com/professional-qualifications","title_tag":"Consultant Psychiatrist Luton Qualifications | IamPsychiatry","meta_description":"Consultant Psychiatrist in Luton with extensive qualifications in psychiatry, psychology, psychotherapy and Adult ADHD treatment, providing trusted private psychiatric services across the UK."},{"page_url":"https://www.iampsychiatry.com/booking-private-psychiatric-assessment","title_tag":"Private Psychiatric Assessment & ADHD Luton Booking | IamPsychiatry","meta_description":"Book your private psychiatric assessment or ADHD assessment in Luton. Fast access to Adult ADHD treatment, anxiety and depression therapy and expert mental health services across the UK."},{"page_url":"https://www.iampsychiatry.com/private-psychiatrist-services","title_tag":"Private Psychiatric Assessment & ADHD Treatment | IamPsychiatry","meta_description":"Private psychiatric assessment, Adult ADHD treatment, anxiety disorder and depression therapy, alcohol dependence treatment and prescriptions from an expert consultant psychiatrist in the UK."},{"page_url":"https://www.iampsychiatry.com/private-adhd-assessment","title_tag":"ADHD Assessment Luton & Adult ADHD Treatment | IamPsychiatry","meta_description":"Comprehensive ADHD assessment in Luton with Adult ADHD diagnosis, private ADHD assessment, medication options and psychotherapy to support long-term mental health recovery UK-wide."},{"page_url":"https://www.iampsychiatry.com/what-causes-adhd","title_tag":"What Causes ADHD? Adult ADHD & Assessment Info | IamPsychiatry","meta_description":"Learn what causes ADHD and how Adult ADHD symptoms are assessed. Find out about private ADHD assessment, Adult ADHD treatment options and expert psychiatric services in the UK."},{"page_url":"https://www.iampsychiatry.com/adult-adhd-symptoms","title_tag":"Adult ADHD Symptoms & Private ADHD Assessment | IamPsychiatry","meta_description":"Explore common Adult ADHD symptoms including inattention and impulsivity. Access free Adult ADHD testing, private ADHD assessment and tailored Adult ADHD treatment in the UK."},{"page_url":"https://www.iampsychiatry.com/adult-adhd-treatment","title_tag":"Adult ADHD Treatment & Private ADHD Assessment | IamPsychiatry","meta_description":"Evidence-based Adult ADHD treatment including private ADHD assessment, diagnosis, medication, psychotherapy and lifestyle support from an expert consultant psychiatrist in the UK."}],"keywords":["private psychiatrist luton","adhd assessment luton","mental health services luton","adult adhd treatment","anxiety disorder luton","depression therapy luton","private psychiatric assessment","alcohol dependence treatment","psychiatric services uk","consultant psychiatrist luton","psychology","psychologist","private adhd assessment"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "@id": "https://www.iampsychiatry.com/#organization",
  "name": "IamPsychiatry",
  "url": "https://www.iampsychiatry.com/",
  "description": "IamPsychiatry in Luton provides expert private mental healthcare, including private psychiatric assessment, Adult ADHD assessment, diagnosis and medication titration for adults across the UK, led by Consultant Psychiatrist Dr Iqbal Mohiuddin.",
  "logo": {
    "@type": "ImageObject",
    "url": "https://static.wixstatic.com/media/8851d4_c1d0c07c4950483399129219eb69e999%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/8851d4_c1d0c07c4950483399129219eb69e999%7Emv2.png"
  },
  "image": [
    {
      "@type": "ImageObject",
      "url": "https://static.wixstatic.com/media/8851d4_40b3f7c3cd3e4706a703ed42c9a0ff97~mv2.webp/v1/fill/w_234,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IamPsychiatrylogo.webp"
    },
    {
      "@type": "ImageObject",
      "url": "https://static.wixstatic.com/media/a7343ced0b9e434d9c82754c0f9b2149.jpg/v1/fill/w_480,h_284,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a7343ced0b9e434d9c82754c0f9b2149.jpg"
    }
  ],
  "email": "mailto:IamPsychiatryEnquiries@gmail.com",
  "telephone": "+44-800-779-7800",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Treetops, Wendover Way",
    "addressLocality": "Luton",
    "addressRegion": "Bedfordshire",
    "postalCode": "LU2 7LS",
    "addressCountry": "GB"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Luton"
    },
    {
      "@type": "City",
      "name": "London"
    },
    {
      "@type": "City",
      "name": "St Albans"
    },
    {
      "@type": "City",
      "name": "Milton Keynes"
    },
    {
      "@type": "Country",
      "name": "United Kingdom"
    }
  ],
  "foundingDate": "2008",
  "medicalSpecialty": [
    "Psychiatry",
    "Adult ADHD",
    "Addiction",
    "Anxiety",
    "Depression",
    "BipolarDisorder",
    "PosttraumaticStressDisorder",
    "ObsessiveCompulsiveDisorder"
  ],
  "founder": {
    "@type": "Person",
    "name": "Dr Iqbal Mohiuddin",
    "jobTitle": "Consultant Psychiatrist",
    "affiliation": {
      "@id": "https://www.iampsychiatry.com/#organization"
    }
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+44-800-779-7800",
    "email": "IamPsychiatryEnquiries@gmail.com",
    "availableLanguage": [
      "English",
      "Bengali"
    ],
    "hoursAvailable": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday"
        ],
        "opens": "11:00",
        "closes": "18:00"
      }
    ]
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday"
      ],
      "opens": "12:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Wednesday",
        "Thursday"
      ],
      "opens": "19:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Saturday"
      ],
      "opens": "12:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Sunday"
      ],
      "opens": "13:00",
      "closes": "19:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com",
    "https://www.linkedin.com",
    "https://www.instagram.com",
    "https://www.tiktok.com",
    "https://www.pinterest.com",
    "https://www.yelp.com",
    "https://x.com"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Private Psychiatric Assessment, Diagnosis & Treatment Plan",
      "description": "1-hour private psychiatric assessment, diagnosis and holistic treatment plan for adults, with options for standard or out-of-hours appointments.",
      "price": "300",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "url": "https://www.iampsychiatry.com/private-psychiatrist-services"
    },
    {
      "@type": "Offer",
      "name": "Adult ADHD Assessment, Diagnosis & Treatment Plan",
      "description": "3-hour private Adult ADHD assessment, diagnosis and treatment plan including optional pharmacogenomic testing and medication initiation.",
      "price": "650",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "url": "https://www.iampsychiatry.com/private-adhd-assessment"
    },
    {
      "@type": "Offer",
      "name": "Adult ADHD Medication Titration",
      "description": "Adult ADHD medication titration and stabilisation with monthly follow-up consultations following an existing ADHD diagnosis.",
      "price": "350",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "url": "https://www.iampsychiatry.com/private-psychiatrist-services"
    }
  ],
  "review": [
    {
      "@type": "Review",
      "reviewBody": "Patient-rated care for IamPsychiatry and Dr Iqbal Mohiuddin via iWantGreatCare.",
      "author": {
        "@type": "Organization",
        "name": "iWantGreatCare"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5.0",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "Review",
      "reviewBody": "Patient-rated care for IamPsychiatry via Google reviews.",
      "author": {
        "@type": "Organization",
        "name": "Google"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5.0",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  ],
  "aggregateRating": [
    {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": 127,
      "name": "iWantGreatCare patient reviews since 2017"
    },
    {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": 192,
      "name": "Google reviews since 2018"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Private Psychiatric and Adult ADHD Services",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Private Psychiatric Assessment & Mental Health Treatment",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Assessment and treatment for addictions, alcoholism, anxiety disorder, bipolar disorder, complex case review, depression, OCD, personality disorder, PTSD, complex PTSD and psychosis",
            "price": "300",
            "priceCurrency": "GBP",
            "url": "https://www.iampsychiatry.com/private-psychiatrist-services"
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Adult ADHD Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Adult ADHD and Adult ADD assessment and diagnosis",
            "price": "650",
            "priceCurrency": "GBP",
            "url": "https://www.iampsychiatry.com/private-adhd-assessment"
          },
          {
            "@type": "Offer",
            "name": "Adult ADHD medication titration",
            "price": "350",
            "priceCurrency": "GBP",
            "url": "https://www.iampsychiatry.com/private-psychiatrist-services"
          },
          {
            "@type": "Offer",
            "name": "Pharmacogenomic (PGx) Mental Health & ADHD Testing",
            "price": "300",
            "priceCurrency": "GBP",
            "url": "https://www.iampsychiatry.com/private-psychiatrist-services"
          }
        ]
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
