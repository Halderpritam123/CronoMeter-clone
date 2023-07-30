import React, { useEffect, useState } from "react";
import { Box, Heading, Text,Flex } from "@chakra-ui/react";
import GoldPlan from "./GoldPlan";
import Enterprise from "./Enterprise";
import FAQ from "./FAQ";
import GiftSubscription from "./GiftSubscription";
import axios from "axios";
import ProfPlan from "./ProPlan";
// import { SidebarContent } from "../../components/SidebarContent";
// import { MobileNav } from "../../components/Siderbar";

const Plans = () => {
  const[activePlan,setActivePlan]=useState("")
  let token=localStorage.getItem("token")
  useEffect(()=>{
    axios.get('https://erin-crow-gear.cyclic.app/userplan',{
      headers:{
        Authorization: `Bearer ${token}`,
       }
    }).then(res=>setActivePlan(res.data))
  },[])
  let data=activePlan[0]
  console.log(data)
  return (
    <>
    <Box>
      <Text fontSize={["l", "xl", "2xl"]} fontWeight="bold" w="95%" m="auto">
        Plans for Individuals
      </Text>
      <br />
     {/* {activePlan? <Flex gap="1%" border="1px solid gray" borderRadius={10} px="1%" borderColor="red">
      <Text fontSize='3xl'>Current Plan:{"Basic"}</Text>
      <Text fontSize='3xl'>Name:{"Basic"}</Text>
      <Text fontSize='3xl'>Mobile No:{"6295696481"}</Text>
      <Text fontSize='3xl'> Start:{new Date()}</Text>
      <Text fontSize='3xl'>End:{""}</Text>
      </Flex>:<Heading pl={20} color="red" >No Plan Activated!</Heading>} */}
      <GoldPlan />
      <br />
      <Text fontSize={["l", "xl", "2xl"]} fontWeight="bold" w="95%" m="auto">
        Gift Subscriptions
      </Text>
      <br />
      <GiftSubscription />
      <br />
      <Text fontSize={["l", "xl", "2xl"]} fontWeight="bold" w="95%" m="auto">
        Plans for Professionals
      </Text>
      <br />
      <ProfPlan />
      <br />
      <Enterprise />
      <br />
      <FAQ />
      <br />
    </Box >
    </>
  );
};

export default Plans;
