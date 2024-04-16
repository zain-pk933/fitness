import React from "react";
export default function ShopList() {
  return (
    <React.Fragment>
      <div className="flex flex-row gap-20 justify-center items-center">
      <div className="w-max bg-slate-200 pr-10 pl-10 pt-8 pb-8 rounded-xl items-center flex flex-column">
      <img src="shoplist.png" className="h-72"></img>
          <h2>Pure pressure</h2>
          <p>Blueberry Natural and artifical flavours</p>
          <p>$150</p>

          <button>Shop Now</button>
        </div>
        <div className="w-max bg-slate-200 pr-10 pl-10 pt-8 pb-8 rounded-xl items-center flex flex-column">
          <img src="shoplist.png" className="h-72"></img>
          <h2>Pure pressure</h2>
          <p>Blueberry Natural and artifical flavours</p>
          <p>$150</p>

          <button>Shop Now</button>
        </div>
      </div>
    </React.Fragment>
  );
}
