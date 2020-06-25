function istouching(object1,object2){
object1RightEdge=object1.x+object1.width;
object2Leftedge=object2.x;
if(object1RightEdge>+object2Leftedge){return true }
else{return false};
}