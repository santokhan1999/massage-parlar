import React from "react";
import SLayout, {
  SHeader,
  SMain,
  STitle,
} from "../section-layout/SectionLayout";
import List, { Item } from "../whatweimport/List";

export default function WhatWePovide({ children }) {
  return (
    <div id="whyChooseUs" className="bg-green-50 relative">
      <SLayout>
        <SHeader>
          <STitle>What we provide?</STitle>
        </SHeader>
        <SMain></SMain>
        <Row>
          <Col>
            <Image src="/images/other/1.webp" />
            <Title>Massage</Title>
          </Col>
          <Col>
            <Image src="/images/other/2.webp" />
            <Title>Relaxation</Title>
          </Col>
          <Col>
            <Image src="/images/other/3.webp" />
            <Title>Cupping Therapy</Title>
          </Col>
          <Col>
            <Image src="/images/other/4.webp" />
            <Title>Hypothyroidism</Title>
          </Col>
          <Col>
            <Image src="/images/other/5.webp" />
            <Title>Rehabilitation</Title>
          </Col>
          <Col>
            <Image src="/images/other/6.webp" />
            <Title>Metatarsalgia</Title>
          </Col>
        </Row>
      </SLayout>
    </div>
  );
}
export function Row({ children, className }) {
  return (
    <div
      className={
        "flex flex-wrap lg:flex-nowrap items-start justify-center rounded-[2rem] p-3 " +
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
        "w-6/12 md:w-3/12 lg:w-2/12 flex flex-col items-center px-4 " +
        className
      }
    >
      {children}
    </div>
  );
}
export function Image({ children, className, src }) {
  return (
    <img
      className={"text-xl font-bold w-24 h-24 object-contain " + className}
      src={src}
      alt="services"
    />
  );
}

export function Title({ children, className }) {
  return (
    <div className={"font-bold py-2 text-center text-[#535353] " + className}>
      {children}
    </div>
  );
}
