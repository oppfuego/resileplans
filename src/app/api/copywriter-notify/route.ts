import { sendEmail } from "@/backend/utils/sendEmail";
import { COMPANY_EMAIL } from "@/resources/constants";

export async function POST(req: Request) {
    const body = await req.json();

    const text = `
New copywriter signup

Name: ${[body.firstName, body.lastName].filter(Boolean).join(" ")}
Email: ${body.email}
Phone: ${body.phoneNumber}
Date of birth: ${body.dateOfBirth}
Address: ${body.street}, ${body.city}, ${body.country}, ${body.postCode}

The user signed up using the "Copywriter" option.
`;

    await sendEmail(
        COMPANY_EMAIL ?? "",
        "✍️ New copywriter signup",
        text
    );

    return new Response(
        JSON.stringify({ ok: true }),
        { status: 200 }
    );
}
