

const AddCoffee = () => {
    const handleAddCoffee = e =>{
        e.preventDefault()
        const form =e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier= form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;
        const newCoffee = {name,chef,supplier,taste,category,details,photo}
        console.log(newCoffee)
    }
    return (
        <div className="max-w-3xl mx-auto p-6 bg-blue-300 rounded-lg shadow-lg border mt-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Add Coffee</h2>
        <form onSubmit={handleAddCoffee} className="space-y-4">
          {/* Name and Chef Inputs in Two Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                placeholder="Enter food name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="chef">
                Chef
              </label>
              <input
                type="text"
                name="chef"
                id="chef"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                placeholder="Enter chef name"
                required
              />
            </div>
          </div>
  
          {/* Taste and Supplier Inputs in Two Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="taste">
                Taste
              </label>
              <input
                type="text"
                name="taste"
                id="taste"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                placeholder="Enter taste description"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="supplier">
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                id="supplier"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                placeholder="Enter supplier name"
                required
              />
            </div>
          </div>
  
          {/* Category and Details Inputs in Two Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="category">
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                placeholder="Enter category"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="details">
                Details
              </label>
              <textarea
                id="details"
                name="details"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                placeholder="Enter food details"
                rows="1"
                required
              ></textarea>
            </div>
          </div>
  
          {/* Photo Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="photo">
              Photo
            </label>
            <input
              type="file"
              name="photo"
              id="photo"
              className="mt-1 block w-full text-gray-500 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
              accept="image/*"
              required
            />
          </div>
  
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    );
};

export default AddCoffee;