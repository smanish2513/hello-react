import ReactDOM from "react-dom/client";


/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search 
 * - RestaurantContainer
 *  - RestaurantCard
 * Footer
 *  - Copyright
 *  - Address
 *  - Contact
 */
const Header = () => {
   return (
      <div className="header">
         <div className="logo-container">
            {/* ✅ Use imported logo */}
            <img className="logo" src="https://cdn.dribbble.com/userupload/16778068/file/original-6e3a9c02cdc6bacd491d6d977f02b2dd.jpg?resize=1504x1128&vertical=center"/>
         </div>
         <div className="nav-items">
            <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>Cart</li>
            </ul>
         </div>
      </div>
   );
};


const RestaurantCard = () => {
   return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}> 
         <img 
         className="res-logo"
         alt="res-logo"
         src="https://www.allrecipes.com/thmb/D-WpkN8BXkQ0qYKnZn3UI3FwbpM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-burger-king-BK-4x3-3-7a3f2e71e86f4673a1f4423a79dfa44d.jpg"></img>
         <h3>Burger King</h3>
         <h4>Burgers, Continental, Drinks </h4>
         <h4>4.4 stars</h4>
         <h4>38 mins</h4>
      </div>
   )
}


const Body = () => {
   return (
      <div className="body">
         <div className="Search">Search</div>
         <div className="res-container">
         <RestaurantCard Burger king/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>

      </div>
      </div>
   )
}

const AppLayout = () => {
   return (
      <div className="app">
         <Header />
         <Body />
      </div>
   );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
