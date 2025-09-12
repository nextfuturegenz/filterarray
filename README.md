# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

1. We need to add contacts / import contact form - Done 
2. We need to add recoil in the team inbox - (Most Important)
3. We need to setup Quantum as the api gateway for the CFL-FA-BSP (done)
5. We need to add Quantum Model in the radical 
4. We need to create webhook for whatsapp [Need to add logic]
5. We need to enable onSubscribe in atom to read the changes in the state of message when we recieve webhook from wa
6. We need to upload images and data to server/gcloud/firestore
7. We need to purchase ssl certificate for FA
8. we need to structure the radical monorepo (Restructure Folder created need to add libraries)
    - Mini Apps -> they would represent Small apps which we can in different react apps like FilterArray and others 
    - Apps -> they would be B2B Apps Like Fusion Pos and Wonder KDS etc 
    - integration -> this would be the 3rd party integration like firebase and meta and gcp 
    - libraries -> Our core business functionality like inventory, People and finance etc
    - Packages -> this would be th UI components through out whole application Universe
