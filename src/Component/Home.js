import product from './Data'
import './home.css'
import {  Link} from "react-router-dom";
import { useState } from 'react'
import './cart.css'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
export default function Home(props) {
  var Gval=0; 
  var [temp,setTemp]=useState(0)
  var [status,setStatus]=useState("")
  
  //function when clicked on empty cart 
 const emptyCart=()=>{
  product.forEach((val)=>{
   val.quantity=0;
   val.totalPrice=0;
   setTemp(++temp)
   props.setQuan(0)
   props.setGp(0)
   
  // document.getElementById("gp").innerHTML="";
  })
  }
 
  //function when clicked on delete btn
  const deleteRow=(event)=>{
   var cnt=props.quan;
   var click=event.target.name; 
   product[click].quantity=0; 
   product[click].totalPrice=0;
     --cnt;
     setTemp(++temp)
     props.setQuan(cnt) 
     grandPrice() ;
  }
 
  
  
  //function when clicked on - btn
  const minusPro=(event)=>{
    var count1=props.quan; 
    var cnt=props.quan;
    var click=event.target.name;   
    product[click].quantity--;       
    product[click].totalPrice-=product[click].price;
    props.setProCount(--count1);
    setTemp(--temp)
    if( product[click].quantity<1)
    --cnt;
    props.setQuan(cnt) 
    grandPrice() ; 
  }
  
  
  //function to calculate total cart value
  const grandPrice=()=>{
    var cnt=props.quan;
    product.forEach((val)=>{
      if(cnt> 0){
        Gval+= val.totalPrice;
      }
    })
    props.setGp(Gval) 
    var gpval=document.getElementById("gp").value;
    if(gpval!==""){
      setStatus("Your total cart value is: Rs. ")
    }
  }
  
  
   //function when clicked on + btn
   const PlusPro=(event)=>{
    var count1=props.quan; 
    var click=event.target.name;    
       product[click].quantity++;    
       product[click].totalPrice+=product[click].price;
       props.setProCount(++count1);
       setTemp(++temp)   
       grandPrice() ; 
   }
  // function when clicked on add to cart btn
 const AddToCart=(event)=>{
  var count=props.quan;
      
        var click=event.target.name;       
        if(product[click].quantity===0){
          product[click].quantity++;
          product[click].totalPrice=product[click].price;
          props.setQuan(++count);         
        }
        else{
          product[click].quantity++;
          product[click].totalPrice=product[click].price*product[click].quantity;
         
        }
        // grandPrice();
        product.forEach((val)=>{
          if(count>0){
            Gval+= val.totalPrice;
          }
        })
        props.setGp(Gval)  
        
        document.getElementById("gp").value=grandPrice();
  }


return (
<> 
    <div className='main'>
      { product.map((val,i)=>{  
       if(i<=3){
          return <div className='card' key={i}>
          <div className='textLogo'>
              <h4 name={i}>{val.name}</h4>
              <img className='imageLogo' src={val.imageLogo } alt="logo"/> {val.foodType}
              <p>Rs. {val.price}.00</p>
              <button  name={i} onClick={AddToCart}>Add to cart</button>
          </div>
          <div className='imageDiv'>
            <img className='imageFood' src={val.imageFood} alt="food cap"/>
          </div>
       </div>
        }
       })
     }     
  </div>
     <h2 id='lunch'>Time for Lunch</h2>
      <div className='main1'>
       
     { product.map((val,i)=>{  
     if(i>3){
      return <div className='card' key={i}>
      <div className='textLogo'>
          <h4 name={i}>{val.name}</h4>
          <img className='imageLogo' src={val.imageLogo } alt=" logo"/> {val.foodType}
          <p>Rs. {val.price}.00</p>
          <button name={i} onClick={AddToCart}>Add to cart</button>
      </div>
      <div className='imageDiv'>
        <img className='imageFood' src={val.imageFood} alt="food cap"/>
      </div>
    </div>
   }
 
       })
      }     
      </div>
      <div className='footesec'>
        <footer className='foot'>
          <div>
            <a id="topbtn" href="#0" onClick={()=>{
              let cartItems=document.getElementById("cartItems")
              if(cartItems.style.display==="none" || cartItems.style.display===""){
                cartItems.style.display="block"
              }
              else{
                cartItems.style.display="none"
              }
            }}><KeyboardDoubleArrowUpIcon/></a>
          </div>
          <div>
            <p>your Orders ({props.quan})</p>
          </div>
          <div>
            <p>Subtotal: {props.GP}</p>
          </div>
          <div>
           <button id="contibtn"><Link to="/continue">Continue</Link></button>
          </div>
        </footer>
  <div id="cartItems">
    <>
   <div className='dis'>
   <table id='myTable'>
      <thead>
      <tr>
          <td>Product Id</td>
          <td>Product Name</td>
		      <td>Product Image</td>
          <td>Product price</td>  
          <td>Product Total Quantity</td> 
          <td>Total Price</td>      
          <td>Inc/Dec</td>          
		      <td><a class='empty' id='empty' href="#empty" onClick={emptyCart}>Empty Cart</a></td>
		  </tr>
      </thead>
      <tbody>
        <tr></tr>
        { product.map((val,i)=>{
          if(val.quantity>0){     
          return<tr>
            <td>{val.id}</td>
            <td>{val.name}</td>
            <td><img id='tdimg' src={val.imageFood} alt="food"/></td>
            <td>{val.price}</td>
            <td>{val.quantity}</td>
            <td>{val.totalPrice}</td>
            <td><button id='minus' name={i}onClick={minusPro}>-</button>{val.quantity}<button id='plus'  name={i} onClick={PlusPro}>+</button></td>
            <td><button type='button' id='delPro' className='delete' name={i} onClick={deleteRow}>Delete</button></td>
          </tr>
            }})}
      </tbody>
    </table>
      
        </div>
        <div  id='gpV'><h2 id='gp' >{status}{props.GP}</h2></div>  
        <div className='checkout'> 
        <button id='proceed'>Proceed to checkout</button>
        
        </div> 
   </>
   </div>
  </div>     
 </>
  
  )
}
