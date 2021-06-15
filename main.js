var images = ["Nihaal.jpg", "Jalpa.jpg", "Himanshu.jpg"];
var names = ["Nihaal Modi", "Jalpa Modi", "Himanshu Modi"];
var i=0;
function update()
{ 
    i++
    var numbers_of_family_members_in_array = 3
    if(i > numbers_of_family_members_in_array)   
    {
        i=0;
    }
    var updatedImage =  images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedimage;
    document.getElementById("family_member_name").innerHTML = updatedname;
}