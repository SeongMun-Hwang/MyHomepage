var sum=0;
var i=0;
var shopping_list=new Array();
for(var i=0;i<8;i++){
    shopping_list[i]="";
}

function change(x){
    if(x[0].style.backgroundColor.match("red")){
        x[0].style.backgroundColor="white"
    }
    else{
        x[0].style.backgroundColor="red";
    }
}

function clicked(x,y){
    if(x[0].src.match("selected")){
        x[0].src= y+".jpg";
    }
    else{
        x[0].src="selected.png";
    }
}

function add(x,y){
    if(y.match("apple")){
        if(shopping_list[0]=="")
        {
            shopping_list[0]=x[0].innerHTML;
            sum+=Number(x[1].innerHTML);
        }
        else{
            shopping_list[0]="";
            sum-=Number(x[1].innerHTML);
        }
    }
    else if(y.match("banana")){
        if(shopping_list[1]=="")
        {
            shopping_list[1]=x[0].innerHTML;
            sum+=Number(x[1].innerHTML);
        }
        else{
            shopping_list[1]="";
            sum-=Number(x[1].innerHTML);
        }
    }
    else if(y.match("grape")){
        if(shopping_list[2]=="")
        {
            shopping_list[2]=x[0].innerHTML;
            sum+=Number(x[1].innerHTML);
        }
        else{
            shopping_list[2]="";
            sum-=Number(x[1].innerHTML);
        }
    }
    else if(y.match("melon")){
        if(shopping_list[3]=="")
        {
            shopping_list[3]=x[0].innerHTML;
            sum+=Number(x[1].innerHTML);
        }
        else{
            shopping_list[3]="";
            sum-=Number(x[1].innerHTML);
        }
    }
    else if(y.match("peach")){
        if(shopping_list[4]=="")
        {
            shopping_list[4]=x[0].innerHTML;
            sum+=Number(x[1].innerHTML);
        }
        else{
            shopping_list[4]="";
            sum-=Number(x[1].innerHTML);
        }
    }
    else if(y.match("pear")){
        if(shopping_list[5]=="")
        {
            shopping_list[5]=x[0].innerHTML;
            sum+=Number(x[1].innerHTML);
        }
        else{
            shopping_list[5]="";
            sum-=Number(x[1].innerHTML);
        }
    }
    else if(y.match("tomato")){
        if(shopping_list[6]=="")
        {
            shopping_list[6]=x[0].innerHTML;
            sum+=Number(x[1].innerHTML);
        }
        else{
            shopping_list[6]="";
            sum-=Number(x[1].innerHTML);
        }
    }
    else if(y.match("mango")){
        if(shopping_list[7]=="")
        {
            shopping_list[7]=x[0].innerHTML;
            sum+=Number(x[1].innerHTML);
        }
        else{
            shopping_list[7]="";
            sum-=Number(x[1].innerHTML);
        }
    }
}
    
function special(n){
    var x=document.querySelectorAll("p."+n);
    var y=document.querySelectorAll("img."+n);
    var z=document.querySelectorAll("td."+n);
    change(z);
    clicked(y,n);
    add(x,n);
}

function output(){
    var list="";
    for(var i=0;i<8;i++){
        if(shopping_list[i]!=""){
            list+=(shopping_list[i]+" ");
        }
    }
    if(list==""){
        alert("Please select item!")
    }
    else{
        alert(list +"is(are) selected Total:"+sum+"$");
    }              
}