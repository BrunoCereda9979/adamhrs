import Button from "./Button";

type FeatureProps = {
  title: string;
  price: string;
  description: string;
  months: string,
};

const PriceTag = ({ price, title, description, months }: FeatureProps) => {
  return (
    <div className="w-[280px] p-5 border-1 flex flex-col items-center bg-blue-50 rounded-xl shadow-lg">
      <h2 className="text-3xl font-extrabold py-3">{title}</h2>
      <h2 className="text-lg font-bold">{price}/month</h2>
      <p className="italic">Minimum of {months} months</p>
      <p className="text-slate-500 text-md text-center py-4">{description}</p>
      <div>
        <Button
          type="button"
          title="Get Plan"
          icon="user.svg"
          variant="btn_yellow"
        />
      </div>
    </div>
  );
};

export default PriceTag;
