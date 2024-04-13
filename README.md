# yhistu
Yhistu raamatupidamise repo

## Teemad
- Lisada javascripti dokumenteerija JSDoc. Alates momendist, kui tekib skript


## Rakenduse struktuur
yhistu/
│
├── client/                  # Klientrakenduse (React) juurkaust
│   ├── public/              # Avalikud failid, nagu HTML, pildid, favicon jne.
│   ├── src/                 # Kõik Reacti lähtefailid
│   │   ├── components/      # Taaskasutatavad Reacti komponendid
│   │   ├── pages/           # Leheküljed või vaated teie rakenduses
│   │   ├── app/             # Rakenduse põhilogika ja ülemiste tasemete komponendid
│   │   ├── hooks/           # Kohandatud Reacti konksud (hooks)
│   │   ├── context/         # Konteksti API failid
│   │   ├── services/        # Teenused APIga suhtlemiseks
│   │   ├── utils/           # Abifunktsioonid ja utiliidid
│   │   └── index.js         # Rakenduse sisenemispunkt
│   ├── package.json         # Kliendi sõltuvused ja skriptid
│   └── ...
│
├── server/                  # Serverirakenduse (Node/Express) juurkaust
│   ├── config/              # Seadistusfailid ja keskkonna muutujad
│   ├── models/              # Andmebaasi mudelid (Mongoose, kui kasutate MongoDB-d)
│   ├── routes/              # API marsruudid
│   ├── controllers/         # Kontrollerid API loogika jaoks
│   ├── middleware/          # Middleware, nt autentimiseks
│   ├── utils/               # Serveri utiliidid ja abifunktsioonid
│   ├── app.js               # Expressi rakenduse peamine fail
│   ├── package.json         # Serveri sõltuvused ja skriptid
│   └── ...
│
├── .gitignore               # Git'i ignoreerimisreeglid
├── README.md                # Projekti dokumentatsioon
└── ...

## Tegevuskäik
Nii Kliendi kui serveri jaoks luuakse oma Node projekt

### Server
`npm init -y`
`npm install express mongoose jsonwebtoken`
`touch app.js`

MongoDB install ja kasutus: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/

Pidevate muudatuste järlmiseks installi nodemon `npm install -g nodemon` ja käivita nodemon `nodemon app.js`.

