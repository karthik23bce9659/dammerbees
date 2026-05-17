let create_account = document.getElementById("create_card");
let login_account = document.getElementById("login_card");
let signup_button = document.getElementById("signup");


let login_button1 = document.getElementById("login");

let create_account_button = document.getElementById("create_account_b");
let login_button2=document.getElementById("login2");
let home =document.getElementById("home_page");


signup_button.onclick = function() {
    

    let username1 = document.getElementById("username");
    let email1= document.getElementById("email");
    let password1 = document.getElementById("password").value;
    let confrompassword1 = document.getElementById("password2").value;
    let para6 = document.getElementById("para5");
    if(password1===confrompassword1) {
        let username=username1.value;
        let email = email1.value;
        let password=password1;

        if(email==="" || password==="" || username==="" ) {
            para6.textContent="invalid inputs";
            return
        }
        let data = {
          name: username,
          email: email,
          password:password1,
        };

        let options = {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
       
        },
        body: JSON.stringify(data)
        };

        fetch("http://localhost:5000/register", options)
        .then(function(response) {
        return response.status;
        })
        .then(function(status) {
        console.log(status);
        if(status===200) {
            para6.textContent="welcome to Dammerbess";
            home.classList.toggle("d-none");
            create_account.classList.toggle("d-none");
  
        }else {
            para6.textContent="user already exits";
        }
        
       }).catch( err =>{
        para6.textContent=err;
       })

    }else {
        para6.textContent="check the passwords";

    }
}
login_button1.onclick = function() {
    create_account.classList.toggle("d-none");
    login_account.classList.toggle("d-none");

}
create_account_button.onclick= function() {
  login_account.classList.toggle("d-none");
  create_account.classList.toggle("d-none");
        
}
login_button2.onclick=function() {
    let p_1 = document.getElementById("para1");
    let password1=document.getElementById("password1");
    let username = document.getElementById("username1");

     if(password1.value==="" || username.value==="" ) {
          p_1.textContent="invalid inputs";
     }else {

        let data =  {
            name:username.value,
            password:password1.value
        }
        let options = {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
       
        },
        body: JSON.stringify(data)
        };

        fetch("http://localhost:5000/login", options)
        .then(function(response) {
        return response.text();
        })
        .then(function(text) {
        console.log(text);
        if(text=="200") {
            p_1.textContent="welcome to Dammerbess";
            home.classList.toggle("d-none");
            login_account.classList.toggle("d-none");
  
        }else {
            p_1.textContent=text;
        }
        
       }).catch( err =>{
        p_1.textContent=err;
       })


     }
    
    
}

let admin_button = document.getElementById("admin_button");
let admin = document.getElementById("admin");
admin_button.onclick = function() {
    admin.classList.toggle("d-none");
    create_account.classList.toggle("d-none");

    

}
let back_button_in_admin_page = document.getElementById("back_to");
back_button_in_admin_page.onclick = function() {
    admin.classList.toggle("d-none");
    create_account.classList.toggle("d-none");
}

let Admin_input  =document.getElementById("admin_password");
Admin_input.addEventListener("keydown",function(event) {
    let password = Admin_input.value;
    if(password==="karthik" && event.key==="Enter") {
          document.getElementById("change_area").classList.remove("d-none");
    }
});


let add_product_button = document.getElementById("add_product");
add_product_button.onclick = function() {
    let name = document.getElementById("tshirt_name").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("tshirt_desc").value;
    let url = document.getElementById("tshirt_url").value;
    let category = document.getElementById("tshirt_categery").value;
    let stock = document.getElementById("tshirt_stock").value;

    if(name ==="" || description==="" || url==="" || price<0 || category==="" || stock<0) {
        alert("invalid valid inputs please check ");
        return
    }else {
        let data = {
            name:name,
            price:price,
            description:description,
            image:url,
            category:category,
            stock:stock
        }
        let options = {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
       
        },
        body: JSON.stringify(data)
        };

        fetch("http://localhost:5000/product", options)
        .then(function(response) {
        return response.status;
        })
        .then(function(status) {
        console.log(status);
        if(status===200) {
              alert("product succcessfully added");
  
        }else {
            alert("product not added");
        }
        
       }).catch( err =>{
        alert(err);
       })

    }

}

