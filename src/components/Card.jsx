const Plan = ({ className }) => {
  return (
    <div className={`w-80 h-40 px-8 py-6 flex justify-between rounded-xl ${className}`}>
      <div>
        <h1 className="text-lg font-semibold">Current Plan</h1>
        <h4 className="mt-5">N2500</h4>
      </div>
      <span>Kids</span>
    </div>
  );
}

export default Plan;