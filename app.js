const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

const data = [
  {
    "product_id": 1,
    "product_name": "Nike Pegasus 40 Premium",
    "target_gender": "men",
    "description": "A springy ride for any run, the Peg's familiar, just-for-you feel returns to help you accomplish your goals. This version has the same responsiveness and neutral support you love but with improved comfort in those sensitive areas of your foot, like the arch and toes. Whether you're logging long marathon miles, squeezing in a speed session before the sun goes down or hopping into a spontaneous group jaunt, it's still the established road runner you can put your faith in, day after day, run after run. This design celebrates the Pegasus' history with Swoosh logos from the Peg 1, 24, 35 and 38.",
    "price": 12795.00,
    "stock": 5,
    "company_name": "Nike",
    "product_images": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7b12d5de-4b27-41ec-b05f-fa3bdb71e4d4/pegasus-40-road-running-shoes-ztffW8.png",

  },
  {
    "product_id": 2,
    "product_name": "Nike Pegasus 40",
    "target_gender": "men",
    "description": "A springy ride for every run, the Peg's familiar, just-for-you feel returns to help you accomplish your goals. This version has the same responsiveness and neutral support you love but with improved comfort in those sensitive areas of your foot, like the arch and toes. Whether you're logging long marathon miles, squeezing in a speed session before the sun goes down or hopping into a spontaneous group jaunt, it's still the established road runner you can put your faith in, day after day, run after run.",
    "price": 12500.00,
    "stock": 50,
    "company_name": "Nike",
    "product_images": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ae209260-d1a2-41d1-bb9e-4ae639b914a6/pegasus-40-road-running-shoes-0Z9lqN.png",

  },
  {
    "product_id": 3,
    "product_name": "Nike Pegasus Turbo",
    "target_gender": "men",
    "description": "Let this esteemed stallion help you log the hard miles. Complete with lighter, responsive, repurposed foam and a feather upper, this motley-coloured mare is made to help you increase tempo without sacrificing comfort as you push towards a personal best. This immortal is responsibly constructed with at least 50% recycled material by weight, while maintaining its tried-and-tested everyday ethos.",
    "price": 11895.00,
    "stock": 100,
    "company_name": "Nike",
    "product_images": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/672f902d-944a-4c13-897a-58e8e9c0d2cd/pegasus-turbo-road-running-shoes-MSSVMK.png",

  },
  {
    "product_id": 4,
    "product_name": "Nike Air Max 97",
    "category": "shoes",
    "target_gender": "men",
    "description": "The Nike Air Max 97 is a running shoe that features a comfortable Air Max cushioning system and a React foam midsole. It's designed to provide support and energy return for long-distance runs.",
    "price": 16000.00,
    "stock": 50,
    "company_name": "Nike",
    "product_images": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a47b2ef9-8239-4e82-99fd-e6159c0df489/air-max-97-shoes-EBZrb8.png",

  },
  {
    "product_id": 5,
    "product_name": "Nike Invincible 3",
    "category": "shoes",
    "target_gender": "men",
    "description": "The Adidas Stan Smith is a classic tennis shoe that has been around for decades. It features a comfortable leather upper and a rubber sole. It's perfect for everyday wear.",
    "price": 17000.00,
    "stock": 100,
    "company_name": "Nike",
    "product_images": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4c41bcec-f8e9-4eaf-913d-e5fef6438749/invincible-3-road-running-shoes-Wwmmlp.png",

  },
  {
    "product_id": 6,
    "product_name": "Converse Chuck Taylor All Star",
    "category": "shoes",
    "target_gender": "unisex",
    "description": "The Converse Chuck Taylor All Star is a classic sneaker that has been around for decades. It features a comfortable canvas upper and a rubber sole. It's perfect for everyday wear.",
    "price": 60.00,
    "stock": 100,
    "company_name": "Converse",
    "product_images": "https://images.unsplash.com/photo-1536830220630-ce146cccac84",

  },
  {
    "product_id": 7,
    "product_name": "New Balance 574",
    "category": "shoes",
    "target_gender": "unisex",
    "description": "The New Balance 574 is a classic running shoe that has been around for decades. It features a comfortable ENCAP midsole and a durable outsole. It's perfect for everyday wear.",
    "price": 100.00,
    "stock": 100,
    "company_name": "New Balance",
    "product_images": "https://images.unsplash.com/photo-1539185441755-769473a23570",

  },

  {
    "product_id": 8,
    "product_name": "Puma Suede Classic XXI",
    "category": "shoes",
    "target_gender": "unisex",
    "description": "Welcome to a new era of performance footwear with the PUMA NITRO. This technologically advanced shoe features our",
    "stock": 100,
    "company_name": "Puma",
    "product_images": "https://images.unsplash.com/photo-1570464197285-9949814674a7",

  },

  {
    "product_id": 9,
    "product_name": "Vans Old Skool",
    "category": "shoes",
    "target_gender": "unisex",
    "description": "The Vans Old Skool is a classic skate shoe that has been around for decades. It features a comfortable canvas upper and a vulcanized rubber sole. It's perfect for everyday wear.",
    "price": 70.00,
    "stock": 100,
    "company_name": "Vans",
    "product_images": "https://images.unsplash.com/photo-1626379530580-6a58c5cf1d5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",

  },


  {
    "product_id": 2001,
    "product_name": "BMW M Motorsport SPEEDFUSION",
    "target_gender": "men",
    "description": "The BMW M Motorsport SPEEDFUSION features a match made in heaven: A retro-modern silhouette and the classic motorsport",
    "price": 5400.00,
    "stock": 100,
    "company_name": "Puma",
    "product_images": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/307239/04/sv01/fnd/IND/fmt/png/BMW-M-Motorsport-SPEEDFUSION-Unisex-Sneakers",

  },


  {
    "product_id": 2002,
    "product_name": "Twitch Runner Fresh Unisex Running Shoes",
    "target_gender": "men",
    "description": "Say hello to your new workout ally. These ultra-comfortable running shoes are ready to accompany you during your training,",
    "price": 3500.00,
    "stock": 100,
    "company_name": "Puma",
    "product_images": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/377981/05/sv01/fnd/IND/fmt/png/Twitch-Runner-Fresh-Unisex-Running-Shoes",

  },


  {
    "product_id": 2003,
    "product_name": "Future Rider Double Unisex Sneakers",
    "target_gender": "unisex",
    "description": "Double up your style in these vibrant kicks from the Future Rider family, bringing original '80s vibes to the new season with the",
    "price": 5400.00,
    "stock": 100,
    "company_name": "Puma",
    "product_images": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/380639/12/sv01/fnd/IND/fmt/png/Future-Rider-Double-Unisex-Sneakers",
    "reviews": [
      {
        "author": "John Smith",
        "rating": 5,
        "review": "These shoes are amazing! They're so comfortable and stylish. I highly recommend them."
      },
      {
        "author": "Jane Doe",
        "rating": 4,
        "review": "I love these shoes! They're perfect for running and everyday wear. They're a little bit on the expensive side, but they're worth it."
      }
    ]
  },

  {
    "product_id": 2004,
    "product_name": "Clyde OG Unisex Sneakers",
    "target_gender": "unisex",
    "description": "Say hello to your new workout ally. These ultra-comfortable running shoes are ready to accompany you during your training,",
    "price": 7200.00,
    "stock": 100,
    "company_name": "Puma",
    "product_images": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/391962/04/sv01/fnd/IND/fmt/png/Clyde-OG-Unisex-Sneakers",

  },

  {
    "product_id": 2005,
    "product_name": "PUMA x Palm Tree Crew RS-X Unisex Sneakers",
    "target_gender": "unisex",
    "description": "The RS-X is back. The future-retro silhouette of this sneaker returns with a special nod to the beachy aesthetic of the Palm",
    "price": 12000.00,
    "stock": 100,
    "company_name": "Puma",
    "product_images": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/394624/01/sv01/fnd/IND/fmt/png/PUMA-x-Palm-Tree-Crew-RS-X-Unisex-Sneakers",

  },

  {
    "product_id": 2006,
    "product_name": "ForeverRun NITRO Knit Men's Running Shoes",
    "target_gender": "men",
    "description": "The ForeverRun NITRO dawns a new era of support and guidance. Targeting specific foot strikes stages through a combination of",
    "price": 16000.00,
    "stock": 100,
    "company_name": "Puma",
    "product_images": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/379139/01/sv01/fnd/IND/fmt/png/ForeverRun-NITRO-Knit-Men's-Running-Shoes",

  },

  {
    "product_id": 2007,
    "product_name": "Voyage NITRO 3 Men's Running Shoes",
    "target_gender": "men",
    "description": "Tackle any terrain in the sturdy confines of the Voyage NITRO 3. In this updated version of the model, we’ve tooled the trail shoe with",
    "price": 13000.00,
    "stock": 100,
    "company_name": "Puma",
    "product_images": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/377745/01/sv01/fnd/IND/fmt/png/Voyage-NITRO-3-Men's-Running-Shoes",

  },

  {
    "product_id": 2008,
    "product_name": "PUMA Bowling 22.1 Unisex Cricket Shoes",
    "target_gender": "unisex",
    "description": "The Bowling 22.1 Cricket Shoes mean business when it comes to performance on the pitch. The wider fitting upper features",
    "price": 14000.00,
    "stock": 100,
    "company_name": "Puma",
    "product_images": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/106669/08/sv01/fnd/IND/fmt/png/PUMA-Bowling-22.1-Unisex-Cricket-Shoes",

  },



  {
    "product_id": 2009,
    "product_name": "Liberate Nitro 2 Men's Running Shoes",
    "target_gender": "men",
    "description": "The Bowling 22.1 Cricket Shoes mean business when it comes to performance on the pitch. The wider fitting upper features",
    "price": 14000.00,
    "stock": 100,
    "company_name": "Puma",
    "product_images": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/377315/06/sv01/fnd/IND/fmt/png/Liberate-Nitro-2-Men's-Running-Shoes",

  },


  {
    "product_id": 2010,
    "product_name": "Fast-Trac NITRO 2 Men's Running Shoes",
    "target_gender": "men",
    "description": "The lightweight running shoe that will do it all, no matter the terrain – the Fast-Trac NITRO 2 has dropped. It delivers a smooth ",
    "price": 11000.00,
    "stock": 100,
    "company_name": "Puma",
    "product_images": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/307684/04/sv01/fnd/IND/fmt/png/Fast-Trac-NITRO-2-Men's-Running-Shoes",

  },

  {
    "product_id": 2011,
    "product_name": "Puma Robbin Women's Sneakers",
    "target_gender": "women",
    "description": "Upbeat brimming get of the style hook with PUMA Sneakers stacked with fashion & function",
    "price": 5000.00,
    "stock": 100,
    "company_name": "Puma",
    "product_images": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/392758/02/sv01/fnd/IND/fmt/png/Puma-Robbin-Women's-Sneakers",

  },

  {
    "product_id": 2012,
    "product_name": "Wired Run Slip On Metallics Women's Sneakers",
    "target_gender": "women",
    "description": "Slip into style and comfort with the Wired Run Slip On Metallics Women's Sneakers. The slip-on design makes them easy to wear,",
    "price": 3000.00,
    "stock": 100,
    "company_name": "Puma",
    "product_images": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/389281/03/sv01/fnd/IND/fmt/png/Wired-Run-Slip-On-Metallics-Women's-Sneakers",

  },

  {
    "product_id": 2014,
    "product_name": "Stride Monarch Women's Sneakers",
    "target_gender": "women",
    "description": "Introducing the Stride Monarch, a versatile women's sneaker designed for summer days on the go. Made with breathable mesh",
    "price": 3500.00,
    "stock": 100,
    "company_name": "Puma",
    "product_images": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/389425/01/sv01/fnd/IND/fmt/png/Stride-Monarch-Women's-Sneakers",

  },

  {
    "product_id": 2015,
    "product_name": "Run XX NITRO 2 Women's Running Shoes",
    "target_gender": "women",
    "description": "Named for the woman-specific double X chromosome DNA sequence, the Run XX NITRO stands behind PUMA’s RUN FOR day",
    "price": 11000.00,
    "stock": 100,
    "company_name": "Puma",
    "product_images": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/389425/01/sv01/fnd/IND/fmt/png/Stride-Monarch-Women's-Sneakers",

  },


  {
    "product_id": 3001,
    "product_name": "GEL-CONTEND 4B+",
    "target_gender": "men",
    "description": "This all new version of the popular GEL-Contend shoe is designed to provide ASICS hallmark performance through exceptional cushioning and great fit - ideal for entry-level or low mileage runners.",
    "price": 2800.00,
    "stock": 100,
    "company_name": "Asics",
    "product_images": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=285,height=215,quality=75,format=auto,fit=cover,g=top/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1011B141.405%20(2).jpg",

  },


  {
    "product_id": 3002,
    "product_name": "VERSABLAST 2",
    "target_gender": "men",
    "description": "he Versablast 2 Shoe Is A Versatile Training Partner For Varied Workouts And Running Regimens. Inspired By Our Novablast Series, We Wanted To Make This Shoe Softer And Lighter. It’S Designed To Provide Good Comfort For A Range Of Activities. By Focusing On The Shoe’S Energy Return, We Created A More Responsive Rebound For A Fast Feel Underfoot.",
    "price": 3600.00,
    "stock": 100,
    "company_name": "Asics",
    "product_images": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=285,height=215,quality=75,format=auto,fit=cover,g=top/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1011B334_018_SR_RT_GLB.jpg",

  },

  {
    "product_id": 3003,
    "product_name": "GEL-KINSEI BLAST",
    "target_gender": "men",
    "description": "The Gel-Kinsei Blast Shoes Are Designed For Distance Runners Seeking A Smooth Stride. They Keep Your Mind And Body Energized To Achieve Your Training Goals. An Arrangement Of Gel Technology And Ff Blast Cushioning Create A Soft Yet Responsive Step. After Easing Into The Landing Phase, The Shoe Propels You Forward With A Smooth Transition. The Midsole'S Shape Is Inspired By A Samurai'S Curvaceous Katana Sword. With A Pebax Plate In The Center, This Feature Redirects Your Movement Forward And Gives Your Run A Faster Feel.",
    "price": 14599.00,
    "stock": 100,
    "company_name": "Asics",
    "product_images": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=285,height=215,quality=75,format=auto,fit=cover,g=top/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1011B203_003_SR_RT_GLB.jpg",

  },


  {
    "product_id": 3004,
    "product_name": "GEL-KAYANO 29 LITE-SHOW",
    "target_gender": "men",
    "description": "The GEL-KAYANO 29 LITE-SHOW shoe creates a stable running experience and a more responsive feel underfoot. Featuring a low-profile external heel counter, this piece comfortably cradles your foot with advanced rearfoot support. We also updated the midsole with FF BLAST™ PLUS cushioning",
    "price": 11599.00,
    "stock": 100,
    "company_name": "Asics",
    "product_images": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=285,height=215,quality=75,format=auto,fit=cover,g=top/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1011B628_300_SR_RT_GLB.jpg",

  },

  {
    "product_id": 3005,
    "product_name": "UPCOURT 5",
    "target_gender": "men",
    "description": "The Upcourt™ 5 Shoe Is A Lightweight Design That Offers Better Flexibility And A More Comfortable Fit.    It Features A Broader Section Of Mesh Paneling That Helps Create A Softer And More Adaptable Fit. Meanwhile, Its Supportive Midfoot Overlays Offer Better Stability During Multi-Directional Movements.",
    "price": 3599.00,
    "stock": 100,
    "company_name": "Asics",
    "product_images": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=285,height=215,quality=75,format=auto,fit=cover,g=top/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1071A086_102_SR_RT_GLB.jpg",

  },



  {
    "product_id": 3006,
    "product_name": "GT-2000 11",
    "target_gender": "women",
    "description": "The Gt-2000™ 11 Shoe Is A Versatile Stability Trainer That'S Functional For Various Distances. We'Ve Updated The Underfoot Cushioning To Make It Feel More Comfortable And Energetic.,Key Modifications In The Midsole Include Our Ff Blast™ Cushioning. This Helps Promote Softer Landings And A Responsive Rebound.,Litetruss™ Technology Is Positioned On The Inside Of The Midsole To Improve Stability.",
    "price": 8499.00,
    "stock": 100,
    "company_name": "Asics",
    "product_images": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=285,height=215,quality=75,format=auto,fit=cover,g=top/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1012B495_250_SR_RT_GLB.jpg",

  },


  {
    "product_id": 3007,
    "product_name": "GT-1000 11",
    "target_gender": "women",
    "description": "Our Key Focus For The Gt-1000 11 Shoe Was To Make It Softer And Smoother. Designed For An Active Lifestyle, This Shoe Is Functional For Running Or Wearing To The Gym. Flytefoam Cushioning In The Midsole Is Tuned With A Lower Density Than The Previous Version.",
    "price": 6499.00,
    "stock": 100,
    "company_name": "Asics",
    "product_images": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=285,height=215,quality=75,format=auto,fit=cover,g=top/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1012B197_401_SR_RT_GLB.jpg",

  },


  {
    "product_id": 3008,
    "product_name": "GEL-KAYANO 29",
    "target_gender": "women",
    "description": "The GEL-KAYANO™ 29 shoe helps create a stable running experience and a more responsive feel underfoot.Featuring a low-profile external heel counter, this piece comfortably cradles your foot with advanced rearfoot support.",
    "price": 10499.00,
    "stock": 100,
    "company_name": "Asics",
    "product_images": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=285,height=215,quality=75,format=auto,fit=cover,g=top/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1012B272_700_SR_RT_GLBNSW.jpg",

  },



  {
    "product_id": 3009,
    "product_name": "GEL-KAYANO 29 LITE-SHOW",
    "target_gender": "women",
    "description": "The GEL-KAYANO™ 29 shoe helps create a stable running experience and a more responsive feel underfoot.Featuring a low-profile external heel counter, this piece comfortably cradles your foot with advanced rearfoot support. We also updated the midsole with FF BLAST™ Plus cushioning.",
    "price": 10499.00,
    "stock": 100,
    "company_name": "Asics",
    "product_images": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=285,height=215,quality=75,format=auto,fit=cover,g=top/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1012B299_001_SR_RT_GLBNSW.jpg",

  },


  {
    "product_id": 3010,
    "product_name": "GEL-QUANTUM 360 VII",
    "target_gender": "women",
    "description": "The Meaning Of Cushioning Moves Forward On The Gel-Quantum 360™ Vii Sneaker. By Working With The Asics Institute Of Sport Science, We Reinvented Key Running Technologies For Daily Use. This Shoe’S Gel™ Technology Is Structured To Create Better Shock Absorption Underfoot. Its Scutoid Shape Also Allows You To Move More Naturally During Everyday Scenarios (Like On-Foot Commuting Or Exploring New Environments). Meanwhile, The Ff Blast™ Cushioning In The Heel Has Been Fine-Tuned To Give This Shoe A More Energized Feel.",
    "price": 8999.00,
    "stock": 100,
    "company_name": "Asics",
    "product_images": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=285,height=215,quality=75,format=auto,fit=cover,g=top/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1202A411_002_SR_RT_GLB.jpg",

  },



];




