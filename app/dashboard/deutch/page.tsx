import { lusitana } from "@/app/ui/fonts";

export default function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-5 text-xl md:text-2xl`}>
        Deutch
      </h1>
      <div className="rounded-lg bg-gray-100 px-12 py-8">
        <div className=" grid grid-cols-4 ">
          <div className=" bg-white p-2 text-center rounded-tl-lg border-r-2 border-gray-200 ">
            Case
          </div>
          <div className="bg-white p-2 text-center border-r-2 border-gray-200">
            Nominativ
          </div>
          <div className="bg-white p-2 text-center border-r-2 border-gray-200">
            Akkusativ
          </div>
          <div className="bg-white p-2 text-center rounded-tr-lg ">Dativ</div>
        </div>
        <hr />
        <div className=" grid  grid-cols-4 ">
          <div className="bg-white p-2 text-center border-r-2 border-gray-200">
            Masculine
          </div>
          <div className="text-center p-2 border-r-2 border-gray-200">
            der / ein / kein / meiner / deiner ...
          </div>
          <div className="text-center p-2 border-r-2 border-gray-200">
            den / einen / keinen / meinen / deinen ...
          </div>
          <div className="text-center p-2">
            dem / einem / keinem / meinem / deinem ...
          </div>
        </div>
        <hr />

        <div className=" grid  grid-cols-4 ">
          <div className="bg-white p-2 text-center border-r-2 border-gray-200">
            Neuter
          </div>
          <div className="text-center p-2 border-r-2 border-gray-200">
            das / ein / kein / meins / deins ...
          </div>
          <div className="text-center p-2 border-r-2 border-gray-200">
            das / ein / kein / meins / deins ...
          </div>
          <div className="text-center p-2">
            dem / einem / keinem / meinem / deinem ...
          </div>
        </div>
        <hr />

        <div className=" grid  grid-cols-4 ">
          <div className="bg-white p-2 text-center border-r-2 border-gray-200">
            Feminine
          </div>
          <div className="text-center p-2 border-r-2 border-gray-200">
            die / eine / keine / meine / deine ...
          </div>
          <div className="text-center p-2 border-r-2 border-gray-200">
            die / eine / keine / meine / deine ...
          </div>
          <div className="text-center p-2">
            der / einer / keiner / meiner / deiner ...
          </div>
        </div>
        <hr />

        <div className=" grid  grid-cols-4 ">
          <div className="bg-white p-2 text-center rounded-bl-lg border-r-2 border-gray-200">
            Plural
          </div>
          <div className="text-center p-2 border-r-2 border-gray-200">
            die / - / keine / meine / deine ...
          </div>
          <div className="text-center p-2 border-r-2 border-gray-200">
            die / - / keine / meine / deine ...
          </div>
          <div className="text-center p-2">
            den(+n) / - / keinen / meinen / deinen ...
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-20 mt-12">
        <div className=" bg-gray-100 rounded-lg p-12 grid grid-cols-2 gap-4">
          <div className=" flex flex-row border-white border-2 rounded-lg">
            <div className="basis-2/5 rounded-lg p-8 bg-white text-center">
              ich
            </div>
            <div className="basis-3/5 rounded-lg p-8  text-center">
              mein + ...
            </div>
          </div>
          <div className=" flex flex-row border-white border-2 rounded-lg">
            <div className="basis-2/5  rounded-lg p-8 bg-white text-center">
              Sie/sie
            </div>
            <div className="basis-3/5  rounded-lg p-8  text-center">
              ihr + ...
            </div>
          </div>
          <div className=" flex flex-row border-white border-2 rounded-lg ">
            <div className="basis-2/5  rounded-lg p-8 bg-white text-center">
              du
            </div>
            <div className="basis-3/5  rounded-lg p-8  text-center">
              dein + ...
            </div>
          </div>
          <div className=" flex flex-row border-white border-2 rounded-lg ">
            <div className="basis-2/5  rounded-lg p-8 bg-white text-center">
              wir
            </div>
            <div className="basis-3/5  rounded-lg p-8  text-center">
              unser + ...
            </div>
          </div>
          <div className=" flex flex-row border-white border-2 rounded-lg ">
            <div className="basis-2/5  rounded-lg p-8 bg-white text-center">
              er/es
            </div>
            <div className="basis-3/5  rounded-lg p-8  text-center">
              sein + ...
            </div>
          </div>
          <div className=" flex flex-row border-white border-2 rounded-lg ">
            <div className="basis-2/5  rounded-lg p-8 bg-white text-center">
              ihr
            </div>
            <div className="basis-3/5  rounded-lg p-8  text-center">
              eur + ...
            </div>
          </div>
        </div>
        <div className=" bg-gray-100 rounded-lg p-12">s</div>
      </div>
    </main>
  );
}
