// /app/api/vat/route.js

export async function GET(request) {
    const url = new URL(request.url);
    const amount = parseFloat(url.searchParams.get('amount') || '0');
    const rate = parseFloat(process.env.VAT_RATE || '0.07');
    const vat = amount * rate;
  
    return new Response(JSON.stringify({ rate, amount, vat }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  export async function POST(request) {
    const { amount } = await request.json();
    const rate = parseFloat(process.env.VAT_RATE || '0.07');
    const vat = amount * rate;
  
    return new Response(JSON.stringify({ rate, amount, vat }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  