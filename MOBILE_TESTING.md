# 📱 Testowanie na Telefonie - HTTPS Setup

## Problem

Przeglądarki blokują Camera API i Geolocation API na **nie-HTTPS** adresach (poza localhost).
Dlatego `192.168.0.58:3000` nie ma dostępu do kamery ani GPS.

---

## ✅ Rozwiązanie 1: ngrok (Najprostsze - 2 minuty)

### Krok 1: Zainstaluj ngrok

```powershell
# Pobierz z https://ngrok.com/download
# Lub przez chocolatey:
choco install ngrok

# Lub scoop:
scoop install ngrok
```

### Krok 2: Uruchom aplikację

```powershell
# Terminal 1: Uruchom Next.js
npm run dev

# Terminal 2: Uruchom ngrok
ngrok http 3000
```

### Krok 3: Skopiuj HTTPS URL

```
Forwarding: https://abc123.ngrok.io -> http://localhost:3000
```

### Krok 4: Otwórz na telefonie

Otwórz `https://abc123.ngrok.io` na telefonie - **będzie działać kamera i GPS!**

**Zalety:**

- ✅ Automatyczny HTTPS
- ✅ Działa przez WiFi i dane mobilne
- ✅ 0 konfiguracji certyfikatów

**Wady:**

- ⚠️ URL zmienia się przy każdym restarcie (free tier)
- ⚠️ Wolniejsze niż LAN (routing przez serwery ngrok)

---

## ✅ Rozwiązanie 2: mkcert + Local HTTPS (Najlepsze dla dev)

### Krok 1: Zainstaluj mkcert

```powershell
# Przez chocolatey:
choco install mkcert

# Lub scoop:
scoop install mkcert

# Lub pobierz z: https://github.com/FiloSottile/mkcert/releases
```

### Krok 2: Zainstaluj root CA

```powershell
mkcert -install
```

### Krok 3: Wygeneruj certyfikat dla LAN IP

```powershell
# W folderze projektu utwórz folder certs:
mkdir certs

# Wygeneruj certyfikat dla localhost + LAN IP:
mkcert -key-file certs/key.pem -cert-file certs/cert.pem localhost 192.168.0.58
```

### Krok 4: Zainstaluj certyfikat na telefonie

1. Prześlij `certs/cert.pem` na telefon (email, Bluetooth, USB)
2. **Android:** Settings → Security → Install certificate → CA certificate
3. **iOS:** Settings → General → VPN & Device Management → Install Profile

### Krok 5: Uruchom Next.js z HTTPS

```powershell
# Zainstaluj pakiet https-localhost:
npm install --save-dev https-localhost

# Lub użyj tego skryptu w package.json:
```

Dodaj do `package.json`:

```json
"scripts": {
  "dev:https": "node server-https.js"
}
```

### Krok 6: Utwórz `server-https.js`

```javascript
const { createServer } = require("https")
const { parse } = require("url")
const next = require("next")
const fs = require("fs")
const path = require("path")

const dev = process.env.NODE_ENV !== "production"
const hostname = "192.168.0.58" // Twój LAN IP
const port = 3000
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, "certs", "key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "certs", "cert.pem")),
}

app.prepare().then(() => {
  createServer(httpsOptions, async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error("Error occurred handling", req.url, err)
      res.statusCode = 500
      res.end("internal server error")
    }
  })
    .once("error", (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on https://${hostname}:${port}`)
    })
})
```

### Krok 7: Uruchom z HTTPS

```powershell
npm run dev:https
```

### Krok 8: Otwórz na telefonie

`https://192.168.0.58:3000` - **kamera i GPS będą działać!**

**Zalety:**

- ✅ Szybkie (LAN, bez zewnętrznych serwerów)
- ✅ Stały URL
- ✅ Pełna kontrola

**Wady:**

- ⚠️ Wymaga instalacji certyfikatu na każdym urządzeniu testowym
- ⚠️ Więcej setupu (5-10 minut za pierwszym razem)

---

## ✅ Rozwiązanie 3: Tailscale/ZeroTier (Pro Setup)

Jeśli często testujesz na wielu urządzeniach:

1. Zainstaluj Tailscale (VPN mesh network)
2. Wszystkie urządzenia dostaną HTTPS domeny automatycznie
3. `https://laptop.tail123.ts.net:3000` - działa wszędzie

---

## 🎯 Rekomendacja dla Twojej sytuacji

**Dla szybkich testów:** → **ngrok** (2 min setup)
**Dla intensywnego dev:** → **mkcert** (10 min setup, potem wygodnie)

---

## 🐛 Troubleshooting

### "net::ERR_CERT_AUTHORITY_INVALID"

- Upewnij się że zainstalowałeś `mkcert -install`
- Na telefonie: zainstaluj certyfikat CA z pliku `rootCA.pem` (lokalizacja: `mkcert -CAROOT`)

### "Permission denied" dla kamery/GPS mimo HTTPS

- **Android:** Settings → Apps → Chrome → Permissions → Camera/Location
- **iOS:** Settings → Privacy → Camera/Location → Safari

### ngrok "session expired"

- Free tier ma limit 8h sessji
- Zrestartuj: `ngrok http 3000`

---

## 📝 Dodatkowe notatki

- **Chrome DevTools Remote Debugging:** `chrome://inspect` na komputerze → podłącz telefon USB → debuguj jak desktop
- **Safari Remote Debugging (iOS):** Settings → Safari → Advanced → Web Inspector → Podłącz do Maca
