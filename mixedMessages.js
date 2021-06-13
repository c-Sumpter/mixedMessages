appetizers = ['Fried Pickles','Cheese Fries','Jalepeno Poppers','Cheese Sticks','Nachos'];
mains = ['Fried Chicken','Pork Chops','Pork Ribs','Brisket Tacos','Fajitas'];
sides = ['Fries','Baked Potato','Mashed Potatoes','Green Beans','Okra','Rice Pilaf'];
dessert = ['Chocolate cake','Cheesecake','Ice Cream Sundae','Banana Foster','Peach Cobbler'];

function makeSpecial () {
    var num1 = Math.floor(Math.random()*5);
    var num2 = Math.floor(Math.random()*5);
    var num3 = Math.floor(Math.random()*5);
    var num4 = Math.floor(Math.random()*5);

    let dailySpecial = 'Todays Special starts with ' + appetizers[num1] + ' followed by '+ mains[num2] + ' with a side of '+ sides[num3] + ', and finally for dessert '+ dessert[num4] +' all for just $9.99.';
         
    console.log(dailySpecial);

}

makeSpecial();