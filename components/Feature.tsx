import Image from "next/image";
import Link from "next/link";
type FeatureProps = {
  image: string;
  title: string;
  description: string;
};

const Feature = ({ image, title, description }: FeatureProps) => {
  return (
    <div className="w-[280px] p-5 border-1 flex flex-col items-center bg-slate-50 rounded-xl">
      <Image src={image} alt="Feature Logo" width={120} height={120} />
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-slate-500 text-md text-center py-3">{description}</p>
      <div>
        <Link href="/">
          <p className="hover:text-blue-90 my-1 font-medium">Learn More →</p>
        </Link>
      </div>
    </div>
  );
};

export default Feature;
