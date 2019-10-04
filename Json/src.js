

const data =
[
    {
        "Carname": "Bentley",
        "Type": "Hatchback",
        "DateofLaunch": "2019-11-12",
        "Color": "MattGrey",
        "Image" : `<img src="/home/aanjul/Downloads/gettyimages.jpg">`

    },
    {
        "Carname": "Landrover",
        "Type": "SUV",
        "DateofLaunch": "2019-02-11",
        "Color": "CloudBlue",
        "Image" : `<img src="/home/aanjul/Downloads/Land.jpg">`
    
    },
    {
        "Carname": "Masarati",
        "Type": "Sedan",
        "DateofLaunch": "2018-12-29",
        "Color": "SkyWhite",
        "Image" : `<img src="/home/aanjul/Downloads/masarati.jpg">`

    }

]

    
    // console.log(reverseDate);


    for(let i =0 ; i <= data.length; i ++ ){
        //let path = `<img src=${data[i]}>`;
        console.log(data[i].Image);
        document.write(data[i].Carname);
        document.write("<br>")
        document.write(data[i].Type);
        document.write("<br>")
        document.write(data[i].DateofLaunch);
        const splitDate = data[i].DateofLaunch.split('-');
        const reverseDate = `${splitDate[2]}-${splitDate[1]}-$if ("status"= "200) {
            <font>
                <img src="/home/aanjul/Desktop/Practice/Data Tool/right.jpeg">
                This is green
                </img>
            </font>
        } else  if (condition) {
            
        } {
        
            <font>
                <img src="/home/aanjul/Desktop/Practice/Data Tool/Wrong.jpeg">
        
                This  is Red
                </img> 
            </font>
            
        }(status = 400) {
            
        }
        {splitDate[0]}`;
        document.write("Reverse Date", reverseDate);
        
    
        document.write("<br>")
        document.write(data[i].Color);
        document.write("<br>")
        document.write(data[i].Image);
        document.write("<br>")

    }
    
    
    
    
    
    
    // console.log(data);
    // console.log('Car Name:' + data[0].Carname);
    // document.write(data[0].Carname)
    // document.write("<br>")
    // console.log('Type:' +data[0].Type);
    // document.write(data[0].Type)
    // document.write("<br>")
    // console.log('Date of Lunch:' +data[0].Type);
    // document.write(data[0].DateofLaunch)
    // document.write("<br>")
    // console.log('Color:'+data[0].Color);
    // document.write(data[0].Color)
    // document.write("<br>")
    // console.log(' '+data[0].Image);
    // document.write('<img src="/home/aanjul/Downloads/gettyimages.jpg"');


//const data = require( "./car");

console.log('Car Name:');




console.log(data);
console.log('    	Car Name:' + data[0].carname );
//console.log('       Date:' + );

{/* <script type="text/javascript" src="car.json">
    
</script> */}

// const cardata = require ("./car.json");



