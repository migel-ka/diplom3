import React, { useState } from "react";
import { AccordionItem } from "./Accordionitem"; 
import "./index.css";

interface FAQItem {
  q: string;
  a: string;
}

interface AccordionProps {
  faqList: FAQItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ faqList }) => {
  const [openIds, setOpenIds] = useState<number[]>([]);
  const toggleItem = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((openId) => openId !== id) : [...prev, id]
    );
  };

  return (
    <ul className="accordion">
      {faqList.map((faqItem, id) => (
        <AccordionItem
          onClick={() => toggleItem(id)}
          faqItem={faqItem}
          isOpen={openIds.includes(id)}
          key={id}
        />
      ))}
    </ul>
  );
};