let obj = [
    {
        name:"polo",
        url:"https://m.media-amazon.com/images/I/71gf9L3BpyL._AC_UY1100_.jpg",
        price:350

    },
    {
        name:"denim",
        url:"https://m.media-amazon.com/images/I/71gf9L3BpyL._AC_UY1100_.jpg",
        price:234
    },
    {
      name:"dammer beess",
       url:"https://m.media-amazon.com/images/I/71gf9L3BpyL._AC_UY1100_.jpg",
       price:450

    },
    {
       name:"dammer beess",
       url:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-QVPnTUWfHY5OXyIZ_37q2LJ7B3XEQFEhU6CMF-r-S8evrZ2huViyGvVq2ElQz4SzYRBQaiqRcLaD_WWSZdGqnbAoglsEfOa_tnHXFxZlyPvgy83IfIwlhYnzvfG725yWKel7eIy2Dpw&usqp=CAc",
       price:650  
    },
    {
       name:"dammer beess",
       url:"https://thebanyantee.com/cdn/shop/files/Black-T-shirt.jpg?v=1768129516&width=1920",
       price:650  
    },
    {
       name:"dammer beess",
       url:"https://thebanyantee.com/cdn/shop/files/Black-T-shirt.jpg?v=1768129516&width=1920",
       price:650  
    },
    {
       name:"dammer beess",
       url:"https://thebanyantee.com/cdn/shop/files/Black-T-shirt.jpg?v=1768129516&width=1920",
       price:650  
    },
    {
       name:"dammer beess",
       url:"https://thebanyantee.com/cdn/shop/files/Black-T-shirt.jpg?v=1768129516&width=1920",
       price:650  
    }
]
 
let contanier = document.getElementById("tshirts");

let Add_to_cart = document.getElementById("Add_to_cart_contanier");
function create_Add_To_cart(x) {

    Add_to_cart.classList.remove("d-none");
    let {name,price,description,image,category,stock}= x;


     let back_icon =document.getElementById("back_icon");
     back_icon.onclick = function() {
        Add_to_cart.classList.add("d-none");
        home.classList.remove("d-none");
        cart_contanier.remove();
        para2.remove();
        similar_con.remove();
     }

    let cart_contanier = document.createElement("div");

    let img = document.createElement("img");
    img.src=image;
    img.classList.add("tshirt_img2")
    cart_contanier.appendChild(img);

    let data_con = document.createElement("div");
    

    let data = document.createElement("h1");
    data.textContent=name;
    data_con.appendChild(data);

    
    const sizes = ["S", "M", "L", "XL"];

  // Create select element
  const select = document.createElement("select");
  select.classList.add("select_style")
  select.name = "size";

  // Create options dynamically
  for(let size of sizes) {
    const option = document.createElement("option");
    option.value = size;
    option.textContent = size;
    select.appendChild(option);
  }


    data_con.appendChild(select);

    
  
    cart_contanier.classList.add("img_display");

    let buy_button = document.createElement("button");
    buy_button.textContent="BUY NOW";
    buy_button.classList.add("buy_button1");
    data_con.appendChild(buy_button);

    data_con.classList.add("data_con_css")
    cart_contanier.appendChild(data_con);  
   Add_to_cart.appendChild(cart_contanier);

    let similar_con = document.createElement("div");
    let para2 = document.createElement("p");
    para2.textContent="Similar products";

    function similar(i) {
        let {name,price,description,image,category,stock} = i; 
        let image9 = document.createElement("img");
        image9.src=image;
        image9.classList.add("tshirt_img2")
        similar_con.appendChild(image9);

        let name9 = document.createElement("para");
        name9.textContent=name;
        similar_con.appendChild(name9);
        similar_con.classList.add("similar_products");

    }

    let url = "http://localhost:5000/products/";
    let options = {
      method: "GET"
    };

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        console.log("karthik");
        for(let i of jsonData) {
          similar(i);  

  
          }
      });
    similar_con.appendChild(para2);
    Add_to_cart.appendChild(similar_con);
     

    Add_to_cart.classList.add("product_display");
    

}

function createTshirts(i) {
    let {name,price,description,image,category,stock} = i;
    let sub_con = document.createElement("div");
    sub_con.classList.add("tshirt_contanier");

    let img  =document.createElement("img");
    img.src=image;
    img.classList.add("tshirt_img")
    sub_con.appendChild(img);

    let para9 = document.createElement("p");
    para9.textContent=name;
    sub_con.appendChild(para9)
    
    let amount = document.createElement("p");
    amount.textContent="price: "+price;
    sub_con.appendChild(amount);
    
    let button = document.createElement("button");
    button.textContent="Buy";
    button.classList.add("add_to_cart");
    sub_con.appendChild(button);

    sub_con.onclick = function() {
        create_Add_To_cart(i);
        home.classList.add("d-none");

    }


    contanier.appendChild(sub_con);

}

let displayResults = function(obj1) {
    for(let i of obj1) {
      createTshirts(i);  
  
}
}

let search = document.getElementById("search_bar");

search.addEventListener("keydown",function(event) {
    
    if(event.key="Enter") {
        contanier.textContent="";

        let url = "http://localhost:5000/product/?name=" + search.value;
    let options = {
      method: "GET"
    };

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
    
        displayResults(jsonData);
      });
        
    }

})



    let url = "http://localhost:5000/products/";
    let options = {
      method: "GET"
    };

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        console.log(jsonData);
        for(let i of jsonData) {
          createTshirts(i);  
  
          }
      });







