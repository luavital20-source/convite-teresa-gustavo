// Pagamento com cartão dos presentes, via link de checkout da InfinitePay.
// O botão "Pagar com cartão" do index.html chama /api/checkout?i=N.

// InfiniteTag dos noivos (sem o $). Enquanto estiver vazio, o convidado volta
// para a lista com o aviso de que o cartão será liberado em breve.
const HANDLE = "";

// ordem = índice do botão (?i=N). price em CENTAVOS.
// O preço vem daqui, nunca do navegador.
const ITEMS = [
  { description: "Jogo de Panelas Tramontina", price: 32329 },  // 0
  { description: "Jogo de jantar de cerâmica", price: 65709 },  // 1
  { description: "Jogo de 6 Taças", price: 14239 },             // 2
  { description: "Edredom Kit Roupa de Cama", price: 25000 },   // 3
  { description: "Lavadora de Roupas Midea", price: 237400 },   // 4
  { description: "Smart TV 4K 50” LG", price: 211700 },         // 5
  { description: "Conjunto de utensílios de cozinha", price: 30157 }, // 6
  { description: "Aparelho de Jantar e Chá", price: 29900 },    // 7
  { description: "Smart Speaker com Alexa", price: 45900 },     // 8
  { description: "Kit 4 Peças de Cozinha", price: 7890 },       // 9
];

export default async function handler(req, res) {
  const i = Number.parseInt(req.query.i, 10);
  if (!Number.isInteger(i) || i < 0 || i >= ITEMS.length) {
    return res.redirect(302, "/#gifts");
  }
  if (!HANDLE) {
    return res.redirect(302, "/?cartao=indisponivel");
  }
  const item = ITEMS[i];
  try {
    const r = await fetch("https://api.checkout.infinitepay.io/links", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        handle: HANDLE,
        order_nsu: `tg-${i}-${Date.now()}`,
        items: [{ quantity: 1, price: item.price, description: item.description }],
      }),
    });
    const data = await r.json().catch(() => ({}));
    if (!r.ok || !data.url) {
      console.error("InfinitePay erro:", r.status, JSON.stringify(data));
      return res.redirect(302, "/?cartao=erro");
    }
    return res.redirect(302, data.url);
  } catch (e) {
    console.error("InfinitePay exceção:", e);
    return res.redirect(302, "/?cartao=erro");
  }
}
