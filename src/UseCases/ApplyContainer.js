import React from 'react';
import ApplyScreen from '../Entities/Screens/Apply/ApplyScreen';
import data from '../Entities/Screens/Apply/CategoryBrandInfo.json';


const ApplyContainer = () => {
  
  return <ApplyScreen brandData={data} searchBrand={searchBtnPressed} brandSelected={handleApplication} />;
};
const searchBtnPressed = ()=>{
     console.log("user Pressed search iCon")
}
const handleApplication = (brandInfo)=>{
    //navigation apply card
    console.log("BrandInfo",brandInfo)
}
export default ApplyContainer;
