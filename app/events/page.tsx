import React, { FunctionComponent } from "react";

import EventsCard from "@/components/EventsCard";

interface OwnProps {}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {
  return (
    <section>
      <div className="flex flex-col items-center pt-24 justify-center w-full min-h-screen">
        <EventsCard />
      </div>
    </section>
  );
};

export default page;
