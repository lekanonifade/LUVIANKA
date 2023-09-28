import React from "react";

export default function Footer() {
    return (
        <div className="flex flex-row flex-wrap md:flex-nowrap p-5 md:p-10 gap-10 lg:py-10 lg:p-24 bg-white">
            <div className="flex flex-col gap-2 w-1/2 lg:w-[60%]">
                <div className="flex flex-row gap-5">
                    <img src="../images/luvianka.svg" alt="" className="w-14" />
                    <img src="../images/redbeer.svg" alt="" className="" />
                </div>
                <p className="text-xs">Is an Argentine company dedicated to the production of salted meats and cured meats, located in the province of Buenos Aires. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quo at, harum rerum sint voluptate officiis et ducimus dolorem nam.</p>
            </div>
            <div className="flex flex-col gap-2 text-sm lg:w-[20%]">
                <p className="font-bold">Company</p>
                <div className="flex flex-col gap-2">
                    <p>Brand</p>
                    <p>Quality</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-1/2 lg:w-[20%]">
                <p className="font-bold">Address</p>
                <div className="flex flex-col gap-2">
                    <p className="text-sm">
                        Lafuente 740 - (1870) Avellaneda
                        Buenos Aires, ARGENTINA
                    </p>
                    <div className="text-sm">
                        <p>(011) 4204-5808</p>
                        <p>(011) 4265-1729</p>
                        <p>(011) 4205-3327</p>
                    </div>
                </div>
            </div>
        </div>
    )
}