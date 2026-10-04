# YIO (Your Integrated Operations)
### Secure Offline Encrypted Mesh Network for Defense

[![FIPS 140-3 Cryptography](https://img.shields.io/badge/Security-AES--256--GCM%20%7C%20RSA--4096-00f5ff?style=flat-square)](#)
[![Mesh Network](https://img.shields.io/badge/P2P-BLE%20%2B%20Wi--Fi%20Direct-00ff00?style=flat-square)](#)
[![Offline First](https://img.shields.io/badge/PWA-100%25%20Offline%20Ready-ffaa00?style=flat-square)](#)
[![Zero Knowledge](https://img.shields.io/badge/Zeroization-Hardware%20Memory%20Purge-ff0000?style=flat-square)](#)

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Launch tactical development server
npm run dev

# 3. Production build
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser.
> **Multi-Tab Live Mesh Demo**: Open two or three tabs side-by-side! The application leverages the `BroadcastChannel` protocol to simulate live peer-to-peer RF mesh packets. Dispatches from Tab 1 immediately show up in Tab 2 with live hop metrics, AES-256-GCM authentication verification, and delivery ACKs!

---

## 🔐 Tactical Authentication Credentials

| Role / Mode | PIN | Behavior |
|---|---|---|
| **Master Tactical Terminal** | `1337` | Unlocks full classified command HUD, E2EE comms, and tactical SitMap |
| **Duress / Hostage Mode** | `9999` | Unlocks a benign decoy logistics interface while stealthily flooding the mesh with a silent SOS alert |
| **Hardware Biometric** | Hold Fingerprint | Simulates biometric secure enclave scan with laser HUD feedback |
| **Auto-Zeroize Defense** | 3 Failed Attempts | Automatically triggers cryptographic key destruction |

---

## 🛡️ Core Capabilities

### 1. Military-Grade Encrypted Comms
- **End-to-End Encryption**: AES-256-GCM cipher with unique 96-bit initialization vectors (IVs) and 128-bit authentication tags.
- **Asymmetric Envelopes**: RSA-OAEP 2048/4096-bit key pairs with SHA-256 fingerprints.
- **Ephemeral Self-Destruct**: 10s, 30s, 60s, or Burn-on-read with visual zeroization animation.
- **Cryptographic Inspector**: Real-time inspection of raw ciphertext base64, IV nonce, and digital signature status.

### 2. Multi-Hop P2P Mesh Networking
- **Store-and-Forward Delay-Tolerant Networking (DTN)**: Queues packets during radio blackout and automatically relays them when alternative hops become available.
- **Radio Interfaces**: Web Bluetooth (BLE) scanning, Wi-Fi Direct simulation, and multi-tab mesh channels.
- **Network Health Monitoring**: Real-time Signal-to-Noise Ratio (SNR: dB), RSSI (dBm), Hop matrix, and battery consumption tracking.
- **Dynamic 2D Canvas Topology**: Live visualizer rendering nodes, links, and animated data packet pulses in real-time.

### 3. Tactical Situational Awareness Map (SitMap)
- **100% Offline Leaflet Engine**: Dark cartography with MGRS grid coordinates and elevation.
- **Blue Force Tracking**: Real-time position tracking for squad nodes (`STRIKE-LEAD`, `OVERWATCH-6`, `POINTMAN-ALPHA`, `MEDIC-ECHO`, `RECON-GHOST`).
- **Hazard & Threat Geofencing**: IED danger circles, sniper line-of-sight cones, CBRN hazard plumes, and evac extraction LZs.
- **HUD Overlays**: Range rings (150m, 350m, 600m), radar sweep animation, and click-to-drop threat markers.

### 4. Emergency & Anti-Tamper Systems
- **Cryptographic Zeroization**: Overwrites private keys in RAM with random noise, purges local cache, and wipes databases in 5 seconds.
- **Silent Duress Beacon**: Stealth hostage alarm with real-time GPS telemetry.
- **High-Priority SOS**: Priority 1 flash message flooding entire mesh up to 7 hops.
- **RF Silence Mode**: One-touch stealth silence for radio silence missions.

---

## 📂 Documentation Deliverables
- [`docs/ARCHITECTURE.md`](file:///c:/Users/Lenovo/OneDrive/Flappy%20Bird/hackethon/ps08-mesh/docs/ARCHITECTURE.md): System architecture & cryptographic flows
- [`docs/MESH_PROTOCOL.md`](file:///c:/Users/Lenovo/OneDrive/Flappy%20Bird/hackethon/ps08-mesh/docs/MESH_PROTOCOL.md): Packet format & BLE GATT specifications
- [`docs/SECURITY_AUDIT.md`](file:///c:/Users/Lenovo/OneDrive/Flappy%20Bird/hackethon/ps08-mesh/docs/SECURITY_AUDIT.md): Security audit report & threat model
- [`docs/DEPLOYMENT_GUIDE.md`](file:///c:/Users/Lenovo/OneDrive/Flappy%20Bird/hackethon/ps08-mesh/docs/DEPLOYMENT_GUIDE.md): Field deployment standard operating procedure (SOP)
