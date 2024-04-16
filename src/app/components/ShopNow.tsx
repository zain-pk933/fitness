import React from "react";
import BackgroundImage from "bg-shop.png";
import ShopList from "./ShopList";

export default function ShopNow() {
  return (
    <><React.Fragment>
          <div className="parent-container flex flex-row justify-center items-center">
              <div className="col-12 parent h-screen flex flex-row justify-center items-center">
                  <div className="col-6 flex flex-row justify-center items-center">
                      <img src="shopnow.png" className="h-full"></img>
                  </div>
                  <div className="col-6 flex flex-col justify-center">
                      <h2>high quality Preworkout formula</h2>
                      <p>
                          it’s a high quality Preworkout formula that enhances your
                          workout!! manufacturer from Canada And all the ingredients and
                          especially the caffeine are very very clean and high quality
                      </p>
                      <button>ShopNow</button>
                  </div>
              </div>
          </div>
      </React.Fragment><ShopList /></>
  );
}
