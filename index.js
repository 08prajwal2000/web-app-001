import { writeFileSync, mkdirSync, existsSync } from "fs";

if (!existsSync("./build")) mkdirSync("./build")
console.log("working on index.html");
writeFileSync("./build/index.html", `
  <html>
    <head>
      <title>Web App 001</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <h1>Hello this is a web app 001</h1>
    </body>
  </html>

`, {
  flag: "a"
});
console.log("working on style.css");
writeFileSync("./build/style.css", `
body {
  background-color: green;
  color: white;
}
h1 {
  font-size: 2rem;
  border: 2px solid red;
}
`, {
  flag: "a"
});
