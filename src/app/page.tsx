import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function HomePage(): JSX.Element {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="w-full px-6 md:max-w-3xl lg:max-w-4xl">
        <h1 className="mx-auto mb-10 mt-6 flex w-full items-center justify-center pb-10 text-center text-4xl font-semibold">
          Chat<span className="text-blue">GPT</span>
        </h1>
        {/* Grid */}
        <div className="items-start gap-3 text-center md:flex">
          {/* Columns */}
          <div className="mb-8 flex flex-1 flex-col gap-3 md:mb-auto">
            <h2 className="m-auto flex items-center gap-3 text-lg md:flex-col md:gap-2">
              <SunIcon className="h-8 w-8 text-blue" />
              Examples
            </h2>
            <ul className="m-auto flex w-full flex-col gap-3 sm:max-w-md">
              <div className="list-block">
                &quot;Explain quantum computing in simple terms.&quot;
              </div>
              <div className="list-block">
                &quot;How do I make an HTTP request in Javascript?&quot;
              </div>
              <div className="list-block">
                &quot;Write a letter of resignation to my employer.&quot;
              </div>
            </ul>
          </div>
          <div className="mb-8 flex flex-1 flex-col gap-3 md:mb-auto">
            <h2 className="m-auto flex items-center gap-3 text-lg md:flex-col md:gap-2">
              <BoltIcon className="h-8 w-8 text-blue" />
              Capabilities
            </h2>
            <ul className="m-auto flex w-full flex-col gap-3 sm:max-w-md">
              <div className="list-block">
                Remembers what user said earlier in the conversation
              </div>
              <div className="list-block">
                Allows user to provide follow-up corrections
              </div>
              <div className="list-block">
                Trained to decline inappropriate requests
              </div>
            </ul>
          </div>
          <div className="mb-8 flex flex-1 flex-col gap-3 md:mb-auto">
            <h2 className="m-auto flex items-center gap-3 text-lg md:flex-col md:gap-2">
              <ExclamationTriangleIcon className="h-8 w-8 text-blue" />
              Limitations
            </h2>
            <ul className="m-auto flex w-full flex-col gap-3 sm:max-w-md">
              <div className="list-block">
                May occasionally generate incorrect information
              </div>
              <div className="list-block">
                May occasionally produce harmful instructions
              </div>
              <div className="list-block">
                Limited knowledge of events after 2021
              </div>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
