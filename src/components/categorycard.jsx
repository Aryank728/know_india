import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Link to={category.link} className="relative block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h3 className="text-white text-xl font-semibold">{category.name}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
