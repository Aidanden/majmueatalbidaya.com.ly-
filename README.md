# مجموعة البداية — majmueatalbidaya.com.ly

موقع شركة مجموعة البداية لاستيراد المواد الصحية والإكسسوارات.

## التشغيل

```bash
cd web
npm install
npm run dev
```

افتح [http://localhost:9000](http://localhost:9000).

## نموذج التواصل (البريد)

```bash
cp web/.env.example web/.env.local
```

- بدون SMTP: النموذج يفتح تطبيق البريد لدى الزائر برسالة جاهزة.
- مع SMTP: تُرسل الرسالة مباشرة إلى `CONTACT_EMAIL`.

## البناء

```bash
cd web
npm run build
npm start
```

## التقنيات

- Next.js 16.3 · React 19 · Tailwind CSS 4 · TypeScript · Nodemailer
