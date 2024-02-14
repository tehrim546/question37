//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size:string ="Large",message:string="I Love Typescript"): void{
    console.log(`Size:${size}, Message: '${message}'`,);
}
//large shirt with default message
make_shirt();//output: size:large,Message:'I Love Typescript';

//Medium shirt with default message
make_shirt("Medium");//output:size:Medium,Message:'I Love Typescript';
//custom shirt with a different message and size 
make_shirt("Small","Hello,Typescript!");// output:size:Small,message:'Hello Typescript!