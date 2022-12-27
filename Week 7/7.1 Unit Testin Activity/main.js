function greet(name)
{
    if(name==null)
    return("hello there");
    else{
        if(Array.isArray(name))
        {
            return("hello"+ " "+name);
        }
        else{
            if(name==name.toUpperCase())
                 return("HELLO"+" "+name);
            else
                 return("hello"+ " "+name);
     
          }
    }
}
module.exports=greet;