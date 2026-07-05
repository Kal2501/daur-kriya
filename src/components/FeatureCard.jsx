import { Link } from "react-router-dom";

function FeatureCard({
  title,
  description,
  button,
  to,
  image,
}) {
  return (
    <div className="rounded-3xl bg-lime-500 dark:bg-lime-700 shadow-2xl overflow-hidden">

      <div className="grid md:grid-cols-2">

        <div className="p-8 flex flex-col justify-center">

          <h2 className="text-3xl font-bold text-white tracking-tighter">
            {title}
          </h2>

          <p className="mt-5 text-lime-100 leading-8">
            {description}
          </p>

          <Link
            to={to}
            className="mt-8 w-fit rounded-xl bg-white text-lime-700 px-6 py-3 hover:scale-105 transition"
          >
            {button}
          </Link>

        </div>

        <div>

          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />

        </div>

      </div>

    </div>
  );
}

export default FeatureCard;
