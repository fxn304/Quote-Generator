let quoteBtn = document.getElementById("newQuote-btn");

let quotes = [
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "For 60 years, WWF has worked to help people and nature thrive. As the world's leading conservation organization, WWF works in nearly 100 countries.",
  "At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.",
  "A diam maecenas sed enim ut sem viverra aliquet. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Est placerat in egestas erat. Nec feugiat nisl pretium fusce.",
  "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Ullamcorper eget nulla facilisi etiam. Tellus id interdum velit laoreet. Sociis natoque penatibus et magnis dis parturient montes.",
  "Massa vitae tortor condimentum lacinia quis vel eros. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Habitant morbi tristique senectus et netus. Lectus arcu bibendum at varius vel. Aliquet eget sit amet tellus cras adipiscing enim.",
  "Diam quis enim lobortis scelerisque. Leo a diam sollicitudin tempor. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Aliquam etiam erat velit scelerisque in dictum.",
  "Tortor at risus viverra adipiscing. Ornare quam viverra orci sagittis eu volutpat. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Lorem donec massa sapien faucibus et molestie.",
  "Diam maecenas ultricies mi eget. Netus et malesuada fames ac turpis egestas integer eget aliquet. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. "
];

function randomQuote() {
  let quoteChange = document.querySelector(".quote-change");
  let index = Math.floor(Math.random() * quotes.length);
  quoteChange.innerHTML = quotes[index];
}
