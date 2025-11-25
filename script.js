
const BASE = 140; // Base color multiplier for categories

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
    ]
]



document.addEventListener("DOMContentLoaded", (event) => {
    const anchor = document.getElementById("items");

    let categories = {};

    items.forEach(item => {
        let img = document.createElement("img");
        img.src = item[3];
        img.onload = function() {
            let itemDiv = document.createElement('div');
            itemDiv.classList.add("item");

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
                salePrice.textContent = item[7] + " kr";
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
            // Calculate categories
            categories[item[5]] ??= [ BASE*Math.random(), BASE*Math.random(), BASE*Math.random()]
            itemDiv.append(buttonDiv);
            
            
            anchor.append(itemDiv);
        }


    });
});