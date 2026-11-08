import type { ReactNode } from "react";
import {
  FROM,
  PRICES,
  PRICE_DISCLAIMER,
  formatAmount,
  priceText,
  unitSuffix,
  type Currency,
  type PriceId,
} from "@/lib/pricing";

/**
 * L'unique façon d'afficher un prix sur le site.
 *
 * - `inline` : « À partir de 800 MAD HT / mois » sur une ligne.
 * - `stack`  : la mention « À partir de » au-dessus d'un grand montant,
 *              puis la devise et l'unité en dessous (cartes de tarifs).
 *
 * La formulation vient de `priceText()` / `FROM` dans src/lib/pricing.ts :
 * elle ne peut pas diverger d'une page à l'autre. Sans hooks, le composant
 * marche côté serveur comme dans un composant client.
 */
export function Price({
  id,
  currency = "MAD HT",
  showUnit = true,
  lower = false,
  amount,
  variant = "inline",
  suffix,
  className,
  fromClassName,
  amountClassName,
  unitClassName,
  renderAmount,
}: {
  id: PriceId;
  currency?: Currency;
  showUnit?: boolean;
  /** « à partir de » en minuscule (milieu de phrase, variante inline). */
  lower?: boolean;
  /** Remplace le montant du registre (tarif annuel remisé). */
  amount?: number;
  variant?: "inline" | "stack";
  /** Complément après l'unité, ex. « · 3 utilisateurs ». */
  suffix?: string;
  className?: string;
  fromClassName?: string;
  amountClassName?: string;
  unitClassName?: string;
  /** Pour animer le montant (bascule mensuel / annuel). */
  renderAmount?: (text: string) => ReactNode;
}) {
  if (variant === "inline") {
    return <span className={className}>{priceText(id, { currency, unit: showUnit, amount, lower })}</span>;
  }

  const text = formatAmount(amount ?? PRICES[id].amount);
  const unit = showUnit ? unitSuffix(PRICES[id].unit).replace(/^, /, " ") : "";
  return (
    <div className={className}>
      <span className={`block text-[0.8rem] uppercase tracking-[0.14em] opacity-70 ${fromClassName ?? ""}`}>{FROM}</span>
      <span className={`mt-2 block tabular-nums ${amountClassName ?? ""}`}>{renderAmount ? renderAmount(text) : text}</span>
      <span className={`mt-2 block ${unitClassName ?? ""}`}>
        {currency}
        {unit}
        {suffix}
      </span>
    </div>
  );
}

/** La mention sous chaque bloc de tarifs. */
export function PriceDisclaimer({ className = "" }: { className?: string }) {
  return <p className={`max-w-3xl text-[0.85rem] leading-relaxed text-muted ${className}`}>{PRICE_DISCLAIMER}</p>;
}
