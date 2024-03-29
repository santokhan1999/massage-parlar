import React from "react";
import SLayout, { STitle } from "../section-layout/SectionLayout";
import List, { Item } from "../whatweimport/List";

export default function SercviceArea({ children }) {
  return (
    <div id="servicearea" className="bg-green-50 relative">
      <SLayout>
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center">
          <div className="w-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6615.3944198491445!2d149.99984201419164!3d-34.00031035864894!3m2!1i1024!2i768!4f13.1!5e0!3m2!1snl!2sus!4v1674215620532!5m2!1snl!2sus"
              className="h-[360px] aspect-square rounded-full hover:rounded-xl border-2 border-green-500 transition-all ease-in duration-300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
              id="gmap"
            ></iframe>
          </div>
          <div className="w-full px-8 lg:px-8 py-4 rounded-xl">
            <div className="flex flex-col gap-4 relative mb-4">
              <STitle>Our service area</STitle>
              <div className="text-gray-500 text-xl font-medium">
                Have you ever had a massage that makes your body feel relaxed
                and rejuvenated? One that leaves you feeling like you are
                floating on air? That’s exactly what we provide at our service.
              </div>
              <div className="text-gray-500 text-xl font-medium">
                We specialize in providing customers with the best massage
                available, within{" "}
                <span className="font-bold whitespace-nowrap">
                  15 kilometers
                </span>{" "}
                of our location. Our team is made up of certified therapists who
                have years of experience in massage therapy, offering an array
                of treatments to suit your individual needs.
              </div>
            </div>
          </div>
        </div>
      </SLayout>
    </div>
  );
}
export function Row({ children, className }) {
  return (
    <div
      className={
        "flex flex-wrap lg:flex-nowrap items-start rounded-[2rem] p-3 gap-4 " +
        className
      }
    >
      {children}
    </div>
  );
}
export function Col({ children, order, className }) {
  return (
    <div
      className={
        "w-full lg:w-1/3 max-w-sm mx-auto flex flex-col justify-center " +
        className
      }
    >
      {children}
    </div>
  );
}
export function Box({ children, className }) {
  return (
    <div className={"p-5 flex flex-col gap-3 " + className}>{children}</div>
  );
}
export function Title({ children, className }) {
  return (
    <div className={"font-bold py-2 text-center " + className}>{children}</div>
  );
}
export function Image({ children, className, src }) {
  return (
    <img
      className={"text-xl font-bold " + className}
      src={"images/after-sales-services/" + src}
      alt="services"
    />
  );
}
