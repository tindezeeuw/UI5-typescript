# UI5-typescript
Deze repository geeft een voorbeeld van het ombouwen van een Javascript UI5 applicatie naar het gebruik van Typescript. 

## Support voor Typescript opzetten
* Voeg typescript en de types van UI5 toe aan je project: (voor het web-project)

      npm i -sD typescript @openui5/ts-types

* Voeg een script toe aan je package.json:

      "scripts" : {
          "ts": "tsc --build --watch"
      }

* initialiseer de tsconfig.json door op de commmandline dit te draaien

      npx tsc --init

* voeg de volgende zaken toe aan de tsconfig.json

      "compilerOptions": {
          "sourceMap": true,  // Omdat dit handig is in het debuggen
          "types": ["@openui5/ts-types"]
      }

* Het is handig ook je .gitignore aan te passen met de volgende regels:

      # niet-TS files niet in git stoppen
      webapp/**/*.js.map
      webapp/**/*.js
      !webapp/test/**/*.js

## Ombouwen van een UI5 JS file:
* Hernoem de .js file naar .ts zodat deze opgepikt wordt door de editor en de compiler
* Zet de juiste class definitie om of in de code (zie ook de voorbeelden in deze repository)
* Zet de interne functies in de class en zorg dat deze qua syntax kloppen
* Zorg dat de Dependency injection van UI5 blijft werken.
