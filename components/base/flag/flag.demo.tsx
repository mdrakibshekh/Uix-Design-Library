"use client";

import { Flag } from "./flag";
import { countries } from "@/utils/countries";

export const FlagGridDemo = () => (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {countries.slice(0, 12).map((country) => (
            <Flag key={country.code} country={country} showPhoneCode />
        ))}
    </div>
);

export const FlagCompactDemo = () => (
    <div className="flex flex-wrap gap-3">
        {countries.slice(0, 8).map((country) => (
            <Flag key={country.code} country={country} size="sm" showName={false} />
        ))}
    </div>
);

export const FlagCountryListDemo = () => (
    <div className="space-y-3">
        {countries.slice(0, 10).map((country) => (
            <Flag key={country.code} country={country} size="lg" showPhoneCode />
        ))}
    </div>
);
