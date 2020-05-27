
function sorting(mass, mode)       
{                            
    let n = mass.length;
    if (mode == '1') {
      for (let i = 0; i < n-1; i++)
     { 
       for (let j = 0; j < n-1-i; j++)
        { 
          if (mass[j+1] < mass[j])
           { 
             let t = mass[j+1];
             mass[j+1] = mass[j];
             mass[j] = t; 
           }
        }
     }             
    }
    else {
      for (let i = 0; i < n-1; i++)
     { 
       for (let j = 0; j < n-1-i; j++)
        { 
          if (mass[j] < mass[j + 1])
           { 
             let t = mass[j];
             mass[j] = mass[j + 1];
             mass[j + 1] = t; 
           }
        }
     }             
    }
            
    return mass;    
}
