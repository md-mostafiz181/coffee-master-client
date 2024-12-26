

const CoffeeCard = ({coffee}) => {
    const {name,chef,supplier}=coffee;
    return (
        <div className="card bg-base-100 w-full p-2 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{chef}</p>
    <div className="card-actions justify-end">
        <p>{supplier}</p>
      
    </div>
  </div>
</div>
    );
};

export default CoffeeCard;