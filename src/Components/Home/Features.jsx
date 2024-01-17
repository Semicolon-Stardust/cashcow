
import GreenTick from "../Utilities/GreenTick";

function Features() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-10">
      <div className="text-center max-w-[30rem]">
        <h1 className="mb-6 text-4xl text-center font-bold">Features</h1>
        <p className="mb-16 text-neutral-500">
          Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque
          iaculis malesuada. Aenean gravida magna orci, non efficitur est porta
          id. Donec magna diam.
        </p>
      </div>

      <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-12">
        <div className="">
          <div className="flex">
            <GreenTick />
            <div className="ml-2 grow">
              <p className="mb-1 font-bold">Support 24/7</p>
              <p className="text-neutral-500">
                Pellentesque mollis, metus nec fringilla aliquam
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex">
            <GreenTick />
            <div className="ml-2 grow">
              <p className="mb-1 font-bold">Tracking</p>
              <p className="text-neutral-500">
                Magna lacus iaculis elit, quis pharetra varius.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex">
            <GreenTick />
            <div className="ml-2 grow">
              <p className="mb-1 font-bold">Reporting</p>
              <p className="text-neutral-500">
                Pellentesque varius ex vel consequat quis.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex">
            <GreenTick />
            <div className="ml-2 grow">
              <p className="mb-1 font-bold">Analytics</p>
              <p className="text-neutral-500">
                Vestibulum gravida iaculis nisl, vel lobortis eros.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex">
            <GreenTick />
            <div className="ml-2 grow">
              <p className="mb-1 font-bold">Huge community</p>
              <p className="text-neutral-500">
                Praesent vulputate lacus bibendum augue .
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex">
            <GreenTick />
            <div className="ml-2 grow">
              <p className="mb-1 font-bold">Easy to use</p>
              <p className="text-neutral-500">
                Sed mauris ex, imperdiet sit amet nisl ac, ultrices.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex">
            <GreenTick />
            <div className="ml-2 grow">
              <p className="mb-1 font-bold">Frequent updates</p>
              <p className="text-neutral-500">
                Aenean lectus ex, placerat id tellus in eros.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex">
            <GreenTick />
            <div className="ml-2 grow">
              <p className="mb-1 font-bold">Responsive</p>
              <p className="text-neutral-500">
                Donec consequat orci quis volutpat imperdiet.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex">
            <GreenTick />
            <div className="ml-2 grow">
              <p className="mb-1 font-bold">Responsive</p>
              <p className="text-neutral-500">
                Donec consequat orci quis volutpat imperdiet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
