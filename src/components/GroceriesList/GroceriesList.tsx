import './GroceriesList.scss';

type GroceriesListProps = {
  list: string[];
};
function GroceriesList({ list }: GroceriesListProps) {
  console.log(list);
  return (
    <div>
      <h2>List</h2>

      <ul className="groceriesList">
        {list.map((item) => (
          <li className="groceriesList_item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default GroceriesList;
