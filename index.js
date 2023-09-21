"use strict";

// class Circle {
//   #radius = 0;

//   get radius() {
//     return this.#radius;
//   }

//   set radius(value) {
//     this.#radius = value;
//   }

//   ploschaCola() {
//     return Math.floor(Math.pow(this.#radius, 2)) * Math.floor(Math.PI);
//   }

//   longColo() {
//     return 2 * Math.floor(Math.PI) * this.#radius;
//   }
// }

// const c = new Circle();
// c.radius = 34;
// console.log(c);
// console.log(c.longColo());

// class cssClass {
//   constructor(className) {
//     this.className = className;
//     this.styles = {};
//   }
//   setStyle(prop, value) {
//     this.styles[prop] = value;
//   }

//   deleteStyle(prop) {
//     delete this.styles[prop];
//   }

//   createCss() {
//     let str = `.${this.className} {\n`;
//     for (let key in this.styles) {
//       str += `${key} : ${this.styles[key]};\n`;
//     }
//     str += "}";
//     return str;
//   }
//   renderStyle() {
//     let tag = `<style>\n
//     ${this.createCss()}
//     </style>`;

//     document.write(tag);
//   }
// }

// class createElement {
//   constructor(tagName, className, content) {
//     this.tagName = tagName;
//     this.className = className;
//     this.content = content;
//   }
//   createTag() {
//     return `<${this.tagName} class = '${this.className}'> ${this.content} </${this.tagName}>`;
//   }
//   renderTag() {
//     document.write(this.createTag());
//   }
// }

// const main = new cssClass("wrapper");
// main.setStyle("display", "flex");

// const wrapper__under = new cssClass("wrapper__under");
// wrapper__under.setStyle("width", "300px");
// wrapper__under.setStyle("margin", "10px");

// const img = new cssClass("img");
// img.setStyle("width", "100%");

// const p = new cssClass("p");
// p.setStyle("text-align", "justify");

// let allStyles = main.createCss() + wrapper__under.createCss() + img.createCss() + p.createCss();

// const style = new createElement("style", "", allStyles);
// style.renderTag();

// document.write(
//   '<div class="wrapper"><div class = wrapper__under><h3>What is lorem Ipsum</h3><img class = img src = "lipsum.jpg" alt = "lorem Ipsum"><p class = p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage <a href = "https://www.lipsum.com/" target = "_blank">More...</a></p></div></div>'
// );
// document.write(
//   '<div class="wrapper"><div class = wrapper__under><h3>What is lorem Ipsum</h3><img class = img src = "lipsum.jpg" alt = "lorem Ipsum"><p class = p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage <a href = "https://www.lipsum.com/" target = "_blank">More...</a></p></div></div>'
// );
