# react-modal-component

Un composant Modal simple et personnalisable pour React.

## Installation

```bash
npm install modal-component-openclass-p14
```

## Utilisation

```jsx
import { useState } from "react";
import { Modal } from "react-modal-component";

export const Exemple = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        style={{ width: '400px', height: '300px' }}
      >
        <p>test modal</p>
      </Modal>
      <button onClick={() => setIsOpen(true)}>Open modal</button>
    </>
  );
};
```

## Props

| Nom      | Type       | Description                                      |
|----------|------------|--------------------------------------------------|
| open     | `boolean`  | Affiche ou masque la modal                       |
| onClose  | `function` | Fonction appelée lors de la fermeture            |
| style    | `object`   | Styles CSS appliqués à la fenêtre de la modal    |
| children | `node`     | Contenu à afficher dans la modal                 |

## Personnalisation

Tu peux passer n’importe quel style via la prop `style` pour ajuster la taille ou l’apparence de la modal.


---

**N’oublie pas d’importer le CSS fourni (`index.css`) pour le style de base de la modal :**

```js
import  "modal-component-openclass-p14/dist/index.css";
```