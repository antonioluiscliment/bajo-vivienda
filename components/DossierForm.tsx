"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n";

const T = {
  es: {
    subject: "Solicitud de dossier de inversión — Sector ZP-Pn5",
    fields: {
      name: "Nombre y apellidos",
      company: "Empresa",
      role: "Cargo / puesto de trabajo",
      email: "Email de contacto",
      phone: "Teléfono",
    },
    placeholders: {
      name: "Nombre completo",
      company: "Nombre de la empresa",
      role: "Cargo en la empresa",
      email: "nombre@empresa.com",
      phone: "+34 600 000 000",
    },
    submit: "Enviar solicitud →",
    note: "Al enviar, se abrirá tu programa de correo con un mensaje ya redactado dirigido a info@nortemurcia.com. Solo tienes que confirmar el envío.",
    sentTitle: "Tu programa de correo debería haberse abierto",
    sentBody:
      "Si no se ha abierto automáticamente, escríbenos directamente a info@nortemurcia.com con estos mismos datos.",
  },
  en: {
    subject: "Investment dossier request — Sector ZP-Pn5",
    fields: {
      name: "Full name",
      company: "Company",
      role: "Job title / position",
      email: "Contact email",
      phone: "Phone number",
    },
    placeholders: {
      name: "Full name",
      company: "Company name",
      role: "Your role at the company",
      email: "name@company.com",
      phone: "+1 000 000 0000",
    },
    submit: "Send request →",
    note: "Submitting opens your email application with a pre-filled message addressed to info@nortemurcia.com. You just need to confirm and send it.",
    sentTitle: "Your email application should have opened",
    sentBody:
      "If it didn't open automatically, please write to us directly at info@nortemurcia.com with the same details.",
  },
};

type Values = {
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
};

const EMPTY: Values = { name: "", company: "", role: "", email: "", phone: "" };

export default function DossierForm({ locale }: { locale: Locale }) {
  const t = T[locale];
  const [values, setValues] = useState<Values>(EMPTY);
  const [sent, setSent] = useState(false);

  function update(field: keyof Values) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = t.fields;
    const body = [
      `${f.name}: ${values.name}`,
      `${f.company}: ${values.company}`,
      `${f.role}: ${values.role}`,
      `${f.email}: ${values.email}`,
      `${f.phone}: ${values.phone}`,
    ].join("\n");
    const mailto = `mailto:info@nortemurcia.com?subject=${encodeURIComponent(
      t.subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <div className="dossier-form-wrap">
      <form className="dossier-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="df-name">{t.fields.name}</label>
          <input
            id="df-name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={update("name")}
            placeholder={t.placeholders.name}
            autoComplete="name"
          />
        </div>
        <div className="form-field">
          <label htmlFor="df-company">{t.fields.company}</label>
          <input
            id="df-company"
            name="company"
            type="text"
            required
            value={values.company}
            onChange={update("company")}
            placeholder={t.placeholders.company}
            autoComplete="organization"
          />
        </div>
        <div className="form-field">
          <label htmlFor="df-role">{t.fields.role}</label>
          <input
            id="df-role"
            name="role"
            type="text"
            required
            value={values.role}
            onChange={update("role")}
            placeholder={t.placeholders.role}
            autoComplete="organization-title"
          />
        </div>
        <div className="form-field">
          <label htmlFor="df-email">{t.fields.email}</label>
          <input
            id="df-email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={update("email")}
            placeholder={t.placeholders.email}
            autoComplete="email"
          />
        </div>
        <div className="form-field">
          <label htmlFor="df-phone">{t.fields.phone}</label>
          <input
            id="df-phone"
            name="phone"
            type="tel"
            required
            value={values.phone}
            onChange={update("phone")}
            placeholder={t.placeholders.phone}
            autoComplete="tel"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {t.submit}
        </button>
        <p className="form-note mono">{t.note}</p>
      </form>

      {sent && (
        <div className="form-sent">
          <p className="form-sent-title">{t.sentTitle}</p>
          <p>{t.sentBody}</p>
        </div>
      )}
    </div>
  );
}
