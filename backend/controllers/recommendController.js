// backend/controllers/recommendController.js

// Static product database with tags for skin, hair, and face classification
const PRODUCTS_DATABASE = [
  {
    id: 1,
    name: "Aura Glow Elixir",
    price: 84,
    description: "A multi-molecular hyaluronic complex combined with fermented botanicals.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHMC9rY6qjXlOFXW2qT1UhcI8dMuBcHm-puMp_ukakn2BNGQdT1MeNONYif-JnvNLL4Xloc_MODls_dw9M6Tl5-DLxQamNdkxwzzz7bXL0c9rzfEiDf3atWG0EafxpJLOx35F-QxImSOhVZbMdXSO2K4IZCoP7-iywC0FJzYbmPt_kzXiePTJPC0ldL85gCSP4iloVdd7ptAPC1w_EJcNoYRoWP6fuqMrazs-QcjsNDjxdk_Po2e_ezAALOizs0OBXIDQ5hAQ-eXMc",
    category: "skincare",
    suitableForSkin: ["dry", "combination", "sensitive"],
    suitableForFace: ["oval", "round", "square", "heart", "diamond"]
  },
  {
    id: 2,
    name: "Resurfacing Balm",
    price: 62,
    description: "A gentle overnight treatment using cold-pressed Bakuchiol to refine texture.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf_GnR6VqhbWW-2SCMMTMzGxaWM0ihPReKmj2CqPm0EMVHJB3JqxmaSrf-A4p8vsuaOgn9bwnVphgHICYAFHFxnnb9gMYJyYiy7lwRmVUewbJeJxTloT0YwYTUYmBExz3PvIiqRmvdm1MmV_qufNU55dxOYTqZN3wy0qaeMLX5uZoQbO5AV3VF2TL-CBi3bFYZJOfTOwcx-lGznDKCDzQ4A9ksxDN9hEabILREGEW_vQSCiZpovqCYitYqp4gCN0cYw93EkXGBQDfy",
    category: "skincare",
    suitableForSkin: ["oily", "combination"],
    suitableForFace: ["oval", "round", "square", "heart", "diamond"]
  },
  {
    id: 3,
    name: "Silk Cleansing Oil",
    price: 48,
    description: "A transforming oil-to-milk cleanser infused with Squalane and Vitamin E.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg3ccU_k7wgERfF29r2d69NNtTq2PMiz6EBUfZDikicmw9Onw2chKS_NQMaYiok3Jb5HUYWJ-3ohvQrF51vs778M5XprprTVPMR06N1EgAFNp4IJ1p0FT4U-MPkfTLjAsts_jfTcCKel57XAYe5iw4neCxxgy5D_iSR8PAQubR5zPSw_npmg8J5e_RTxz1jIdNPJwnnA7NODNPCSp1N7IInEVltGywawq2a8dlDrPHEc2Dgo3RGNpFI8wphiDVH0AtyYaunQK8ZHd6",
    category: "skincare",
    suitableForSkin: ["dry", "sensitive"],
    suitableForFace: ["oval", "round", "square", "heart", "diamond"]
  },
  {
    id: 4,
    name: "Detoxify Mineral Mask",
    price: 55,
    description: "Rare volcanic clays blended with activated charcoal and organic matcha.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuFRSnkxaK3JhNhzD1z8cv6HiCdOKDcP6FWddmQE7cJtlFg-sMSwWS6cih0Wjm2irdtZe7E2oG8bc2d2AVkb39kcgOTX-a0GjVtw9Dav41uEC5d0UpyPXF8g6zpJPNNZtW8dTetuPu5NinSq-YKic1BIpqojj2fkUrkmqNaR41DBLdagj9dU074zN8vKp9Uox16l54cu-QWzY1Sv9BFJL2rKwD3fC9Swsxye94jT6cCT16hgcg6l7nvoTCIlOYRQk3rRR3N0VufYNd",
    category: "skincare",
    suitableForSkin: ["oily", "combination"],
    suitableForFace: ["oval", "round", "square", "heart", "diamond"]
  },
  {
    id: 5,
    name: "Sculpting Eye Treatment",
    price: 95,
    description: "A peptide-rich concentrate designed to lift, firm, and brighten.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCJBqJQ8ayBjINlX5jqTIyChKwVXhFWKwZo6x12-rmTV1Exsv6gBynnDhZFLaPP9etJsTDilN1J2TfonsWwlLkTChcnQEx7mYcALpGUIxHpCr8SG1sdLpuwg0Qz1ba47C6N2fHQOL-rP8aIZRI9_2T64GbqpXC1m4-GEuOWfIYmFNn9OHuUVCJbOWKs50_1tu7ArREsmyWNUP9f8vAKWHxZB530XP8maoBoQk2f1lZBwE13tiSFvr8-Su2kkH-nj8gh7-6CgE4ief9",
    category: "skincare",
    suitableForSkin: ["dry", "oily", "combination", "sensitive"],
    suitableForFace: ["round", "square", "heart"] // Specifically targeted for contouring definition
  },
  {
    id: 6,
    name: "Rose Water Essence",
    price: 36,
    description: "Pure Damask rose distillate paired with aloe and witch hazel.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5w-dpBEKLzPbMjk1kr5uQuQJQb96QWSUEiDcHt-y_oEOL5gWXqMbScksJlA5tGtfynWkRsprIaI171WOwP3LvQjmLQNDC7fnaCA4xFXSoWlo7RDMsU_EmcYyir8m3x3WIvtJqSYbTojXCGI3fb03oXQbyIKFsbVZcNM3GQPPD8g3Gph6EHa6OlcyxJF1EQQ1TL0uefayR6J5zwxfpljLsjdG_cz8m-eVrWWjg0mSpje6QufbH_Q7zxVD_eRhWE_k5_WkHXPYM_GZP",
    category: "skincare",
    suitableForSkin: ["dry", "oily", "combination", "sensitive"],
    suitableForFace: ["oval", "round", "square", "heart", "diamond"]
  },
  // Haircare recommendations
  {
    id: 7,
    name: "Scalp Revitalizing Oil",
    price: 42,
    description: "A nourishing botanical formulation targeting dry, itchy scalps and follicle strength.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgG4I26Clv2ss8wyP9E0W5h1rst84CQ57gxWylH48yDr-JKvhBqGHugsH4GJouTmadRwSfRCdnlLLFh1AHtjENBmoZlkuxtglbmCQnmAPkY7YudJz7tHsX9jqgokG9TAwnEZHYu3HL7abN80GPI1MdL97g315vxsXoeqfa0MxnhdGr9KmFkIq5PCN82I4OmXQpwXw03-N740_aKPBmFe_NVh5IIlzKJx0EzNDtXJMOAl7jJ1dy3AO0zI6A5h59pxNjTHoH_c_RXzZa",
    category: "haircare",
    suitableForHair: ["dry"],
    suitableForFace: ["oval", "round", "square", "heart", "diamond"]
  },
  {
    id: 8,
    name: "Protein Strength Wash",
    price: 38,
    description: "Daily strengthening cleanse with rice amino acids for normal to oily hair.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgG4I26Clv2ss8wyP9E0W5h1rst84CQ57gxWylH48yDr-JKvhBqGHugsH4GJouTmadRwSfRCdnlLLFh1AHtjENBmoZlkuxtglbmCQnmAPkY7YudJz7tHsX9jqgokG9TAwnEZHYu3HL7abN80GPI1MdL97g315vxsXoeqfa0MxnhdGr9KmFkIq5PCN82I4OmXQpwXw03-N740_aKPBmFe_NVh5IIlzKJx0EzNDtXJMOAl7jJ1dy3AO0zI6A5h59pxNjTHoH_c_RXzZa",
    category: "haircare",
    suitableForHair: ["normal", "oily"],
    suitableForFace: ["oval", "round", "square", "heart", "diamond"]
  },
  {
    id: 9,
    name: "Follicle Repair Serum",
    price: 75,
    description: "Clinical peptide serum that stimulates scalp microcirculation to combat hair fall.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgG4I26Clv2ss8wyP9E0W5h1rst84CQ57gxWylH48yDr-JKvhBqGHugsH4GJouTmadRwSfRCdnlLLFh1AHtjENBmoZlkuxtglbmCQnmAPkY7YudJz7tHsX9jqgokG9TAwnEZHYu3HL7abN80GPI1MdL97g315vxsXoeqfa0MxnhdGr9KmFkIq5PCN82I4OmXQpwXw03-N740_aKPBmFe_NVh5IIlzKJx0EzNDtXJMOAl7jJ1dy3AO0zI6A5h59pxNjTHoH_c_RXzZa",
    category: "haircare",
    suitableForHair: ["dry", "normal", "oily"],
    suitableForFace: ["oval", "round", "square", "heart", "diamond"]
  }
];

