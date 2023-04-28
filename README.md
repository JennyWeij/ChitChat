# ChitChat

Är en chatapplikation som gåt ut på att skapa en plattform där användare kan registrera sig, logga in och skapa innehåll baserat på en resurs i ett Express-API. Användarinformationen och innehållet har sparas i en MongoDB-databas, och endast skaparen av innehållet ska kunna ändra eller ta bort det samt användare med adminrättigheter. Plattformen har en klientapplikation där alla operationer kan utföras, och innehållet är synligt för alla även om de inte är inloggade.

_Denna applikation är skapad för ett utbildningsarbete på Medieinstitutet._

## Installation

För att komma igång med projektet behöver du göra dessa kommando i terminalen. Först väljer du om du vill vara inne i server-delen eller klient-delen.

```
cd client / cd server
npm install
npm run dev
```

Om du vill köra testerna kan du göra detta kommando i terminalen.

```
npm test
```

**Krav för godkänt:**

- [x] Git & GitHub har använts
- [x] Projektmappen innehåller en README.md fil (läs ovan för mer info)
- [x] Uppgiften lämnas in i tid!
- [x] Det ska finnas minst två stycken resurser (users & posts)
- [x] Det ska gå att registrera sig, logga in och skapa innehåll som är kopplat till inloggad användare.
- [x] Endast den inloggade användaren får lov att utföra C_UD actions på sitt innehåll.
- [x] Allt innehåll ska sparas i en MongoDB databas.

**Krav för väl godkänt:**

- [x] Alla punkter för godkänt är uppfyllda
- [x] Det ska finnas en adminroll i systemet där man som inloggad admin har rättigheten att utföra CRUD operationer på allt innehåll.
- [x] Admins ska ha tillgång till ett gränssnitt som listar alla användare och deras roller. En admin ska från gränssnittet kunna ta bort användare eller ändra dess roll.

**Skapare:**

Jenny Pettersson,
Madeleine Gustafson,
Tara Skoglund,
Jenny Weijland
