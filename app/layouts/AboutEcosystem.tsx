import { aboutEcosystem } from "@/lib/data";

export default function AboutEcosystem() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-3 text-2xl font-semibold leading-8 md:text-3xl">
            El Ecosistema{" "}
            <span className="text-graffiti-500">TUCARROPROPIO</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutEcosystem.map((item, index) => (
            <div
              key={item.label}
              className="relative rounded-xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <span
                aria-hidden="true"
                className="text-3xl font-bold text-graffiti-500/40"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-base font-semibold">{item.label}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
