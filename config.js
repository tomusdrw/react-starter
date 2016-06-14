//12/ Przygotowujemy konfigurację pod System.js
System.config({
  defaultJSExtensions: false,
  transpiler: false,
  meta: {
    "*.css": {
      loader: "css"
    }
  },
  map: {
    "css": "/cdn/systemjs/plugin-css/css-0.1.20.js",
  }
});
