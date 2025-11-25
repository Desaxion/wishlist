
const BASE = 140; // Base color multiplier for categories

let categories = {};

const items = 
[
    // Title
    // Desc
    // Link
    // Image
    // avaliableInStore
    // Category
    // Price
    // Sale price (opt)

[
        "The Fall of Gondolin - J.R.R. Tolkien",
        "Bok av Tolkien. Historier om vad som händer tusentals år innan Sagan om Ringen.",
        "https://www.adlibris.com/sv/bok/fall-of-gondolin-9780008503970",
        "https://www.adlibris.com/images/9780008503970/fall-of-gondolin.jpg",
        true,
        "Böcker",
        "114"
    ],
    [
        "Strumpor - Tre Kronor",
        "Strumpor för spel både på hemma och bortaplan med världens bästa hockeylag.",
        "https://trekronorshop.se/accessoarer-vrigt/96092-2-pack-socks-tre-kronor-home-away-yellow-navy",
        "https://images.neh.com/upload/test//high/TRE2535.jpg?v=1277557823",
        false,
        "Kläder",
        "149"
    ],
    [
        "Lego Nissan Skyline GT-R",
        "Cool legobil som jag länge velat ha, från filmen Fast & Furious.",
        "https://www.ahlens.se/produkter/barn/speed-champions-fast-furious-nissan-skyline-gt-r-r34-76917-a042b031-3368-47b3-a7ba-830d41636834?srsltid=AfmBOor0tpJ8kpLyptZAGQQw7em92iRAmSj4h3uYl8avhKWa3-PGYagOd0s",
        "https://res.cloudinary.com/dxxvmvvyj/image/upload/t_ahlens-transformations-bg-removed/c_pad,w_1170,h_1690/f_auto/q_auto/v1/products/bg_removed/65/83/29/65832916_1.jpg?_a=BAVAZGID0",
        true,
        "Leksaker",
        "299",
        "225"
    ],
   [
        "MacKenzie Step Blade Guard Skridskoskydd",
        "Ordentliga skridskoskydd som går att gå i. Smidigare att använda än de skydd jag har på mina skridskor nu.",
        "https://www.xxl.se/mackenzie-step-blade-guard-24-25-skridskoskydd-vit/p/1233021_1_Style",
        "https://www.xxl.se/filespin/de081a09fceb4ebf8d7ff53c380d79eb?quality=75&bgcolor=efefef&resize=1200%2C1200",
        true,
        "Hockey",
        "119"
    ],
    [
        "Bidrag till Stadsmissionen",
        "Vissa har det inte lika bra som vi, därför får ni gärna ge ett bidrag till Göteborgs Stadsmission så att lite julglädje kan spridas till de som inte har råd med det själva.",
        "https://www.stadsmissionen.org/ge-stod/ge-direkt/",
        "https://www.stadsmissionen.org/app/uploads/Utvald_bild_ny-logga-750-%C3%97-400-px.png",
        false,
        "Övrigt",
        "Valfritt belopp"
     ]
];

function filterCategories(cat){
    console.log(cat)
}

function setUpCategories() {
    const categoryAnchor = document.getElementById("categories")
    for (const [key, value] of Object.entries(categories)) {
        let categoryElement = document.createElement('div');
        categoryElement.textContent = key.toString()[0].toUpperCase() + key.toString().slice(1,key.toString().length);
        categoryElement.classList.add("category");
        categoryElement.classList.add("highish-weight");
        categoryElement.classList.add("category-" + key);
        categoryElement.style.backgroundColor = categories[key].toString();
        categoryAnchor.append(categoryElement);
        categoryElement.addEventListener('click', function(){filterCategories(key)});

        
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    const anchor = document.getElementById("items");


    const filterHeader = document.getElementById("filter-header");
    const filterContainer = document.getElementById("filter-container");
    const filterChevron = document.getElementById("filter-arrow");
    let filterClosed = true;
    filterHeader.onclick = function(){
        filterClosed = !filterClosed;
        console.log(filterClosed);
        if(filterClosed){
            filterContainer.classList.add("closed");
            filterChevron.classList.add("closed");
        } else {
            if(filterContainer.classList.contains("closed")){
                filterContainer.classList.remove("closed");
            }
            if(filterChevron.classList.contains("closed")){
                filterChevron.classList.remove("closed");
            }
        }
    };

    let count = 0;
    items.forEach(item => {
        let img = document.createElement("img");
        img.src = item[3];
        img.onload = function() {
            let itemDiv = document.createElement('div');
            itemDiv.classList.add("item");
            itemDiv.classList.add("category-" + item[5].toLowerCase());

            let imageFrame = document.createElement('div');
            imageFrame.classList.add("image-frame");
            imageFrame.append(img);
            itemDiv.append(imageFrame);
            

            let title = document.createElement("h3");
            title.textContent = item[0];
            title.classList.add("item-title");
            itemDiv.append(title);

            let desc = document.createElement("h3");
            desc.textContent = item[1];
            desc.classList.add("low-weight");
            desc.classList.add("smallish-text");
            itemDiv.append(desc);

            let priceDiv = document.createElement("div");
            priceDiv.classList.add("price-container");
            let price = document.createElement("h3");
            price.textContent = item[6] + " kr"
            price.classList.add("item-price");

            

            if (item.length > 7){
                let salePrice = document.createElement("h3");
                salePrice.textContent = item[7] + " kr"; // Maybe add regex to filter numbers
                salePrice.classList.add("sale-price")
                price.classList.add("old-price");
                priceDiv.append(salePrice);
            }
            
            priceDiv.append(price);

            itemDiv.append(priceDiv);

            let buttonDiv = document.createElement("div");
            buttonDiv.classList.add("button-container");

            let buyButton = document.createElement("a");
            let buyButtonContent = document.createElement("div");
            buyButton.href = item[2];
            buyButtonContent.classList.add("buy-button-content");
            buyButton.classList.add("buy-button");
            buyButtonContent.textContent = "Köp här";
            buyButton.append(buyButtonContent);

            buttonDiv.append(buyButton)
            if(item[4]){
                let linkSubtext = document.createElement("div");
                linkSubtext.classList.add("link-subtext")
                linkSubtext.textContent = "(eller i butik)"
                linkSubtext.classList.add("small-text");
                buttonDiv.append(linkSubtext);
            }

            let category = document.createElement("div");
            category.classList.add("item-category");

            let key = item[5].toLowerCase();
            if(!(key in categories)){
                categories[key] = "rgb(" + BASE*Math.random()+ "," + BASE*Math.random()+ "," + BASE*Math.random() + ")";
            }
                
            
            let tinyCategory = document.createElement("div");
            tinyCategory.classList.add("tiny-category");
            tinyCategory.textContent = key.toString()[0].toUpperCase() + key.toString().slice(1,key.toString().length);
            tinyCategory.style.backgroundColor = categories[key].toString();

            itemDiv.append(buttonDiv);
            itemDiv.append(tinyCategory);
            
            anchor.append(itemDiv);
            if(++count == items.length){
                setUpCategories();
            }
        }


    });



});
