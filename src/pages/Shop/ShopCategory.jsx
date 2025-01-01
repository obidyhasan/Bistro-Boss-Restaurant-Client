import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderItem from "./OrderItem";
import { useParams } from "react-router-dom";

const ShopCategory = () => {
  const { category } = useParams();
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const indexofCategory = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(indexofCategory);

  return (
    <div>
      {/* Tab Layout */}
      <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className={"text-center"}>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <OrderItem categoryFood={"salad"}></OrderItem>
          </TabPanel>
          <TabPanel>
            <OrderItem categoryFood={"pizza"}></OrderItem>
          </TabPanel>
          <TabPanel>
            <OrderItem categoryFood={"soup"}></OrderItem>
          </TabPanel>
          <TabPanel>
            <OrderItem categoryFood={"dessert"}></OrderItem>
          </TabPanel>
          <TabPanel>
            <OrderItem categoryFood={"drinks"}></OrderItem>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopCategory;
