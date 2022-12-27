import { useParams } from "react-router-dom";
import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import GlobalSpinner from "../../components/common/GlobalSpinner";

const ProductDetail = () => {
  const { productId } = useParams(); // return an obj with key "id"
  const { data, isLoading } = useQuery({
    queryKey: ["products", productId],
    queryFn: () => {
      return axios.get(`/products/${productId}`);
    },
  });

  if (isLoading) return <GlobalSpinner />;

  const { data: product } = data;

  console.log(product);
  return (
    <div>
      {/* Container */}
      <div className=" max-w-screen-lg mx-auto px-4 my-3">
        {/* Layout */}
        <div className="grid sm:grid-flow-row md:grid-cols-2 gap-8 justify-between py-4">
          <div className="py-3 ">
            {/* Product img */}
            <img
              src={product.imageUrl}
              alt="{product.title}"
              className="aspect-square rounded-xl lg:rounded-2xl object-cover "
            />
          </div>
          <div className="py-3 ">
            {/* Product Info */}
            <button className=" border border-blue-600  bg-slate-100 text-blue-600 text-sm btn-xs rounded-3xl px-4">
              {product.category}
            </button>
            <div className="flex gap-5 justify-between my-4">
              <h1 className=" text-2xl font-bold">{product.title}</h1>
              <button className="flex justify-start pt-1 text-lg font-bold">
                ${product.price}
              </button>
            </div>
            <div className="mx-auto  ">
              <p className="font-semibold pb-4">Description:</p>
              <p className="pb-4 pr-3">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
