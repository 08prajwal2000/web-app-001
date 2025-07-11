import { writeFileSync, mkdirSync, existsSync } from "fs";

if (!existsSync("./build")) mkdirSync("./build")

writeFileSync("./build/test.html", `
  <html>
    <head>
      <title>Web App 001</title>
    </head>
    <body>
      <h1>Hello this is a web app 001</h1>
    </body>
  </html>

`, {
  flag: "a"
});
