import React from "react";

import Order from "./order";
import orderList from "./orderlist";

export default function Orders() {
    return (
        <div className='align-center flex w-full flex-wrap justify-start gap-6 bg-iceblue p-10 align-top'>
            {orderList.map((order) => {
                return <Order order={order} key={order.id} />;
            })}
        </div>
    );
}
