import Header from "app/Header";

function TestingPage() {
  return (
    <div>
      <Header />
      <section class="container px-5 py-12 mx-auto ">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 bg-red-600">
            {/* Left column - product image */}
            <img
              src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
              alt="Product Image"
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-1 bg-gray-600">
            {/* Middle column - product description */}
            <h2 className="text-2xl font-bold">Product Name</h2>
            <p className="mt-4">
              Product description goes here.. description goes here. description
              goes here. description goes here. description goes here..
              description goes here. description goes here. description goes
              here. description goes here.
            </p>
          </div>
          <div className="col-span-1 bg-blue-600">
            {/* Right column - product price and add to basket buttons */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-2xl font-bold">$9.99</p>
              </div>
              <div>
                <button className="px-4 py-2 text-white bg-red-500 rounded">
                  Add to Basket
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="trainCont">
          <div className="trainItem">
            {" "}
            asdas das dasd asdas das dasd asdas das dasd asdas das dasd asdas
            das dasd asdas das dasd asdas das dasd asdas das dasd asdas das dasd{" "}
          </div>
          <div className="trainItem">
            asd asdas das dasd asdas das dasd asdas das dasd asdas das dasdasd
            asd asd as
          </div>
          <div className="trainItem">d asd asd asd asd s</div>
        </div>
      </section>
    </div>
  );
}

export default TestingPage;