// Endpoint to get data based on the 's' and 'id' query parameters
app.get('/api/data', (req, res) => {
  const category = req.query.s;
  const productId = req.query.id;
  const subcategory = req.query.sub;
  const target_gender = req.query.g;
  const company_name = req.query.b;

  if (category && productId && subcategory && target_gender) {
    // If all parameters are provided, return the matching item
    const filteredData = data.filter(
      (item) =>
        item.category === category &&
        item.product_id.toString() === productId &&
        item.subcategory === subcategory &&
        item.target_gender === target_gender
    );
    if (filteredData.length > 0) {
      res.json(filteredData[0]); // Return the first matching item
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } else if (category && productId && subcategory) {
    // If 's', 'id', and 'sub' parameters are provided, return matching item
    const filteredData = data.filter(
      (item) =>
        item.category === category &&
        item.product_id.toString() === productId &&
        item.subcategory === subcategory
    );
    if (filteredData.length > 0) {
      res.json(filteredData[0]); // Return the first matching item
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } else if (category && productId && target_gender) {
    // If 's', 'id', and 'g' parameters are provided, return matching item
    const target_genders = Array.isArray(target_gender) ? target_gender : [target_gender];
    const filteredData = data.filter(
      (item) =>
        item.category === category &&
        item.product_id.toString() === productId &&
        target_genders.includes(item.target_gender)
    );
    if (filteredData.length > 0) {
      res.json(filteredData[0]); // Return the first matching item
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } else if (category && subcategory && target_gender) {
    // If 's', 'sub', and 'g' parameters are provided, filter the data based on all three
    const target_genders = Array.isArray(target_gender) ? target_gender : [target_gender];
    const filteredData = data.filter(
      (item) =>
        item.category === category &&
        item.subcategory === subcategory &&
        target_genders.includes(item.target_gender)
    );
    res.json(filteredData);
  } else if (productId && subcategory && target_gender) {
    // If 'id', 'sub', and 'g' parameters are provided, filter the data based on all three
    const target_genders = Array.isArray(target_gender) ? target_gender : [target_gender];
    const filteredData = data.filter(
      (item) =>
        item.product_id.toString() === productId &&
        item.subcategory === subcategory &&
        target_genders.includes(item.target_gender)
    );
    res.json(filteredData);
  } else if (category && productId) {
    // If 's' and 'id' parameters are provided, return matching item
    const filteredData = data.filter(
      (item) =>
        item.category === category &&
        item.product_id.toString() === productId
    );
    if (filteredData.length > 0) {
      res.json(filteredData[0]); // Return the first matching item
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } else if (category && subcategory) {
    // If 's' and 'sub' parameters are provided, filter the data based on both
    const filteredData = data.filter(
      (item) =>
        item.category === category &&
        item.subcategory === subcategory
    );
    res.json(filteredData);
  } else if (category && target_gender) {
    // If 's' and 'g' parameters are provided, filter the data based on both
    const target_genders = Array.isArray(target_gender) ? target_gender : [target_gender];
    const filteredData = data.filter(
      (item) =>
        item.category === category &&
        target_genders.includes(item.target_gender)
    );
    res.json(filteredData);
  } else if (productId && subcategory) {
    // If 'id' and 'sub' parameters are provided, filter the data based on both
    const filteredData = data.filter(
      (item) =>
        item.product_id.toString() === productId &&
        item.subcategory === subcategory
    );
    res.json(filteredData);
  } else if (subcategory && target_gender) {
    // If 'sub' and 'g' parameters are provided, filter the data based on both
    const target_genders = Array.isArray(target_gender) ? target_gender : [target_gender];
    const filteredData = data.filter(
      (item) =>
        item.subcategory === subcategory &&
        target_genders.includes(item.target_gender)
    );
    res.json(filteredData);
  } else if (subcategory) {
    // If only 'sub' parameter is provided, filter the data based on the 's' query parameter
    const filteredData = data.filter((item) => item.subcategory === subcategory);
    res.json(filteredData);
  } else if (company_name) {
    // If only 'sub' parameter is provided, filter the data based on the 's' query parameter
    const filteredData = data.filter((item) => item.company_name === company_name);
    res.json(filteredData);
  } else if (target_gender) {
    // If only 'sub' parameter is provided, filter the data based on the 's' query parameter
    const filteredData = data.filter((item) => item.target_gender === target_gender);
    res.json(filteredData);
  } else if (category) {
    // If only 's' parameter is provided, filter the data based on the 's' query parameter
    const filteredData = data.filter((item) => item.category === category);
    res.json(filteredData);
  } else if (productId) {
    // If only 'id' parameter is provided, filter the data based on the 'id' query parameter
    const filteredData = data.filter((item) => item.product_id.toString() === productId);
    if (filteredData.length > 0) {
      res.json(filteredData[0]); // Return the first matching item
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } else {
    // If neither 's' nor 'id' parameters are provided, return all data
    res.json(data);
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
