// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

// In the diagram below:

// The red region denotes the house, where s is the start point, and  is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.

// Assume the trees are located on a single point, where the apple tree is at point a, and the orange tree is at point b.

// When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis. *A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right. *

function calculateTotalNumberOffruits(s,t,a,b,apples,oranges){   
    let totalapples = apples.reduce((acc,apple)=>{
        if((a+apple) >= s && (a+apple)<= t){
            acc += 1
            return acc;
        }
        return acc;
    },0)

    let totaloranges = oranges.reduce((acc,orange)=>{
        if((b+orange) >= s && (b+orange)<= t){
            acc += 1
            return acc;
        }
        return acc;
    },0)

    console.log("totalapples totaloranges",totalapples , totaloranges);

}

calculateTotalNumberOffruits(7,10,4,12,[2,3,-4],[3,-2,-4])