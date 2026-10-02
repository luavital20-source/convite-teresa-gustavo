# Convite de Casamento — Fatima Teresa e Gustavo

Convite digital de página única (`index.html`), no mesmo estilo e com a mesma
tipografia do convite da Marjorie & Nathan (Pinyon Script, Cormorant Garamond e Jost).

- **Data:** sexta-feira, 09 de outubro de 2026, às 16h30
- **Cerimônia e recepção:** Engenho Tubinambá — Avenida Lyrio Callou, 300, Barbalha/CE
  ([mapa](https://maps.app.goo.gl/67VxyEaSejRoPqbu9))
- **Pais:** Maria de Lourdes e Carmanoelito · Teresa Katia e Aristocles
- **Traje:** livre
- **Paleta:** pérola + tons de verde pastel
- **Confirmação de presença:** WhatsApp (88) 99648-7822

A foto dos noivos está embutida no `index.html` (base64), então ele não depende
de nenhuma pasta de imagens.

## Lista de presentes

10 presentes, com os mesmos valores do convite da Marjorie & Nathan:
Jogo de Panelas Tramontina (R$ 323,29), Jogo de jantar de cerâmica (R$ 657,09),
Jogo de 6 Taças (R$ 142,39), Edredom Kit Roupa de Cama (R$ 250,00),
Lavadora de Roupas Midea (R$ 2.374,00), Smart TV 4K 50” LG (R$ 2.117,00),
Conjunto de utensílios de cozinha (R$ 301,57), Aparelho de Jantar e Chá (R$ 299,00),
Smart Speaker com Alexa (R$ 459,00) e Kit 4 Peças de Cozinha (R$ 78,90).
Cada um tem dois botões:

- **Pagar com Pix** — abre uma janela com o código Pix *copia e cola* já com o valor.
  Chave aleatória `13bab672-6a74-464c-872e-7e611ef9bd70`, em `PIX_CHAVE`, no último
  `<script>` do `index.html`.
- **Pagar com cartão** — vai para `/api/checkout?i=N`, que cria um link de pagamento
  na InfinitePay da InfiniteTag `$maquinainmune_2` (`HANDLE`, no topo de
  `api/checkout.js`). Só funciona com o site publicado na Vercel.

**Se adicionar, remover ou mudar o preço de um presente, mude igual em `ITEMS` no
`api/checkout.js`** — a posição na lista é o `i` do botão.

## Música

**Counting Stars — OneRepublic** (`musica.mp3`, na raiz).

A música começa quando o convidado toca em **"toque para abrir"** (o gesto que o
iPhone exige para liberar o som), toca em loop, e o botão flutuante no canto pausa
e volta a tocar. O nome da música aparece no rodapé.

O arquivo enviado era AAC/M4A com extensão .mp3; foi convertido para MP3 de
128 kbps para tocar em qualquer celular.

Para trocar, substitua o `musica.mp3` e atualize `musica` e `artista` no `CONFIG`.

## Como editar

Os dados principais ficam no bloco `CONFIG`, no `<script>` no fim do `index.html`.
