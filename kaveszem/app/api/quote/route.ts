import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, city, company, type, consumption, coffeeBrand } = body;

    const data = await resend.emails.send({
      from: 'Kávészem Weboldal <onboarding@resend.dev>', // Teszteléshez a Resend ezt adja, élesben a saját domained kell
      to: ['urszulycs@t-online.hu'], // Ide érkeznek az árajánlatkérések
      subject: `Új árajánlat kérés - ${company}`,
      reply_to: email, // Így egyből az ügyfélnek tudsz válaszolni
      text: `
Új árajánlat kérés érkezett a weboldalról:

Ügyfél adatai:
-------------------
Email cím: ${email}
Cég neve: ${company}
Üzlet helye (város): ${city}

Igények:
-------------------
Üzlet típusa: ${type}
Napi várható fogyás: ${consumption} adag
Preferált kávé típus/márka: ${coffeeBrand || "Nincs megadva"}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
