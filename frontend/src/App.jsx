import { useState } from "react";

// Quantra – simple Parallax‑style dashboard skeleton
// TailwindCSS is assumed to be configured in the project.

export default function App() {
  // ——— mock data (ganti dgn API/smart‑contract fetch nanti) ———
  const [linkedAccounts] = useState([
    { id: 1, name: "ARIF PURNOMO AJI (…7470)", type: "Local bank account · IDR" },
    { id: 2, name: "DANA_ARIF PURNOMO AJI (…9906)", type: "E‑wallet · IDR" },
    { id: 3, name: "USDC PINTU Solana (6Zjk8GshZ)", type: "Crypto wallet · Solana" }
  ]);

  const [transactions] = useState([
    { id: 101, date: "June 20, 2025", desc: "Deposit", amount: "+$81.00" },
    { id: 102, date: "June 16, 2025", desc: "Deposit", amount: "+$219.60" }
  ]);

  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-900">
      {/* ——— Sidebar ——— */}
      <aside className="w-64 bg-white border-r shadow-sm hidden md:block">
        <div className="px-6 py-5 font-bold text-xl tracking-wide">Quantra</div>
        <nav className="px-4 space-y-2">
          <NavItem label="Home" active />
          <NavItem label="Recipients" />
          <NavItem label="Requests" />
          <NavItem label="Transactions" />
        </nav>
        <div className="mt-8 px-4">
          <MonthlyStreak streak={1} />
        </div>
      </aside>

      {/* ——— Main content ——— */}
      <main className="flex-1 p-6 space-y-8 max-w-6xl mx-auto">
        <Banner />
        <AccountCard balance={300.6} />
        <LinkedAccounts list={linkedAccounts} />
        <TransactionsTable rows={transactions} />
      </main>
    </div>
  );
}

// ————————————————————————————————————————————————————————————
// UI Components

function NavItem({ label, active }) {
  return (
    <a
      href="#"
      className={`block px-3 py-2 rounded-lg text-sm font-medium transition ${
        active
          ? "bg-emerald-600 text-white"
          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      }`}
    >
      {label}
    </a>
  );
}

function Banner() {
  return (
    <div className="bg-amber-100 border-l-4 border-amber-400 p-4 rounded-lg shadow text-sm leading-relaxed">
      Quantra is joining forces with Phantom and winding down services on
      <strong> September 18, 2025</strong>. We’re excited for the next chapter of
      growth. After that date, you won’t be able to access your account, receive
      payouts, or withdraw funds.
    </div>
  );
}

function AccountCard({ balance }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Quantra USDC Balance</h2>
        <span className="text-3xl font-bold">${balance.toFixed(2)}</span>
      </header>

      <div className="flex flex-wrap gap-2">
        <Button>Withdraw</Button>
        <Button variant="outline">Send</Button>
        <Button variant="secondary">Deposit</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm pt-4 border-t">
        <AccountDetail label="Account number (ACH)" value="••• 9824" />
        <AccountDetail label="Routing number (ACH)" value="101019644" />
        <AccountDetail label="Account type" value="Checking" />
        <AccountDetail label="Account holder" value="ARIF PURNOMO AJI" />
        <AccountDetail label="Bank address" value="1801 Main St., Kansas City, MO 64108" />
      </div>
    </div>
  );
}

function AccountDetail({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

function LinkedAccounts({ list }) {
  return (
    <section>
      <h3 className="font-semibold mb-3">Linked accounts</h3>
      <div className="flex overflow-x-auto gap-4 pr-2 pb-1">
        {list.map((acc) => (
          <div
            key={acc.id}
            className="min-w-[220px] bg-white rounded-xl shadow p-4 space-y-1 flex-shrink-0"
          >
            <p className="text-sm font-medium leading-tight">{acc.name}</p>
            <p className="text-xs text-gray-500">{acc.type}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TransactionsTable({ rows }) {
  return (
    <section>
      <h3 className="font-semibold mb-3">Recent transactions</h3>
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Transaction</th>
              <th className="p-3 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((tx) => (
              <tr key={tx.id} className="hover:bg-gray-50">
                <td className="p-3 whitespace-nowrap">{tx.date}</td>
                <td className="p-3 whitespace-nowrap">{tx.desc}</td>
                <td className="p-3 whitespace-nowrap font-medium">
                  {tx.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function MonthlyStreak({ streak }) {
  return (
    <div className="bg-white border rounded-xl p-4 flex items-center gap-3 shadow-sm">
      <span className="inline-block w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold">
        {streak}
      </span>
      <div>
        <p className="text-sm font-semibold leading-none">{streak} month</p>
        <p className="text-xs text-gray-500 leading-none mt-1">Monthly withdrawal streak</p>
      </div>
    </div>
  );
}

function Button({ children, variant = "primary" }) {
  const base =
    "px-4 py-2 rounded-xl text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    primary: `${base} bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-600`,
    outline: `${base} border border-emerald-600 text-emerald-600 hover:bg-emerald-50 focus:ring-emerald-600`,
    secondary: `${base} bg-emerald-100 text-emerald-700 hover:bg-emerald-200 focus:ring-emerald-600`
  };
  return <button className={styles[variant]}>{children}</button>;
}
