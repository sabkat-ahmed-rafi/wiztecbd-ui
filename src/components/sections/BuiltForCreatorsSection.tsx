export function BuiltForCreatorsSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e] px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl silka">
            Built for Creators. Powered for Profit.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white/90 sm:text-lg">
            Create and sell courses, consulting services, and communities - with
            Zero marketing cost and a built-in sales network.
          </p>
          <div className="flex flex-col items-center gap-3">
            <button className="rounded-lg bg-purple-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-purple-700">
              Learn for Free
            </button>
            <p className="text-xs text-white/70">No credit card required</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "COMMUNITIES IN NETWORK", value: "21,500+" },
            { label: "EXPECTED EARNINGS / MONTH", value: "86" },
            { label: "EST. MEDIAN EARNINGS", value: "US$774" },
            { label: "MIN. AVG. A PRODUCT", value: "US$300" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white/5 p-5 backdrop-blur-sm border border-white/10"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                {stat.label}
              </p>
              <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-white/80">
          Unlike Kajabi, Teachable, or Skool, Growhube helps you find and convert
          clients inside the platform so you can sell from day one.
        </p>
      </div>
    </section>
  );
}

