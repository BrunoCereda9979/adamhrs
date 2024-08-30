import Image from "next/image";
import Button from "./Button";
import Feature from "./Feature";
import PriceTag from "./PriceTag";

const Pricing = () => {
  return (
    <section className="bg-blue-90 padding-container gap-20 py pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="flex flex-col items-center">
        <div className="p-3">
          <h2 className="text-slate-50 text-3xl bold-40 text-center">
            Our pricing.
          </h2>
        </div>
        <div className="p-4 w-[380px] sm:w-[600px]">
          <p className="text-blue-50 text-xl text-center">
            We offer many different alternatives and price plans that will
            adjust to your budget, be productive without breaking the bank.
          </p>
        </div>
      </div>
      <div className="w-full py-5 flex flex-row justify-around">
        <PriceTag
          price="$259.99"
          title="Basic Plan"
          description="We offer many different alternatives and price plans that will
            adjust to your budget, be productive without breaking the bank."
          months="9"
        />
        <PriceTag
          price="$359.99"
          title="Pro Plan"
          description="We offer many different alternatives and price plans that will
            adjust to your budget, be productive without breaking the bank."
          months="6"
        />
        <PriceTag
          price="$459.99"
          title="Expert Plan"
          description="We offer many different alternatives and price plans that will
            adjust to your budget, be productive without breaking the bank."
          months="3"
        />
      </div>
    </section>
  );
};

export default Pricing;
