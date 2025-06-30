# Dragons App

## Web

https://github.com/user-attachments/assets/42351f4c-e084-4cae-881d-af5fdab4809b

## Mobile

https://github.com/user-attachments/assets/e5f15f35-5b87-4062-803a-55e3a85fcef5

## Estrutura de pastas (Projeto)

```bash
src/
├── assets/
├── components/
│   ├── Button/
│   ├── Input/
├── constants/
├── entities/
├── routes/
│    └── routes.tsx
├── screens/
│   ├── Home/
│   ├── Auth/
│     └── index.tsx
│     └── styles.ts
│     └── utils.ts
│     ├── hooks /
│           └── useAuth.ts
├── store/
│     └── index.ts
│   ├── config/
│   ├── services/
│   ├── slices/
├── theme/
│   ├── styled.d.ts
├── utils/
├── App.tsx
```

# Estrutura de Pastas e Propósito

- **📂 `assets/`**:
  - Contém ativos estáticos, como imagens, fontes e outros arquivos de mídia usados na aplicação.

- **📂 `components/`**:
  - Abriga componentes de interface de usuário reutilizáveis. Esses componentes podem ser botões, entradas, elementos de texto, etc., que são usados em diferentes telas da aplicação.

- **📂 `constants/`**:
  - Armazena valores constantes que são usados em toda a aplicação. Isso pode incluir valores de configuração, URLs ou qualquer outro dado estático.

- **📂 `entities/`**:
  - Contém os modelos de dados ou entidades usadas na aplicação. Normalmente, são interfaces ou classes TypeScript que definem a estrutura dos dados.

- **📂 `hooks/`**:
  - Esta pasta é para hooks personalizados do React que encapsulam lógica reutilizável. Hooks podem ser usados para gerenciar estado, lidar com efeitos colaterais ou qualquer outra lógica que possa ser compartilhada entre componentes.

- **📂 `routes/`**:
  - Contém a configuração de navegação para a aplicação. Isso inclui a configuração de pilhas de navegação, abas ou qualquer outro padrão de navegação usado.

- **📂 `screens/`**:
  - Armazena as diferentes telas ou páginas da aplicação. Cada tela normalmente corresponde a uma visão ou rota diferente no aplicativo.
  - **📂 `Auth/hooks/`**:
    - Contém hooks específicos para a tela de autenticação. Esses hooks encapsulam lógica relacionada à autenticação, como gerenciamento de estado de login, validação de credenciais, ou integração com serviços de autenticação.
    - **📄 `useAuth.ts`**: Um hook personalizado que pode gerenciar o estado de autenticação do usuário. Ele pode incluir funções para login, logout, e verificar o status de autenticação. Isso permite que a lógica de autenticação seja reutilizável e facilmente gerenciável dentro dos componentes da tela de autenticação.

- **📂 `store/`**:
  - Gerencia o estado global da aplicação usando Redux ou qualquer outra biblioteca de gerenciamento de estado.
  - **📂 `config/`**: Arquivos de configuração para a configuração do store.
  - **📂 `slices/`**: Slices do Redux que definem estado e reducers para diferentes partes da aplicação.
  - **📂 `services/`**: Contém serviços que interagem com APIs ou realizam outras operações assíncronas.

- **📂 `theme/`**:
  - Contém informações de tema para a aplicação, como esquemas de cores, estilos de fontes, etc.
  - **📄 `styled.d.ts`**: Definições de tipos para o tema, garantindo segurança de tipos ao usar styled-components.

- **📂 `utils/`**:
  - Funções utilitárias e auxiliares que são usadas em toda a aplicação. Isso pode incluir funções para formatação, cálculos ou qualquer outra lógica reutilizável.

- **📄 `App.tsx`**:
  - O ponto de entrada principal da aplicação onde o componente raiz é definido. Este arquivo normalmente configura o provedor para o store, navegação e quaisquer outras configurações globais.
