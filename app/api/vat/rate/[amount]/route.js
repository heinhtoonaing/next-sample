// /app/api/vat/[amount]/route.js

export async function GET({ params }) {
    const amount = parseFloat(params.amount || '0');
    const rate = parseFloat(process.env.VAT_RATE || '0.07');
    const vat = amount * rate;
  
    return new Response(JSON.stringify({ rate, amount, vat }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  