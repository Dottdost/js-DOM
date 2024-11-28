function createProductCard(productName, price, imageUrl) {
  const card = document.createElement("div");
  card.classList.add("product-card");

  const image = document.createElement("img");
  image.classList.add("card-image");
  image.src = imageUrl;
  image.alt = productName;

  const name = document.createElement("h3");
  name.classList.add("card-name");
  name.textContent = productName;

  const priceElement = document.createElement("p");
  priceElement.classList.add("card-price");
  priceElement.textContent = `Price: ${price}`;

  card.append(image, name, priceElement);

  return card;
}
function createCommentMessage(author, message, timestamp) {
  const comment = document.createElement("div");
  comment.classList.add("comment");

  const authorName = document.createElement("h3");
  authorName.classList.add("comment-author");
  authorName.textContent = author;

  const messageText = document.createElement("p");
  messageText.classList.add("comment-message");
  messageText.textContent = message;

  const time = document.createElement("span");
  time.classList.add("comment-timestamp");
  time.textContent = `timestamp: ${timestamp}`;

  comment.append(authorName, messageText, time);

  return comment;
}

function createMenuItem(name, price, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const itemName = document.createElement("h3");
  itemName.classList.add("item-name");
  itemName.textContent = name;

  const itemPrice = document.createElement("p");
  itemPrice.classList.add("item-price");
  itemPrice.textContent = `price: ${price}`;

  const itemInfo = document.createElement("p");
  itemInfo.classList.add("item-info");
  itemInfo.textContent = info;

  menuItem.append(itemName, itemPrice, itemInfo);

  return menuItem;
}

const newCard = createProductCard(
  "pizza",
  "999",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaBqtszEadNMiZGHdXAViPK82HppPRTwFBZA&s"
);
document.body.append(newCard);

const commentMessage = createCommentMessage("Hello", "best!", "19:00");
document.body.append(commentMessage);

const menuItem = createMenuItem("emmm", "99", "dedededdededdee");
document.body.append(menuItem);
