import React from "react";
import { Grid, Flexitem } from "./Home.styles.js";
import HomeCard from "./HomeCard.jsx";
import { data, changeTheMode } from "@galleria/core";

function HomeGrid() {
  const dataMap = data.map((item) => (
    <span onClick={() => changeTheMode(false, item.id)}>
      <HomeCard
        src={item.images.thumbnail}
        name={item.name}
        artist={item.artist.name}
        id={item.id}
      />
    </span>
  ));

  return (
    <Grid>
      <Flexitem>
        {dataMap[0]}
        {dataMap[1]}
        {dataMap[2]}
        {dataMap[3]}
      </Flexitem>

      <Flexitem>
        {dataMap[4]}
        {dataMap[5]}
        {dataMap[6]}
        {dataMap[7]}
      </Flexitem>

      <Flexitem>
        {dataMap[8]}
        {dataMap[9]}
        {dataMap[10]}
      </Flexitem>

      <Flexitem>
        {dataMap[11]}
        {dataMap[12]}
        {dataMap[13]}
        {dataMap[14]}
        {dataMap[15]}
      </Flexitem>
    </Grid>
  );
}

export default HomeGrid;
