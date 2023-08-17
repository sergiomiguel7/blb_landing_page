import React, { Fragment } from "react";
import Reservation from "./Reservation";
import Video from "./Video";

export default function ModalsWrapper() {
  return (
    <Fragment>
      <Reservation />
      <Video />
    </Fragment>
  );
}
