export type GlossaryEntry = {
  term: string;
  definition: string;
  layeredTake?: string;
};

export type GlossaryCategory = {
  category: string;
  terms: GlossaryEntry[];
};

// Source: LAY/ERD glossary — 17-chapter financial literacy base,
// reorganized by subject, with "Layered Take" commentary added where
// Tayo's AML/security background genuinely adds insight (not every term has one).
// VERIFY before shipping: LEAP, PYF, and Fast-Track Debt need confirmation
// against the original source material before they're treated as final.
export const glossary: GlossaryCategory[] = [
  {
    category: "Banking & Financial Services",
    terms: [
      {
        term: "Broker",
        definition: "A person or company that facilitates buying and selling investments for clients.",
      },
      {
        term: "Brokerage Account",
        definition: "An account that lets you buy, sell, and hold investments like stocks, bonds, and ETFs.",
      },
      {
        term: "Checking Account",
        definition: "A bank account built for everyday transactions: bills, direct deposit, debit card use.",
      },
      {
        term: "Credit Union",
        definition: "A member-owned financial institution offering services similar to a bank.",
      },
      {
        term: "Debit Card",
        definition: "A payment card that pulls directly from your bank account.",
      },
      {
        term: "Financial Advisor",
        definition: "A professional who provides guidance on investing, retirement, or broader financial planning.",
      },
      {
        term: "Savings Account",
        definition: "An account built for saving money, generally earning interest.",
      },
      {
        term: "Transfer",
        definition: "Moving money between accounts or institutions.",
        layeredTake: "This is the term most people never think twice about — until they need to explain one to a bank's fraud team. Transfer patterns are one of the first things AML monitoring looks at: not the transfer itself, but the *shape* of a person's transfer behavior over time. Sudden changes in size, frequency, or destination are what get flagged — not the individual transaction.",
      },
    ],
  },
  {
    category: "Income, Taxes & Net Worth",
    terms: [
      {
        term: "1099",
        definition: "IRS forms used to report income outside traditional wages.",
      },
      {
        term: "AGI (Adjusted Gross Income)",
        definition: "Gross income after certain qualifying adjustments.",
      },
      {
        term: "Earned Income",
        definition: "Money from working: wages, salary, tips, certain self-employment income.",
      },
      {
        term: "Equity",
        definition: "The value you own in an asset after subtracting what you owe against it.",
      },
      {
        term: "Assets",
        definition: "Things you own with financial value.",
      },
      {
        term: "Liabilities",
        definition: "Debts and financial obligations you owe.",
      },
      {
        term: "Liquidity",
        definition: "How easily an asset converts to cash without losing value.",
        layeredTake: "Liquidity is the most underrated number in personal finance because it's invisible until you need it. A high net worth tied up in illiquid assets (a house, retirement accounts, stock options) can still leave you unable to cover a $500 emergency. I'd rather someone track their liquid runway than their net worth headline number.",
      },
      {
        term: "MAGI (Modified AGI)",
        definition: "AGI adjusted according to a specific tax provision's rules.",
      },
      {
        term: "Net Pay",
        definition: "What you take home after taxes and deductions.",
      },
      {
        term: "Net Worth",
        definition: "Assets minus liabilities.",
      },
      {
        term: "Passive Income",
        definition: "Income earned with relatively little ongoing active work.",
      },
      {
        term: "Property Tax",
        definition: "A tax generally imposed by local governments on real property.",
      },
      {
        term: "W-2 / W-4",
        definition: "Employer tax forms: W-2 reports wages/withholding; W-4 sets your withholding.",
      },
      {
        term: "Unemployment Benefits",
        definition: "Temporary assistance for eligible workers who lose their job under qualifying conditions.",
      },
      {
        term: "SSDI / SSI",
        definition: "Social Security Disability Insurance and Supplemental Security Income — federal programs for people with qualifying disabilities or limited income/resources, respectively.",
      },
    ],
  },
  {
    category: "Budgeting & Financial Planning",
    terms: [
      {
        term: "50/30/20 Rule",
        definition: "A budgeting guideline splitting after-tax income into needs, wants, and savings/debt.",
      },
      {
        term: "Budget",
        definition: "A plan for earning, spending, saving, and managing money.",
      },
      {
        term: "Diversification",
        definition: "Spreading money across investments to avoid overexposure to one.",
      },
      {
        term: "Financial Goals",
        definition: "Specific money objectives — debt payoff, emergency fund, home, retirement.",
      },
      {
        term: "Inflation",
        definition: "A general rise in prices that erodes purchasing power over time.",
      },
      {
        term: "Asset Allocation",
        definition: "How a portfolio is split across asset classes.",
      },
      {
        term: "Lifeline, LEAP [VERIFY], PYF [VERIFY], SNAP, TANF, WAP, WIC, Section 8",
        definition: "Federal or state assistance programs. Definitions vary by program scope; the two flagged terms need the book's exact context confirmed before publishing.",
      },
    ],
  },
  {
    category: "Taxes",
    terms: [
      {
        term: "Capital Gains Tax",
        definition: "Tax that may apply when an asset sells for more than its basis.",
      },
      {
        term: "Form 1040",
        definition: "The primary U.S. individual income tax return.",
      },
      {
        term: "Income Tax",
        definition: "A tax on certain types of income.",
      },
      {
        term: "Itemized Deductions / Standard Deduction",
        definition: "Two ways to reduce taxable income: listing qualifying expenses individually, or taking a flat predetermined amount.",
      },
      {
        term: "Marginal Tax Rate / Tax Bracket",
        definition: "The rate applied to your next dollar of income within a given income range.",
      },
      {
        term: "Tax Credit",
        definition: "An amount that directly reduces tax owed.",
      },
    ],
  },
  {
    category: "Saving & Interest",
    terms: [
      {
        term: "529 Plan",
        definition: "A tax-advantaged account for qualifying education expenses.",
      },
      {
        term: "APY",
        definition: "Annual Percentage Yield; measures annual earnings including compounding.",
      },
      {
        term: "CD (Certificate of Deposit)",
        definition: "A deposit held for a set term in exchange for interest.",
      },
      {
        term: "Compound Interest",
        definition: "Interest earned on both principal and previously earned interest.",
      },
      {
        term: "Emergency Fund",
        definition: "Money set aside for unexpected expenses or income disruption.",
        layeredTake: "People treat this as a \"someday\" account. I'd treat it more like an incident response fund — the whole point is it's ready *before* the event, not built during it. Three to six months is the textbook number, but the real target is: how long could you go without income before you'd need to take on debt?",
      },
      {
        term: "HYSA",
        definition: "High-Yield Savings Account; typically higher rate than standard savings, rates can change.",
      },
      {
        term: "Interest",
        definition: "Money paid for the use of money, or earned by holding it.",
      },
      {
        term: "Money Market Account",
        definition: "A deposit account that earns interest and may allow limited check-writing.",
      },
      {
        term: "Simple Interest",
        definition: "Interest calculated only on the original principal.",
      },
    ],
  },
  {
    category: "Insurance",
    terms: [
      {
        term: "Annuity",
        definition: "A contract providing a series of payments, often used in retirement planning.",
      },
      {
        term: "Auto Insurance, Collision Coverage, Comprehensive Coverage, Good Driver Discount",
        definition: "Coverage types and discounts related to vehicle insurance.",
      },
      {
        term: "Claim",
        definition: "A formal request to an insurer for coverage or payment.",
      },
      {
        term: "Health Insurance, Homeowners Insurance, Renters Insurance",
        definition: "Coverage for healthcare costs, home-related losses, and a renter's belongings/liability, respectively.",
      },
      {
        term: "Insurance Broker",
        definition: "A professional who helps clients obtain or compare policies.",
      },
      {
        term: "Life Insurance, Term Life, Whole Life, VUL",
        definition: "Different structures of life insurance: temporary coverage (term), lifelong coverage with cash value (whole), and permanent coverage with variable investment options (VUL).",
      },
      {
        term: "Long-Term Care / Long-Term Disability / Short-Term Disability Insurance",
        definition: "Coverage for extended care needs or partial income replacement during a disability.",
      },
      {
        term: "Medicaid",
        definition: "A government healthcare program for eligible low-income individuals and certain other groups.",
      },
      {
        term: "Premium Tax Credit",
        definition: "A credit helping eligible people afford Marketplace health insurance.",
      },
      {
        term: "Umbrella Insurance",
        definition: "Extra liability coverage beyond the limits of underlying policies.",
        layeredTake: "This is the most underused product in personal finance, and it's not close. People will spend hours comparing credit card rewards and never think about the fact that one lawsuit from an accident can wipe out everything else they've built. It's cheap precisely because most people don't buy it.",
      },
    ],
  },
  {
    category: "Credit & Borrowing",
    terms: [
      {
        term: "Credit Agency, Credit Report, Credit Score, FICO Score",
        definition: "The infrastructure that tracks and scores your credit behavior.",
        layeredTake: "A credit score is a fraud model wearing a trench coat. It's built the same way risk models are built anywhere else — weighted signals, historical patterns, probability of default. Understanding that changes how you think about \"gaming\" it: you're not tricking a person, you're feeding a model the inputs it's designed to reward.",
      },
      {
        term: "Credit Builder Loan",
        definition: "A loan structured to help establish credit, often holding funds until the loan is repaid.",
      },
      {
        term: "Credit Check",
        definition: "A review of credit information to assess creditworthiness.",
      },
      {
        term: "Credit Limit",
        definition: "The maximum available on a revolving account.",
      },
      {
        term: "DTI (Debt-to-Income Ratio)",
        definition: "Monthly debt obligations compared to gross monthly income.",
        layeredTake: "Underwriters treat DTI as a hard cutoff, but it's a lagging indicator — it tells you what someone owes, not whether they could absorb a shock. I'd rather look at someone's liquidity buffer and job stability alongside it than trust DTI in isolation.",
      },
      {
        term: "Lien",
        definition: "A legal claim against property securing a debt.",
      },
      {
        term: "Loan / Loan Balance / Repayment Term",
        definition: "The borrowed amount, what's currently owed, and the schedule for repaying it.",
      },
      {
        term: "Negative Amortization",
        definition: "When payments don't cover accruing interest, so the balance grows.",
      },
      {
        term: "Non-Revolving Debt / Revolving Debt",
        definition: "Debt with a fixed structure that decreases over time (installment loans) versus debt that can be borrowed and repaid repeatedly (credit lines).",
      },
      {
        term: "Promissory Note / IOU",
        definition: "A formal versus informal written promise to repay.",
      },
      {
        term: "Refinancing",
        definition: "Replacing a loan with a new one, often for better rates or terms.",
      },
      {
        term: "Utilization",
        definition: "The percentage of available revolving credit currently in use.",
        layeredTake: "This is the fastest lever most people can pull to move their score, and almost nobody knows it. Paying off the balance in full every month can still hurt you if the statement closes while utilization is high — the score doesn't care about your intent, only the snapshot it sees.",
      },
      {
        term: "Secured Loan",
        definition: "A loan backed by collateral.",
      },
    ],
  },
  {
    category: "Credit Cards",
    terms: [
      {
        term: "APR, Annual Fee, Balance Transfer, Cash Advance, Grace Period",
        definition: "Standard terms governing the cost and mechanics of using a credit card.",
      },
      {
        term: "Average Daily Balance",
        definition: "A method some issuers use to calculate interest across a billing cycle.",
      },
      {
        term: "Late Payment Fee / Overlimit Fee / Penalty APR",
        definition: "Costs and rate changes triggered by missed payments or exceeding limits.",
      },
      {
        term: "Minimum Monthly Payment",
        definition: "The smallest payment required to keep an account in good standing.",
        layeredTake: "This number is engineered to feel manageable, not to actually pay down debt efficiently. It's designed around what keeps an account open and profitable for the issuer, not what gets you out of debt fastest. Treat it as a floor, never a target.",
      },
      {
        term: "Rewards",
        definition: "Points, cash back, or miles for qualifying spend.",
      },
      {
        term: "Secured Credit Card",
        definition: "A card backed by a security deposit as collateral.",
      },
      {
        term: "Variable Rate",
        definition: "A rate that can change over time per the account terms.",
      },
      {
        term: "Zero-Balance Card",
        definition: "A card with no current outstanding balance.",
      },
    ],
  },
  {
    category: "Student & Personal Loans",
    terms: [
      {
        term: "Direct Subsidized / Unsubsidized Loan",
        definition: "Federal student loans; subsidized loans have interest covered by the government during certain periods, unsubsidized do not.",
      },
      {
        term: "IBR (Income-Based Repayment)",
        definition: "A federal repayment plan based on income and family size.",
      },
      {
        term: "Origination Fee",
        definition: "A fee for processing a loan.",
      },
      {
        term: "Personal Loan",
        definition: "Borrowed money for personal use, generally unsecured, repaid on a schedule.",
      },
      {
        term: "PLUS Loans",
        definition: "Federal loans for eligible graduate students or parents of dependent undergrads.",
      },
    ],
  },
  {
    category: "Mortgages & Homeownership",
    terms: [
      {
        term: "5/1 ARM, Adjustable-Rate Mortgage, Fixed-Rate Mortgage",
        definition: "Mortgage types differing in whether and how the rate can change.",
      },
      {
        term: "ACV (Actual Cash Value)",
        definition: "An asset's value after accounting for age, condition, and depreciation.",
      },
      {
        term: "Appraisal",
        definition: "An estimate of a property's value.",
      },
      {
        term: "Biweekly Payment",
        definition: "Paying every two weeks instead of monthly.",
      },
      {
        term: "Buy-Down",
        definition: "Paying to reduce a mortgage's rate, temporarily or permanently.",
      },
      {
        term: "Closing Costs / Earnest Money / Down Payment",
        definition: "Costs and deposits involved in finalizing a home purchase.",
      },
      {
        term: "Deed",
        definition: "A legal document transferring property ownership.",
      },
      {
        term: "First-Time Homebuyer Programs / Homeownership Vouchers",
        definition: "Assistance programs for qualifying buyers.",
      },
      {
        term: "HELOC / Home Equity Loan",
        definition: "Borrowing against home equity — a revolving line versus a lump sum.",
      },
      {
        term: "Mortgage",
        definition: "A loan to purchase or refinance real estate, secured by the property.",
      },
      {
        term: "PMI (Private Mortgage Insurance)",
        definition: "Insurance often required on conventional mortgages with a low down payment.",
      },
      {
        term: "Prepayment Penalty",
        definition: "A fee for paying off a loan early.",
      },
      {
        term: "Underwriting",
        definition: "The process a lender uses to evaluate risk before approving a loan.",
        layeredTake: "This word means almost the same thing in mortgages as it does in insurance and in risk/security work generally: someone is deciding how much risk to accept, based on incomplete information, using a model built from past outcomes. Once you see mortgage underwriting as a risk-scoring exercise rather than a bureaucratic hurdle, the process makes a lot more sense.",
      },
    ],
  },
  {
    category: "Debt Management",
    terms: [
      {
        term: "Accrued Interest / Arrears / Delinquency / Default",
        definition: "Terms describing interest building up unpaid, and different stages of missed or overdue payments.",
      },
      {
        term: "Avalanche Method vs. Snowball Method",
        definition: "Two debt payoff strategies: highest interest first (avalanche, minimizes interest) versus smallest balance first (snowball, quicker psychological wins).",
        layeredTake: "The math always favors avalanche. But I've seen enough people quit halfway through a plan to know that the \"best\" method on paper isn't always the one you'll actually finish. Snowball isn't irrational — it's optimizing for a real variable (follow-through) that spreadsheets don't account for.",
      },
      {
        term: "Bankruptcy, Chapter 7, Chapter 13",
        definition: "Legal processes for addressing unpayable debt, differing in whether assets are liquidated or debts repaid via a court plan.",
      },
      {
        term: "Charge-Off",
        definition: "When a creditor writes off a debt as unlikely to collect — it doesn't erase what's owed.",
        layeredTake: "This is one of the most misunderstood terms in consumer finance. People think a charge-off means the debt is gone. It's an accounting entry on the creditor's books, not forgiveness — the debt can still be sold to collections or pursued legally.",
      },
      {
        term: "Collection / Credit Counseling / Debt Consolidation / Debt Settlement / Payment Plan / Validation Notice",
        definition: "Processes and communications involved in resolving debt with creditors or collectors.",
      },
      {
        term: "Deferment / Forbearance",
        definition: "Temporary pauses or reductions in required payments under qualifying conditions.",
      },
      {
        term: "Fast-Track Debt [VERIFY]",
        definition: "Context-dependent; confirm meaning against the source material before publishing.",
      },
    ],
  },
  {
    category: "Investing Fundamentals",
    terms: [
      {
        term: "Asset Classes",
        definition: "Broad investment categories: stocks, bonds, cash, real estate, commodities.",
      },
      {
        term: "Benchmark",
        definition: "A standard for comparing investment performance.",
      },
      {
        term: "Capital Gain/Loss",
        definition: "The gain or loss from selling an asset above or below its cost basis.",
      },
      {
        term: "Commodities",
        definition: "Tradable raw materials like oil, gold, or agricultural products.",
      },
      {
        term: "Compounding",
        definition: "Earning returns on previously earned returns.",
      },
      {
        term: "Cost Basis",
        definition: "The amount used to determine taxable gain or loss on a sale.",
      },
      {
        term: "Index",
        definition: "A measurement tracking a segment of the market.",
      },
      {
        term: "Portfolio Returns",
        definition: "Gains or losses across a collection of investments.",
      },
      {
        term: "Risk-Reward Ratio / Risk Tolerance",
        definition: "The comparison of potential return to potential risk, and how much risk an individual is willing to accept.",
        layeredTake: "Most people confuse risk tolerance with risk *capacity* — how much risk you can emotionally handle versus how much you can actually afford to lose. In AML work, stated intent and actual behavior under stress rarely match. It's the same gap here: what someone says their risk tolerance is on a questionnaire and how they react during a real drawdown are two different numbers.",
      },
      {
        term: "Stock Trading",
        definition: "Buying and selling shares, generally through a brokerage account.",
      },
    ],
  },
  {
    category: "Major Market Indexes & Exchanges",
    terms: [
      {
        term: "Dow, Nasdaq, NYSE, S&P 500",
        definition: "Major U.S. market indexes and exchanges tracking different segments of publicly traded companies.",
      },
    ],
  },
  {
    category: "Stocks & Bonds",
    terms: [
      {
        term: "Blue Chip",
        definition: "An established, reputable company with a long operating history.",
      },
      {
        term: "Bond Discount / Bond Premium",
        definition: "A bond trading below or above its face value.",
      },
      {
        term: "Common Stock / Preferred Stock",
        definition: "Ownership types differing in voting rights and payout priority.",
      },
      {
        term: "Corporate Bond / Municipal Bond / Treasury Bill / Treasury Bond / Treasury Note",
        definition: "Debt securities issued by companies, local governments, or the federal government, differing in issuer and maturity length.",
      },
      {
        term: "Dividend",
        definition: "A payment a company may distribute to shareholders from profits.",
      },
      {
        term: "I Bond / Series E Bonds",
        definition: "U.S. savings bonds; I Bonds are currently issued with a combined fixed/inflation rate, Series E Bonds are historical and no longer issued.",
      },
      {
        term: "Large Cap / Mid Cap / Small Cap / Micro Cap",
        definition: "Company size categories based on market capitalization.",
      },
      {
        term: "Market Capitalization",
        definition: "The total market value of a company's outstanding shares.",
      },
      {
        term: "Shares",
        definition: "Units of ownership in a company or security.",
      },
    ],
  },
  {
    category: "Mutual Funds, ETFs & REITs",
    terms: [
      {
        term: "Asset Management / AUM",
        definition: "Professional management of investments, and the total value of assets managed.",
      },
      {
        term: "Average Annual Return",
        definition: "The average yearly return of an investment over a period.",
      },
      {
        term: "Balanced Fund / Bond Fund / Stock Fund / Global Fund / Niche Fund",
        definition: "Fund types categorized by what they invest in.",
      },
      {
        term: "Depreciation",
        definition: "A decrease in an asset's value over time.",
      },
      {
        term: "Equity REIT / Mortgage REIT / Hybrid REIT / REIT",
        definition: "Real estate investment trusts, differing in whether they own property, hold mortgages, or both.",
      },
      {
        term: "ETF / Mutual Fund / Index Fund / Money Market Fund / Managed Fund",
        definition: "Pooled investment vehicles differing in structure and management style.",
      },
      {
        term: "Expense Ratio",
        definition: "The annual cost of running a fund, as a percentage of assets.",
      },
      {
        term: "Load / No-Load Fund",
        definition: "Whether a fund charges a sales fee.",
      },
      {
        term: "NAV",
        definition: "Net Asset Value; a fund's assets minus liabilities, per share.",
      },
    ],
  },
  {
    category: "Currency, Crypto & Digital Assets",
    terms: [
      {
        term: "Airdrop",
        definition: "A distribution of crypto tokens, often for promotional purposes.",
      },
      {
        term: "Base Currency / Exchange Rate",
        definition: "The reference currency in a pair, and the value of one currency relative to another.",
      },
      {
        term: "BTD (\"Buy the Dip\")",
        definition: "Buying an asset after a price drop.",
      },
      {
        term: "DeFi (Decentralized Finance)",
        definition: "Financial services built on blockchain without traditional intermediaries.",
        layeredTake: "From a security perspective, \"no intermediary\" also means \"no fraud desk to call.\" Traditional finance's fraud controls exist precisely because a trusted third party can freeze, reverse, or investigate a transaction. DeFi's appeal and its risk are the same feature — remove that layer, and you also remove the safety net.",
      },
      {
        term: "Fiat Currency",
        definition: "Government-issued currency not backed by a physical commodity.",
      },
      {
        term: "Fork",
        definition: "A change to a blockchain's rules that can create a new network version.",
      },
      {
        term: "Mining",
        definition: "Validating transactions and adding blocks, often via computational work.",
      },
      {
        term: "NFT",
        definition: "A unique blockchain-based digital asset representing ownership or another recorded interest.",
      },
      {
        term: "Tokenize",
        definition: "Representing an asset or value digitally as a token.",
      },
      {
        term: "Euro",
        definition: "The currency used across much of the euro area.",
      },
    ],
  },
  {
    category: "Retirement",
    terms: [
      {
        term: "401(k) / 403(b)",
        definition: "Employer-sponsored retirement accounts for private-sector and certain nonprofit/public employees, respectively.",
      },
      {
        term: "Backdoor Roth",
        definition: "A traditional IRA contribution followed by a Roth conversion.",
      },
      {
        term: "Defined Benefit Plan / Defined Contribution Plan",
        definition: "Retirement plans that promise a formula-based benefit versus plans where the payout depends on account performance.",
      },
      {
        term: "Early Withdrawal Penalty",
        definition: "A penalty for withdrawing from certain retirement accounts before eligibility.",
      },
      {
        term: "ESOP",
        definition: "Employee Stock Ownership Plan, giving employees an ownership stake.",
      },
      {
        term: "Full Retirement Age",
        definition: "The age for a full Social Security benefit, based on birth year.",
      },
      {
        term: "IRA / Roth IRA",
        definition: "Tax-advantaged retirement accounts; traditional is generally pre-tax, Roth is after-tax with tax-free qualified withdrawals.",
      },
      {
        term: "Matching Contributions",
        definition: "Employer contributions tied to an employee's own contributions.",
      },
      {
        term: "Medicare",
        definition: "Federal health insurance mainly for people 65+ or with qualifying conditions.",
      },
      {
        term: "Pension",
        definition: "Employer-provided retirement income, typically via a defined benefit plan.",
      },
      {
        term: "Post-Tax / Pre-Tax",
        definition: "Whether money is contributed before or after taxes are applied.",
      },
      {
        term: "RMD (Required Minimum Distribution)",
        definition: "The minimum required withdrawal from certain retirement accounts once eligibility requirements are met.",
      },
      {
        term: "Social Security Retirement Benefits",
        definition: "Monthly benefits based on eligibility and earnings history.",
      },
    ],
  },
  {
    category: "Estate Planning",
    terms: [
      {
        term: "Advance Directive",
        definition: "Healthcare instructions for if you can't communicate decisions yourself.",
      },
      {
        term: "Beneficiary",
        definition: "A person or entity designated to receive assets.",
      },
      {
        term: "Codicil",
        definition: "A legal document modifying an existing will.",
      },
      {
        term: "Descendant",
        definition: "A child, grandchild, or later-generation relative.",
      },
      {
        term: "Digital Estate",
        definition: "Digital accounts and assets that need managing after death or incapacity.",
        layeredTake: "This is the estate-planning term most people ignore completely, and it's the one closest to my actual work. Passwords, crypto wallets, cloud storage, social accounts — none of that transfers automatically the way a house or bank account does. If nobody has access or instructions, it's often just gone.",
      },
      {
        term: "Durable Power of Attorney",
        definition: "Authorization to act on someone's behalf, generally surviving incapacity.",
      },
      {
        term: "Estate Executor",
        definition: "The person who carries out a will's instructions.",
      },
      {
        term: "Gift / Gift and Estate Tax / Lifetime Exclusion",
        definition: "Transfers of wealth and the tax rules and exclusions that can apply to them.",
      },
      {
        term: "Guardian",
        definition: "A person appointed to care for someone who can't manage their own affairs.",
      },
      {
        term: "POD Designation",
        definition: "Payable-on-Death designation directing account assets to named beneficiaries.",
      },
      {
        term: "Probate",
        definition: "The legal process of administering an estate.",
      },
      {
        term: "Trust / Will",
        definition: "Legal arrangements for managing or distributing assets, during life (trust) or after death (will).",
      },
    ],
  },
];