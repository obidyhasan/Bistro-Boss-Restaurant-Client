const MenuCard = () => {
  return (
    <div className="flex gap-4">
      <figure>
        <img
          src=""
          className="w-16 h-16 bg-base-200 rounded-e-full rounded-bl-full"
          alt=""
        />
      </figure>
      <div>
        <h2 className="font-semibold text-lg">Roast Duck Breast --------</h2>
        <p className="text-sm">
          Roasted duck breast (served pink) with gratin potato and a griottine
          cherry sauce
        </p>
      </div>
      <div>
        <p className="font-bold text-orange-500">$14.5</p>
      </div>
    </div>
  );
};

export default MenuCard;
