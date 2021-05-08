function Form_Validatiom(){  
    var name=document.Users_Form.Name.value;  
    var password=document.Users_Form.Message.value;  
      
    if (name==null || name==""){  
      alert("Name cannot be blank");  
      return false;  
    }else if(Message.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
    }