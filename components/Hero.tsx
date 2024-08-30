import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="bg-slate-50 padding-container gap-20 py pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="flex flex-col items-center">
        <div className="p-3">
          <h2 className="text-3xl bold-40 text-center">
            The most powerful EMR for mobile therapists.
          </h2>
        </div>
        <div className="p-4 w-[380px] sm:w-[600px]">
          <p className="text-slate-500 text-xl text-center">
            Helping professionals around the world become more productive and
            organized through an easy-to-use AI powered health record system that will help you
            sort out your everyday.
          </p>
        </div>
        <div className="flex items-center gap-2 py-4">
          {Array(5)
            .fill(1)
            .map((_, index) => (
              <Image
                src="star.svg"
                alt="star"
                key={index}
                width={24}
                height={24}
              />
            ))}
          <p className="bold-16 lg:bold-20 text-blue-90">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>
        <Button
          type="button"
          title="Try it now"
          icon="calendar.svg"
          variant="btn_dark_green"
        />
      </div>
    </section>
  );
};

export default Hero;
