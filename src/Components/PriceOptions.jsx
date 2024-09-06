import PriceOption from "./PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 300,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free water refill",
        "Open gym hours",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 500,
      features: [
        "Everything in Basic Plan",
        "Access to group fitness classes",
        "personal training session per month",
        "Discount on supplements",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 800,
      features: [
        "Everything in Standard Plan",
        "Unlimited personal training sessions",
        "Priority booking for group classes",
        "Access to VIP locker rooms",
        "Monthly fitness consultation",
      ],
    },
    {
      id: 4,
      name: "VIP Plan",
      price: 1200,
      features: [
        "Everything in Premium Plan",
        "24/7 Gym Access",
        "Free access to all gym events",
        "Free nutritional supplements",
        "One-on-one wellness coaching",
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-center mt-5 mb-5 underline text-white font-extrabold text-5xl">
        GYM Packages
      </h1>
      <div className="grid md:grid-cols-4 gap-5">
        {priceOptions.map((option) => (
          <PriceOption option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
