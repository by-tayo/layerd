import Link from "next/link";

const resources = [
  {
    category: "Personal Finance",
    links: [
      {
        name: "AnnualCreditReport.com",
        href: "https://www.annualcreditreport.com",
        description: "The only federally authorized source for your free credit reports.",
      },
      {
        name: "Consumer Financial Protection Bureau",
        href: "https://www.consumerfinance.gov",
        description: "Plain-language guides on credit, debt, mortgages, and your rights as a consumer.",
      },
      {
        name: "NerdWallet",
        href: "https://www.nerdwallet.com",
        description: "Comparisons and explainers on cards, accounts, and everyday money decisions.",
      },
    ],
  },
  {
    category: "Security & Fraud",
    links: [
      {
        name: "Have I Been Pwned",
        href: "https://haveibeenpwned.com",
        description: "Check if your email or accounts have shown up in a known data breach.",
      },
      {
        name: "FTC Identity Theft Resource Center",
        href: "https://www.identitytheft.gov",
        description: "The federal government's step-by-step recovery plan if your identity is compromised.",
      },
      {
        name: "FinCEN (Financial Crimes Enforcement Network)",
        href: "https://www.fincen.gov",
        description: "The agency behind AML regulation in the U.S. — good primary-source reading on how it actually works.",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-6 py-20 sm:px-10 dark:bg-black">
      <div className="flex w-full max-w-2xl flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Resources
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            A short, curated list — tools and sources worth knowing about, not an exhaustive directory.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Layered Glossary
          </h2>
          <div className="flex flex-col gap-5">
            <Link
              href="/glossary"
              className="flex flex-col gap-1 border-b border-zinc-200 pb-5 dark:border-zinc-800"
            >
              <span className="text-lg font-semibold text-black dark:text-zinc-50">
                Glossary
              </span>
              <span className="text-zinc-600 dark:text-zinc-400">
                165 plain-English definitions across banking, credit, investing, retirement, and estate planning — with a &ldquo;Layered Take&rdquo; on select terms drawn from real risk and AML work.
              </span>
            </Link>
          </div>
        </div>
        {resources.map((group) => (
          <div key={group.category} className="flex flex-col gap-5">
            <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              {group.category}
            </h2>
            <div className="flex flex-col gap-5">
              {group.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-1 border-b border-zinc-200 pb-5 dark:border-zinc-800"
                >
                  <span className="text-lg font-semibold text-black dark:text-zinc-50">
                    {link.name}
                  </span>
                  <span className="text-zinc-600 dark:text-zinc-400">
                    {link.description}
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}