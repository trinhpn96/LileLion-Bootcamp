import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import GlobalSpinner from "../../../components/common/GlobalSpinner";
import { EditIcon, TrashIcon } from "../../../components/common/icons";

const AdminProductsAction = ({ searchString, setSearchString }) => {
  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      <input
        type="text"
        placeholder="Search products here"
        className="input input-bordered w-full max-w-xs"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <Link to="new" className="btn btn-primary">
        New
      </Link>
    </div>
  );
};

const AdminProductsTable = ({ isLoading, data }) => {
  if (isLoading) return <GlobalSpinner />;

  const {
    data: { products },
  } = data;

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- Header --> */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.imageUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {item.category}
                  </span>
                </td>
                <td>$ {item.price}</td>
                <th>
                  <div className="flex items-center gap-2">
                    {/* Edit btn */}
                    <div className="tooltip tooltip-info" data-tip="Edit">
                      <Link
                        to={`${item.id}/edit`}
                        className="btn btn-sm btn-circle btn-info"
                      >
                        <EditIcon />
                      </Link>
                    </div>
                    {/* Delete Button */}
                    <div className="tooltip tooltip-warning" data-tip="Delete">
                      <button className="btn btn-sm btn-circle btn-warning ">
                        <TrashIcon />
                      </button>
                    </div>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AdminProducts = () => {
  const [searchString, setSearchString] = useState("ip");

  const { data, isLoading } = useQuery({
    queryKey: ["products", { q: searchString }],
    queryFn: () =>
      axios.get("/products/search", { params: { q: searchString } }),
  });

  return (
    <div>
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Layout */}
        <div className="">
          <AdminProductsAction
            searchString={searchString}
            setSearchString={setSearchString}
          />

          <AdminProductsTable isLoading={isLoading} data={data} />
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
