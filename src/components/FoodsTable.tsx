import { Column, Food, SortColumn } from "@types";
import { Favorite, Table } from "@components/common";
import { Link } from "react-router-dom";
import { auth } from "@services";

interface Props {
  foods: Food[];
  sortColumn: SortColumn;
  onSort(sortColumn: SortColumn): void;
  onDelete(path: string): void;
  onFavor(path: string): void;
}

function FoodsTable({ foods, sortColumn, onSort, onDelete, onFavor }: Props) {
  const user = auth.getCurrentUser();
  const columns: Column<Food>[] = [
    {
      path: "name",
      label: "Name",
      content: (food) => <Link to={`/foods/${food.id}`}>{food.name}</Link>,
    },

    { path: "category.name", label: "Category" },
    { path: "price", label: "Price" },
    { path: "numberInStock", label: "Stock" },
    {
      key: "favorite",
      content: (food) => (
        <Favorite
          isFavored={Boolean(food.isFavored)}
          onFavor={() => onFavor(food.id)}
        />
      ),
    },
    {
      key: "delete",
      content: (food) => (
        <>
          {user?.isAdmin && (
            <button
              className="btn btn-danger"
              onClick={() => onDelete(food.id)}
            >
              Delete
            </button>
          )}
        </>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      items={foods}
      onSort={onSort}
      sortColumn={sortColumn}
    />
  );
}

export default FoodsTable;
