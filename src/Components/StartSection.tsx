import ButtonLink from "./shared/ButtonLink";
import woman from "../assets/img/woman.png";
const StartSection = () => {
  return (
    <section className="h-[75vh] bg-white relative before:absolute  before:h-full before:w-full overflow-hidden before:bg-[url('/backgrounds/straight-lines.svg')] before:bg-cover before:bg-no-repeat before:opacity-30 grid grid-cols-2">
      <div className=" flex flex-col  justify-center  h-full px-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-brandGraphite">Masz wpływ</span>
          <br />
          <span className="text-brandGraphite">na twoje </span>
          <span className="text-brandBlue">szczęście</span>
        </h2>

        <p className="text-xl md:text-2xl font-bold mb-8">
          <span className="text-brandGraphite">Zrób to </span>
          <span className="text-brandBlue">#MałymiKrokami.</span>
        </p>
        <p className="font-thin text-sm text-center  mb-4 px-56">
          Chcemy pokazać, że zmiany na lepsze nie oznaczają wywracania życia do
          góry nogami. Wystarczy{" "}
          <span className="font-bold">systematyka i 10 minut dziennie!</span>
        </p>
        <ButtonLink
          color="yellow"
          variant="solid"
          href="#"
          className="border-black border px-4 w-full max-w-48 rounded-2xl font-thin text-center z-20"
        >
          Dołącz do inicjatywy!
        </ButtonLink>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <img src={woman} alt="" className="object-cover w-3/4" />
      </div>
    </section>
  );
};

export { StartSection };
