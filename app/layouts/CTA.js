export default function CTA({ title, description, image, link }) {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-zinc-800 px-6 pt-16 shadow-2xl rounded-3xl mx-10 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-200">
              {description}
            </p>
            <div className="mt-10 flex justify-center lg:justify-start">
              {link}
            </div>
          </div>
          {image}
        </div>
      </div>
    </div>
  );
}
