import { FaCheckCircle } from "react-icons/fa";

interface ListCardProps {
  splashDetails: string[];
}
const ListCard = ({ splashDetails }: ListCardProps) => {
  return (
    <div className=" flex flex-col max-w-lg border border-[#dadada] bg-white p-6 rounded-xl shadow-md gap-6">
      {splashDetails.map((item, index) => (
        <ul key={index}>
          <li className="flex items-center gap-2">
            <span className="text-[#f4a261]">
              <FaCheckCircle />
            </span>
            <p className="text-lg">{item}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ListCard;
