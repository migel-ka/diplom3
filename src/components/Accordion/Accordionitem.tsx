import React, { useRef } from 'react';
import AICON from "..//images/main/AIcon.svg";

interface FAQItem {
    q: string;
    a: string;
}

interface AccordionItemProps {
    faqItem: FAQItem;
    onClick: () => void;
    isOpen: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ faqItem, onClick, isOpen }) => {
    const itemRef = useRef<HTMLDivElement | null>(null);

    return (
        <li className="accordion-item">
            <button className="accordion-header" onClick={onClick}>
               <span>{faqItem.q}</span> 
                <img className={`accordion-arrow ${isOpen ? "active" : ""}`} src={AICON} alt="" />
            </button>
            <div className="accordion-collapse" style={
                isOpen ? { height: itemRef.current?.scrollHeight } : { height: "0px" }
            }>
                <p className="accordion-body" ref={itemRef}>{faqItem.a}</p>
            </div>
        </li>
    );
}

