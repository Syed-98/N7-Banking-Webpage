import type { ReactElement } from "react";
import { digitalBankingFeatures } from "@/constants/data";
import type { PhoneFeature, PhoneScreenType } from "@/types";
import { PhoneFrame } from "./PhoneFrame";

const phoneFeatureByType = digitalBankingFeatures.reduce<Record<PhoneScreenType, PhoneFeature>>(
  (acc, feature) => {
    acc[feature.type] = feature;
    return acc;
  },
  {} as Record<PhoneScreenType, PhoneFeature>,
);

export function PhoneHomeScreen(): ReactElement {
  const feature = phoneFeatureByType.home;
  return (
    <PhoneFrame>
      <div className="flex h-full flex-col bg-slate-50 px-3">
        <p className="text-[10px] text-banking-muted-light">Welcome back</p>
        <p className="text-sm font-semibold text-banking-cta">Toni Kross</p>
        <p className="mt-2 text-lg font-bold text-banking-cta">$42,295.00 USD</p>
        <div className="mt-3 flex justify-between gap-1">
          {feature.actions?.map((action) => (
            <div
              key={action}
              className="flex flex-1 flex-col items-center gap-1 rounded-lg bg-white p-2 shadow-sm"
            >
              <div className="h-6 w-6 rounded-full bg-banking-blue/20" />
              <span className="text-[8px] text-banking-muted-light">{action}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[10px] font-semibold text-banking-cta">
          Recent activity
        </p>
        <ul className="mt-2 flex-1 space-y-2">
          {feature.transactions?.map((tx) => (
            <li
              key={tx.label}
              className="flex items-center justify-between rounded-md bg-white px-2 py-1.5"
            >
              <span className="text-[9px] text-banking-muted-light">{tx.label}</span>
              <span className="text-[9px] font-medium text-banking-cta">
                {tx.amount}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </PhoneFrame>
  );
}

export function PhoneChartScreen(): ReactElement {
  const feature = phoneFeatureByType.chart;
  return (
    <PhoneFrame>
      <div className="flex h-full flex-col bg-slate-50 px-3">
        <p className="text-sm font-semibold text-banking-cta">Overview</p>
        <p className="mt-1 text-lg font-bold text-banking-cta">$8,295.00 USD</p>
        <div className="mt-4 flex h-24 items-end justify-between gap-1 rounded-lg bg-white p-2">
          {feature.chartHeights?.map((height) => (
            <div
              key={height}
              className={`w-full max-w-[14px] rounded-t bg-banking-blue/70 ${height}`}
            />
          ))}
        </div>
        <p className="mt-4 text-[10px] font-semibold text-banking-cta">
          Recent activity
        </p>
        <ul className="mt-2 space-y-2">
          {feature.chartTransactions?.map((tx) => (
            <li
              key={tx.label}
              className="flex items-center justify-between rounded-md bg-white px-2 py-1.5"
            >
              <span className="text-[9px] text-banking-muted-light">{tx.label}</span>
              <span className="text-[9px] font-medium text-banking-cta">
                {tx.amount}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </PhoneFrame>
  );
}

export function PhoneProfileScreen(): ReactElement {
  const feature = phoneFeatureByType.profile;
  return (
    <PhoneFrame>
      <div className="flex h-full flex-col items-center bg-slate-50 px-3 pt-4">
        <div className="h-14 w-14 rounded-full bg-banking-blue/20" />
        <p className="mt-2 text-sm font-semibold text-banking-cta">Toni Kross</p>
        <p className="text-[10px] text-banking-muted-light">Premium member</p>
        <ul className="mt-6 w-full space-y-2">
          {feature.menuItems?.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-[10px] text-banking-cta"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </PhoneFrame>
  );
}

export interface PhoneScreenProps {
  type: PhoneScreenType;
}

export function PhoneScreen({ type }: PhoneScreenProps): ReactElement {
  switch (type) {
    case "home":
      return <PhoneHomeScreen />;
    case "chart":
      return <PhoneChartScreen />;
    case "profile":
      return <PhoneProfileScreen />;
  }
}
