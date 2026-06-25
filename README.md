# Site — Fênix Balanceamentos Industriais

Site institucional de página única (one-page) para a **Fênix Balanceamentos Industriais**.
Feito em HTML, CSS e JavaScript puro — **sem necessidade de instalação ou build**.

## Como visualizar

Basta abrir o arquivo `index.html` com **duplo clique** no navegador. Pronto.

Opcional (servidor local, recomendado para testar o mapa e os vídeos):

```bash
# Com Python instalado, na pasta do projeto:
python -m http.server 8000
# Depois acesse no navegador: http://localhost:8000
```

## Estrutura de arquivos

```
Site-FenixBalanceamentos/
├── index.html          → Conteúdo e textos do site
├── css/styles.css      → Cores, fontes e layout
├── js/main.js          → Menu, animações e galeria
├── Logo/
│   └── Matriz.png      → Logo oficial da Fênix (usado na navbar e rodapé)
├── Imagens/
│   └── unnamed.jpg     → Foto real (usada em "Quem Somos" e na galeria)
├── assets/
│   ├── img/            → Espaço para novas imagens/logos de clientes
│   └── video/          → Vídeos institucionais
└── README.md           → Este arquivo
```

## O que JÁ está configurado (dados reais)

- **WhatsApp:** (16) 99229-7288
- **Telefone:** (16) 99229-7288
- **E-mail:** contato@fenixbalanceamentos.com.br
- **Endereço:** Vicinal Marcos Guidi, 101 - Jardim Itapuã, Sertãozinho - SP, 14177-265
- **Mapa do Google** já embutido apontando para a empresa.
- **Logo oficial** (`Logo/Matriz.png`) já aplicado na navbar e no rodapé.
- **Foto real** (`Imagens/unnamed.jpg`) já aplicada em "Quem Somos" e na galeria.

## O que VOCÊ precisa substituir (provisórios)

Abra o `index.html` em qualquer editor de texto (ex: Bloco de Notas, VS Code) e procure
pelos trechos marcados com `(provisório)`, `(Substituir...)` ou `(Editável)`.

### 1. Logo
O logo oficial (`Logo/Matriz.png`) já está em uso. Para trocá-lo por uma versão melhor
(de preferência **PNG com fundo transparente** e em alta resolução), basta substituir o
arquivo `Logo/Matriz.png` mantendo o mesmo nome — o site atualiza automaticamente.

### 2. Fotos da galeria e da seção "Quem Somos"
Coloque as fotos em `assets/img/` e substitua os blocos cinza. Exemplo:
encontre no `index.html` um item assim:

```html
<button class="gallery__item media-placeholder" data-label="Foto 1" aria-label="Ampliar foto 1"></button>
```

e troque por:

```html
<button class="gallery__item" aria-label="Ampliar foto 1">
  <img src="assets/img/foto1.jpg" alt="Descrição da foto" />
</button>
```

### 3. Vídeos
Coloque os arquivos em `assets/video/` e substitua o bloco do vídeo. Há um exemplo
comentado dentro do próprio `index.html` (procure por `<!-- Substituir por:`).
Também é possível usar um vídeo do YouTube (embed).

### 4. Logos de clientes
Substitua os blocos `client-logo` por imagens, da mesma forma que as fotos:

```html
<div class="client-logo"><img src="assets/img/cliente1.png" alt="Nome do cliente" /></div>
```

### 5. Textos
Edite livremente no `index.html`: "Quem Somos", "Missão, Visão e Valores" e as descrições
dos serviços. Os trechos em `<em>(...)</em>` são apenas lembretes — pode apagá-los.

### 6. Redes sociais
No rodapé (`footer`), substitua os links `href="#"` pelos endereços reais do Instagram,
Facebook e LinkedIn (ou remova os que não usar).

## Como personalizar as cores

As cores ficam no topo do arquivo `css/styles.css`, dentro de `:root`. Por exemplo:

```css
--fire-red:    #e63946;
--fire-orange: #ff7b00;
--fire-yellow: #ffb703;
```

Basta alterar os códigos de cor.

## Como publicar o site na internet

Algumas opções gratuitas e simples:

1. **Netlify** (mais fácil): acesse [app.netlify.com/drop](https://app.netlify.com/drop)
   e arraste a pasta inteira do projeto. O site fica no ar em segundos.
2. **Vercel**: [vercel.com](https://vercel.com) — também aceita arrastar a pasta.
3. **Hospedagem própria** (ex: Hostgator, Hostinger): envie todos os arquivos para a
   pasta `public_html` via painel ou FTP.

> Dica: para usar um domínio próprio (ex: `www.fenixbalanceamentos.com.br`), registre o
> domínio e aponte-o para o serviço de hospedagem escolhido.
