import React, { Fragment, Suspense } from "react";
import Reservation from "./Reservation";
import Video from "./Video";

export default function ModalsWrapper() {
  return (
    <Suspense>
      <Fragment>
        <Reservation />
        <Video />
      </Fragment>
    </Suspense>
  );
}
