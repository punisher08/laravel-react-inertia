import { Link } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";
import Form from "./Form";

export default function Table({ products: items }) {
    const [products, setProducts] = useState(items.data);
    let [form, setForm] = useState(false);

    const deletePost = (product) => {
        axios
            .delete(`/post/${product.id}`)
            .then(response => {
                setProducts(products.filter(p => p.id !== product.id));
            })
            .catch(error => {
                console.error(error); 
            });
    };
    const editProduct = (product) => {
        setForm(true);
    }
    if(!form){
        return (
            <>
                <div className="w-full flex justify-between items-center mb-3 mt-1 pl-3">
                    <div>
                        <h3 className="text-lg font-semibold text-slate-800">Product Lists</h3>
                    </div>
                    <div className="ml-3">
                        <div className="w-full max-w-sm min-w-[200px] relative">
                            <div className="relative">
                                <input
                                    className="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                                    placeholder="Search for invoice..."
                                />
                                <button
                                    className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded "
                                    type="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="3"
                                        stroke="currentColor"
                                        className="w-8 h-8 text-slate-600"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                    <table className="w-full text-left table-auto min-w-max">
                        <thead>
                            <tr>
                                <th className="p-4 border-b border-slate-200 bg-slate-50">
                                    <p className="text-sm font-normal leading-none text-slate-500">Name</p>
                                </th>
                                <th className="p-4 border-b border-slate-200 bg-slate-50">
                                    <p className="text-sm font-normal leading-none text-slate-500">SKU</p>
                                </th>
                                <th className="p-4 border-b border-slate-200 bg-slate-50">
                                    <p className="text-sm font-normal leading-none text-slate-500">Stock</p>
                                </th>
                                <th className="p-4 border-b border-slate-200 bg-slate-50">
                                    <p className="text-sm font-normal leading-none text-slate-500">Price</p>
                                </th>
                                <th className="p-4 border-b border-slate-200 bg-slate-50">
                                    <p className="text-sm font-normal leading-none text-slate-500">Date</p>
                                </th>
                                <th className="p-4 border-b border-slate-200 bg-slate-50">
                                    <p className="text-sm font-normal leading-none text-slate-500">Action</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr className="hover:bg-slate-50 border-b border-slate-200" key={product.id}>
                                    <td className="p-4 py-5">
                                        <p className="block font-semibold text-sm text-slate-800">{product.name}</p>
                                    </td>
                                    <td className="p-4 py-5">
                                        <p className="text-sm text-slate-500">{product.sku}</p>
                                    </td>
                                    <td className="p-4 py-5">
                                        <p className="text-sm text-slate-500">{product.stock}</p>
                                    </td>
                                    <td className="p-4 py-5">
                                        <p className="text-sm text-slate-500">{product.price}</p>
                                    </td>
                                    <td className="p-4 py-5">
                                        <p className="text-sm text-slate-500">
                                            {new Intl.DateTimeFormat('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            }).format(new Date(product.created_at))}
                                        </p>
                                    </td>
                                    <td className="p-4 py-5 flex gap-[10px]">
                                        <span className="text-yellow-500 cursor-pointer" onClick={() => editProduct(product)}>Edit</span>
                                        <span
                                            className="text-red-700 cursor-pointer"
                                            onClick={() => deletePost(product)}
                                        >
                                            Delete
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-between items-center px-4 py-3">
                        <div className="text-sm text-slate-500">
                            Showing <b>1-5</b> of 45
                        </div>
                        <div className="flex space-x-1">
                            {items.links.map((link,index)=>(
                                <Link
                                key={index}
                                className={` ${
                                    link.active
                                        ? "px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-slate-800 border border-slate-800 rounded hover:bg-slate-600 hover:border-slate-600 transition duration-200 ease"
                                        : "px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease"
                                } rounded transition duration-200 ease`}
                                href={link.url}
                                dangerouslySetInnerHTML={{ __html: link.label }} 
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </>
    );
    }else{
        return <Form />
    }
}

