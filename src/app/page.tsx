import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function HomePage(): JSX.Element {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="w-full px-6 md:max-w-3xl lg:max-w-4xl">
        <h1 className="mx-auto mb-10 mt-6 flex w-full items-center justify-center pb-10 text-center text-4xl font-semibold">
          ChatGPT
        </h1>
        {/* Grid */}
        <div className="items-start gap-3 text-center md:flex">
          {/* Columns */}
          <div className="mb-8 flex flex-1 flex-col gap-3 md:mb-auto">
            <h2 className="m-auto flex items-center gap-3 text-lg md:flex-col md:gap-2">
              <SunIcon className="h-8 w-8" />
              Examples
            </h2>
            <ul className="m-auto flex w-full flex-col gap-3 sm:max-w-md">
              <div className="w-full rounded-md bg-slate-500/50 p-3 text-sm">
                &quot;Two American citizens leave the Irish pub sober. Continue
                the joke, please.&quot;
              </div>
              <div className="w-full rounded-md bg-slate-500/50 p-3 text-sm">
                &quot;I have tomatoes, potato, broccoli and eggs. What can I
                prepare with them for a lunch?&quot;
              </div>
              <div className="w-full rounded-md bg-slate-500/50 p-3 text-sm">
                &quot;Write a letter of resignation to my employer. The reason
                for my resignation is that I need a more flexible schedule due
                to family issues.&quot;
              </div>
            </ul>
          </div>
          <div className="mb-8 flex flex-1 flex-col gap-3 md:mb-auto">
            <h2 className="m-auto flex items-center gap-3 text-lg md:flex-col md:gap-2">
              <BoltIcon className="h-8 w-8" />
              Capabilities
            </h2>
            <ul className="m-auto flex w-full flex-col gap-3 sm:max-w-md">
              <div className="w-full rounded-md bg-slate-500/50 p-3 text-sm">
                Remembers what user said earlier in the conversation
              </div>
              <div className="w-full rounded-md bg-slate-500/50 p-3 text-sm">
                Allows user to provide follow-up corrections{" "}
              </div>
              <div className="w-full rounded-md bg-slate-500/50 p-3 text-sm">
                Trained to decline inappropriate requests{" "}
              </div>
            </ul>
          </div>
          <div className="mb-8 flex flex-1 flex-col gap-3 md:mb-auto">
            <h2 className="m-auto flex items-center gap-3 text-lg md:flex-col md:gap-2">
              <ExclamationTriangleIcon className="h-8 w-8" />
              Limitations
            </h2>
            <ul className="m-auto flex w-full flex-col gap-3 sm:max-w-md">
              <div className="w-full rounded-md bg-slate-500/50 p-3 text-sm">
                May occasionally generate incorrect information
              </div>
              <div className="w-full rounded-md bg-slate-500/50 p-3 text-sm">
                May occasionally produce harmful instructions or biased content
              </div>
              <div className="w-full rounded-md bg-slate-500/50 p-3 text-sm">
                Limited knowledge of events after 2021
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
