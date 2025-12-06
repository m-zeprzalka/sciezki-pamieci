# 📱 QUICK START: Testowanie na telefonie

## Problem rozwiązany! ✅

Camera API i Geolocation API wymagają **HTTPS** na urządzeniach mobilnych.
`192.168.0.58:3000` (HTTP) nie ma dostępu → dlatego brak promptu o lokalizację/kamerę.

---

## Rozwiązanie: ngrok (zainstalowane!)

### Krok 1: Uruchom dev server

```powershell
npm run dev
```

**Zostaw ten terminal otwarty!**

---

### Krok 2: Otwórz NOWY PowerShell i uruchom ngrok

```powershell
ngrok http 3000
```

Zobaczysz coś takiego:

```
Session Status    online
Forwarding        https://abc123.ngrok.io -> http://localhost:3000
```

---

### Krok 3: Skopiuj HTTPS URL

**Skopiuj adres:** `https://abc123.ngrok.io`

---

### Krok 4: Otwórz na telefonie

1. Wpisz `https://abc123.ngrok.io` w przeglądarce telefonu
2. **ZADZIAŁA:**
   - ✅ Prompt o dostęp do lokalizacji
   - ✅ Prompt o dostęp do kamery
   - ✅ Pełnoekranowy widok kamery
   - ✅ GPS tracking

---

## 🎉 Done!

**Uwaga:** URL zmienia się przy każdym restarcie ngrok (free tier).
Dla stałego URL → zaloguj się na ngrok.com (free account daje 1 static domain).

---

## Alternatywa: Zaufany certyfikat (jeśli ngrok wolno działa)

Jeśli ngrok jest wolny (routing przez ich serwery), możesz użyć **mkcert**:

```powershell
# Instalacja mkcert
winget install FiloSottile.mkcert

# Wygeneruj certyfikat dla LAN IP
mkcert -install
mkcert -key-file certs/key.pem -cert-file certs/cert.pem localhost 192.168.0.58

# Zainstaluj certyfikat CA na telefonie (plik: mkcert -CAROOT)
```

Ale to wymaga więcej setupu. **ngrok jest najszybszy do testów!**