/**
 * Returns filtered product recommendations.
 * Expects skinType, hairType, and faceType in body.
 */
exports.getRecommendations = async (req, res) => {
  try {
    const { skinType, hairType, faceType } = req.body;

    // Filter logic
    let recommendations = PRODUCTS_DATABASE.filter(product => {
      let isMatch = false;

      // 1. Match Skincare products to skinType
      if (product.category === "skincare" && skinType) {
        if (product.suitableForSkin.includes(skinType.toLowerCase())) {
          isMatch = true;
        }
      }

      // 2. Match Haircare products to hairType
      if (product.category === "haircare" && hairType) {
        if (product.suitableForHair && product.suitableForHair.includes(hairType.toLowerCase())) {
          isMatch = true;
        }
      }

      // 3. Match Sculpting/special products to faceType (specifically for face shape enhancement)
      if (faceType && product.suitableForFace) {
        if (product.name === "Sculpting Eye Treatment" && product.suitableForFace.includes(faceType.toLowerCase())) {
          isMatch = true;
        }
      }

      // If user parameters are empty, include by default
      if (!skinType && !hairType && !faceType) {
        isMatch = true;
      }

      return isMatch;
    });

    // If no filtered recommendations, fallback to full catalog
    if (recommendations.length === 0) {
      recommendations = PRODUCTS_DATABASE;
    }

    res.status(200).json({
      count: recommendations.length,
      recommendations
    });

  } catch (err) {
    res.status(500).json({ message: "Server error generating recommendations: " + err.message });
  }
};
