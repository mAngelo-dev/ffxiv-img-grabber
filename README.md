# 🎴 FFXIV Lodestone Image Grabber

Uma pequena biblioteca Node.js em **TypeScript** para extrair imagens do perfil de personagens do *Final Fantasy XIV* diretamente do Lodestone.
Criada com intuito de ser utilizada em um projeto pessoal que estou desenvolvendo.

Com ela você pode obter:

* **Imagem de rosto (WOL Profile Picture)**
* **Imagem corporal completa (WOL Body Picture)**

Tudo usando `fetch` nativo do Node e `cheerio`.

---

## 🚀 Instalação

```bash
npm install ffxiv-img-grabber
```

Ou com yarn:

```bash
yarn add ffxiv-img-grabber
```

---

## 📦 Uso

### Importação

```ts
import { 
  getProfileWolPictureUrl, 
  getWolBodyPictureUrl 
} from "ffxiv-img-grabber";
```

---

## 🖼️ Obter imagem de rosto

```ts
const url = "https://na.finalfantasyxiv.com/lodestone/character/52976957/";

const pictureUrl = await getProfileWolPictureUrl(url);
console.log(pictureUrl);
// Exemplo de saída:
// https://img.finalfantasyxiv.com/lds/character/.../face.png
```

---

## 🧍‍♂️ Obter imagem corporal

```ts
const url = "https://na.finalfantasyxiv.com/lodestone/character/52976957/";

const bodyPictureUrl = await getWolBodyPictureUrl(url);
console.log(bodyPictureUrl);
// Exemplo de saída:
// https://img.finalfantasyxiv.com/lds/character/.../body.png
```

---

## 📚 API

### `getProfileWolPictureUrl(url: string): Promise<string>`

Retorna a **URL da imagem de rosto** do personagem.

Lança um erro se o seletor não for encontrado.

---

### `getWolBodyPictureUrl(url: string): Promise<string>`

Retorna a **URL da imagem do corpo inteiro** do personagem.

Lança um erro se o seletor não for encontrado.

---

## 🛠️ Tecnologias usadas

* **Node.js Fetch API** (nativo)
* **Cheerio** para parsear HTML
* **TypeScript** para tipagem segura

---

## ⚠️ Avisos

* O Lodestone não possui API oficial pública para imagens; este projeto faz **scraping apenas de dados visuais**, sem sobrecarregar o serviço.
* Evite fazer muitas requisições em loop.
* Caso o Lodestone altere o layout, os seletores podem precisar ser atualizados.

---

## 📄 Licença

MIT — fique à vontade para usar, modificar e contribuir.

---
