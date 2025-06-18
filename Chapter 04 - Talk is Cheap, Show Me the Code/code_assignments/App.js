import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="data:image/png;base64,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"
      alt="Resturantlogo"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            <a className="login-btn">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

// RestaurantList is JSON Data for displaying cards
const restaurantList = [
  {
    info: {
      id: "10894",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.1,
      parentId: "721",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      deliveryTime: 31,
    },
  },
  {
    info: {
      id: "211192",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "lczhp9lptdzbqn09nfns",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4,
      parentId: "4961",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      deliveryTime: 28,
    },
  },
  {
    info: {
      id: "477963",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
      locality: "2nd Stage",
      areaName: "BTM 2nd Stage",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream"],
      avgRating: 4.3,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      deliveryTime: 32,
    },
  },
  {
    info: {
      id: "23683",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/1c999aef-c166-496d-a9f1-8508e83e6d5a_23683.jpg",
      locality: "2nd Stage",
      areaName: "Btm Layout",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.2,
      parentId: "630",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      deliveryTime: 28,
    },
  },
  {
    info: {
      id: "255038",
      name: "Andhra Gunpowder",
      cloudinaryImageId: "e996wruqpmrrrqglp7hs",
      locality: "NS Palya",
      areaName: "Btm Layout",
      costForTwo: "₹350 for two",
      cuisines: ["Andhra", "Biryani", "South Indian"],
      avgRating: 4.3,
      parentId: "10496",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      deliveryTime: 29,
    },
  },
  {
    info: {
      id: "240178",
      name: "Leon's - Burgers & Wings (Leon Grill)",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_240178.jpg",
      locality: "Indiranagar",
      areaName: "JP Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
      parentId: "371281",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      deliveryTime: 39,
    },
  },
  {
    info: {
      id: "290271",
      name: "Thalairaj Biryani",
      cloudinaryImageId: "qf8lwn0ehi8sgvjvsi2l",
      locality: "5th Phase",
      areaName: "JP Nagar",
      costForTwo: "₹300 for two",
      cuisines: [
        "Andhra",
        "Biryani",
        "Hyderabadi",
        "South Indian",
        "Indian",
        "Beverages",
      ],
      avgRating: 4.2,
      parentId: "433875",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      deliveryTime: 35,
    },
  },
  {
    info: {
      id: "17312",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/768a43ed-602d-4e08-b6ab-a2bf8f7d3e33_17312.JPG",
      locality: "4th Phase",
      areaName: "JP Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.1,
      parentId: "547",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      deliveryTime: 27,
    },
  },
  {
    info: {
      id: "49704",
      name: "California Burrito",
      cloudinaryImageId: "p57honbbzdgf7tyt2vay",
      locality: "5th Phase",
      areaName: "JP Nagar",
      costForTwo: "₹250 for two",
      cuisines: [
        "Mexican",
        "American",
        "Salads",
        "Continental",
        "Keto",
        "Healthy Food",
        "Desserts",
      ],
      avgRating: 4.5,
      parentId: "1252",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      deliveryTime: 35,
    },
  },
  {
    info: {
      id: "246645",
      name: "Great Indian Khichdi by EatFit",
      cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹200 for two",
      cuisines: [
        "Home Food",
        "Indian",
        "North Indian",
        "Healthy Food",
        "Snacks",
        "Desserts",
        "Rajasthani",
        "South Indian",
        "Maharashtrian",
        "Sweets",
      ],
      avgRating: 4.2,
      parentId: "319582",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      deliveryTime: 29,
    },
  },
  {
    info: {
      id: "643652",
      name: "WeFit - Protein Bowls, Salads & Sandwiches",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/23/8162aab2-4ccd-431e-8163-ad18749b95f5_643652.JPG",
      locality: "16TH MAIN",
      areaName: "BTM",
      costForTwo: "₹250 for two",
      cuisines: ["Healthy Food", "Salads", "Keto", "Snacks"],
      avgRating: 4.4,
      parentId: "355285",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      deliveryTime: 35,
    },
  },
  {
    info: {
      id: "750212",
      name: "Daily Kitchen - Homely Meals",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/4ec6a5b6-7c8d-4e10-b8a3-317922e419da_750212.JPG",
      locality: "2nd stage",
      areaName: "BTM Layout",
      costForTwo: "₹400 for two",
      cuisines: ["Home Food", "Indian", "North Indian", "Thalis"],
      avgRating: 4.3,
      parentId: "444382",
      avgRatingString: "4.3",
      totalRatingsString: "50+",
      deliveryTime: 30,
    },
  },
  {
    info: {
      id: "390045",
      name: "NH1 Bowls - Highway To North",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/18/8dd09eab-b40e-43ed-b46d-c88f50e450a3_390045.JPG",
      locality: "2nd stage",
      areaName: "Btm Layout",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Punjabi", "Home Food"],
      avgRating: 4.6,
      parentId: "22452",
      avgRatingString: "4.6",
      totalRatingsString: "100+",
      deliveryTime: 30,
    },
  },
  {
    info: {
      id: "374525",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "npp2m7tuszixwcc69pqd",
      locality: "2nd Stage",
      areaName: "Btm Layout",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.6,
      veg: true,
      parentId: "582",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      deliveryTime: 20,
    },
  },
  {
    info: {
      id: "758321",
      name: "NIC Ice Creams",
      cloudinaryImageId: "5bbe809ee274743ba5e09eab110cd813",
      locality: "MICO Employees Grinirman",
      areaName: "BTM layout",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.9,
      veg: true,
      parentId: "6249",
      avgRatingString: "4.9",
      totalRatingsString: "10+",
      deliveryTime: 16,
    },
  },
  {
    info: {
      id: "590119",
      name: "Bakingo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/24/11e95f9e-ba33-472c-85ae-ed6d5c289992_590119.JPG",
      locality: "1st  Stage",
      areaName: "BTM Layout",
      costForTwo: "₹299 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.3,
      parentId: "3818",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      deliveryTime: 27,
    },
  },
  {
    info: {
      id: "399138",
      name: "Aubree",
      cloudinaryImageId: "65faa4b5046cb2215fe285a8b96c9bd7",
      locality: "JP Nagar",
      areaName: "JP Nagar",
      costForTwo: "₹700 for two",
      cuisines: ["Bakery", "Italian", "Snacks", "Desserts"],
      avgRating: 4.5,
      parentId: "3807",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      deliveryTime: 33,
    },
  },
  {
    info: {
      id: "108097",
      name: "Ambur Star Briyani Since 1890",
      cloudinaryImageId: "yktanq9i7yfjrixaghuj",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Chettinad", "Andhra", "Beverages", "Seafood"],
      avgRating: 4.3,
      parentId: "21400",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      deliveryTime: 21,
    },
  },
  {
    info: {
      id: "622017",
      name: "MOJO Pizza - 2X Toppings",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/20/0fbf3dd4-03fc-403e-b861-6d7455bcb69b_622017.JPG",
      locality: "BTM Layout",
      areaName: "Btm 2nd Stage",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
      avgRating: 4.5,
      parentId: "11329",
      avgRatingString: "4.5",
      totalRatingsString: "500+",
      deliveryTime: 35,
    },
  },
  {
    info: {
      id: "558760",
      name: "HRX by EatFit",
      cloudinaryImageId: "d8d85afa5c5e92461d30ff2ca867a587",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹450 for two",
      cuisines: ["Healthy Food", "Salads", "Keto", "Pastas"],
      avgRating: 4.3,
      parentId: "335529",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      deliveryTime: 35,
    },
  },
];

// Restaurant card component: Image, name, cuisine
const RestaurantCard = (props) => {
  const { restaurantData } = props;

  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = restaurantData?.info;

  return (
    <div className="restaurant-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt={name}
        className="restaurant-logo"
      />
      <div className="restaurant-details">
        <h3 className="restaurant-name">
          {name.slice(0, 22)}
          {name.length > 22 ? "..." : ""}
        </h3>
        <p className="cousine">
          {cuisines.join(", ").slice(0, 30)}
          {cuisines.join(", ").length > 30 ? "..." : ""}
        </p>
        <p className="location">{areaName}</p>
        
        <span>
          <h4>
            <i className="fa-solid fa-star"></i>
            {avgRating}
          </h4>
          <h4>{deliveryTime} mins</h4>
          <h4>{costForTwo}</h4>
        </span>

        
      </div>
    </div>
  );
};

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
  return (
    <div className="body">
      <div className="search-box">
        <input type="text" placeholder="Search a restaurant you want..." />
        <button>Search</button>
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a href="https://www.linkedin.com/in/raman-kumar-6584b0107/" target="_blank">
        Raman Kumar
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        FireFlavours <span>India</span>
      </strong>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppLayout />);
